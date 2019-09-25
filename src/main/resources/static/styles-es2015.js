(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*\n  1. Base\n*/\n/*\n  2. Components\n*/\ndiv#white-player {\n  width: 100%;\n  max-width: 375px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  font-family: \"Lato\", sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  position: relative; }\ndiv.white-player-top {\n  height: 64px;\n  display: flex;\n  width: 100%;\n  align-items: center; }\ndiv.white-player-top div {\n    flex: 1; }\ndiv.white-player-top div.center {\n      text-align: center; }\ndiv.white-player-top span.now-playing {\n    color: #414344;\n    font-family: \"Lato\", sans-serif;\n    line-height: 64px;\n    font-weight: 600; }\ndiv.white-player-top img.show-playlist {\n    float: right;\n    cursor: pointer;\n    margin-right: 10px; }\ndiv#white-player-center img.main-album-art {\n  display: block;\n  margin: auto;\n  margin-top: 16px;\n  margin-bottom: 50px;\n  border-radius: 8px;\n  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n  width: 280px;\n  height: 280px; }\ndiv#white-player-center div.song-meta-data span.song-name {\n  color: #414344;\n  display: block;\n  text-align: center;\n  font-size: 20px; }\ndiv#white-player-center div.song-meta-data span.song-artist {\n  color: #AAAFB3;\n  display: block;\n  text-align: center;\n  font-size: 14px; }\ndiv#white-player-center div.time-progress {\n  margin-bottom: 30px; }\ndiv#white-player-center div.time-progress span.current-time {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    float: left;\n    margin-left: 20px; }\ndiv#white-player-center div.time-progress div#progress-container {\n    margin-left: 20px;\n    margin-right: 20px;\n    position: relative;\n    height: 20px;\n    cursor: pointer;\n    /*\n      IE 11\n    */ }\ndiv#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-webkit-slider-thumb {\n      display: block; }\ndiv#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-moz-range-thumb {\n      visibility: visible; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 8px;\n      right: 0;\n      width: 100%;\n      z-index: 60;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      height: 4px;\n      border-radius: 5px;\n      background: transparent;\n      border: none;\n      /* Needed for Firefox */ }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n        color: #FA6733;\n        border: none;\n        background-color: #E1E1E1; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n        color: #FA6733;\n        border: none; } }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-bar {\n      background: none;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-value {\n      background-color: #FA6733;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress::-moz-progress-bar {\n      background: none;\n      border-radius: 5px;\n      background-color: #FA6733;\n      height: 5px;\n      margin-top: -2px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n      position: absolute;\n      left: 0;\n      top: 8px;\n      right: 0;\n      width: 100%;\n      z-index: 10;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      height: 4px;\n      border-radius: 5px;\n      background: transparent;\n      border: none;\n      background-color: #D7DEE3; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-bar {\n      background-color: #E1E1E1;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-value {\n      background-color: #E1E1E1;\n      border-radius: 5px;\n      transition: width .1s ease; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress::-moz-progress-bar {\n      background: none;\n      border-radius: 5px;\n      background-color: #E1E1E1;\n      height: 5px;\n      margin-top: -2px; }\ndiv#white-player-center div.time-progress div#progress-container progress::-ms-fill {\n      border: none; }\n@-moz-document url-prefix() {\n  div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n    top: 9px;\n    border: none; } }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n        color: #78909C;\n        border: none; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n        color: #78909C;\n        border: none; } }\ndiv#white-player-center div.time-progress div#progress-container input[type=range] {\n      -webkit-appearance: none;\n      width: 100%;\n      margin: 7.5px 0;\n      position: absolute;\n      z-index: 9999;\n      top: -7px;\n      height: 20px;\n      cursor: pointer;\n      background-color: inherit; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus {\n      outline: none; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n      background: #FA6733;\n      border-radius: 0px;\n      border: 0px solid #010101; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer;\n      -webkit-appearance: none;\n      margin-top: -7.5px; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-webkit-slider-runnable-track {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n      background: #FA6733;\n      border-radius: 0px;\n      border: 0px solid #010101; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      background: transparent;\n      border-color: transparent;\n      color: transparent; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-lower {\n      background: #003d57;\n      border: 0px solid #010101;\n      border-radius: 0px;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-upper {\n      background: #FA6733;\n      border: 0px solid #010101;\n      border-radius: 0px;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer;\n      height: 0px;\n      display: none; }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=\"range\"].amplitude-song-slider {\n        padding: 0px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {\n        height: 15px;\n        width: 15px;\n        border-radius: 10px;\n        cursor: pointer;\n        margin-top: -8px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-track {\n        border-width: 15px 0;\n        border-color: transparent; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-lower {\n        background: #E1E1E1;\n        border-radius: 10px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-upper {\n        background: #E1E1E1;\n        border-radius: 10px; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {\n        height: 15px;\n        width: 15px;\n        margin-top: 3px; } }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-lower {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-upper {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress span.duration {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    float: right;\n    margin-right: 20px; }\ndiv#white-player-controls {\n  text-align: center;\n  padding-bottom: 35px; }\ndiv#white-player-controls div#shuffle {\n    display: inline-block;\n    width: 19px;\n    height: 16px;\n    cursor: pointer;\n    vertical-align: middle;\n    margin-right: 24px; }\ndiv#white-player-controls div#shuffle.amplitude-shuffle-off {\n      background: url('shuffle-off.svg'); }\ndiv#white-player-controls div#shuffle.amplitude-shuffle-on {\n      background: url('shuffle-on.svg'); }\ndiv#white-player-controls div#previous {\n    display: inline-block;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n    background: url('previous.svg');\n    vertical-align: middle;\n    margin-right: 16px; }\ndiv#white-player-controls div#play-pause {\n    display: inline-block;\n    width: 85px;\n    height: 85px;\n    cursor: pointer;\n    background: url('play.svg'); \n    vertical-align: middle;\n    margin-right: 16px; }\ndiv#white-player-controls div#play-pause.amplitude-paused {\n      background: url('play.svg'); }\ndiv#white-player-controls div#play-pause.amplitude-playing {\n      background: url('pause.svg'); }\ndiv#white-player-controls div#next {\n    display: inline-block;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n    background: url('next.svg');\n    vertical-align: middle;\n    margin-right: 24px; }\ndiv#white-player-controls div#repeat {\n    display: inline-block;\n    width: 18px;\n    height: 16px;\n    cursor: pointer;\n    background: url('repeat-off.svg');\n    vertical-align: middle; }\ndiv#white-player-controls div#repeat.amplitude-repeat-off {\n      background: url('repeat-off.svg'); }\ndiv#white-player-controls div#repeat.amplitude-repeat-on {\n      background: url('repeat-on.svg'); }\ndiv#white-player-playlist-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  z-index: 9999;\n  border-radius: 8px; }\ndiv.white-player-playlist-top {\n  height: 64px;\n  text-align: center;\n  display: flex; }\ndiv.white-player-playlist-top div {\n    flex: 1; }\ndiv.white-player-playlist-top div span.queue {\n      color: #414344;\n      font-family: \"Lato\", sans-serif;\n      line-height: 64px;\n      font-weight: 600; }\ndiv.white-player-playlist-top div img.close-playlist {\n      margin-right: 16px;\n      margin-top: 22px;\n      float: right;\n      cursor: pointer; }\ndiv.white-player-up-next {\n  margin-top: 6px;\n  padding-left: 20px;\n  font-size: 24px;\n  color: #414344; }\ndiv.white-player-playlist {\n  margin-top: 32px;\n  height: calc( 100% - 234px );\n  overflow-y: scroll; }\ndiv.white-player-playlist-song {\n  border-bottom: 1px solid #F5F5F6;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  cursor: pointer; }\ndiv.white-player-playlist-song:hover {\n    background-color: rgba(211, 94, 154, 0.3); }\ndiv.white-player-playlist-song.amplitude-active-song-container {\n    background-color: rgba(238, 100, 82, 0.3); }\ndiv.white-player-playlist-song img {\n    width: 48px;\n    height: 48px;\n    border-radius: 3px;\n    margin-left: 16px;\n    float: left; }\ndiv.white-player-playlist-song div.playlist-song-meta {\n    float: left;\n    margin-left: 15px;\n    /* width: calc( 100% - 80px ); */\n  }\ndiv.white-player-playlist-song div.playlist-song-meta span.playlist-song-name {\n      color: #414344;\n      font-size: 14px;\n      display: block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ndiv.white-player-playlist-song div.playlist-song-meta span.playlist-artist-album {\n      color: #AAAFB3;\n      font-size: 12px;\n      display: block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ndiv.white-player-playlist-song::after {\n  content: \"\";\n  display: table;\n  clear: both; }\ndiv.white-player-playlist-controls {\n  background-color: #F5F5F6;\n  border-radius: 8px;\n  padding: 16px; }\ndiv.white-player-playlist-controls img.playlist-album-art {\n    float: left;\n    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    height: 64px;\n    width: 64px; }\ndiv.white-player-playlist-controls div.playlist-controls {\n    float: left;\n    margin-left: 25px;\n    width: calc( 100% - 89px ); }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data {\n      display: inline-block;\n      width: calc(100% - 125px);\n      vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-name {\n        display: block;\n        color: #414344;\n        font-size: 20px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-artist {\n        display: block;\n        color: #AAAFB3;\n        font-size: 14px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper {\n      text-align: center;\n      margin-top: 10px;\n      display: inline-block;\n      width: 120px;\n      vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-previous {\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        cursor: pointer;\n        background: url('previous.svg');\n        vertical-align: middle;\n        background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause {\n        display: inline-block;\n        width: 32px;\n        height: 32px;\n        cursor: pointer;\n        vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-paused {\n          background: url('play.svg');\n          background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-playing {\n          background: url('pause.svg');\n          background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-next {\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        cursor: pointer;\n        background: url('next.svg');\n        vertical-align: middle;\n        background-size: 32px 32px; }\ndiv.white-player-playlist-controls::after {\n  content: \"\";\n  display: table;\n  clear: both; }\ndiv.song-to-add {\n  width: 45%;\n  padding: 10px;\n  background-color: white;\n  margin: 5px;\n  max-width: 250px; }\ndiv.song-to-add img {\n    border-radius: 6px;\n    /* margin-top: 50px; */\n    width: 100%; }\ndiv.song-to-add a.add-to-playlist-button {\n    background-color: white;\n    color: #CC5CAD;\n    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n    text-align: center;\n    max-width: 150px;\n    border-radius: 6px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin: auto;\n    display: block;\n    margin-top: 10px;\n    font-weight: bold;\n    cursor: pointer; }\n/* Medium only */\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  div.song-to-add {\n    width: 40%;\n    padding: 5px; } }\n/*\n  3. Layout\n*/\nbody {\n  background-image: linear-gradient(-134deg, #C182DC 0%, #FB7C62 94%, #FF7C5B 100%);\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;\n  line-height: 1.5; }\nbody div.container-fluid div.right {\n      width: 100%;\n      display: flex;\n      flex-wrap: wrap;\n    }\n@media screen and (max-width: 39.9375em) {\n  body div.example-container {\n    flex-direction: column; }\n    body div.example-container div.left {\n      width: 100%; }\n    body div.example-container div.right {\n      width: 100%; } }\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  body div.right {\n    padding-left: 20px; } }\n/*\n  4. Pages\n*/\n/*\n  5. Themes\n*/\n/*\n  6. Utils\n*/\n/*\n  7. Vendors\n*/\n/*\n  8. Animations\n*/\n.slide-in-top {\n  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-3-25 18:39:54\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-in-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-in-top {\n  0% {\n    transform: translateY(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n.slide-out-top {\n  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-3-25 18:45:17\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-out-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0; } }\n@keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0; } }\n/*# sourceMappingURL=app.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,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WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKlxuICAxLiBCYXNlXG4qL1xuLypcbiAgMi4gQ29tcG9uZW50c1xuKi9cbmRpdiN3aGl0ZS1wbGF5ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzNzVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItdG9wIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICBkaXYud2hpdGUtcGxheWVyLXRvcCBkaXYge1xuICAgIGZsZXg6IDE7IH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXRvcCBkaXYuY2VudGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICBkaXYud2hpdGUtcGxheWVyLXRvcCBzcGFuLm5vdy1wbGF5aW5nIHtcbiAgICBjb2xvcjogIzQxNDM0NDtcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICBkaXYud2hpdGUtcGxheWVyLXRvcCBpbWcuc2hvdy1wbGF5bGlzdCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuZGl2I3doaXRlLXBsYXllci1jZW50ZXIgaW1nLm1haW4tYWxidW0tYXJ0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHdpZHRoOiAyODBweDtcbiAgaGVpZ2h0OiAyODBweDsgfVxuZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnNvbmctbWV0YS1kYXRhIHNwYW4uc29uZy1uYW1lIHtcbiAgY29sb3I6ICM0MTQzNDQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnNvbmctbWV0YS1kYXRhIHNwYW4uc29uZy1hcnRpc3Qge1xuICBjb2xvcjogI0FBQUZCMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5kaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3Mgc3Bhbi5jdXJyZW50LXRpbWUge1xuICAgIGNvbG9yOiAjQUFBRkIzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLypcbiAgICAgIElFIDExXG4gICAgKi8gfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXI6aG92ZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXI6aG92ZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctcGxheWVkLXByb2dyZXNzIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogOHB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDYwO1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAvKiBOZWVkZWQgZm9yIEZpcmVmb3ggKi8gfVxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1wbGF5ZWQtcHJvZ3Jlc3Mge1xuICAgICAgICBjb2xvcjogI0ZBNjczMztcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFMUUxOyB9IH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1wbGF5ZWQtcHJvZ3Jlc3Mge1xuICAgICAgICBjb2xvcjogI0ZBNjczMztcbiAgICAgICAgYm9yZGVyOiBub25lOyB9IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctcGxheWVkLXByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1wbGF5ZWQtcHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTY3MzM7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctcGxheWVkLXByb2dyZXNzOjotbW96LXByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBNjczMztcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzcyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiA4cHg7XG4gICAgICByaWdodDogMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNEN0RFRTM7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFMUUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFMUUxO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjFzIGVhc2U7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3M6Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTFFMUUxO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzczo6LW1zLWZpbGwge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG5ALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3Mge1xuICAgIHRvcDogOXB4O1xuICAgIGJvcmRlcjogbm9uZTsgfSB9XG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzIHtcbiAgICAgICAgY29sb3I6ICM3ODkwOUM7XG4gICAgICAgIGJvcmRlcjogbm9uZTsgfSB9XG4gICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3Mge1xuICAgICAgICBjb2xvcjogIzc4OTA5QztcbiAgICAgICAgYm9yZGVyOiBub25lOyB9IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiA3LjVweCAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgIHRvcDogLTdweDtcbiAgICAgIGhlaWdodDogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwKSwgMHB4IDBweCAwcHggcmdiYSgxMywgMTMsIDEzLCAwKTtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBib3JkZXI6IDBweCBzb2xpZCAjMDEwMTAxOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGQTY3MzM7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgbWFyZ2luLXRvcDogLTcuNXB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMzsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdHJhY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDBweCAwcHggMHB4IHJnYmEoMTMsIDEzLCAxMywgMCk7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzAxMDEwMTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGQTY3MzM7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC1sb3dlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDAzZDU3O1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzAxMDEwMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDBweCAwcHggMHB4IHJnYmEoMTMsIDEzLCAxMywgMCk7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtZmlsbC11cHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzO1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzAxMDEwMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDBweCAwcHggMHB4IHJnYmEoMTMsIDEzLCAxMywgMCk7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbXMtdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggIzAwMDAwMCwgMHB4IDBweCAwcHggIzBkMGQwZDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGQTY3MzM7XG4gICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICB3aWR0aDogMTVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBkaXNwbGF5OiBub25lOyB9XG4gICAgQG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBub25lKSB7XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPVwicmFuZ2VcIl0uYW1wbGl0dWRlLXNvbmctc2xpZGVyIHtcbiAgICAgICAgcGFkZGluZzogMHB4OyB9XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi1tcy10aHVtYiB7XG4gICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogLThweDsgfVxuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotbXMtdHJhY2sge1xuICAgICAgICBib3JkZXItd2lkdGg6IDE1cHggMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotbXMtZmlsbC1sb3dlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNFMUUxRTE7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LW1zLWZpbGwtdXBwZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9IH1cbiAgICBAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246IGF1dG8pIHtcbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotbXMtdGh1bWIge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7IH0gfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi1tcy1maWxsLWxvd2VyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC11cHBlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzOyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIHNwYW4uZHVyYXRpb24ge1xuICAgIGNvbG9yOiAjQUFBRkIzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbmRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAzNXB4OyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3NodWZmbGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMTlweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNHB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjc2h1ZmZsZS5hbXBsaXR1ZGUtc2h1ZmZsZS1vZmYge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3NodWZmbGUtb2ZmLnN2Z1wiKTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3NodWZmbGUuYW1wbGl0dWRlLXNodWZmbGUtb24ge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3NodWZmbGUtb24uc3ZnXCIpOyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3ByZXZpb3VzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIHdpZHRoOiA1M3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcHJldmlvdXMuc3ZnXCIpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4OyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3BsYXktcGF1c2Uge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogODVweDtcbiAgICBoZWlnaHQ6IDg1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wbGF5LnN2Z1wiKTsgXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNwbGF5LXBhdXNlLmFtcGxpdHVkZS1wYXVzZWQge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3BsYXkuc3ZnXCIpOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcGxheS1wYXVzZS5hbXBsaXR1ZGUtcGxheWluZyB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcGF1c2Uuc3ZnXCIpOyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I25leHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBoZWlnaHQ6IDUzcHg7XG4gICAgd2lkdGg6IDUzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9uZXh0LnN2Z1wiKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMjRweDsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNyZXBlYXQge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMThweDtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9yZXBlYXQtb2ZmLnN2Z1wiKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcmVwZWF0LmFtcGxpdHVkZS1yZXBlYXQtb2ZmIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9yZXBlYXQtb2ZmLnN2Z1wiKTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3JlcGVhdC5hbXBsaXR1ZGUtcmVwZWF0LW9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9yZXBlYXQtb24uc3ZnXCIpOyB9XG5cbmRpdiN3aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiA5OTk5O1xuICBib3JkZXItcmFkaXVzOiA4cHg7IH1cblxuZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC10b3Age1xuICBoZWlnaHQ6IDY0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXRvcCBkaXYge1xuICAgIGZsZXg6IDE7IH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXRvcCBkaXYgc3Bhbi5xdWV1ZSB7XG4gICAgICBjb2xvcjogIzQxNDM0NDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtdG9wIGRpdiBpbWcuY2xvc2UtcGxheWxpc3Qge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXVwLW5leHQge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzQxNDM0NDsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0IHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gMjM0cHggKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRjVGNUY2O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgOTQsIDE1NCwgMC4zKTsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmcuYW1wbGl0dWRlLWFjdGl2ZS1zb25nLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzgsIDEwMCwgODIsIDAuMyk7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nIGltZyB7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBmbG9hdDogbGVmdDsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmcgZGl2LnBsYXlsaXN0LXNvbmctbWV0YSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgLyogd2lkdGg6IGNhbGMoIDEwMCUgLSA4MHB4ICk7ICovXG4gIH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmcgZGl2LnBsYXlsaXN0LXNvbmctbWV0YSBzcGFuLnBsYXlsaXN0LXNvbmctbmFtZSB7XG4gICAgICBjb2xvcjogIzQxNDM0NDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nIGRpdi5wbGF5bGlzdC1zb25nLW1ldGEgc3Bhbi5wbGF5bGlzdC1hcnRpc3QtYWxidW0ge1xuICAgICAgY29sb3I6ICNBQUFGQjM7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmc6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoOyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY2O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDE2cHg7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBpbWcucGxheWxpc3QtYWxidW0tYXJ0IHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgICB3aWR0aDogNjRweDsgfVxuICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSA4OXB4ICk7IH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtbWV0YS1kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMjVweCk7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtbWV0YS1kYXRhIHNwYW4uc29uZy1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjNDE0MzQ0O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtbWV0YS1kYXRhIHNwYW4uc29uZy1hcnRpc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY29sb3I6ICNBQUFGQjM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbC13cmFwcGVyIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMTIwcHg7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbC13cmFwcGVyIGRpdiNwbGF5bGlzdC1wcmV2aW91cyB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcHJldmlvdXMuc3ZnXCIpO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMycHggMzJweDsgfVxuICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2wtd3JhcHBlciBkaXYjcGxheWxpc3QtcGxheS1wYXVzZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyB9XG4gICAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9sLXdyYXBwZXIgZGl2I3BsYXlsaXN0LXBsYXktcGF1c2UuYW1wbGl0dWRlLXBhdXNlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3BsYXkuc3ZnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzJweCAzMnB4OyB9XG4gICAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9sLXdyYXBwZXIgZGl2I3BsYXlsaXN0LXBsYXktcGF1c2UuYW1wbGl0dWRlLXBsYXlpbmcge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wYXVzZS5zdmdcIik7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMnB4IDMycHg7IH1cbiAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9sLXdyYXBwZXIgZGl2I3BsYXlsaXN0LW5leHQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL25leHQuc3ZnXCIpO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMycHggMzJweDsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDsgfVxuXG5kaXYuc29uZy10by1hZGQge1xuICB3aWR0aDogNDUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiA1cHg7XG4gIG1heC13aWR0aDogMjUwcHg7IH1cbiAgZGl2LnNvbmctdG8tYWRkIGltZyB7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIC8qIG1hcmdpbi10b3A6IDUwcHg7ICovXG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgZGl2LnNvbmctdG8tYWRkIGEuYWRkLXRvLXBsYXlsaXN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6ICNDQzVDQUQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi8qIE1lZGl1bSBvbmx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7XG4gIGRpdi5zb25nLXRvLWFkZCB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiA1cHg7IH0gfVxuLypcbiAgMy4gTGF5b3V0XG4qL1xuYm9keSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTM0ZGVnLCAjQzE4MkRDIDAlLCAjRkI3QzYyIDk0JSwgI0ZGN0M1QiAxMDAlKTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsSGVsdmV0aWNhLFJvYm90byxBcmlhbCxzYW5zLXNlcmlmO1xuICBsaW5lLWhlaWdodDogMS41OyB9XG4gICAgYm9keSBkaXYuY29udGFpbmVyLWZsdWlkIGRpdi5yaWdodCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOS45Mzc1ZW0pIHtcbiAgYm9keSBkaXYuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICBib2R5IGRpdi5leGFtcGxlLWNvbnRhaW5lciBkaXYubGVmdCB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIGJvZHkgZGl2LmV4YW1wbGUtY29udGFpbmVyIGRpdi5yaWdodCB7XG4gICAgICB3aWR0aDogMTAwJTsgfSB9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKSBhbmQgKG1heC13aWR0aDogNjMuOTM3NWVtKSB7XG4gIGJvZHkgZGl2LnJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7IH0gfVxuLypcbiAgNC4gUGFnZXNcbiovXG4vKlxuICA1LiBUaGVtZXNcbiovXG4vKlxuICA2LiBVdGlsc1xuKi9cbi8qXG4gIDcuIFZlbmRvcnNcbiovXG4vKlxuICA4LiBBbmltYXRpb25zXG4qL1xuLnNsaWRlLWluLXRvcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1pbi10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbi10b3AgMC41cyBjdWJpYy1iZXppZXIoMC4yNSwgMC40NiwgMC40NSwgMC45NCkgYm90aDsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0zLTI1IDE4OjM5OjU0XG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLWluLXRvcFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpZGUtaW4tdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7IH0gfVxuQGtleWZyYW1lcyBzbGlkZS1pbi10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG4uc2xpZGUtb3V0LXRvcCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzbGlkZS1vdXQtdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNTUsIDAuMDg1LCAwLjY4LCAwLjUzKSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLW91dC10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpIGJvdGg7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogR2VuZXJhdGVkIGJ5IEFuaW1pc3RhIG9uIDIwMTktMy0yNSAxODo0NToxN1xuICogdzogaHR0cDovL2FuaW1pc3RhLm5ldCwgdDogQGNzc2FuaW1pc3RhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIGFuaW1hdGlvbiBzbGlkZS1vdXQtdG9wXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1vdXQtdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuQGtleWZyYW1lcyBzbGlkZS1vdXQtdG9wIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1hcHAuY3NzLm1hcCAqL1xuIl19 */", '', '']]

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