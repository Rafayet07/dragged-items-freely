import "./styles/index.scss";

import Item1 from "./Components/Item1";
import Item2 from "./Components/Item2";
import {useState} from "react";

const initial_State={
  data: {
    items: {
      movableItem: {
        totalItem: 2,
        itemList: {
          [`item-1`]: {
            h: 10,
            w: 20,
            x: 0,
            y: 0
          },
          [`item-2`]: {
            h: 10,
            w: 20,
            x: 40,
            y: 10
          }
        }
      }
    }
  }
}

function App() {

  const [items, ] = useState(initial_State);

  const {itemList}=items.data.items.movableItem;
  let item1,item2;
  item1=itemList["item-1"];
  item2=itemList["item-2"];
  
  return (
    <div className="container">

          <Item1 item={item1}/>    
         <Item2 item={item2} />  
          
    </div>
  );
}

export default App;
