(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album-collection/album-collection.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album-collection/album-collection.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"playlists\" *ngIf=\"playlists?.length\">\n    <h1>Playlists</h1>\n    <div class=\"right\">\n        <div class=\"song-to-add\" *ngFor=\"let playlist of playlists\">\n            <a href=\"\" routerLink=\"/playlist/{{ playlist.id }}\">\n                <img src=\"{{ playlist.cover_art_url }}\"/>\n            </a>\n            <a class=\"add-to-playlist-button\" (click)=\"addPlaylistToQueue(playlist.id)\">\n                Add To Playlist\n            </a>\n        </div>\n    </div>\n</div>\n<div id=\"albums\" *ngIf=\"albums?.length \">\n    <h1>Albums</h1>\n    <div class=\"right\">\n        <div class=\"song-to-add\" *ngFor=\"let album of albums\">\n            <a href=\"\" routerLink=\"/album/{{ album.id }}\">\n                <img src=\"{{ album.coverArt }}\"/>\n            </a>\n            <a class=\"add-to-playlist-button\" (click)=\"addAlbumToQueue(album.id)\">\n                Add To Playlist\n            </a>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/album.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/album.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n<div class=\"playlist-description row\">\n    <img class=\"col-sm\" src=\"{{ album.coverArt }}\">\n    <div class=\"col-sm\" >\n        <h3>\n            {{ album.name }}\n        </h3>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addPlaylistToQueue()\">Add To Queue</button>\n    </div>\n</div>\n<app-song-list [songs]=\"album.songs\"></app-song-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"!isAuthRoute() ; else login\">\n        <div class=\"col-4\" >\n            <div class=\"left\">\n                <app-player></app-player>\n            </div>\n        </div>\n        <div class=\"col-8\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <ng-template #login>\n        <router-outlet></router-outlet>\n    </ng-template>\n</div>\n<simple-notifications></simple-notifications>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<div class=\"container\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3>Log In</h3>\n\t\t\t\t<div class=\"d-flex justify-content-end social_icon\">\n\t\t\t\t\t<span><i class=\"fab fa-facebook-square\"></i></span>\n\t\t\t\t\t<span><i class=\"fab fa-google-plus-square\"></i></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\t\t\t\t\t    <div class=\"input-group form-group\">\n\t\t\t\t\t\t      <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t        <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" placeholder=\"username\" formControlName=\"username\">\n\n\t\t\t        </div>\n\t\t\t\t\t    <div class=\"input-group form-group\">\n\t\t\t\t\t\t      <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t        <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t      <input type=\"password\" class=\"form-control\" placeholder=\"password\" formControlName=\"password\">\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"row align-items-center remember\">\n\t\t\t\t\t\t      <input type=\"checkbox\">Remember Me\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t\t      <input type=\"submit\" value=\"Login\" class=\"btn float-right login_btn\">\n\t\t\t\t\t    </div>\n\t\t\t\t  </form>\n\t\t\t</div>\n\t\t\t<div class=\"card-footer\">\n\t\t\t\t  <div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t    Don't have an account?<a href=\"\" routerLink=\"/signup\">Sign Up</a>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"d-flex justify-content-center\">\n\t\t\t\t\t    <a href=\"#\">Forgot your password?</a>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <br>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <header class=\"card-header\">\n\t                  <a href=\"\" routerLink=\"/login\" class=\"float-right btn btn-outline-primary mt-1\">Log in</a>\n\t                  <h4 class=\"card-title mt-2\">Sign Up</h4>\n                </header>\n                <article class=\"card-body\">\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\t                      <div class=\"form-row\">\n\t\t                        <div class=\"col form-group\">\n\t\t\t                          <label>First name </label>\n\t\t  \t                        <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"firstName\">\n\t\t                        </div> <!-- form-group end.// -->\n\t\t                        <div class=\"col form-group\">\n\t\t\t                          <label>Last name</label>\n\t\t  \t                        <input type=\"text\" class=\"form-control\" placeholder=\" \" formControlName=\"lastName\">\n\t\t                        </div> <!-- form-group end.// -->\n\t                      </div> <!-- form-row end.// -->\n\t                      <div class=\"form-group\">\n\t\t                        <label>Email address</label>\n\t\t                        <input type=\"email\" class=\"form-control\" placeholder=\"\" formControlName=\"email\">\n\t\t                        <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\t                      </div> <!-- form-group end.// -->\n\t                      <div class=\"form-group\">\n\t\t\t                      <label class=\"form-check form-check-inline\">\n\t\t                            <input class=\"form-check-input\" type=\"radio\" name=\"gender\" value=\"male\" formControlName=\"gender\">\n\t\t                            <span class=\"form-check-label\"> Male </span>\n\t\t                        </label>\n\t\t                        <label class=\"form-check form-check-inline\">\n\t\t                            <input class=\"form-check-input\" type=\"radio\" name=\"gender\" value=\"female\" formControlName=\"gender\">\n\t\t                            <span class=\"form-check-label\"> Female</span>\n\t\t                        </label>\n\t                      </div> <!-- form-group end.// -->\n\t                      <div class=\"form-group\">\n\t\t                        <label>Country</label>\n\t\t                        <select id=\"inputState\" class=\"form-control\" formControlName=\"country\">\n                                <option *ngFor=\"let country of country_list\" value=\"{{ country }}\">{{ country }}</option>\n\t\t                            <option selected=\"\">United States</option>\n\t\t                        </select>\n\t\t                    </div> <!-- form-group end.// -->\n\t\t                    <div class=\"form-group\">\n\t\t                        <label>Username</label>\n\t                          <input type=\"text\" class=\"form-control\" placeholder=\"\" formControlName=\"username\">\n\t                      </div> <!-- form-group end.// -->\n\t\t                    <div class=\"form-group\">\n\t\t                        <label>Create password</label>\n\t                          <input class=\"form-control\" type=\"password\" formControlName=\"password\">\n\t                      </div> <!-- form-group end.// -->\n\t\t                    <div class=\"form-group\">\n\t\t                        <label>Confirm password</label>\n\t                          <input class=\"form-control\" type=\"password\" formControlName=\"confirmPassword\">\n\t                      </div> <!-- form-group end.// -->\n\t                      <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Register  </button>\n                        </div> <!-- form-group// -->\n                    </form>\n                </article> <!-- card-body end .// -->\n                <div class=\"border-top card-body text-center\">Have an account? <a href=\"\" routerLink=\"/login\">Log In</a></div>\n            </div> <!-- card.// -->\n        </div> <!-- col.//-->\n\n    </div> <!-- row.//-->\n\n\n</div> \n<!--container end.//-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"\" routerLink=\"/\">MUSIC ON</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n        <a class=\"nav-link\" href=\"\" routerLink=\"new_song\">Upload Song</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth.isAuthenticated()\">\n          <a class=\"nav-link\" href=\"\" routerLink=\"album/create\">New Album</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n\n    <ul class=\"navbar-nav left-nav\" *ngIf=\"!auth.isAuthenticated() ; else user\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" routerLink=\"/login\">\n                Login\n                <span class=\"oi oi-account-login\" title=\"account login\" aria-hidden=\"true\"></span>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" routerLink=\"/signup\">\n                Sign Up\n                <span class=\"oi oi-person\" title=\"account signup\" aria-hidden=\"true\"></span>\n            </a>\n        </li>\n    </ul>\n    <ng-template #user>\n        <ul class=\"navbar-nav left-nav\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{ auth.user.username }}\n                    <span class=\"oi oi-person\" title=\"account signup\" aria-hidden=\"true\"></span>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"\">\n                        Logout\n                        <span class=\"oi oi-account-logout\" title=\"account login\" aria-hidden=\"true\"></span>\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </ng-template>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-album/new-album.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-album/new-album.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container upload-form\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>New Album</h1>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <img class=\"\" [src]=\" coverArtUrl\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Cover Art Image</label>\n                            <input #file type=\"file\" accept=\"image/*\" class=\"form-control-file\" id=\"exampleFormControlFile1\" formControlName=\"cover_art_img\" (change)=\"imageSelected(file.files)\">\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Name</label>\n                            <input type=\"tex\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"name\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Artist</label>\n                            <input type=\"tex\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"author\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Release Date</label>\n                            <input type=\"date\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"release_date\">\n                        </div>\n                    </div>\n                </div>\n\n                <br />\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <h2>List of Songs</h2>\n                    </div>\n                    <div class=\"col\">\n                        <a class=\"btn btn-primary btn-add-song\" href=\"\" (click)=\"addSongForm($event)\">Add Song</a>\n                    </div>\n                </div>\n\n                <div formArrayName=\"songs\">\n\n                    <div *ngFor=\"let songform of songs.controls; let i=index\">\n                        <div [formGroupName]=\"i\" class=\"form-row\">\n                            <label class=\"my-1 mr-2\">{{ i + 1 }}.</label>\n                            <div class=\"col\">\n                                <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"Name of the song\" formControlName=\"name\" />\n                            </div>\n                            <div class=\"col\">\n                                <input #file type=\"file\" class=\"form-control-file\" (change)=\"songFileSelected(file.files, i)\">\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n\n                <button class=\"btn btn-primary btn-lg\">Create Album</button>\n            </form>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-song/new-song.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-song/new-song.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container upload-form\">\n    <div class=\"row\">\n        <h1>Upload Song</h1>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlInput1\">Name</label>\n                    <input type=\"tex\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"name\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect1\">Album</label>\n                    <a class=\"new-album-link\" href=\"\" routerLink=\"/album/create\">+ New Album</a>\n                    <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"album\">\n                        <option *ngFor=\"let album of albums\" value=\"{{ album.id }}\">{{ album.name }}</option>\n                    </select>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlSelect2\">Genres</label> <br />\n                    <div class=\"form-check form-check-inline\" formArrayName=\"genres\" *ngFor=\"let genre of form.controls.genres.controls; let i = index\">\n                        <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"i\" name=\"{{genres[i].name}}\">\n                        <label class=\"form-check-label\" for=\"{{ genres[i].name }}\">{{genres[i].name}}</label>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"exampleFormControlFile1\">Media File</label>\n                    <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\" (change)=\"fileUpload($event)\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"lyrics\">Lyrics</label>\n                    <textarea class=\"form-control\" id=\"lyrics\" rows=\"3\" formControlName=\"lyrics\"></textarea>\n                </div>\n                <button class=\"btn btn-primary btn-lg\">Upload Song</button>\n\n                {{ form.value.name }}\n            </form>\n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"white-player\">\n    <div class=\"white-player-top\">\n        <div>\n            &nbsp;\n        </div>\n\n        <div class=\"center\">\n            <span class=\"now-playing\">Now Playing</span>\n        </div>\n\n        <div>\n            <img src=\"/assets/img/show-playlist.svg\" class=\"show-playlist\" (click)=\"togglePlaylist()\" />\n        </div>\n    </div>\n\n    <div id=\"white-player-center\">\n        <img data-amplitude-song-info=\"cover_art_url\" class=\"main-album-art\"/>\n\n        <div class=\"song-meta-data\">\n            <span data-amplitude-song-info=\"name\" class=\"song-name\"></span>\n            <span data-amplitude-song-info=\"artist\" class=\"song-artist\"></span>\n        </div>\n\n        <div class=\"time-progress\">\n            <div id=\"progress-container\">\n                <input type=\"range\" class=\"amplitude-song-slider\"/>\n                <progress id=\"song-played-progress\" class=\"amplitude-song-played-progress\"></progress>\n                <progress id=\"song-buffered-progress\" class=\"amplitude-buffered-progress\" value=\"0\"></progress>\n            </div>\n\n            <div class=\"time-container\">\n                <span class=\"current-time\">\n                    <span class=\"amplitude-current-minutes\"></span>:<span class=\"amplitude-current-seconds\"></span>\n                </span>\n                <span class=\"duration\">\n                    <span class=\"amplitude-duration-minutes\"></span>:<span class=\"amplitude-duration-seconds\"></span>\n                </span>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"white-player-controls\">\n        <div class=\"amplitude-shuffle amplitude-shuffle-off\" id=\"shuffle\"></div>\n        <div class=\"amplitude-prev\" id=\"previous\"></div>\n        <div class=\"amplitude-play-pause\" id=\"play-pause\"></div>\n        <div class=\"amplitude-next\" id=\"next\"></div>\n        <div class=\"amplitude-repeat\" id=\"repeat\"></div>\n    </div>\n\n    <div id=\"white-player-playlist-container\" [className]=\"playlistOpened ? 'slide-in-top' : 'slide-out-top'\" [style.display]=\"playlistOpened ? 'block' : 'none'\">\n        <div class=\"white-player-playlist-top\">\n            <div>\n\n            </div>\n            <div>\n                <span class=\"queue\">Queue</span>\n            </div>\n            <div>\n                <img src=\"/assets/img/close.svg\" class=\"close-playlist\" (click)=\"togglePlaylist()\" />\n            </div>\n        </div>\n\n        <div class=\"white-player-up-next\">\n            Up Next\n        </div>\n\n        <div class=\"white-player-playlist\">\n\n            <div *ngFor=\"let song of ampService.currentSongs; index as i;\" class=\"white-player-playlist-song amplitude-song-container\" [attr.data-amplitude-song-index]=\"i\" (click)=\"playSongAtIndex(i)\">\n                <img src=\"{{ song.cover_art_url ? song.cover_art_url : 'http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png' }}\" />\n\n               <div class=\"playlist-song-meta\">\n                    <span class=\"playlist-song-name\">{{ song.name }}</span>\n                    <span class=\"playlist-artist-album\">{{ song.album }}</span>\n                </div>\n                <div class=\"song-buttons\" (click)=\"removeSong($event, i)\" >\n                    <a >\n                        <img src=\"/assets/img/close.svg\" class=\"remove-button\" />\n                    </a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"white-player-playlist-controls\">\n            <img data-amplitude-song-info=\"cover_art_url\" class=\"playlist-album-art\"/>\n\n            <div class=\"playlist-controls\">\n                <div class=\"playlist-meta-data\">\n                    <span data-amplitude-song-info=\"name\" class=\"song-name\"></span>\n                    <span data-amplitude-song-info=\"artist\" class=\"song-artist\"></span>\n                </div>\n\n                <div class=\"playlist-control-wrapper\">\n                    <div class=\"amplitude-prev\" id=\"playlist-previous\"></div>\n                    <div class=\"amplitude-play-pause\" id=\"playlist-play-pause\"></div>\n                    <div class=\"amplitude-next\" id=\"playlist-next\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"playlist-description row\">\n        <img class=\"col-sm\" src=\"{{ playlist.cover_art_url }}\">\n        <div class=\"col-sm\" >\n            <h3>\n                {{ playlist.name }}\n            </h3>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addPlaylistToQueue()\">Add To Queue</button>\n        </div>\n    </div>\n    <app-song-list [songs]=\"playlist.songs\"></app-song-list>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row song-list\">\n    <ul class=\"list-group col-sm\">\n        <li class=\"list-group-item playlist-song\" *ngFor=\"let song of songs; index as i;\">\n            <div class=\"playlist-song-meta\">\n                <span class=\"playlist-song-name\">{{ song.name }}</span>\n                <span class=\"playlist-artist-album\">{{ song.album }}</span>\n            </div>\n            <div class=\"song-buttons\">\n                <button id=\"play-pause\" class=\"btn btn-light btn-circle\" (click)=\"playSong(song)\">\n                    <span class=\"oi oi-media-play\" title=\"media play\" aria-hidden=\"true\"></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-light add-button btn-circle\" (click)=\"addSongToQueue(song)\" >\n                    <span class=\"oi oi-plus\" title=\"plus\" aria-hidden=\"true\"></span>\n                </button>\n                <div class=\"dropdown more-button song-button\">\n                    <button class=\"btn btn-light btn-circle dropdown-toggle \" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\" href=\"#\">Add to playlist</a>\n                        <a class=\"dropdown-item\" href=\"#\">Add to Queue</a>\n                        <a class=\"dropdown-item\" href=\"#\">View Author</a>\n                        <a class=\"dropdown-item\" href=\"#\">View Song</a>\n                        <a class=\"dropdown-item\" href=\"#\">Add to Favorites</a>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/album-collection/album-collection.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/album-collection/album-collection.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1{\n    color: white;\n    margin-top: 10px;\n    font-family: \"Lato\", sans-serif;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0tY29sbGVjdGlvbi9hbGJ1bS1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQyIsImZpbGUiOiJzcmMvYXBwL2FsYnVtLWNvbGxlY3Rpb24vYWxidW0tY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/album-collection/album-collection.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/album-collection/album-collection.component.ts ***!
  \****************************************************************/
/*! exports provided: AlbumCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumCollectionComponent", function() { return AlbumCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amplitude_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../amplitude.service */ "./src/app/amplitude.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




let AlbumCollectionComponent = class AlbumCollectionComponent {
    constructor(ampService, apiService) {
        this.ampService = ampService;
        this.apiService = apiService;
    }
    ngOnInit() {
        this.apiService.getPlaylists().subscribe(playlists => this.playlists = playlists);
        this.apiService.getAlbums(0).subscribe(albums => {
            this.albums = albums;
        });
    }
    addPlaylistToQueue(id) {
        this.apiService.getPlaylist(id).subscribe(playlist => this.ampService.addSongs(playlist.songs));
    }
    addAlbumToQueue(id) {
        this.apiService.getAlbum(id).subscribe(album => {
            this.ampService.addSongs(album.songs);
        });
    }
    playPlaylist(id) {
        // TODO
    }
};
AlbumCollectionComponent.ctorParameters = () => [
    { type: _amplitude_service__WEBPACK_IMPORTED_MODULE_2__["AmplitudeService"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
AlbumCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album-collection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album-collection/album-collection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album-collection.component.css */ "./src/app/album-collection/album-collection.component.css")).default]
    })
], AlbumCollectionComponent);



/***/ }),

/***/ "./src/app/album/album.component.css":
/*!*******************************************!*\
  !*** ./src/app/album/album.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.playlist-description {\n    margin-top: 20px;\n}\n.playlist-description img {\n    max-width: 450px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wbGF5bGlzdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wbGF5bGlzdC1kZXNjcmlwdGlvbiBpbWcge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/album/album.component.ts":
/*!******************************************!*\
  !*** ./src/app/album/album.component.ts ***!
  \******************************************/
/*! exports provided: AlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumComponent", function() { return AlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _amplitude_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../amplitude.service */ "./src/app/amplitude.service.ts");
/* harmony import */ var _models_album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/album */ "./src/app/models/album.ts");



// import { Location } from '@angular/common';



let AlbumComponent = class AlbumComponent {
    constructor(route, 
    // private location: Location,
    api, amplitude) {
        this.route = route;
        this.api = api;
        this.amplitude = amplitude;
        this.album = new _models_album__WEBPACK_IMPORTED_MODULE_5__["Album"](1, '', '', '', '', []);
    }
    ngOnInit() {
        this.getAlbum();
    }
    getAlbum() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getAlbum(id)
            .subscribe(album => {
            this.album = album;
        });
    }
    addPlaylistToQueue() {
        this.amplitude.addSongs(this.album.songs);
    }
};
AlbumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _amplitude_service__WEBPACK_IMPORTED_MODULE_4__["AmplitudeService"] }
];
AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/album.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album.component.css */ "./src/app/album/album.component.css")).default]
    })
], AlbumComponent);



/***/ }),

/***/ "./src/app/amplitude.service.ts":
/*!**************************************!*\
  !*** ./src/app/amplitude.service.ts ***!
  \**************************************/
/*! exports provided: AmplitudeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmplitudeService", function() { return AmplitudeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amplitudejs */ "./node_modules/amplitudejs/dist/amplitude.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amplitudejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





let AmplitudeService = class AmplitudeService {
    constructor(api, notifier) {
        this.api = api;
        this.notifier = notifier;
        this.songsToAdd = [
            {
                'name': 'Terrain',
                'artist': 'pg.lost',
                'album': 'Key',
                'url': 'https://521dimensions.com/song/Terrain-pglost.mp3',
                'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/key.jpg'
            },
            {
                'name': 'Vorel',
                'artist': 'Russian Circles',
                'album': 'Guidance',
                'url': 'https://521dimensions.com/song/Vorel-RussianCircles.mp3',
                'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/guidance.jpg'
            },
            {
                'name': 'Intro / Sweet Glory',
                'artist': 'Jimkata',
                'album': 'Die Digital',
                'url': 'https://521dimensions.com/song/IntroSweetGlory-Jimkata.mp3',
                'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/die-digital.jpg'
            },
            {
                'name': 'Offcut #6',
                'artist': 'Little People',
                'album': 'We Are But Hunks of Wood Remixes',
                'url': 'https://521dimensions.com/song/Offcut6-LittlePeople.mp3',
                'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-but-hunks-of-wood.jpg'
            },
            {
                'name': 'Dusk To Dawn',
                'artist': 'Emancipator',
                'album': 'Dusk To Dawn',
                'url': 'https://521dimensions.com/song/DuskToDawn-Emancipator.mp3',
                'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/from-dusk-to-dawn.jpg'
            },
            {
                'name': 'Anthem',
                'artist': 'Emancipator',
                'album': 'Soon It Will Be Cold Enough',
                'url': 'https://521dimensions.com/song/Anthem-Emancipator.mp3',
                'cover_art_url': 'https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg'
            }
        ];
    }
    startAmplitude() {
        this.api.getCurrentPlaylist().subscribe(songs => {
            this.currentSongs = songs;
            amplitudejs__WEBPACK_IMPORTED_MODULE_2__["init"]({
                songs: this.currentSongs,
                default_album_art: 'http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png',
                callbacks: {
                    song_change: () => {
                        this.notifier.success('Playing: ' + amplitudejs__WEBPACK_IMPORTED_MODULE_2__["getActiveSongMetadata"]().name);
                    }
                }
            });
        });
    }
    addSong(song) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["addSong"](song);
        // this.currentSongs.push(song);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
        this.notifier.success(song.name + ' added to Queue');
    }
    addSongs(songs) {
        this.currentSongs.push(...songs);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
        this.notifier.success('Songs added to Queue');
    }
    playNow(song) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playNow"](song);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
    }
    playSongAtIndex(songIndex) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["playSongAtIndex"](songIndex);
    }
    removeSong(songIndex) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["removeSong"](songIndex);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
    }
};
AmplitudeService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
AmplitudeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AmplitudeService);



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.apiURL = 'http://localhost:8080/api/';
        this.songs = [
            {
                id: 1,
                name: 'Risin\' High (feat Raashan Ahmad)',
                artist: 'Ancient Astronauts',
                album: 'We Are to Answer',
                url: 'https://521dimensions.com/song/Ancient Astronauts - Risin\' High (feat Raashan Ahmad).mp3',
                cover_art_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
            },
            {
                id: 2,
                name: 'The Gun',
                artist: 'Lorn',
                album: 'Ask The Dust',
                url: 'https://521dimensions.com/song/08 The Gun.mp3',
                cover_art_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/ask-the-dust.jpg'
            },
            {
                id: 3,
                name: 'Anvil',
                artist: 'Lorn',
                album: 'Anvil',
                url: 'https://521dimensions.com/song/LORN - ANVIL.mp3',
                cover_art_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/anvil.jpg'
            },
            {
                id: 4,
                name: 'I Came Running',
                artist: 'Ancient Astronauts',
                album: 'We Are to Answer',
                url: 'https://521dimensions.com/song/ICameRunning-AncientAstronauts.mp3',
                cover_art_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/we-are-to-answer.jpg'
            },
            {
                id: 5,
                name: 'First Snow',
                artist: 'Emancipator',
                album: 'Soon It Will Be Cold Enough',
                url: 'https://521dimensions.com/song/FirstSnow-Emancipator.mp3',
                cover_art_url: 'https://521dimensions.com/img/open-source/amplitudejs/album-art/soon-it-will-be-cold-enough.jpg'
            }
        ];
    }
    getCurrentPlaylist() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.songs);
    }
    getPlaylists() {
        return this.http.get(this.apiURL + 'playlists');
    }
    getAlbums(userId) {
        return this.http.get(this.apiURL + 'albums');
    }
    getPlaylist(id) {
        return this.http.get(this.apiURL + 'playlists/' + id);
        // return of(data.full_playlists[id]);
    }
    newSong(data) {
        return this.http.post(this.apiURL + 'songs', data);
    }
    uploadSong(data) {
        return this.http.post(this.apiURL + 'songs/upload', data);
    }
    getAlbum(id) {
        return this.http.get(this.apiURL + 'albums/' + String(id));
    }
    newAlbum(album) {
        return this.http.post(this.apiURL + 'albums', album);
    }
    uploadAlbumCover(data) {
        return this.http.post(this.apiURL + 'albums/cover', data);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _album_collection_album_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album-collection/album-collection.component */ "./src/app/album-collection/album-collection.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");
/* harmony import */ var _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-song/new-song.component */ "./src/app/new-song/new-song.component.ts");
/* harmony import */ var _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-album/new-album.component */ "./src/app/new-album/new-album.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");










const routes = [
    { path: '', component: _album_collection_album_collection_component__WEBPACK_IMPORTED_MODULE_3__["AlbumCollectionComponent"] },
    { path: 'album/create', component: _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_6__["NewAlbumComponent"] },
    { path: 'album/:id', component: _album_album_component__WEBPACK_IMPORTED_MODULE_4__["AlbumComponent"] },
    { path: 'playlist/:id', component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistComponent"] },
    { path: 'new_song', component: _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_5__["NewSongComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'mplayer';
        this.route = router.url;
    }
    isAuthRoute() {
        return this.router.url === '/login' || this.router.url === '/signup';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");
/* harmony import */ var _album_collection_album_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./album-collection/album-collection.component */ "./src/app/album-collection/album-collection.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./new-song/new-song.component */ "./src/app/new-song/new-song.component.ts");
/* harmony import */ var _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./new-album/new-album.component */ "./src/app/new-album/new-album.component.ts");
/* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song-list/song-list.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");




















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_7__["PlayerComponent"],
            _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_8__["PlaylistComponent"],
            _album_album_component__WEBPACK_IMPORTED_MODULE_9__["AlbumComponent"],
            _album_collection_album_collection_component__WEBPACK_IMPORTED_MODULE_10__["AlbumCollectionComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
            _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_14__["NewSongComponent"],
            _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_15__["NewAlbumComponent"],
            _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_16__["SongListComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_13__["SimpleNotificationsModule"].forRoot({
                position: ['bottom', 'right'],
                timeOut: 5000,
                showProgressBar: true,
                maxStack: 3
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user */ "./src/app/models/user.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthService = class AuthService {
    constructor() {
        this.apiUrl = 'http://localhost:8080/auth/';
        this.username = 'gabo';
        this.password = 'password';
    }
    login(user) {
        if (user.username === this.username && user.password === this.password) {
            this.user = new _models_user__WEBPACK_IMPORTED_MODULE_2__["User"](1, this.username, '', '', '', this.password, '');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.user);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('username or password incorrect.');
        }
    }
    logout() {
        this.user = null;
    }
    signup(user) {
        this.user = user;
        this.user.id = 1;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.user);
    }
    isAuthenticated() {
        return this.user != null;
    }
};
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Numans');\n.container{\nheight: 100%;\nalign-content: center;\nmargin-top: 40px;\n}\n.card{\nheight: 370px;\nmargin-top: auto;\nmargin-bottom: auto;\nwidth: 400px;\nbackground-color: rgba(0,0,0,0.5) !important;\n}\n.social_icon span{\nfont-size: 60px;\nmargin-left: 10px;\ncolor: #1298ff;\n}\n.social_icon span:hover{\ncolor: white;\ncursor: pointer;\n}\n.card-header h3{\ncolor: white;\n}\n.social_icon{\nposition: absolute;\nright: 20px;\ntop: -45px;\n}\n.input-group-prepend span{\nwidth: 50px;\nbackground-color: #1298ff;\ncolor: black;\nborder:0 !important;\n}\ninput:focus{\noutline: 0 0 0 0  !important;\nbox-shadow: 0 0 0 0 !important;\n}\n.remember{\ncolor: white;\n}\n.remember input\n{\nwidth: 20px;\nheight: 20px;\nmargin-left: 15px;\nmargin-right: 5px;\n}\n.login_btn{\ncolor: black;\nbackground-color: #1298ff;\nwidth: 100px;\n}\n.login_btn:hover{\ncolor: black;\nbackground-color: white;\n}\n.links{\ncolor: white;\n}\n.links a{\nmargin-left: 4px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZEQUE2RDtBQUM3RDtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osNENBQTRDO0FBQzVDO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsaUJBQWlCO0FBQ2pCLGNBQWM7QUFDZDtBQUNBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0EsV0FBVztBQUNYLHlCQUF5QjtBQUN6QixZQUFZO0FBQ1osbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBLFlBQVk7QUFDWix5QkFBeUI7QUFDekIsWUFBWTtBQUNaO0FBQ0E7QUFDQSxZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVtYW5zJyk7XG4uY29udGFpbmVye1xuaGVpZ2h0OiAxMDAlO1xuYWxpZ24tY29udGVudDogY2VudGVyO1xubWFyZ2luLXRvcDogNDBweDtcbn1cbi5jYXJke1xuaGVpZ2h0OiAzNzBweDtcbm1hcmdpbi10b3A6IGF1dG87XG5tYXJnaW4tYm90dG9tOiBhdXRvO1xud2lkdGg6IDQwMHB4O1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpICFpbXBvcnRhbnQ7XG59XG4uc29jaWFsX2ljb24gc3BhbntcbmZvbnQtc2l6ZTogNjBweDtcbm1hcmdpbi1sZWZ0OiAxMHB4O1xuY29sb3I6ICMxMjk4ZmY7XG59XG4uc29jaWFsX2ljb24gc3Bhbjpob3ZlcntcbmNvbG9yOiB3aGl0ZTtcbmN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkLWhlYWRlciBoM3tcbmNvbG9yOiB3aGl0ZTtcbn1cbi5zb2NpYWxfaWNvbntcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnJpZ2h0OiAyMHB4O1xudG9wOiAtNDVweDtcbn1cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW57XG53aWR0aDogNTBweDtcbmJhY2tncm91bmQtY29sb3I6ICMxMjk4ZmY7XG5jb2xvcjogYmxhY2s7XG5ib3JkZXI6MCAhaW1wb3J0YW50O1xufVxuaW5wdXQ6Zm9jdXN7XG5vdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xuYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuLnJlbWVtYmVye1xuY29sb3I6IHdoaXRlO1xufVxuLnJlbWVtYmVyIGlucHV0XG57XG53aWR0aDogMjBweDtcbmhlaWdodDogMjBweDtcbm1hcmdpbi1sZWZ0OiAxNXB4O1xubWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4ubG9naW5fYnRue1xuY29sb3I6IGJsYWNrO1xuYmFja2dyb3VuZC1jb2xvcjogIzEyOThmZjtcbndpZHRoOiAxMDBweDtcbn1cbi5sb2dpbl9idG46aG92ZXJ7XG5jb2xvcjogYmxhY2s7XG5iYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5saW5rc3tcbmNvbG9yOiB3aGl0ZTtcbn1cbi5saW5rcyBhe1xubWFyZ2luLWxlZnQ6IDRweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);






let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, notifier, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.notifier = notifier;
        this.router = router;
        this.form = this.formBuilder.group({
            username: [''],
            password: ['']
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.form.value);
        this.authService.login(this.form.value).subscribe((user) => {
            console.log(user);
            this.router.navigate(['/']);
        }, (error) => {
            console.log('error: ' + error);
            this.notifier.alert(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SignupComponent = class SignupComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.country_list = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas",
            "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands",
            "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica",
            "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
            "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
            "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India",
            "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia",
            "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
            "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia",
            "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
            "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
            "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan",
            "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia",
            "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay",
            "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
        this.form = this.formBuilder.group({
            firstName: [''],
            lastName: [''],
            gender: [''],
            email: [''],
            username: [''],
            password: [''],
            confirmPassword: [''],
            country: ['']
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.form.value);
        const vals = Object.assign({}, this.form.value);
        const user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](null, vals.username, vals.firstName, vals.lastName, vals.gender, vals.password, vals.email);
        this.authService.signup(user).subscribe((user) => {
            console.log(user);
            this.router.navigate(['/']);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/models/album.ts":
/*!*********************************!*\
  !*** ./src/app/models/album.ts ***!
  \*********************************/
/*! exports provided: Album */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Album", function() { return Album; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Album {
    constructor(id, name, artist, releaseDate, coverArt, songs) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.releaseDate = releaseDate;
        this.coverArt = coverArt;
        this.songs = songs;
    }
}


/***/ }),

/***/ "./src/app/models/playlist.ts":
/*!************************************!*\
  !*** ./src/app/models/playlist.ts ***!
  \************************************/
/*! exports provided: Playlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Playlist", function() { return Playlist; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Playlist {
    constructor(playlist_name, cover_art_url, songs) {
        this.playlist_name = playlist_name;
        this.cover_art_url = cover_art_url;
        this.songs = songs;
    }
}


/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(id, username, firstName, lastName, gender, password, email) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.password = password;
        this.email = email;
    }
}


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.left-nav {\n    margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxlZnQtbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/new-album/new-album.component.css":
/*!***************************************************!*\
  !*** ./src/app/new-album/new-album.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.upload-form {\n    background-color: white;\n    margin-top: 15px;\n    /* width: 500px; */\n    padding: 20px;\n}\n.new-album-link{\n    float: right;\n}\nimg{\n    width: 100%;\n}\n.btn-add-song{\n    float: right;\n}\n.form-row {\n    margin-bottom: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWFsYnVtL25ldy1hbGJ1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmV3LWFsYnVtL25ldy1hbGJ1bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udXBsb2FkLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgLyogd2lkdGg6IDUwMHB4OyAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4ubmV3LWFsYnVtLWxpbmt7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5pbWd7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG4tYWRkLXNvbmd7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uZm9ybS1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/new-album/new-album.component.ts":
/*!**************************************************!*\
  !*** ./src/app/new-album/new-album.component.ts ***!
  \**************************************************/
/*! exports provided: NewAlbumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAlbumComponent", function() { return NewAlbumComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





 // RxJS 6 syntax


let NewAlbumComponent = class NewAlbumComponent {
    constructor(formBuilder, apiService, notifier, router) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.notifier = notifier;
        this.router = router;
        this.coverArtUrl = 'http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png';
        this.form = this.formBuilder.group({
            name: [''],
            author: [''],
            release_date: [''],
            songs: this.formBuilder.array([]),
            album: [''],
            cover_art_img: ['']
        });
    }
    ngOnInit() {
    }
    get songs() {
        return this.form.get('songs');
    }
    addSongForm(event) {
        console.log('Add song form');
        event.preventDefault();
        const songform = this.formBuilder.group({
            name: [''],
            media_file: ['']
        });
        this.form.controls.songs.push(songform);
    }
    onSubmit() {
        console.log(this.form.value);
        // this.apiService.newAlbum(this.form.value).subscribe((res) => console.log(res));
        this.apiService.newAlbum(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((album) => {
            console.log(album);
            const data = new FormData();
            data.append('album_id', String(album.id));
            data.append('cover_file', this.imageFile);
            const requests = [];
            album.songs.forEach((song, idx) => {
                console.log(this.form.controls.songs.controls[idx].get('media_file').value);
                const songdata = new FormData();
                songdata.append('song_id', String(song.id));
                songdata.append('media_file', this.form.controls.songs.controls[idx].get('media_file').value);
                requests.push(this.apiService.uploadSong(songdata));
            });
            requests.push(this.apiService.uploadAlbumCover(data));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(requests);
        })).subscribe((res) => {
            console.log(res);
            this.notifier.success('Album uploaded!');
            this.router.navigate(['/']);
        });
    }
    imageSelected(files) {
        if (files.length === 0)
            return;
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            // this.message = 'Only images are supported.';
            return;
        }
        const reader = new FileReader();
        this.imageFile = files[0];
        reader.readAsDataURL(files[0]);
        reader.onload = (_) => {
            this.coverArtUrl = reader.result;
        };
        // this.form.get('cover_art_img').setValue(this.imageFile)
    }
    songFileSelected(files, idx) {
        if (files.length === 0)
            return;
        // TODO Check mimeType
        this.form.controls.songs.controls[idx].get('media_file').setValue(files[0]);
    }
};
NewAlbumComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
NewAlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-album',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-album/new-album.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-album.component.css */ "./src/app/new-album/new-album.component.css")).default]
    })
], NewAlbumComponent);



/***/ }),

/***/ "./src/app/new-song/new-song.component.css":
/*!*************************************************!*\
  !*** ./src/app/new-song/new-song.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.upload-form {\n    background-color: white;\n    margin-top: 15px;\n    /* width: 500px; */\n    padding: 20px;\n}\n.new-album-link{\n    float: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LXNvbmcvbmV3LXNvbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbmV3LXNvbmcvbmV3LXNvbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVwbG9hZC1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC8qIHdpZHRoOiA1MDBweDsgKi9cbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLm5ldy1hbGJ1bS1saW5re1xuICAgIGZsb2F0OiByaWdodDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/new-song/new-song.component.ts":
/*!************************************************!*\
  !*** ./src/app/new-song/new-song.component.ts ***!
  \************************************************/
/*! exports provided: NewSongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSongComponent", function() { return NewSongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");




let NewSongComponent = class NewSongComponent {
    constructor(formBuilder, apiService) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        // name = new FormControl('');
        this.genres = [
            { id: 1, name: 'rock' },
            { id: 2, name: 'pop' },
            { id: 3, name: 'classical' },
            { id: 4, name: 'r&b' }
        ];
        this.form = this.formBuilder.group({
            name: [''],
            genres: this.formBuilder.array([]),
            album: [''],
            media_file: null,
            lyrics: ['']
        });
        this.addGenreCheckboxes();
    }
    addGenreCheckboxes() {
        this.genres.forEach((o, i) => {
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](i === 0); // if first item set to true, else false
            this.form.controls.genres.push(control);
        });
    }
    ngOnInit() {
        this.apiService.getAlbums(0).subscribe(albums => {
            this.albums = albums;
            console.log(albums);
        });
    }
    onSubmit() {
        console.log(this.form.value);
        this.apiService.newSong(this.form.value).subscribe((res) => {
            console.log(res);
            const data = new FormData();
            data.append('song_id', res.id);
            data.append('media_file', this.form.get('media_file').value);
            this.apiService.uploadSong(data).subscribe((res) => {
                console.log('media file uploaded!');
                console.log(res);
            });
        });
    }
    fileUpload(evt) {
        console.log(evt.target.files);
        this.form.get('media_file').setValue(evt.target.files[0]);
        this.mediaFile = evt.target.files[0];
    }
};
NewSongComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
NewSongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-song',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-song.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-song/new-song.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-song.component.css */ "./src/app/new-song/new-song.component.css")).default]
    })
], NewSongComponent);



/***/ }),

/***/ "./src/app/player/player.component.css":
/*!*********************************************!*\
  !*** ./src/app/player/player.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.remove-button{\n    float: right;\n    width: 15px;\n    height: 15px;\n    margin: auto 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnJlbW92ZS1idXR0b257XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICBtYXJnaW46IGF1dG8gNXB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amplitude_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../amplitude.service */ "./src/app/amplitude.service.ts");



let PlayerComponent = class PlayerComponent {
    constructor(ampService) {
        this.ampService = ampService;
        this.playlistOpened = false;
    }
    ngOnInit() {
        this.ampService.startAmplitude();
    }
    togglePlaylist() {
        this.playlistOpened = !this.playlistOpened;
    }
    addSong(song) {
        this.ampService.addSong(song);
    }
    playSongAtIndex(i) {
        this.ampService.playSongAtIndex(i);
    }
    removeSong(event, songId) {
        event.stopPropagation();
        this.ampService.removeSong(songId);
    }
};
PlayerComponent.ctorParameters = () => [
    { type: _amplitude_service__WEBPACK_IMPORTED_MODULE_2__["AmplitudeService"] }
];
PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-player',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")).default]
    })
], PlayerComponent);



/***/ }),

/***/ "./src/app/playlist/playlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/playlist/playlist.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playlist-description {\n    margin-top: 20px;\n}\n.playlist-description img {\n    max-width: 450px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5bGlzdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wbGF5bGlzdC1kZXNjcmlwdGlvbiBpbWcge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/playlist/playlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/playlist/playlist.component.ts ***!
  \************************************************/
/*! exports provided: PlaylistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistComponent", function() { return PlaylistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_playlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/playlist */ "./src/app/models/playlist.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _amplitude_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../amplitude.service */ "./src/app/amplitude.service.ts");




// import { Location } from '@angular/common';


let PlaylistComponent = class PlaylistComponent {
    constructor(route, 
    // private location: Location,
    api, amplitude) {
        this.route = route;
        this.api = api;
        this.amplitude = amplitude;
        this.playlist = new _models_playlist__WEBPACK_IMPORTED_MODULE_2__["Playlist"]('Playlist_name', 'art', null);
    }
    ngOnInit() {
        this.getPlaylist();
    }
    getPlaylist() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getPlaylist(id)
            .subscribe(playlist => {
            this.playlist = playlist;
        });
    }
    addPlaylistToQueue() {
        this.amplitude.addSongs(this.playlist.songs);
    }
};
PlaylistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _amplitude_service__WEBPACK_IMPORTED_MODULE_5__["AmplitudeService"] }
];
PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.component.css */ "./src/app/playlist/playlist.component.css")).default]
    })
], PlaylistComponent);



/***/ }),

/***/ "./src/app/song-list/song-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/song-list/song-list.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nli.playlist-song:hover {\n    background-color: #f1f2f3;\n}\n.playlist-song div.playlist-song-meta {\n    float: left;\n    margin-left: 15px;\n    /* width: calc( 100% - 80px ); */\n}\n.playlist-song-meta span.playlist-song-name {\n    color: #414344;\n    font-size: 14px;\n    display: block;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.playlist-song-meta span.playlist-artist-album {\n    color: #AAAFB3;\n    font-size: 12px;\n    display: block;\n    width: 100%;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.song-button {\n    display: inline;\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    padding: 6px 0;\n    font-size: 12px;\n    line-height: 1.428571429;\n    border-radius: 15px;\n    margin: auto 2px;\n}\n.song-list {\n    margin-top: 10px;\n}\n.song-buttons {\n    float: right;\n}\n.btn-circle {\n    width: 30px;\n    height: 30px;\n    text-align: center;\n    padding: 6px 0;\n    font-size: 12px;\n    line-height: 1.428571429;\n    border-radius: 15px;\n    margin: auto 2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFFO0FBQzdCO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUU7QUFFN0I7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5saS5wbGF5bGlzdC1zb25nOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMmYzO1xufVxuLnBsYXlsaXN0LXNvbmcgZGl2LnBsYXlsaXN0LXNvbmctbWV0YSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgLyogd2lkdGg6IGNhbGMoIDEwMCUgLSA4MHB4ICk7ICovXG59XG4ucGxheWxpc3Qtc29uZy1tZXRhIHNwYW4ucGxheWxpc3Qtc29uZy1uYW1lIHtcbiAgICBjb2xvcjogIzQxNDM0NDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4ucGxheWxpc3Qtc29uZy1tZXRhIHNwYW4ucGxheWxpc3QtYXJ0aXN0LWFsYnVtIHtcbiAgICBjb2xvcjogI0FBQUZCMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbi5zb25nLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNnB4IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQyOTtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIG1hcmdpbjogYXV0byAycHg7XG59XG4uc29uZy1saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc29uZy1idXR0b25zIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uYnRuLWNpcmNsZSB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA2cHggMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvIDJweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/song-list/song-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/song-list/song-list.component.ts ***!
  \**************************************************/
/*! exports provided: SongListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function() { return SongListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _amplitude_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../amplitude.service */ "./src/app/amplitude.service.ts");



let SongListComponent = class SongListComponent {
    constructor(amplitude) {
        this.amplitude = amplitude;
    }
    ngOnInit() {
    }
    addSongToQueue(song) {
        this.amplitude.addSong(song);
    }
    playSong(song) {
        this.amplitude.playNow(song);
    }
};
SongListComponent.ctorParameters = () => [
    { type: _amplitude_service__WEBPACK_IMPORTED_MODULE_2__["AmplitudeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListComponent.prototype, "songs", void 0);
SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-list.component.css */ "./src/app/song-list/song-list.component.css")).default]
    })
], SongListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/Shared/Documents/Web/mplayer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map