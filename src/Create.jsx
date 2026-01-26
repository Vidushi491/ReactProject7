import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const SubmitHandler = (data) => {
    data.isCompleted = false,
      data.id = nanoid()

    const copytodo = [...todos]
    copytodo.push(data)
    settodos(copytodo)

    toast.success(" Todo Created !")

    reset()

  };



  return (
    <div className="p-7 mx-5 my-7 ">

      <h1 className="font-extrabold text-6xl ">
        To <span className="text-amber-200">Do's </span>
        Lists 
      </h1>

      <form onSubmit={handleSubmit(SubmitHandler)}>

        <input
          {...register("title", {
            required: "Title Can Not Be Empty"
          })}

          className="border border-teal-800 outline-0   w-full  mt-10 rounded text-4xl underline"
          type="text"
          placeholder="Write Here" />

        <small className="font-bold text-red-500 text-xl"> {errors?.title?.message}</small>
        <br />
        <button className="text-teal-800 text-xl px-2 py-2.5 font-bold bg-amber-200 mt-10 hover:scale-95 transition"> Create ToDo's
        </button>
      </form>
    </div>
  )
}

export default Create