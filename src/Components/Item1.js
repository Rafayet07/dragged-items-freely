// import DraggableElement from './DraggableElement';

import React from 'react';
import  { useState } from 'react';

export default function Item1({item}) {

  const Height=item.h;
  const Width=item.w;
  const X_Axis=item.x;
  const Y_Axis=item.y;
  let leftc=`${X_Axis}%`;
  let topc=`${Y_Axis}%`;
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
   <div  className="item-1" style={style} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
      <h3>Item 1</h3>
   {
     console.log("I am Item1")
     }
    
    </div>
  );
}
