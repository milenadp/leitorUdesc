function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"border\">\n  <ion-toolbar color=\"primary\">\n    <ion-title color=\"secondary\">UDESC</ion-title>\n    <ion-icon size=\"large\" class=\"ion-align-self-center ion-padding-start\" slot=\"start\"\n      src=\"/assets/icon/logomarca.svg\"></ion-icon>\n    <ion-buttons slot=\"secondary\">\n      <ion-button>\n        <ion-icon size=\"large\" color=\"secondary\" name=\"menu-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  <ion-toolbar color=\"primary\">\n    <ion-grid class=\"justify-center\">\n      <ion-text size=\"large\" class=\"ion-padding-start\" color=\"secondary\">Leitor de Código de Barras UDESC</ion-text>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-margin-top\">\n    <ion-row class=\"ion-align-self-center ion-margin-top\">\n      <ion-col size=\"10\" class=\"img\">\n        <img class=\"img\" src=\"assets/placa-patrimonio.svg\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col class=\"ion-margin-top\">\n        <ion-text class=\"ion-margin-top text-center\">Pressione o botão para iniciar a leitura do código de barras\n          seguindo os padrões UDESC</ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col class=\"ion-margin-top\">\n        <ion-button color=\"secondary\" expand=\"block\" (click)=\"scan()\">\n          <p color=\"secondary\">Escanear</p>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item *ngIf=\"data\">\n          <ion-label position=\"stacked\">Informação lida: </ion-label>\n          <ion-input [value]=\"data.text\" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-content ion-toolbar {\n  --background: translucent;\n}\n\n.img {\n  width: auto;\n  margin: auto;\n  display: block;\n}\n\n.border {\n  border-bottom: solid 2px;\n  border-color: #1a4a24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXNxdW9zdC9Eb2N1bWVudG9zL0xlaXRvciBVREVTQy9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUNFLHdCQUFBO0VBQ0EscUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uaW1ne1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJvcmRlcntcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xuICBib3JkZXItY29sb3I6ICMxYTRhMjQ7XG59XG4gICIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG5cbi5pbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjMWE0YTI0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(barcodeScanner) {
        _classCallCheck(this, HomePage);

        this.barcodeScanner = barcodeScanner;
      } // a função scan pode ter um objeto options nela, vide: scan({options})... Essa opções podem ser:
      // preferFrontCamera: true, // iOS and Android
      // showFlipCameraButton: true, // iOS and Android
      // showTorchButton: true, // iOS and Android
      // torchOn: true, // Android, launch with the torch switched on (if   available)
      // saveHistory: true, // Android, save scan history (default false)
      // prompt: "Place a barcode inside the scan area", // Android
      // resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      // formats: "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
      // orientation: "landscape", // Android only (portrait|landscape), default unset so it rotates with the device


      _createClass(HomePage, [{
        key: "scan",
        value: function scan() {
          var _this = this;

          this.data = null;
          this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            _this.data = barcodeData;
          }).catch(function (err) {
            console.log('Error', err);
          });
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]
      }];
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map