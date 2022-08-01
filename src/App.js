import "./App.css";
import Input from "./components/Input";
import Item from "./components/Item";
import { v4 as uuid } from "uuid";
function App() {
  const items = [
    { name: "milk", id: uuid() },
    { name: "chocolate", id: uuid() },
    { name: "banana", id: uuid() },
  ];
  return (
    <div className="app">
      <div className="container">
        <Input></Input>

        <div className="items">
          {items.map((item) => {
            return <Item key={item.id} text={item.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
