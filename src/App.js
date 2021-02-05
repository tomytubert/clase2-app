import './App.css';
import {data} from "./data"
import {Main} from "./views/Main/Main"

function App() {
  console.log("Data",{data})
  return (
    <>
    <Main {...data} /> 
    </>
  );
}

export default App;
