var SaveToDb = function() {
  this.save = function () {
    // console.log("just saved an item");
    $.totalStorage("savedlist", myList);
  }
  
  this.not_empty = function() {
    return $.totalStorage("savedlist");
  }

  this.retrieve = function() {
    var rawList = $.totalStorage("savedlist");
    // console.log(rawList);
    return this.reloadList(rawList);
  }
  
  this.reloadList = function(rawObject) {
   var array_of_tasks = []
    for (var i = 0; i < rawObject.entries.length; i++){
      var description = rawObject.entries[i].task_description
      var date = rawObject.entries[i].date
      var completion = rawObject.entries[i].completion
      var new_entry = new Task(description, date, i, completion);
      if (completion){
        new_entry.complete();
      }
      array_of_tasks.push(new_entry);
    }
   return array_of_tasks
  }
  
}