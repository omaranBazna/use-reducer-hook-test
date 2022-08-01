import "./App.css";
import Input from "./components/Input";
import Item from "./components/Item";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";
function App() {

  const reducer=(state,action)=>{
     switch (action.type){
     case "add":
       return{
        ...state,
        items:state.items.concat([{name:action.payload ,id:uuid()}])
       }
     case "remove":
       return {
        ...state,
        items:state.items.filter((item)=>item.id !=action.payload.id)
       }
     default:
        return state
     }
  }
  const initState={
 items : [
    { name: "milk", id: uuid() },
    { name: "chocolate", id: uuid() },
    { name: "banana", id: uuid() },
  ];
}
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
