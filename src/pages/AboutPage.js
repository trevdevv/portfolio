import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hello, my name is Trevor. Im a full stack engineer in React</p>
                <p>My dream is to one day start my own business and become and entreprenur</p>
                <p>I'm constantly learning new things, currently those things include gaining more experience with MongoDB and React</p>
                <p>My latest project, Hamburger App is a fun application that lets a user build there own Hamburger. You can check it out here, or on my homepage. It is built with Reacr</p>
                <p>When I'm not learning something new, chances are I'm creating some YouTube videos. You can find those here</p>
            </Content>
        </div>
    );
} 

export default AboutPage;