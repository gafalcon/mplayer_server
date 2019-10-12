(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url('https://fonts.googleapis.com/css?family=Numans');\n/* You can add global styles to this file, and also import other style files */\n/*\n  1. Base\n*/\n/*\n  2. Components\n*/\ndiv#white-player {\n  width: 100%;\n  max-width: 375px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  font-family: \"Lato\", sans-serif;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 50px;\n  position: relative; }\ndiv.white-player-top {\n  height: 64px;\n  display: flex;\n  width: 100%;\n  align-items: center; }\ndiv.white-player-top div {\n    flex: 1; }\ndiv.white-player-top div.center {\n      text-align: center; }\ndiv.white-player-top span.now-playing {\n    color: #414344;\n    font-family: \"Lato\", sans-serif;\n    line-height: 64px;\n    font-weight: 600; }\ndiv.white-player-top img.show-playlist {\n    float: right;\n    cursor: pointer;\n    margin-right: 10px; }\ndiv#white-player-center img.main-album-art {\n  display: block;\n  margin: auto;\n  margin-top: 16px;\n  margin-bottom: 50px;\n  border-radius: 8px;\n  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n  width: 280px;\n  height: 280px; }\ndiv#white-player-center div.song-meta-data span.song-name {\n  color: #414344;\n  display: block;\n  text-align: center;\n  font-size: 20px; }\ndiv#white-player-center div.song-meta-data span.song-artist {\n  color: #AAAFB3;\n  display: block;\n  text-align: center;\n  font-size: 14px; }\ndiv#white-player-center div.time-progress {\n  margin-bottom: 30px; }\ndiv#white-player-center div.time-progress span.current-time {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    float: left;\n    margin-left: 20px; }\ndiv#white-player-center div.time-progress div#progress-container {\n    margin-left: 20px;\n    margin-right: 20px;\n    position: relative;\n    height: 20px;\n    cursor: pointer;\n    /*\n      IE 11\n    */ }\ndiv#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-webkit-slider-thumb {\n      display: block; }\ndiv#white-player-center div.time-progress div#progress-container:hover input[type=range].amplitude-song-slider::-moz-range-thumb {\n      visibility: visible; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n      width: 100%;\n      position: absolute;\n      left: 0;\n      top: 8px;\n      right: 0;\n      width: 100%;\n      z-index: 60;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      height: 4px;\n      border-radius: 5px;\n      background: transparent;\n      border: none;\n      /* Needed for Firefox */ }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n        color: #FA6733;\n        border: none;\n        background-color: #E1E1E1; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container progress#song-played-progress {\n        color: #FA6733;\n        border: none; } }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-bar {\n      background: none;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress[value]::-webkit-progress-value {\n      background-color: #FA6733;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-played-progress::-moz-progress-bar {\n      background: none;\n      border-radius: 5px;\n      background-color: #FA6733;\n      height: 5px;\n      margin-top: -2px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n      position: absolute;\n      left: 0;\n      top: 8px;\n      right: 0;\n      width: 100%;\n      z-index: 10;\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      height: 4px;\n      border-radius: 5px;\n      background: transparent;\n      border: none;\n      background-color: #D7DEE3; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-bar {\n      background-color: #E1E1E1;\n      border-radius: 5px; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress[value]::-webkit-progress-value {\n      background-color: #E1E1E1;\n      border-radius: 5px;\n      transition: width .1s ease; }\ndiv#white-player-center div.time-progress div#progress-container progress#song-buffered-progress::-moz-progress-bar {\n      background: none;\n      border-radius: 5px;\n      background-color: #E1E1E1;\n      height: 5px;\n      margin-top: -2px; }\ndiv#white-player-center div.time-progress div#progress-container progress::-ms-fill {\n      border: none; }\n@-moz-document url-prefix() {\n  div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n    top: 9px;\n    border: none; } }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n        color: #78909C;\n        border: none; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container progress#song-buffered-progress {\n        color: #78909C;\n        border: none; } }\ndiv#white-player-center div.time-progress div#progress-container input[type=range] {\n      -webkit-appearance: none;\n      width: 100%;\n      margin: 7.5px 0;\n      position: absolute;\n      z-index: 9999;\n      top: -7px;\n      height: 20px;\n      cursor: pointer;\n      background-color: inherit; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus {\n      outline: none; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-runnable-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n      background: #FA6733;\n      border-radius: 0px;\n      border: 0px solid #010101; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-webkit-slider-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer;\n      -webkit-appearance: none;\n      margin-top: -7.5px; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-webkit-slider-runnable-track {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\n      background: #FA6733;\n      border-radius: 0px;\n      border: 0px solid #010101; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-moz-range-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-track {\n      width: 100%;\n      height: 0px;\n      cursor: pointer;\n      background: transparent;\n      border-color: transparent;\n      color: transparent; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-lower {\n      background: #003d57;\n      border: 0px solid #010101;\n      border-radius: 0px;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-fill-upper {\n      background: #FA6733;\n      border: 0px solid #010101;\n      border-radius: 0px;\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0); }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]::-ms-thumb {\n      box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;\n      border: 1px solid #FA6733;\n      height: 15px;\n      width: 15px;\n      border-radius: 16px;\n      background: #FA6733;\n      cursor: pointer;\n      height: 0px;\n      display: none; }\n@media all and (-ms-high-contrast: none) {\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=\"range\"].amplitude-song-slider {\n        padding: 0px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {\n        height: 15px;\n        width: 15px;\n        border-radius: 10px;\n        cursor: pointer;\n        margin-top: -8px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-track {\n        border-width: 15px 0;\n        border-color: transparent; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-lower {\n        background: #E1E1E1;\n        border-radius: 10px; }\n      div#white-player-center div.time-progress div#progress-container *::-ms-backdrop, div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-fill-upper {\n        background: #E1E1E1;\n        border-radius: 10px; } }\n@supports (-ms-ime-align: auto) {\n      div#white-player-center div.time-progress div#progress-container input[type=range].amplitude-song-slider::-ms-thumb {\n        height: 15px;\n        width: 15px;\n        margin-top: 3px; } }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-lower {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress div#progress-container input[type=range]:focus::-ms-fill-upper {\n      background: #FA6733; }\ndiv#white-player-center div.time-progress span.duration {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    float: right;\n    margin-right: 20px; }\ndiv#white-player-controls {\n  text-align: center;\n  padding-bottom: 35px; }\ndiv#white-player-controls div#shuffle {\n    display: inline-block;\n    width: 19px;\n    height: 16px;\n    cursor: pointer;\n    vertical-align: middle;\n    margin-right: 24px; }\ndiv#white-player-controls div#shuffle.amplitude-shuffle-off {\n      background: url('shuffle-off.svg'); }\ndiv#white-player-controls div#shuffle.amplitude-shuffle-on {\n      background: url('shuffle-on.svg'); }\ndiv#white-player-controls div#previous {\n    display: inline-block;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n    background: url('previous.svg');\n    vertical-align: middle;\n    margin-right: 16px; }\ndiv#white-player-controls div#play-pause {\n    display: inline-block;\n    width: 85px;\n    height: 85px;\n    cursor: pointer;\n    background: url('play.svg'); \n    vertical-align: middle;\n    margin-right: 16px; }\ndiv#white-player-controls div#play-pause.amplitude-paused {\n      background: url('play.svg'); }\ndiv#white-player-controls div#play-pause.amplitude-playing {\n      background: url('pause.svg'); }\ndiv#white-player-controls div#next {\n    display: inline-block;\n    height: 53px;\n    width: 53px;\n    cursor: pointer;\n    background: url('next.svg');\n    vertical-align: middle;\n    margin-right: 24px; }\ndiv#white-player-controls div#repeat {\n    display: inline-block;\n    width: 18px;\n    height: 16px;\n    cursor: pointer;\n    background: url('repeat-off.svg');\n    vertical-align: middle; }\ndiv#white-player-controls div#repeat.amplitude-repeat-off {\n      background: url('repeat-off.svg'); }\ndiv#white-player-controls div#repeat.amplitude-repeat-on {\n      background: url('repeat-on.svg'); }\ndiv#white-player-playlist-container {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  z-index: 9999;\n  border-radius: 8px; }\ndiv.white-player-playlist-top {\n  height: 64px;\n  text-align: center;\n  display: flex; }\ndiv.white-player-playlist-top div {\n    flex: 1; }\ndiv.white-player-playlist-top div span.queue {\n      color: #414344;\n      font-family: \"Lato\", sans-serif;\n      line-height: 64px;\n      font-weight: 600; }\ndiv.white-player-playlist-top div img.close-playlist {\n      margin-right: 16px;\n      margin-top: 22px;\n      float: right;\n      cursor: pointer; }\ndiv.white-player-up-next {\n  margin-top: 6px;\n  padding-left: 20px;\n  font-size: 24px;\n  color: #414344; }\ndiv.white-player-playlist {\n  margin-top: 32px;\n  height: calc( 100% - 234px );\n  overflow-y: scroll; }\ndiv.white-player-playlist-song {\n  border-bottom: 1px solid #F5F5F6;\n  padding-top: 8px;\n  padding-bottom: 8px;\n  cursor: pointer; }\ndiv.white-player-playlist-song:hover {\n    background-color: rgba(211, 94, 154, 0.3); }\ndiv.white-player-playlist-song.amplitude-active-song-container {\n    background-color: rgba(238, 100, 82, 0.3); }\ndiv.white-player-playlist-song img {\n    width: 48px;\n    height: 48px;\n    border-radius: 3px;\n    margin-left: 16px;\n    float: left; }\ndiv.white-player-playlist-song div.playlist-song-meta {\n    float: left;\n    margin-left: 15px;\n    /* width: calc( 100% - 80px ); */\n  }\ndiv.white-player-playlist-song div.playlist-song-meta span.playlist-song-name {\n      color: #414344;\n      font-size: 14px;\n      display: block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ndiv.white-player-playlist-song div.playlist-song-meta span.playlist-artist-album {\n      color: #AAAFB3;\n      font-size: 12px;\n      display: block;\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ndiv.white-player-playlist-song::after {\n  content: \"\";\n  display: table;\n  clear: both; }\ndiv.white-player-playlist-controls {\n  background-color: #F5F5F6;\n  border-radius: 8px;\n  padding: 16px; }\ndiv.white-player-playlist-controls img.playlist-album-art {\n    float: left;\n    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n    border-radius: 4px;\n    height: 64px;\n    width: 64px; }\ndiv.white-player-playlist-controls div.playlist-controls {\n    float: left;\n    margin-left: 25px;\n    width: calc( 100% - 89px ); }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data {\n      display: inline-block;\n      width: calc(100% - 125px);\n      vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-name {\n        display: block;\n        color: #414344;\n        font-size: 20px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-meta-data span.song-artist {\n        display: block;\n        color: #AAAFB3;\n        font-size: 14px;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper {\n      text-align: center;\n      margin-top: 10px;\n      display: inline-block;\n      width: 120px;\n      vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-previous {\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        cursor: pointer;\n        background: url('previous.svg');\n        vertical-align: middle;\n        background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause {\n        display: inline-block;\n        width: 32px;\n        height: 32px;\n        cursor: pointer;\n        vertical-align: middle; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-paused {\n          background: url('play.svg');\n          background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-play-pause.amplitude-playing {\n          background: url('pause.svg');\n          background-size: 32px 32px; }\ndiv.white-player-playlist-controls div.playlist-controls div.playlist-control-wrapper div#playlist-next {\n        display: inline-block;\n        height: 32px;\n        width: 32px;\n        cursor: pointer;\n        background: url('next.svg');\n        vertical-align: middle;\n        background-size: 32px 32px; }\ndiv.white-player-playlist-controls::after {\n  content: \"\";\n  display: table;\n  clear: both; }\n/*\n  3. Layout\n*/\nbody {\n  -webkit-font-smoothing: antialiased;\n  font-family: \"Helvetica Neue\",Helvetica,Roboto,Arial,sans-serif;\n  line-height: 1.5;\n  background-image: url('https://wallpaperplay.com/walls/full/8/f/f/342814.jpg');\n  /* background-size: cover; */\n  /* background-repeat: no-repeat; */\n  height: 100%;\n  /* font-family: 'Numans', sans-serif; */\n\n}\nbody div.container-fluid div.right {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n}\n@media screen and (max-width: 39.9375em) {\n  body div.example-container {\n    flex-direction: column; }\n    body div.example-container div.left {\n      width: 100%; }\n    body div.example-container div.right {\n      width: 100%; } }\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n  body div.right {\n    padding-left: 20px; } }\n/*\n  4. Pages\n*/\n/*\n  5. Themes\n*/\n/*\n  6. Utils\n*/\n/*\n  7. Vendors\n*/\n/*\n  8. Animations\n*/\n.slide-in-top {\n  -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;\n  animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-3-25 18:39:54\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-in-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-in-top {\n  0% {\n    transform: translateY(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n@keyframes slide-in-top {\n  0% {\n    transform: translateY(-10px);\n    opacity: 0; }\n  100% {\n    transform: translateY(0);\n    opacity: 1; } }\n.slide-out-top {\n  -webkit-animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;\n  animation: slide-out-top 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both; }\n/* ----------------------------------------------\n * Generated by Animista on 2019-3-25 18:45:17\n * w: http://animista.net, t: @cssanimista\n * ---------------------------------------------- */\n/**\n * ----------------------------------------\n * animation slide-out-top\n * ----------------------------------------\n */\n@-webkit-keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0; } }\n@keyframes slide-out-top {\n  0% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-10px);\n    opacity: 0; } }\n/*# sourceMappingURL=app.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFPQSw2REFBNkQ7QUFQN0QsOEVBQThFO0FBQzlFOztDQUVDO0FBQ0Q7O0NBRUM7QUFFRDtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFFO0FBRXRCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CLEVBQUU7QUFDckI7SUFDRSxPQUFPLEVBQUU7QUFDVDtNQUNFLGtCQUFrQixFQUFFO0FBQ3hCO0lBQ0UsY0FBYztJQUNkLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUU7QUFDcEI7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQixFQUFFO0FBRXhCO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsWUFBWTtFQUNaLGFBQWEsRUFBRTtBQUNqQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBRTtBQUNuQjtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBRTtBQUNuQjtFQUNFLG1CQUFtQixFQUFFO0FBQ3JCO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLGlCQUFpQixFQUFFO0FBQ3JCO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZjs7S0FFQyxFQUFFO0FBQ0g7TUFDRSxjQUFjLEVBQUU7QUFDbEI7TUFDRSxtQkFBbUIsRUFBRTtBQUN2QjtNQUNFLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsT0FBTztNQUNQLFFBQVE7TUFDUixRQUFRO01BQ1IsV0FBVztNQUNYLFdBQVc7TUFDWCx3QkFBd0I7TUFDeEIscUJBQXFCO01BQ3JCLGdCQUFnQjtNQUNoQixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLHVCQUF1QjtNQUN2QixZQUFZO01BQ1osdUJBQXVCLEVBQUU7QUFDM0I7TUFDRTtRQUNFLGNBQWM7UUFDZCxZQUFZO1FBQ1oseUJBQXlCLEVBQUUsRUFBRTtBQUNqQztNQUNFO1FBQ0UsY0FBYztRQUNkLFlBQVksRUFBRSxFQUFFO0FBQ3BCO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFFO0FBQ3RCO01BQ0UseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFFO0FBQ3RCO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsV0FBVztNQUNYLGdCQUFnQixFQUFFO0FBQ3BCO01BQ0Usa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxRQUFRO01BQ1IsUUFBUTtNQUNSLFdBQVc7TUFDWCxXQUFXO01BQ1gsd0JBQXdCO01BQ3hCLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix1QkFBdUI7TUFDdkIsWUFBWTtNQUNaLHlCQUF5QixFQUFFO0FBQzdCO01BQ0UseUJBQXlCO01BQ3pCLGtCQUFrQixFQUFFO0FBQ3RCO01BQ0UseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUNsQiwwQkFBMEIsRUFBRTtBQUM5QjtNQUNFLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCxnQkFBZ0IsRUFBRTtBQUNwQjtNQUNFLFlBQVksRUFBRTtBQUNwQjtFQUNFO0lBQ0UsUUFBUTtJQUNSLFlBQVksRUFBRSxFQUFFO0FBQ2hCO01BQ0U7UUFDRSxjQUFjO1FBQ2QsWUFBWSxFQUFFLEVBQUU7QUFDcEI7TUFDRTtRQUNFLGNBQWM7UUFDZCxZQUFZLEVBQUUsRUFBRTtBQUNwQjtNQUNFLHdCQUF3QjtNQUN4QixXQUFXO01BQ1gsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsU0FBUztNQUNULFlBQVk7TUFDWixlQUFlO01BQ2YseUJBQXlCLEVBQUU7QUFDN0I7TUFDRSxhQUFhLEVBQUU7QUFDakI7TUFDRSxXQUFXO01BQ1gsV0FBVztNQUNYLGVBQWU7TUFDZix5RUFBeUU7TUFDekUsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQix5QkFBeUIsRUFBRTtBQUM3QjtNQUNFLG9EQUFvRDtNQUNwRCx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CLGVBQWU7TUFDZix3QkFBd0I7TUFDeEIsa0JBQWtCLEVBQUU7QUFDdEI7TUFDRSxtQkFBbUIsRUFBRTtBQUN2QjtNQUNFLFdBQVc7TUFDWCxXQUFXO01BQ1gsZUFBZTtNQUNmLHlFQUF5RTtNQUN6RSxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFFO0FBQzdCO01BQ0Usb0RBQW9EO01BQ3BELHlCQUF5QjtNQUN6QixZQUFZO01BQ1osV0FBVztNQUNYLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZUFBZSxFQUFFO0FBQ25CO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxlQUFlO01BQ2YsdUJBQXVCO01BQ3ZCLHlCQUF5QjtNQUN6QixrQkFBa0IsRUFBRTtBQUN0QjtNQUNFLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIsa0JBQWtCO01BQ2xCLHlFQUF5RSxFQUFFO0FBQzdFO01BQ0UsbUJBQW1CO01BQ25CLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIseUVBQXlFLEVBQUU7QUFDN0U7TUFDRSxvREFBb0Q7TUFDcEQseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixXQUFXO01BQ1gsbUJBQW1CO01BQ25CLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsV0FBVztNQUNYLGFBQWEsRUFBRTtBQUNqQjtNQUNFO1FBQ0UsWUFBWSxFQUFFO01BQ2hCO1FBQ0UsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGdCQUFnQixFQUFFO01BQ3BCO1FBQ0Usb0JBQW9CO1FBQ3BCLHlCQUF5QixFQUFFO01BQzdCO1FBQ0UsbUJBQW1CO1FBQ25CLG1CQUFtQixFQUFFO01BQ3ZCO1FBQ0UsbUJBQW1CO1FBQ25CLG1CQUFtQixFQUFFLEVBQUU7QUFDM0I7TUFDRTtRQUNFLFlBQVk7UUFDWixXQUFXO1FBQ1gsZUFBZSxFQUFFLEVBQUU7QUFDdkI7TUFDRSxtQkFBbUIsRUFBRTtBQUN2QjtNQUNFLG1CQUFtQixFQUFFO0FBQ3pCO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQixFQUFFO0FBRXhCO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQixFQUFFO0FBQ3RCO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBRTtBQUNwQjtNQUNFLGtDQUErQyxFQUFFO0FBQ25EO01BQ0UsaUNBQThDLEVBQUU7QUFDcEQ7SUFDRSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsK0JBQTRDO0lBQzVDLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBRTtBQUN0QjtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZiwyQkFBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFFO0FBQ3BCO01BQ0UsMkJBQXdDLEVBQUU7QUFDNUM7TUFDRSw0QkFBeUMsRUFBRTtBQUMvQztJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZiwyQkFBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLGtCQUFrQixFQUFFO0FBQ3RCO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlDQUE4QztJQUM5QyxzQkFBc0IsRUFBRTtBQUN4QjtNQUNFLGlDQUE4QyxFQUFFO0FBQ2xEO01BQ0UsZ0NBQTZDLEVBQUU7QUFFckQ7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWEsRUFBRTtBQUNmO0lBQ0UsT0FBTyxFQUFFO0FBQ1Q7TUFDRSxjQUFjO01BQ2QsK0JBQStCO01BQy9CLGlCQUFpQjtNQUNqQixnQkFBZ0IsRUFBRTtBQUNwQjtNQUNFLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLGVBQWUsRUFBRTtBQUV2QjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWMsRUFBRTtBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsa0JBQWtCLEVBQUU7QUFFdEI7RUFDRSxnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlLEVBQUU7QUFDakI7SUFDRSx5Q0FBeUMsRUFBRTtBQUM3QztJQUNFLHlDQUF5QyxFQUFFO0FBQzdDO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVcsRUFBRTtBQUNmO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQ0FBZ0M7RUFDbEM7QUFDRTtNQUNFLGNBQWM7TUFDZCxlQUFlO01BQ2YsY0FBYztNQUNkLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFO0FBQzNCO01BQ0UsY0FBYztNQUNkLGVBQWU7TUFDZixjQUFjO01BQ2QsV0FBVztNQUNYLG1CQUFtQjtNQUNuQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUU7QUFFL0I7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFdBQVcsRUFBRTtBQUVmO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhLEVBQUU7QUFDZjtJQUNFLFdBQVc7SUFDWCw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXLEVBQUU7QUFDZjtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsMEJBQTBCLEVBQUU7QUFDNUI7TUFDRSxxQkFBcUI7TUFDckIseUJBQXlCO01BQ3pCLHNCQUFzQixFQUFFO0FBQ3hCO1FBQ0UsY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQix1QkFBdUIsRUFBRTtBQUMzQjtRQUNFLGNBQWM7UUFDZCxjQUFjO1FBQ2QsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsdUJBQXVCLEVBQUU7QUFDN0I7TUFDRSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osc0JBQXNCLEVBQUU7QUFDeEI7UUFDRSxxQkFBcUI7UUFDckIsWUFBWTtRQUNaLFdBQVc7UUFDWCxlQUFlO1FBQ2YsK0JBQTRDO1FBQzVDLHNCQUFzQjtRQUN0QiwwQkFBMEIsRUFBRTtBQUM5QjtRQUNFLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGVBQWU7UUFDZixzQkFBc0IsRUFBRTtBQUN4QjtVQUNFLDJCQUF3QztVQUN4QywwQkFBMEIsRUFBRTtBQUM5QjtVQUNFLDRCQUF5QztVQUN6QywwQkFBMEIsRUFBRTtBQUNoQztRQUNFLHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osV0FBVztRQUNYLGVBQWU7UUFDZiwyQkFBd0M7UUFDeEMsc0JBQXNCO1FBQ3RCLDBCQUEwQixFQUFFO0FBRXBDO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXLEVBQUU7QUFFZjs7Q0FFQztBQUNEO0VBQ0UsbUNBQW1DO0VBQ25DLCtEQUErRDtFQUMvRCxnQkFBZ0I7RUFDaEIsOEVBQThFO0VBQzlFLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLHVDQUF1Qzs7QUFFekM7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUVBO0VBQ0U7SUFDRSxzQkFBc0IsRUFBRTtJQUN4QjtNQUNFLFdBQVcsRUFBRTtJQUNmO01BQ0UsV0FBVyxFQUFFLEVBQUU7QUFDckI7RUFDRTtJQUNFLGtCQUFrQixFQUFFLEVBQUU7QUFDMUI7O0NBRUM7QUFDRDs7Q0FFQztBQUNEOztDQUVDO0FBQ0Q7O0NBRUM7QUFDRDs7Q0FFQztBQUNEO0VBQ0UsOEVBQThFO0VBQzlFLHNFQUFzRSxFQUFFO0FBRTFFOzs7bURBR21EO0FBQ25EOzs7O0VBSUU7QUFDRjtFQUNFO0lBRUUsNEJBQTRCO0lBQzVCLFVBQVUsRUFBRTtFQUNkO0lBRUUsd0JBQXdCO0lBQ3hCLFVBQVUsRUFBRSxFQUFFO0FBQ2xCO0VBQ0U7SUFFRSw0QkFBNEI7SUFDNUIsVUFBVSxFQUFFO0VBQ2Q7SUFFRSx3QkFBd0I7SUFDeEIsVUFBVSxFQUFFLEVBQUU7QUFDbEI7RUFDRSxnRkFBZ0Y7RUFDaEYsd0VBQXdFLEVBQUU7QUFFNUU7OzttREFHbUQ7QUFDbkQ7Ozs7RUFJRTtBQUNGO0VBQ0U7SUFFRSx3QkFBd0I7SUFDeEIsVUFBVSxFQUFFO0VBQ2Q7SUFFRSw0QkFBNEI7SUFDNUIsVUFBVSxFQUFFLEVBQUU7QUFDbEI7RUFDRTtJQUVFLHdCQUF3QjtJQUN4QixVQUFVLEVBQUU7RUFDZDtJQUVFLDRCQUE0QjtJQUM1QixVQUFVLEVBQUUsRUFBRTtBQUVsQixrQ0FBa0MiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKlxuICAxLiBCYXNlXG4qL1xuLypcbiAgMi4gQ29tcG9uZW50c1xuKi9cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XG5kaXYjd2hpdGUtcGxheWVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzc1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gIGJveC1zaGFkb3c6IDBweCAxMnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXRvcCB7XG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgZGl2LndoaXRlLXBsYXllci10b3AgZGl2IHtcbiAgICBmbGV4OiAxOyB9XG4gICAgZGl2LndoaXRlLXBsYXllci10b3AgZGl2LmNlbnRlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgZGl2LndoaXRlLXBsYXllci10b3Agc3Bhbi5ub3ctcGxheWluZyB7XG4gICAgY29sb3I6ICM0MTQzNDQ7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgZGl2LndoaXRlLXBsYXllci10b3AgaW1nLnNob3ctcGxheWxpc3Qge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyB9XG5cbmRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGltZy5tYWluLWFsYnVtLWFydCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB3aWR0aDogMjgwcHg7XG4gIGhlaWdodDogMjgwcHg7IH1cbmRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi5zb25nLW1ldGEtZGF0YSBzcGFuLnNvbmctbmFtZSB7XG4gIGNvbG9yOiAjNDE0MzQ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7IH1cbmRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi5zb25nLW1ldGEtZGF0YSBzcGFuLnNvbmctYXJ0aXN0IHtcbiAgY29sb3I6ICNBQUFGQjM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3Mge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4OyB9XG4gIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIHNwYW4uY3VycmVudC10aW1lIHtcbiAgICBjb2xvcjogI0FBQUZCMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC8qXG4gICAgICBJRSAxMVxuICAgICovIH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyOmhvdmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyOmhvdmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLXBsYXllZC1wcm9ncmVzcyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDhweDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB6LWluZGV4OiA2MDtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgLyogTmVlZGVkIGZvciBGaXJlZm94ICovIH1cbiAgICBAbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctcGxheWVkLXByb2dyZXNzIHtcbiAgICAgICAgY29sb3I6ICNGQTY3MzM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTFFMTsgfSB9XG4gICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctcGxheWVkLXByb2dyZXNzIHtcbiAgICAgICAgY29sb3I6ICNGQTY3MzM7XG4gICAgICAgIGJvcmRlcjogbm9uZTsgfSB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLXBsYXllZC1wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctcGxheWVkLXByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE2NzMzO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLXBsYXllZC1wcm9ncmVzczo6LW1vei1wcm9ncmVzcy1iYXIge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQTY3MzM7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIHByb2dyZXNzI3NvbmctYnVmZmVyZWQtcHJvZ3Jlc3Mge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogOHB4O1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDEwO1xuICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIGhlaWdodDogNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDdERUUzOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy1iYXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTFFMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzc1t2YWx1ZV06Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTFFMTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIC4xcyBlYXNlOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzOjotbW96LXByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0UxRTFFMTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3M6Oi1tcy1maWxsIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzIHtcbiAgICB0b3A6IDlweDtcbiAgICBib3JkZXI6IG5vbmU7IH0gfVxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgcHJvZ3Jlc3Mjc29uZy1idWZmZXJlZC1wcm9ncmVzcyB7XG4gICAgICAgIGNvbG9yOiAjNzg5MDlDO1xuICAgICAgICBib3JkZXI6IG5vbmU7IH0gfVxuICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjogYXV0bykge1xuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBwcm9ncmVzcyNzb25nLWJ1ZmZlcmVkLXByb2dyZXNzIHtcbiAgICAgICAgY29sb3I6ICM3ODkwOUM7XG4gICAgICAgIGJvcmRlcjogbm9uZTsgfSB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXSB7XG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogNy41cHggMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICB0b3A6IC03cHg7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMCksIDBweCAwcHggMHB4IHJnYmEoMTMsIDEzLCAxMywgMCk7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzO1xuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgYm9yZGVyOiAwcHggc29saWQgIzAxMDEwMTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkE2NzMzO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgIG1hcmdpbi10b3A6IC03LjVweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgIGJhY2tncm91bmQ6ICNGQTY3MzM7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDBweCByZ2JhKDEzLCAxMywgMTMsIDApO1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMTAxMDE7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkE2NzMzO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV06Oi1tcy10cmFjayB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzAwM2Q1NztcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMTAxMDE7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDBweCByZ2JhKDEzLCAxMywgMTMsIDApOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLWZpbGwtdXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMztcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkICMwMTAxMDE7XG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDApLCAwcHggMHB4IDBweCByZ2JhKDEzLCAxMywgMTMsIDApOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTo6LW1zLXRodW1iIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4ICMwMDAwMDAsIDBweCAwcHggMHB4ICMwZDBkMGQ7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjRkE2NzMzO1xuICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogMHB4O1xuICAgICAgZGlzcGxheTogbm9uZTsgfVxuICAgIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1cInJhbmdlXCJdLmFtcGxpdHVkZS1zb25nLXNsaWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDsgfVxuICAgICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciAqOjotbXMtYmFja2Ryb3AsIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgaW5wdXRbdHlwZT1yYW5nZV0uYW1wbGl0dWRlLXNvbmctc2xpZGVyOjotbXMtdGh1bWIge1xuICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7IH1cbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LW1zLXRyYWNrIHtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4IDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgICAgIGRpdiN3aGl0ZS1wbGF5ZXItY2VudGVyIGRpdi50aW1lLXByb2dyZXNzIGRpdiNwcm9ncmVzcy1jb250YWluZXIgKjo6LW1zLWJhY2tkcm9wLCBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LW1zLWZpbGwtbG93ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTFFMUUxO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyICo6Oi1tcy1iYWNrZHJvcCwgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXS5hbXBsaXR1ZGUtc29uZy1zbGlkZXI6Oi1tcy1maWxsLXVwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0UxRTFFMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsgfSB9XG4gICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOiBhdXRvKSB7XG4gICAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdLmFtcGxpdHVkZS1zb25nLXNsaWRlcjo6LW1zLXRodW1iIHtcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4OyB9IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBkaXYjcHJvZ3Jlc3MtY29udGFpbmVyIGlucHV0W3R5cGU9cmFuZ2VdOmZvY3VzOjotbXMtZmlsbC1sb3dlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjRkE2NzMzOyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jZW50ZXIgZGl2LnRpbWUtcHJvZ3Jlc3MgZGl2I3Byb2dyZXNzLWNvbnRhaW5lciBpbnB1dFt0eXBlPXJhbmdlXTpmb2N1czo6LW1zLWZpbGwtdXBwZXIge1xuICAgICAgYmFja2dyb3VuZDogI0ZBNjczMzsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNlbnRlciBkaXYudGltZS1wcm9ncmVzcyBzcGFuLmR1cmF0aW9uIHtcbiAgICBjb2xvcjogI0FBQUZCMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxuXG5kaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMzVweDsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNzaHVmZmxlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE5cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMjRweDsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3NodWZmbGUuYW1wbGl0dWRlLXNodWZmbGUtb2ZmIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9zaHVmZmxlLW9mZi5zdmdcIik7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNzaHVmZmxlLmFtcGxpdHVkZS1zaHVmZmxlLW9uIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9zaHVmZmxlLW9uLnN2Z1wiKTsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNwcmV2aW91cyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogNTNweDtcbiAgICB3aWR0aDogNTNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3ByZXZpb3VzLnN2Z1wiKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNwbGF5LXBhdXNlIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDg1cHg7XG4gICAgaGVpZ2h0OiA4NXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcGxheS5zdmdcIik7IFxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4OyB9XG4gICAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcGxheS1wYXVzZS5hbXBsaXR1ZGUtcGF1c2VkIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wbGF5LnN2Z1wiKTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3BsYXktcGF1c2UuYW1wbGl0dWRlLXBsYXlpbmcge1xuICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3BhdXNlLnN2Z1wiKTsgfVxuICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNuZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgaGVpZ2h0OiA1M3B4O1xuICAgIHdpZHRoOiA1M3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvbmV4dC5zdmdcIik7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7IH1cbiAgZGl2I3doaXRlLXBsYXllci1jb250cm9scyBkaXYjcmVwZWF0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcmVwZWF0LW9mZi5zdmdcIik7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgIGRpdiN3aGl0ZS1wbGF5ZXItY29udHJvbHMgZGl2I3JlcGVhdC5hbXBsaXR1ZGUtcmVwZWF0LW9mZiB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcmVwZWF0LW9mZi5zdmdcIik7IH1cbiAgICBkaXYjd2hpdGUtcGxheWVyLWNvbnRyb2xzIGRpdiNyZXBlYXQuYW1wbGl0dWRlLXJlcGVhdC1vbiB7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcmVwZWF0LW9uLnN2Z1wiKTsgfVxuXG5kaXYjd2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgei1pbmRleDogOTk5OTtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyB9XG5cbmRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtdG9wIHtcbiAgaGVpZ2h0OiA2NHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC10b3AgZGl2IHtcbiAgICBmbGV4OiAxOyB9XG4gICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC10b3AgZGl2IHNwYW4ucXVldWUge1xuICAgICAgY29sb3I6ICM0MTQzNDQ7XG4gICAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XG4gICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cbiAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXRvcCBkaXYgaW1nLmNsb3NlLXBsYXlsaXN0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuZGl2LndoaXRlLXBsYXllci11cC1uZXh0IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM0MTQzNDQ7IH1cblxuZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdCB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIGhlaWdodDogY2FsYyggMTAwJSAtIDIzNHB4ICk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LXNvbmcge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNjtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDk0LCAxNTQsIDAuMyk7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nLmFtcGxpdHVkZS1hY3RpdmUtc29uZy1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAxMDAsIDgyLCAwLjMpOyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZyBpbWcge1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgZmxvYXQ6IGxlZnQ7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nIGRpdi5wbGF5bGlzdC1zb25nLW1ldGEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIC8qIHdpZHRoOiBjYWxjKCAxMDAlIC0gODBweCApOyAqL1xuICB9XG4gICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nIGRpdi5wbGF5bGlzdC1zb25nLW1ldGEgc3Bhbi5wbGF5bGlzdC1zb25nLW5hbWUge1xuICAgICAgY29sb3I6ICM0MTQzNDQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3Qtc29uZyBkaXYucGxheWxpc3Qtc29uZy1tZXRhIHNwYW4ucGxheWxpc3QtYXJ0aXN0LWFsYnVtIHtcbiAgICAgIGNvbG9yOiAjQUFBRkIzO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cblxuZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1zb25nOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDsgfVxuXG5kaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAxNnB4OyB9XG4gIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgaW1nLnBsYXlsaXN0LWFsYnVtLWFydCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm94LXNoYWRvdzogMHB4IDEycHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgd2lkdGg6IDY0cHg7IH1cbiAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIHdpZHRoOiBjYWxjKCAxMDAlIC0gODlweCApOyB9XG4gICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LW1ldGEtZGF0YSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTI1cHgpO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LW1ldGEtZGF0YSBzcGFuLnNvbmctbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogIzQxNDM0NDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LW1ldGEtZGF0YSBzcGFuLnNvbmctYXJ0aXN0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjQUFBRkIzO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2wtd3JhcHBlciB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgICAgZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2wtd3JhcHBlciBkaXYjcGxheWxpc3QtcHJldmlvdXMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiLi9hc3NldHMvaW1nL3ByZXZpb3VzLnN2Z1wiKTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMnB4IDMycHg7IH1cbiAgICAgIGRpdi53aGl0ZS1wbGF5ZXItcGxheWxpc3QtY29udHJvbHMgZGl2LnBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9sLXdyYXBwZXIgZGl2I3BsYXlsaXN0LXBsYXktcGF1c2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuICAgICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbC13cmFwcGVyIGRpdiNwbGF5bGlzdC1wbGF5LXBhdXNlLmFtcGxpdHVkZS1wYXVzZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9wbGF5LnN2Z1wiKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMycHggMzJweDsgfVxuICAgICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbC13cmFwcGVyIGRpdiNwbGF5bGlzdC1wbGF5LXBhdXNlLmFtcGxpdHVkZS1wbGF5aW5nIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuL2Fzc2V0cy9pbWcvcGF1c2Uuc3ZnXCIpO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzJweCAzMnB4OyB9XG4gICAgICBkaXYud2hpdGUtcGxheWVyLXBsYXlsaXN0LWNvbnRyb2xzIGRpdi5wbGF5bGlzdC1jb250cm9scyBkaXYucGxheWxpc3QtY29udHJvbC13cmFwcGVyIGRpdiNwbGF5bGlzdC1uZXh0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4vYXNzZXRzL2ltZy9uZXh0LnN2Z1wiKTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzMnB4IDMycHg7IH1cblxuZGl2LndoaXRlLXBsYXllci1wbGF5bGlzdC1jb250cm9sczo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7IH1cblxuLypcbiAgMy4gTGF5b3V0XG4qL1xuYm9keSB7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLEhlbHZldGljYSxSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3dhbGxwYXBlcnBsYXkuY29tL3dhbGxzL2Z1bGwvOC9mL2YvMzQyODE0LmpwZycpO1xuICAvKiBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xuICAvKiBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIGZvbnQtZmFtaWx5OiAnTnVtYW5zJywgc2Fucy1zZXJpZjsgKi9cblxufVxuYm9keSBkaXYuY29udGFpbmVyLWZsdWlkIGRpdi5yaWdodCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5LjkzNzVlbSkge1xuICBib2R5IGRpdi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIGJvZHkgZGl2LmV4YW1wbGUtY29udGFpbmVyIGRpdi5sZWZ0IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgYm9keSBkaXYuZXhhbXBsZS1jb250YWluZXIgZGl2LnJpZ2h0IHtcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHtcbiAgYm9keSBkaXYucmlnaHQge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDsgfSB9XG4vKlxuICA0LiBQYWdlc1xuKi9cbi8qXG4gIDUuIFRoZW1lc1xuKi9cbi8qXG4gIDYuIFV0aWxzXG4qL1xuLypcbiAgNy4gVmVuZG9yc1xuKi9cbi8qXG4gIDguIEFuaW1hdGlvbnNcbiovXG4uc2xpZGUtaW4tdG9wIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLWluLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoO1xuICBhbmltYXRpb246IHNsaWRlLWluLXRvcCAwLjVzIGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KSBib3RoOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEdlbmVyYXRlZCBieSBBbmltaXN0YSBvbiAyMDE5LTMtMjUgMTg6Mzk6NTRcbiAqIHc6IGh0dHA6Ly9hbmltaXN0YS5uZXQsIHQ6IEBjc3NhbmltaXN0YVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBhbmltYXRpb24gc2xpZGUtaW4tdG9wXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBzbGlkZS1pbi10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDsgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTsgfSB9XG5Aa2V5ZnJhbWVzIHNsaWRlLWluLXRvcCB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICBvcGFjaXR5OiAxOyB9IH1cbi5zbGlkZS1vdXQtdG9wIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHNsaWRlLW91dC10b3AgMC41cyBjdWJpYy1iZXppZXIoMC41NSwgMC4wODUsIDAuNjgsIDAuNTMpIGJvdGg7XG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0LXRvcCAwLjVzIGN1YmljLWJlemllcigwLjU1LCAwLjA4NSwgMC42OCwgMC41MykgYm90aDsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBHZW5lcmF0ZWQgYnkgQW5pbWlzdGEgb24gMjAxOS0zLTI1IDE4OjQ1OjE3XG4gKiB3OiBodHRwOi8vYW5pbWlzdGEubmV0LCB0OiBAY3NzYW5pbWlzdGFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogYW5pbWF0aW9uIHNsaWRlLW91dC10b3BcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuQC13ZWJraXQta2V5ZnJhbWVzIHNsaWRlLW91dC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5Aa2V5ZnJhbWVzIHNsaWRlLW91dC10b3Age1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgb3BhY2l0eTogMDsgfSB9XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC5jc3MubWFwICovXG4iXX0= */", '', '']]

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