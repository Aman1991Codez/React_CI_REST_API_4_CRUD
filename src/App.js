import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from './components/AddProduct';
import EditProduct from "./components/EditProduct";
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
function App() {
  return (
    <Router>
 <div className="container">
  <Switch>
    <Route exact path="/">
    <ProductList />
   </Route>
    <Route exact path="/add">
    <AddProduct />
    </Route>
    <Route exact path="/edit/:id">
    <EditProduct />
    </Route>
   
  </Switch>
   </div>
    </Router>
);
  }
export default App;
