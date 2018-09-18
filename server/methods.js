Meteor.methods({
    adiciona :(obj)=>{
      Tarefas.insert({nome:obj.nome,date:new Date()});
    },
    excluir:(id)=>{
      Tarefas.remove({_id:id});
    }
}); 