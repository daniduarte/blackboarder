
; // The magic

bbApp.controller('BoardsController', ['$scope', 'BoardsService', function($scope, BoardsService){
  var self = this;

  self.data = BoardsService.data;

  self.addIdeaToBoard = function(board){
    var idea = {
      text: board.textNew || 'Blank idea',
      createdAt: Date.now()
    };

    board.textNew = '';

    BoardsService.addIdeaToBoard(idea, board);
  };
  
  self.removeIdeaFromBoard = function(idea, board){
    BoardsService.removeIdeaFromBoard(idea, board);
  };

  self.editIdea = function(idea){
    idea.editable = true;
  };

}]);

