angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {
  $scope.data = {};
  $scope.getLinks = function(){
    $http({
      method: 'GET',
      url: '/api/links'
    })
    .success(function(data, status, headers, config) {
      $scope.data.links = data;
    })
    .error(function(data, status, headers, config) {
    });
  };
  $scope.getLinks();
});
