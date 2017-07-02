(function() {
    'use strict';

    expApp.controller("loginCtrl", ['$location', 'appConfiguration', loginCtrl]);

    function loginCtrl($location, appConfiguration) {
        var vm = this;
        vm.signInForm = {};
        vm.errorMsg = false;

        // Method declarations
        vm.login = login;
        vm.resetForm = resetForm;

        // Method implementations
        function login(form) {
            vm.errorMsg = false;
            if (!form.$invalid) {
                if(vm.signInForm['userName'] == 'demo' && vm.signInForm['passwordStr'] == 'demo' ){
                    $location.url(appConfiguration.dashboard);
                }else{
                    vm.errorMsg = true;
                }                
            }
        };
        // reseting the form Data
        function resetForm(form) {
            if (form) {
                form.$setPristine();
                form.$setValidity();
            }
            vm.signInForm = {};
        };

    }


})();
