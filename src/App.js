import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import DetailMovie from "./pages/detail-movie/DetailMovie";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id"> 
          <DetailMovie />  
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
