$(document).ready(function() {
    // mobile menu
    $('#mobileToggle').click(function() {
      $('.menu-toggle').slideToggle(300);
    });

    $('#closeBtn').on('click', function () {
      $(this).closest('.menu-toggle').slideUp(300);
    });    

    // download brochure
    $('.downloadBrochure').click(function() {
      const link = document.createElement('a');
      window.open('https://zahidbenu.github.io/project-my_tutor/docs/file/brochure.pdf', '_blank');
      link.download = 'brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
    

    // team slider
    $('.team-slider').slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay:false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1326,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]
    });

    // course toggle

    $('.toggle-header').click(function () {
        const content = $(this).next('.toggle-content');
        const icon = $(this).find('.toggle-icon');

        $(".toggle-content").not(content).slideUp(300);
        $(".toggle-icon").not(icon).removeClass('rotate-180');
    
        content.slideToggle(300);
        icon.toggleClass('rotate-180');
    });

    // project slider

    $('.project-slider').slick({
        dots: false,
        arrows:true,
        infinite: true,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.project .slick-prev-mm'),
        nextArrow: $('.project .slick-next-mm'),
    });

    $('.project .slick-prev-mm').click(function() {
      $(this).removeClass('opacity-50').addClass('opacity-100');
      $('.project .slick-next-mm').removeClass('opacity-100').addClass('opacity-50');
    });

    $('.project .slick-next-mm').click(function() {
      $(this).removeClass('opacity-50').addClass('opacity-100');
      $('.project .slick-prev-mm').removeClass('opacity-100').addClass('opacity-50');
    });

    // testimonial slider

    $('.testimonial-slider').slick({
      dots: false,
      arrows:true,
      infinite: true,
      autoplay:false,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: $('.testimonial .slick-prev-mm'),
      nextArrow: $('.testimonial .slick-next-mm'),
    });

    $('.testimonial .slick-prev-mm').click(function() {
      $(this).removeClass('opacity-50').addClass('opacity-100');
      $('.testimonial .slick-next-mm').removeClass('opacity-100').addClass('opacity-50');
    });

    $('.testimonial .slick-next-mm').click(function() {
      $(this).removeClass('opacity-50').addClass('opacity-100');
      $('.testimonial .slick-prev-mm').removeClass('opacity-100').addClass('opacity-50');
    });

    // FAQs

    $(".faq-toggle").click(function () {
      var content = $(this).next(".faq-content");
      var icon = $(this).find(".vertical");
    
      $(".faq-content").not(content).slideUp(300);
      $(".vertical").not(icon).removeClass("hidden");
    
      content.slideToggle(300);
      icon.toggleClass("hidden");
    });
    
    
});