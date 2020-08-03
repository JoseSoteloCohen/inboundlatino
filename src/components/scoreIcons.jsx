import React from "react"


const ScoreIcons = ({ score }) => {

  const items = []
  const scoreLenght = score;

  for (let i = 0; i < scoreLenght; i++) {
    items.push(<span key={i} role="img" aria-label="score with fire emoji">🔥</span>)
  }

  return (
    <div>
      <div id="fireScores">{items}</div>
    </div>

  )
}

export default ScoreIcons
