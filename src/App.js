import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import A6BuildExplore from './components/a6/Build/ExploreScreen/Explore';
import A6BuildHome from './components/a6/Build/HomeScreen/Home';
import A6Practice from './components/a6/Practice';
import A6HelloWorld from './components/a6/HelloWorld';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/a7/Build/HomeScreen/Home";
import Explore from "./components/a7/Build/ExploreScreen/Explore";
import ProfileScreen from "./components/a7/Build/ProfileScreen";
import EditProfileScreen from "./components/a7/Build/EditProfileScreen";
import who from "./reducers/who";
import tweets from "./reducers/tweets";
import profile from "./reducers/profile";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: tweets, who, profile})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="container">

            <Route path="/a7/hello" exact={true}>
                <HelloWorld/>
            </Route>

            <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                <h1>Assignment 6: REACT</h1>
                <A6Practice/>

                <hr></hr>
                <h1>Assignment 7: REDUX</h1>
                <Practice/>
            </Route>

            <Route path="/a7/twitter" exact={true}>
                <Build/>
            </Route>

            <Route path="/a7/twitter/home" exact={true}>
                <Home/>
            </Route>

            <Route path="/a7/twitter/explore" exact={true}>
                <Explore/>
            </Route>

            <Route path="/a7/twitter/profile" exact={true}>
                <ProfileScreen/>
            </Route>

            <Route path="/a7/twitter/editprofile" exact={true}>
                   <EditProfileScreen/>
            </Route>

            <Route path="/a6/hello" exact={true}>
                <A6HelloWorld/>
            </Route>

            <Route path="/a6/practice" exact={true}>
                <A6Practice/>
            </Route>

            <Route path="/a6/twitter/explore" exact={true}>
                <A6BuildExplore/>
            </Route>

            <Route path="/a6/twitter/home" exact={true}>
                <A6BuildHome/>
            </Route>


        </div>
      </BrowserRouter>
      </Provider>
//    <div className="App">
//    </div>
  );
}

export default App;
