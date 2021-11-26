import React from "react";
import {Link, Route} from "react-router-dom";
import Practice from "./Practice";
import Build from "./Build";

const A9 = () => {
    return(
        <div>
            <Route path="/a9/practice" exact={true}>
                <Practice/>
            </Route>
            <Route path="/a9/twitter">
                <Build/>
            </Route>

            <Practice/>
            <Link to="/a9/twitter">Build</Link>
        </div>
    )
}

export default A9;