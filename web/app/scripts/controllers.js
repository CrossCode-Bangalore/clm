'use strict';


angular.module('clmApp.controllers', ['clmApp.services'])
        .controller('AppCtrl', ['$scope', 'GlobalService', 'NavService', function($scope, GlobalService, NavService) {
            $scope.meta = {};
            $scope.meta.curr_tab = GlobalService.getVal('default_tab');
            $scope.meta.curr_page = 'dashboard';
			//$location.path('/dashboard');
            $scope.info = {};
            $scope.info.showLeftNav = false;
            
            $scope.info.campaign = {};
            $scope.info.campaign.name = 'Campaign-1';
            $scope.info.campaign.labels = [];
            $scope.info.user = {};
            $scope.info.user.status = ['online', 'ideal', 'offline'];
            $scope.info.user.currentStatus = 'online';
            NavService.getAll().then(function(response) {
                $scope.info.campaign.labels = response.data;
            }, function(response) {
                console.error(response.data);
            });
			
			 $scope.$on("$locationChangeStart", function(event, next, current) { 
				var pageName = next.split('#');
				console.log("pageName ->>" + pageName.length);
				if(pageName.length && pageName.length > 1){
					if(pageName[1] == "/edituserprofile"){
						$scope.meta.curr_tab = "route";
						$scope.meta.curr_page = "dashboard";
					}else if(pageName[1] == "/dashboard"){
						$scope.meta.curr_tab = "dashboard";
						$scope.meta.curr_page = 'dashboard';
					}else if(pageName[1] == "/telephony"){
						$scope.meta.curr_tab = "telephony";
						$scope.meta.curr_page = 'telephony';
					}else if(pageName[1] == "/open_items"){
						$scope.meta.curr_tab = "open_items";
						$scope.meta.curr_page = 'open_items';
					}else if(pageName[1] == "/chats"){
						$scope.meta.curr_tab = "chats";
						$scope.meta.curr_page = 'chats';
					}else if(pageName[1] == "/alerts"){
						$scope.meta.curr_tab = "alerts";
						$scope.meta.curr_page = 'alerts';
					}else if(pageName[1] == "/summary"){
						$scope.meta.curr_tab = "summary";
						$scope.meta.curr_page = 'summary';
					}
					
				}
				
			  });
           

        }])
        .controller('DashboardCtrl', ['$scope',  'DashboardService', function($scope, DashboardService) {
            $scope.info = {};
            $scope.info.data = [];
            $scope.info.grid = {};
            $scope.info.grid.type = "";
            DashboardService.getData().then(function(response) {
                $scope.info.data = response.data;
            }, function(response) {
                console.error(response.data);
            });
        }]);
        