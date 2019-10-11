import React, { Component } from 'react';


import './App.css';
import Routes from './routes'

export default class extends Component{
  render() {
    return(
      <div className="container">
        <div className="content">
          < Routes />      
        </div>        
      </div>
    )
  }  
}
