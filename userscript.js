// ==UserScript==
// @name        Remove Ruby
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Remove ruby tags in Aozora Bunko
// @author      Your Name
// @match       https://www.aozora.gr.jp/*
// @grant       none
// @icon　　　　　http://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://www.aozora.gr.jp&size=180
// ==/UserScript==

(function() {
    'use strict';
    
    document.querySelectorAll("rt").forEach(dom => dom.remove());
})();
