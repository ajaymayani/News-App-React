import './App.css';
import Header from './components/Header';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import React from 'react';

class App extends React.Component {
  pageSize = 9;
  render() {
    return (

      <Router>
        <Header />

        <Routes>
          <Route exact path='/business' element={<News keys="business" pageSize={this.pageSize} category="business" />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" />}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={this.pageSize} category="health" />}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={this.pageSize} category="science" />}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={this.pageSize} category="sports" />}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={this.pageSize} category="technology" />}></Route>
          <Route exact path='/' element={<News key="general" pageSize={this.pageSize} category="general" />}></Route>

        </Routes>

      </Router>
    )
  };
}

export default App;
