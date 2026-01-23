
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const DeleteHandler = (id) =>{
    const filtertodos = todos.filter((todo) => todo.id != id);
    settodos(filtertodos);
  }

const printtodos = todos.map((todo)=> {
  return <li
   key = {todo.id}>
    {todo.title}
    <span onClick={() => DeleteHandler(todo.id)}>    ❌</span>
    </li>
});

 

  return (
    <>
      <hr />
      <br />
      <br/>
       <h1> Pending ToDo's</h1>
      <ol>{printtodos}</ol>
    </>
  )
}

export default Read