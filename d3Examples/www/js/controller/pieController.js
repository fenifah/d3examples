var ctrl = angular.module('starter.pieController', ['ionic']);

ctrl.controller('pieController', function ($scope, $state) {

$scope.openDashboard = function(){
  $state.go('main');
};

var w = 500;
var h = 400;
var r = 120;

var color = d3.scale.category20();

var data = [{"label":"A", "value":5}, {"label":"B", "value":10}, {"label":"C", "value":25}, {"label":"D", "value":30},
		          {"label":"E", "value":20}, 
		          {"label":"F", "value":12}];


var vis = d3.select('#pie-content').append("svg:svg").data([data]).attr("width", w).attr("height", h).append("svg:g").attr("transform", "translate(" + r + "," + r + ")");
var pie = d3.layout.pie().value(function(d){return d.value;});

// declare an arc generator function
var arc = d3.svg.arc().outerRadius(r);

// select paths, use arc generator to draw
var arcs = vis.selectAll("g.slice").data(pie).enter().append("svg:g").attr("class", "slice");
arcs.append("svg:path")
    .attr("fill", function(d, i){
        return color(i);
    })
    .attr("d", function (d) {
        // log the result of the arc generator to show how cool it is :)
        console.log(arc(d));
        return arc(d);
    });

// add the text
arcs.append("svg:text").attr("transform", function(d){
			d.innerRadius = 0;
			d.outerRadius = r;
    return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
    return data[i].label;}
		);

});
