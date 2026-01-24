
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const DeleteHandler = (id) =>{
    const filtertodos = todos.filter((todo) => todo.id != id);
    settodos(filtertodos);
  }

const printtodos = todos.map((todo)=> {
  return <li className="flex justify-between"
   key = {todo.id}>
    {todo.title}
    <span className="hover:scale-95 " onClick={() => DeleteHandler(todo.id)}>✅</span>
    </li>
});
  return (
    <div className=" p-7 mx-5 my-7 ">
       <div className=" flex justify-between gap-6">
        <div >
        <h1 className="font-extrabold text-6xl "> <span className="text-amber-200">Pending</span> ToDo's</h1>
        
          <ol className="text-lg text-teal-800 font-bold mt-7 bg-amber-200 shadow-lg px-1 ">{printtodos}</ol>
        
      

        </div>
       </div>
    </div>
  )
}

export default Read