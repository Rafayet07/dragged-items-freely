import { useState, useRef, useEffect } from 'react';
import BoardItem from './BoardItem';
import classes from './Board.module.css';

const Board = (props) => {
  const [boardSize, setBoardSize] = useState({});
  const ref = useRef();
  
  useEffect(() => {
    setBoardSize({
      height: ref.current.offsetHeight,
      width: ref.current.offsetWidth,
    });
  }, []);

  const boardItems = Object.entries(props.items).map((item) => {
    const itemData = { ...item[1], title: item[0] };
    return <BoardItem key={item[0]} itemData={itemData} size={boardSize} updateItems={props.updateItems}/>;
  });

  return (
    <div ref={ref} className={classes.board}>
      {boardItems}
    </div>
  );
};

export default Board;
