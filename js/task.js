var Task = function(description, date, id){
  this.task_description = description;
  this.date = new Date(date);
  this.completion = false;
  this.task_id = id;
    
  this.createListItem = function () {
    var date_str = this.getDate();
    var listItem = '<li id= ' + this.task_id + ' ><input class="completion-status" type="checkbox"/>' + description + ' ' + '<span class="clearfix">' + date_str + '</span>' + '</li>';
    $('.incomplete-list').append(listItem).children(':last').hide().fadeIn(2000);
  }
  
  this.getDescription = function () {
    return this.task_description;
  }
  this.getDate = function () {
    var curr_date = this.date.getDate();
    var curr_month = this.date.getMonth() + 1; //Months are zero based
    var curr_year = this.date.getFullYear();
    return curr_month + "/" + curr_date + "/" + curr_year;
  }
  this.changeDate = function (new_date) {
    return this.date = Date.parse(new_date);
  }
  
  this.isComplete = function () {
    return this.completion;
  }
  
  this.setIncomplete = function () {
    // var element_id = '#' + this.task_id;
    //     $(element_id).children('.completion-status').attr("checked", "");
    return this.completion = false;
  }
  
  this.complete = function () {
    var element_id = '#' + this.task_id;
    //$(element_id).children('.completion-status').attr("checked", "checked");
    return this.completion = true;
  }
  
  //initialize on board
  this.createListItem();
  
};




