import React from 'react';
import './Project.css'


const project = (props) => {
    //console.log("hello")
    return (
        <div class="cards-list">
                <div class="card">
                        <h2 className="h2">{props.name}</h2>
                        <p>{props.description}</p>
                        <div className="icon">
                        <a href={props.github}><i class="fab fa-github"></i></a>
                        {/* <a href={props.deploy}><i class="fas fa-link"></i></a>  */}
                        </div> 
                </div>
            </div>
    )
}

export default project