
function showHideItem(hover, target){

	$(hover).hover(
		function(){
			$(target).stop().slideDown(300);
		},
		function(){
			$(target).stop().slideUp(300);
		}
	);

}

$(document).ready(function(){

});

$(window).load(function(){

	showHideItem('.main-right-list-wrapper','.main-right-list-slide');

});

$(window).resize(function(){

});