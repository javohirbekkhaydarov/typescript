import React, { useState, useRef, useEffect } from "react";

const users = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alexandro",
    age: 23,
  },
  {
    name: "Michael",
    age: 25,
  },
];
const UseSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [user, setUser] = useState<
    | {
        name: string;
        age: number;
      }
    | undefined
  >();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };
  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current?.focus();
  });

  return (
    <div>
      UseSearch
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find user</button>
      <div>
        Hello everbody my name is {user && user.name}
        <br />
        I'm {user && user.age} years old
      </div>
    </div>
  );
};

export default UseSearch;
