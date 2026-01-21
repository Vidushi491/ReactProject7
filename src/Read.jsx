import { useState } from "react"
const Read = () => {

const [todos, settodos] = useState([
      {
        id: 1,
        title: "Today's Task are",
        isCompleted: true 
        },
    ]);

const printtodos = todos.map(todo => {
  return <li key = {todo.id}>{todo.title}</li>
});
console.log(printtodos);

  return (
    <div>

      <hr/>
      <br/>
       <br/>
       <h1> Pending ToDo's</h1>
       <br/>
       <br/>
      <ol>{printtodos}</ol>
    </div>
  )
}

export default Read