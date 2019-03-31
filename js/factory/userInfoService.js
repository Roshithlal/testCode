app.factory('userInfoFactory', function($http){
	
	return {
		getUserInfo: function(){
			return $http.get('https://jsonplaceholder.typicode.com/posts');
		}
	}
});