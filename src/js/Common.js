import '@fancyapps/fancybox';
import objectFitImages from 'object-fit-images';
import { $body, detectIE, $scrolledElements } from './_helpers';

import './components/Header';
// import './components/Popups';
// import './components/Form';
// import './components/Sliders';
// import './components/CTabs';
import './components/ExpandBlock';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    this.fancyboxSettings();
    this.addClassIE();
    this.scrollBtn();
  }

  addClassIE() {
    if (detectIE()) $body.addClass('is-ie');
  }

  fancyboxSettings() {
    $.fancybox.defaults.animationEffect = 'zoom-in-out';
    $.fancybox.defaults.loop = true;
    $.fancybox.defaults.transitionEffect = 'slide';
  }

  scrollBtn() {
    const $btn = $('.js-scroll-to');
    const $destination = $('.js-scroll-dest');

    $btn.on('click', (e) => {
      e.preventDefault();
      $scrolledElements.animate({
        scrollTop: $destination.offset().top
      }, 1500);
    });
  }
}

export default new Common();
