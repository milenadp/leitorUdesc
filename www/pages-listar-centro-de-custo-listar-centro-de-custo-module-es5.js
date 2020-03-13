function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-listar-centro-de-custo-listar-centro-de-custo-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesListarCentroDeCustoListarCentroDeCustoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"border\">\n\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"secondary\"></ion-back-button>\n        </ion-buttons>\n        <ion-title color=\"secondary\">UDESC</ion-title>\n        <ion-icon size=\"large\" class=\"ion-padding-end\" slot=\"end\" src=\"/assets/icon/logomarca.svg\"></ion-icon>\n    </ion-toolbar>\n\n    <ion-toolbar color=\"primary\">\n        <ion-grid class=\"justify-center\">\n            <ion-text size=\"large\" class=\"ion-padding-start\" color=\"secondary\">Lista Centro de Custo</ion-text>\n        </ion-grid>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-segment [(ngModel)]=\"selectedView\">\n        <ion-segment-button value=\"centroCusto\">\n            <ion-label>Centro de Custo</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"produtos\">\n            <ion-label>Produtos</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]=\"selectedView\">\n        <div *ngSwitchCase=\"'centroCusto'\">\n            <ion-item>\n                <ion-label position=\"stacked\">Qual o nome do Centro de Custo?</ion-label>\n                <ion-input [(ngModel)]=\"centroCusto.nome\" placeholder=\"Nome do Centro de Custo\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Qual o cpodigo de barras do Centro de Custo?</ion-label>\n                <ion-input [(ngModel)]=\"centroCusto.codigoBarras\" placeholder=\"Código lido...\"></ion-input>\n            </ion-item>\n            <ion-button expand=\"block\" (click)=\"addCentroCusto()\">Adicionar Centro de Custo</ion-button>\n\n            <ion-list>\n                <ion-item button *ngFor=\"let cc of centroCusto\" [routerLink]=\"['/', 'centroCusto', cc.id]\">\n                    <ion-label>\n                        <h2>{{ cc.nome }}</h2>\n                        <p>{{ cc.codigoBarras }}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </div>\n\n        <div *ngSwitchCase=\"'produtos'\">\n            <ion-item>\n                <ion-label position=\"stacked\">Nome do Produto</ion-label>\n                <ion-input [(ngModel)]=\"produto.nome\" placeholder=\"Nome\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Centro de Custo Pertencente:</ion-label>\n                <ion-select [(ngModel)]=\"produto.centroCusto\">\n                    <ion-select-option *ngFor=\"let cc of centroCusto\" [value]=\"cc.id\">{{ cc.nome }}</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"stacked\">Qual o cpodigo de barras do Produto?</ion-label>\n                <ion-input [(ngModel)]=\"produto.codigoBarras\" placeholder=\"Código lido...\"></ion-input>\n            </ion-item>\n            <ion-button expand=\"block\" (click)=\"addProduto()\">Adicionar Produto</ion-button>\n\n            <ion-list>\n                <ion-item *ngFor=\"let prod of produtos | async\">\n                    <ion-label>\n                        <h2>{{ prod.nome }}</h2>\n                        <p>Centro de Custo: {{ prod.centroCusto }}</p>\n                        <p>Código de Barras: {{ prod.codigoBarras }}</p>\n                    </ion-label>\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/pages/listar-centro-de-custo/listar-centro-de-custo-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: ListarCentroDeCustoPageRoutingModule */

  /***/
  function srcAppPagesListarCentroDeCustoListarCentroDeCustoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListarCentroDeCustoPageRoutingModule", function () {
      return ListarCentroDeCustoPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _listar_centro_de_custo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listar-centro-de-custo.page */
    "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.ts");

    var routes = [{
      path: '',
      component: _listar_centro_de_custo_page__WEBPACK_IMPORTED_MODULE_3__["ListarCentroDeCustoPage"]
    }];

    var ListarCentroDeCustoPageRoutingModule = function ListarCentroDeCustoPageRoutingModule() {
      _classCallCheck(this, ListarCentroDeCustoPageRoutingModule);
    };

    ListarCentroDeCustoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListarCentroDeCustoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: ListarCentroDeCustoPageModule */

  /***/
  function srcAppPagesListarCentroDeCustoListarCentroDeCustoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListarCentroDeCustoPageModule", function () {
      return ListarCentroDeCustoPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _listar_centro_de_custo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./listar-centro-de-custo-routing.module */
    "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo-routing.module.ts");
    /* harmony import */


    var _listar_centro_de_custo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./listar-centro-de-custo.page */
    "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.ts");

    var ListarCentroDeCustoPageModule = function ListarCentroDeCustoPageModule() {
      _classCallCheck(this, ListarCentroDeCustoPageModule);
    };

    ListarCentroDeCustoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _listar_centro_de_custo_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListarCentroDeCustoPageRoutingModule"]],
      declarations: [_listar_centro_de_custo_page__WEBPACK_IMPORTED_MODULE_6__["ListarCentroDeCustoPage"]]
    })], ListarCentroDeCustoPageModule);
    /***/
  },

  /***/
  "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesListarCentroDeCustoListarCentroDeCustoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".border {\n  border-bottom: solid 2px;\n  border-color: #1a4a24;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hdGhldXNxdW9zdC9Eb2N1bWVudG9zL05pVC9sZWl0b3ItdWRlc2Mvc3JjL2FwcC9wYWdlcy9saXN0YXItY2VudHJvLWRlLWN1c3RvL2xpc3Rhci1jZW50cm8tZGUtY3VzdG8ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9saXN0YXItY2VudHJvLWRlLWN1c3RvL2xpc3Rhci1jZW50cm8tZGUtY3VzdG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlzdGFyLWNlbnRyby1kZS1jdXN0by9saXN0YXItY2VudHJvLWRlLWN1c3RvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcbiAgICBib3JkZXItY29sb3I6ICMxYTRhMjQ7XG59IiwiLmJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcbiAgYm9yZGVyLWNvbG9yOiAjMWE0YTI0O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: ListarCentroDeCustoPage */

  /***/
  function srcAppPagesListarCentroDeCustoListarCentroDeCustoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListarCentroDeCustoPage", function () {
      return ListarCentroDeCustoPage;
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


    var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/database.service */
    "./src/app/services/database.service.ts");

    var ListarCentroDeCustoPage =
    /*#__PURE__*/
    function () {
      function ListarCentroDeCustoPage(db) {
        _classCallCheck(this, ListarCentroDeCustoPage);

        this.db = db;
        this.ccs = [];
        this.centroCusto = {};
        this.produto = {};
        this.selectedView = 'ccs';
      }

      _createClass(ListarCentroDeCustoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.db.getDatabaseState().subscribe(function (rdy) {
            if (rdy) {
              _this.db.getCcs().subscribe(function (ccs) {
                _this.centroCusto = ccs;
              });

              _this.produtos = _this.db.getProdutos();
            }
          });
        }
      }, {
        key: "addCentroCusto",
        value: function addCentroCusto() {
          var _this2 = this;

          this.db.addCentroCusto(this.centroCusto['nome'], this.centroCusto['codeRead']).then(function (_) {
            _this2.centroCusto = {};
          });
        }
      }, {
        key: "addProduto",
        value: function addProduto() {
          var _this3 = this;

          this.db.addProduto(this.produto['nome'], this.produto['codigoBarras'], this.produto['centroCusto']).then(function (_) {
            _this3.produto = {};
          });
        }
      }]);

      return ListarCentroDeCustoPage;
    }();

    ListarCentroDeCustoPage.ctorParameters = function () {
      return [{
        type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
      }];
    };

    ListarCentroDeCustoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-listar-centro-de-custo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./listar-centro-de-custo.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./listar-centro-de-custo.page.scss */
      "./src/app/pages/listar-centro-de-custo/listar-centro-de-custo.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])], ListarCentroDeCustoPage);
    /***/
  },

  /***/
  "./src/app/services/database.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/database.service.ts ***!
    \**********************************************/

  /*! exports provided: DatabaseService */

  /***/
  function srcAppServicesDatabaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatabaseService", function () {
      return DatabaseService;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/sqlite-porter/ngx */
    "./node_modules/@ionic-native/sqlite-porter/ngx/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/sqlite/ngx */
    "./node_modules/@ionic-native/sqlite/ngx/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var DatabaseService =
    /*#__PURE__*/
    function () {
      function DatabaseService(plt, sqlitePorter, sqlite, http) {
        var _this4 = this;

        _classCallCheck(this, DatabaseService);

        this.plt = plt;
        this.sqlitePorter = sqlitePorter;
        this.sqlite = sqlite;
        this.http = http;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
        this.centroCusto = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.produtos = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"]([]);
        this.plt.ready().then(function () {
          _this4.sqlite.create({
            name: 'patrimonio.db',
            location: 'default'
          }).then(function (db) {
            _this4.database = db;

            _this4.seedDatabase();
          });
        });
      }

      _createClass(DatabaseService, [{
        key: "seedDatabase",
        value: function seedDatabase() {
          var _this5 = this;

          this.http.get('/assets/arquivos/insert.sql', {
            responseType: 'text'
          }).subscribe(function (sql) {
            _this5.sqlitePorter.importSqlToDb(_this5.database, sql).then(function (_) {
              _this5.carregaCcs();

              _this5.loadProdutos();

              _this5.dbReady.next(true);
            }).catch(function (e) {
              return console.error(e);
            });
          });
        }
      }, {
        key: "getDatabaseState",
        value: function getDatabaseState() {
          return this.dbReady.asObservable();
        }
      }, {
        key: "getCcs",
        value: function getCcs() {
          return this.centroCusto.asObservable();
        }
      }, {
        key: "getProdutos",
        value: function getProdutos() {
          return this.produtos.asObservable();
        }
      }, {
        key: "carregaCcs",
        value: function carregaCcs() {
          var _this6 = this;

          return this.database.executeSql('SELECT * FROM centroCusto', []).then(function (data) {
            var ccs = [];

            if (data.rows.length > 0) {
              for (var i = 0; i < data.rows.length; i++) {
                var skills = [];

                if (data.rows.item(i).skills != '') {
                  skills = JSON.parse(data.rows.item(i).skills);
                }

                ccs.push({
                  id: data.rows.item(i).id,
                  nome: data.rows.item(i).nome,
                  codeRead: data.rows.item(i).codigoBarras
                });
              }
            }

            _this6.centroCusto.next(ccs);
          });
        }
      }, {
        key: "addCentroCusto",
        value: function addCentroCusto(nome, codigoBarras) {
          var _this7 = this;

          var data = [nome, codigoBarras];
          return this.database.executeSql('INSERT INTO centroCusto (nome, codigoBarras) VALUES (?, ?)', data).then(function (data) {
            _this7.carregaCcs();
          });
        }
      }, {
        key: "getCentroCusto",
        value: function getCentroCusto(id) {
          return this.database.executeSql('SELECT * FROM centroCusto WHERE id = ?', [id]).then(function (data) {
            return {
              id: data.rows.item(0).id,
              nome: data.rows.item(0).nome,
              codeRead: data.rows.item(0).codigoBarras
            };
          });
        }
      }, {
        key: "deleteCentroCusto",
        value: function deleteCentroCusto(id) {
          var _this8 = this;

          return this.database.executeSql('DELETE FROM centroCusto WHERE id = ?', [id]).then(function (_) {
            _this8.carregaCcs();

            _this8.loadProdutos();
          });
        }
      }, {
        key: "updateCentroCusto",
        value: function updateCentroCusto(dev) {
          var _this9 = this;

          var data = [dev.nome, dev.codeRead];
          return this.database.executeSql("UPDATE centroCusto SET nome = ?, codigoBarras = ? WHERE id = ".concat(dev.id), data).then(function (data) {
            _this9.carregaCcs();
          });
        }
      }, {
        key: "loadProdutos",
        value: function loadProdutos() {
          var _this10 = this;

          var query = 'SELECT produto.nome, produto.codigoBarras, centroCusto.nome AS centroCusto FROM produto JOIN centroCusto ON centroCusto.id = produto.ccId';
          return this.database.executeSql(query, []).then(function (data) {
            var produtos = [];

            if (data.rows.length > 0) {
              for (var i = 0; i < data.rows.length; i++) {
                produtos.push({
                  nome: data.rows.item(i).name,
                  id: data.rows.item(i).id,
                  centroCusto: data.rows.item(i).centroCusto,
                  codigoBarras: data.rows.item(i).codigoBarras
                });
              }
            }

            _this10.produtos.next(produtos);
          });
        }
      }, {
        key: "addProduto",
        value: function addProduto(nome, centroCusto, codigoBarras) {
          var _this11 = this;

          var data = [nome, centroCusto, codigoBarras];
          return this.database.executeSql('INSERT INTO produto (nome, ccId, codigoBarras) VALUES (?, ?, ?)', data).then(function (data) {
            _this11.loadProdutos();
          });
        }
      }]);

      return DatabaseService;
    }();

    DatabaseService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLitePorter"]
      }, {
        type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    DatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__["SQLitePorter"], _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__["SQLite"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])], DatabaseService);
    /***/
  }
}]);
//# sourceMappingURL=pages-listar-centro-de-custo-listar-centro-de-custo-module-es5.js.map