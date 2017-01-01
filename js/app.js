var app = angular.module('dramaApp', ['ui.router']);
app.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url:'/',
			templateUrl: './views/home.html'
		})
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

		//TODO: add routes for Orchestra, Band, and the League of Assassins
			//Don't forget to build their relatec controllers!

}]).run();