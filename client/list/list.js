import'./../../models/tarefas'

Template.list.helpers({

  tarefas : ()=>{
        
    return Tarefas.find({});
  },

  formataData :function(){
    
    return moment(this.date).format('DD/MM/YYYY HH:mm')
  }

});

Template.list.events({

  "click button":function(event,template){
    let tarefa = this;
    
    Meteor.call("excluir",tarefa._id)
  }

});