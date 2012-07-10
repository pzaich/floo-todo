var Task = function (description, date, id) {
  var completion = false;
  var date = new Date(date);
  return {
    description: function () {
      return description
    },
    dateStr: function () {
      var currDate = date.getDate();
      var currMonth = date.getMonth() + 1; //Months are zero based
      var currYear = date.getFullYear();
      return currMonth + "/" + currDate + "/" + currYear;
    },
    changeDate: function (new_date){
      return date = Date.parse(new_date);
    },
    isComplete: function () {
      return completion;
    },
    setIncomplete: function () {
      completion = false;
    },
    setComplete: function () {
      var element_id = '#' + id;
      completion = true
    },
    createListItem:  function () {
      var date_str = this.dateStr();
      var listItem = '<li id= ' + id + ' ><input class="completion-status" type="checkbox"/>' + description + ' ' + '<span class="clearfix">' + date_str + '</span>' + '</li>';
      $('.incomplete-list').append(listItem).children(':last').hide().fadeIn(2000);
    }
  }
}
