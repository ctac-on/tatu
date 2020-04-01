let scripts = function($) {
    /*FORM*/
    let form = $("#filter");
    
    //check checkbox
    $('.filter__item-label').on('click', function(){
        if ($(this).hasClass('filter__item-label_active')) {
            $(this).removeClass('filter__item-label_active');
        } else {
            $(this).addClass('filter__item-label_active');   
        }     
    });
    $('.filter__tags-label').on('click', function(){
        if ($(this).hasClass('filter__tags-label_active')) {
            $(this).removeClass('filter__tags-label_active');
        } else {
            $(this).addClass('filter__tags-label_active');   
        }     
    });
    
    //open-close form
    let status = 0,
        size;
    if ($(window).width() >= 992) {
            size = "desk";
        } else {
            size = "mob";    
        }
    
    $(document).on('click', '[data-action="open-filter"]', function(e){
        if ($(window).width() >= 992 && status === 0) {
            form.height(form.find('.filter').height());
            status = 1;
            $(this).parent().addClass('header-bottom__item-filter_activ');
        } else if ($(window).width() < 992 && status === 0) {
            $('#shadow').show();
            form.show();
            status = 1;
        }
        
        e.preventDefault ? e.preventDefault()  : (e.returnValue = false);
    });
    
    $('#close').on('click', function(){
        if ($(window).width() >= 992 && status === 1) {
            form.removeAttr('style');
            status = 0;
            $('.header-bottom__item-filter').removeClass('header-bottom__item-filter_activ');
        } else if ($(window).width() < 992 && status === 1) {
            $('#shadow').hide();
            form.removeAttr('style');
            status = 0;
        }
    });
    
    $(window).resize(function(){
        if ($(window).width() >= 992 && status === 1 && size == "mob") {
            $('#shadow').hide();
            form.removeAttr('style');
            status = 0;
            size = "desk";
        } else if ($(window).width() < 992 && status === 1 && size == "desk") {
            status = 0;
            $('.header-bottom__item-filter').removeClass('header-bottom__item-filter_activ');
            size = "mob";
            form.removeAttr('style');
        }
    });
    
}(jQuery);