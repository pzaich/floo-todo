var myList = new TaskList();
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");

//Script for the button and input


$('.entry-form .task, .entry-form .date').bind('keypress', function(e) {
  if(e.keyCode==13){
    var description = $('.entry-form .task').val();
    var date = $('.entry-form .date').val();
    myList.addTask(description, date);
    $('.entry-form .task, .entry-form .date').val('');
  }
});

$(".date").datepicker();
$('input.task, input.date').focus(function (){ $(this).addClass('active');});
$('input.task, input.date').blur(function (){ $(this).removeClass('active');});


//Drag a list item over to completed tasks to complete it
$(function (){
  $('.incomplete-list').sortable({dropOnEmpty: true, connectWith: '.complete-list', cursor: "pointer", remove: function(event, ui) 
  {
    var index = parseInt($(this).children('li').attr('id'));
    myList.markComplete(index);
  }
  });
  $('.complete-list').sortable();
});
