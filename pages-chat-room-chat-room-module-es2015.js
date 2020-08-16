(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-room-chat-room-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/chat-room/chat-room.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/chat-room/chat-room.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar _bg-theme-color style=\"background-color: #1e2023\">\r\n      <ion-icon *ngIf=\"api.admin\" slot=\"start\" name=\"arr ow-round-back\" padding style=\"padding-right: 0px\" (click)=\"goBack()\"></ion-icon>\r\n        <span slot=\"start\" padding >\r\n            <img style=\"height: 30px; width: 100px\" src=\"../../../assets/imgs/dema-big.png\">\r\n        </span>\r\n      <ion-title no-padding style=\" font-family: Montserrat\">{{ user?.name }}</ion-title>\r\n      <ion-icon name=\"videocam\" slot=\"end\" padding></ion-icon>\r\n      <ion-icon name=\"call\" slot=\"end\" padding></ion-icon>\r\n      <ion-icon *ngIf=\"api.admin\" name=\"more\" slot=\"end\" padding></ion-icon>\r\n      <ion-icon *ngIf=\"!api.admin\" name=\"log-out\" (click)=\"logout()\" slot=\"end\" padding></ion-icon>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n\r\n<ion-content bg-sky>\r\n  <div *ngFor=\"let mess of messages\">\r\n    <div flex flow-right *ngIf=\"mess.type==userType\">\r\n        <ion-card bg-light>\r\n            <ion-card-content style=\"padding-bottom: 0px; font-family: Montserrat\">\r\n            {{ mess.msg }}\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n    <div flex *ngIf=\"mess.type!=userType\">\r\n        <ion-card bg-white-chat>\r\n            <ion-card-content style=\"padding-bottom: 0px; font-family: Montserrat\">\r\n            {{ mess.msg }}  \r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"loader\" flex v-center h-center style=\"height: 100%;\">\r\n      <ion-spinner name=\"crescent\" color=\"success\" style=\"width: 100px; height: 100px;\"></ion-spinner>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n    <ion-toolbar>\r\n        <div slot=\"start\" padding>\r\n          😀\r\n        </div>\r\n        <ion-input [(ngModel)] = \"chat\" style=\" font-family: Montserrat\"\r\n          placeholder=\"Type here...\"\r\n        ></ion-input>\r\n        <ion-icon (click)=\"sendChat()\" name=\"send\" slot=\"end\" padding></ion-icon>\r\n    </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.module.ts ***!
  \*****************************************************/
/*! exports provided: ChatRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat-room.page */ "./src/app/pages/chat-room/chat-room.page.ts");







const routes = [
    {
        path: '',
        component: _chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }
];
let ChatRoomPageModule = class ChatRoomPageModule {
};
ChatRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]]
    })
], ChatRoomPageModule);



/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.css":
/*!****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  width: 80%;\n  border-radius: 15px;\n}\n\n[flow-right] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-flow: row-reverse;\n}\n\nion-content {\n  background: image(\"../../../assets/imgs/background.jpeg\");\n}\n\n[bg-white-chat] {\n  --background: #0a0a0a;\n  --color: #ffc000;\n}\n\n[bg-light] {\n  --background: #f6b535;\n  --color: #000;\n}\n\n[light-time] {\n  color: #6a6a6a;\n  font-size: 0.7rem;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=chat-room.page.css.map */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1yb29tL2NoYXQtcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURDQTtFQUNJLDhCQUFBO0VBQUEsOEJBQUE7VUFBQSxzQkFBQTtBQ0VKOztBRENBO0VBQ0kseURBQUE7QUNFSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHQTtFQUNJLHFCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBQUVBLDZDQUE2QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  width: 80%;\n  border-radius: 15px;\n}\n\n[flow-right] {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n          flex-flow: row-reverse;\n}\n\nion-content {\n  background: image(\"../../../assets/imgs/background.jpeg\");\n}\n\n[bg-white-chat] {\n  --background: #0a0a0a;\n  --color: #ffc000;\n}\n\n[bg-light] {\n  --background: #f6b535;\n  --color: #000;\n}\n\n[light-time] {\n  color: #6a6a6a;\n  font-size: 0.7rem;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1yb29tL0Q6XFxBZGl5XFxpb25pYy1tZXNzZW5nZXItZmlyZWJhc2Uvc3JjXFxhcHBcXHBhZ2VzXFxjaGF0LXJvb21cXGNoYXQtcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSw4QkFBQTtFQUFBLDhCQUFBO1VBQUEsc0JBQUE7QUNFSjs7QURDQTtFQUNJLHlEQUFBO0FDRUo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FER0E7RUFDSSxxQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuW2Zsb3ctcmlnaHRdIHtcclxuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZDogaW1hZ2UoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy9iYWNrZ3JvdW5kLmpwZWdcIik7XHJcbn1cclxuW2JnLXNreV0ge1xyXG5cclxuXHJcbn1cclxuW2JnLXdoaXRlLWNoYXRde1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMGEwYTBhO1xyXG4gICAgLS1jb2xvcjogI2ZmYzAwMDtcclxufVxyXG5bYmctbGlnaHRdIHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y2YjUzNTtcclxuICAgIC0tY29sb3I6ICMwMDA7XHJcbn1cclxuW2xpZ2h0LXRpbWVdIHtcclxuICAgIGNvbG9yOiAjNmE2YTZhO1xyXG4gICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIiwiaW9uLWNhcmQge1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG5bZmxvdy1yaWdodF0ge1xuICBmbGV4LWZsb3c6IHJvdy1yZXZlcnNlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGltYWdlKFwiLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFja2dyb3VuZC5qcGVnXCIpO1xufVxuXG5bYmctd2hpdGUtY2hhdF0ge1xuICAtLWJhY2tncm91bmQ6ICMwYTBhMGE7XG4gIC0tY29sb3I6ICNmZmMwMDA7XG59XG5cbltiZy1saWdodF0ge1xuICAtLWJhY2tncm91bmQ6ICNmNmI1MzU7XG4gIC0tY29sb3I6ICMwMDA7XG59XG5cbltsaWdodC10aW1lXSB7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcGFkZGluZzogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/chat-room/chat-room.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/chat-room/chat-room.page.ts ***!
  \***************************************************/
/*! exports provided: ChatRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function() { return ChatRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/api.service */ "./src/app/api/api.service.ts");




let ChatRoomPage = class ChatRoomPage {
    constructor(api, route, router) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.messages = [];
        this.chatKeys = [];
        this.loader = true;
        this.route.queryParamMap.subscribe(snap => {
            this.user = snap['params'];
            this.getChat();
        });
        this.userType = this.api.admin ? 'admin' : 'user';
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(['/home'], { skipLocationChange: false });
    }
    logout() {
        console.log('lgout');
        this.api.signOut();
    }
    sendChat() {
        this.chat ? console.log(this.chat) : '';
        if (this.chat) {
            this.api.sendMsg(this.user.id, this.chat, this.userType);
        }
        this.chat = '';
    }
    getChat() {
        console.log('get chat', this.user.id);
        this.unsubscribe = this.api.db.collection("chatRoom").where("id", "==", this.user.id)
            .onSnapshot((querySnapshot) => {
            this.loader = false;
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                let data = doc.data();
                if (this.chatKeys.indexOf(data.key) < 0) {
                    this.messages.push(data);
                    this.chatKeys.push(data.key);
                }
                console.log(doc.data());
            });
            this.messages.sort(this.sortDate);
        });
    }
    sortDate(a, b) {
        var dateA = new Date(a.timestamp.toDate());
        var dateB = new Date(b.timestamp.toDate());
        return dateA > dateB ? 1 : -1;
    }
    ;
    ionViewWillLeave() {
        this.api.admin ? this.unsubscribe() : '';
        console.log('unsubscribe successfully');
    }
};
ChatRoomPage.ctorParameters = () => [
    { type: src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ChatRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat-room',
        template: __webpack_require__(/*! raw-loader!./chat-room.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/chat-room/chat-room.page.html"),
        styles: [__webpack_require__(/*! ./chat-room.page.scss */ "./src/app/pages/chat-room/chat-room.page.scss"), __webpack_require__(/*! ./chat-room.page.css */ "./src/app/pages/chat-room/chat-room.page.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ChatRoomPage);



/***/ })

}]);
//# sourceMappingURL=pages-chat-room-chat-room-module-es2015.js.map