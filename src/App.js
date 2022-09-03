import './App.css';
import Header from './components/Header';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import React from 'react';
import LoadingBar from 'react-top-loading-bar'

class App extends React.Component {
  pageSize = 5;

 state = {
  progress : 0
 }

 setProgress=(progress)=>
 {
  this.setState({progress:progress})
 }

  render() {
    return (

      <Router>
        <Header />
        <LoadingBar
          color='blue'
          progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/business'  element={<News setProgress={this.setProgress} keys="business" pageSize={this.pageSize} category="business" />}></Route>
          <Route exact path='/entertainment'  element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" />}></Route>
          <Route exact path='/health'  element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" />}></Route>
          <Route exact path='/science'  element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" />}></Route>
          <Route exact path='/sports'  element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" />}></Route>
          <Route exact path='/technology'  element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" />}></Route>
          <Route exact path='/'  element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} category="general" />}></Route>

        </Routes>
      </Router>
    )
  };
}

export default App;
