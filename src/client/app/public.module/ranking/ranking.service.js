(function() {
    'use strict';

    angular
        .module('app.public')
        .service('RankingService', RankingService);

    /* @ngInject */
    function RankingService($http, CONFIG) {
        return {
            getStats : getStats
        }

        function getStats() {
            return $http.get(CONFIG.apiBaseUrl + '/status');
        }
    }
})();
