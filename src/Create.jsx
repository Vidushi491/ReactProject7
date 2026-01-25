import { nanoid } from "nanoid"
import { useForm } from "react-hook-form";

const Create = (props) => {
const todos =props.todos;
const settodos =props.settodos;
 const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const SubmitHandler = (data) => {
    data.isCompleted = false ,
    data.id = nanoid()

   const copytodo = [...todos]
  copytodo.push(data)
  settodos(copytodo)
  reset()

};



 return(
  <div className="p-7 mx-5 my-7 ">
  <h1 className="font-extrabold text-6xl ">
     To <span className="text-amber-200">Do's </span>
      Lists </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <input
        {...register("title",{
          required: "title can not be empty"
        })}
        className="border border-teal-800 outline-0 w-full  mt-10 rounded text-4xl underline"
          type="text"
          placeholder="Write Here" />
        <button className="text-teal-800 text-xl px-2 py-2.5 font-bold bg-amber-200 mt-10 hover:scale-95 transition"> Create ToDo's </button>
      </form>
  </div>
 )
}

export default Create