import Create from "./Create";
import Read from "./Read";
import { useState } from "react"
const App = () => {
  
 const [todos, settodos] = useState([
      {
        id: 1,
        title: "Today's Task are",
        isCompleted: true 
        },
    ]);

  return (
    <>
      
       <Create todos={todos} settodos={settodos}/>
       <Read todos={todos} settodos={settodos}/>
    </>
  )
}

export default App