
;

bbApp.factory('BoardsService', function(){

  var data = [
    {
      id: 1,
      name: 'Por hacer',
      ideas: [
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() }
      ]
    },
    {
      id: 2,
      name: 'En proceso',
      ideas: [
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() }
      ]
    },
    {
      id: 3,
      name: 'Hechas',
      ideas: [
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() },
        { text: 'Lorem ipsum dolor sit amet', createdAt: Date.now() }
      ]
    },
  ];

  return {
    data: data,

    addIdeaToBoard: function(idea, board){
      var boardIndex = data.indexOf(board);
      data[boardIndex].ideas.push(idea);
    }
  };
  
});

