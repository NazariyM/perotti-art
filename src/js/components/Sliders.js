import 'slick-carousel';
import { svgIcon } from '../_helpers';

class Slider {
  constructor({ el= '.js-slider', slidesToShow = 1, slidesToScroll = 1, ...opts } = {}) {
    this.$slider = $(el);
    this.slidesToShow = slidesToShow;
    this.slidesToScroll = slidesToScroll;
    this.responsive = opts.responsive;
    this.arrows = opts.arrows || false;
    this.infinite = opts.infinite || false;
    this.function = opts.function || false;
    this.dots = opts.dots || false;
    this.dotsClass = opts.dotsClass || 'slider-dots';
    this.appendArrows = opts.appendArrows;
    this.appendDots = opts.appendDots;
    this.speed = opts.speed || 800;
    this.ease = opts.ease;
    this.counter = opts.counter || false;
    this.onInit = opts.onInit || false;
    this.adaptiveHeight = opts.adaptiveHeight || false;

    const iconLeft = svgIcon('angle-left');
    const iconRight = svgIcon('angle-right');

    this.defaultOptions = {
      slidesToShow: this.slidesToShow,
      slidesToScroll: this.slidesToScroll,
      infinite: this.infinite,
      speed: this.speed,
      useTransform: true,
      adaptiveHeight: this.adaptiveHeight,
      accessibility: false,
      swipe: true,
      arrows: this.arrows,
      prevArrow: `<button type="button" class="slider-btn slider-btn_prev">${iconLeft}</button>`,
      nextArrow: `<button type="button" class="slider-btn slider-btn_next">${iconRight}</button>`,
      dots: this.dots,
      dotsClass: this.dotsClass,
      appendArrows: this.appendArrows,
      appendDots: this.appendDots,
      rows: 0,
      responsive: this.responsive,
      cssEase: this.ease
    };

    if (this.$slider.length) this.init();
  }

  init() {
    this.initSlider();
  }

  initSlider() {
    this.$slider.slick($.extend({}, this.defaultOptions));
  }
}

export default new Slider();

const screenSld = new Slider({
  el: '.info-block__slider',
  ease: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
  speed: 1100,
  dotsClass: 'screen__slider-dots slider-dots slider-dots_gray',
  appendArrows: '.screen__slider-controls',
  appendDots: '.screen__slider-controls',
  infinite: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        speed: 800
      }
    }
  ]
});
