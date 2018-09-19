Template.adicionarTarefa.events({

  "submit #adicionarTarefa":function(event,template){

    event.preventDefault();
    
    let input = $("#tarefa");
    let nome  = input.val();
    
    Meteor.call("adiciona",{nome:nome});
    input.val("");
  }

})