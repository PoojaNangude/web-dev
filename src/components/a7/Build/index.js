import React from "react";
import {Link, Route} from "react-router-dom";
import Home from './HomeScreen/Home';
import Explore from './ExploreScreen/Explore';
import ProfileScreen from "./ProfileScreen";
import who from "../../../reducers/who";
import post from "../../../reducers/post";
import profile from "../../../reducers/profile";
import {combineReducers ,createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({tweets: who, post, profile});
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a7/twitter/home"]}
                       exact={true} component={Home}/>
                <Route path="/a7/twitter/explore"
                        exact={true} component={Explore}/>
                <Route path="/a7/twitter/profile"
                       exact={true} component={ProfileScreen}/>
            </div>
        </Provider>
    )
}

export default Build;