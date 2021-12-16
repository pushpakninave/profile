import react, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import './Home.css';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";


const Home =()=>{

    const [state] = useState({
        t1:"Hi!",
        t2:"I am",
        t3:"Pushpak Ninave"
    })
    return(
        <div className="Home">
            <div className="left_box t_box">
                <div className="fix_text"> 
                    <h2>
                        <div className="title_1">{state.t1}</div>
                        <div className="title_2">{state.t2}</div>
                        <div className="title_3">{state.t3}</div>
                    </h2>
                </div>
                <div className="text">
                    <Typewriter
                    words={['Coder', 'Blogger' , 'Developer']}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    deleteSpeed={50}
                    typeSpeed={80}
                    />
                </div> 
                <div className="b_ton">
                    <a target='_blank' href="https://docs.google.com/document/d/1Op-HUyjGKzjSjtscBZV9qM_KhDRvDgky/edit?usp=sharing&ouid=117636081073815073965&rtpof=true&sd=true" download>
                    <button><Icon icon="akar-icons:cloud-download" inline={true} /> cv</button>
                    </a>
                </div>   
            </div>
            <div className="right_box t_box">
            <div className="icon_box">
            
            <a href="https://www.linkedin.com/in/pushpak-ninave-a17328192/" target='_blank'>
            <Icon className="icn" icon="brandico:linkedin-rect" />
            </a>
            <a href="https://aliencodes.hashnode.dev/" target='_blank'> 
            <Icon className="icn" icon="simple-icons:hashnode" />
            </a>
            <a href="" target='_blank'>
                <Icon className="icn" icon="cib:discord" />
            </a>
            <a href="https://github.com/pushpakninave" target='_blank'>
                <Icon className="icn" icon="bytesize:github" />
            </a>
           <a href="https://stackoverflow.com/users/15220760/brat?tab=profile" target='_blank'>
            <Icon className="icn" icon="simple-icons:stackoverflow" inline={true} />
            </a>
            </div>
            </div>
        </div>
    )
};
export default Home;
