var form = document.getElementsByName('contact-form')[0];
var modal = document.getElementById('contact-modal');

function submitForm() {
  console.log('submit click');
  modal.style.display = 'block';
}
/*
window.onclick = function(event, res) {
  if(event.target == document.getElementById('contact-modal-btn')) {
    console.log('modal btn click');
    modal.style.display = 'none';
    form.reset();
  }
  else if (event.target == document.getElementById('form-submit')) {
    console.log('submit click');
    modal.style.display = 'block';
    
  }
  return true;
}
*/
$('#menu-contact').on('click', function(e) {
  let container = $('.container');
  console.log('Menu contact clicked');
  modal.style.opacity = '1.0';
  container.fadeTo('slow', 0.2);
  modal.style.pointerEvents = 'auto';
  container.css('overflow', 'hidden');
})

$('#form-cancel').on('click', function(e) {
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  $('.container').fadeTo('slow', 1.0);
  $('.container').css('overflow', 'auto');
});

$('#form-submit').on('submit', function(e) {
  e.preventDefault();
  $.ajax({
    url: '/contact',
    method: 'POST',
    data: {
      name: $('#contact-name').val(),
      email: $('#contact-email').val(),
      subject: $('#contact-subject').val(),
      message: $('#contact-message').val()
    }
  }).then(function() {
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    $('.container').fadeTo('slow', 1.0);
    $('.container').css('overflow', 'auto');
  });
});
/*
$('ul').find('a').click(function(event) {
   event.preventDefault();
   var sec=$(this).attr('href');
   $('html').animate({
   scrollTop:$(sec).offset().top
});
});*/