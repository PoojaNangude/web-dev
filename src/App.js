import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import HomeScreen from "./components/a6/Build/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/a6/Build/HomeScreen/Home";
import Explore from "./components/a6/Build/ExploreScreen/Explore";


function App() {
  return (
      <BrowserRouter>
        <div className="container">

            <Route path="/a6/hello" exact={true}>
                <HelloWorld/>
            </Route>

            <Route path="/a6/practice" exact={true}>
                <Practice/>
            </Route>

            <Route path={["/", "/a6", "/a6/build"]} exact={true}>
                <Build/>
            </Route>

            <Route path="/a6/twitter/home" exact={true}>
                <Home/>
                {/*<HomeScreen/>*/}
            </Route>

            <Route path="/a6/twitter/explore" exact={true}>
                <Explore/>
                {/*<ExploreScreen/>*/}
            </Route>

        </div>
      </BrowserRouter>
//    <div className="App">
//    </div>
  );
}

export default App;
