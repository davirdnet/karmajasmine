(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('ang-modular', [
		'ngResource',
		'ngAria',
		
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'ui.router',
		'home',
	]);

})();
