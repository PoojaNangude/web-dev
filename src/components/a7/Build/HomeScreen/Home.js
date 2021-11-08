import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from '../NavigationSidebar';
import PostSummaryList from '../PostSummaryList';
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";

const Home = () => {
    return(
        <div>
            <div className="row pt-3">
                <div className="col-3 col-lg-2 col-xl-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-9 col-lg-6 col-xl-6">
                    {/*<HomeScreen/>*/}
                    <WhatsHappening/>
                    <TweetList/>
                </div>
                <div className="col-lg-4 col-xl-4 d-none d-lg-block ps-4">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>

            {/*<Link to="/a6/hello">*/}
            {/*    Hello*/}
            {/*</Link> |*/}
            <Link to="/a7/practice">
                Practice
            </Link>
        </div>
    )
}

export default Home;