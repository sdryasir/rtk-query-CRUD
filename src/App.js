import './App.css';

import { useGetAllTodosQuery } from './features/todos/todosApi';

function App() {

  const {data, error, isLoading} = useGetAllTodosQuery()

  console.log(data);

  if(isLoading) return <h1>Loading...</h1>
  if(error) return <h1>Something went wrong</h1>

  return (
    <div className="App">
      {
        data.map(d=>{
          return(
            <h2>{d.title}</h2>
          )
        })
      }
    </div>
  );
}

export default App;
