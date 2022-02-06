import { useRef, useState } from 'react';

import classes from './BoardItem.module.css';

const BoardItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [offsetPosition, setOffsetPosition] = useState({});
  const ref = useRef();

  const itemData = props.itemData;
  const itemStyle = {
    width: itemData.w  + 'px',
    height: itemData.h + 'px',
    left: itemData.x + 'px',
    top: itemData.y + 'px',
  };
  const right = props.size.width - itemData.w;
  const button = props.size.height - itemData.h;

  const onMouseDownHandler = (event) => {
    setOffsetPosition({
      x: event.clientX - ref.current.offsetLeft,
      y: event.clientY - ref.current.offsetTop,
    });
    setIsActive(true);
  };

  const itemMoveHandler = (event) => {
    if (isActive) {
      let positionX = event.clientX - offsetPosition.x;
      let positionY = event.clientY - offsetPosition.y;
      if (positionX < 0) {
        positionX = 0;
      }
      if (positionY < 0) {
        positionY = 0;
      }
      if (positionX > right) {
        positionX = right;
      }
      if (positionY > button) {
        positionY = button;
      }

      ref.current.style.left = positionX + 'px';
      ref.current.style.top = positionY + 'px';
    }
  };

  const onMouseUpHandler = (event) => {
    setIsActive(false);

    const updateItem = {
      [`${itemData.title}`]: {
        h: ref.current.offsetHeight,
        w: ref.current.offsetWidth,
        x: ref.current.offsetLeft,
        y: ref.current.offsetTop,
      }
    }

    console.log(updateItem);
    props.updateItems(updateItem);
  };

  const onMouseOverHandler = (event) => {
    setIsActive(false);
  };

  return (
    <div
      ref={ref}
      id={itemData.title}
      className={`${classes['board-item']} ${
        isActive ? classes.applyZIndex : ''
      }`}
      onMouseDown={onMouseDownHandler}
      onMouseMove={itemMoveHandler}
      onMouseUp={onMouseUpHandler}
      onMouseOver={onMouseOverHandler}
      style={itemStyle}
    >
      {itemData.title}
    </div>
  );
};

export default BoardItem;
