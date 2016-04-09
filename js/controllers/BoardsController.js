
; // The magic

bbApp.controller('BoardsController', ['BoardsService', function(BoardsService){
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
  
  self.cancelEditIdea = function(idea){
    idea.editable = false;
  };
  
  self.saveChangesInIdea = function(idea, board){
    var ideaChanged = idea;
    ideaChanged.text = idea.text
    BoardsService.updateIdea(idea, board, ideaChanged);
    idea.editable = false;
  };

}]);

