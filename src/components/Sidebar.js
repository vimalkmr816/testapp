import React from 'react'
import Card from './Card'

const Sidebar = ({cardData,setCardToShow}) => {
  return (
    <div>
	<span>Sidebar</span>
{
	cardData.map((val,index)=>(

	<Card title={val.userId} text = {val.todo} key={index} id={val.id} setCardToShow={setCardToShow}/>

	))
}
    </div>
  )
}

export default Sidebar