document.addEventListener("DOMContentLoaded", () => {
    const numSquares = 100;
    const board = document.querySelector('.square-container');
    const pieces = {
        red: { position: 0 },
        blue: { position: 0 },
        green: { position: 0 },
        yellow: { position: 0 }
    };

    // Create 100 squares on the board
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        board.appendChild(square);
    }

    // Update all piece positions on the board
    function updatePiecePositions() {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square, index) => {
            // Remove any previous piece classes
            square.innerHTML = '';
            const occupyingPieces = [];

            // Check which pieces are on the current square
            Object.keys(pieces).forEach(color => {
                if (index === pieces[color].position) {
                    occupyingPieces.push(color);
                }
            });

            // Display pieces, adjusting size based on number of pieces
            if (occupyingPieces.length === 1) {
                // If only one piece, make it full size
                const pieceDiv = document.createElement('div');
                pieceDiv.classList.add('piece', occupyingPieces[0], 'full-size');
                square.appendChild(pieceDiv);
            } else if (occupyingPieces.length > 1) {
                // If multiple pieces, shrink them and position them in corners
                occupyingPieces.forEach((color, idx) => {
                    const pieceDiv = document.createElement('div');
                    pieceDiv.classList.add('piece', color, 'small-size');
                    
                    // Positioning for multiple pieces
                    if (idx === 0) pieceDiv.classList.add('top-left');
                    else if (idx === 1) pieceDiv.classList.add('top-right');
                    else if (idx === 2) pieceDiv.classList.add('bottom-left');
                    else if (idx === 3) pieceDiv.classList.add('bottom-right');
                    
                    square.appendChild(pieceDiv);
                });
            }
        });
    }

    // Handle button clicks
    document.querySelectorAll('.move-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const color = e.target.dataset.color;
            const direction = e.target.dataset.direction;
            const moveAmount = 2;
            const backAmount = 3;

            // Update position based on direction
            if (direction === 'plus') {
                pieces[color].position = Math.min(numSquares - 1, pieces[color].position + moveAmount);
            } else {
                pieces[color].position = Math.max(0, pieces[color].position - backAmount);
            }

            // Update the board to reflect new positions
            updatePiecePositions();
        });
    });

    // Initial update to place pieces on the board
    updatePiecePositions();
});

////////////////small always/////////////////
// document.addEventListener("DOMContentLoaded", () => {
//     const numSquares = 100;
//     const board = document.querySelector('.square-container');
//     const pieces = {
//         red: { position: 0 },
//         blue: { position: 0 },
//         green: { position: 0 },
//         yellow: { position: 0 }
//     };

//     // Create 100 squares on the board
//     for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         board.appendChild(square);
//     }

//     // Update all piece positions on the board
//     function updatePiecePositions() {
//         const squares = document.querySelectorAll('.square');
//         squares.forEach((square, index) => {
//             // Remove any previous piece classes
//             square.innerHTML = '';
//             const occupyingPieces = [];

//             // Check which pieces are on the current square
//             Object.keys(pieces).forEach(color => {
//                 if (index === pieces[color].position) {
//                     occupyingPieces.push(color);
//                 }
//             });

//             // Display multiple pieces in subdivided sections
//             if (occupyingPieces.length > 0) {
//                 occupyingPieces.forEach((color, idx) => {
//                     const pieceDiv = document.createElement('div');
//                     pieceDiv.classList.add('piece', color);
                    
//                     // Positioning for multiple pieces
//                     if (idx === 0) pieceDiv.classList.add('top-left');
//                     else if (idx === 1) pieceDiv.classList.add('top-right');
//                     else if (idx === 2) pieceDiv.classList.add('bottom-left');
//                     else if (idx === 3) pieceDiv.classList.add('bottom-right');
                    
//                     square.appendChild(pieceDiv);
//                 });
//             }
//         });
//     }

//     // Handle button clicks
//     document.querySelectorAll('.move-btn').forEach(button => {
//         button.addEventListener('click', (e) => {
//             const color = e.target.dataset.color;
//             const direction = e.target.dataset.direction;
//             const moveAmount = 4;

//             // Update position based on direction
//             if (direction === 'plus') {
//                 pieces[color].position = Math.min(numSquares - 1, pieces[color].position + moveAmount);
//             } else {
//                 pieces[color].position = Math.max(0, pieces[color].position - moveAmount);
//             }

//             // Update the board to reflect new positions
//             updatePiecePositions();
//         });
//     });

//     // Initial update to place pieces on the board
//     updatePiecePositions();
// });











// document.addEventListener("DOMContentLoaded", () => {
//     const numSquares = 100;
//     const board = document.querySelector('.square-container');
//     const pieces = {
//         red: { position: 0 },
//         blue: { position: 0 },
//         green: { position: 0 },
//         yellow: { position: 0 }
//     };

//     // Create 100 squares on the board
//     for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         board.appendChild(square);
//     }

//     // Update all piece positions on the board
//     function updatePiecePositions() {
//         const squares = document.querySelectorAll('.square');
//         squares.forEach((square, index) => {
//             // Remove any previous piece class
//             square.classList.remove('red-piece', 'blue-piece', 'green-piece', 'yellow-piece');

//             // Add piece class if the piece is on this square
//             Object.keys(pieces).forEach(color => {
//                 if (index === pieces[color].position) {
//                     square.classList.add(`${color}-piece`);
//                 }
//             });
//         });
//     }

//     // Handle button clicks
//     document.querySelectorAll('.move-btn').forEach(button => {
//         button.addEventListener('click', (e) => {
//             const color = e.target.dataset.color;
//             const direction = e.target.dataset.direction;
//             const moveAmount = 4;

//             // Update position based on direction
//             if (direction === 'plus') {
//                 pieces[color].position = Math.min(numSquares - 1, pieces[color].position + moveAmount);
//             } else {
//                 pieces[color].position = Math.max(0, pieces[color].position - moveAmount);
//             }

//             // Update the board to reflect new positions
//             updatePiecePositions();
//         });
//     });

//     // Initial update to place pieces on the board
//     updatePiecePositions();
// });













// document.addEventListener("DOMContentLoaded", () => {
//     const numSquares = 100;
//     const board = document.querySelector('.square-container');
//     const pieces = {
//         red: { position: 0, element: document.querySelector('.piece.red') },
//         blue: { position: 0, element: document.querySelector('.piece.blue') },
//         green: { position: 0, element: document.querySelector('.piece.green') },
//         yellow: { position: 0, element: document.querySelector('.piece.yellow') }
//     };

//     // Create 100 squares on the board
//     for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         board.appendChild(square);
//     }

//     // Update piece position on the board
//     function updatePiecePosition(color) {
//         const piece = pieces[color];
//         const squares = document.querySelectorAll('.square');
//         squares.forEach((square, index) => {
//             if (index === piece.position) {
//                 piece.element.style.transform = `translate(${index % 10 * 30}px, ${Math.floor(index / 10) * 30}px)`;
//             }
//         });
//     }

//     // Handle button clicks
//     document.querySelectorAll('.move-btn').forEach(button => {
//         button.addEventListener('click', (e) => {
//             const color = e.target.dataset.color;
//             const direction = e.target.dataset.direction;
//             const piece = pieces[color];
//             const moveAmount = direction === 'plus' ? 1 : 2;

//             if (direction === 'plus') {
//                 piece.position = Math.min(numSquares - 1, piece.position + moveAmount);
//             } else {
//                 piece.position = Math.max(0, piece.position - moveAmount);
//             }

//             updatePiecePosition(color);
//         });
//     });

//     // Initial update
//     for (let color in pieces) {
//         updatePiecePosition(color);
//     }
// });







// document.addEventListener("DOMContentLoaded", () => {
//     const numSquares = 100;
//     const board = document.querySelector('.square-container');
//     const pieces = {
//         red: { position: 0, element: document.querySelector('.piece.red') },
//         blue: { position: 0, element: document.querySelector('.piece.blue') },
//         green: { position: 0, element: document.querySelector('.piece.green') },
//         yellow: { position: 0, element: document.querySelector('.piece.yellow') }
//     };

//     // Create 100 squares on the board
//     for (let i = 0; i < numSquares; i++) {
//         const square = document.createElement('div');
//         square.classList.add('square');
//         board.appendChild(square);
//     }

//     // Update piece position on the board
//     function updatePiecePosition(color) {
//         const piece = pieces[color];
//         const squares = document.querySelectorAll('.square');
//         squares.forEach((square, index) => {
//             if (index === piece.position) {
//                 square.style.backgroundColor = color;
//             } else {
//                 square.style.backgroundColor = '#f0f0f0';
//             }
//         });
//     }

//     // Handle button clicks
//     document.querySelectorAll('.move-btn').forEach(button => {
//         button.addEventListener('click', (e) => {
//             const color = e.target.dataset.color;
//             const direction = e.target.dataset.direction;
//             const piece = pieces[color];
//             const moveAmount = 4;

//             if (direction === 'plus') {
//                 piece.position = Math.min(numSquares - 1, piece.position + moveAmount);
//             } else {
//                 piece.position = Math.max(0, piece.position - moveAmount);
//             }

//             updatePiecePosition(color);
//         });
//     });

//     // Initial update
//     for (let color in pieces) {
//         updatePiecePosition(color);
//     }
// });
