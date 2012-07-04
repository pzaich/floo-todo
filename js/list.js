var TaskList = function(){
  this.entries = [];
  this.task_counter = 0;
  this.return_entries = function () {
    return this.entries;
  }
  this.addTask = function(description, date) {
    console.log(this.task_counter);
    this.entries.push(new Task(description, date, this.task_counter));
    this.task_counter++;
  }
  
  this.markComplete = function(index) {
    this.entries[index].complete();
  }
  
  this.markIncomplete = function(index) {
    this.entries[index].setIncomplete();
  }

  
  // this.markComplete = function(description, date){
  //     this.entries
  //   }
}