import React from 'react'

const Game1 = () => {
  return (
    <div>
      <main className="container">
        <div className='game-details'>
          <h1 className="game-title">Game 1</h1>
          <button className="add-to-cart">Add to Cart</button>
        </div>

        <div className="game-info-container">
          <div className="game-summary">
            <h2>Game 1 Summary</h2>
            <p>
              Body text for whatever you'd like to say. Add main takeaway points,
              quotes, anecdotes, or even a very short story.
            </p>
          </div>

          <div className="game-reviews">
            <h2>⭐⭐⭐⭐⭐</h2>
            <h3>Game 1 Reviews</h3>
            <p><strong>Genre:</strong> Fantasy</p>
            <p><strong>Tags:</strong> Turn-based, Roleplaying</p>
          </div>
          </div>
        <div className='space'></div>
      </main>
    </div>
  );
};  

export default Game1
