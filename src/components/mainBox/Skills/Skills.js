import React from 'react';
import './Skills.css';

const mainBox = (props) => {


    return(
      // <div className="skills_root">
      //   <svg viewBox="0 0 1000 1000">
      // <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><path fill="url(#a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"></path><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"></path><radialGradient id="c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#c)" enable-background="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
      // </svg>
      // <svg viewBox="0 0 1000 1000">
      // <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185h-125.184z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zm-46.885-37.793h-11.709l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
      // </svg>
      //   <div className="progLang">
      //   <h2 className="h2_skills">PROGRAMMING LANGUAGES</h2>
      //   <div className="skills_card"> 
      //       <i class="devicon-c-plain colored"></i>
      //       <i class="devicon-javascript-plain colored"></i>
      //       <i class="devicon-python-plain colored"></i>
      //       <i class="devicon-bash-plain colored" ></i>
      //   </div>
      // </div> 
      // <div className="Techno">
      //   <h2>WEB TECHNOLOGIES</h2>
      //   <div className="skills_card">
      //     <i class="devicon-git-plain-wordmark colored"></i>
      //     <i class="devicon-react-original-wordmark colored"></i>
      //     <i class="devicon-nodejs-plain-wordmark colored"></i>
      //     <i class="devicon-mongodb-plain-wordmark colored"></i>
      //   </div>
      // </div>
      // </div>
      <div className="skills_root">
      <div className="skill-bars">
        <div className="bar">
          <div className="info">
            <span>C</span>
          </div>
          <div className="progress-line c">
            <span></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>JavaScript</span>
          </div>
          <div className="progress-line js">
            <span></span>
          </div>
        </div>


        <div className="bar">
          <div className="info">
            <span>Python</span>
          </div>
          <div className="progress-line python">
            <span></span>
          </div>
        </div>


        <div className="bar">
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line html">
            <span></span>
          </div>
        </div>


        <div className="bar">
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css">
            <span></span>
          </div>
        </div>


        <div className="bar">
          <div className="info">
            <span>MERN</span>
          </div>
          <div className="progress-line MERN">
            <span></span>
          </div>
        </div>

        <div className="bar">
          <div className="info">
            <span>Linux</span>
          </div>
          <div className="progress-line linux">
            <span></span>
          </div>
        </div>

    </div>
    </div>
    )

}


export default mainBox;
