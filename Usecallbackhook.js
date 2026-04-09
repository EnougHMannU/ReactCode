import React, { useState, useCallback } from "react";

export default function Usecallbackhook () {

     const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []); // empty dependency

  console.log("App parent rendered");
    return(
         <>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log("Child Rendered");
  return <button onClick={onClick}>Child Button</button>;
});