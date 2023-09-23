
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


});

