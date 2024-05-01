// ==UserScript==
// @name        Remove Ruby
// @namespace   http://tampermonkey.net/
// @version     1.0
// @description Remove ruby tags in Aozora Bunko
// @author      Your Name
// @match       https://www.aozora.gr.jp/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';
    document.querySelectorAll("rt").forEach(dom => dom.remove());
})();