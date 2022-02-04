import  { useState } from 'react';

export default function DraggableElement({ consoleMsg, Height,Width,X_Axis,Y_Axis}) {


  let leftc=`${X_Axis}em`;
  let topc=`${Y_Axis}em`;
  const itemStyle={
    left: leftc,
    top: topc,
    height:`${Height}%`,
    width:`${Width}%`,
  }

  const[diffX,setDiffX]=useState(0);
  const[diffY,setDiffY]=useState(0);
  const[dragging,setDragging]=useState(false);
  const[style,setStyle]=useState(itemStyle);

  function _dragStart(e){
    setDiffX(e.screenX-e.currentTarget.getBoundingClientRect().left);
    setDiffY(e.screenY-e.currentTarget.getBoundingClientRect().top);
    setDragging(true);
  }

  function _dragging(e){
    if(dragging){
      let left=e.screenX-diffX;
      let top=e.screenY-diffY;
      setStyle({
        ...itemStyle,
        left: left,
        top: top
      })
    }
  }

  function _dragEnd(){
    setDragging(false);
  }
   
  return (
  //  <div className="movable" style={style} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
  //   {console.log(consoleMsg)}
  //   </div>
  style,
  _dragStart,
  _dragging,
  _dragEnd
  )
}