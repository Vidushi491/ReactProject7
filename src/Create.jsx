import { nanoid } from "nanoid"
import { Fragment, useState } from "react"

const Create = (props) => {
const todos =props.todos;
const settodos =props.settodos;

  const [title, setTitle] = useState("")

  const SubmitHandler = (e) => {
  e.preventDefault()

  const newTitle = {
    id: nanoid(),
    title: title,
    isCompleted: false ,
  };

  
  const copytodo = [...todos]
  copytodo.push(newTitle)
  settodos(copytodo)
  setTitle("")
};
 return(
  <>
  <h1> To Do's List </h1>
      <form onSubmit={SubmitHandler}>
        <br />
        <input onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Write Here" />
        <br />
        <br />
        <button > Create To Do's </button>
        <br />
        <br />
      </form>
  </>
 )
}

export default Create