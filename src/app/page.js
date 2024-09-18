"use client";

import { useState } from "react";

export default function Home() {
  //let score = 0;
  const [score, setScore] = useState(1);

  // Deconstructing arrays:
  // 1. the variable names used for the items don't matter
  // 2. the order does matter

  function addToScore() {
    // score++;
    // You can set a new value by passing the new value to the setter function
    // setScore(score + 1);

    // You can set a new value by passing a funciton to the sett functon
    setScore(function (value) {
      return value + 1;
    });
  }

  function doublePoints() {
    addToScore();
    addToScore();
  }

  return (
    <main>
      <h1>Home</h1>
      <div>
        <button onClick={addToScore}>Add 1</button>
        <button onClick={doublePoints}>Add 2</button>
        <p>Score: {score}</p>
      </div>
    </main>
  );
}
