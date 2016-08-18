(function () {
    'use strict';

    angular
        .module('app.public')
        .controller('RankingController', RankingController);

    RankingController.$inject = ['logger', 'RankingService'];

    /* @ngInject */
    function RankingController(logger, RankingService) {
        var vm = this;
        vm.title = 'Ranking';

        activate();

        function activate() {
            RankingService
                .getStats()
                .then(function(data){
                    vm.test = data;
                },
                function(error){
                    console.log(error);
                });
            //logger.info('Activated Public View');
        }
    }
})();
