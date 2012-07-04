var myList = new TaskList();
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");
myList.addTask("go home", "09/23/1986");

//Script for the button and input

$(document).ready(function () {
  $('.entry-form button').click(function(){
      var description = $('.entry-form .task').val();
      var date = $('.entry-form .date').val();
      myList.addTask(description, date);
      $('.entry-form .task, .entry-form .date').val('');
  });

  //Mark an item as complete if it's associated html li item is checked complete

  $('.completion-status').click(function(){
    if ($('.completion-status').val() === "on"){
      var index = parseInt($(this).parent().attr('id'));
      myList.markComplete(index);
    }
  });



  $(".date").datepicker();
  $(".date").datepicker("setDate", new Date());
  $('#ui-datepicker-div').hide();
  $('input.task, input.date').focus(function (){ $(this).addClass('active');});
  $('input.task, input.date').blur(function (){ $(this).removeClass('active');});


  //Drag a list item over to completed tasks to complete it
  $(function (){
    $('.incomplete-list').sortable({dropOnEmpty: true, connectWith: '.complete-list', cursor: "pointer", 
    remove: function(event, ui) {
      var index = parseInt($(this).children('li').attr('id'));
      myList.markComplete(index);
    },
    activate: function (event, ui) {
      $('.complete-list').addClass('active');
    },
    deactivate: function (event, ui) {
       $('.complete-list').removeClass('active');
    }
    });
    $('.complete-list').sortable({connectWith: '.incomplete-list', 
    remove: function(event, ui) {
      var index = parseInt($(this).children('li').attr('id'));
      myList.markIncomplete(index);
    }
    });
  });
});