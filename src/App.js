import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.css';
// import 'font-awesome/css/font-awesome.min.css';
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
import {BrowserRouter, Route} from 'react-router-dom';

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

        </div>
      </BrowserRouter>
//    <div className="App">
//    </div>
  );
}

export default App;
