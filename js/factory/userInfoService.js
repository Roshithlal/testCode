app.factory('userInfoFactory', function($http){
	
	return {
		getUserInfo: function(){
			return $http.get('http://jsonplaceholder.typicode.com/posts');
		}
	}
});