var ctrl = angular.module('starter.mainController', ['ionic']);

ctrl.controller('mainController', function ($scope, $state) {

	$scope.openPie = function() {
		$state.go('pie');
	};

	$scope.openBar = function(){
		$state.go('bar');
	};

	$scope.openLine = function(){
		$state.go('line');
	};
	
	// d3.select("body").append("p");
	// d3.select("body").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");

	// var theData = [ 1, 2, 3 ]; 
 //    var p = d3.select("ion-content").selectAll("p").data(theData).enter().append("p").text("hello ");
 
	// var vm = this;
	// vm.options = {};
	// vm.data = {};

	// vm.options = {  
	//   chart: {
	//     type: 'pieChart',
	//     height: 500,
	//     x: function(d){return d.key;},
	//     y: function(d){return d.y;},
	//     showLabels: true,
	//     duration: 500,
	//     labelThreshold: 0.01,
	//     labelSunbeamLayout: true,
	//     legend: {
	//       margin: {
	//         top: 5,
	//         right: 35,
	//         bottom: 5,
	//         left: 0
	//       }
	//     }
	//   }
	// };

	// vm.data = [  
	//   {
	//     key: "One",
	//     y: 5
	//   },
	//   {
	//     key: "Two",
	//     y: 2
	//   },
	//   {
	//     key: "Three",
	//     y: 9
	//   },
	//   {
	//     key: "Four",
	//     y: 7
	//   },
	//   {
	//     key: "Five",
	//     y: 4
	//   },
	//   {
	//     key: "Six",
	//     y: 3
	//   },
	//   {
	//     key: "Seven",
	//     y: .5
	//   }
	// ];

});
