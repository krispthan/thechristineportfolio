import React, {Component} from 'react';
import StudentGradeTable from '../../assets/images/student-grade-table.png';

class Portfolio extends Component{
    render(){
        return(
          <section id="portfolio-container">
            <div className="portfolio-filter"></div>

            <div id="portfolio">
            <div id="portfolio-title">
                <h2>Portfolio</h2>
                <p>Some Recent Projects:</p>
            </div>
                <div id="portfolio-carousel">
                    <div className="portfolio-carousel-item">
                        <div className="portfolio-item-content-container">
                            <div className="portfolio-item-img">
                                <a href="">
                                    <img src={StudentGradeTable} alt=""/>
                                    <div className="portfolio-item-img-filter"></div>
                                </a>
                            </div>
                            <hr/>
                            <h2>Fund That Film</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus veritatis nulla dicta deleniti id suscipit nobis saepe dignissimos hic iure, porro illum quis doloremque et, voluptas quod unde blanditiis.</p>     
                        </div>
                    </div>
                    <div className="portfolio-carousel-item">
                        <div className="portfolio-item-content-container">
                            <div className="portfolio-item-img">
                                <a href="">
                                    <img src={StudentGradeTable} alt=""/>
                                    <div className="portfolio-item-img-filter"></div>
                                </a>
                            </div>
                            <hr/>
                            <h2>Student Grade Table</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus veritatis nulla dicta deleniti id suscipit nobis saepe dignissimos hic iure, porro illum quis doloremque et, voluptas quod unde blanditiis.</p>     
                        </div>
                    </div>
                    <div className="portfolio-carousel-item">
                        <div className="portfolio-item-content-container">
                            <div className="portfolio-item-img">
                                <a href="">
                                    <img src={StudentGradeTable} alt=""/>
                                    <div className="portfolio-item-img-filter"></div>
                                </a>
                            </div>
                            <hr/>
                            <h2>Student Grade Table</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus veritatis nulla dicta deleniti id suscipit nobis saepe dignissimos hic iure, porro illum quis doloremque et, voluptas quod unde blanditiis.</p>     
                        </div>
                    </div>
                </div>

            </div>
          </section>
        );
    }
}




 // <div>
            //     <section className="bg-light" id="portfolio">
            //         <div className="container">
            //             <div className="row">
            //                 <div className="col-lg-12 text-center">
            //                     <h2 className="section-heading text-uppercase">Portfolio</h2>
            //                     <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            //                 </div>
            //             </div>
            //             <div className="row">
            //                 <div className="col-md-4 col-sm-6 portfolio-item">
            //                     <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            //                         <div className="portfolio-hover">
            //                             <div className="portfolio-hover-content">
            //                                 <i className="fas fa-plus fa-3x"></i>
            //                             </div>
            //                         </div>
            //                         <img className="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="" />
            //                     </a>
            //                     <div className="portfolio-caption">
            //                         <h4>Threads</h4>
            //                         <p className="text-muted">Illustration</p>
            //                     </div>
            //                 </div>
            //                 <div className="col-md-4 col-sm-6 portfolio-item">
            //                     <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
            //                         <div className="portfolio-hover">
            //                             <div className="portfolio-hover-content">
            //                                 <i className="fas fa-plus fa-3x"></i>
            //                             </div>
            //                         </div>
            //                         <img className="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="" />
            //                     </a>
            //                     <div className="portfolio-caption">
            //                         <h4>Explore</h4>
            //                         <p className="text-muted">Graphic Design</p>
            //                     </div>
            //                 </div>
            //                 <div className="col-md-4 col-sm-6 portfolio-item">
            //                     <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
            //                         <div className="portfolio-hover">
            //                             <div className="portfolio-hover-content">
            //                                 <i className="fas fa-plus fa-3x"></i>
            //                             </div>
            //                         </div>
            //                         <img className="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="" />
            //                     </a>
            //                     <div className="portfolio-caption">
            //                         <h4>Finish</h4>
            //                         <p className="text-muted">Identity</p>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </section>
            // </div>






















export default Portfolio;