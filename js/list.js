var TaskList = function (){
  var entries = [];
  var task_counter = 0;
  return{
    myentries: function () {
      return entries;
    },
    addTask: function (description, date) {
      entries.push(new Task(description, date, task_counter));
      entries[entries.length -1].createListItem();
      task_counter++;
      listSaver.save();
    },
    markComplete: function (index) {
      entries[index].setComplete();
      listSaver.save();
    },
    markIncomplete: function (index) {
      entries[index].setIncomplete();
      listSaver.save();
    }
  }
}