var myList = new TaskList();
$(document).ready(function () {
  
  myList.addTask("go home", "09/23/1986");
  myList.addTask("go home", "09/23/1986");
  myList.addTask("go home", "09/23/1986");
  myList.addTask("go home", "09/23/1986");
  myList.addTask("go home", "09/23/1986");
  
  //Initialization
  $(".date").datepicker();
  $(".date").datepicker("setDate", new Date());
  $('#ui-datepicker-div').hide();
  $('input.task, input.date').focus(function (){ $(this).addClass('active');});
  $('input.task, input.date').blur(function (){ $(this).removeClass('active');});
  
  //Load existing objects into myList
  
  
  //Script for the add task button and input
  
  $('.entry-form button').click(function(){
      if ($('.entry-form .task').val() !== '') {
        var description = $('.entry-form .task').val();
        var date = $('.entry-form .date').val();
        myList.addTask(description, date);
        $('.entry-form .task, .entry-form .date').val('');
        $(".date").datepicker("setDate", new Date());
        $('#ui-datepicker-div').hide();
      }
  });

  //Mark an item as complete if it's associated html li item is checked complete

  $('.completion-status').click(function(){
    var index = parseInt($(this).parent().attr('id'));
    console.log(index);
    if ($(this).attr("checked") === "checked"){
      myList.markComplete(index);
      $(this).parent().appendTo('.complete-list').hide().fadeIn(500);
    } else {
      myList.markIncomplete(index);
    }
  });
  
//Drag a list item over to completed tasks to complete it
  $(function (){
    $('.incomplete-list').sortable({dropOnEmpty: true, connectWith: '.complete-list', cursor: "pointer", 
    remove: function(event, ui) {
      var index = parseInt(ui.item.attr('id'));
      myList.markComplete(index);
      $(ui.item).children('.completion-status').attr("checked", true);
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
      var index = parseInt(ui.item.attr('id'));
      $(ui.item).children('.completion-status').attr("checked", false);
      myList.markIncomplete(index);
    }
    });
  });
});