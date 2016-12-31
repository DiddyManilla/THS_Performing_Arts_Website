angular.module('dramaApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home'), {
			url:'/',
			templateUrl: './views/home.html'
		}
		.state('drama', {
			url:'/drama',
			templateUrl:'./views/drama.html',
			controller: 'dramaCtrl'
		})
		.state('choir', {
			url:'/choir',
			templateUrl:'./views/choir.html',
			controller: 'choirCtrl'
		});		

		//TODO: add state for band and orchestra
			//Remember to creat controllers for those routes
}).run();