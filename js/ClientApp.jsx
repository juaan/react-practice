import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

// Old Version
// var MyTitle = function (props) {
//   return (
//     <div>
//       <h1>{props.title.toUpperCase()}</h1>
//     </div>
//   )
// };



// //replace MyFirstComponent's body
// const MyFirstComponent = function() {
//   return (
//     <div id="first-component">
//       <MyTitle title="Game of Thrones" />
//       <MyTitle title="Stranger Things" />
//       <MyTitle title="Breaking Bad" />
//     </div>
//   );
// };


// render(
//   <MyFirstComponent />, document.getElementById("app")
// );

const NotFound = () => <h1>Not Found 404</h1>

const App = () =>  (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />    
        <Route path="/search" component={Search} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);


render(<App />, document.getElementById("app"));