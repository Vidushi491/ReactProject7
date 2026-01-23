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
  <div className="bg-teal-800 h-full  text-white w-[60%] ">
  <h1 className="font-bold text-4xl p-10 px-10 py-10 ">
     To <span className="text-amber-200">Do's </span>
      Lists </h1>
      <form onSubmit={SubmitHandler}>
        <input
        className="border-2px rounded mt-20px"
         onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Write Here" />
         <br/>
        <button className="mt-30px"> Create To Do's </button>
      </form>
  </div>
 )
}

export default Create