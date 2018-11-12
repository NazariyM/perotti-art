import '@fancyapps/fancybox';
import FlipClock from 'flipclock';
import 'jquery-countdown';
import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import { $body, detectIE, $scrolledElements } from './_helpers';

import './components/Header';
import './components/VideoBlock';
import './components/Popups';
import './components/Form';
import './components/Sliders';
import './components/ExpandBlock';

export class Common {
  constructor() {
    this.init();
  }

  init() {
    objectFitImages();
    objectFitVideos();
    this.fancyboxSettings();
    this.addClassIE();
    this.scrollBtn();
    this.initFlipClock();
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

  initFlipClock() {
    const el = document.querySelector('.js-countdown-timer');
    const year = parseInt(el.dataset.year);
    const month = parseInt(el.dataset.month) - 1;
    const day = parseInt(el.dataset.day);
    const date  = new Date(year, month, day);

    new FlipClock(el, date, {
      face: 'DayCounter',
      countdown: true,
      language: {
        dictionary: {
          days: 'дней',
          hours: 'часов',
          minutes: 'минут',
          seconds: 'секунд'
        }
      }
    });

    console.log(`COUNTDOWN DATE: ${date}`);
  }
}

export default new Common();
