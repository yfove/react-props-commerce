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

      <Product name="kindle" description="e reader" price={159.99} />

      <Product
        name="iPhone"
        description="your favourite phone"
        price={1559.99}
      />

      <Product name="Macbook" description="All new M1" price={2559.99} />
    </div>
  );
}

export default App;
