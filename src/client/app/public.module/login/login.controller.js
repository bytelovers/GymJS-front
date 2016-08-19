(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('LoginController', LoginController);

  /* @ngInject */
  function LoginController(logger,
                            AuthService) {
    var vm        = this;
    vm.title      = 'Admin';
    vm.errorLogin = false;

    // API
    vm.login = login;

    activate();

    function activate() {
      //logger.info('Activated Public View');
    }

    ////
    
    function login() {
        AuthService
            .login(vm.userName, vm.userPass)
            .then(onLoginSuccess, onLoginFailed);

        ////
        
        function onLoginSuccess(result) {
            console.log(result);
        }

        function onLoginFailed(err) {
            vm.errorLogin = true;
            console.log(err);
        }
    }
  }
})();
