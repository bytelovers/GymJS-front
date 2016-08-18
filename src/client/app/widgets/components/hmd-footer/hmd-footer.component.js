(function() {
  'use strict';

  angular
    .module('app.widgets.components')
    .component('hmdFooter', {
      restrict: 'E',
      templateUrl: 'src/client/app/widgets/components/hmd-footer/hmd-footer.html',
      controller: Controller,
      controllerAs: 'vm'/*,
        bindings: {
            beneficiary: '=',
            showName: '<?',
            layout: '@?',
            hover: '=?',
            size: '@?',
            nameProperty: '@?',
            active: '=?'
        }*/
    });

  /* @ngInject */
  function Controller() {
  }
})();
