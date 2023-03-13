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
    // Declare currentHour variable, assign to dayjs method and then hour method
    var currentHour = dayjs().hour();

    // Iterate over class time-block elements, runs anonymous function
    $('.time-block').each(function () {
      // Declare blockHour function, assign to id element
      var blockHour = parseInt($(this).attr('id').split('-')[1]);

      // Conditional statement checking if blockHour variable is less than currentHour variable, then does 'something'
      if (blockHour < currentHour) {
        // If conditional is true, add local variable to class past
        $(this).addClass('past');
        // If conditional variables equal, do something
      } else if (blockHour === currentHour) {
        // Remove variable from class past and assign to class present
        $(this).removeClass('past');
        $(this).addClass('present');
        // If conditional is false, remove classes past and present from local variable and assign to future class
      } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  // Call hourUpdater function
  hourUpdater();

  // Call setInterval function, checks if hour needs to be updated
  setInterval(hourUpdater, 15000);

  // Loads saved data from id hour-9 from local storage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  // Loads saved data from id hour-10 from local storage
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  // Loads saved data from id hour-11 from local storage
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  // Loads saved data from id hour-12 from local storage
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  // Loads saved data from id hour-13 from local storage
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  // Loads saved data from id hour-14 from local storage
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  // Loads saved data from id hour-15 from local storage
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  // Loads saved data from id hour16 from local storage
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  // Loads saved data from id hour-17 from local storage
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // Uses currentDay id, assigns dayjs date function 
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});
