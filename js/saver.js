var SaveToDb = function() {
  return {
    save: function () {
      $.totalStorage("savedList", myList);
    },
    not_empty: function () {
      return $.totalStorage("savedlist");
    },
    retrieve: function () {
      var rawList = $.totalStorage("savedlist");
      return this.reloadList();
    },
    reloadList: function () {
      var array_of_tasks = []
        for (var i = 0; i < rawObject.entries.length; i++){
          var description = rawObject.entries[i].description;
          var date = rawObject.entries[i].date;
          var completion = rawObject.entries[i].completion;
          var new_entry = new Task(description, date, i);
          if (isComplete()){
            new_entry.setComplete();
          }
          array_of_tasks.push(new_entry);
        }
       return array_of_tasks;
    }
  }
}
  
  
  

