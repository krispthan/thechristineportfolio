import React from 'react';
import bannerMovie from '../../assets/images/banner.mp4';
import gitHubIcon  from '../../assets/images/home-github-icon.png';
import linkdInIcon  from '../../assets/images/home-linkd-icon.png';
import instaGramIcon  from '../../assets/images/home-insta-icon.png';
class Home extends React.Component {
    sideElements = 6;
    
    sideElementObj = () =>{
        let returnObj = {}
        for(let i = 1; i < this.sideElements; i++){
            returnObj[`home-left-side-element${i}`] = `home-left-side-element${i} inactive`;
        }
        return returnObj;
    }
    state = {
        alreadyLoaded:false,
        victoryGirlActive : false,
        ...this.sideElementObj()
    }
    preloaderLoaded = () =>{   
        if(!this.state.victoryGirlActive){
            this.setState({victoryGirlActive: true});
        }
        for(let i = 1; i < this.sideElements; i++){
            if(this.state[`home-left-side-element${i}`].includes("inactive")){
                let sideElementTemp= {};
                sideElementTemp[`home-left-side-element${i}`] = `home-left-side-element${i}`;
               
                setTimeout(()=>{     
                    this.setState(sideElementTemp);
                }, i * 100);
                return;
            }

        }
    }
    componentDidMount() {
        setTimeout(() =>{
            document.getElementById("myVideo").play();
        }, 100);

    }
    componentDidUpdate= () =>{
        if(this.props.hasPreloaderLoaded){
            this.preloaderLoaded();
        }
    }
    render(){
        console.log(this.props.hasPreloaderLoaded)
        return (
            <div>
             <section id="home">
                 <div id="home-background-container">
                     <div id="home-background-video">
                    <video autoPlay loop muted poster="images/videoFiller1080.jpg" id="myVideo" className="backgroundVideo">
                        <source src={bannerMovie} type="video/mp4"/>
                    </video>
                    {/* <!-- <video src=""></video> --> */}
                </div>
            </div>
            <div className="hamburger-container">
            </div>
            <div id="home-page-content-container">
                <div id="home-page-content">
                    <div id="home-victory-girl" className={this.props.hasPreloaderLoaded  ? "" : "inactive"}>
                    <div className="girl"></div>
                    </div>
                    <div id="home-page-left-element" className="home-page-side-element">
                        <div className="home-page-side-element-content-container">
                            <div className="home-page-side-element-content">
                                <h2 className={`${this.state['home-left-side-element1']} home-position`}>Front End <br/>Engineer</h2>
                                <h1 className="inactive home-name-mobile">Christine<strong>Than</strong></h1>
                                <hr className={`${this.state['home-left-side-element2']}`}/>
                                <div id="home-page-social-icons" className={`${this.state['home-left-side-element3']}`}>
                                    <img src={gitHubIcon} alt="" />
                                    <img src={linkdInIcon}  alt="" />
                                    <img src={instaGramIcon}  alt="" /> 
                                </div>
                                <hr className={`${this.state['home-left-side-element4']}`} />
                                <aside className={`${this.state['home-left-side-element5']}`}>
                                <div className="home-text-info"> 
                                        <h2>Intellectual Pursuit</h2>
                                        <h3>in the name of</h3>
                                        <h2>Quality UX</h2>
                                    </div> 
                                
                                    <h2 className={`${this.state['home-left-side-element1']} home-left-mobile-text`}>Front End <br />Engineer</h2>
                                
                                </aside>
                            </div>
                        </div>
                    </div>
                    <div id="home-page-right-element" className="home-page-side-element">
                        <div className="home-page-side-element-content-container">
                            <div className="home-page-side-element-content">
                                <h1 className={this.props.hasPreloaderLoaded  ? "" : "inactive"}>Christine<strong>Than</strong></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <section id="quote-section">Diligence. Determination. Dedication</section>               
            </div>
        )
    }
}

export default Home;