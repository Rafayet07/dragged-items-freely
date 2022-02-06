import Board from './components/Board';
import { useState } from 'react';

const DUMMY_DATA = {
  items: {
    movableItem: {
      totalItem: 2,
      itemList: {
        [`item-1`]: {
          h: 10*16,
          w: 10*16,
          x: 5*16,
          y: 5*16,
        },
        [`item-2`]: {
          h: 10*16,
          w: 10*16,
          x: 20*16,
          y: 5*16,
        },
      },
    },
  },
};

function App() {
  const [items, setItems] = useState({
    data: DUMMY_DATA,
  });

  const itemList = items.data.items.movableItem.itemList;

  const updateItems = (updateItem) => {

    setItems((preItems) => {
      
      let updatedItems = { ...preItems };

      let itemList = updatedItems.data.items.movableItem.itemList;

      const itemKey = Object.keys(updateItem)[0];

      itemList[itemKey] = updateItem[itemKey];

      return updatedItems;
    });
  };

  return (
    <>
      <Board items={itemList} updateItems={updateItems} />
    </>
  );
}

export default App;
