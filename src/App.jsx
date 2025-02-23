import Product from "./Product"
import Home from "./Home"
import { BrowserRouter,Route,Routes,Link } from "react-router-dom"
function App() {
 
  return (
    <>
    <h1>App</h1>

    <BrowserRouter>
    <ul>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/product">Product</Link></li>

    </ul>
    

      <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
    
          
    </>
  )
}

export default App
