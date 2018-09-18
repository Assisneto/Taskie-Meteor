Template.adicionarTarefa.events({

  "submit #adicionarTarefa":(event,template)=>{

    event.preventDefault();
    
    let input = $("#tarefa");
    let nome  = input.val();
    console.log(nome)
    Meteor.call("adiciona",{nome:nome}); 
  }

})