import React from "react";

const EventComponent = () => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement> | undefined) => {
    console.log(event?.target.value);
  };
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('dragged');
    
  }
  return (
    <div>
      EventComponent
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart} >
        Drag or drop me
      </div>
    </div> 
  );
};

export default EventComponent;
