
import './App.css';
import logo from './logo.svg';
import React, { useState } from 'react'
import NavBar from './Components/NavBar'
import News from './Components/News';
import NewsItem from './Components/NewsItem';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 12;
  const country = 'us'
  const [progress, setProgress] = useState(0);
  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          height={10}
          width={10}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} key='general' pageSize={pageSize} country={country} category='general' /></Route>
          <Route exact path="/business"><News setProgress={setProgress} key='business' pageSize={pageSize} country={country} category='business' /></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key='entertainment' pageSize={pageSize} country={country} category='entertainment' /></Route>
          <Route exact path="/general"><News setProgress={setProgress} key='general' pageSize={pageSize} country={country} category='general' /></Route>
          <Route exact path="/health"><News setProgress={setProgress} key='health' pageSize={pageSize} country={country} category='health' /></Route>
          <Route exact path="/science"><News setProgress={setProgress} key='science' pageSize={pageSize} country={country} category='science' /></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key='sports' pageSize={pageSize} country={country} category='sports' /></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key='technology' pageSize={pageSize} country={country} category='technology' /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;

//This is the Dividing line between Learning and Pratice Section

// import React, { Component } from 'react'
// import PNavBar from './Practice/PNavBar'
// import PNews from './Practice/PNews'
// import PNewsItem from './Practice/PNewsItem'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <PNavBar item1={"Monk News"} item2={"Home"} item3={"Now"}/>
//         <PNews pageSize = {12} />
//       </div>
//     )
//   }
// }

// Creating News App using Function based Component

// import './App.css';
// import logo from './logo.svg';
// import React, { Component } from 'react'
// import FNavBar from './Using_Hook_Function/FNavBar'
// import FNews from './Using_Hook_Function/FNews';
// import FNewsItem from './Using_Hook_Function/FNewsItem';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

// export default class App extends Component {
//   pageSize = 12;
//   country = 'us'
//   state = {
//     progress: 0
//   }<FNews
//   setProgress = (progress)=>{
//     setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//           <FNavBar />
//           <LoadingBar
//           height={10}
//           width={10}
//             color='#f11946'
//             progress={state.progress}            
//           />
//           <Switch>
//             <Route exact path="/"><FNews setProgress = {setProgress} key='general' pageSize={pageSize} country={country} category='general' /></Route>
//             <Route exact path="/business"><FNews setProgress = {setProgress} key='business' pageSize={pageSize} country={country} category='business' /></Route>
//             <Route exact path="/entertainment"><FNews setProgress = {setProgress} key='entertainment' pageSize={pageSize} country={country} category='entertainment' /></Route>
//             <Route exact path="/general"><FNews setProgress = {setProgress} key='general' pageSize={pageSize} country={country} category='general' /></Route>
//             <Route exact path="/health"><FNews setProgress = {setProgress} key='health' pageSize={pageSize} country={country} category='health' /></Route>
//             <Route exact path="/science"><FNews setProgress = {setProgress} key='science' pageSize={pageSize} country={country} category='science' /></Route>
//             <Route exact path="/sports"><FNews setProgress = {setProgress} key='sports' pageSize={pageSize} country={country} category='sports' /></Route>
//             <Route exact path="/technology"><FNews setProgress = {setProgress} key='technology' pageSize={pageSize} country={country} category='technology' /></Route>
//           </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
