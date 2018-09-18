import'./../../models/tarefas'

Template.list.helpers({

  tarefas : ()=>{
        
        return Tarefas.find({});
  },

  formataData : ()=>{
    
    return moment(this.data).format('DD/MM/YYYY HH:mm')
  }

});

Template.list.events({

  "click button":function(event,template){
    let tarefa = this;
    console.log(tarefa)
    Meteor.call("excluir",tarefa._id)
  }

});