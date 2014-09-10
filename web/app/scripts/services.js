'use strict';


angular.module('clmApp.services', [])
    .factory('NavService', ['$http', function($http) {
        return {
            getAll: function() {
                return $http({
                    url: 'stat/labels.json',
                    method: 'GET'
                });
            }
               
        }
    }])
    .factory('DashboardService', ['$http', function($http) {
        return {
            getData: function() {
                return $http({
                    url: 'stat/table_data.json',
                    method: 'GET'
                });
            }
        };
    }])
    .factory('ProfileService', ['$http', function($http) {
        return {
            getData: function() {
                return $http({
                    url: 'stat/table_data.json',
                    method: 'GET'
                });
            }
        };
    }]);;