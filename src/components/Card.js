import React from 'react'

const Card = ({ title, text,id,setCardToShow }) => {
	const handleOpenCard = () =>{
		setCardToShow(id)
	}

	return (
		<div style={{border:"2px solid red",borderRadius:"4px",margin:"1rem",
		padding:"0.5rem"}}>
		<div>{title}</div>
		<p>{text.substr(0, 10)}....</p>
		<button onClick={handleOpenCard}>OPEN</button>
		</div>
	)
}

export default Card