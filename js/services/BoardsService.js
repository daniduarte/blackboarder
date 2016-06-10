
; // The magic

bbApp.factory('BoardsService', function(){

  var data = [
    {
      name: 'Por hacer',
      ideas: []
    },
    {
      name: 'En proceso',
      ideas: []
    },
    {
      name: 'Hechas',
      ideas: []
    },
  ];

  return {
    data: data,

    addIdeaToBoard: function(idea, board){
      var boardIndex = data.indexOf(board);
      data[boardIndex].ideas.push(idea);git a
    },
    
    removeIdeaFromBoard: function(idea, board){
      var boardIndex = data.indexOf(board);
      var ideaIndex = data[boardIndex].ideas.indexOf(idea);
      data[boardIndex].ideas.splice(ideaIndex, 1);
    },
    
    updateIdea: function(idea, board, ideaChanged){
      var boardIndex = data.indexOf(board);
      var ideaIndex = data[boardIndex].ideas.indexOf(idea);
      data[boardIndex].ideas[ideaIndex] = ideaChanged;
    }
    
  };
  
});

