import React from 'react'

const TextWindow = ({content, cardToShow}) => {
	const data = content.filter((val) => val.id === cardToShow )
  return (
    <div>
	<h1>{data[0].userId}</h1>
	<p>{data[0].todo}</p>
    </div>
  )
}

export default TextWindow