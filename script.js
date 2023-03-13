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

    $('.time-block').each(function() {
      var blockHour = parseInt($(this).attr('id').split('-')[1]);
      
      if (blockHour  < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });;
  }

  // Call hourUpdater function
  hourUpdater();

  setInterval(hourUpdater, 15000);
  
    //Conditional statement checking hour

    
    
  
  
  
  
  
  
  
  }

});