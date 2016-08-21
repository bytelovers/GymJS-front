(function () {
    'use strict';

    angular
        .module('app.public')
        .controller('RankingDetailController', RankingDetailController);

    /* @ngInject */
    function RankingDetailController(logger,
                                     rankingData) {
        var vm   = this;
        vm.title = 'Ranking';

        activate();

        function activate() {
            vm.rankingData = rankingData;
        }
    }
})();
