var taskList = {
  
  task_counter: 0,

  entries: $.map($.totalStorage("savedlist") || [], function(entry, i){
    return new Task(entry.task_description, entry.date, i, entry.completion);
  }),
  
  addTask: function(description, date) {
    var newTask = new Task(description, date, this.task_counter, false);
    this.entries.push(newTask);
    this.task_counter++;
    listSaver.save();
  },
  
  markComplete: function(index) {
    this.entries[index].complete();
    listSaver.save();
  },
  
  markIncomplete: function(index) {
    this.entries[index].setIncomplete();
    listSaver.save();
  },

  save: function () {
    // console.log("just saved an item");
    $.totalStorage("savedlist", this);
  },
  
  not_empty: function() {
    return $.totalStorage("savedlist");
  }

};
