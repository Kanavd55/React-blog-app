import './index.css';

import { Switch,Route } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";


function App() {
  return (
    <div className="container">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/post/:postId" component={PostDetail}/>
      <Route exact path="/create-post" component={CreatePost}/>
      </Switch>
    </div>
  );
}

export default App;
