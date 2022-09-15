import Sidebar from "./components/Sidebar";
import TextWindow from "./components/TextWindow";
// import { cardData } from "./components/cardData";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cardToShow, setCardToShow] = useState(1)
const [content, setContent] = useState()
  const fetchData =( ) => {
    axios.get("https://dummyjson.com/todos")
    .then(data=> {
      setContent(data.data.todos)
      console.log(data.data.todos)
    })

  }

  useEffect(() => {
    
  fetchData()

  }, [])
  
  if(!content)
  return null
  
  return (
    <div className="App">
    NOTES APP
  
    <div style={{display:"flex", width:"100vw",alignItems:"start",justifyContent:'space-evenly'}}>
      <Sidebar cardData={content} setCardToShow={setCardToShow}/>
      <TextWindow content={content} cardToShow={cardToShow}/>
    </div>
    </div>
  );
}

export default App;
