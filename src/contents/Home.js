import React, { Component } from "react";
import Social from '../components/Social';
import profilepic from '../img/profile.jpg';
import ReactTypingEffect from "react-typing-effect";

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                    <img src={profilepic} alt="profile" className="profilepic" />
                    <ReactTypingEffect text={['6304849', 'ThanaPorn NaksinlapawiJit']} speed={80} eraseDelay={200} className="typingeffect" />
                    <Social />
            </div>
        )
    }
}

export default Home;