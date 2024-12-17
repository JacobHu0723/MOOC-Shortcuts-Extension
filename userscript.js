// ==UserScript==
// @name         MOOC-Shortcuts-Extension
// @namespace    http://tampermonkey.net/
// @version      2024-12-17
// @description  中国大学MOOC补全快进和全屏快捷键
// @author       Jacob Hu
// @match        https://www.icourse163.org/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var MyRate = 1;
    var MyKeyDownFlag = 0;
    document.onkeydown = function(event)
    {
        if (event.keyCode == 190)
        {
            if (MyKeyDownFlag == 0)
            {
                MyRate = document.querySelector('video').playbackRate;
                MyKeyDownFlag = 1;
            }
            document.querySelector('video').playbackRate = 3;
        }

        if (event.keyCode == 70)
        {
            document.getElementsByClassName("u-edu-h5player-icon icon-fullscreen")[0].click();
        }
    }
    document.onkeyup = function(event)
    {
    if (event.keyCode == 190)
        {
            document.querySelector('video').playbackRate = MyRate;
            MyKeyDownFlag = 0;
        }
    }

    // Your code here...
})();