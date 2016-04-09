
; // The magic

bbApp.factory('BoardsService', function(){

  var data = [
    {
      // id: 1,
      name: 'Por hacer',
      ideas: []
    },
    {
      // id: 2,
      name: 'En proceso',
      ideas: []
    },
    {
      // id: 3,
      name: 'Hechas',
      ideas: []
    },
  ];

  return {
    data: data,

    addIdeaToBoard: function(idea, board){
      var boardIndex = data.indexOf(board);
      data[boardIndex].ideas.push(idea);
    },
    
    removeIdeaFromBoard: function(idea, board){
      var boardIndex = data.indexOf(board);
      var ideaIndex = data[boardIndex].ideas.indexOf(idea);
      data[boardIndex].ideas.splice(ideaIndex, 1);
    }
    
  };
  
});

