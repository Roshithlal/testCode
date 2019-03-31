app.controller('userInfoController', function ($scope, userInfoFactory, arrowMapper) {
	userInfoFactory.getUserInfo().then(function(response){
		$scope.userInfo = response.data;
	}, function(error){
		$scope.error = true;
	});
	$scope.properyName = 'id';
	$scope.reverse = false;
	$scope.type = arrowMapper[false];

	$scope.sortInfo = function(param){
		$scope.properyName = param;
		$scope.reverse = !$scope.reverse;
		$scope.type = arrowMapper[$scope.reverse];
	}
});