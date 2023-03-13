// Main function
$(document).ready(function () {
  // Event listener waiting for click event from user which then runs anonymous function
  $('.saveBtn').on('click', function () {
    // Declare value variable, assign to class description
    var value = $(this).siblings('.description').val();
      // Declare time variable, assign to element id
    var time = $(this).parent().attr('id');
    // Store time and value variables in local storage
    localStorage.setItem(time, value);
    // Class notification is added to class show (instead of hide)
    $('.notification').addClass('show');

    // setTimeout function called, removes notification that user input is stored in local storage after 5 seconds
    setTimeout(function () {
      // Class notification element removed from show class
      $('.notification').removeClass('show');
      // 5000 ms is equal to 5 seconds
    }, 5000);
  });

  // Declare function called hourUpdater
  function hourUpdater() {
    // Declare currentHour variable, assign to dayjs hour method
    var currentHour = dayjs().hour();

    // Iterate over class time-block elements, runs anonymous function
    $('.time-block').each(function () {
      // Declare blockHour function, assign to id element
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // Conditional statement checking if blockHour variable is less than currentHour variable
      if (blockHour < currentHour) {
        $(this).addClass('past');
      } else if (blockHour === currentHour) {
        $(this).removeClass('past');
        $(this).addClass('present');
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourUpdater();

  // set up interval to check if current time needs to be updated
  setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // display current day on page
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
