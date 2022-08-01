import "./App.css";
import Input from "./components/Input";
import Item from "./components/Item";
function App() {
  const items = ["milk", "chocalete", "banana"];
  return (
    <div className="app">
      <div className="container">
        <Input></Input>

        {items.map((item, index) => {
          return <Item key={index} text={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
