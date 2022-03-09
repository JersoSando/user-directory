import React from 'react'

function CardButtons({buttonText, handleClick}) {
  return (
    <div>
        <button onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

export default CardButtons