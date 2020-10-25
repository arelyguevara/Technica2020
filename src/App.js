// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Halloween Party
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



  
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import movie from './components/movie-vault';
import scare from './components/scare-level';


class App extends React.Component {
  render(){
    return (
      <div className="main">
        <Router>
          <div className="">
            <div className="">
              <div>
                <p className="title">Halloween Party</p>
              </div>
            </div>

            {/* displays the nav bar */}
            <div id="nav">
              {/* link id is what changes the components on the page */}
              <Link id="home" to="/">Home</Link> {' '}
              <Link id="other-links" to='/movie-vault' >Movie Vault</Link> {' '}
              <Link id="other-links" to='/scare-level'>Scare Level</Link> {' '}
            </div> 
          </div>
            <Switch>
              {/* tells where the component is within the app */}
              <Route exact path="/" component={Home}/>
              <Route path="/movie-vault" component={movie}/>
              <Route path="/scare-level" component={scare}/>
            </Switch>
        </Router>

        

        
       
      </div>
    );
  };
};




export default App;
