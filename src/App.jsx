
const App = () => {

const [todos, setTodos] = useState("")
 submitHandler

  return (
    <div>
     <h1>Complete Task</h1>
     <form >
      <input type='text' placeholder="title"/>
      <br/>
      <br/>
      <button onClick={submitHandler}>Completed</button>
      </form>
    </div>
  )
}

export default App