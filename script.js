
const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

ctx.scale(BLOCK_SIZE, BLOCK_SIZE)
function play() {
    board = new Board(ctx);
    console.table(board.grid);
  }