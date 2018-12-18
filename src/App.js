import React, { Component } from 'react';
import { Table } from "antd";
import "antd/dist/antd.css";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="timeline-container">
              <div className="timeline-liner">
                 <div className="time-line-content">
                     <span></span>
                     <div className="time-line-box">
                        Content
                     </div>
                 </div>
                 <div className="time-line-content">
                     <span></span>
                     <div className="time-line-box">
                        Content
                     </div>
                 </div>
                 <div className="time-line-content">
                     <span></span>
                     <div className="time-line-box">
                        Content
                     </div>
                 </div>
                 <div className="time-line-content">
                     <span></span>
                     <div className="time-line-box">
                        Content
                     </div>
                 </div>
                 <div className="time-line-content">
                     <span></span>
                     <div className="time-line-box">
                        Content
                     </div>
                 </div>
                 <div className="time-line-content">
                     <span></span>
                     <div className="time-line-box">
                        Content
                     </div>
                 </div>
              </div>
          </div>

      </div>
    );
  }
}

export default App;
