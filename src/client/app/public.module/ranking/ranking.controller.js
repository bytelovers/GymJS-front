(function () {
    'use strict';

    angular
        .module('app.public')
        .controller('RankingController', RankingController);

    /* @ngInject */
    function RankingController(logger,
                                RankingService,
                                RankingSerializerService) {
        var vm   = this;
        vm.title = 'Ranking';

        activate();

        function activate() {
            loadStats();
            //logger.info('Activated Public View');
        }

        ////
        
        function loadStats() {
            RankingService
                .getStats()
                .then(onStatsLoaded, onStatsFailed);

                ////
                
                function onStatsLoaded(results) {
                    vm.rankings = RankingSerializerService.rankingData(results.data);
                }

                function onStatsFailed(err) {
                    logger(err);
                }
        }
    }
})();
