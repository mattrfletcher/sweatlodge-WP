$(function() { 


$('.menuBar > ul > li.menu-item-has-children').hover(function() {
 		 $(this).closest("li").addClass("activeMenuItem");  
		 $(this).find('.sub-menu').css('display', 'block');
	 }, function() {
	 	$(this).closest("li").removeClass("activeMenuItem"); 
		 $(this).find('.sub-menu').css('display', 'none');
	 })
 });	




$(document).ready(function($) {
    $('.accordion summary').click(function() {
        $(".details-content").not($(this).next()).slideUp('fast');
        $(".details-content").not($(this)).removeClass('active');
        if ($(this).hasClass("active")) {
            $(".accordion summary").removeClass('active');
            $(this).next().slideToggle('fast');
        }
        else {
            $(this).addClass('active');
            $(this).next().slideToggle('fast');
        }
    }
                            );
}
                 ); 