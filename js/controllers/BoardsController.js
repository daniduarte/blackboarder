
; // The magic

bbApp.controller('BoardsController', ['BoardsService', function(BoardsService){
  var self = this;

  self.data = BoardsService.data;

  self.addIdeaToBoard = function(board){
    var idea = {
      text: 'Asdf',
      createdAt: Date.now()
    };

    BoardsService.addIdeaToBoard(idea, board);
  }
}]);

