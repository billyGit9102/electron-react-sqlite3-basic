import React,{Component} from 'react';
import Content from '../components/Content'
import './App.css';

const electron = window.require('electron');
const {ipcRenderer} = electron;


class App extends Component{
  contentChange=(text)=>{
    console.log("change content",text);
    ipcRenderer.send('content:updated', text);
  }
  render(){
    return (
      <div className="App">
        <Content change={this.contentChange}/>
        <header className="App-header">
          
          <p>
            Edit <code>src/App.js</code> and save to reload2.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React1
          </a>
        </header>
      </div>
    );
  }
}

export default App;
