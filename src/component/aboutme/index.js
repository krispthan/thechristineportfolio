import React, { Component } from 'react';

class AboutMe extends Component{
    
    state = {
        isAccordianHover: false
    }
    hoverCancel = () => {
        if(!this.state.isAccordianHover){
            this.setState({isAccordianHover: true});
        }

    }
    hoverReset = () => {
        if(this.state.isAccordianHover){
            this.setState({isAccordianHover: false});
        }
    }
    render(){
        return (
            <div className="about-me-story-container">
             <div className="about-me-filter"></div>
                 
                   <div className="row">
                    <div className="col about-me-left">
    
                     <div className="about-me-image-accordian">
                         <ul>
                            <div className="cancel-hover" onClick={this.hoverCancel()}></div>
                            <div className="about-me-subtitle">
                                <h2>About Me</h2>
                            </div>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                         </ul>
                    </div>
                  </div>
                   <div className="col about-me-right">
                   <div id="about-me-info-container">
                    <p>
                    My name is Christine. I spent most of my professional career as a Behavioral
                    Analyst. I have always had strong critical reasoning and problem-solving skills.
                    These qualities brought me success in my field. However, I knew my skills and
                    potential was rewarding but left you still wanting more.
    
                    If I could describe myself in one word, it would be tenacious. I set goals for
                    myself and achieve them through persistence and dedication. I will continue to set
                    a high standard for myself and my pursuits. I choose to daily be the best developer
                    I can be an effort to truly un-limit myself and my potential to attain life
                    satisfaction and true personal development.
                  
                    </p>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default AboutMe