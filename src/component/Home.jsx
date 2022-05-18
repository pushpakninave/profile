import react, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import './Home.css';
import { Icon } from '@iconify/react';
import { Link } from "react-router-dom";
import Popup from "./pop";
const Home = () => {
    const [buttonpop, setButtonpop] = useState(false);
    const [state] = useState({
        t1: "Hi!",
        t2: "I am",
        t3: "Pushpak Ninave"
    })
    return (
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
                        words={['Coder', 'Blogger', 'Developer']}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        deleteSpeed={50}
                        typeSpeed={80}
                    />
                </div>
                <button onClick={() => setButtonpop(true)}>
                    Bio
                </button>
            </div>
            <Popup trigger={buttonpop} setTrigger={setButtonpop}>
                <h3>More time to code less toil!</h3>
                <p> Rooted strong and budding passionately as a developer. I am pushpak Ninave, currently pursuing B-tech in computer science,
                    I make wild out a limb ideas as a developer.
                    Java is one of my most prefered language of all. I am inquisitive of knowing backend architecture of any microservice platform.     
                    Talking about my tech stack, i like building web-based applications using frameworks like
                    ReactJs, Spring Boot and microservices.      
                </p>
                <a className="mailBox" href="mailto: pushpakninave.jee@gmail.com"><Icon icon="line-md:email-twotone-alt" color="#c53c1b" /></a>
                <div className="b_ton">
                    <a target='_blank' href="https://drive.google.com/file/d/1L8SEJImO6cH9_qirVsZZSJdP2L8ssIfR/view?usp=sharing" download>
                        <button title="Resume"><Icon icon="akar-icons:cloud-download" inline={true} /></button>
                    </a>
                </div>
            </Popup>
            <div className="right_box t_box">

                <div className="icon_box">

                    <a href="https://www.linkedin.com/in/pushpak-ninave-a17328192/" title="Linkedin" target='_blank'>
                        <Icon className="icn" icon="brandico:linkedin-rect" />
                    </a>
                    <a href="https://aliencodes.hashnode.dev/" title="Tech-blog" target='_blank'>
                        <Icon className="icn" icon="simple-icons:hashnode" />
                    </a>
                    <a href="https://leetcode.com/Pushpakninave/" title="competative programming" target='_blank'>
                        <Icon className="icn" icon="simple-icons:leetcode" />
                    </a>
                    <a href="https://github.com/pushpakninave" title="github" target='_blank'>
                        <Icon className="icn" icon="bytesize:github" />
                    </a>
                    {/* <a href="https://stackoverflow.com/users/15220760/brat?tab=profile" title="stackoverflow" target='_blank'>
                        <Icon className="icn" icon="simple-icons:stackoverflow" inline={true} />
                    </a> */}
                    <a href="https://developers.google.com/profile/u/pushpakninave" title="GDG" target='_blank'>
                    <Icon  className="icn" icon="logos:google-developers" width="35" />
                    </a>
                </div>
            </div>
        </div>
    )
};
export default Home;
