"use strict";function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}angular.module("meancApp",["meancApp.auth","meancApp.admin","meancApp.constants","ngCookies","ngResource","ngSanitize","btford.socket-io","ui.router","ui.bootstrap","validation.match","ionic"]).run(["$ionicPlatform",function(n){n.ready(function(){window.cordova&&window.cordova.plugins&&window.cordova.plugins.Keyboard&&(cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),cordova.plugins.Keyboard.disableScroll(!0)),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$urlRouterProvider","$locationProvider",function(n,e){n.otherwise("/")}]),angular.module("meancApp.admin",["meancApp.auth","ui.router"]),angular.module("meancApp.auth",["meancApp.constants","meancApp.util","ngCookies","ui.router"]).config(["$httpProvider",function(n){n.interceptors.push("authInterceptor")}]),angular.module("meancApp.util",[]),angular.module("meancApp").config(["$stateProvider",function(n){n.state("login",{url:"/login",templateUrl:"app/account/login/login.html",controller:"LoginController",controllerAs:"vm"}).state("logout",{url:"/logout?referrer",referrer:"main",template:"",controller:["$state","Auth",function(n,e){var t=n.params.referrer||n.current.referrer||"main";e.logout(),n.go(t)}]}).state("signup",{url:"/signup",templateUrl:"app/account/signup/signup.html",controller:"SignupController",controllerAs:"vm"}).state("settings",{url:"/settings",templateUrl:"app/account/settings/settings.html",controller:"SettingsController",controllerAs:"vm",authenticate:!0})}]).run(["$rootScope",function(n){n.$on("$stateChangeStart",function(n,e,t,o){"logout"===e.name&&o&&o.name&&!o.authenticate&&(e.referrer=o.name)})}]);var _createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),LoginController=function(){function n(e,t){_classCallCheck(this,n),this.user={},this.errors={},this.submitted=!1,this.Auth=e,this.$state=t}return n.$inject=["Auth","$state"],_createClass(n,[{key:"login",value:function(n){var e=this;this.submitted=!0,n.$valid&&this.Auth.login({email:this.user.email,password:this.user.password}).then(function(){e.$state.go("main")})["catch"](function(n){e.errors.other=n.message})}}]),n}();angular.module("meancApp").controller("LoginController",LoginController);var _createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),SettingsController=function(){function n(e){_classCallCheck(this,n),this.Auth=e}return n.$inject=["Auth"],_createClass(n,[{key:"changePassword",value:function(n){var e=this;this.submitted=!0,n.$valid&&this.Auth.changePassword(this.user.oldPassword,this.user.newPassword).then(function(){e.message="Password successfully changed."})["catch"](function(){n.password.$setValidity("mongoose",!1),e.errors.other="Incorrect password",e.message=""})}}]),n}();angular.module("meancApp").controller("SettingsController",SettingsController);var _createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}(),SignupController=function(){function n(e,t){_classCallCheck(this,n),this.Auth=e,this.$state=t}return n.$inject=["Auth","$state"],_createClass(n,[{key:"register",value:function(n){var e=this;this.submitted=!0,n.$valid&&this.Auth.createUser({name:this.user.name,email:this.user.email,password:this.user.password}).then(function(){e.$state.go("main")})["catch"](function(t){t=t.data,e.errors={},angular.forEach(t.errors,function(t,o){n[o].$setValidity("mongoose",!1),e.errors[o]=t.message})})}}]),n}();angular.module("meancApp").controller("SignupController",SignupController);var _createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();!function(){var n=function(){function n(e){_classCallCheck(this,n),this.users=e.query()}return n.$inject=["User"],_createClass(n,[{key:"delete",value:function(n){n.$remove(),this.users.splice(this.users.indexOf(n),1)}}]),n}();angular.module("meancApp.admin").controller("AdminController",n)}(),angular.module("meancApp.admin").config(["$stateProvider",function(n){n.state("admin",{url:"/admin",templateUrl:"app/admin/admin.html",controller:"AdminController",controllerAs:"admin",authenticate:"admin"})}]),function(n,e){n.module("meancApp.constants",[]).constant("appConfig",{userRoles:["guest","user","admin"],apiRoot:"http://local.host:9000",socketRoot:"http://local.host:9000"})}(angular);var _createClass=function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();!function(){var n=function(){function n(e,t,o){_classCallCheck(this,n),this.$http=e,this.socket=o,this.awesomeThings=[],t.$on("$destroy",function(){o.unsyncUpdates("thing")})}return n.$inject=["$http","$scope","socket"],_createClass(n,[{key:"$onInit",value:function(){var n=this;this.$http.get("/api/things").then(function(e){n.awesomeThings=e.data,n.socket.syncUpdates("thing",n.awesomeThings)})}},{key:"addThing",value:function(){this.newThing&&(this.$http.post("/api/things",{name:this.newThing}),this.newThing="")}},{key:"deleteThing",value:function(n){this.$http["delete"]("/api/things/"+n._id)}}]),n}();angular.module("meancApp").component("main",{templateUrl:"app/main/main.html",controller:n})}(),angular.module("meancApp").config(["$stateProvider",function(n){n.state("main",{url:"/",template:"<main></main>"})}]),function(){function n(n,e,t,o,a,r,s){var i=r.safeCb,l={},c=a.userRoles||[];localStorage.getItem("token")&&"/logout"!==n.path()&&(l=s.get());var u={login:function(n,t){var r=n.email,c=n.password;return e.post(a.apiRoot+"/auth/local",{email:r,password:c}).then(function(n){return localStorage.setItem("token",n.data.token),l=s.get(),l.$promise}).then(function(n){return i(t)(null,n),n})["catch"](function(n){return u.logout(),i(t)(n.data),o.reject(n.data)})},logout:function(){localStorage.removeItem("token"),l={}},createUser:function(n,e){return s.save(n,function(t){return localStorage.setItem("token",t.token),l=s.get(),i(e)(null,n)},function(n){return u.logout(),i(e)(n)}).$promise},changePassword:function(n,e,t){return s.changePassword({id:l._id},{oldPassword:n,newPassword:e},function(){return i(t)(null)},function(n){return i(t)(n)}).$promise},getCurrentUser:function(n){if(0===arguments.length)return l;var e=l.hasOwnProperty("$promise")?l.$promise:l;return o.when(e).then(function(e){return i(n)(e),e},function(){return i(n)({}),{}})},isLoggedIn:function(n){return 0===arguments.length?l.hasOwnProperty("role"):u.getCurrentUser(null).then(function(e){var t=e.hasOwnProperty("role");return i(n)(t),t})},hasRole:function m(n,e){var m=function(n,e){return c.indexOf(n)>=c.indexOf(e)};return arguments.length<2?m(l.role,n):u.getCurrentUser(null).then(function(t){var o=!!t.hasOwnProperty("role")&&m(t.role,n);return i(e)(o),o})},isAdmin:function(){return u.hasRole.apply(u,[].concat.apply(["admin"],arguments))},getToken:function(){return localStorage.getItem("token")}};return u}n.$inject=["$location","$http","$cookies","$q","appConfig","Util","User"],angular.module("meancApp.auth").factory("Auth",n)}(),function(){function n(n,e,t,o,a){var r;return{request:function(n){return n.headers=n.headers||{},localStorage.getItem("token")&&(n.headers.Authorization="Bearer "+localStorage.getItem("token")),n},responseError:function(n){return 401===n.status&&((r||(r=o.get("$state"))).go("login"),localStorage.removeItem("token")),e.reject(n)}}}n.$inject=["$rootScope","$q","$cookies","$injector","Util"],angular.module("meancApp.auth").factory("authInterceptor",n)}(),function(){angular.module("meancApp.auth").run(["$rootScope","$state","Auth",function(n,e,t){n.$on("$stateChangeStart",function(n,o){o.authenticate&&("string"==typeof o.authenticate?t.hasRole(o.authenticate,_.noop).then(function(o){if(!o)return n.preventDefault(),t.isLoggedIn(_.noop).then(function(n){e.go(n?"main":"login")})}):t.isLoggedIn(_.noop).then(function(t){t||(n.preventDefault(),e.go("main"))}))})}])}(),function(){function n(n,e){return n(e.apiRoot+"/api/users/:id/:controller",{id:"@_id"},{changePassword:{method:"PUT",params:{controller:"password"}},get:{method:"GET",params:{id:"me"}}})}n.$inject=["$resource","appConfig"],angular.module("meancApp.auth").factory("User",n)}(),angular.module("meancApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"E",link:function(n,e){e.addClass("footer")}}}),angular.module("meancApp").factory("Modal",["$rootScope","$uibModal",function(n,e){function t(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],o=arguments.length<=1||void 0===arguments[1]?"modal-default":arguments[1],a=n.$new();return angular.extend(a,t),e.open({templateUrl:"components/modal/modal.html",windowClass:o,scope:a})}return{confirm:{"delete":function(){var n=arguments.length<=0||void 0===arguments[0]?angular.noop:arguments[0];return function(){var e,o=Array.prototype.slice.call(arguments),a=o.shift();e=t({modal:{dismissable:!0,title:"Confirm Delete",html:"<p>Are you sure you want to delete <strong>"+a+"</strong> ?</p>",buttons:[{classes:"btn-danger",text:"Delete",click:function(n){e.close(n)}},{classes:"btn-default",text:"Cancel",click:function(n){e.dismiss(n)}}]}},"modal-danger"),e.result.then(function(e){n.apply(e,o)})}}}}}]),angular.module("meancApp").directive("mongooseError",function(){return{restrict:"A",require:"ngModel",link:function(n,e,t,o){e.on("keydown",function(){return o.$setValidity("mongoose",!0)})}}});var NavbarController=function n(e){_classCallCheck(this,n),this.isLoggedIn=e.isLoggedIn,this.isAdmin=e.isAdmin,this.getCurrentUser=e.getCurrentUser};NavbarController.$inject=["Auth"],angular.module("meancApp").controller("NavbarController",NavbarController),angular.module("meancApp").directive("navbar",function(){return{templateUrl:"components/navbar/navbar.html",restrict:"E",controller:"NavbarController",controllerAs:"nav"}}),angular.module("meancApp").controller("OauthButtonsCtrl",["$timeout","$window","appConfig",function(n,e,t){this.loginOauth=function(o){var a=e.open(t.apiRoot+"/auth/"+o);"function"!=typeof String.prototype.startsWith&&(String.prototype.startsWith=function(n){return 0==this.indexOf(n)});var r=500,s=n(function i(){var o=a.location.href;if(o&&o.startsWith(t.apiRoot+"/auth/token/")){var l=o.split("/auth/token/")[1];a.close(),localStorage.setItem("token",l),e.location.reload()}s=n(i,r)},r)}}]),angular.module("meancApp").directive("oauthButtons",function(){return{templateUrl:"components/oauth-buttons/oauth-buttons.html",restrict:"EA",controller:"OauthButtonsCtrl",controllerAs:"OauthButtons",scope:{classes:"@"}}}),angular.module("meancApp").factory("socket",["socketFactory","appConfig",function(n,e){var t=io(e.socketRoot,{path:"/socket.io-client"}),o=n({ioSocket:t});return{socket:o,syncUpdates:function(n,e,t){t=t||angular.noop,o.on(n+":save",function(n){var o=_.find(e,{_id:n._id}),a=e.indexOf(o),r="created";o?(e.splice(a,1,n),r="updated"):e.push(n),t(r,n,e)}),o.on(n+":remove",function(n){var o="deleted";_.remove(e,{_id:n._id}),t(o,n,e)})},unsyncUpdates:function(n){o.removeAllListeners(n+":save"),o.removeAllListeners(n+":remove")}}}]),function(){function n(n){var e={safeCb:function(n){return angular.isFunction(n)?n:angular.noop},urlParse:function(n){var e=document.createElement("a");return e.href=n,""===e.host&&(e.href=e.href),e},isSameOrigin:function(t,o){return t=e.urlParse(t),o=o&&[].concat(o)||[],o=o.map(e.urlParse),o.push(n.location),o=o.filter(function(n){var e=t.hostname===n.hostname,o=t.protocol===n.protocol,a=t.port===n.port||""===n.port&&("80"===t.port||"443"===t.port);return e&&o&&a}),o.length>=1}};return e}n.$inject=["$window"],angular.module("meancApp.util").factory("Util",n)}(),angular.module("meancApp").run(["$templateCache",function(n){n.put("app/admin/admin.html",'<div class="container">\n  <p>The delete user and user index api routes are restricted to users with the \'admin\' role.</p>\n  <ul class="list-group user-list">\n    <li class="list-group-item" ng-repeat="user in admin.users">\n\t    <div class="user-info">\n\t        <strong>{{user.name}}</strong><br>\n\t        <span class="text-muted">{{user.email}}</span>\n\t    </div>\n        <a ng-click="admin.delete(user)" class="trash"><span class="fa fa-trash fa-2x"></span></a>\n    </li>\n  </ul>\n</div>\n'),n.put("app/main/main.html",'<header class="hero-unit" id="banner">\n  <div class="container">\n    <h1>\'Allo, \'Allo!</h1>\n    <p class="lead">Kick-start your next web app with Angular Fullstack</p>\n    <img src="assets/images/yeoman-462ccecbb1.png" alt="I\'m Yeoman">\n  </div>\n</header>\n\n<div class="container">\n  <div class="row">\n    <div class="col-lg-12">\n      <h1 class="page-header">Features:</h1>\n      <ul class="nav nav-tabs nav-stacked col-md-4 col-lg-4 col-sm-6" ng-repeat="thing in $ctrl.awesomeThings">\n        <li><a href="#" uib-tooltip="{{thing.info}}">{{thing.name}}<button type="button" class="close" ng-click="$ctrl.deleteThing(thing)">&times;</button></a></li>\n      </ul>\n    </div>\n  </div>\n\n  <form class="thing-form">\n    <label>Syncs in realtime across clients</label>\n    <p class="input-group">\n      <input type="text" class="form-control" placeholder="Add a new thing here." ng-model="$ctrl.newThing">\n      <span class="input-group-btn">\n        <button type="submit" class="btn btn-primary" ng-click="$ctrl.addThing()">Add New</button>\n      </span>\n    </p>\n  </form>\n</div>\n'),n.put("components/footer/footer.html",'<div class="container">\n  <p>Angular Fullstack v3.7.6 |\n    <a href="https://twitter.com/tyhenkel">@tyhenkel</a> |\n    <a href="https://github.com/DaftMonk/generator-angular-fullstack/issues?state=open">Issues</a>\n  </p>\n</div>\n'),n.put("components/modal/modal.html",'<div class="modal-header">\n  <button ng-if="modal.dismissable" type="button" ng-click="$dismiss()" class="close">&times;</button>\n  <h4 ng-if="modal.title" ng-bind="modal.title" class="modal-title"></h4>\n</div>\n<div class="modal-body">\n  <p ng-if="modal.text" ng-bind="modal.text"></p>\n  <div ng-if="modal.html" ng-bind-html="modal.html"></div>\n</div>\n<div class="modal-footer">\n  <button ng-repeat="button in modal.buttons" ng-class="button.classes" ng-click="button.click($event)" ng-bind="button.text" class="btn"></button>\n</div>\n'),n.put("components/navbar/navbar.html",'<div class="navbar navbar-default navbar-static-top" ng-controller="NavbarController">\n  <div class="container">\n    <div class="navbar-header">\n      <button class="navbar-toggle" type="button" ng-click="nav.isCollapsed = !nav.isCollapsed">\n        <span class="sr-only">Toggle navigation</span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n        <span class="icon-bar"></span>\n      </button>\n      <a href="/" class="navbar-brand">meanc</a>\n    </div>\n    <div uib-collapse="nav.isCollapsed" class="navbar-collapse collapse" id="navbar-main">\n      <ul class="nav navbar-nav">\n        <li ng-repeat="item in nav.menu" ui-sref-active="active">\n            <a ui-sref="{{item.state}}">{{item.title}}</a>\n        </li>\n        <li ng-show="nav.isAdmin()" ui-sref-active="active"><a ui-sref="admin">Admin</a></li>\n      </ul>\n\n      <ul class="nav navbar-nav navbar-right">\n        <li ng-hide="nav.isLoggedIn()" ui-sref-active="active"><a ui-sref="signup">Sign up</a></li>\n        <li ng-hide="nav.isLoggedIn()" ui-sref-active="active"><a ui-sref="login">Login</a></li>\n        <li ng-show="nav.isLoggedIn()"><p class="navbar-text">Hello {{ nav.getCurrentUser().name }}</p> </li>\n        <li ng-show="nav.isLoggedIn()" ui-sref-active="active"><a ui-sref="settings"><span class="glyphicon glyphicon-cog"></span></a></li>\n        <li ng-show="nav.isLoggedIn()"><a ui-sref="logout">Logout</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n'),n.put("components/oauth-buttons/oauth-buttons.html",'<a ng-class="classes" ng-click="OauthButtons.loginOauth(\'facebook\')" class="btn btn-social btn-facebook">\n  <i class="fa fa-facebook"></i>\n  Connect with Facebook\n</a>\n<a ng-class="classes" ng-click="OauthButtons.loginOauth(\'google\')" class="btn btn-social btn-google">\n  <i class="fa fa-google-plus"></i>\n  Connect with Google+\n</a>\n<a ng-class="classes" ng-click="OauthButtons.loginOauth(\'twitter\')" class="btn btn-social btn-twitter">\n  <i class="fa fa-twitter"></i>\n  Connect with Twitter\n</a>\n<a ng-class="classes" ng-click="OauthButtons.loginOauth(\'qq\')" class="btn btn-social btn-twitter">\n  <i class="fa fa-qq"></i>\n  Connect with QQ\n</a>\n'),n.put("app/account/login/login.html",'<div class="container">\n  <div class="row">\n    <div class="col-sm-12">\n      <h1>Login</h1>\n      <p>Accounts are reset on server restart from <code>server/config/seed.js</code>. Default account is <code>test@example.com</code> / <code>test</code></p>\n      <p>Admin account is <code>admin@example.com</code> / <code>admin</code></p>\n    </div>\n    <div class="col-sm-12">\n      <form class="form" name="form" ng-submit="vm.login(form)" novalidate>\n\n        <div class="form-group">\n          <label>Email</label>\n\n          <input type="email" name="email" class="form-control" ng-model="vm.user.email" required>\n        </div>\n\n        <div class="form-group">\n          <label>Password</label>\n\n          <input type="password" name="password" class="form-control" ng-model="vm.user.password" required>\n        </div>\n\n        <div class="form-group has-error">\n          <p class="help-block" ng-show="form.email.$error.required && form.password.$error.required && vm.submitted">\n             Please enter your email and password.\n          </p>\n          <p class="help-block" ng-show="form.email.$error.email && vm.submitted">\n             Please enter a valid email.\n          </p>\n\n          <p class="help-block">{{ vm.errors.other }}</p>\n        </div>\n\n        <div>\n          <button class="btn btn-inverse btn-lg btn-login" type="submit">\n            Login\n          </button>\n          <a class="btn btn-default btn-lg btn-register" ui-sref="signup">\n            Register\n          </a>\n        </div>\n\n        <hr/>\n        <div class="row">\n          <div class="col-sm-4 col-md-3">\n            <oauth-buttons classes="btn-block"></oauth-buttons>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <hr>\n</div>\n'),n.put("app/account/settings/settings.html",'<div class="container">\n  <div class="row">\n    <div class="col-sm-12">\n      <h1>Change Password</h1>\n    </div>\n    <div class="col-sm-12">\n      <form class="form" name="form" ng-submit="vm.changePassword(form)" novalidate>\n\n        <div class="form-group">\n          <label>Current Password</label>\n\n          <input type="password" name="password" class="form-control" ng-model="vm.user.oldPassword"\n                 mongoose-error/>\n          <p class="help-block" ng-show="form.password.$error.mongoose">\n              {{ vm.errors.other }}\n          </p>\n        </div>\n\n        <div class="form-group">\n          <label>New Password</label>\n\n          <input type="password" name="newPassword" class="form-control" ng-model="vm.user.newPassword"\n                 ng-minlength="3"\n                 required/>\n          <p class="help-block"\n             ng-show="(form.newPassword.$error.minlength || form.newPassword.$error.required) && (form.newPassword.$dirty || vm.submitted)">\n            Password must be at least 3 characters.\n          </p>\n        </div>\n\n        <div class="form-group">\n          <label>Confirm New Password</label>\n\n          <input type="password" name="confirmPassword" class="form-control" ng-model="vm.user.confirmPassword"\n                 match="vm.user.newPassword"\n                 ng-minlength="3"\n                 required=""/>\n          <p class="help-block"\n             ng-show="form.confirmPassword.$error.match && vm.submitted">\n            Passwords must match.\n          </p>\n\n        </div>\n\n        <p class="help-block"> {{ vm.message }} </p>\n\n        <button class="btn btn-lg btn-primary" type="submit">Save changes</button>\n      </form>\n    </div>\n  </div>\n</div>\n'),n.put("app/account/signup/signup.html",'<div class="container">\n  <div class="row">\n    <div class="col-sm-12">\n      <h1>Sign up</h1>\n    </div>\n    <div class="col-sm-12">\n      <form class="form" name="form" ng-submit="vm.register(form)" novalidate>\n\n        <div class="form-group" ng-class="{ \'has-success\': form.name.$valid && vm.submitted,\n                                            \'has-error\': form.name.$invalid && vm.submitted }">\n          <label>Name</label>\n\n          <input type="text" name="name" class="form-control" ng-model="vm.user.name"\n                 required/>\n          <p class="help-block" ng-show="form.name.$error.required && vm.submitted">\n            A name is required\n          </p>\n        </div>\n\n        <div class="form-group" ng-class="{ \'has-success\': form.email.$valid && vm.submitted,\n                                            \'has-error\': form.email.$invalid && vm.submitted }">\n          <label>Email</label>\n\n          <input type="email" name="email" class="form-control" ng-model="vm.user.email"\n                 required\n                 mongoose-error/>\n          <p class="help-block" ng-show="form.email.$error.email && vm.submitted">\n            Doesn\'t look like a valid email.\n          </p>\n          <p class="help-block" ng-show="form.email.$error.required && vm.submitted">\n            What\'s your email address?\n          </p>\n          <p class="help-block" ng-show="form.email.$error.mongoose">\n            {{ vm.errors.email }}\n          </p>\n        </div>\n\n        <div class="form-group" ng-class="{ \'has-success\': form.password.$valid && vm.submitted,\n                                            \'has-error\': form.password.$invalid && vm.submitted }">\n          <label>Password</label>\n\n          <input type="password" name="password" class="form-control" ng-model="vm.user.password"\n                 ng-minlength="3"\n                 required\n                 mongoose-error/>\n          <p class="help-block"\n             ng-show="(form.password.$error.minlength || form.password.$error.required) && vm.submitted">\n            Password must be at least 3 characters.\n          </p>\n          <p class="help-block" ng-show="form.password.$error.mongoose">\n            {{ vm.errors.password }}\n          </p>\n        </div>\n\n        <div class="form-group" ng-class="{ \'has-success\': form.confirmPassword.$valid && vm.submitted,\n                                            \'has-error\': form.confirmPassword.$invalid && vm.submitted }">\n          <label>Confirm Password</label>\n          <input type="password" name="confirmPassword" class="form-control" ng-model="vm.user.confirmPassword"\n                 match="vm.user.password"\n                 ng-minlength="3" required/>\n          <p class="help-block"\n             ng-show="form.confirmPassword.$error.match && vm.submitted">\n            Passwords must match.\n          </p>\n        </div>\n\n        <div>\n          <button class="btn btn-inverse btn-lg btn-register" type="submit">\n            Sign up\n          </button>\n          <a class="btn btn-default btn-lg btn-login" ui-sref="login">\n            Login\n          </a>\n        </div>\n\n        <hr/>\n        <div class="row">\n          <div class="col-sm-4 col-md-3">\n            <oauth-buttons classes="btn-block"></oauth-buttons>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <hr>\n</div>\n')}]);