// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#beep').tap(function(){
			navigator.beep(1000);
		});
		$('#vibrar').tap(function(){
			navigator.vibrate(1000);
		});
	},false);
});