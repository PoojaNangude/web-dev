import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

import HelloWorld from "./components/a6/HelloWorld";
import A6BuildExplore from './components/a6/Build/ExploreScreen/Explore';
import A6BuildHome from './components/a6/Build/HomeScreen/Home';
import A6Practice from './components/a6/Practice';
import A6HelloWorld from './components/a6/HelloWorld';


import A7Practice from "./components/a7/Practice";
import A7Build from "./components/a7/Build";
import A7Home from "./components/a7/Build/HomeScreen/Home";
import A7Explore from "./components/a7/Build/ExploreScreen/Explore";
import A7ProfileScreen from "./components/a7/Build/ProfileScreen";
import A7EditProfileScreen from "./components/a7/Build/EditProfileScreen";

import A8Practice from "./components/a8/Practice";
import A8Build from "./components/a8/Build";
import A8Home from "./components/a8/Build/HomeScreen/Home";
import A8Explore from "./components/a8/Build/ExploreScreen/Explore";
import A8ProfileScreen from "./components/a8/Build/ProfileScreen";
import A8EditProfileScreen from "./components/a8/Build/EditProfileScreen";

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

            {/*Assignment 6 routes*/}
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

            {/*Assignment 7 routes*/}
            <Route path="/a7/hello" exact={true}>
                <HelloWorld/>
            </Route>

            <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                <h1>Assignment 6: REACT</h1>
                <A6Practice/>

                <hr></hr>
                <h1>Assignment 7: REDUX</h1>
                <A7Practice/>

                <hr></hr>
                <h1>Assignment 8: NODE</h1>
                <A8Practice/>
            </Route>

            <Route path="/a7/twitter" exact={true}>
                <A7Build/>
            </Route>

            <Route path="/a7/twitter/home" exact={true}>
                <A7Home/>
            </Route>

            <Route path="/a7/twitter/explore" exact={true}>
                <A7Explore/>
            </Route>

            <Route path="/a7/twitter/profile" exact={true}>
                <A7ProfileScreen/>
            </Route>

            <Route path="/a7/twitter/editprofile" exact={true}>
                   <A7EditProfileScreen/>
            </Route>

            {/*Assignment 8 routes*/}
            <Route path="/a8/practice" exact={true}>
                <A8Practice/>
            </Route>

            <Route path="/a8/twitter" exact={true}>
                <A8Build/>
            </Route>

            <Route path="/a8/twitter/home" exact={true}>
                <A8Home/>
            </Route>

            <Route path="/a8/twitter/explore" exact={true}>
                <A8Explore/>
            </Route>

            <Route path="/a8/twitter/profile" exact={true}>
                <A8ProfileScreen/>
            </Route>

            <Route path="/a8/twitter/editprofile" exact={true}>
                <A8EditProfileScreen/>
            </Route>

        </div>
      </BrowserRouter>
      </Provider>
//    <div className="App">
//    </div>
  );
}

export default App;
