function toDo(chore){
  this.chore = chore;
}

$(document).ready(function(){
  $("form#new-task").submit(function(event){
    var taskArray = [];
    taskArray.push($("#chore").val());
    var myChore = new toDo(taskArray);

    myChore.chore.forEach(function(task){
      $("form#chore-checkbox").append("<input type='checkbox' name='chores'" + "value=" + task +">" + task + "<br>");
    });
    event.preventDefault();
  });
  $("button#clear").click(function(event) {
    $("input:checkbox[name=chores]:not(:checked)").each(function(){
     var choresLeft = $(this).prop("value");
     $(".chores-left").append(choresLeft + "<br>");
     $(".chores-left").show();
     event.preventDefault();
    });
  });
});
