$(function(){

  $('.port-item').on('click', function(){
    $('.collapse').collapse('hide');
  })

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

})