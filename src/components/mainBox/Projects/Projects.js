import React,{Component} from 'react';
import Project from "./Project/Project";
 import './Projects.css'

class projects extends Component{
  state={
    projects:[{image:'',name:'My-Portfolio',description:'A Portfolio web app build on React.',github:'https://github.com/jatin0814/My-Portfolio',deploy:'xyz'},
    {image:'',name:'Keriva-Frontend-2020',description:'IIITV Cultural Fest Kreiva 2020 website.',github:'https://github.com/kreiva-iiitv/keriva-frontend-2020',deploy:'xyz'},
    {image:'',name:'Face-Detection',description:'React web app which Detect faces in a picture.',
    github:'https://github.com/jatin0814/face-detection/tree/master',deploy:'xyz'},
    {image:'',name:'Blog',description:'A React app allow user to Read and Write Posts.',github:'https://github.com/jatin0814/BLOG-API',deploy:'xyz'},
    {image:'',name:'E-Shop',description:'E-Commerce Website build on Express.js and MongoDb.',github:'https://github.com/jatin0814/E-Shop',deploy:'xyz'}]
  }


render(){
  //console.log("inprojects");
  const project=this.state.projects.map((p,index)=>{
    return <Project name={p.name} description={p.description} key={p.id} image={p.image} github={p.github} deploy={p.deploy}/>
  })

  return(
    <div className="projects_root">
      {project}
    </div>
  )
}
}

export default projects;
