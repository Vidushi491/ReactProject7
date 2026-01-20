import { nanoid } from "nanoid"
import Create from "./Create"
import Read from "./Read"


const App = () => {
  
  const [todos, settodos] = useState([
    {id: 1 , title: "Today's Task are" isCompleted: true },
  ]);

  return (
    <div>
      <Create/>
      <Read/>
    </div>
  )
}

export default App