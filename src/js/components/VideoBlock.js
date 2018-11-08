import { css } from '../_helpers';

class VideoBlock {
  constructor() {
    this.$blocks = $('.video-block');

    this.init();
  }

  init() {
    this.play();
  }

  play() {
    this.$blocks.each((i, $block) => {
      const $this = $($block);
      const $btn = $this.find('.video-block__play-btn');
      const $video = $this.find('video');

      $btn.on('click', () => {
        $video[0].play();
        $this.addClass(css.active);
        $video.on('click', () => {
          $video[0].pause();
          $this.removeClass(css.active);
        });
      });
    });
  }
}

export const VideoBlockAPI = new VideoBlock();
