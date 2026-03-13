/*
  PaperMod v7
  License: MIT https://github.com/adityatelange/hugo-PaperMod/blob/master/LICENSE
  Copyright (c) 2020 nanxiaobei and adityatelange
  Copyright (c) 2021-2024 adityatelange
*/
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.post-content img');
  
  images.forEach(img => {
    img.addEventListener('dblclick', function() {
      const pswpElement = document.querySelector('.pswp');
      if (!pswpElement) {
        const pswpHTML = `
          <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="pswp__bg"></div>
            <div class="pswp__scroll-wrap">
              <div class="pswp__container">
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
                <div class="pswp__item"></div>
              </div>
              <div class="pswp__ui pswp__ui--hidden">
                <div class="pswp__top-bar">
                  <div class="pswp__counter"></div>
                  <button class="pswp__button pswp__button--close" title="Close"></button>
                  <button class="pswp__button pswp__button--share" title="Share"></button>
                  <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                  <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                  <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"></div>
                <div class="pswp__caption">
                  <div class="pswp__caption__center"></div>
                </div>
              </div>
            </div>
          </div>
        `;
        document.body.insertAdjacentHTML('beforeend', pswpHTML);
      }
      
      const items = [{
        src: this.src,
        w: this.naturalWidth,
        h: this.naturalHeight
      }];
      
      const options = {
        index: 0,
        bgOpacity: 0.9,
        showHideOpacity: true
      };
      
      const gallery = new PhotoSwipe(document.querySelector('.pswp'), PhotoSwipeUI_Default, items, options);
      gallery.init();
    });
  });
});