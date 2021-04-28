import React from 'react';
// Import Icons
import webdesign from '../img/webdesign.png';
import backend from '../img/backend.png';
import web from '../img/web.jpg';

const ServicesSection = () => {
    return (
        <div>
            <div className="services">
                <div className="description">
                    <h2>My <span>skills</span></h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={webdesign} alt="frontend" />
                                <h3>Frontend</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={backend} alt="backend" />
                                <h3>Backend</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="image">
                <img src={web} alt="web" />
            </div>

        </div>
    )
}

export default ServicesSection
