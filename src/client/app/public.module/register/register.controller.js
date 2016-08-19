(function() {
  'use strict';

  angular
    .module('app.public')
    .controller('RegisterController', RegisterController);

  /* @ngInject */
  function RegisterController(logger,
                              AuthService) {
    var vm    = this;
    vm.title  = 'Admin';
    vm.user   = {}
    vm.status = '';

    ////
    vm.register = register;

    activate();

    function activate() {
      //logger.info('Activated Public View');
    }

    function register(form) {
      if (form.$valid) {
        var _user = buildUserDaata(vm.user);

        AuthService
          .register(_user)
          .then(onRegisterSuccess, onRegisterFails);
      }

      ////
      
      function onRegisterSuccess(result) {
        vm.status = 'sucess';
      }

      function onRegisterFails(err) {
        vm.status = 'fail';
      }
    }

    //// PRIVATE
    function buildUserDaata(data) {
      var _tmpData = {};

      _tmpData.avatar  = 'http://avatars.com/1';
      _tmpData.email   = data.email;
      _tmpData.login   = data.alias;
      _tmpData.name    = data.name;
      _tmpData.pwd     = data.pass;
      _tmpData.twitter = data.twitter;

      return _tmpData;
   }    
  }
})();
