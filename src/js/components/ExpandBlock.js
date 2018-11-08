import { TimelineMax } from 'gsap';
import { css, Resp } from '../_helpers';

class ExpandBlock {
  constructor(el) {
    this.container = el;
    this.block = this.container.querySelector('.js-expand-block');
    this.btn = this.container.querySelector('.js-expand-btn');
    this.tl = new TimelineMax();

    if (!this.container) return;

    this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    this.btn.addEventListener('click', this.showMore.bind(this));
  }

  showMore() {
    const currentHeight = this.block.offsetHeight;
    const itemsInRow = Resp.isDesk ? 4 : Resp.isTablet ? 3 : 2;
    const hiddenItems = [...this.block.children].filter((i, x) => x.classList.contains(css.hidden));
    let hiddenItemsHeight = 0;

    for (const item of hiddenItems) hiddenItemsHeight += this.getHiddenElHeight(item);

    this.tl
      .to(this.btn, 0.3, { autoAlpha: 0, y: 30 })
      .to(this.block, 0.3, { height: currentHeight + (hiddenItemsHeight / itemsInRow), className: `+=${css.active}` }, 'hide')
      .to(this.btn.parentNode, 0.4, { visibility: 'hidden', height: 0}, 'hide')
      .set(hiddenItems, { className: `-=${css.hidden}`, autoAlpha: 0, y: 35, display: 'block' })
      .staggerTo(hiddenItems, 0.4, { y: 0, autoAlpha: 1 }, 0.2);
  }

  getHiddenElHeight(el) {
    let el_style = window.getComputedStyle(el),
      el_display = el_style.display,
      el_position = el_style.position,
      el_visibility = el_style.visibility,
      el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),

      wanted_height = 0;

    if(el_display !== 'none' && el_max_height !== '0') {
      return el.offsetHeight;
    }

    el.style.position = 'absolute';
    el.style.visibility = 'hidden';
    el.style.display = 'block';

    wanted_height = el.offsetHeight;

    el.style.display = el_display;
    el.style.position = el_position;
    el.style.visibility = el_visibility;

    return wanted_height;
  }
}

for (const block of document.querySelectorAll('.js-expand-container')) new ExpandBlock(block);
