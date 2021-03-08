import React, { Component } from 'react';
import Sidebox from "./components/sideBox/Sidebox";
import Mainbox from "./components/mainBox/Mainbox";
import './App.css';
import Particles from 'react-particles-js';


class App extends Component {

  state={
    compoName:"About"
  }

  setCompo = (compoNo) =>{
    
    if(compoNo==='1'){
      //console.log(compoNo)
      this.setState({compoName:"About"})
    }else if(compoNo==='2'){
      //console.log(compoNo)
      this.setState({compoName:"Skills"})
    }
    else if(compoNo==='3'){
     //console.log(compoNo)
      this.setState({compoName:"Projects"})
    }
  }

  render() {
    return (
      <div className="App">
       <Sidebox setCompo={this.setCompo}/>
       <Mainbox compoName={this.state.compoName} />
       <Particles className="particles"
            params={{ 
              particles: { 
                number: { 
                  value: 150, 
                  density: { 
                    enable: true, 
                    value_area: 1500, 
                  } 
                }, 
              }, 
            }} 
          />
      </div>
    );
  }
}

export default App;
