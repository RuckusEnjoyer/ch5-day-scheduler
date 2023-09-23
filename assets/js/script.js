
var currentDay = $('#currentDay')
var saveBtn = $('.saveBtn')

$(function () {
  //current day/time text
  currentDay.text(dayjs());


  //save things to localStorage
  saveBtn.on('click', function() {
    var parentElement = $(this).parent(); 
    var id = parentElement.attr('id'); 
    var value = $(this).parent().children('textarea').val(); 

    localStorage.setItem(id, value);
  });

  //change the time color for the calender blocks
  $('.time-block').each(function() {
    var timeText = $(this).children('div');
    var time = parseInt(timeText.text());

    if (time === dayjs().hour()) {
      $(this).removeClass('past future').addClass('present');
    } else if (time < dayjs().hour()) {
      $(this).removeClass('present future').addClass('past');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });
  
  //load the localStorage stuff
  $('.time-block').each(function() {
    var parentElement = $(this).children('textarea'); 
    var id = $(this).attr('id'); 
    var savedData = localStorage.getItem(id);
  
    parentElement.text(savedData);
  });

});

