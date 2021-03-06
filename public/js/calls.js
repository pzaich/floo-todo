$(function () {

  //Initialization
  $(".date").datepicker();
  $(".date").datepicker("setDate", new Date());
  $('#ui-datepicker-div').hide();
  $('input.task, input.date').focus(function (){ $(this).addClass('active');});
  $('input.task, input.date').blur(function (){ $(this).removeClass('active');});
  
  //Load existing objects into taskList
  
  
  //Script for the add task button and input
  
  $('.entry-form button').click(function(){
    if ($('.entry-form .task').val() !== '') {
      var description = $('.entry-form .task').val();
      var date = $('.entry-form .date').val();
      taskList.addTask(description, date);
      $('.entry-form .task, .entry-form .date').val('');
      $(".date").datepicker("setDate", new Date());
      $('#ui-datepicker-div').hide();
    }
  });

  //Mark an item as complete if it's associated html li item is checked complete

  $('body').on("click", ".completion-status", function(){
	    var index = parseInt($(this).parent().attr('id'));
	    if ($(this).attr("checked") === "checked"){
	      taskList.markComplete(index);
	      $(this).parent().appendTo('.complete-list').hide().fadeIn(500);
	    } else {
	      taskList.markIncomplete(index);
	      $(this).parent().appendTo('.incomplete-list').hide().fadeIn(500);
	    }
	  });
  
  //Drag a list item over to completed tasks to complete it
  $('.incomplete-list').sortable({
    dropOnEmpty: true,
    connectWith: '.complete-list',
    cursor: "pointer", 
    remove: function(event, ui) {
      taskList.markComplete(parseInt(ui.item.attr('id')));
      $(ui.item).children('.completion-status').attr("checked", true);
    },
    activate: function (event, ui) {
      $('.complete-list').addClass('active');
    },
    deactivate: function (event, ui) {
      $('.complete-list').removeClass('active');
    }
  });
    
  $('.complete-list').sortable({
    connectWith: '.incomplete-list', 
    remove: function(event, ui) {
      $(ui.item).children('.completion-status').attr("checked", false);
      taskList.markIncomplete(parseInt(ui.item.attr('id')));
    }
  });
  
});