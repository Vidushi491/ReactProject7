
const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

const printtodos = todos.map((todo)=> {
  return <li key = {todo.id}>{todo.title}</li>
});

 

  return (
    <>
      <hr />
      <br />
      <br/>
       <h1> Pending ToDo's</h1>
       <br/>
       <br/>
      <ol>{printtodos}</ol>
    </>
  )
}

export default Read