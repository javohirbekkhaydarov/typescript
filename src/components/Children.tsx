import React from "react";
interface ChildProps {
  color: string;
  onClick: () => void;
  name: string;
  age: number;
}
export const Children = ({ color, onClick , name , age }: ChildProps) => {
  return (
    <div>
      {color}

      <button onClick={onClick}> Click me</button>
      <span> {name}</span>
      <p> {age} </p>
    </div>
  );
};

export const Children2 = () => {
  return <div>this is children2</div>;
};
