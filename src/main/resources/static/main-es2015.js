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
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"collection?.length\">\n    <h4>{{ title }}</h4>\n    <p-carousel [value]=\"collection\" [numVisible]=\"collection.length > 3 ? 4 : collection.length\" [numScroll]=\"1\" [dotsContainerClass]=\"dots\">\n        <ng-template let-album pTemplate=\"item\">\n            <div class=\"song-to-add\">\n                <a href=\"\" [routerLink]=\"[collectionType, album.id]\">\n                    <img src=\"{{ album.cover_art_url }}\"/>\n                </a>\n                <div class=\"row\">\n                    <div class=\"col\" class=\"mx-auto\">\n                        <h5>{{ album.name }}</h5>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col\" class=\"mx-auto\">\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n                            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"playCollection.emit(album)\" >\n                                <fa-icon [icon]=\"faPlay\"></fa-icon>\n                            </button>\n\n                            <div class=\"btn-group\" role=\"group\">\n                                <button id=\"btnGroupDrop1\" type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                </button>\n                                <div class=\"dropdown-menu\" aria-labelledby=\"btnGroupDrop1\">\n                                    <a class=\"dropdown-item\" style=\"cursor:pointer\" (click)=\"addToQueue.emit(album)\">Add To Play Queue</a>\n                                    <a *ngIf=\"false\" class=\"dropdown-item\" style=\"cursor:pointer\" (click)=\"addToPlaylist.emit(album)\">Add to Playlist</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-carousel>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/album.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/album/album.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"playlist-description row\">\n        <img class=\"col-sm\" src=\"{{ album.cover_art_url }}\">\n        <div class=\"col-sm\" >\n            <h3>\n                {{ album.name }}\n            </h3>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Artist</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ album.artist }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Release Date</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ album.releaseDate | date }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Genres</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ album.genres }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\"># Likes</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ album.totalLikes }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\"># Dislikes</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ album.totalDislikes }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\"># Reproductions</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ album.totalReproductions }}\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"playAlbum()\">\n                Play Album <fa-icon [icon]=\"faPlay\"></fa-icon>\n            </button>\n            <button type=\"button\" style=\"margin-left: 5px\" class=\"btn btn-primary\" (click)=\"addPlaylistToQueue()\">\n                Add To Queue <fa-icon [icon]=\"faPlus\"></fa-icon>\n            </button>\n        </div>\n    </div>\n    <br />\n    <app-likes *ngIf=\"enableLikes\" [model]=\"album\" [enabled]=\"enableLikes\"\n               [modelType]=\"'albums'\" (likeEvent)=\"likeEvent($event)\" [liked]=\"liked\" [disliked]=\"disliked\"></app-likes>\n    <app-song-list [songs]=\"album.songs\" [isLoggedIn]=\"currentUser\"></app-song-list>\n    <br />\n    <div class=\"row\">\n        <div class=\"col\">\n            <app-comments [comments]=\"comments\"\n                          (postComment)=\"createComment($event)\"\n                          [enablePost]=\"currentUser\"\n            ></app-comments>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container-fluid\">\n    <div class=\"row\" *ngIf=\"!isAuthRoute() ; else login\">\n        <div class=\"col-4\" >\n            <div class=\"left\">\n                <app-player></app-player>\n            </div>\n        </div>\n        <div class=\"col-8\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n    <ng-template #login>\n        <router-outlet></router-outlet>\n    </ng-template>\n</div>\n<simple-notifications></simple-notifications>\n<ngx-loading-bar></ngx-loading-bar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<div class=\"container\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3>Log In</h3>\n\t\t\t\t<div class=\"d-flex justify-content-end social_icon\">\n\t\t\t\t\t  <!-- <span><i class=\"fab fa-facebook-square\"></i></span> -->\n\t\t\t\t\t<span (click)=\"oauthLogin()\"><i class=\"fab fa-google-plus-square\"></i></span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"card-body\">\n\t\t\t\t  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [class.was-validated]=\"wasValidated\">\n\t\t\t\t\t    <div class=\"input-group form-group\">\n\t\t\t\t\t\t      <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t        <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t      <input type=\"text\" class=\"form-control\" [class.is-invalid]=\"usernameValid()\" placeholder=\"username\" formControlName=\"username\" required>\n                  <div class=\"invalid-feedback\">\n                      {{ usernameError }}\n                  </div>\n\t\t\t        </div>\n\t\t\t\t\t    <div class=\"input-group form-group\">\n\t\t\t\t\t\t      <div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t        <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t      </div>\n\t\t\t\t\t\t      <input type=\"password\" class=\"form-control\" [class.is-invalid]=\"passwordValid()\" placeholder=\"password\" formControlName=\"password\" required>\n                  <div class=\"invalid-feedback\">\n                      {{ passwordError }}\n                  </div>\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"row align-items-center remember\">\n\t\t\t\t\t\t      <input type=\"checkbox\">Remember Me\n\t\t\t\t\t    </div>\n\t\t\t\t\t    <div class=\"form-group\">\n\t\t\t\t\t\t      <input type=\"submit\" value=\"Login\" class=\"btn float-right login_btn\">\n\t\t\t\t\t    </div>\n\t\t\t\t  </form>\n\t\t\t</div>\n\t\t\t<div class=\"card-footer\">\n\t\t\t\t  <div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t    Don't have an account?<a href=\"\" routerLink=\"/signup\">Sign Up</a>\n\t\t\t\t  </div>\n\t\t\t\t  <div class=\"d-flex justify-content-center\">\n\t\t\t\t\t    <a href=\"#\">Forgot your password?</a>\n\t\t\t\t  </div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n    <br>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <header class=\"card-header\">\n\t                  <a href=\"\" routerLink=\"/login\" class=\"float-right btn btn-outline-primary mt-1\">Log in</a>\n\t                  <h4 class=\"card-title mt-2\">Sign Up</h4>\n                </header>\n                <article class=\"card-body\">\n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\t                      <div class=\"form-row\">\n\t\t                        <div class=\"col form-group\">\n\t\t\t                          <label>First name </label>\n\t  \t                        <input type=\"text\" class=\"form-control\" [class]=\"getFieldClass(firstName)\" placeholder=\"\" formControlName=\"firstName\">\n                              <div class=\"invalid-input\" *ngIf=\"invalidField(firstName)\">\n                                  You need to enter your first name.\n                              </div>\n\t\t                        </div> <!-- form-group end.// -->\n\t\t                        <div class=\"col form-group\">\n\t\t\t                          <label>Last name</label>\n\t\t  \t                        <input type=\"text\" class=\"form-control\" [class]=\"getFieldClass(lastName)\" placeholder=\" \" formControlName=\"lastName\">\n                                <div class=\"invalid-input\" *ngIf=\"invalidField(lastName)\">\n                                    You need to enter your last name.\n                                </div>\n\t\t                        </div> <!-- form-group end.// -->\n\t                      </div> <!-- form-row end.// -->\n\t                      <div class=\"form-group\">\n\t\t                        <label>Email address</label>\n\t\t                        <input type=\"email\" class=\"form-control\" [class]=\"getFieldClass(email)\" placeholder=\"\" formControlName=\"email\">\n\t\t                        <small class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n\n                            <div class=\"invalid-input\" *ngIf=\"invalidField(email)\">\n                                You need to enter a valid email.\n                            </div>\n\t                      </div> <!-- form-group end.// -->\n\t                      <div class=\"form-group\">\n                            <label>Gender</label>\n                            <br />\n\t\t\t                      <label class=\"form-check form-check-inline\">\n\t\t                            <input class=\"form-check-input\" [class]=\"getFieldClass(gender, 'form-check-input')\" type=\"radio\" name=\"gender\" value=\"male\" formControlName=\"gender\">\n\t\t                            <span class=\"form-check-label\"> Male </span>\n\t\t                        </label>\n\t\t                        <label class=\"form-check form-check-inline\">\n\t\t                            <input class=\"form-check-input\" [class]=\"getFieldClass(gender, 'form-check-input')\" type=\"radio\" name=\"gender\" value=\"female\" formControlName=\"gender\">\n\t\t                            <span class=\"form-check-label\"> Female</span>\n\t\t                        </label>\n\n                            <div class=\"invalid-input\" *ngIf=\"invalidField(gender)\">\n                                Please select your gender.\n                            </div>\n\t                      </div> <!-- form-group end.// -->\n\t                      <div class=\"form-group\">\n\t\t                        <label>Country</label>\n\t\t                        <select id=\"inputState\" class=\"form-control\" [class]=\"getFieldClass(country)\" formControlName=\"country\">\n                                <option *ngFor=\"let country of country_list\" value=\"{{ country }}\">{{ country }}</option>\n\t\t                            <option selected=\"\">United States</option>\n\t\t                        </select>\n                            <div class=\"invalid-input\" *ngIf=\"invalidField(country)\">\n                                Please select your country.\n                            </div>\n\t\t                    </div> <!-- form-group end.// -->\n\t\t                    <div class=\"form-group\">\n\t\t                        <label>Username</label>\n\t                          <input type=\"text\" class=\"form-control\" [class]=\"getFieldClass(username)\" placeholder=\"\" formControlName=\"username\">\n                            <div class=\"invalid-input\" *ngIf=\"invalidField(username)\">\n                                You need to select an username.\n                            </div>\n\t                      </div> <!-- form-group end.// -->\n\t\t                    <div class=\"form-group\">\n\t\t                        <label>Create password</label>\n\t                          <input class=\"form-control\" [class]=\"getFieldClass(password)\" type=\"password\" formControlName=\"password\">\n\n                            <div class=\"invalid-input\" *ngIf=\"invalidField(password)\">\n                                You need to enter a password.\n                            </div>\n\t                      </div> <!-- form-group end.// -->\n\t\t                    <div class=\"form-group\">\n\t\t                        <label>Confirm password</label>\n\t                          <input class=\"form-control\" [class]=\"getConfirmPassClass()\" type=\"password\" formControlName=\"confirmPassword\">\n                            <div class=\"invalid-input\" *ngIf=\"invalidField(confirmPassword)\">\n                                You need to confirm your password.\n                            </div>\n                            <div class=\"invalid-input\" *ngIf=\"form.errors && form.errors.passwordMismatch\">\n                                The passwords must match.\n                            </div>\n\t                      </div> <!-- form-group end.// -->\n\t                      <div class=\"form-group\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-block\"> Register  </button>\n                            <!-- <p> -->\n                            <!-- Form Status: {{ form.status }} <br /> -->\n                            <!-- </p> -->\n                        </div> <!-- form-group// -->\n                    </form>\n                </article> <!-- card-body end .// -->\n                <div class=\"border-top card-body text-center\">Have an account? <a href=\"\" routerLink=\"/login\">Log In</a></div>\n            </div> <!-- card.// -->\n        </div> <!-- col.//-->\n\n    </div> <!-- row.//-->\n\n\n</div> \n<!--container end.//-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row bootstrap snippets\">\n    <div class=\"col\">\n        <div class=\"comment-wrapper\">\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <h2>Comments</h2>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"post-comment\" *ngIf=\"enablePost\">\n                        <textarea [(ngModel)]=\"newComment\" class=\"form-control\" placeholder=\"write a comment...\" rows=\"3\"></textarea>\n                        <button id=\"post-comment\" type=\"button\" class=\"btn btn-primary pull-right\" (click)=\"addComment()\">Post</button>\n                    </div>\n                    <div class=\"clearfix\"></div>\n                    <hr>\n                    <ul class=\"media-list\">\n                        <li class=\"media\" *ngFor=\"let comment of comments\">\n                            <a href=\"#\" class=\"pull-left\">\n                                <img src=\"{{ comment.userPhoto }}\" alt=\"\" class=\"img-circle\">\n                            </a>\n                            <div class=\"media-body\">\n                                <span class=\"text-muted pull-right\">\n                                    <small class=\"text-muted\">{{ comment.createdAt  | date }}</small>\n                                </span>\n                                <strong class=\"text-success\">{{ comment.username }}</strong>\n                                <p>\n                                    {{ comment.comment }}\n                                </p>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br />\n<app-album-collection *ngIf=\"recentlyPlayedAlbums.length > 0\" [collection]=\"recentlyPlayedAlbums\"\n                      title=\"Recently Played Albums\"\n                      (addToQueue)=\"addAlbumToQueue($event)\"\n                      (playCollection)=\"playAlbum($event)\">\n</app-album-collection>\n<app-album-collection [collection]=\"mostLikedAlbums\"\n                      title=\"Most Liked Albums\"\n                      (addToQueue)=\"addAlbumToQueue($event)\"\n                      (playCollection)=\"playAlbum($event)\">\n</app-album-collection>\n<app-album-collection [collection]=\"mostPlayedAlbums\"\n                      title=\"Most Played Albums\"\n                      (addToQueue)=\"addAlbumToQueue($event)\"\n                      (playCollection)=\"playAlbum($event)\">\n</app-album-collection>\n<app-album-collection [collection]=\"recentAlbums\"\n                      title=\"Recently Created Albums\"\n                      (addToQueue)=\"addAlbumToQueue($event)\"\n                      (playCollection)=\"playAlbum($event)\">\n</app-album-collection>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/likes/likes.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/likes/likes.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col\">\n        <span>{{ model.totalLikes }} likes </span>\n        <button *ngIf=\"enabled\"  class=\"btn btn-small\" [ngClass]=\"liked? 'btn-primary' : 'btn-outline-primary'\" type=\"button\" (click)=\"likeClick()\">\n            <span class=\"oi oi-thumb-up\" title=\"plus\" aria-hidden=\"true\"></span>\n        </button>\n        <span>{{ model.totalDislikes }} dislikes</span>\n        <button *ngIf=\"enabled\" class=\"btn btn-small\" [ngClass]=\"disliked? 'btn-primary' : 'btn-outline-primary'\" type=\"button\" (click)=\"dislikeClick()\">\n            <span class=\"oi oi-thumb-down\" title=\"plus\" aria-hidden=\"true\"></span>\n        </button>\n    </div>\n    <div class=\"col\">\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages-view/messages-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages-view/messages-view.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n\n        <div class=\"conversation-wrap col-lg-3\">\n\n            <div class=\"media conversation\" *ngFor=\"let conversation of conversations; index as i\" (click)=\"selectConversation(i)\">\n                <a class=\"pull-left\" href=\"#\">\n                    <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 50px; height: 50px;\" src=\"{{ conversation.userPhoto }}\">\n                </a>\n                <div class=\"media-body\">\n                    <h6 class=\"media-heading\">{{ conversation.user }}</h6>\n                    <small>{{ conversation.messages.length }} Messages</small>\n                </div>\n            </div>\n\n        </div>\n\n\n\n        <div class=\"message-wrap col-lg-8\">\n            <div class=\"msg-wrap\" *ngIf=\"selectedConversation != null\">\n\n                <div class=\"media msg\" *ngFor=\"let message of conversations[selectedConversation].messages\">\n                    <a class=\"pull-left\" href=\"#\">\n                        <img class=\"media-object\" data-src=\"holder.js/64x64\" alt=\"64x64\" style=\"width: 32px; height: 32px;\" src=\"{{ message.senderPhoto }}\">\n                    </a>\n                    <div class=\"media-body\">\n                        <small class=\"pull-right time\"><i class=\"fa fa-clock-o\"></i>{{ message.createdAt | date }}</small>\n\n                        <h5 class=\"media-heading\">{{ message.sender }}</h5>\n                        <small class=\"col-lg-10\">{{ message.message }}</small>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"send-wrap \">\n                <textarea class=\"form-control send-message\" name=\"newMessage\" rows=\"3\" placeholder=\"Write a reply...\" [(ngModel)]=\"newMessage\"></textarea>\n            </div>\n            <div class=\"btn-panel\">\n                <button class=\" col btn btn-primary send-message-btn pull-right\" role=\"button\" (click)=\"postMessage()\"><i class=\"fa fa-plus\"></i> Send Message</button>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/new-message/new-message.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/messages/new-message/new-message.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Send Message to User</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form>\n        <div class=\"\">\n            <label>To: <a [routerLink]=\"['/users/', user.id]\">{{ user.username }}</a></label>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"message\">Message:</label>\n            <textarea name=\"message\" class=\"form-control\" id=\"message\" rows=\"3\" [(ngModel)]=\"message\"></textarea>\n        </div>\n    </form>\n</div>\n\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Cancel')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"postMessage()\">Post Message</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"\" routerLink=\"/\">Music ON!</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"currentUser\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n              Upload\n          </a>\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n              <!-- <a class=\"dropdown-item\" href=\"\" routerLink=\"songs/new\">Upload Song</a> -->\n              <a class=\"dropdown-item\" href=\"\" routerLink=\"album/new\">New Album</a>\n          </div>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"isAdmin\">\n          <a class=\"nav-link\" href=\"\" routerLink=\"/admin/users\">Admin</a>\n      </li>\n    </ul>\n\n    <app-search></app-search>\n\n    <ul class=\"navbar-nav left-nav\" *ngIf=\"!currentUser ; else user\">\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" routerLink=\"/login\">\n                Login\n                <span class=\"oi oi-account-login\" title=\"account login\" aria-hidden=\"true\"></span>\n            </a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"\" routerLink=\"/signup\">\n                Sign Up\n                <span class=\"oi oi-person\" title=\"account signup\" aria-hidden=\"true\"></span>\n            </a>\n        </li>\n    </ul>\n    <ng-template #user>\n        <ul class=\"navbar-nav left-nav\">\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    {{ currentUser.username }}\n                    <span class=\"oi oi-person\" title=\"account signup\" aria-hidden=\"true\"></span>\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" routerLink=\"/users/profile\">Profile</a>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" href=\"\" (click)=\"logout()\">\n                        Logout\n                        <span class=\"oi oi-account-logout\" title=\"account login\" aria-hidden=\"true\"></span>\n                    </a>\n                </div>\n            </li>\n        </ul>\n    </ng-template>\n  </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-album/new-album.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-album/new-album.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container upload-form\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>New Album</h1>\n            <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" [class.was-validated]=\"wasValidated\">\n                <div class=\"row\">\n                    <div class=\"col-4\">\n                        <img class=\"\" [src]=\" coverArtUrl\">\n                        <div class=\"custom-file\">\n                            <input #file type=\"file\" accept=\"image/*\" formControlName=\"cover_art_img\"  class=\"custom-file-input\" id=\"customFile\" (change)=\"imageSelected(file.files)\">\n                            <label class=\"custom-file-label\" [class.invalid-file]=\"invalidImage\" for=\"customFile\">Cover Art Image</label>\n                            <div class=\"invalid-file-feedback\">{{ imgFileError }}</div>\n                        </div>\n                    </div>\n                    <div class=\"col-8\">\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Name</label>\n                            <input type=\"tex\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"name\" required>\n                            <div class=\"invalid-feedback\">\n                                Please enter a name for the album.\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Artist</label>\n                            <input type=\"tex\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"artist\" required>\n                            <div class=\"invalid-feedback\">\n                                Please enter the author of the album.\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"exampleFormControlInput1\">Release Date</label>\n                            <input type=\"date\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"\" formControlName=\"release_date\" required>\n                            <div class=\"invalid-feedback\">\n                                Please select a release date.\n                            </div>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"genres\">Genres</label>\n                            <ng-select\n                                       [items]=\"genres\"\n                                       bindLabel=\"genre\"\n                                       bindValue=\"genre\"\n                                       labelForId=\"state\"\n                                       [multiple]=\"true\"\n                                       placeholder=\"Select genres\"\n                                       clearAllText=\"Clear\"\n                                       formControlName=\"genres\">\n                            </ng-select>\n                            <div class=\"invalid-feedback\">\n                                Please select one or several genres.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <br />\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <h2>List of Songs</h2>\n                    </div>\n                    <div class=\"col\">\n                        <a class=\"btn btn-primary btn-add-song\" href=\"\" (click)=\"addSongForm($event)\">Add Song</a>\n                    </div>\n                </div>\n\n                <div formArrayName=\"songs\">\n\n                    <div *ngFor=\"let songform of songs.controls; let i=index\">\n                        <div [formGroupName]=\"i\" class=\"form-row\">\n                            <label class=\"my-1 mr-2\">{{ i + 1 }}.</label>\n                            <div class=\"col\">\n                                <input class=\"form-control form-control-sm\" type=\"text\" placeholder=\"Name of the song\" formControlName=\"name\" required/>\n                            </div>\n                            <div class=\"col\">\n                                <div class=\"custom-file form-control-sm\">\n                                    <input #file type=\"file\" accept=\"audio/*\" class=\"custom-file-input form-control-file\" (change)=\"songFileSelected(file.files, i, $event)\" required>\n                                    <label class=\"custom-file-label form-control-sm\" [class.invalid-file]=\"invalidImage\" for=\"customFile\">Audio File</label>\n                                    <div class=\"invalid-file-feedback\">{{ audioFileError[i] }}</div>\n                                </div>\n                                <!-- <input #file type=\"file\" accept=\"audio/*\" class=\"form-control-file\" (change)=\"songFileSelected(file.files, i)\" required> -->\n                            </div>\n                            <div class=\"col\">\n                                <button class=\"btn btn-small btn-danger btn-delete\" type=\"button\" (click)=\"deleteSongForm(i)\">\n                                    <span class=\"oi oi-delete\" title=\"plus\" aria-hidden=\"true\"></span>\n                                </button>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <button class=\"btn btn-primary btn-lg\">Create Album</button>\n            </form>\n\n        </div>\n    </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"playlist\">\n    <div class=\"playlist-description row\">\n        <img class=\"col-sm\" src=\"{{ playlist.cover_art_url }}\">\n        <div class=\"col-sm\" >\n            <h3>\n                {{ playlist.name }}\n            </h3>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Created At</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ playlist.createdAt | date }}\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"playPlaylist()\">\n                Play <fa-icon [icon]=\"faPlay\"></fa-icon>\n            </button>\n            <button type=\"button\" style=\"margin-left: 5px\" class=\"btn btn-primary\" (click)=\"addPlaylistToQueue()\">\n                Add To Queue <fa-icon [icon]=\"faPlus\"></fa-icon>\n            </button>\n        </div>\n    </div>\n    <br />\n    <app-song-list [songs]=\"playlist.songs\" [isLoggedIn]=\"currentUser\"></app-song-list>\n    <br />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlists-modal/playlists-modal.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playlists-modal/playlists-modal.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Add To Playlist</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <table class=\"table\">\n        <tbody>\n            <tr>\n                <td>\n                    <input class=\"form-control\" type=\"text\" name=\"newPlaylist\" [(ngModel)]=\"newPlaylist\" placeholder=\"Create New Playlist\" />\n                </td>\n                <td>\n                    <button class=\"btn btn-outline-primary btn-sm\" (click)=\"addToNewPlaylist()\">Add</button>\n                </td>\n            </tr>\n            <tr *ngFor=\"let playlist of playlists\">\n                <td>{{ playlist.name }}</td>\n                <td><button class=\"btn btn-outline-primary btn-sm\" (click)=\"addToPlaylist(playlist)\">Add</button></td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"activeModal.dismiss('close')\">Close</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"form-inline my-2 my-lg-0\">\n    <input id=\"typeahead-fplace\"  type=\"text\" class=\"form-control mr-sm-2\"  name=\"fplace\"\n           placeholder=\"Search\"\n           [(ngModel)]=\"selectedSearch\"\n           [ngbTypeahead]=\"search\"\n           [inputFormatter]=\"rformatter\"\n           [resultFormatter]=\"formatter\"\n           (selectItem)=\"SearchSelected($event)\"\n           [editable]='true'\n    />\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" (click)=\"submit()\">Search</button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row song-list\">\n    <ul class=\"list-group col-sm\">\n        <li class=\"list-group-item playlist-song\" *ngFor=\"let song of songs; index as i;\">\n            <div class=\"playlist-song-meta\">\n                <span class=\"playlist-song-name\">{{ song.name }}</span>\n                <span class=\"playlist-artist-album\">{{ song.album }}</span>\n            </div>\n            <div class=\"song-buttons\">\n                <button id=\"play-pause\" class=\"btn btn-light btn-circle\" (click)=\"playSong(song)\">\n                    <span class=\"oi oi-media-play\" title=\"media play\" aria-hidden=\"true\"></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-light add-button btn-circle\" (click)=\"addSongToQueue(song)\" >\n                    <span class=\"oi oi-plus\" title=\"plus\" aria-hidden=\"true\"></span>\n                </button>\n                <button type=\"button\" class=\"btn btn-light add-button btn-circle\" (click)=\"likeSong(song)\" *ngIf=\"isLoggedIn\">\n                    <fa-icon [icon]=\"faHeart\"></fa-icon>\n                </button>\n                <div class=\"dropdown more-button song-button\">\n                    <button class=\"btn btn-light btn-circle dropdown-toggle \" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                        <a class=\"dropdown-item\"  style=\"cursor:pointer\" *ngIf=\"isLoggedIn\" (click)=\"addToPlaylist(song)\">Add to playlist</a>\n                        <a class=\"dropdown-item\" style=\"cursor:pointer\" (click)=\"addSongToQueue(song)\">Add to Queue</a>\n                        <a class=\"dropdown-item\" [routerLink]=\"['/songs', song.id]\">View Song</a>\n                    </div>\n                </div>\n            </div>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/song.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song/song.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"song\">\n    <div class=\"playlist-description row\">\n        <img class=\"col-sm\" src=\"{{ song.cover_art_url }}\">\n        <div class=\"col-sm\" >\n            <h3>\n                {{ song.name }}\n            </h3>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Artist</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ song.artist }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Album</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <a href=\"\" routerLink=\"/album/{{ song.albumId }}\">{{ song.album }}</a>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Genres</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ song.genres }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\"># Likes</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ song.totalLikes }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\"># Dislikes</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ song.totalDislikes }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\"># Reproductions</label>\n                </div>\n                <div class=\"col-md-6\">\n                    {{ song.totalReproductions }}\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"label col-md-4\">\n                    <label for=\"\">Lyrics</label>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col lyrics overflow-auto\">\n                    {{ song.lyrics }}\n                </div>\n            </div>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"playSong()\">\n                Play Song <fa-icon [icon]=\"faPlay\"></fa-icon>\n            </button>\n            <button class=\"btn btn-primary\" style=\"margin-left: 5px\" (click)=\"addToPlaylist()\" *ngIf=\"currentUser\">\n                Add To Playlist <fa-icon [icon]=\"faPlus\"></fa-icon>\n            </button>\n        </div>\n    </div>\n    <br />\n    <app-likes  *ngIf=\"enableLikes\" [model]=\"song\" [enabled]=\"enableLikes\"\n               [modelType]=\"'songs'\" (likeEvent)=\"likeEvent($event)\" [liked]=\"liked\" [disliked]=\"disliked\"></app-likes>\n    <br />\n    <div class=\"row\">\n        <div class=\"col\">\n            <app-comments [comments]=\"comments\"\n                          (postComment)=\"createComment($event)\"\n                          [enablePost]=\"currentUser\"\n            ></app-comments>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/change-user-role/change-user-role.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/change-user-role/change-user-role.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Edit User Role</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <form>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"exampleRadios1\" [value]=\"'ROLE_USER'\" [(ngModel)]=\"role\">\n            <label class=\"form-check-label\" for=\"exampleRadios1\">\n                Regular User <fa-icon [icon]=\"faUser\"></fa-icon>\n            </label>\n        </div>\n        <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"exampleRadios2\" [value]=\"'ROLE_PROFESSIONAL'\" [(ngModel)]=\"role\">\n            <label class=\"form-check-label\" for=\"exampleRadios2\">\n                Professional <fa-icon [icon]=\"faUserTie\"></fa-icon>\n            </label>\n        </div>\n        <div class=\"form-check disabled\">\n            <input class=\"form-check-input\" type=\"radio\" name=\"role\" id=\"exampleRadios3\" [value]=\"'ROLE_ADMIN'\" [(ngModel)]=\"role\">\n            <label class=\"form-check-label\" for=\"exampleRadios3\">\n                Administrator <fa-icon [icon]=\"faUserAdmin\"></fa-icon>\n            </label>\n        </div>\n    </form>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"editUserRole()\">Edit</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Cancel')\">Cancel</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/delete-user/delete-user.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/delete-user/delete-user.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title\">Delete User</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <p>Are you sure you want to delete user {{user.firstName}} {{ user.lastName }}?</p>\n</div>\n<div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Cancel')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"deleteUser()\">Delete</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/list-collection/list-collection.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/list-collection/list-collection.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n    <tbody>\n        <tr *ngFor=\"let item of collection; index as i\">\n            <th scope=\"row\">\n                <a [routerLink]=\"[link, item.id]\">\n                    {{ item.name }}\n                </a>\n            </th>\n            <td>{{ item.songs.length }} songs</td>\n            <td *ngIf=\"deleteEnabled\">\n                <button class=\"btn btn-sm btn-danger\" (click)=\"onDelete.emit(i)\">\n                    <fa-icon [icon]=\"faTimes\"></fa-icon>\n                </button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/modal/modal.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/templates/modal/modal.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n    <h4 class=\"modal-title\">{{ title }}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n    </button>\n</div>\n<div class=\"modal-body\">\n    <p>{{ body }}</p>\n</div>\n<div class=\"modal-footer\">\n    <button *ngIf=\"cancel\" type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Cancel')\">Cancel</button>\n    <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"activeModal.close('Ok')\">{{ okMsg }}</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"emp-profile\">\n    <app-user-info [user]=\"user\"></app-user-info>\n    <div class=\"row\">\n        <div id=\"actions\" class=\"col\">\n            <button class=\"btn btn-primary btn-sm btn-action\" (click)=\"editUser()\" *ngIf=\"isCurrentUser(); else msg_button\">\n                Edit Info <fa-icon [icon]=\"faEdit\"></fa-icon>\n            </button>\n            <ng-template #msg_button>\n                <button class=\"btn btn-primary btn-sm btn-action\" (click)=\"sendMessage()\">\n                    Message <fa-icon [icon]=\"faMessage\"></fa-icon>\n                </button>\n            </ng-template>\n            <span *ngIf=\"isAdmin()\">\n                <button class=\"btn btn-warning btn-sm btn-action\" (click)=\"changeRole()\">\n                    Change Role <fa-icon [icon]=\"faUserRole\"></fa-icon>\n                </button>\n                <button class=\"btn btn-warning btn-sm btn-action\" (click)=\"blockUser(false)\" *ngIf=\"isBlocked; else block\">\n                    Unblock <fa-icon [icon]=\"faBan\"></fa-icon>\n                </button>\n                <ng-template #block>\n                    <button class=\"btn btn-danger btn-sm btn-action\" (click)=\"blockUser(true)\">\n                        Block <fa-icon [icon]=\"faBan\"></fa-icon>\n                    </button>\n                </ng-template>\n                <button class=\"btn btn-danger btn-sm btn-action\" (click)=\"deleteUser()\">\n                    Delete <fa-icon [icon]=\"faUserDel\"></fa-icon>\n                </button>\n            </span>\n        </div>\n    </div>\n    <br/>\n    <div class=\"row\">\n        <div class=\"col\">\n            <ngb-tabset>\n                <ngb-tab title=\"Albums\">\n                    <ng-template ngbTabContent>\n                        <div class=\"ngtab-content\">\n                            <h3>{{ albums.length }} Albums</h3>\n                            <app-list-collection\n                                [collection]=\"albums\"\n                                [link]=\"'/album'\"\n                                (onDelete)=\"deleteAlbum($event)\"\n                                [deleteEnabled]=\"isCurrentUser() || isAdmin()\"\n                            ></app-list-collection>\n                        </div>\n                    </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Playlists\">\n                    <ng-template ngbTabContent>\n                        <div class=\"ngtab-content\">\n                            <h3>{{ playlists.length }} Playlists</h3>\n                            <app-list-collection\n                                [collection]=\"playlists\"\n                                [link]=\"'/playlist'\"\n                                (onDelete)=\"deletePlaylist($event)\"\n                                [deleteEnabled]=\"isCurrentUser() || isAdmin()\"\n                            ></app-list-collection>\n                        </div>\n                    </ng-template>\n                </ngb-tab>\n                <ngb-tab title=\"Messages\">\n                    <ng-template ngbTabContent>\n                        <div class=\"ngtab-content\">\n                            <h3>Messages</h3>\n                            <app-messages-view></app-messages-view>\n                        </div>\n                    </ng-template>\n                </ngb-tab>\n            </ngb-tabset>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"user\">\n    <div class=\"col-md-4\">\n        <div class=\"profile-img\">\n            <img [src]=\"user.profilePhoto\" alt=\"\"/>\n            <div class=\"file btn btn-lg btn-primary\">\n                Change Photo\n                <input type=\"file\" name=\"file\"/>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <div class=\"profile-head\">\n            <h4>\n                {{ user.firstName }} {{ user.lastName }}\n            </h4>\n            <h6>\n\n            </h6>\n            <p class=\"proile-rating\">VIEWS : <span>234234234</span></p>\n        </div>\n\n        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Username</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>{{ user.username }}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Name</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>{{ user.firstName }} {{ user.lastName }}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Email</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>\n                        {{ user.email }}\n                    </p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Country</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>{{ user.country }}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <label>Role</label>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>{{ user.role }}</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"users\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2>Users</h2>\n        </div>\n    </div>\n    <!-- <div class=\"row\"> -->\n    <!-- <div class=\"col\"> -->\n    <!-- <form> -->\n    <!-- <div class=\"form-row\"> -->\n    <!-- <input type=\"text\" class=\"col-12 col-md-8 col-lg-8 form-control mb-2 mr-sm-2\" id=\"inlineFormInputGroupUsername2\" placeholder=\"Enter a user to search\"> -->\n    <!-- <button type=\"submit\" class=\"col-12 col-md-2 col-lg-2 btn btn-primary mb-2\" (click)=\"onSubmit()\">Search</button> -->\n    <!-- </div> -->\n    <!-- </form> -->\n    <!-- </div> -->\n    <!-- </div> -->\n    <br />\n    <div class=\"row\">\n        <div class=\"col\">\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th scope=\"col\">#</th>\n                        <th scope=\"col\">Username</th>\n                        <th scope=\"col\">Name</th>\n                        <th scope=\"col\">Email</th>\n                        <th scope=\"col\">Rol</th>\n                        <th scope=\"col\">Options</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users; index as i;\">\n                        <th scope=\"row\">{{ i + 1 }}</th>\n                        <td><a routerLink=\"/users/{{user.id}}\">{{ user.username }}</a></td>\n                        <td>{{ user.firstName }} {{ user.lastName }}</td>\n                        <td>{{ user.email }}</td>\n                        <td>{{ user.role }}</td>\n                        <td>\n                            <button class=\"btn btn-small btn-outline-primary\" type=\"button\" (click)=\"editUser(user)\">\n                                <span class=\"oi oi-pencil\" title=\"plus\" aria-hidden=\"true\"></span>\n                            </button>\n                            <button class=\"btn btn-small btn-outline-primary btn-delete\" type=\"button\" (click)=\"sendMessage(user)\">\n                                <span class=\"oi oi-envelope-closed\" title=\"plus\" aria-hidden=\"true\"></span>\n                            </button>\n                            <button class=\"btn btn-small btn-delete\" [ngClass]=\"isActive(user) ? 'btn-outline-danger' : 'btn-danger'\" type=\"button\" (click)=\"blockUser(user)\">\n                                <span class=\"oi oi-ban\" title=\"plus\" aria-hidden=\"true\"></span>\n                            </button>\n                            <button class=\"btn btn-small btn-outline-danger btn-delete\" type=\"button\" (click)=\"deleteUser(i, user)\">\n                                <span class=\"oi oi-delete\" title=\"plus\" aria-hidden=\"true\"></span>\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n    color: black;\n    margin-top: 10px;\n    font-family: \"Lato\", sans-serif;\n}\n\ndiv.song-to-add {\n    /* width: 5%; */\n    width: 100%;\n    padding: 10px;\n    background-color: white;\n    margin: 5px;\n    max-width: 200px;\n    border-radius: 20px;\n}\n\ndiv.song-to-add img {\n    border-radius: 6px;\n    /* margin-top: 50px; */\n    width: 100%; }\n\ndiv.song-to-add a.add-to-playlist-button {\n    background-color: white;\n    color: #CC5CAD;\n    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.12);\n    text-align: center;\n    max-width: 150px;\n    border-radius: 6px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    margin: auto;\n    display: block;\n    margin-top: 10px;\n    font-weight: bold;\n    cursor: pointer; }\n\n/* Medium only */\n\n@media screen and (min-width: 40em) and (max-width: 63.9375em) {\n    div.song-to-add {\n        width: 40%;\n        padding: 5px; } }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0tY29sbGVjdGlvbi9hbGJ1bS1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVyxFQUFFOztBQUNqQjtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWUsRUFBRTs7QUFFckIsZ0JBQWdCOztBQUNoQjtJQUNJO1FBQ0ksVUFBVTtRQUNWLFlBQVksRUFBRSxFQUFFIiwiZmlsZSI6InNyYy9hcHAvYWxidW0tY29sbGVjdGlvbi9hbGJ1bS1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5kaXYuc29uZy10by1hZGQge1xuICAgIC8qIHdpZHRoOiA1JTsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogNXB4O1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbmRpdi5zb25nLXRvLWFkZCBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xuICAgIHdpZHRoOiAxMDAlOyB9XG5kaXYuc29uZy10by1hZGQgYS5hZGQtdG8tcGxheWxpc3QtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogI0NDNUNBRDtcbiAgICBib3gtc2hhZG93OiAwcHggMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyogTWVkaXVtIG9ubHkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwZW0pIGFuZCAobWF4LXdpZHRoOiA2My45Mzc1ZW0pIHtcbiAgICBkaXYuc29uZy10by1hZGQge1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBwYWRkaW5nOiA1cHg7IH0gfVxuXG4iXX0= */");

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
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let AlbumCollectionComponent = class AlbumCollectionComponent {
    constructor() {
        this.collection = [];
        this.title = 'Collection';
        this.collectionType = 'album';
        this.addToQueue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.addToPlaylist = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.playCollection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dots = 'carousel-dots';
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlay"];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlbumCollectionComponent.prototype, "collection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlbumCollectionComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AlbumCollectionComponent.prototype, "collectionType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlbumCollectionComponent.prototype, "addToQueue", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlbumCollectionComponent.prototype, "addToPlaylist", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AlbumCollectionComponent.prototype, "playCollection", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("\n.playlist-description {\n    margin-top: 20px;\n}\n.playlist-description img {\n    max-width: 450px;\n    border-radius: 30px;\n}\n.label {\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxidW0vYWxidW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2FsYnVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wbGF5bGlzdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wbGF5bGlzdC1kZXNjcmlwdGlvbiBpbWcge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuLmxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiJdfQ== */");

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_amplitude_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/amplitude.service */ "./src/app/services/amplitude.service.ts");
/* harmony import */ var _models_album__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/album */ "./src/app/models/album.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



// import { Location } from '@angular/common';






let AlbumComponent = class AlbumComponent {
    constructor(route, notifier, api, amplitude, auth) {
        this.route = route;
        this.notifier = notifier;
        this.api = api;
        this.amplitude = amplitude;
        this.auth = auth;
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlay"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlus"];
        this.album = new _models_album__WEBPACK_IMPORTED_MODULE_5__["Album"](1, '', '', '', '', [], '');
        this.comments = [];
        this.liked = false;
        this.disliked = false;
        this.enableLikes = false;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getData(id);
        this.auth.currentUser.subscribe((user) => {
            this.currentUser = user;
            console.log(this.currentUser);
            if (this.currentUser) {
                this.enableLikes = true;
                this.api.isLikedDisliked(id, 'albums').subscribe((res) => {
                    console.log('likes');
                    console.log(res);
                    if (res.success) {
                        if (res.message === 'liked') {
                            this.liked = true;
                        }
                        else {
                            this.disliked = true;
                        }
                    }
                });
            }
        });
    }
    getData(id) {
        this.api.getAlbum(id)
            .subscribe(album => {
            this.album = album;
        });
        this.api.getAlbumComments(id).subscribe((comments) => {
            this.comments = comments;
            console.log(comments);
        });
    }
    addPlaylistToQueue() {
        this.amplitude.addSongs(this.album.songs, this.album.id);
    }
    createComment(comment) {
        console.log('new comment!!!' + comment);
        this.api.postAlbumComment(this.album.id, { comment }).subscribe((newComment) => {
            newComment.username = this.currentUser.username;
            this.comments.unshift(newComment);
            this.notifier.success('New comment posted!');
        });
    }
    likeEvent(event) {
        this.notifier.success(event);
    }
    playAlbum() {
        this.album.totalReproductions += 1;
        this.amplitude.playCollection(this.album.songs, this.album.id);
    }
};
AlbumComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_7__["NotificationsService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_amplitude_service__WEBPACK_IMPORTED_MODULE_4__["AmplitudeService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
AlbumComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-album',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./album.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/album/album.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./album.component.css */ "./src/app/album/album.component.css")).default]
    })
], AlbumComponent);



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
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");
/* harmony import */ var _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-song/new-song.component */ "./src/app/new-song/new-song.component.ts");
/* harmony import */ var _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-album/new-album.component */ "./src/app/new-album/new-album.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/auth.guard */ "./src/app/helpers/auth.guard.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _messages_messages_view_messages_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./messages/messages-view/messages-view.component */ "./src/app/messages/messages-view/messages-view.component.ts");
/* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./song/song.component */ "./src/app/song/song.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"] },
    { path: 'album/new', component: _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_5__["NewAlbumComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'album/:id', component: _album_album_component__WEBPACK_IMPORTED_MODULE_3__["AlbumComponent"] },
    { path: 'playlist/:id', component: _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_6__["PlaylistComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"] },
    { path: 'users/profile', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'users/messages', component: _messages_messages_view_messages_view_component__WEBPACK_IMPORTED_MODULE_12__["MessagesViewComponent"] },
    { path: 'users/:id', component: _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"] },
    { path: 'admin/users', component: _user_users_users_component__WEBPACK_IMPORTED_MODULE_11__["UsersComponent"] },
    { path: 'songs/new', component: _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_4__["NewSongComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]] },
    { path: 'songs/:id', component: _song_song_component__WEBPACK_IMPORTED_MODULE_13__["SongComponent"] },
    { path: 'test', component: _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"] }
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
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _auth_OAuthConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/OAuthConfig */ "./src/app/auth/OAuthConfig.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");






let AppComponent = class AppComponent {
    constructor(router, oauthService, authService) {
        this.router = router;
        this.oauthService = oauthService;
        this.authService = authService;
        this.title = 'mplayer';
        this.route = router.url;
        this.oauthService.configure(_auth_OAuthConfig__WEBPACK_IMPORTED_MODULE_4__["oauthConfig"]);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["JwksValidationHandler"]();
        this.oauthService.loadDiscoveryDocumentAndTryLogin({
            onTokenReceived: (context) => { this.authService.googleLogin(context); }
        });
        // this.authService.testOauth();
        console.log('Has valid token?', this.oauthService.hasValidIdToken());
    }
    isAuthRoute() {
        return this.router.url.startsWith('/login') || this.router.url === '/signup';
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");
/* harmony import */ var _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/http-client */ "./node_modules/@ngx-loading-bar/http-client/fesm2015/ngx-loading-bar-http-client.js");
/* harmony import */ var _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-loading-bar/router */ "./node_modules/@ngx-loading-bar/router/fesm2015/ngx-loading-bar-router.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm2015/ngx-loading-bar-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/carousel */ "./node_modules/primeng/fesm2015/primeng-carousel.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./playlist/playlist.component */ "./src/app/playlist/playlist.component.ts");
/* harmony import */ var _album_album_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./album/album.component */ "./src/app/album/album.component.ts");
/* harmony import */ var _album_collection_album_collection_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./album-collection/album-collection.component */ "./src/app/album-collection/album-collection.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./new-song/new-song.component */ "./src/app/new-song/new-song.component.ts");
/* harmony import */ var _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./new-album/new-album.component */ "./src/app/new-album/new-album.component.ts");
/* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song-list/song-list.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony import */ var _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./user/profile/profile.component */ "./src/app/user/profile/profile.component.ts");
/* harmony import */ var _user_users_users_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user/users/users.component */ "./src/app/user/users/users.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _likes_likes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./likes/likes.component */ "./src/app/likes/likes.component.ts");
/* harmony import */ var _templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./templates/modal/modal.component */ "./src/app/templates/modal/modal.component.ts");
/* harmony import */ var _templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./templates/delete-user/delete-user.component */ "./src/app/templates/delete-user/delete-user.component.ts");
/* harmony import */ var _templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./templates/change-user-role/change-user-role.component */ "./src/app/templates/change-user-role/change-user-role.component.ts");
/* harmony import */ var _user_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./user/user-info/user-info.component */ "./src/app/user/user-info/user-info.component.ts");
/* harmony import */ var _templates_list_collection_list_collection_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./templates/list-collection/list-collection.component */ "./src/app/templates/list-collection/list-collection.component.ts");
/* harmony import */ var _messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./messages/new-message/new-message.component */ "./src/app/messages/new-message/new-message.component.ts");
/* harmony import */ var _messages_messages_view_messages_view_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./messages/messages-view/messages-view.component */ "./src/app/messages/messages-view/messages-view.component.ts");
/* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./song/song.component */ "./src/app/song/song.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./playlists-modal/playlists-modal.component */ "./src/app/playlists-modal/playlists-modal.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");













































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
            _player_player_component__WEBPACK_IMPORTED_MODULE_17__["PlayerComponent"],
            _playlist_playlist_component__WEBPACK_IMPORTED_MODULE_18__["PlaylistComponent"],
            _album_album_component__WEBPACK_IMPORTED_MODULE_19__["AlbumComponent"],
            _album_collection_album_collection_component__WEBPACK_IMPORTED_MODULE_20__["AlbumCollectionComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_21__["NavbarComponent"],
            _new_song_new_song_component__WEBPACK_IMPORTED_MODULE_22__["NewSongComponent"],
            _new_album_new_album_component__WEBPACK_IMPORTED_MODULE_23__["NewAlbumComponent"],
            _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_24__["SongListComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_25__["LoginComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_26__["SignupComponent"],
            _user_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
            _user_users_users_component__WEBPACK_IMPORTED_MODULE_30__["UsersComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_31__["CommentsComponent"],
            _likes_likes_component__WEBPACK_IMPORTED_MODULE_32__["LikesComponent"],
            _templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_33__["ModalComponent"],
            _templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_34__["DeleteUserComponent"],
            _templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_35__["ChangeUserRoleComponent"],
            _user_user_info_user_info_component__WEBPACK_IMPORTED_MODULE_36__["UserInfoComponent"],
            _templates_list_collection_list_collection_component__WEBPACK_IMPORTED_MODULE_37__["ListCollectionComponent"],
            _messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_38__["NewMessageComponent"],
            _messages_messages_view_messages_view_component__WEBPACK_IMPORTED_MODULE_39__["MessagesViewComponent"],
            _song_song_component__WEBPACK_IMPORTED_MODULE_40__["SongComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_41__["HomeComponent"],
            _playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_42__["PlaylistsModalComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_43__["SearchComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            angular2_notifications__WEBPACK_IMPORTED_MODULE_7__["SimpleNotificationsModule"].forRoot({
                position: ['top', 'right'],
                timeOut: 5000,
                showProgressBar: true,
                maxStack: 3
            }),
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_8__["OAuthModule"].forRoot(),
            _ngx_loading_bar_http_client__WEBPACK_IMPORTED_MODULE_9__["LoadingBarHttpClientModule"],
            _ngx_loading_bar_router__WEBPACK_IMPORTED_MODULE_10__["LoadingBarRouterModule"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_11__["LoadingBarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
            primeng_carousel__WEBPACK_IMPORTED_MODULE_15__["CarouselModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_27__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_28__["ErrorInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]],
        entryComponents: [_templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_34__["DeleteUserComponent"],
            _templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_35__["ChangeUserRoleComponent"],
            _templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_33__["ModalComponent"],
            _messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_38__["NewMessageComponent"],
            _playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_42__["PlaylistsModalComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/OAuthConfig.ts":
/*!*************************************!*\
  !*** ./src/app/auth/OAuthConfig.ts ***!
  \*************************************/
/*! exports provided: oauthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oauthConfig", function() { return oauthConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const oauthConfig = {
    // Url of the Identity Provider
    issuer: 'https://accounts.google.com',
    // URL of the SPA to redirect the user to after login
    redirectUri: window.location.origin + '/',
    // The SPA's id. The SPA is registered with this id at the auth-server
    clientId: '178534904300-1qrnrg8i25v4b0kremgkf7k10m68khh0.apps.googleusercontent.com',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
};


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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");







let LoginComponent = class LoginComponent {
    constructor(formBuilder, authService, oauthService, notifier, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.oauthService = oauthService;
        this.notifier = notifier;
        this.route = route;
        this.router = router;
        this.wasValidated = false;
        this.loginInvalid = false;
        this.usernameError = 'Please enter your username';
        this.passwordError = 'Please enter your password';
        if (this.authService.currentUserValue) {
            notifier.warn('Already logged In!');
            this.router.navigate(['/']);
        }
        this.form = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    get password() { return this.form.get('password'); }
    get username() { return this.form.get('username'); }
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    usernameValid() {
        return this.username.invalid && (this.username.dirty || this.username.touched) || this.loginInvalid;
    }
    passwordValid() {
        return this.password.invalid && (this.password.dirty || this.password.touched) || this.loginInvalid;
    }
    onSubmit() {
        this.wasValidated = true;
        console.log(this.form.value);
        if (this.form.status !== 'VALID') {
            this.notifier.error('There are errors in your form');
            return;
        }
        this.authService.login(this.username.value, this.password.value).subscribe((user) => {
            console.log(user);
            this.router.navigate([this.returnUrl]);
        }, (error) => {
            this.loginInvalid = true;
            this.wasValidated = false;
            this.notifier.error(error);
        });
    }
    oauthLogin() {
        this.oauthService.initImplicitFlow();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_5__["NotificationsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("\n.invalid-input {\n    width: 100%;\n    margin-top: .25rem;\n    font-size: 80%;\n    color: #dc3545;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW52YWxpZC1pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogODAlO1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xufVxuIl19 */");

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);







let SignupComponent = class SignupComponent {
    constructor(formBuilder, authService, router, notifier) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.notifier = notifier;
        this.country_list = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
            'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands',
            'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica',
            'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
            'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana',
            'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India',
            'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia',
            'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania',
            'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia',
            'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal',
            'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles',
            'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan',
            'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia',
            'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay',
            'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
        this.confirmPassValidator = (control) => {
            const password = control.get('password');
            const confirmPassword = control.get('confirmPassword');
            return password && confirmPassword && password.value === confirmPassword.value ? null : { 'passwordMismatch': true };
        };
        this.form = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, { validators: this.confirmPassValidator });
    }
    get firstName() { return this.form.get('firstName'); }
    get lastName() { return this.form.get('lastName'); }
    get gender() { return this.form.get('gender'); }
    get email() { return this.form.get('email'); }
    get username() { return this.form.get('username'); }
    get password() { return this.form.get('password'); }
    get confirmPassword() { return this.form.get('confirmPassword'); }
    get country() { return this.form.get('country'); }
    invalidField(formField) {
        return formField.invalid && (formField.dirty || formField.touched);
    }
    getFieldClass(formField, addClass = 'form-control') {
        if (formField.touched || formField.dirty) {
            const classes = formField.invalid ? ' is-invalid' : ' is-valid';
            return addClass + classes;
        }
        return addClass;
    }
    getConfirmPassClass() {
        const addClass = 'form-control';
        const formField = this.confirmPassword;
        if (formField.touched || formField.dirty) {
            const classes = (formField.invalid || (this.form.errors && this.form.errors.passwordMismatch)) ? ' is-invalid' : ' is-valid';
            return addClass + classes;
        }
        return addClass;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.form.markAllAsTouched();
        if (this.form.status !== 'VALID') {
            this.notifier.error('There are errors in your form');
            console.log(this.form.errors);
            return;
        }
        console.log(this.form.value);
        const vals = Object.assign({}, this.form.value);
        const user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_4__["User"](null, vals.username, vals.firstName, vals.lastName, vals.gender, vals.password, vals.email, vals.country, null);
        this.authService.signup(user).subscribe((newUser) => {
            console.log(newUser);
            this.notifier.success('User created!');
            this.router.navigate(['/']);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{margin-top:20px;}\n\n.comment-wrapper .panel-body {\n    max-height:650px;\n    overflow:auto;\n}\n\n.comment-wrapper .media-list .media img {\n    width:64px;\n    height:64px;\n    border:2px solid #e5e7e8;\n    margin-right: 10px;\n}\n\n.comment-wrapper .media-list .media {\n    border-bottom:1px dashed #efefef;\n    margin-bottom:25px;\n}\n\n#post-comment {\n    margin-top: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxLQUFLLGVBQWUsQ0FBQzs7QUFFckI7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXttYXJnaW4tdG9wOjIwcHg7fVxuXG4uY29tbWVudC13cmFwcGVyIC5wYW5lbC1ib2R5IHtcbiAgICBtYXgtaGVpZ2h0OjY1MHB4O1xuICAgIG92ZXJmbG93OmF1dG87XG59XG5cbi5jb21tZW50LXdyYXBwZXIgLm1lZGlhLWxpc3QgLm1lZGlhIGltZyB7XG4gICAgd2lkdGg6NjRweDtcbiAgICBoZWlnaHQ6NjRweDtcbiAgICBib3JkZXI6MnB4IHNvbGlkICNlNWU3ZTg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY29tbWVudC13cmFwcGVyIC5tZWRpYS1saXN0IC5tZWRpYSB7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggZGFzaGVkICNlZmVmZWY7XG4gICAgbWFyZ2luLWJvdHRvbToyNXB4O1xufVxuXG4jcG9zdC1jb21tZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CommentsComponent = class CommentsComponent {
    constructor() {
        this.enablePost = true;
        this.postComment = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.comments = [];
    }
    ngOnInit() {
    }
    addComment() {
        if (this.newComment) {
            this.postComment.emit(this.newComment);
            this.newComment = '';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsComponent.prototype, "enablePost", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentsComponent.prototype, "postComment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsComponent.prototype, "comments", void 0);
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/helpers/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/helpers/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthGuard);



/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            if (!request.url.startsWith(this.authenticationService.authUrl) && [401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                this.authenticationService.logout();
                console.error("LOGOUT");
                console.log(request.url);
                // location.reload(true);
            }
            const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // add auth header with jwt if user is logged in and request is to api url
        const currentUser = this.authenticationService.currentUserValue;
        const jwtToken = localStorage.getItem('jwtToken');
        const isLoggedIn = currentUser && jwtToken;
        const isApiUrl = request.url.startsWith(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);
        console.log('Request:', request.url);
        if (isLoggedIn && isApiUrl) {
            console.log('Adding authorization');
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_amplitude_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/amplitude.service */ "./src/app/services/amplitude.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let HomeComponent = class HomeComponent {
    constructor(ampService, apiService, auth) {
        this.ampService = ampService;
        this.apiService = apiService;
        this.auth = auth;
        this.playlists = [];
        this.albums = [];
        this.mostPlayedAlbums = [];
        this.mostLikedAlbums = [];
        this.recentAlbums = [];
        this.recentlyPlayedAlbums = [];
    }
    ngOnInit() {
        this.apiService.getPlaylists().subscribe(playlists => this.playlists = playlists);
        this.apiService.getMostLikedAlbums().subscribe(albums => this.mostLikedAlbums = albums);
        this.apiService.getMostReproducedAlbums().subscribe(albums => {
            this.mostPlayedAlbums = albums;
            console.log("most reproduced");
            console.log(this.mostPlayedAlbums);
        });
        this.apiService.getRecentAlbums().subscribe(albums => this.recentAlbums = albums);
        this.auth.currentUser.subscribe(user => {
            this.currentUser = user;
            if (user) {
                this.apiService.getRecentlyPlayedAlbums().subscribe(albums => {
                    this.recentlyPlayedAlbums = albums;
                    console.log("recently played");
                    console.log(this.recentlyPlayedAlbums);
                });
            }
        });
    }
    addPlaylistToQueue(id) {
        this.apiService.getPlaylist(id).subscribe(playlist => this.ampService.addSongs(playlist.songs));
    }
    addAlbumToQueue(a) {
        console.log('Add to queue', a);
        this.apiService.getAlbum(a.id).subscribe(album => {
            this.ampService.addSongs(album.songs, album.id);
        });
    }
    playPlaylist(id) {
        // TODO
    }
    addToPlaylist(album) {
        // TODO
    }
    playAlbum(album) {
        console.log("play album");
        this.ampService.playCollection(album.songs, album.id);
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_amplitude_service__WEBPACK_IMPORTED_MODULE_2__["AmplitudeService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/likes/likes.component.css":
/*!*******************************************!*\
  !*** ./src/app/likes/likes.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-small {\n    margin-right: 15px;\n    margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlrZXMvbGlrZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9saWtlcy9saWtlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zbWFsbCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/likes/likes.component.ts":
/*!******************************************!*\
  !*** ./src/app/likes/likes.component.ts ***!
  \******************************************/
/*! exports provided: LikesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikesComponent", function() { return LikesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");



let LikesComponent = class LikesComponent {
    constructor(api) {
        this.api = api;
        this.likeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.liked = false;
        this.disliked = false;
        this.enabled = false;
    }
    ngOnInit() {
    }
    likeClick() {
        if (!this.enabled) {
            return;
        }
        if (!this.liked) {
            this.api.postLike(this.model.id, this.modelType, 'like').subscribe((res) => {
                console.log(res);
                if (res.success) {
                    this.model.totalLikes += 1;
                    this.likeEvent.emit('liked');
                }
                this.liked = !this.liked;
            }, (err) => { console.log('ERROR'); console.log(err); });
        }
        else {
            this.api.deleteLike(this.model.id, this.modelType, 'like').subscribe((res) => {
                console.log(res);
                if (res.success) {
                    this.model.totalLikes -= 1;
                    this.likeEvent.emit('unliked');
                }
                this.liked = !this.liked;
            });
        }
    }
    dislikeClick() {
        if (!this.enabled) {
            return;
        }
        if (!this.liked) {
            this.model.totalDislikes += 1;
            this.api.postLike(this.model.id, this.modelType, 'dislike').subscribe((res) => {
                console.log(res);
                if (res.success) {
                    this.likeEvent.emit('disliked');
                    this.liked = !this.liked;
                }
            });
        }
        else {
            this.model.totalDislikes -= 1;
            this.api.deleteLike(this.model.id, this.modelType, 'dislike').subscribe((res) => {
                console.log(res);
                if (res.success) {
                    this.likeEvent.emit('undisliked');
                    this.liked = !this.liked;
                }
            });
        }
    }
};
LikesComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LikesComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LikesComponent.prototype, "modelType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LikesComponent.prototype, "likeEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LikesComponent.prototype, "liked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LikesComponent.prototype, "disliked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LikesComponent.prototype, "enabled", void 0);
LikesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-likes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./likes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/likes/likes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./likes.component.css */ "./src/app/likes/likes.component.css")).default]
    })
], LikesComponent);



/***/ }),

/***/ "./src/app/messages/messages-view/messages-view.component.css":
/*!********************************************************************!*\
  !*** ./src/app/messages/messages-view/messages-view.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".conversation-wrap\n{\n    box-shadow: -2px 0 3px #ddd;\n    padding:0;\n    max-height: 400px;\n    overflow: auto;\n}\n.media-body {\n    padding-left: 10px;\n}\n.conversation\n{\n    padding:5px;\n    border-bottom:1px solid #ddd;\n    margin:0;\n    cursor: pointer;\n}\n.conversation:hover {\n   background-color: #bfbfbf;\n}\n.message-wrap\n{\n    box-shadow: 0 0 3px #ddd;\n    padding:0;\n\n}\n.msg\n{\n    padding:5px;\n    /*border-bottom:1px solid #ddd;*/\n    margin:0;\n}\n.msg-wrap\n{\n    padding:10px;\n    max-height: 400px;\n    overflow: auto;\n\n}\n.time\n{\n    color:#bfbfbf;\n    float: right;\n}\n.send-wrap\n{\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    padding:10px;\n    /*background: #f8f8f8;*/\n}\n.send-message\n{\n    resize: none;\n}\n.highlight\n{\n    background-color: #f7f7f9;\n    border: 1px solid #e1e1e8;\n}\n.send-message-btn\n{\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-bottom-left-radius: 0;\n\n    border-bottom-right-radius: 0;\n}\n.btn-panel\n{\n    background: #f7f7f9;\n}\n.btn-panel .btn\n{\n    /* color:#b8b8b8; */\n\n    transition: 0.2s all ease-in-out;\n}\n.btn-panel .btn:hover\n{\n    color:#666;\n    background: #f8f8f8;\n}\n.btn-panel .btn:active\n{\n    background: #f8f8f8;\n    box-shadow: 0 0 1px #ddd;\n}\n.btn-panel-conversation .btn,.btn-panel-msg .btn\n{\n\n    background: #f8f8f8;\n}\n.btn-panel-conversation .btn:first-child\n{\n    border-right: 1px solid #ddd;\n}\n.msg-wrap .media-heading\n{\n    color:#003bb3;\n    font-weight: 700;\n}\n.msg-date\n{\n    background: none;\n    text-align: center;\n    color:#aaa;\n    border:none;\n    box-shadow: none;\n    border-bottom: 1px solid #ddd;\n}\nbody::-webkit-scrollbar {\n    width: 12px;\n}\n/* Let's get this party started */\n::-webkit-scrollbar {\n    width: 6px;\n}\n/* Track */\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); \n/*        -webkit-border-radius: 10px;\n        border-radius: 10px;*/\n}\n/* Handle */\n::-webkit-scrollbar-thumb {\n    /*        -webkit-border-radius: 10px;\n        border-radius: 10px;*/\n    background:#ddd; \n    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); \n}\n::-webkit-scrollbar-thumb:window-inactive {\n    background: #ddd; \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMtdmlldy9tZXNzYWdlcy12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksMkJBQTJCO0lBQzNCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7O0lBRUksV0FBVztJQUNYLDRCQUE0QjtJQUM1QixRQUFRO0lBQ1IsZUFBZTtBQUNuQjtBQUNBO0dBQ0cseUJBQXlCO0FBQzVCO0FBQ0E7O0lBRUksd0JBQXdCO0lBQ3hCLFNBQVM7O0FBRWI7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsZ0NBQWdDO0lBQ2hDLFFBQVE7QUFDWjtBQUNBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsY0FBYzs7QUFFbEI7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUVBOztJQUVJLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUVBOztJQUVJLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBRUE7O0lBRUkseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQiw0QkFBNEI7O0lBRTVCLDZCQUE2QjtBQUNqQztBQUNBOztJQUVJLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLG1CQUFtQjs7SUFFbkIsZ0NBQWdDO0FBQ3BDO0FBRUE7O0lBRUksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBOztJQUVJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7O0lBRUksNEJBQTRCO0FBQ2hDO0FBRUE7O0lBRUksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUdBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDO0FBR0E7SUFDSSxXQUFXO0FBQ2Y7QUFHQSxpQ0FBaUM7QUFDakM7SUFDSSxVQUFVO0FBQ2Q7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxpREFBaUQ7QUFDckQ7NkJBQzZCO0FBQzdCO0FBRUEsV0FBVztBQUNYO0lBQ0k7NkJBQ3lCO0lBQ3pCLGVBQWU7SUFDZixpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLXZpZXcvbWVzc2FnZXMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnZlcnNhdGlvbi13cmFwXG57XG4gICAgYm94LXNoYWRvdzogLTJweCAwIDNweCAjZGRkO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbi5tZWRpYS1ib2R5IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uY29udmVyc2F0aW9uXG57XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDtcbiAgICBtYXJnaW46MDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY29udmVyc2F0aW9uOmhvdmVyIHtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNiZmJmYmY7XG59XG4ubWVzc2FnZS13cmFwXG57XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCAjZGRkO1xuICAgIHBhZGRpbmc6MDtcblxufVxuLm1zZ1xue1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIC8qYm9yZGVyLWJvdHRvbToxcHggc29saWQgI2RkZDsqL1xuICAgIG1hcmdpbjowO1xufVxuLm1zZy13cmFwXG57XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuXG59XG5cbi50aW1lXG57XG4gICAgY29sb3I6I2JmYmZiZjtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zZW5kLXdyYXBcbntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgLypiYWNrZ3JvdW5kOiAjZjhmOGY4OyovXG59XG5cbi5zZW5kLW1lc3NhZ2VcbntcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5oaWdobGlnaHRcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWUxZTg7XG59XG5cbi5zZW5kLW1lc3NhZ2UtYnRuXG57XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uYnRuLXBhbmVsXG57XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmOTtcbn1cblxuLmJ0bi1wYW5lbCAuYnRuXG57XG4gICAgLyogY29sb3I6I2I4YjhiODsgKi9cblxuICAgIHRyYW5zaXRpb246IDAuMnMgYWxsIGVhc2UtaW4tb3V0O1xufVxuXG4uYnRuLXBhbmVsIC5idG46aG92ZXJcbntcbiAgICBjb2xvcjojNjY2O1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG59XG4uYnRuLXBhbmVsIC5idG46YWN0aXZlXG57XG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4ICNkZGQ7XG59XG5cbi5idG4tcGFuZWwtY29udmVyc2F0aW9uIC5idG4sLmJ0bi1wYW5lbC1tc2cgLmJ0blxue1xuXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbn1cbi5idG4tcGFuZWwtY29udmVyc2F0aW9uIC5idG46Zmlyc3QtY2hpbGRcbntcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4ubXNnLXdyYXAgLm1lZGlhLWhlYWRpbmdcbntcbiAgICBjb2xvcjojMDAzYmIzO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cblxuLm1zZy1kYXRlXG57XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6I2FhYTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xufVxuXG5cbmJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTJweDtcbn1cblxuXG4vKiBMZXQncyBnZXQgdGhpcyBwYXJ0eSBzdGFydGVkICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogNnB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTsgXG4vKiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyovXG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgLyogICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDsqL1xuICAgIGJhY2tncm91bmQ6I2RkZDsgXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC41KTsgXG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOndpbmRvdy1pbmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI2RkZDsgXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/messages/messages-view/messages-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/messages/messages-view/messages-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessagesViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesViewComponent", function() { return MessagesViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





let MessagesViewComponent = class MessagesViewComponent {
    constructor(api, auth, notifier) {
        this.api = api;
        this.auth = auth;
        this.notifier = notifier;
        this.conversations = [];
    }
    ngOnInit() {
        this.auth.currentUser.subscribe((user) => { this.currentUser = user; console.log(this.currentUser); });
        this.api.getAllMessages().subscribe((res) => {
            console.log(res);
            const allMsgs = res[0].concat(res[1]);
            console.log(allMsgs);
            if (allMsgs.length) {
                this.getConversations(allMsgs);
            }
        });
    }
    getConversations(msgs) {
        const conversations = msgs.map((msg) => {
            const conversation = { userPhoto: msg.receiverPhoto, user: msg.receiver, userId: msg.receiver_id, messages: [] };
            if (msg.sender_id !== this.currentUser.id) {
                conversation.user = msg.sender;
                conversation.userId = msg.sender_id;
                conversation.userPhoto = msg.senderPhoto;
            }
            return conversation;
        });
        const seen = new Set();
        const filteredArr = conversations.filter(el => {
            const duplicate = seen.has(el.userId);
            seen.add(el.userId);
            return !duplicate;
        });
        console.log(filteredArr);
        this.conversations = filteredArr;
        this.conversations.forEach((conversation) => {
            conversation.messages = msgs.filter((msg) => {
                return msg.sender_id === conversation.userId || msg.receiver_id === conversation.userId;
            });
        });
        this.selectedConversation = 0;
    }
    selectConversation(i) {
        this.selectedConversation = i;
    }
    postMessage() {
        console.log('post message');
        if (this.newMessage) {
            const conversation = this.conversations[this.selectedConversation];
            this.api.newMessage(this.currentUser.id, conversation.userId, this.newMessage)
                .subscribe((res) => {
                console.log(res);
                this.notifier.success('Message sent');
                res.senderPhoto = this.currentUser.profilePhoto;
                conversation.messages.unshift(res);
                this.newMessage = '';
            });
            console.log(this.newMessage);
        }
    }
};
MessagesViewComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
MessagesViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./messages-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/messages-view/messages-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./messages-view.component.css */ "./src/app/messages/messages-view/messages-view.component.css")).default]
    })
], MessagesViewComponent);



/***/ }),

/***/ "./src/app/messages/new-message/new-message.component.css":
/*!****************************************************************!*\
  !*** ./src/app/messages/new-message/new-message.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL25ldy1tZXNzYWdlL25ldy1tZXNzYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/messages/new-message/new-message.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/messages/new-message/new-message.component.ts ***!
  \***************************************************************/
/*! exports provided: NewMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageComponent", function() { return NewMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user */ "./src/app/models/user.ts");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/role */ "./src/app/models/role.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_6__);







let NewMessageComponent = class NewMessageComponent {
    constructor(api, activeModal, notifier) {
        this.api = api;
        this.activeModal = activeModal;
        this.notifier = notifier;
        this.user = new src_app_models_user__WEBPACK_IMPORTED_MODULE_2__["User"](1, 'username', 'Gabriel', 'Falcones', '', '', '', '', src_app_models_role__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin);
    }
    ngOnInit() {
    }
    postMessage() {
        console.log(this.message);
        if (this.message) {
            this.api.newMessage(this.senderId, this.user.id, this.message).subscribe((message) => {
                console.log(message);
                this.notifier.success('Message Sent!');
                this.activeModal.close('sent');
            }, (err) => {
                console.log(err);
                this.notifier.error('Error sending message!');
                this.activeModal.close('Error');
            });
            console.log('Post: ' + this.message);
        }
    }
};
NewMessageComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_6__["NotificationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewMessageComponent.prototype, "user", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NewMessageComponent.prototype, "senderId", void 0);
NewMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/messages/new-message/new-message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-message.component.css */ "./src/app/messages/new-message/new-message.component.css")).default]
    })
], NewMessageComponent);



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
    constructor(id, name, artist, releaseDate, cover_art_url, songs, genres) {
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.releaseDate = releaseDate;
        this.cover_art_url = cover_art_url;
        this.songs = songs;
        this.genres = genres;
        this.totalLikes = 0;
        this.totalDislikes = 0;
        this.totalReproductions = 0;
    }
}


/***/ }),

/***/ "./src/app/models/role.ts":
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Role;
(function (Role) {
    Role["User"] = "ROLE_USER";
    Role["Professional"] = "ROLE_PROFESSIONAL";
    Role["Admin"] = "ROLE_ADMIN";
})(Role || (Role = {}));


/***/ }),

/***/ "./src/app/models/status.ts":
/*!**********************************!*\
  !*** ./src/app/models/status.ts ***!
  \**********************************/
/*! exports provided: UserStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatus", function() { return UserStatus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["BLOCKED"] = "BLOCKED";
})(UserStatus || (UserStatus = {}));


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
/* harmony import */ var _status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status */ "./src/app/models/status.ts");


class User {
    constructor(id, username, firstName, lastName, gender, password, email, country, role, profilePhoto, status) {
        this.id = id;
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.password = password;
        this.email = email;
        this.country = country;
        this.role = role;
        this.status = _status__WEBPACK_IMPORTED_MODULE_1__["UserStatus"].ACTIVE;
        if (status) {
            this.status = status;
        }
        if (profilePhoto) {
            this.profilePhoto = profilePhoto;
        }
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
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');\n.left-nav {\n    margin-left: 5px;\n}\n.navbar-brand {\n    font-family: 'Pacifico', cursive;\n    font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRFQUE0RTtBQUM1RTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcCcpO1xuLmxlZnQtbmF2IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */");

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _models_role__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/role */ "./src/app/models/role.ts");





let NavbarComponent = class NavbarComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.auth.currentUser.subscribe(user => this.currentUser = user);
    }
    get isAdmin() {
        return this.currentUser && this.currentUser.role === _models_role__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['/']);
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("\n.upload-form {\n    background-color: white;\n    margin-top: 15px;\n    /* width: 500px; */\n    padding: 20px;\n}\n.new-album-link{\n    float: right;\n}\nimg{\n    width: 100%;\n}\n.btn-add-song{\n    float: right;\n}\n.form-row {\n    margin-bottom: 5px;\n}\n.invalid-file-feedback {\n    width: 100%;\n    margin-top: .25rem;\n    font-size: 80%;\n    color: #dc3545;\n}\n.invalid-file {\n    border-color: #dc3545 !important;\n}\n.invalid-file:focus {\n    border-color: #dc3545 !important;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6) !important;\n}\n.btn-delete{\n    height: calc(1.5em + .5rem + 2px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWFsYnVtL25ldy1hbGJ1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCO0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyx5RkFBeUY7QUFDN0Y7QUFFQTtJQUNJLGlDQUFpQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL25ldy1hbGJ1bS9uZXctYWxidW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnVwbG9hZC1mb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC8qIHdpZHRoOiA1MDBweDsgKi9cbiAgICBwYWRkaW5nOiAyMHB4O1xufVxuLm5ldy1hbGJ1bS1saW5re1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYnRuLWFkZC1zb25ne1xuICAgIGZsb2F0OiByaWdodDtcbn1cblxuLmZvcm0tcm93IHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5pbnZhbGlkLWZpbGUtZmVlZGJhY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgICBmb250LXNpemU6IDgwJTtcbiAgICBjb2xvcjogI2RjMzU0NTtcbn1cblxuLmludmFsaWQtZmlsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnZhbGlkLWZpbGU6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSwgMCAwIDhweCByZ2JhKDI1NSwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWRlbGV0ZXtcbiAgICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAuNXJlbSArIDJweCk7XG59XG4iXX0= */");

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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
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
        this.wasValidated = false;
        this.invalidImage = false;
        this.imgFileError = '';
        this.audioFileError = [];
        this.genres = [];
        this.form = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            artist: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            release_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            songs: this.formBuilder.array([]),
            cover_art_img: [''],
            genres: []
        });
    }
    ngOnInit() {
        this.apiService.getGenres().subscribe((res) => {
            this.genres = res;
            console.log(this.genres);
        });
    }
    get songs() {
        return this.form.get('songs');
    }
    addSongForm(event) {
        console.log('Add song form');
        event.preventDefault();
        const songform = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            media_file: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.form.controls.songs.push(songform);
        this.audioFileError.push('');
    }
    deleteSongForm(i) {
        this.form.controls.songs.removeAt(i);
        this.audioFileError.splice(i, 1);
    }
    onSubmit() {
        console.log(this.form.value);
        this.form.value.genres = this.form.value.genres.join();
        console.log(this.form.value);
        this.wasValidated = true;
        if (this.form.status !== 'VALID') {
            this.notifier.error('There are errors in your form');
            return;
        }
        // this.apiService.newAlbum(this.form.value).subscribe((res) => console.log(res));
        this.apiService.newAlbum(this.form.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((album) => {
            console.log(album);
            const requests = [];
            album.songs.forEach((song, idx) => {
                console.log(this.form.controls.songs.controls[idx].get('media_file').value);
                const songdata = new FormData();
                songdata.append('song_id', String(song.id));
                songdata.append('media_file', this.form.controls.songs.controls[idx].get('media_file').value);
                requests.push(this.apiService.uploadSong(songdata));
            });
            if (this.imageFile) {
                const data = new FormData();
                data.append('album_id', String(album.id));
                data.append('cover_file', this.imageFile);
                requests.push(this.apiService.uploadAlbumCover(data));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(requests);
        })).subscribe((res) => {
            console.log(res);
            this.notifier.success('Album uploaded!');
            this.router.navigate(['/']);
        });
    }
    imageSelected(files) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.invalidImage = true;
            this.imgFileError = 'Only images are supported';
            return;
        }
        this.invalidImage = false;
        this.imgFileError = '';
        const reader = new FileReader();
        this.imageFile = files[0];
        reader.readAsDataURL(files[0]);
        reader.onload = (_) => {
            this.coverArtUrl = reader.result;
        };
        // this.form.get('cover_art_img').setValue(this.imageFile)
    }
    songFileSelected(files, idx, evt) {
        if (files.length === 0) {
            return;
        }
        const mimeType = files[0].type;
        if (mimeType.match(/audio\/*/) == null) {
            this.audioFileError[idx] = 'You need to select and audio file';
            evt.target.value = '';
            return;
        }
        this.audioFileError[idx] = '';
        this.form.controls.songs.controls[idx].get('media_file').setValue(files[0]);
    }
};
NewAlbumComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
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
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");





let NewSongComponent = class NewSongComponent {
    constructor(formBuilder, apiService, auth) {
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.auth = auth;
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
        this.auth.currentUser.subscribe(user => {
            this.apiService.getAlbumsByUser(user.id).subscribe(albums => {
                this.albums = albums;
                console.log(albums);
            });
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
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
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
/* harmony import */ var _services_amplitude_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/amplitude.service */ "./src/app/services/amplitude.service.ts");



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
    { type: _services_amplitude_service__WEBPACK_IMPORTED_MODULE_2__["AmplitudeService"] }
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
/* harmony default export */ __webpack_exports__["default"] = (".playlist-description {\n    margin-top: 20px;\n}\n.playlist-description img {\n    max-width: 450px;\n    border-radius: 30px;\n}\nh3 {\n    color: black;\n}\n.label {\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGxheWxpc3QvcGxheWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wbGF5bGlzdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5wbGF5bGlzdC1kZXNjcmlwdGlvbiBpbWcge1xuICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbmgzIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_amplitude_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/amplitude.service */ "./src/app/services/amplitude.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



// import { Location } from '@angular/common';




let PlaylistComponent = class PlaylistComponent {
    constructor(route, auth, api, amplitude) {
        this.route = route;
        this.auth = auth;
        this.api = api;
        this.amplitude = amplitude;
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlay"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPlus"];
    }
    ngOnInit() {
        this.getPlaylist();
        this.auth.currentUser.subscribe(user => this.currentUser = user);
    }
    getPlaylist() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.api.getPlaylist(id)
            .subscribe(playlist => {
            this.playlist = playlist;
            console.log(playlist);
        });
    }
    addPlaylistToQueue() {
        this.amplitude.addSongs(this.playlist.songs);
    }
    playPlaylist() {
        this.amplitude.playCollection(this.playlist.songs);
    }
};
PlaylistComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_amplitude_service__WEBPACK_IMPORTED_MODULE_4__["AmplitudeService"] }
];
PlaylistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlist/playlist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist.component.css */ "./src/app/playlist/playlist.component.css")).default]
    })
], PlaylistComponent);



/***/ }),

/***/ "./src/app/playlists-modal/playlists-modal.component.css":
/*!***************************************************************!*\
  !*** ./src/app/playlists-modal/playlists-modal.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0cy1tb2RhbC9wbGF5bGlzdHMtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/playlists-modal/playlists-modal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/playlists-modal/playlists-modal.component.ts ***!
  \**************************************************************/
/*! exports provided: PlaylistsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsModalComponent", function() { return PlaylistsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");






let PlaylistsModalComponent = class PlaylistsModalComponent {
    constructor(api, auth, activeModal, notifier) {
        this.api = api;
        this.auth = auth;
        this.activeModal = activeModal;
        this.notifier = notifier;
    }
    ngOnInit() {
        this.auth.currentUser.subscribe((user) => {
            console.log(user);
            this.currentUser = user;
            this.api.getPlaylistsByUser(user.id).subscribe((playlists) => {
                this.playlists = playlists;
                console.log(this.playlists);
            });
        });
    }
    addToNewPlaylist() {
        this.api.newPlaylist(this.newPlaylist, this.songToAdd.id).subscribe((playlist) => {
            console.log(playlist);
            this.newPlaylist = '';
            this.playlists.unshift(playlist);
            this.notifier.success(`Song added to new playlist ${this.newPlaylist}!`);
        });
    }
    addToPlaylist(playlist) {
        this.api.addSongToPlaylist(playlist.id, this.songToAdd.id).subscribe((res) => {
            console.log(res);
            this.notifier.success(`Song added to playlist ${playlist.name}`);
        });
    }
};
PlaylistsModalComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PlaylistsModalComponent.prototype, "songToAdd", void 0);
PlaylistsModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlists-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlists-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playlists-modal/playlists-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlists-modal.component.css */ "./src/app/playlists-modal/playlists-modal.component.css")).default]
    })
], PlaylistsModalComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let SearchComponent = class SearchComponent {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.searching = false;
        this.searchFailed = false;
        this.formatter = (term) => `${term.model}: ${term.name}`;
        this.rformatter = (term) => '';
        this.search = (text$) => text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(term => term.length > 3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.searching = true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(term => this.api.findAll(term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.searchFailed = false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => {
            this.searchFailed = true;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.searching = false));
    }
    ngOnInit() {
    }
    SearchSelected(selectedItem) {
        const selected = (selectedItem.item);
        if (selected.model.startsWith('album')) {
            this.router.navigate(['/album', selected.id]);
        }
        else if (selected.model === 'song') {
            this.router.navigate(['/songs', selected.id]);
        }
        else if (selected.model === 'playlist') {
            this.router.navigate(['/playlist', selected.id]);
        }
        this.selectedSearch = '';
    }
    submit() {
        console.log(this.selectedSearch);
    }
};
SearchComponent.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/services/amplitude.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/amplitude.service.ts ***!
  \***********************************************/
/*! exports provided: AmplitudeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmplitudeService", function() { return AmplitudeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! amplitudejs */ "./node_modules/amplitudejs/dist/amplitude.js");
/* harmony import */ var amplitudejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(amplitudejs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");







let AmplitudeService = class AmplitudeService {
    constructor(notifier, http, auth) {
        this.notifier = notifier;
        this.http = http;
        this.auth = auth;
        this.apiURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api`;
        this.currentSongs = [];
        this.currentSongs = this.recoverPlayQueue();
    }
    startAmplitude() {
        this.auth.currentUser.subscribe(user => { this.currentUser = user; });
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["init"]({
            songs: this.currentSongs,
            default_album_art: 'http://cdn.last.fm/flatness/responsive/2/noimage/default_album_300_g4.png',
            callbacks: {
                song_change: () => {
                    this.notifier.success('Playing: ' + amplitudejs__WEBPACK_IMPORTED_MODULE_2__["getActiveSongMetadata"]().name);
                },
                ended: () => {
                    console.log('Ended' + amplitudejs__WEBPACK_IMPORTED_MODULE_2__["getActiveSongMetadata"]().name);
                    this.postSongReproduced(amplitudejs__WEBPACK_IMPORTED_MODULE_2__["getActiveSongMetadata"]().id);
                }
            }
        });
    }
    postSongReproduced(songId) {
        if (this.currentUser)
            this.http.post(`${this.apiURL}/songs/${songId}/repr`, null).subscribe(res => console.log(res));
    }
    postAlbumReproduced(albumId) {
        if (this.currentUser)
            this.http.post(`${this.apiURL}/albums/${albumId}/repr`, null).subscribe(res => console.log(res));
    }
    addSong(song) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["addSong"](song);
        // this.currentSongs.push(song);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
        this.notifier.success(song.name + ' added to Queue');
        this.savePlayQueue();
    }
    addSongs(songs, albumId) {
        this.currentSongs.push(...songs);
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
        this.notifier.success('Songs added to Queue');
        if (albumId) {
            this.postAlbumReproduced(albumId);
        }
        this.savePlayQueue();
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
        this.savePlayQueue();
    }
    playCollection(collection, albumId) {
        amplitudejs__WEBPACK_IMPORTED_MODULE_2__["pause"]();
        this.currentSongs.forEach((val, i) => {
            amplitudejs__WEBPACK_IMPORTED_MODULE_2__["removeSong"](i);
            amplitudejs__WEBPACK_IMPORTED_MODULE_2__["bindNewElements"]();
        });
        this.addSongs(collection, albumId);
        // this.currentSongs = collection;
        // Amplitude.bindNewElements();
        this.playSongAtIndex(0);
        // if (albumId) {
        //     this.postAlbumReproduced(albumId);
        // }
        // this.savePlayQueue();
    }
    savePlayQueue() {
        localStorage.setItem('playQueue', JSON.stringify(this.currentSongs));
    }
    recoverPlayQueue() {
        const playQueue = JSON.parse(localStorage.getItem('playQueue'));
        console.log('playQueue');
        return playQueue ? playQueue : [];
    }
};
AmplitudeService.ctorParameters = () => [
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_3__["NotificationsService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
AmplitudeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AmplitudeService);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.apiURL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}/api`;
    }
    getPlaylists() {
        return this.http.get(this.apiURL + '/playlists');
    }
    // Albums
    getMostLikedAlbums() {
        return this.http.get(`${this.apiURL}/albums/likes/most`);
    }
    getRecentlyPlayedAlbums() {
        return this.http.get(`${this.apiURL}/albums/reprs/recent`);
    }
    getRecentAlbums() {
        return this.http.get(`${this.apiURL}/albums/recent`);
    }
    getMostReproducedAlbums() {
        return this.http.get(`${this.apiURL}/albums/reprs/most`);
    }
    getAlbums() {
        return this.http.get(`${this.apiURL}/albums`);
    }
    getAlbumsByUser(userId) {
        return this.http.get(`${this.apiURL}/albums/user/${userId}`);
    }
    getAlbum(id) {
        return this.http.get(this.apiURL + '/albums/' + String(id));
    }
    newAlbum(album) {
        return this.http.post(this.apiURL + '/albums', album);
    }
    uploadAlbumCover(data) {
        return this.http.post(this.apiURL + '/albums/cover', data);
    }
    deleteAlbum(albumId) {
        return this.http.delete(`${this.apiURL}/albums/${albumId}`);
    }
    // Playlists
    getPlaylist(id) {
        return this.http.get(this.apiURL + '/playlists/' + id);
        // return of(data.full_playlists[id]);
    }
    getPlaylistsByUser(userId) {
        return this.http.get(`${this.apiURL}/playlists/user/${userId}`);
    }
    deletePlaylist(playlistId) {
        return this.http.delete(`${this.apiURL}/playlists/${playlistId}`);
    }
    newPlaylist(playlistName, songId) {
        return this.http.post(`${this.apiURL}/playlists`, { name: playlistName, songId });
    }
    addSongToPlaylist(playlistId, songId) {
        return this.http.post(`${this.apiURL}/playlists/${playlistId}/add/${songId}`, null);
    }
    // Songs
    newSong(data) {
        return this.http.post(this.apiURL + '/songs', data);
    }
    uploadSong(data) {
        return this.http.post(this.apiURL + '/songs/upload', data);
    }
    getSong(songId) {
        return this.http.get(`${this.apiURL}/songs/${songId}`);
    }
    // Users
    updateUserRole(userId, userRole) {
        const formData = new FormData();
        formData.append('role', userRole);
        console.log(formData);
        return this.http.post(`${this.apiURL}/users/${userId}/update_role`, formData);
    }
    updateUserStatus(userId, userStatus) {
        const formData = new FormData();
        formData.append('status', userStatus);
        console.log(formData);
        return this.http.post(`${this.apiURL}/users/${userId}/update_status`, formData);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiURL}/users/${userId}`);
    }
    getUser(userId) {
        return this.http.get(`${this.apiURL}/users/${userId}`);
    }
    getUsers() {
        return this.http.get(`${this.apiURL}/users`);
    }
    // Comments
    getAlbumComments(albumId) {
        return this.http.get(`${this.apiURL}/albums/${albumId}/comments`);
    }
    postAlbumComment(albumId, comment) {
        return this.http.post(`${this.apiURL}/albums/${albumId}/comments`, comment);
    }
    getSongComments(songId) {
        return this.http.get(`${this.apiURL}/songs/${songId}/comments`);
    }
    postSongComment(songId, comment) {
        return this.http.post(`${this.apiURL}/songs/${songId}/comments`, comment);
    }
    // Likes
    postLike(modelId, modelType, likeType) {
        return this.http.post(`${this.apiURL}/${modelType}/${modelId}/${likeType}`, null);
    }
    deleteLike(modelId, modelType, likeType) {
        return this.http.delete(`${this.apiURL}/${modelType}/${modelId}/${likeType}`);
    }
    isLikedDisliked(modelId, modelType) {
        return this.http.get(`${this.apiURL}/${modelType}/${modelId}/is_liked_disliked`);
    }
    // Messages
    newMessage(sender_id, receiver_id, message) {
        return this.http.post(`${this.apiURL}/messages`, { sender_id, receiver_id, message });
    }
    getSentMessages() {
        return this.http.get(`${this.apiURL}/messages/sent`);
    }
    getReceivedMessages() {
        return this.http.get(`${this.apiURL}/messages/received`);
    }
    getAllMessages() {
        const sent = this.getSentMessages();
        const received = this.getReceivedMessages();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([sent, received]);
    }
    // Genres
    getGenres() {
        return this.http.get(`${this.apiURL}/genres`);
    }
    // Search
    findByName(modelType, name) {
        return this.http.get(`${this.apiURL}/${modelType}/search/name/${name}`);
    }
    findAlbumsByGenre(genre) {
        return this.http.get(`${this.apiURL}/albums/search/genre/${genre}`);
    }
    findAll(query) {
        const albums = this.findByName('albums', query);
        const songs = this.findByName('songs', query);
        const pls = this.findByName('playlists', query);
        const genres = this.findAlbumsByGenre(query);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([albums, songs, pls, genres]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((results) => {
            console.log(results);
            results[0].forEach(res => res.model = 'album');
            results[1].forEach(res => res.model = 'song');
            results[2].forEach(res => res.model = 'playlist');
            results[3].forEach(res => res.model = 'album genre');
            results = results.flat();
            return results;
        }));
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

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/fesm2015/angular-oauth2-oidc.js");







let AuthService = class AuthService {
    constructor(http, oauthService) {
        this.http = http;
        this.oauthService = oauthService;
        this.authUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}/api/auth`;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    storeCredentials(res) {
        if (res.user && res.accessToken) {
            console.log("Storing credentials!!!");
            localStorage.setItem('currentUser', JSON.stringify(res.user));
            localStorage.setItem('jwtToken', res.accessToken);
            this.currentUserSubject.next(res.user);
        }
    }
    login(usernameOrEmail, password) {
        return this.http.post(`${this.authUrl}/signin`, { usernameOrEmail, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            // login succesful if there's a jwt token and an user
            this.storeCredentials(res);
            return res;
        }));
    }
    logout() {
        console.log("LOGOUT!!!!");
        localStorage.removeItem('currentUser');
        localStorage.removeItem('jwtToken');
        this.currentUserSubject.next(null);
        this.oauthService.logOut();
    }
    signup(user) {
        return this.http.post(`${this.authUrl}/signup`, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            // Signup succesful if there's a jwt token and an user
            this.storeCredentials(res);
            return res;
        }));
    }
    googleLogin(context) {
        // TODO sent googleLogin to server
        console.log('logged in');
        const data = {
            idToken: context.idToken,
            email: context.idClaims.email.toString(),
            firstName: context.idClaims.given_name.toString(),
            lastName: context.idClaims.family_name.toString()
            // profile_photo: context.idClaims.picture
        };
        this.http.post(`${this.authUrl}/oauthLogin`, data).subscribe(res => {
            console.log('oauthLogin res', res);
            this.storeCredentials(res);
        }, err => { console.log('error', err); });
    }
    isAuthenticated() {
        // return this.user != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__["OAuthService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



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
/* harmony import */ var _services_amplitude_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/amplitude.service */ "./src/app/services/amplitude.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../playlists-modal/playlists-modal.component */ "./src/app/playlists-modal/playlists-modal.component.ts");








let SongListComponent = class SongListComponent {
    constructor(amplitude, api, notifier, modalService) {
        this.amplitude = amplitude;
        this.api = api;
        this.notifier = notifier;
        this.modalService = modalService;
        this.faHeart = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faHeart"];
        this.isLoggedIn = false;
    }
    ngOnInit() {
    }
    addSongToQueue(song) {
        this.amplitude.addSong(song);
    }
    playSong(song) {
        this.amplitude.playNow(song);
    }
    likeSong(song) {
        this.api.postLike(song.id, 'songs', 'like').subscribe((res) => this.notifier.success('Added to liked songs'));
    }
    addToPlaylist(song) {
        const modalRef = this.modalService.open(_playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_7__["PlaylistsModalComponent"]);
        modalRef.componentInstance.songToAdd = song;
    }
};
SongListComponent.ctorParameters = () => [
    { type: _services_amplitude_service__WEBPACK_IMPORTED_MODULE_2__["AmplitudeService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListComponent.prototype, "songs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SongListComponent.prototype, "isLoggedIn", void 0);
SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-list.component.css */ "./src/app/song-list/song-list.component.css")).default]
    })
], SongListComponent);



/***/ }),

/***/ "./src/app/song/song.component.css":
/*!*****************************************!*\
  !*** ./src/app/song/song.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".playlist-description {\n    margin-top: 20px;\n}\n.playlist-description img {\n    max-width: 450px;\n    max-height: 450px;\n}\n.label {\n    font-weight: bold;\n}\n.lyrics {\n    max-height: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy9zb25nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc29uZy9zb25nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3QtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ucGxheWxpc3QtZGVzY3JpcHRpb24gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xufVxuXG4ubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubHlyaWNzIHtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/song/song.component.ts":
/*!****************************************!*\
  !*** ./src/app/song/song.component.ts ***!
  \****************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_amplitude_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/amplitude.service */ "./src/app/services/amplitude.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../playlists-modal/playlists-modal.component */ "./src/app/playlists-modal/playlists-modal.component.ts");










let SongComponent = class SongComponent {
    constructor(route, notifier, api, amplitude, auth, modalService) {
        this.route = route;
        this.notifier = notifier;
        this.api = api;
        this.amplitude = amplitude;
        this.auth = auth;
        this.modalService = modalService;
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlay"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faPlus"];
        this.comments = [];
        this.liked = false;
        this.disliked = false;
        this.enableLikes = false;
    }
    ngOnInit() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.getData(id);
        this.auth.currentUser.subscribe((user) => {
            this.currentUser = user;
            console.log(this.currentUser);
            if (this.currentUser) {
                this.enableLikes = true;
                this.api.isLikedDisliked(id, 'songs').subscribe((res) => {
                    console.log('likes');
                    console.log(res);
                    if (res.success) {
                        if (res.message === 'liked') {
                            this.liked = true;
                        }
                        else {
                            this.disliked = true;
                        }
                    }
                });
            }
        });
    }
    getData(id) {
        this.api.getSong(id)
            .subscribe(song => {
            this.song = song;
        });
        this.api.getSongComments(id).subscribe((comments) => {
            this.comments = comments;
            console.log(comments);
        });
    }
    createComment(comment) {
        console.log('new comment!!!' + comment);
        this.api.postSongComment(this.song.id, { comment }).subscribe((newComment) => {
            newComment.username = this.currentUser.username;
            newComment.userPhoto = this.currentUser.profilePhoto;
            this.comments.unshift(newComment);
            this.notifier.success('New comment posted!');
        });
    }
    playSong() {
        this.song.totalReproductions += 1;
        this.amplitude.playNow(this.song);
    }
    likeEvent(event) {
        this.notifier.success(event);
    }
    addToPlaylist() {
        const modalRef = this.modalService.open(_playlists_modal_playlists_modal_component__WEBPACK_IMPORTED_MODULE_9__["PlaylistsModalComponent"]);
        modalRef.componentInstance.songToAdd = this.song;
    }
};
SongComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _services_amplitude_service__WEBPACK_IMPORTED_MODULE_5__["AmplitudeService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }
];
SongComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-song',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song/song.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song.component.css */ "./src/app/song/song.component.css")).default]
    })
], SongComponent);



/***/ }),

/***/ "./src/app/templates/change-user-role/change-user-role.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/templates/change-user-role/change-user-role.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9jaGFuZ2UtdXNlci1yb2xlL2NoYW5nZS11c2VyLXJvbGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/templates/change-user-role/change-user-role.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/templates/change-user-role/change-user-role.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChangeUserRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeUserRoleComponent", function() { return ChangeUserRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let ChangeUserRoleComponent = class ChangeUserRoleComponent {
    constructor(activeModal, api, notifier) {
        this.activeModal = activeModal;
        this.api = api;
        this.notifier = notifier;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUser"];
        this.faUserTie = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserTie"];
        this.faUserAdmin = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faUserShield"];
    }
    ngOnInit() {
    }
    editUserRole() {
        if (this.role && this.user.role !== this.role) {
            this.api.updateUserRole(this.user.id, this.role).subscribe((res) => {
                console.log(res);
                this.notifier.success('User role edited!');
                this.activeModal.close({ role: this.role });
            }, (err) => {
                console.log(err);
                this.notifier.error('Error updating role: ' + err.error.error);
                this.activeModal.close('Error');
            });
        }
    }
};
ChangeUserRoleComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeUserRoleComponent.prototype, "user", void 0);
ChangeUserRoleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-user-role',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-user-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/change-user-role/change-user-role.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-user-role.component.css */ "./src/app/templates/change-user-role/change-user-role.component.css")).default]
    })
], ChangeUserRoleComponent);



/***/ }),

/***/ "./src/app/templates/delete-user/delete-user.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/templates/delete-user/delete-user.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9kZWxldGUtdXNlci9kZWxldGUtdXNlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/templates/delete-user/delete-user.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/templates/delete-user/delete-user.component.ts ***!
  \****************************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_4__);





let DeleteUserComponent = class DeleteUserComponent {
    constructor(activeModal, api, notifier) {
        this.activeModal = activeModal;
        this.api = api;
        this.notifier = notifier;
    }
    ngOnInit() {
    }
    deleteUser() {
        this.api.deleteUser(this.user.id).subscribe((res) => {
            this.notifier.success('User deleted!');
            console.log(res);
            this.activeModal.close('deleted');
        }, (err) => {
            console.log(err);
            this.notifier.error('Cannot delete user!!');
            this.activeModal.close('error');
        });
    }
};
DeleteUserComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_4__["NotificationsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DeleteUserComponent.prototype, "user", void 0);
DeleteUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./delete-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/delete-user/delete-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./delete-user.component.css */ "./src/app/templates/delete-user/delete-user.component.css")).default]
    })
], DeleteUserComponent);



/***/ }),

/***/ "./src/app/templates/list-collection/list-collection.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/templates/list-collection/list-collection.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9saXN0LWNvbGxlY3Rpb24vbGlzdC1jb2xsZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/templates/list-collection/list-collection.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/templates/list-collection/list-collection.component.ts ***!
  \************************************************************************/
/*! exports provided: ListCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCollectionComponent", function() { return ListCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let ListCollectionComponent = class ListCollectionComponent {
    constructor() {
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimes"];
        this.deleteEnabled = false;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListCollectionComponent.prototype, "collection", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListCollectionComponent.prototype, "link", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListCollectionComponent.prototype, "deleteEnabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ListCollectionComponent.prototype, "onDelete", void 0);
ListCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-collection',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/list-collection/list-collection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-collection.component.css */ "./src/app/templates/list-collection/list-collection.component.css")).default]
    })
], ListCollectionComponent);



/***/ }),

/***/ "./src/app/templates/modal/modal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/templates/modal/modal.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9tb2RhbC9tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/templates/modal/modal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/templates/modal/modal.component.ts ***!
  \****************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let ModalComponent = class ModalComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.okMsg = 'Confirm';
        this.cancel = true;
    }
    ngOnInit() {
    }
};
ModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "body", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "okMsg", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalComponent.prototype, "cancel", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/templates/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/templates/modal/modal.component.css")).default]
    })
], ModalComponent);



/***/ }),

/***/ "./src/app/user/profile/profile.component.css":
/*!****************************************************!*\
  !*** ./src/app/user/profile/profile.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n}\n.emp-profile{\n    /* padding: 3%; */\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: #fff;\n}\n.btn-action {\n    margin-left: 5px;\n}\n.ngtab-content {\n    padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJEQUEyRDtBQUMvRDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzM5MzFhZiwgIzAwYzZmZik7XG59XG4uZW1wLXByb2ZpbGV7XG4gICAgLyogcGFkZGluZzogMyU7ICovXG4gICAgbWFyZ2luLXRvcDogMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMyU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5idG4tYWN0aW9uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubmd0YWItY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/profile/profile.component.ts":
/*!***************************************************!*\
  !*** ./src/app/user/profile/profile.component.ts ***!
  \***************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_models_role__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/role */ "./src/app/models/role.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/templates/delete-user/delete-user.component */ "./src/app/templates/delete-user/delete-user.component.ts");
/* harmony import */ var src_app_templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/templates/change-user-role/change-user-role.component */ "./src/app/templates/change-user-role/change-user-role.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var src_app_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/templates/modal/modal.component */ "./src/app/templates/modal/modal.component.ts");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var src_app_models_status__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/models/status */ "./src/app/models/status.ts");
/* harmony import */ var src_app_messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/messages/new-message/new-message.component */ "./src/app/messages/new-message/new-message.component.ts");














let ProfileComponent = class ProfileComponent {
    constructor(auth, api, route, modalService, router, notifier) {
        this.auth = auth;
        this.api = api;
        this.route = route;
        this.modalService = modalService;
        this.router = router;
        this.notifier = notifier;
        // ICONS
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEdit"];
        this.faUserDel = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUserTimes"];
        this.faUserRole = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUserTag"];
        this.faMessage = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faEnvelope"];
        this.faBan = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faBan"];
        this.albums = [];
        this.playlists = [];
    }
    ngOnInit() {
        this.auth.currentUser.subscribe(currentUser => {
            this.currentUser = currentUser;
            console.log(currentUser);
            if (this.route.snapshot.url[1].path === 'profile') {
                this.api.getUser(currentUser.id).subscribe((user) => {
                    this.user = user;
                    this.getPlaylists();
                    this.getAlbums();
                });
            }
        });
        if (this.route.snapshot.url[1].path !== 'profile') {
            const userId = parseInt(this.route.snapshot.paramMap.get('id'));
            this.api.getUser(userId).subscribe((user) => {
                console.log(user);
                this.user = user;
                this.getPlaylists();
                this.getAlbums();
            });
        }
    }
    getPlaylists() {
        this.api.getPlaylistsByUser(this.user.id).subscribe((playlists) => {
            console.log(playlists);
            this.playlists = playlists;
        });
    }
    getAlbums() {
        this.api.getAlbumsByUser(this.user.id).subscribe((albums) => {
            console.log(albums);
            this.albums = albums;
        });
    }
    isAdmin() {
        return this.currentUser && this.currentUser.role === src_app_models_role__WEBPACK_IMPORTED_MODULE_5__["Role"].Admin;
    }
    isCurrentUser() {
        return this.currentUser && this.user && this.user.id === this.currentUser.id;
    }
    editUser() {
        // TODO open edit form in modal
        console.log('Edit user');
    }
    sendMessage() {
        const modalRef = this.modalService.open(src_app_messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_13__["NewMessageComponent"]);
        modalRef.result.then((result) => {
            console.log(result);
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.user = this.user;
        modalRef.componentInstance.senderId = this.currentUser.id;
        console.log('Send message');
    }
    changeRole() {
        const modalRef = this.modalService.open(src_app_templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_8__["ChangeUserRoleComponent"]);
        modalRef.result.then((result) => {
            console.log(result);
            if (result.role) {
                this.user.role = result.role;
            }
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.user = this.user;
    }
    blockUser(block = true) {
        let status;
        let action;
        if (block) {
            status = src_app_models_status__WEBPACK_IMPORTED_MODULE_12__["UserStatus"].BLOCKED;
            action = 'Block';
        }
        else {
            status = src_app_models_status__WEBPACK_IMPORTED_MODULE_12__["UserStatus"].ACTIVE;
            action = 'Unblock';
        }
        const modalRef = this.modalService.open(src_app_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]);
        modalRef.result.then((res) => {
            if (res === 'Ok') {
                this.api.updateUserStatus(this.user.id, status).subscribe((update) => {
                    console.log(update);
                    this.notifier.success(`User ${action}ed`);
                    this.user.status = status;
                });
            }
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.title = `${action} User`;
        modalRef.componentInstance.body = `Are you sure you want to ${action} this user?`;
        modalRef.componentInstance.okMsg = `${action} User`;
    }
    get isBlocked() {
        return this.user && this.user.status === src_app_models_status__WEBPACK_IMPORTED_MODULE_12__["UserStatus"].BLOCKED;
    }
    deleteUser() {
        // TODO delete user
        const modalRef = this.modalService.open(src_app_templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_7__["DeleteUserComponent"]);
        modalRef.result.then((result) => {
            console.log(result);
            if (result === 'deleted') {
                this.router.navigate(['/admin']);
            }
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.user = this.user;
    }
    createModal(action, model, modelName) {
        const modalRef = this.modalService.open(src_app_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]);
        modalRef.componentInstance.title = `${action} ${model}: ${modelName}`;
        modalRef.componentInstance.body = `Are you sure you want to ${action} this ${model}?`;
        modalRef.componentInstance.okMsg = `${action} ${model}`;
        return modalRef;
    }
    deleteAlbum(i) {
        const album = this.albums[i];
        this.createModal('Delete', 'Album', album.name).result.then((res) => {
            console.log(res);
            if (res === 'Ok') {
                this.api.deleteAlbum(album.id).subscribe((r) => {
                    console.log(r);
                    this.notifier.success('Album deleted!');
                    this.albums.splice(i, 1);
                });
            }
        }, (reason) => console.log(reason));
    }
    deletePlaylist(i) {
        const pl = this.playlists[i];
        this.createModal('Delete', 'Playlists', pl.name).result.then((res) => {
            console.log(res);
            if (res === 'Ok') {
                this.api.deletePlaylist(pl.id).subscribe((r) => {
                    console.log(r);
                    this.notifier.success('Playlist deleted!');
                    this.playlists.splice(i, 1);
                });
            }
        }, (reason) => console.log(reason));
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_11__["NotificationsService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/user/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/user/user-info/user-info.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n    background: -webkit-linear-gradient(left, #3931af, #00c6ff);\n}\n.emp-profile{\n    /* padding: 3%; */\n    margin-top: 3%;\n    margin-bottom: 3%;\n    border-radius: 0.5rem;\n    background: #fff;\n}\n.profile-img{\n    text-align: center;\n}\n.profile-img img{\n    width: 70%;\n    height: 100%;\n}\n.profile-img .file {\n    position: relative;\n    overflow: hidden;\n    margin-top: -20%;\n    width: 70%;\n    border: none;\n    border-radius: 0;\n    font-size: 15px;\n    background: #212529b8;\n}\n.profile-img .file input {\n    position: absolute;\n    opacity: 0;\n    right: 0;\n    top: 0;\n}\n.profile-head h5{\n    color: #333;\n}\n.profile-head h6{\n    color: #0062cc;\n}\n.profile-edit-btn{\n    border: none;\n    border-radius: 1.5rem;\n    width: 70%;\n    padding: 2%;\n    font-weight: 600;\n    color: #6c757d;\n    cursor: pointer;\n}\n.proile-rating{\n    font-size: 12px;\n    color: #818182;\n    margin-top: 5%;\n}\n.proile-rating span{\n    color: #495057;\n    font-size: 15px;\n    font-weight: 600;\n}\n.profile-head .nav-tabs{\n    margin-bottom:5%;\n}\n.profile-head .nav-tabs .nav-link{\n    font-weight:600;\n    border: none;\n}\n.profile-head .nav-tabs .nav-link.active{\n    border: none;\n    border-bottom:2px solid #0062cc;\n}\n.profile-work{\n    padding: 14%;\n    margin-top: -15%;\n}\n.profile-work p{\n    font-size: 12px;\n    color: #818182;\n    font-weight: 600;\n    margin-top: 10%;\n}\n.profile-work a{\n    text-decoration: none;\n    color: #495057;\n    font-weight: 600;\n    font-size: 14px;\n}\n.profile-work ul{\n    list-style: none;\n}\n.profile-tab label{\n    font-weight: 600;\n}\n.profile-tab p{\n    font-weight: 600;\n    color: #0062cc;\n}\n.col-md-6 > label {\n    font-weight: bold;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2VyLWluZm8vdXNlci1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyREFBMkQ7QUFDL0Q7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07QUFDVjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci1pbmZvL3VzZXItaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMzkzMWFmLCAjMDBjNmZmKTtcbn1cbi5lbXAtcHJvZmlsZXtcbiAgICAvKiBwYWRkaW5nOiAzJTsgKi9cbiAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5wcm9maWxlLWltZ3tcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucHJvZmlsZS1pbWcgaW1ne1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLnByb2ZpbGUtaW1nIC5maWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICMyMTI1MjliODtcbn1cbi5wcm9maWxlLWltZyAuZmlsZSBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xufVxuLnByb2ZpbGUtaGVhZCBoNXtcbiAgICBjb2xvcjogIzMzMztcbn1cbi5wcm9maWxlLWhlYWQgaDZ7XG4gICAgY29sb3I6ICMwMDYyY2M7XG59XG4ucHJvZmlsZS1lZGl0LWJ0bntcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzogMiU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucHJvaWxlLXJhdGluZ3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4MTgxODI7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG4ucHJvaWxlLXJhdGluZyBzcGFue1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnN7XG4gICAgbWFyZ2luLWJvdHRvbTo1JTtcbn1cbi5wcm9maWxlLWhlYWQgLm5hdi10YWJzIC5uYXYtbGlua3tcbiAgICBmb250LXdlaWdodDo2MDA7XG4gICAgYm9yZGVyOiBub25lO1xufVxuLnByb2ZpbGUtaGVhZCAubmF2LXRhYnMgLm5hdi1saW5rLmFjdGl2ZXtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbToycHggc29saWQgIzAwNjJjYztcbn1cbi5wcm9maWxlLXdvcmt7XG4gICAgcGFkZGluZzogMTQlO1xuICAgIG1hcmdpbi10b3A6IC0xNSU7XG59XG4ucHJvZmlsZS13b3JrIHB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjODE4MTgyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuLnByb2ZpbGUtd29yayBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzQ5NTA1NztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5wcm9maWxlLXdvcmsgdWx7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcm9maWxlLXRhYiBsYWJlbHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByb2ZpbGUtdGFiIHB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzAwNjJjYztcbn1cblxuLmNvbC1tZC02ID4gbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/user/user-info/user-info.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/user-info/user-info.component.ts ***!
  \*******************************************************/
/*! exports provided: UserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoComponent", function() { return UserInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserInfoComponent = class UserInfoComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserInfoComponent.prototype, "user", void 0);
UserInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/user-info/user-info.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-info.component.css */ "./src/app/user/user-info/user-info.component.css")).default]
    })
], UserInfoComponent);



/***/ }),

/***/ "./src/app/user/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/user/users/users.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".users {\n    background-color: white;\n    padding: 10px;\n    margin-top: 20px;\n}\n\n.btn-small {\n    margin-left: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci91c2Vycy91c2Vycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC91c2VyL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ0bi1zbWFsbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/user/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/user/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-notifications */ "./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var angular2_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/templates/change-user-role/change-user-role.component */ "./src/app/templates/change-user-role/change-user-role.component.ts");
/* harmony import */ var src_app_templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/templates/delete-user/delete-user.component */ "./src/app/templates/delete-user/delete-user.component.ts");
/* harmony import */ var src_app_messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/messages/new-message/new-message.component */ "./src/app/messages/new-message/new-message.component.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_models_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/status */ "./src/app/models/status.ts");
/* harmony import */ var src_app_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/templates/modal/modal.component */ "./src/app/templates/modal/modal.component.ts");











let UsersComponent = class UsersComponent {
    constructor(notifier, api, modalService, auth) {
        this.notifier = notifier;
        this.api = api;
        this.modalService = modalService;
        this.auth = auth;
    }
    ngOnInit() {
        this.api.getUsers().subscribe((users) => {
            this.users = users;
        }, (error) => console.log(error));
        this.auth.currentUser.subscribe((currentUser) => {
            this.currentUser = currentUser;
        });
    }
    deleteUser(i, user) {
        const modalRef = this.modalService.open(src_app_templates_delete_user_delete_user_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserComponent"]);
        modalRef.result.then((result) => {
            console.log(result);
            if (result === 'deleted') {
                this.users.splice(i, 1);
            }
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.user = user;
    }
    sendMessage(user) {
        const modalRef = this.modalService.open(src_app_messages_new_message_new_message_component__WEBPACK_IMPORTED_MODULE_7__["NewMessageComponent"]);
        modalRef.result.then((result) => {
            console.log(result);
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.user = user;
        modalRef.componentInstance.senderId = this.currentUser.id;
        console.log('Send message');
    }
    editUser(user) {
        const modalRef = this.modalService.open(src_app_templates_change_user_role_change_user_role_component__WEBPACK_IMPORTED_MODULE_5__["ChangeUserRoleComponent"]);
        modalRef.result.then((result) => {
            console.log(result);
            if (result.role) {
                const role = (result.role);
                user.role = role;
            }
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.user = user;
    }
    isActive(user) {
        return user.status === src_app_models_status__WEBPACK_IMPORTED_MODULE_9__["UserStatus"].ACTIVE;
    }
    blockUser(user) {
        console.log(user.status);
        let newStatus;
        let action;
        if (user.status === src_app_models_status__WEBPACK_IMPORTED_MODULE_9__["UserStatus"].ACTIVE) {
            newStatus = src_app_models_status__WEBPACK_IMPORTED_MODULE_9__["UserStatus"].BLOCKED;
            action = 'Block';
        }
        else {
            newStatus = src_app_models_status__WEBPACK_IMPORTED_MODULE_9__["UserStatus"].ACTIVE;
            action = 'Unblock';
        }
        const modalRef = this.modalService.open(src_app_templates_modal_modal_component__WEBPACK_IMPORTED_MODULE_10__["ModalComponent"]);
        modalRef.result.then((res) => {
            if (res === 'Ok') {
                this.api.updateUserStatus(user.id, newStatus).subscribe((update) => {
                    console.log(update);
                    this.notifier.success(`User ${action}ed`);
                    user.status = newStatus;
                });
            }
        }, (reason) => console.log('Dismissed:' + reason));
        modalRef.componentInstance.title = `${action} User`;
        modalRef.componentInstance.body = `Are you sure you want to ${action} this user?`;
        modalRef.componentInstance.okMsg = `${action} User`;
    }
};
UsersComponent.ctorParameters = () => [
    { type: angular2_notifications__WEBPACK_IMPORTED_MODULE_2__["NotificationsService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user/users/users.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/user/users/users.component.css")).default]
    })
], UsersComponent);



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
    production: false,
    // apiUrl: 'http://localhost:8080'
    apiUrl: 'http://ec2-3-19-232-127.us-east-2.compute.amazonaws.com:8080'
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