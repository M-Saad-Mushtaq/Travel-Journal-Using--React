import './App.css';
import Header from "./components/header";
import Main from "./components/main";
import data from './data';

const mainData = data.map( (object) => {
  return <Main 
  key={object.id}
  obj = {object}
  />
} )

function App() {
  return (
    <div className = "app">
      <Header />
      {mainData}
    </div>
  );
}

export default App;
