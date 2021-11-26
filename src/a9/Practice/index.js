import React from "react";
import APIExamples from "./APIExamples";

import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import Movies from "./Movies";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Link to="/a9/twitter/home">Build</Link>
            <Movies/>
            {/*<APIExamples/>*/}
            {/*<ReduxExamples/>*/}
        </div>
    )
};

export default Practice;