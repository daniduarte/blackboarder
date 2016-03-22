
; // The magic

bbApp.controller('BoardsController', function(){
  var self = this;

  self.data = [
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

});

