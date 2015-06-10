$(document).ready(function(){
	$('#showLeftPush').click(function(){
		console.log('asdad');
		$(this).toggleClass('active');
		$('body').toggleClass('cbp-spmenu-push-toright');
		$('#cbp-spmenu-s1').toggleClass('cbp-spmenu-open');
	});
});