(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basicForm_basicForm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basicForm/basicForm.component */ "./src/app/basicForm/basicForm.component.ts");
/* harmony import */ var _templateForm_templateForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templateForm/templateForm.component */ "./src/app/templateForm/templateForm.component.ts");
/* harmony import */ var _reactiveForm_reactiveForm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactiveForm/reactiveForm.component */ "./src/app/reactiveForm/reactiveForm.component.ts");
/* harmony import */ var _starterTemplateForm_starterTemplateForm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./starterTemplateForm/starterTemplateForm.component */ "./src/app/starterTemplateForm/starterTemplateForm.component.ts");
/* harmony import */ var _starterReactiveForm_starterReactiveForm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starterReactiveForm/starterReactiveForm.component */ "./src/app/starterReactiveForm/starterReactiveForm.component.ts");
/* harmony import */ var _updateOn_updateOn_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./updateOn/updateOn.component */ "./src/app/updateOn/updateOn.component.ts");
/* harmony import */ var _controlValueAccessor_controlValueAccessor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controlValueAccessor/controlValueAccessor.component */ "./src/app/controlValueAccessor/controlValueAccessor.component.ts");
/* harmony import */ var _reactiveDynamicForm_reactive_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reactiveDynamicForm/reactive-dynamic-form.component */ "./src/app/reactiveDynamicForm/reactive-dynamic-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/startertemplateform' },
    { path: 'startertemplateform', component: _starterTemplateForm_starterTemplateForm_component__WEBPACK_IMPORTED_MODULE_5__["StarterTemplateFormComponent"] },
    { path: 'starterreactiveform', component: _starterReactiveForm_starterReactiveForm_component__WEBPACK_IMPORTED_MODULE_6__["StarterReactiveFormComponent"] },
    { path: 'basicform', component: _basicForm_basicForm_component__WEBPACK_IMPORTED_MODULE_2__["BasicFormComponent"] },
    { path: 'templateform', component: _templateForm_templateForm_component__WEBPACK_IMPORTED_MODULE_3__["TemplateFormComponent"] },
    { path: 'reactiveform', component: _reactiveForm_reactiveForm_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormComponent"] },
    { path: 'updateon', component: _updateOn_updateOn_component__WEBPACK_IMPORTED_MODULE_7__["UpdateOnComponent"] },
    { path: 'controlvalueaccessor', component: _controlValueAccessor_controlValueAccessor_component__WEBPACK_IMPORTED_MODULE_8__["ControlValueAccessorComponent"] },
    { path: 'reactivedynamicform', component: _reactiveDynamicForm_reactive_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveDynamicFormComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.components = [
        _starterTemplateForm_starterTemplateForm_component__WEBPACK_IMPORTED_MODULE_5__["StarterTemplateFormComponent"], _starterReactiveForm_starterReactiveForm_component__WEBPACK_IMPORTED_MODULE_6__["StarterReactiveFormComponent"],
        _basicForm_basicForm_component__WEBPACK_IMPORTED_MODULE_2__["BasicFormComponent"], _templateForm_templateForm_component__WEBPACK_IMPORTED_MODULE_3__["TemplateFormComponent"], _reactiveForm_reactiveForm_component__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormComponent"],
        _controlValueAccessor_controlValueAccessor_component__WEBPACK_IMPORTED_MODULE_8__["ControlValueAccessorComponent"], _updateOn_updateOn_component__WEBPACK_IMPORTED_MODULE_7__["UpdateOnComponent"], _reactiveDynamicForm_reactive_dynamic_form_component__WEBPACK_IMPORTED_MODULE_9__["ReactiveDynamicFormComponent"]
    ];
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <nav class=\"navbar navbar-default\">\n    <div class=\"navbar-header\">\n      <a href=\"#/\"><img src=\"assets/angular.png\" class=\"logo\" /></a>\n    </div>\n    <ul class=\"nav navbar-nav nav-pills\">\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/startertemplateform\">Starter Template Form</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/starterreactiveform\">Starter Reactive Form</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/basicform\">Basic Template Form</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/templateform\">Template Form</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/reactiveform\">Reactive Form</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/reactivedynamicform\">Reactive Dynamic Form</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/controlvalueaccessor\">Custom Components</a>\n      </li>\n      <li routerLinkActive=\"active\">\n        <a routerLink=\"/updateon\">Update On</a>\n      </li>\n    </ul>\n  </nav>\n  \n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  \n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _controlValueAccessor_required_textbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controlValueAccessor/required-textbox.component */ "./src/app/controlValueAccessor/required-textbox.component.ts");
/* harmony import */ var _controlValueAccessor_phone_textbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controlValueAccessor/phone-textbox.component */ "./src/app/controlValueAccessor/phone-textbox.component.ts");
/* harmony import */ var _shared_camel_to_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/camel-to-title.pipe */ "./src/app/shared/camel-to-title.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"].components, _controlValueAccessor_required_textbox_component__WEBPACK_IMPORTED_MODULE_5__["RequiredTextboxComponent"], _controlValueAccessor_phone_textbox_component__WEBPACK_IMPORTED_MODULE_6__["PhoneTextboxComponent"], _shared_camel_to_title_pipe__WEBPACK_IMPORTED_MODULE_7__["CamelToTitlePipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basicForm/basicForm.component.html":
/*!****************************************************!*\
  !*** ./src/app/basicForm/basicForm.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!submitted\">\n    <h1>Basic Template Driven Form</h1>\n    <form #heroForm=\"ngForm\" (ngSubmit)=\"onSubmit(heroForm.value)\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" ngModel #name=\"ngModel\" required>\n        <div class=\"alert alert-danger\" [hidden]=\"name.valid || name.pristine\">Name is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"alterEgo\">Alter Ego</label>\n        <input type=\"text\" class=\"form-control\" name=\"alterEgo\" ngModel #alterEgo=\"ngModel\" required>\n        <div class=\"alert alert-danger\" [hidden]=\"alterEgo.valid || alterEgo.pristine\">Alter Ego is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"power\">Hero Power</label>\n        <select class=\"form-control\" name=\"power\" ngModel #power=\"ngModel\" required>\n          <option *ngFor=\"let p of powers\" [value]=\"p\">{{ p }}</option>\n        </select>\n        <div class=\"alert alert-danger\" [hidden]=\"power.valid || power.pristine\">Power is required</div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!heroForm.valid\">Submit</button>\n    </form>\n  </div>\n  <div *ngIf=\"submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Name</div>\n      <div class=\"col-md-10 pull-left\">{{ form.name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Alter Ego</div>\n      <div class=\"col-md-10 pull-left\">{{ form.alterEgo }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Power</div>\n      <div class=\"col-md-10 pull-left\">{{ form.power }}</div>\n    </div>\n    <br />\n    Raw output from form.value:\n    <br />\n    {{ form | json }}\n    <br /><br />\n    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/basicForm/basicForm.component.ts":
/*!**************************************************!*\
  !*** ./src/app/basicForm/basicForm.component.ts ***!
  \**************************************************/
/*! exports provided: BasicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFormComponent", function() { return BasicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicFormComponent = /** @class */ (function () {
    function BasicFormComponent() {
        this.submitted = false;
    }
    BasicFormComponent.prototype.ngOnInit = function () {
        this.powers = ['Really Smart', 'Turbulent Breeze',
            'Super Hot', 'Weather Changer'];
    };
    BasicFormComponent.prototype.onSubmit = function (form) {
        this.submitted = true;
        this.form = form;
    };
    BasicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'basic-template-driven-form',
            template: __webpack_require__(/*! ./basicForm.component.html */ "./src/app/basicForm/basicForm.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], BasicFormComponent);
    return BasicFormComponent;
}());



/***/ }),

/***/ "./src/app/controlValueAccessor/component-styles.css":
/*!***********************************************************!*\
  !*** ./src/app/controlValueAccessor/component-styles.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host(.ng-invalid) input {\n    border-left: 5px solid #a94442;\n  }\n  \n:host(.ng-valid) input {\n    border-left: 5px solid #42A948;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbFZhbHVlQWNjZXNzb3IvY29tcG9uZW50LXN0eWxlcy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrQkFBK0I7R0FDaEM7O0FBRUg7SUFDSSwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9jb250cm9sVmFsdWVBY2Nlc3Nvci9jb21wb25lbnQtc3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0KC5uZy1pbnZhbGlkKSBpbnB1dCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjYTk0NDQyO1xuICB9XG4gIFxuOmhvc3QoLm5nLXZhbGlkKSBpbnB1dCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjNDJBOTQ4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/controlValueAccessor/controlValueAccessor.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/controlValueAccessor/controlValueAccessor.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customer Edit</h1>\n<form [formGroup]=\"customerForm\" (ngSubmit)=\"submit()\">\n    <div class=\"form-group\">\n        <label>Name</label>\n        <required-textbox formControlName=\"name\"></required-textbox>\n        <div class=\"alert alert-danger\" *ngIf=\"customerForm.controls.name.invalid\">First Name is required!</div>\n    </div>\n    <div class=\"form-group\">\n        <label>Phone</label>\n        <phone-textbox formControlName=\"phone\"></phone-textbox>\n        <div class=\"alert alert-danger\" *ngIf=\"customerForm.controls.phone.errors?.required\">Enter a phone number!</div>\n        <div class=\"alert alert-danger\" *ngIf=\"customerForm.controls.phone.errors?.phone\">Enter a valid phone number!</div>\n    </div>\n    <br />\n    <button class=\"btn btn-default\" [disabled]=\"customerForm.invalid\">Submit</button>\n    <br /><br />\n    {{ message }}\n    <br /><br />\n    Valid: {{ customerForm.valid}}\n    <br />\n    Pristine: {{ customerForm.pristine }}\n    <br />\n    Touched: {{ customerForm.touched }}\n</form>"

/***/ }),

/***/ "./src/app/controlValueAccessor/controlValueAccessor.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/controlValueAccessor/controlValueAccessor.component.ts ***!
  \************************************************************************/
/*! exports provided: ControlValueAccessorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlValueAccessorComponent", function() { return ControlValueAccessorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlValueAccessorComponent = /** @class */ (function () {
    function ControlValueAccessorComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ControlValueAccessorComponent.prototype.ngOnInit = function () {
        this.customer = {
            firstName: 'Tina Reactive',
            phone: '123-123-1234'
        };
        this.customerForm = this.formBuilder.group({
            name: [this.customer.firstName],
            phone: [this.customer.phone]
        });
    };
    ControlValueAccessorComponent.prototype.submit = function () {
        this.message = 'You entered: ' +
            this.customerForm.controls.name.value + ' ' +
            this.customerForm.controls.phone.value;
    };
    ControlValueAccessorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'control-value-accessor',
            template: __webpack_require__(/*! ./controlValueAccessor.component.html */ "./src/app/controlValueAccessor/controlValueAccessor.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ControlValueAccessorComponent);
    return ControlValueAccessorComponent;
}());



/***/ }),

/***/ "./src/app/controlValueAccessor/phone-textbox.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/controlValueAccessor/phone-textbox.component.ts ***!
  \*****************************************************************/
/*! exports provided: PhoneTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneTextboxComponent", function() { return PhoneTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneTextboxComponent = /** @class */ (function () {
    function PhoneTextboxComponent() {
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        this.onValidate = function (_) { };
        this.disabled = false;
    }
    PhoneTextboxComponent_1 = PhoneTextboxComponent;
    PhoneTextboxComponent.prototype.writeValue = function (value) { this.value = value; };
    PhoneTextboxComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    PhoneTextboxComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    PhoneTextboxComponent.prototype.setDisabledState = function (disabled) { this.disabled = disabled; };
    PhoneTextboxComponent.prototype.validate = function (ctrl) {
        var requiredErrors = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required(ctrl);
        var patternErrors = _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/)(ctrl);
        if (!requiredErrors && !patternErrors) {
            return null;
        }
        return {
            required: requiredErrors,
            phone: patternErrors
        };
    };
    var PhoneTextboxComponent_1;
    PhoneTextboxComponent = PhoneTextboxComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone-textbox',
            template: "\n        <input type=\"text\" class=\"form-control\" [value]=\"value\" \n               (input)=\"onChange($event.target.value)\" \n               (blur)=\"onTouched($event)\" [disabled]=\"disabled\" />\n    ",
            styles: [__webpack_require__(/*! ./component-styles.css */ "./src/app/controlValueAccessor/component-styles.css")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PhoneTextboxComponent_1; }), multi: true },
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return PhoneTextboxComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PhoneTextboxComponent);
    return PhoneTextboxComponent;
}());



/***/ }),

/***/ "./src/app/controlValueAccessor/required-textbox.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/controlValueAccessor/required-textbox.component.ts ***!
  \********************************************************************/
/*! exports provided: RequiredTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequiredTextboxComponent", function() { return RequiredTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequiredTextboxComponent = /** @class */ (function () {
    function RequiredTextboxComponent() {
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        this.disabled = false;
    }
    RequiredTextboxComponent_1 = RequiredTextboxComponent;
    RequiredTextboxComponent.prototype.writeValue = function (value) { this.value = value; };
    RequiredTextboxComponent.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RequiredTextboxComponent.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RequiredTextboxComponent.prototype.setDisabledState = function (disabled) { this.disabled = disabled; };
    RequiredTextboxComponent.prototype.validate = function (ctrl) { return _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required(ctrl); };
    var RequiredTextboxComponent_1;
    RequiredTextboxComponent = RequiredTextboxComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'required-textbox',
            template: "\n        <input type=\"text\" class=\"form-control\" [value]=\"value\" \n               (input)=\"onChange($event.target.value)\" \n               (blur)=\"onTouched($event)\" [disabled]=\"disabled\" />\n    ",
            styles: [__webpack_require__(/*! ./component-styles.css */ "./src/app/controlValueAccessor/component-styles.css")],
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RequiredTextboxComponent_1; }), multi: true },
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return RequiredTextboxComponent_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], RequiredTextboxComponent);
    return RequiredTextboxComponent;
}());



/***/ }),

/***/ "./src/app/reactiveDynamicForm/reactive-dynamic-form.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/reactiveDynamicForm/reactive-dynamic-form.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!submitted\">\n    <form [formGroup]=\"heroForm\" (ngSubmit)=\"submit()\">\n        <div *ngFor=\"let prop of formModelProps\">\n            <div class=\"form-group\" *ngIf=\"prop !== 'id'\">\n                <label for=\"name\">{{ prop | cameltotitle }}</label>\n                <input type=\"text\" class=\"form-control\" [formControlName]=\"prop\" />\n                <div class=\"alert alert-danger\" [hidden]=\"heroForm.get(prop).valid\">{{ prop }} is required</div>\n            </div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!heroForm.valid\">Submit</button> \n    </form>\n</div>\n\n<div *ngIf=\"submitted\">\n    <h2>You submitted the following:</h2>\n    <div *ngFor=\"let prop of formModelProps\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">{{ prop | cameltotitle }}</div>\n            <div class=\"col-md-10 pull-left\">{{ heroForm.get(prop).value }}</div>\n        </div>\n    </div>\n    <br />\n    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n</div>"

/***/ }),

/***/ "./src/app/reactiveDynamicForm/reactive-dynamic-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/reactiveDynamicForm/reactive-dynamic-form.component.ts ***!
  \************************************************************************/
/*! exports provided: ReactiveDynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveDynamicFormComponent", function() { return ReactiveDynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/hero */ "./src/app/shared/hero.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReactiveDynamicFormComponent = /** @class */ (function () {
    function ReactiveDynamicFormComponent() {
        this.formModelProps = [];
    }
    ReactiveDynamicFormComponent.prototype.ngOnInit = function () {
        this.model = new _shared_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"](18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
        var formModel = {};
        var validators = [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required];
        for (var _i = 0, _a = Object.keys(this.model); _i < _a.length; _i++) {
            var prop = _a[_i];
            if (prop.indexOf('email') !== -1)
                validators.push(_shared_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator);
            formModel[prop] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model[prop], validators);
            this.formModelProps.push(prop);
        }
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](formModel);
    };
    ReactiveDynamicFormComponent.prototype.submit = function () {
        this.submitted = true;
    };
    ReactiveDynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reactive-dynamic',
            template: __webpack_require__(/*! ./reactive-dynamic-form.component.html */ "./src/app/reactiveDynamicForm/reactive-dynamic-form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ReactiveDynamicFormComponent);
    return ReactiveDynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/reactiveForm/reactiveForm.component.html":
/*!**********************************************************!*\
  !*** ./src/app/reactiveForm/reactiveForm.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div *ngIf=\"!submitted\">\n        <h1>Reactive Form</h1>\n        <form [formGroup]=\"heroForm\" (ngSubmit)=\"onSubmit(heroForm)\">\n            <div class=\"form-group\">\n                <label for=\"name\">Name</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"name\" />\n                <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.name.valid\">Name is required</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"alterEgo\">Alter Ego</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"alterEgo\" />\n                <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.alterEgo.valid\">Alter Ego is required</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"email\">Hero Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n                <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.email.valid\">Email is required and must be a valid email pattern</div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"power\">Hero Power</label>\n                <select class=\"form-control\" formControlName=\"power\">\n                  <option *ngFor=\"let p of powers\" [value]=\"p\">{{p}}</option>\n                </select>\n                <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.power.valid\">Power is required</div>\n            </div>\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!heroForm.valid\">Submit</button> \n        </form>  \n    </div>\n                                \n    <div *ngIf=\"submitted\">\n        <h2>You submitted the following:</h2>\n        <div class=\"row\">\n            <div class=\"col-md-2\">Name</div>\n            <div class=\"col-md-10 pull-left\">{{ submittedModel.name }}</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2\">Alter Ego</div>\n            <div class=\"col-md-10 pull-left\">{{ submittedModel.alterEgo }}</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2\">Hero Email</div>\n            <div class=\"col-md-10 pull-left\">{{ submittedModel.email }}</div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-2\">Power</div>\n            <div class=\"col-md-10 pull-left\">{{ submittedModel.power }}</div>\n        </div>\n        <br />\n        <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n    </div>    \n</div>"

/***/ }),

/***/ "./src/app/reactiveForm/reactiveForm.component.ts":
/*!********************************************************!*\
  !*** ./src/app/reactiveForm/reactiveForm.component.ts ***!
  \********************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");
/* harmony import */ var _shared_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hero */ "./src/app/shared/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        this.model = new _shared_hero__WEBPACK_IMPORTED_MODULE_3__["Hero"](18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
        this.powers = ['Really Smart', 'Super Flexible',
            'Hypersound', 'Weather Changer'];
        this.heroForm = this.formBuilder.group({
            name: [this.model.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            alterEgo: [this.model.alterEgo, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [this.model.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"].emailValidator]],
            power: [this.model.power, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    ReactiveFormComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        this.submitted = true;
        this.submittedModel = value;
    };
    ReactiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'reactive-driven-form',
            template: __webpack_require__(/*! ./reactiveForm.component.html */ "./src/app/reactiveForm/reactiveForm.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/shared/camel-to-title.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/camel-to-title.pipe.ts ***!
  \***********************************************/
/*! exports provided: CamelToTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelToTitlePipe", function() { return CamelToTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelToTitlePipe = /** @class */ (function () {
    function CamelToTitlePipe() {
    }
    CamelToTitlePipe.prototype.transform = function (value) {
        var newVal = value.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
        newVal = newVal.charAt(0).toUpperCase() + newVal.slice(1);
        return newVal;
    };
    CamelToTitlePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'cameltotitle'
        })
    ], CamelToTitlePipe);
    return CamelToTitlePipe;
}());



/***/ }),

/***/ "./src/app/shared/hero.ts":
/*!********************************!*\
  !*** ./src/app/shared/hero.ts ***!
  \********************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero(id, name, power, alterEgo, email) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
        this.email = email;
    }
    return Hero;
}());



/***/ }),

/***/ "./src/app/shared/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/starterReactiveForm/starterReactiveForm.component.html":
/*!************************************************************************!*\
  !*** ./src/app/starterReactiveForm/starterReactiveForm.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customer Edit</h1>\n<form [formGroup]=\"customerForm\" (ngSubmit)=\"onSubmit(customerForm)\">\n    First Name:\n    <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" />\n    <br />\n    <span *ngIf=\"customerForm.controls.firstName.invalid\">First Name is required!</span>\n    <br />\n    <button class=\"btn btn-default\" [disabled]=\"customerForm.invalid\">Submit</button>\n    <br />\n    {{ message }}\n    <br />\n    Valid: {{ customerForm.valid}}\n    <br />\n    Pristine: {{ customerForm.pristine }}\n    <br />\n    Touched: {{ customerForm.touched }}\n</form>\n"

/***/ }),

/***/ "./src/app/starterReactiveForm/starterReactiveForm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/starterReactiveForm/starterReactiveForm.component.ts ***!
  \**********************************************************************/
/*! exports provided: StarterReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterReactiveFormComponent", function() { return StarterReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarterReactiveFormComponent = /** @class */ (function () {
    function StarterReactiveFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    StarterReactiveFormComponent.prototype.ngOnInit = function () {
        this.customer = {
            firstName: 'Tina Reactive'
        };
        this.customerForm = this.formBuilder.group({
            firstName: [this.customer.firstName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    StarterReactiveFormComponent.prototype.onSubmit = function (form) {
        this.message = 'You typed: ' + form.controls.firstName.value;
    };
    StarterReactiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'starter-reactive-form',
            template: __webpack_require__(/*! ./starterReactiveForm.component.html */ "./src/app/starterReactiveForm/starterReactiveForm.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], StarterReactiveFormComponent);
    return StarterReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/starterTemplateForm/starterTemplateForm.component.html":
/*!************************************************************************!*\
  !*** ./src/app/starterTemplateForm/starterTemplateForm.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Customer Edit</h1>\n<form #starterForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    First Name: <input type=\"text\" class=\"form-control\"\n                       name=\"firstName\" \n                       #firstName=\"ngModel\"\n                       [(ngModel)]=\"customer.firstName\"\n                       required />\n    <br />\n    <span *ngIf=\"!firstName.valid\">First Name is required!</span>\n    <br />\n    <button class=\"btn btn-default\" [disabled]=\"!starterForm.valid\">Submit</button>\n    <br /><br />\n    {{ message }}\n    <br />\n    Valid: {{ firstName.valid}}\n    <br />\n    Pristine: {{ firstName.pristine }}\n    <br />\n    Touched: {{ firstName.touched }}\n</form>"

/***/ }),

/***/ "./src/app/starterTemplateForm/starterTemplateForm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/starterTemplateForm/starterTemplateForm.component.ts ***!
  \**********************************************************************/
/*! exports provided: StarterTemplateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarterTemplateFormComponent", function() { return StarterTemplateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarterTemplateFormComponent = /** @class */ (function () {
    function StarterTemplateFormComponent() {
    }
    StarterTemplateFormComponent.prototype.ngOnInit = function () {
        this.customer = {
            firstName: 'Fred Template'
        };
    };
    StarterTemplateFormComponent.prototype.onSubmit = function () {
        this.message = 'You typed: ' + this.customer.firstName;
    };
    StarterTemplateFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'starter-template-form',
            template: __webpack_require__(/*! ./starterTemplateForm.component.html */ "./src/app/starterTemplateForm/starterTemplateForm.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], StarterTemplateFormComponent);
    return StarterTemplateFormComponent;
}());



/***/ }),

/***/ "./src/app/templateForm/templateForm.component.html":
/*!**********************************************************!*\
  !*** ./src/app/templateForm/templateForm.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!submitted\">\n    <h1>Template Driven Form</h1>\n    <form (ngSubmit)=\"onSubmit()\" #heroForm=\"ngForm\">\n      <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"model.name\" required>\n        <div class=\"alert alert-danger\" [hidden]=\"name.valid\">Name is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"alterEgo\">Alter Ego</label>\n        <!-- \n          Example of what things look like without [(ngModel)]=\"model.alterEgo\" \n          \n          <input type=\"text\" name=\"alterEgo\" [ngModel]=\"model.alterEgo\" (ngModelChange)=\"model.alterEgo=$event\" required>\n        -->\n        <input type=\"text\" class=\"form-control\" name=\"alterEgo\" #alterEgo=\"ngModel\" [(ngModel)]=\"model.alterEgo\" required>\n        <div class=\"alert alert-danger\" [hidden]=\"alterEgo.valid\">Alter Ego is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"power\">Hero Power</label>\n        <select class=\"form-control\" name=\"power\" #power=\"ngModel\" [(ngModel)]=\"model.power\" required>\n          <option *ngFor=\"let p of powers\" [value]=\"p\">{{ p }}</option>\n        </select>\n        <div class=\"alert alert-danger\" [hidden]=\"power.valid\">Power is required</div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!heroForm.valid\">Submit</button>\n    </form>\n  </div>\n  <div *ngIf=\"submitted\">\n    <h2>You submitted the following:</h2>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Name</div>\n      <div class=\"col-md-10 pull-left\">{{ model.name }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Alter Ego</div>\n      <div class=\"col-md-10 pull-left\">{{ model.alterEgo }}</div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\">Power</div>\n      <div class=\"col-md-10 pull-left\">{{ model.power }}</div>\n    </div>\n    <br />\n    <button class=\"btn btn-default\" (click)=\"submitted=false\">Edit</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/templateForm/templateForm.component.ts":
/*!********************************************************!*\
  !*** ./src/app/templateForm/templateForm.component.ts ***!
  \********************************************************/
/*! exports provided: TemplateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFormComponent", function() { return TemplateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/hero */ "./src/app/shared/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { ShowError } from './showError.component';

var TemplateFormComponent = /** @class */ (function () {
    function TemplateFormComponent() {
        this.submitted = false;
    }
    TemplateFormComponent.prototype.ngOnInit = function () {
        this.model = new _shared_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"](18, 'Tornado', 'Turbulent Breeze', 'Willie Wind');
        this.powers = ['Really Smart', 'Turbulent Breeze',
            'Super Hot', 'Weather Changer'];
    };
    TemplateFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    TemplateFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'template-driven-form',
            template: __webpack_require__(/*! ./templateForm.component.html */ "./src/app/templateForm/templateForm.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());



/***/ }),

/***/ "./src/app/updateOn/updateOn.component.html":
/*!**************************************************!*\
  !*** ./src/app/updateOn/updateOn.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <!-- Template Form -->\n    <div *ngIf=\"!templateSubmitted\">\n      <h1>Using updateOn with Template Forms</h1>\n      <!--Can add this if you want nothing to update until the form is submitted: [ngModelOptions]=\"{updateOn: 'submit'} -->\n      <form (ngSubmit)=\"submit()\" #heroForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name (updateOn applied)</label>\n          <!-- for updateOn you can pass 'blue' or 'submit' -->\n          <input type=\"text\" class=\"form-control\" name=\"name\" #name=\"ngModel\" \n                [(ngModel)]=\"model.name\" \n                [ngModelOptions]=\"{updateOn: 'blur'}\" required> \n          <div class=\"alert alert-danger\" [hidden]=\"name.valid\">Name is required</div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"alterEgo\">Alter Ego</label>\n          <!-- \n            Example of what things look like without [(ngModel)]=\"model.alterEgo\" \n            \n            <input type=\"text\" name=\"alterEgo\" [ngModel]=\"model.alterEgo\" (ngModelChange)=\"model.alterEgo=$event\" required>\n          -->\n          <input type=\"text\" class=\"form-control\" name=\"alterEgo\" #alterEgo=\"ngModel\" \n                [(ngModel)]=\"model.alterEgo\" required> \n          <div class=\"alert alert-danger\" [hidden]=\"alterEgo.valid\">Alter Ego is required</div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"power\">Hero Power</label>\n          <select class=\"form-control\" name=\"power\" \n                  #power=\"ngModel\" [(ngModel)]=\"model.power\" required>\n            <option *ngFor=\"let p of powers\" [value]=\"p\">{{ p }}</option>\n          </select>\n          <div class=\"alert alert-danger\" [hidden]=\"power.valid\">Power is required</div>\n        </div>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!heroForm.valid\">Submit</button>\n        <br /><br />\n        <pre>\n          {{ heroForm.value | json }}\n        </pre>\n      </form>\n    </div>\n    <div *ngIf=\"templateSubmitted\">\n      <h2>You submitted the following:</h2>\n      <div class=\"row\">\n        <div class=\"col-md-2\">Name</div>\n        <div class=\"col-md-10 pull-left\">{{ model.name }}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2\">Alter Ego</div>\n        <div class=\"col-md-10 pull-left\">{{ model.alterEgo }}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-2\">Power</div>\n        <div class=\"col-md-10 pull-left\">{{ model.power }}</div>\n      </div>\n      <br />\n      <button class=\"btn btn-default\" (click)=\"templateSubmitted=false\">Edit</button>\n    </div>\n    <br />\n\n    <!-- Reactive Form -->\n    <div *ngIf=\"!reactiveSubmitted\">\n      <h1>Using updateOn with Reactive Forms</h1>\n      <form [formGroup]=\"heroForm\" (ngSubmit)=\"reactiveSubmit()\">\n          <div class=\"form-group\">\n              <label for=\"name\">Name (updateOn applied)</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\" /> \n              <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.name.valid\">Name is required</div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"alterEgo\">Alter Ego</label>\n              <input type=\"text\" class=\"form-control\" formControlName=\"alterEgo\" /> \n              <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.alterEgo.valid\">Alter Ego is required</div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"email\">Hero Email</label>\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" /> {{ heroForm.controls.email.value }}\n              <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.email.valid\">Email is required and must be a valid email pattern</div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"power\">Hero Power</label>\n              <select class=\"form-control\" formControlName=\"power\">\n                <option *ngFor=\"let p of powers\" [value]=\"p\">{{p}}</option>\n              </select>\n              <div class=\"alert alert-danger\" [hidden]=\"heroForm.controls.power.valid\">Power is required</div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!heroForm.valid\">Submit</button> \n          <br /><br />\n          <pre>\n            {{ heroForm.value | json }}\n          </pre>\n      </form>  \n  </div>\n                              \n  <div *ngIf=\"reactiveSubmitted\">\n      <h2>You submitted the following:</h2>\n      <div class=\"row\">\n          <div class=\"col-md-2\">Name</div>\n          <div class=\"col-md-10 pull-left\">{{ submittedModel.name }}</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-2\">Alter Ego</div>\n          <div class=\"col-md-10 pull-left\">{{ submittedModel.alterEgo }}</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-2\">Hero Email</div>\n          <div class=\"col-md-10 pull-left\">{{ submittedModel.email }}</div>\n      </div>\n      <div class=\"row\">\n          <div class=\"col-md-2\">Power</div>\n          <div class=\"col-md-10 pull-left\">{{ submittedModel.power }}</div>\n      </div>\n      <br />\n      <button class=\"btn btn-default\" (click)=\"reactiveSubmitted=false\">Edit</button>\n  </div>  \n  </div>"

/***/ }),

/***/ "./src/app/updateOn/updateOn.component.ts":
/*!************************************************!*\
  !*** ./src/app/updateOn/updateOn.component.ts ***!
  \************************************************/
/*! exports provided: UpdateOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOnComponent", function() { return UpdateOnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/hero */ "./src/app/shared/hero.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/validation.service */ "./src/app/shared/validation.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateOnComponent = /** @class */ (function () {
    function UpdateOnComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.templateSubmitted = false;
        this.reactiveSubmitted = false;
    }
    UpdateOnComponent.prototype.ngOnInit = function () {
        this.model = new _shared_hero__WEBPACK_IMPORTED_MODULE_1__["Hero"](18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', 'iq@superhero.com');
        this.powers = ['Really Smart', 'Turbulent Breeze',
            'Super Hot', 'Weather Changer'];
        //This currently doesn't work when using FormBuilder to create a FormGroup that has updateOn
        //https://github.com/angular/angular/issues/19163
        // this.heroForm = this.formBuilder.group({
        //     //Can individually add updateOn to FormControls
        //     //name:     [this.model.name, { validators: Validators.required, updateOn: 'blur' }],
        //     name:     [this.model.name, Validators.required ],
        //     alterEgo: [this.model.alterEgo, Validators.required],
        //     email:    [this.model.email, [Validators.required, ValidationService.emailValidator]],
        //     power:    [this.model.power, Validators.required]
        // }, { updateOn: 'blur' });
        this.heroForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            //Can individually add updateOn to FormControls
            //name:   new FormControl(this.model.name, { validators: Validators.required, updateOn: 'blur' }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            alterEgo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.alterEgo, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.email, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _shared_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].emailValidator] }),
            power: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.model.power, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        }, { updateOn: 'blur' });
    };
    UpdateOnComponent.prototype.updateOnForAll = function () {
        //this.heroForm.setValue({ updateOn: 'blue'});
    };
    UpdateOnComponent.prototype.submit = function () {
        this.templateSubmitted = true;
    };
    UpdateOnComponent.prototype.reactiveSubmit = function () {
        this.reactiveSubmitted = true;
        this.submittedModel = this.heroForm.value;
    };
    UpdateOnComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'update-on-form',
            template: __webpack_require__(/*! ./updateOn.component.html */ "./src/app/updateOn/updateOn.component.html")
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], UpdateOnComponent);
    return UpdateOnComponent;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kevinrintoul/Downloads/Angular-Forms-master/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map