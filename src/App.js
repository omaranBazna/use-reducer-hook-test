import "./App.css";
import Input from "./components/Input";
import Item from "./components/Item";
function App() {
  const items = ["milk", "chocalete", "banana"];
  return (
    <div className="app">
      <div className="container">
        <Input></Input>
      </div>
    </div>
  );
}

export default App;
