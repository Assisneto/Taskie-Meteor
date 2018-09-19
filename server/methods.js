Meteor.methods({
    adiciona :function(obj){
      Tarefas.insert({nome:obj.nome,usuario:this.userId,date:new Date()});
      
    },
    excluir:(id)=>{
      Tarefas.remove({_id:id});
    }
}); 