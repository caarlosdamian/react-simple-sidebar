import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'

function App() {
  return (
    <>
      <Router>
        <Sidebar/>
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/products" exact component={Products} />
          <Route path="/reports" exact component={Reports} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
