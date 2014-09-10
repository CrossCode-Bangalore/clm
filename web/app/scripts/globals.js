'use strict';


angular.module('clmApp.globals', [])

        .factory('GlobalService', function() {
            var globals = {};
            globals['default_tab'] = 'dashboard';
            return {
                getVal: function(key) {
                    return globals[key];
                }
            };
        });