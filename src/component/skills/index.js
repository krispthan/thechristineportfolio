import React from 'react';
import React_icon from '../../assets/images/react_icon.png';
import jQuery_icon from '../../assets/images/jQuery_icon.png';
import Angular_icon from '../../assets/images/angular_icon.png';
import Adobe_icon from '../../assets/images/adobe_icon.png';
import Aws_icon from '../../assets/images/aws_icon.png';
import Css_icon from '../../assets/images/css.png';
import Es6_icon from '../../assets/images/es6_icon.png';
import Html_icon from  '../../assets/images/html.png';
import Redux_icon from '../../assets/images/redux.png';
import Node from  '../../assets/images/node.png';
import Typescript_icon from '../../assets/images/ts.png';
import Git_icon from '../../assets/images/git_icon.png';
import Photoshop_icon from '../../assets/images/photoshop_icon.png';
export default props =>{
    return (
        <div className="skills-page-container">
             <div className="skills-row-filter"></div>
        <div className="skills-page">
   
            {/* <div className="skills-subtitle">
                <h2 id="skills">Skills</h2>
            </div> */}
            <div id="skills-title">
                <h2>Skills</h2>
            </div>
            <div className="diamond-wrapper">
            <hr/>
                <div className="diamond-row-container">

                    <div className="diamond-row">
                        <div className="diamond-container">
                            <div className="diamond">
                            <img id="skill-react" src={ React_icon } alt=""/>
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ jQuery_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Angular_icon} alt="" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="diamond-row">
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Adobe_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Aws_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Css_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Es6_icon }alt="" />
                            </div>
                        </div>
                    </div>
                   
                    <div className="diamond-row">
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Html_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Redux_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Node } alt="" />
                            </div>
                        </div>
                    </div>
{/* 
                    <div id ="last-diamond-row" className="diamond-row">
                        <div className="diamond-container">
                            <div className="diamond">
                                <img id="skill_ts"className="hexagon-img" src={ Typescript_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={ Git_icon } alt="" />
                            </div>
                        </div>
                        <div className="diamond-container">
                            <div className="diamond">
                                <img className="hexagon-img" src={Photoshop_icon } alt="" />
                            </div>
                        </div>
                    </div> */}
                </div>
                <hr/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi labore aspernatur nobis, corrupti libero beatae sequi voluptatibus numquam. Recusandae porro dolorem repellat expedita temporibus necessitatibus provident quasi? Esse, saepe deleniti?</p>
            </div>  
        <div className="silouette-container">
            <div className="silouette-image">
                {/* <img src="images/portfoliosil.png" /> */}
            </div>
        </div>
    </div>
  </div>
    )
}