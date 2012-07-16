var TaskList = function(){
  this.entries = [];
  this.task_counter = 0;
  this.return_entries = function () {
    return this.entries;
  }
  this.addTask = function(description, date) {
    var newTask = new Task(description, date, this.task_counter, false);
    this.entries.push(newTask);
    this.task_counter++;
    listSaver.save();
  }
  
  this.markComplete = function(index) {
    this.entries[index].complete();
    listSaver.save();
  }
  
  this.markIncomplete = function(index) {
    this.entries[index].setIncomplete();
    listSaver.save();
  }
  
}