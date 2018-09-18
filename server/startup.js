Meteor.startup(()=>{

  Meteor.publish("tarefas",()=>{
    return Tarefas.find({});
  })
});