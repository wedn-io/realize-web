import {useState} from 'react';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Container from '@mui/material/Container';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    
    if(todo === ""){
      return;
    }

    setTodo("");
    setTodos((currentArray) => [todo, ...currentArray]);
    
  };

  //console.log(todos);

  const onClick = () => {

  };

  
  
  return (
    // <Container fixed>
    //   <ButtonGroup variant="contained" aria-label="outlined primary button group">
    //     <Button>TEXT</Button>
    //     <Button>TEXT</Button>
    //   </ButtonGroup>
    // </Container>
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder="TODOLIST"
          onChange={onChange}
          value={todo}
        />
        <button onClick={onClick}>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
