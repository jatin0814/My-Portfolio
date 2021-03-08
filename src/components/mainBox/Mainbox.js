import React from 'react';
import './Mainbox.css';
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Footer from "./Footer/Footer";
const mainBox = (props) => {
    let compoName;
    if(props.compoName==="About"){
      compoName=<About/>
    }else if(props.compoName==="Skills"){
      compoName=<Skills/>
    }else if(props.compoName==="Projects"){
      compoName=<Projects/>
    }

    return(
      <div className="mainbox_root">
        <div>
          {compoName}
        </div>
        <Footer/>
      </div>
    )

}

export default mainBox;
