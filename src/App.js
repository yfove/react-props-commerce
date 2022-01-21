import React from "react";
import Product from "./Product";

function App() {
  return (
    <div>
      <h1>Hello world</h1>

      <Product
        name="amazon echo"
        description="your ai assistant"
        price={59.99}
      />
    </div>
  );
}

export default App;
