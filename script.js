$(document).ready(function() {
  $('.saveBtn').on('click', function() {

    var value = $(this).siblings('description').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, value);
    $('notification').addClass('show');
    setTimeout(function() {
      $('.notification').removeClass('show')
    }, 5000);
  });

  function hourUpdater() {
    var currentHour = dayjs().hour();
    
  
  
  
  
  
  
  
  }

});