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
    <div className="bg-teal-800 min-h-screen text-white flex justify-between">
      
       <Create todos={todos} settodos={settodos}/>
       <Read todos={todos} settodos={settodos}/>
    </div>
  )
}

export default App