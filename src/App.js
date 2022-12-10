import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(1);

  const double = () => {
    setNumber(number * 2);
  };

  return (
    <>
      <div>{number}</div>
      <button className="btn btn-primary" onClick={double}>
        Submit
      </button>
    </>
  );
}

export default App;
