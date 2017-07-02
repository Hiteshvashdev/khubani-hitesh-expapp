   var expApp = angular.module('expapp', ['ngRoute', 'ngMessages']);
   (function() {
       'use strict';

       expApp.config(['$routeProvider', 'appConfiguration', appConfigFn]);

       function appConfigFn($routeProvider, appConfiguration) {
           $routeProvider.
           when(appConfiguration.dashboard, {
               templateUrl: appConfiguration.templatePath + 'ExpenseManagement.html',
               controller: 'expenseCtrl',
               controllerAs: 'main'
           }).
           when(appConfiguration.login, {
               templateUrl: appConfiguration.templatePath + 'login.html',
               controller: 'loginCtrl',
               controllerAs: 'main'
           }).
           otherwise({
               redirectTo: appConfiguration.login
           });
       }

   })();
