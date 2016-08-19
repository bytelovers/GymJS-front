(function() {
    'use strict';

    angular
        .module('app.public')
        .service('RankingSerializerService', RankingSerializerService);

    /* @ngInject */
    function RankingSerializerService($http, CONFIG) {

        var _sections = {
            'benchmark': {
                title: 'Métrica de rendimiento',
                description: 'Cada semana sumamos los puntos totales que hayas acumulado en cada reto para computar tu posición general en el juego. Esta es la distribución.'
            },
            'maintainability': {
                title: 'Métrica de mantenibilidad',
                description: 'Cada semana sumamos los puntos totales que hayas acumulado en cada reto para computar tu posición general en el juego. Esta es la distribución.'
            },
            'logicalSLOC': {
                title: 'Métrica de compactación',
                description: 'Cada semana sumamos los puntos totales que hayas acumulado en cada reto para computar tu posición general en el juego. Esta es la distribución.'
            },
            'cyclomatic': {
                title: 'Métrica de complejidad ciclomática',
                description: 'Cada semana sumamos los puntos totales que hayas acumulado en cada reto para computar tu posición general en el juego. Esta es la distribución.'
            },
            'weighted': {
                title: 'Posición general',
                description: 'Cada semana sumamos los puntos totales que hayas acumulado en cada reto para computar tu posición general en el juego. Esta es la distribución.'
            }
        };

        return {
            rankingData : rankingData
        }

        function rankingData(data) {
            var _tmpData = {};
            
            for (var elem in data.outcome) {
                // Getting a name for charts
                var _name = elem.split('.').pop();
                var _item = data.outcome[elem];

                var _axisX = _item.graphA.map(function(item) { return item.x; });
                var _axisY = _item.graphA.map(function(item) { return item.y; });

                _tmpData[_name] = {
                    text  : getTextSection(_name), 
                    top   : _item.top,
                    chart : {
                        labels : ['Participantes'],
                        data   : [_axisX, _axisY],
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }]
                            }
                        }
                    }
                };
            }

            return _tmpData;
        }

        ////
        
        function getTextSection(section) {
            return _sections[section];
        }
    }
})();
