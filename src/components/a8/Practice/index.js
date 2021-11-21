import React from "react";
import APIExamples from "./APIExamples";

import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a8/twitter/home">Build</Link>
            <APIExamples/>
            <ReduxExamples/>
        </div>
    )
};

export default Practice;