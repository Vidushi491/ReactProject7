import { toast } from 'react-toastify';
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const DeleteHandler = (id) =>{
    const filtertodos = todos.filter((todo) => todo.id != id);
    settodos(filtertodos);
    toast.error('Todo Completed !')
  }

const printtodos = todos.map((todo)=> {
  return <li 
   key = {todo.id}
   className="flex justify-between items-center mb-5 p-2 bg-amber-200 text-teal-800 font-bold"
   >
    <span className="text-xl font-bold">{todo.title}</span>
    <button className="hover:scale-95 "
     onClick={() => DeleteHandler(todo.id)}>
      ✅
     </button>
    </li>
});
  return (
    <div className=" p-7 mx-5 my-7 ">
       <div className=" flex justify-between ">
        <div >
        <h1 className="font-extrabold text-6xl mb-10"> <span className="text-amber-200">Pending</span> ToDo's</h1>
          <ol >{printtodos}</ol>
        </div>
       </div>
    </div>
  )
}

export default Read