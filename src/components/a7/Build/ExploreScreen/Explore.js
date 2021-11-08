import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from '../NavigationSidebar';
import WhoToFollowList from '../WhoToFollowList';
import ExploreScreen from "../ExploreScreen";
import who from "../../../../reducers/who";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(who);

const Explore = () => {

    return(
        <div>
            <Provider store={store}>
            <div className="row pt-3">
                <div className="col-3 col-lg-2 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-9 col-lg-6 col-xl-6">
                    <ExploreScreen/>
                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
                    <WhoToFollowList/>
                </div>
            </div>

            {/*<Link to="/a6/hello">*/}
            {/*    Hello*/}
            {/*</Link> |*/}
            <Link to="/a7/practice">
                Practice
            </Link>
            </Provider>
        </div>
    )
}

export default Explore;