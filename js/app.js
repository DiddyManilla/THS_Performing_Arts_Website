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
		.state('classes', {
			url:'/classes',
			templateUrl:'./views/classes.html',
			controller: 'classesCtrl'
		})
		.state('productions', {
			url:'/productions',
			templateUrl:'./views/productions.html',
			controller: 'prodCtrl'
		})
		.state('choir', {
			url:'/choir',
			templateUrl:'./views/choir.html',
			controller: 'choirCtrl'
		})
		.state('loa', {
			url:'/loa',
			templateUrl:'./views/loa.html',
			controller: 'choirCtrl'
		});		

		//TODO: add routes for Orchestra, Band, and the League of Assassins
			//Don't forget to build their relatec controllers!

}]).run();