import { nanoid } from "nanoid"
import { useState } from "react"
const Create = () => {

  //  const [todos, settodos] = useState([
  //     {
  //       id: 1,
  //       title: "Today's Task are",
  //       isCompleted: true 
  //       },
  //   ]);

const [title, setTitle] = useState("")

const SubmitHandler = (e) => {
  e.preventDefault()

  const newTitle = {
    id: nanoid(),
    title: title,
    isCompleted: false ,
  }

  
  const copytodo = [...todos]
  copytodo.push(newTitle)
  settodos(copytodo)
  setTitle("")
};
// const printtodos = todos.map(todo => {
//   return <li key = {todo.id}>{todo.title}</li>
// });
// console.log(printtodos);

  return (
    <div>
         <h1> To Do's List </h1>
       <form  onSubmit={SubmitHandler}>
         <br/>
       <input onChange={(e) => setTitle(e.target.value)}
       value = {title}
       type="text"
        placeholder="Write Here"/>
       <br/>
       <br/>
       <button > Create To Do's </button>
       <br/>
       <br/>
       </form>
       <br/>
       <br/>
      

    </div>
  )
}

export default Create