$(document).ready(function () {
    svg4everybody({});
    AOS.init()


    if ($(document).width() < 480) {
    	console.log('slick init')
    	$('.pricing-list').slick({
    		infinite: false,
    		slidesToShow: 1.5,
    	})
    }



    // ===============
    // Community modal
    // ===============

    $('.community-card_btn').click(function(){
    	let card = $(this).data('community-id'),
    			pop = ".pop-" + card
    	$(pop).slideToggle()
    	$(pop).css({display: 'flex'})
    	// $('body').toggleClass('js-fixed')
    	// $(pop).css({display: 'flex !important',})
    })
    $('.social-card_btn').click(function(){
    	$('.pop-callback_wrap').slideToggle();
    	$('.pop-callback_wrap').css({display: 'flex'})

    })



// ===============
// PopCosers
// ===============

    $('.pop-close-btn').click(function(){
    	let pop = $(this).data('close');
    	$('.'+pop).slideToggle()
    })

$('.js-btn-price-open').click(function(){
	let pop = $('.pop-pricing_wrap');
	pop.slideToggle()
	pop.css({display: 'flex'})
})


if ($(document).width() < 480) {
    $(function(){
        $('.belarus .community-card').slice(0,4).css({'display': 'flex'})
        $('.show-more-btn').on('click', function(e){
            e.preventDefault();
            let nextGroups = $('.belarus .community-card:hidden').slice(0,4);
            nextGroups.css({'display': 'flex'});
            nextGroups.slideDown()
            window.scrollBy(0, -1800)
            if ($('.belarus .community-card:hidden').length == 0){
                $('.show-more-btn').fadeOut('slow');
            }
        })
    })
}






    $('.hero-slider').slick({
        centerMode: true,
        // centerPadding: '144px',
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        arrows: true,
        swipeToSlide: true,
        nextArrow: '<svg class="slick-next" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.78" d="M28.2844 3L56.5687 31.2843L28.2844 59.5685" stroke="white" stroke-width="8"/></svg>',
        prevArrow: '<svg class="slick-prev" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.2843 3L6.00003 31.2843L34.2843 59.5685" stroke="white" stroke-width="8"/></svg>',
        responsive:[{
            breakpoint: 480,
            settings: {
                centerMode: false,
                arrows: false
            },
        }],
    })

});

