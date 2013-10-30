'use strict';

/* Controllers */
var myfirstangular = angular.module('myfirstangular',[]);// why []

myfirstangular.controller('MyPhoneListCtrl',function MyPhoneListCtrl($scope){
	$scope.apples = [
		{'name':'11-inch MacBook Air','snippet':'That is macbook air','age':1},
		{'name':'MacBook Pro','snippet':'MacBook Pro with Retina display','age':2},
		{'name':'21.5-inch iMac','snippet':' a  ha ','age':3}
	];
	$scope.title = "Apple Products";
	$scope.orderProp = 'age';
});

