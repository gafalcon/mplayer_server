(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* You can add global styles to this file, and also import other style files */\n/*\n  1. Base\n*/\n/*\n  2. Components\n*/\ndiv#white-player {\n  width: 100%;\n  max-width: 375px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  font-family: \"Lato\", sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  position: relative; }\ndiv.white-player-top {\n  height: 64px;\n  display: flex;\n  width: 100%;\n  align-items: center; }\ndiv.white-player-top div {\n    flex: 1; }\ndiv.white-player-top div.center {\n      text-align: center; }\ndiv.white-player-top span.now-playing {\n    color: #414344;\n    font-family: \"Lato\", sans-serif;\n    line-height: 64px;\n    font-weight: 600; }\ndiv.white-player-top img.show-playlist {\n    float: right;\n    cursor: pointer;\n    margin-right: 10px; }\ndiv#white-player-center img.main-album-art {\n  display: block;\n  margin: auto;\n  margin-top: 16px;\n  margin-bottom: 50px;\n  border-radius: 8px;\n  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n  width: 280px;\n  height: 280px; }\ndiv#white-player-center div.song-meta-data span.song-name {\n  color: #414344;\n  display: block;\n  text-align: center;\n  font-size: 20px; }\ndiv#white-player-center div.song-meta-data span.song-artist {\n  color: #AAAFB3;\n  display: block;\n  text-align: center;\n  font-size: 14px; }\ndiv#white-player-center div.time-progress {\n  margin-bottom: 30px; }\ndiv#white-player-center div.time-progress span.current-time {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    float: left;\n    margin-left: 20px; }\ndiv#white-player-center div.time-progress div#progress-container {\n    margin-left: 20px;\n    margin-right: 20px;\n    position: relative;\n    height: 20px;\n    cursor: pointer;\n    /*\n      IE 11\n    */ }\ndiv#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-webkit-slider-thumb {\n      display: block; }\ndiv#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-moz-range-thumb {\n      visibility: visible; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 8px;\n      right: 0;\n      width: 100%;\n      z-index: 60;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      height: 4px;\n      border-radius: 5px;\n      background: transparent;\n      border: none;\n      /* Needed for Firefox */ }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n        color: #FA6733;\n        border: none;\n        background-color: #E1E1E1; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n        color: #FA6733;\n        border: none; } }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-bar {\n      background: none;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-value {\n      background-color: #FA6733;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress::-moz-progress-bar {\n      background: none;\n      border-radius: 5px;\n      background-color: #FA6733;\n      height: 5px;\n      margin-top: -2px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n      position: absolute;\n      left: 0;\n      top: 8px;\n      right: 0;\n      width: 100%;\n      z-index: 10;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      height: 4px;\n      border-radius: 5px;\n      background: transparent;\n      border: none;\n      background-color: #D7DEE3; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-bar {\n      background-color: #E1E1E1;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-value {\n      background-color: #E1E1E1;\n      border-radius: 5px;\n      transition: width .1s ease; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress::-moz-progress-bar {\n      background: none;\n      border-radius: 5px;\n      background-color: #E1E1E1;\n      height: 5px;\n      margin-top: -2px; }\ndiv#white-player-center div.time-progress div#progress-container progress::-ms-fill {\n      border: none; }\n@-moz-document url-prefix() {\n  div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n    top: 9px;\n    border: none; } }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n        color: #78909C;\n        border: none; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n        color: #78909C;\n        border: none; } }\ndiv#white-player-center div.time-progress div#progress-container input[type=range] {\n      -webkit-appearance: none;\n      width: 100%;\n      margin: 7.5px 0;\n      position: absolute;\n      z-index: 9999;\n      top: -7px;\n      height: 20px;\n      cursor: pointer;\n      background-color: inherit; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus {\n      outline: none; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n      background: #FA6733;\n      border-radius: 0px;\n      border: 0px solid #010101; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer;\n      -webkit-appearance: none;\n      margin-top: -7.5px; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-webkit-slider-runnable-track {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n      background: #FA6733;\n      border-radius: 0px;\n      border: 0px solid #010101; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      background: transparent;\n      border-color: transparent;\n      color: transparent; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-lower {\n      background: #003d57;\n      border: 0px solid #010101;\n      border-radius: 0px;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-upper {\n      background: #FA6733;\n      border: 0px solid #010101;\n      border-radius: 0px;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer;\n      height: 0px;\n      display: none; }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=\"range\"].amplitude-song-slider {\n        padding: 0px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {\n        height: 15px;\n        width: 15px;\n        border-radius: 10px;\n        cursor: pointer;\n        margin-top: -8px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-track {\n        border-width: 15px 0;\n        border-color: transparent; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-lower {\n        background: #E1E1E1;\n        border-radius: 10px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-upper {\n        background: #E1E1E1;\n        border-radius: 10px; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {\n        height: 15px;\n        width: 15px;\n        margin-top: 3px; } }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-lower {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-upper {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress span.duration {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    float: right;\n    margin-right: 20px; }\ndiv#white-player-controls {\n  text-align: center;\n  padding-bottom: 35px; }\ndiv#white-player-controls div#shuffle {\n    display: inline-block;\n    width: 19px;\n    height: 16px;\n    cursor: pointer;\n    vertical-align: middle;\n    margin-right: 24px; }\ndiv#white-player-controls div#shuffle.amplitude-shuffle-off {\n      background: url('shuffle-off.svg'); }\ndiv#white-player-controls div#shuffle.amplitude-shuffle-on {\n      background: url('shuffle-on.svg'); }\ndiv#white-player-controls div#previous {\n    display: inline-block;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n    background: url('previous.svg');\n    vertical-align: middle;\n    margin-right: 16px; }\ndiv#white-player-controls div#play-pause {\n    display: inline-block;\n    width: 85px;\n    height: 85px;\n    cursor: pointer;\n    background: url('play.svg'); \n    vertical-align: middle;\n    margin-right: 16px; }\ndiv#white-player-controls div#play-pause.amplitude-paused {\n      background: url('play.svg'); }\ndiv#white-player-controls div#play-pause.amplitude-playing {\n      background: url('pause.svg'); }\ndiv#white-player-controls div#next {\n    display: inline-block;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n    background: url('next.svg');\n    vertical-align: middle;\n    margin-right: 24px; }\ndiv#white-player-controls div#repeat {\n    display: inline-block;\n    width: 18px;\n    height: 16px;\n    cursor: pointer;\n    background: url('repeat-off.svg');\n    vertical-align: middle; }\ndiv#white-player-controls div#repeat.amplitude-repeat-off {\n      background: url('repeat-off.svg'); }\ndiv#white-player-controls div#repeat.amplitude-repeat-on {\n      background: url('repeat-on.svg'); }\ndiv#white-player-playlist-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  z-index: 9999;\n  border-radius: 8px; }\ndiv.white-player-playlist-top {\n  height: 64px;\n  text-align: center;\n  display: flex; }\ndiv.white-player-playlist-top div {\n    flex: 1; }\ndiv.white-player-playlist-top div span.queue {\n      color: #414344;\n      font-family: \"Lato\", sans-serif;\n      line-height: 64px;\n      font-weight: 600; }\ndiv.white-player-playlist-top div img.close-playlist {\n      margin-right: 16px;\n      margin-top: 22px;\n      float: right;\n      cursor: pointer; }\ndiv.white-player-up-next {\n  margin-top: 6px;\n  padding-left: 20px;\n  font-size: 24px;\n  color: #414344; }\ndiv.white-player-playlist {\n  margin-top: 32px;\n  height: calc( 100% - 234px );\n  overflow-y: scroll; }\ndiv.white-player-playlist-song {\n  border-bottom: 1px solid #F5F5F6;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  cursor: pointer; }\ndiv.white-player-playlist-song:hover {\n    background-color: rgba(211, 94, 154, 0.3); }\ndiv.white-player-playlist-song.amplitude-active-song-container {\n    background-color: rgba(238, 100, 82, 0.3); }\ndiv.white-player-playlist-song img {\n    width: 48px;\n    height: 48px;\n    border-radius: 3px;\n    margin-left: 16px;\n    float: left; }\ndiv.white-player-playlist-song div.playlist-song-meta {\n    float: left;\n    margin-left: 15px;\n    /* width: calc( 100% - 80px ); */\n  }\ndiv.white-player-playlist-song div.playlist-song-meta span.playlist-song-name {\n      color: #414344;\n      font-size: 14px;\n      display: block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ndiv.white-player-playlist-song div.playlist-song-meta span.playlist-artist-album {\n      color: #AAAFB3;\n      font-size: 12px;\n      display: block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ndiv.white-player-playlist-song::after {\n  content: \"\";\n  display: table;\n  clear: both; }\ndiv.white-player-playlist-controls {\n  background-color: #F5F5F6;\n  border-radius: 8px;\n  padding: 16px; }\ndiv.white-player-playlist-controls img.playlist-album-art {\n    float: left;\n    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    height: 64px;\n    width: 64px; }\ndiv.white-player-playlist-controls div.playlist-controls {\n    float: left;\n    margin-left: 25px;\n    width: calc( 100% - 89px ); }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data {\n      display: inline-block;\n      width: calc(100% - 125px);\n      vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-name {\n        display: block;\n        color: #414344;\n        font-size: 20px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-artist {\n        display: block;\n        color: #AAAFB3;\n        font-size: 14px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper {\n      text-align: center;\n      margin-top: 10px;\n      display: inline-block;\n      width: 120px;\n      vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-previous {\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        cursor: pointer;\n        background: url('previous.svg');\n        vertical-align: middle;\n        background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause {\n        display: inline-block;\n        width: 32px;\n        height: 32px;\n        cursor: pointer;\n        vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-paused {\n          background: url('play.svg');\n          background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-playing {\n          background: url('pause.svg');\n          background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-next {\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        cursor: pointer;\n        background: url('next.svg');\n        vertical-align: middle;\n        background-size: 32px 32px; }\ndiv.white-player-playlist-controls::after {\n  content: \"\";\n  display: table;\n  clear: both; }\ndiv.song-to-add {\n  width: 45%;\n  padding: 10px;\n  background-color: white;\n  margin: 5px;\n  max-width: 250px; }\ndiv.song-to-add img {\n    border-radius: 6px;\n    /* margin-top: 50px; */\n    width: 100%; }\ndiv.song-to-add a.add-to-playlist-button {\n    background-color: white;\n    color: #CC5CAD;\n    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n    text-align: center;\n    max-width: 150px;\n    border-radius: 6px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin: auto;\n    display: block;\n    margin-top: 10px;\n    font-weight: bold;\n    cursor: pointer; }\n/* Medium only */\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  div.song-to-add {\n    width: 40%;\n    padding: 5px; } }\n/*\n  3. Layout\n*/\nbody {\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;\n  line-height: 1.5;\n  background-image: url('https://wallpaperplay.com/walls/full/8/f/f/342814.jpg');\n  /* background-size: cover; */\n  /* background-repeat: no-repeat; */\n  height: 100%;\n  /* font-family: 'Numans', sans-serif; */\n\n}\nbody div.container-fluid div.right {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n}\n@media screen and (max-width: 39.9375em) {\n  body div.example-container {\n    flex-direction: column; }\n    body div.example-container div.left {\n      width: 100%; }\n    body div.example-container div.right {\n      width: 100%; } }\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  body div.right {\n    padding-left: 20px; } }\n/*\n  4. Pages\n*/\n/*\n  5. Themes\n*/\n/*\n  6. Utils\n*/\n/*\n  7. Vendors\n*/\n/*\n  8. Animations\n*/\n.slide-in-top {\n  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-3-25 18:39:54\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-in-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-in-top {\n  0% {\n    transform: translateY(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n.slide-out-top {\n  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-3-25 18:45:17\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-out-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0; } }\n@keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0; } }\n/*# sourceMappingURL=app.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,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QUFFLEVBQUU7QUFFbEIsa0NBQWtDIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLypcbiAgMS4gQmFzZVxuKi9cbi8qXG4gIDIuIENvbXBvbmVudHNcbiovXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bWFucycpO1xuZGl2I3doaXRlLXBsYXllciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM3NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuZGl2LndoaXRlLXBsYXllci10b3Age1xuICBoZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItdG9wIGRpdiB7XG4gICAgZmxleDogMTsgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItdG9wIGRpdi5jZW50ZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItdG9wIHNwYW4ubm93LXBsYXlpbmcge1xuICAgIGNvbG9yOiAjNDE0MzQ0O1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICBmb250LXdlaWdodDogNjAwOyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItdG9wIGltZy5zaG93LXBsYXlsaXN0IHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG5kaXYjd2hpdGUtcGxheWVyLWNlbnRlciBpbWcubWFpbi1hbGJ1bS1hcnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDI4MHB4OyB9XG5kaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYuc29uZy1tZXRhLWRhdGEgc3Bhbi5zb25nLW5hbWUge1xuICBjb2xvcjogIzQxNDM0NDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4OyB9XG5kaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYuc29uZy1tZXRhLWRhdGEgc3Bhbi5zb25nLWFydGlzdCB7XG4gIGNvbG9yOiAjQUFBRkIzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7IH1cbmRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBzcGFuLmN1cnJlbnQtdGltZSB7XG4gICAgY29sb3I6ICNBQUFGQjM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAvKlxuICAgICAgSUUgMTFcbiAgICAqLyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lcjpob3ZlciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lcjpob3ZlciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1wbGF5ZWQtcHJvZ3Jlc3Mge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA4cHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogNjA7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIC8qIE5lZWRlZCBmb3IgRmlyZWZveCAqLyB9XG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLXBsYXllZC1wcm9ncmVzcyB7XG4gICAgICAgIGNvbG9yOiAjRkE2NzMzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUUxRTE7IH0gfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLXBsYXllZC1wcm9ncmVzcyB7XG4gICAgICAgIGNvbG9yOiAjRkE2NzMzO1xuICAgICAgICBib3JkZXI6IG5vbmU7IH0gfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1wbGF5ZWQtcHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLXBsYXllZC1wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjczMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1wbGF5ZWQtcHJvZ3Jlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NzMzO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q3REVFMzsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUUxRTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUUxRTE7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB0cmFuc2l0aW9uOiB3aWR0aCAuMXMgZWFzZTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzczo6LW1vei1wcm9ncmVzcy1iYXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNFMUUxRTE7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzOjotbXMtZmlsbCB7XG4gICAgICBib3JkZXI6IG5vbmU7IH1cbkAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzcyB7XG4gICAgdG9wOiA5cHg7XG4gICAgYm9yZGVyOiBub25lOyB9IH1cbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3Mge1xuICAgICAgICBjb2xvcjogIzc4OTA5QztcbiAgICAgICAgYm9yZGVyOiBub25lOyB9IH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzcyB7XG4gICAgICAgIGNvbG9yOiAjNzg5MDlDO1xuICAgICAgICBib3JkZXI6IG5vbmU7IH0gfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV0ge1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW46IDcuNXB4IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgdG9wOiAtN3B4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDBweCByZ2JhKDEzLCAxMywgMTMsIDApO1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMTAxMDE7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZBNjczMztcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBtYXJnaW4tdG9wOiAtNy41cHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10cmFjayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMHB4IDBweCAwcHggcmdiYSgxMywgMTMsIDEzLCAwKTtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMDEwMTAxOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZBNjczMztcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdHJhY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLWxvd2VyIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMDNkNTc7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMDEwMTAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMHB4IDBweCAwcHggcmdiYSgxMywgMTMsIDEzLCAwKTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMDEwMTAxO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMHB4IDBweCAwcHggcmdiYSgxMywgMTMsIDEzLCAwKTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10aHVtYiB7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAjMDAwMDAwLCAwcHggMHB4IDBweCAjMGQwZDBkO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZBNjczMztcbiAgICAgIGhlaWdodDogMTVweDtcbiAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9XCJyYW5nZVwiXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7IH1cbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LW1zLXRodW1iIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4OyB9XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi1tcy10cmFjayB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMTVweCAwO1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi1tcy1maWxsLWxvd2VyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0UxRTFFMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotbXMtZmlsbC11cHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH0gfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi1tcy10aHVtYiB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDsgfSB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMzsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3Mgc3Bhbi5kdXJhdGlvbiB7XG4gICAgY29sb3I6ICNBQUFGQjM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cblxuZGl2I3doaXRlLXBsYXllci1jb250cm9scyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDM1cHg7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjc2h1ZmZsZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxOXB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNzaHVmZmxlLmFtcGxpdHVkZS1zaHVmZmxlLW9mZiB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvc2h1ZmZsZS1vZmYuc3ZnXCIpOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjc2h1ZmZsZS5hbXBsaXR1ZGUtc2h1ZmZsZS1vbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvc2h1ZmZsZS1vbi5zdmdcIik7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcHJldmlvdXMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgd2lkdGg6IDUzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wcmV2aW91cy5zdmdcIik7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcGxheS1wYXVzZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA4NXB4O1xuICAgIGhlaWdodDogODVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3BsYXkuc3ZnXCIpOyBcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3BsYXktcGF1c2UuYW1wbGl0dWRlLXBhdXNlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcGxheS5zdmdcIik7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNwbGF5LXBhdXNlLmFtcGxpdHVkZS1wbGF5aW5nIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wYXVzZS5zdmdcIik7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjbmV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNTNweDtcbiAgICB3aWR0aDogNTNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL25leHQuc3ZnXCIpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4OyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3JlcGVhdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3JlcGVhdC1vZmYuc3ZnXCIpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNyZXBlYXQuYW1wbGl0dWRlLXJlcGVhdC1vZmYge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3JlcGVhdC1vZmYuc3ZnXCIpOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcmVwZWF0LmFtcGxpdHVkZS1yZXBlYXQtb24ge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3JlcGVhdC1vbi5zdmdcIik7IH1cblxuZGl2I3doaXRlLXBsYXllci1wbGF5bGlzdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXRvcCB7XG4gIGhlaWdodDogNjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4OyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtdG9wIGRpdiB7XG4gICAgZmxleDogMTsgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtdG9wIGRpdiBzcGFuLnF1ZXVlIHtcbiAgICAgIGNvbG9yOiAjNDE0MzQ0O1xuICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwOyB9XG4gICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC10b3AgZGl2IGltZy5jbG9zZS1wbGF5bGlzdCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItdXAtbmV4dCB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNDE0MzQ0OyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBoZWlnaHQ6IGNhbGMoIDEwMCUgLSAyMzRweCApO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cblxuZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjY7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmc6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCA5NCwgMTU0LCAwLjMpOyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZy5hbXBsaXR1ZGUtYWN0aXZlLXNvbmctY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMTAwLCA4MiwgMC4zKTsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmcgaW1nIHtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIGZsb2F0OiBsZWZ0OyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZyBkaXYucGxheWxpc3Qtc29uZy1tZXRhIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAvKiB3aWR0aDogY2FsYyggMTAwJSAtIDgwcHggKTsgKi9cbiAgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZyBkaXYucGxheWxpc3Qtc29uZy1tZXRhIHNwYW4ucGxheWxpc3Qtc29uZy1uYW1lIHtcbiAgICAgIGNvbG9yOiAjNDE0MzQ0O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmcgZGl2LnBsYXlsaXN0LXNvbmctbWV0YSBzcGFuLnBsYXlsaXN0LWFydGlzdC1hbGJ1bSB7XG4gICAgICBjb2xvcjogI0FBQUZCMztcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZzo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7IH1cblxuZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTZweDsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGltZy5wbGF5bGlzdC1hbGJ1bS1hcnQge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJveC1zaGFkb3c6IDBweCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIHdpZHRoOiA2NHB4OyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDg5cHggKTsgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1tZXRhLWRhdGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEyNXB4KTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1tZXRhLWRhdGEgc3Bhbi5zb25nLW5hbWUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICM0MTQzNDQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1tZXRhLWRhdGEgc3Bhbi5zb25nLWFydGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogI0FBQUZCMztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9sLXdyYXBwZXIge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9sLXdyYXBwZXIgZGl2I3BsYXlsaXN0LXByZXZpb3VzIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wcmV2aW91cy5zdmdcIik7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzJweCAzMnB4OyB9XG4gICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbC13cmFwcGVyIGRpdiNwbGF5bGlzdC1wbGF5LXBhdXNlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IH1cbiAgICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2wtd3JhcHBlciBkaXYjcGxheWxpc3QtcGxheS1wYXVzZS5hbXBsaXR1ZGUtcGF1c2VkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcGxheS5zdmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMnB4IDMycHg7IH1cbiAgICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2wtd3JhcHBlciBkaXYjcGxheWxpc3QtcGxheS1wYXVzZS5hbXBsaXR1ZGUtcGxheWluZyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3BhdXNlLnN2Z1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMycHggMzJweDsgfVxuICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2wtd3JhcHBlciBkaXYjcGxheWxpc3QtbmV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvbmV4dC5zdmdcIik7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzJweCAzMnB4OyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHM6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoOyB9XG5cbmRpdi5zb25nLXRvLWFkZCB7XG4gIHdpZHRoOiA0NSU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbiAgbWF4LXdpZHRoOiAyNTBweDsgfVxuICBkaXYuc29uZy10by1hZGQgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgLyogbWFyZ2luLXRvcDogNTBweDsgKi9cbiAgICB3aWR0aDogMTAwJTsgfVxuICBkaXYuc29uZy10by1hZGQgYS5hZGQtdG8tcGxheWxpc3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogI0NDNUNBRDtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyogTWVkaXVtIG9ubHkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHtcbiAgZGl2LnNvbmctdG8tYWRkIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6IDVweDsgfSB9XG4vKlxuICAzLiBMYXlvdXRcbiovXG5ib2R5IHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC84L2YvZi8zNDI4MTQuanBnJyk7XG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gIGhlaWdodDogMTAwJTtcbiAgLyogZm9udC1mYW1pbHk6ICdOdW1hbnMnLCBzYW5zLXNlcmlmOyAqL1xuXG59XG5ib2R5IGRpdi5jb250YWluZXItZmx1aWQgZGl2LnJpZ2h0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzkuOTM3NWVtKSB7XG4gIGJvZHkgZGl2LmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgYm9keSBkaXYuZXhhbXBsZS1jb250YWluZXIgZGl2LmxlZnQge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICBib2R5IGRpdi5leGFtcGxlLWNvbnRhaW5lciBkaXYucmlnaHQge1xuICAgICAgd2lkdGg6IDEwMCU7IH0gfVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSkgYW5kIChtYXgtd2lkdGg6IDYzLjkzNzVlbSkge1xuICBib2R5IGRpdi5yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyB9IH1cbi8qXG4gIDQuIFBhZ2VzXG4qL1xuLypcbiAgNS4gVGhlbWVzXG4qL1xuLypcbiAgNi4gVXRpbHNcbiovXG4vKlxuICA3LiBWZW5kb3JzXG4qL1xuLypcbiAgOC4gQW5pbWF0aW9uc1xuKi9cbi5zbGlkZS1pbi10b3Age1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtaW4tdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4tdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpIGJvdGg7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMy0yNSAxODozOTo1NFxuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS1pbi10b3BcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cbkBrZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuLnNsaWRlLW91dC10b3Age1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2xpZGUtb3V0LXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41MykgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTMtMjUgMTg6NDU6MTdcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtb3V0LXRvcFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtb3V0LXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwOyB9IH1cbkBrZXlmcmFtZXMgc2xpZGUtb3V0LXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwOyB9IH1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9YXBwLmNzcy5tYXAgKi9cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/Shared/Documents/Web/mplayer/src/styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map