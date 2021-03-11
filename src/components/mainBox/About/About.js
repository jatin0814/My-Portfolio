import React,{Component} from 'react';
import './About.css';

import image from "./image.jpg";
import potter from "./potter.jfif";

//import Badge from "./Badge/badge";


class mainBox extends Component {

  componentDidMount(){
    const div = document.getElementById("badge_about");
    // const script = document.createElement("script");
    // script.src = "https://tryhackme.com/badge/280788";
    // script.async = true;
    // div.appendChild(script);
    // console.log(div)
    // console.log(div);
    const badge = window.atob("PGRpdiBpZD0ndGhtX2JhZGdlJyBjbGFzcz0ndGhtX21hcmdpbicgb25DbGljaz0ibG9jYXRpb24uaHJlZj0naHR0cHM6Ly90cnloYWNrbWUuY29tL3AvbXIudm9sZGVtb3J0JyI+CiAgPGRpdiBzdHlsZT0id2lkdGg6IGF1dG87IGJvcmRlci1yYWRpdXM6NHB4OyBtYXJnaW4tcmlnaHQ6IDBweDsiPgogICAgPGRpdiBjbGFzcz0idGhtX2F2YXRhciIgc3R5bGU9ImJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3RyeWhhY2ttZS1pbWFnZXMuczMuYW1hem9uYXdzLmNvbS91c2VyLWF2YXRhcnMvNjQyMmMwYmJkZmU0NDgzZjBiYWY2NWM2MDBkNWU1YzgucG5nKSI+PC9kaXY+CiAgPC9kaXY+CiAgPGRpdiBzdHlsZT0ibWFyZ2luLWxlZnQ6IDI1cHg7IHdpZHRoOiAyMjBweDsgaGVpZ2h0OjU2cHg7IGJhY2tncm91bmQtY29sb3I6ICMzNDNjNDI7IGJvcmRlci1yYWRpdXM6IDVweDsKICB0ZXh0LWFsaWduOiBsZWZ0OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly90cnloYWNrbWUuY29tL2ltZy90aG1fbG9nb19vbmx5LnN2Zyk7IGJhY2tncm91bmQtc2l6ZTogMjNweCAyM3B4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCA1cHggYm90dG9tIDVweDsgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsiPgogIDxzdHlsZSBzY29wZWQ+CgogICAgLnRobV9tYXJnaW4gewogICAgICBtYXJnaW46IDVweDsKICAgIH0KCiAgICAjdGhtX2JhZGdlIHsKICAgICAgd2lkdGg6IDIxMHB4OwogICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7CiAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsKICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7CiAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTsKICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOwogICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7CiAgICB9CgogICAgI3RobV9iYWRnZTpob3ZlciB7CiAgICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIH0KCiAgICAudGhtX2F2YXRhciB7CiAgICAgIGRpc3BsYXk6IGJsb2NrOwogICAgICB3aWR0aDogNTBweDsKICAgICAgaGVpZ2h0OiA1MHB4OwogICAgICBmbG9hdDogbGVmdDsKICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsKICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsKICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjsKICAgICAgYm9yZGVyLXJhZGl1czogNTAlOwogICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogTmVlZGVkIGZvciBib3JkZXIgdG8gc3RvcCBjaGFuZ2luZyBpbWFnZSB3aWR0aCovCiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM4OGNjMTQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDNjNDI7CiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSk7CiAgICAgIG9iamVjdC1maXQ6IGNvdmVyOwogICAgICBib3gtc2hhZG93OiAwIDBweCAzcHggMHB4ICMzMDMwMzA7CiAgICB9CgogICAgQGZvbnQtZmFjZSB7CiAgICAgICAgZm9udC1mYW1pbHk6ICJSb2JvdG8iOwogICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDsKICAgICAgICBmb250LXdlaWdodDogNDAwOwogICAgICAgIHNyYzogdXJsKGh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb20vcy91YnVudHVtb25vL3Y2L1ZpWmhldDdBay1MUlhaTVh6dUFma1k0UDVJQ294OEtxM0xMVU5NeWxHTzQud29mZjIpIGZvcm1hdCgid29mZjIiKTsKICAgIH0KCiAgICAudGhtX2ZvbnQgewogICAgICAgIGZvbnQtZmFtaWx5OiAiUm9ib3RvIiwgbW9ub3NwYWNlOwogICAgfQoKICAgIC50aG1fbmlja25hbWUgewogICAgICAgIGNvbG9yOiAjZmZmZmZmOwogICAgICAgIGZvbnQtc2l6ZTogMTJweDsKICAgICAgICBmb250LXdlaWdodDogYm9sZDsKICAgICAgICB0ZXh0LXNoYWRvdzogIzAwMCAwIDAgNnB4OwogICAgfQoKICAgIC50aG1fc3RhdCB7CiAgICAgIGNvbG9yOiAjZmZmOwogICAgICBvcGFjaXR5OiAwLjU7CiAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgIH0KCiAgICAudGhtX2ljb24gewogICAgICBvcGFjaXR5OiAwLjg1OwogICAgICBoZWlnaHQ6IDE2cHg7CiAgICB9CgogICAgQGtleWZyYW1lcyBmbGlja2VyIHsKICAgIAkwJSwgMTkuOTk5JSwgMjIlLCA2Mi45OTklLCA2NCUsIDY0Ljk5OSUsIDcwJSwgMTAwJSB7CiAgICAJCW9wYWNpdHk6IC45OTsKICAgIAkJdGV4dC1zaGFkb3c6IC0xcHggLTFweCAwICRvdXRsaW5lLCAxcHggLTFweCAwICRvdXRsaW5lLCAtMXB4IDFweCAwICRvdXRsaW5lLCAxcHggMXB4IDAgJG91dGxpbmUsIDAgLTJweCA4cHgsIDAgMCAycHgsIDAgMCA1cHggI2ZmN2UwMCwgMCAwIDE1cHggI2ZmNDQ0NCwgMCAwIDJweCAjZmY3ZTAwLCAwIDJweCAzcHggIzAwMDsKICAgIAl9CiAgICAJMjAlLCAyMS45OTklLCA2MyUsIDYzLjk5OSUsIDY1JSwgNjkuOTk5JSB7CiAgICAJCW9wYWNpdHk6IDAuNDsKICAgIAkJdGV4dC1zaGFkb3c6IG5vbmU7CiAgICAJfQogICAgfQoKICAgIC50aG1fcmFuayB7CiAgICAgICAgY29sb3I6ICNmZmZmZmY7CiAgICAgICAgZm9udC1zaXplOiAxMXB4OwogICAgfQoKICAgIC50aG1fbGluZSB7CiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7CiAgICAgICAgbWFyZ2luOiAwcHg7CiAgICAgICAgcGFkZGluZzogMHB4OwogICAgfQoKICAgIC50aG1fbGluayB7CiAgICAgICAgY29sb3I6ICNmZmY7CiAgICAgICAgZm9udC1zaXplOiAwLjZlbTsKICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7CiAgICAgICAgYW5pbWF0aW9uOiBmbGlja2VyIDZzIGluZmluaXRlOwogICAgfQoKICAgIC50aG1fbGluazpob3ZlciB7CiAgICAgICAgY29sb3I6ICNmZmY7CiAgICAgICAgZm9udC1zaXplOiAwLjZlbTsKICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKICAgIH0KCiAgICAudGhtX2xpbms6dmlzaXRlZCB7CiAgICAgICAgY29sb3I6ICNmZmY7CiAgICB9CgogICAgLnRobV9tciB7CiAgICAgIG1hcmdpbi1yaWdodDogOHB4OwogICAgfQoKICAgIC50aG1fZm9yX2ltZyB7CiAgICAgIGNvbG9yOiAjZmZmOwogICAgICBvcGFjaXR5OiAwLjU7CiAgICAgIGZvbnQtc2l6ZTogMTRweDsKICAgICAgcG9zaXRpb246IHJlbGF0aXZlOwogICAgICB0b3A6IC0zcHg7CiAgICAgIG1hcmdpbi1ib3R0b206IDVweDsKICAgIH0KCiAgPC9zdHlsZT4KCiAgPGRpdiBjbGFzcz0idGhtX2ZvbnQiIHN0eWxlPSJib3gtc2l6aW5nOiBjb250ZW50LWJveDsgaGVpZ2h0OjUwcHg7IHdoaXRlLXNwYWNlOiBub3dyYXA7IG92ZXJmbG93OiBoaWRkZW47IHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBwYWRkaW5nLWxlZnQ6IDhweDsgcGFkZGluZy10b3A6IDVweDsiPgogICAgPHAgY2xhc3M9InRobV9saW5lIiBzdHlsZT0nbWFyZ2luLWJvdHRvbTogM3B4Oyc+PHNwYW4gY2xhc3M9InRobV9uaWNrbmFtZSI+bXIudm9sZGVtb3J0PC9zcGFuPiA8c3BhbiBjbGFzcz0idGhtX3JhbmsiPlsweDddPC9zcGFuPjxicj48L3A+CiAgICA8cCBjbGFzcz0idGhtX2xpbmUiIHN0eWxlPSdtYXJnaW4tYm90dG9tOiAxcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsnPgogICAgICA8aW1nIGNsYXNzPSJ0aG1faWNvbiB0aG1fbXIiIHNyYz0iaHR0cHM6Ly90cnloYWNrbWUuY29tL2ltZy9iYWRnZXMvdHJvcGh5LnBuZyIgYWx0PSd0cm9waHknPiA8c3BhbiBjbGFzcz0idGhtX3N0YXQgdGhtX21yIj4xNzc0Njwvc3Bhbj4KICAgICAgPGltZyBjbGFzcz0idGhtX2ljb24gdGhtX21yIiBzcmM9Imh0dHBzOi8vdHJ5aGFja21lLmNvbS9pbWcvYmFkZ2VzL2Rvb3IucG5nIiBhbHQ9J2Rvb3InPiA8c3BhbiBjbGFzcz0idGhtX3N0YXQgdGhtX21yIj4yNDwvc3Bhbj4KICAgICAgPGltZyBjbGFzcz0idGhtX2ljb24gdGhtX21yIiBzcmM9Imh0dHBzOi8vdHJ5aGFja21lLmNvbS9pbWcvYmFkZ2VzL3RhcmdldC5wbmciIGFsdD0ndGFyZ2V0Jz4gPHNwYW4gY2xhc3M9InRobV9zdGF0Ij40PC9zcGFuPjxicj4KICAgIDwvcD4KICAgIDxwIGNsYXNzPSJ0aG1fbGluZSI+CiAgICAgIDxhIGhyZWY9Imh0dHBzOi8vd3d3LnRyeWhhY2ttZS5jb20iIGNsYXNzPSJ0aG1fbGluayI+dHJ5aGFja21lLmNvbTwvYT48L3A+CiAgICA8L2Rpdj4KICA8L2Rpdj4KPC9kaXY+Cgo8IS0tIEphdmFzY3JpcHQgdG8gZ2V0IGN1cnJlbnQgVVJMIGFuZCBhcHBlbmQgdG8gb3VyIHNlcnZlciAtLT4K")
    div.innerHTML=badge;
  }
  
render(){
  return(
    <div>
      <div className="about_main">
        <img src={image} className="image2" alt="my"/>
        <p className="name_about">JATIN GUPTA</p>
        <div className="socialMedia_about">
          <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jatingupta214/"><i class="fab fa-instagram" title="Instagram"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jatin-gupta-005381196/"><i class="fab fa-linkedin" title="Linkedin"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/jatin0814"><i class="fab fa-github" title="Github"></i></a>
          {/* <a target="blank" href="https://tryhackme.com/p/mr.voldemort"><img src={logo} style={{backgroundColor:"white"}} title="TryHackMe" className="hackLogo_about" alt="Logo" /></a> */}
          <div id="badge_about"></div>
        </div>
      </div>
    <div className="card1">
      <h2 className="h2">Hi there <span class="wave">👋</span></h2>
      <p className="about">I am Jatin, Sophomore at the Indian Institute of Information Technology, Vadodara. 
      I am a Cyber Security enthusiast and a Web Developer. I like to work on both. <p>In Cyber Security, I love 
      learning about Web Security and Computer Networking. I have also done a course on Computer Networking 
      named "Bits and Bytes of Computer Networking" in which I got to learn about basic concept of Networking. 
      It helped me to learn about Cyber Security in efficient way. To practice my Hacking Skills, I usually
       do CTFs(Capture the Flags) problem on TryHackMe Platform and these CTFs are quite intresting and help me to 
       learn new concepts. </p>
        <p> Apart from Cyber Security, I like Web Development with React.js, Node.js, and MongoDb.</p>
        <p>
          In my free time, I like to watch web series and reading books(mostly related to Hacking Stuff 😅🤩).
          Also I'm a big fan of Harry Potter series<img src={potter} alt="potter" class="potter"/>.
        </p>
      </p>
    </div>
  </div>
  )
}
}


export default mainBox;
