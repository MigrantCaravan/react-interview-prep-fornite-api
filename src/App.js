import Bar from "./Bar";
import Shop from "./Shop";
import About from "./About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Router>
      <Bar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" exact element={<About />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

// import React from 'react'

// export default function Home() {
//   return (
//     <div>

//     </div>
//   )
// }

export default App;
