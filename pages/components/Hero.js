import React, {useEffect} from 'react';
import Particles from 'react-particles-js';


const particleParam = {
"particles": {
    "number": {
        "value": 50,
        "density": {
            "enable": true,
            "value_area": 5000
        }
    },
    "color": {
        "value": ["#9b7c5b","#f0e6cf","#402b1a","#d6be8d"]
    },
    "shape": {
        "type": "circle",
        "stroke": {
            "width": 0,
            "color": "#000000"
        },
        "polygon": {
            "nb_sides": 3
        },
        "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
        }
    },
    "opacity": {
        "value": 0.25,
        "random": true,
        "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
        }
    },
    "size": {
        "value": 4,
        "random": true,
        "anim": {
            "enable": true,
            "speed": 15,
            "size_min": 0,
            "sync": false
        }
    },
    "line_linked": {
        "enable": false,
        "distance": 500,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
    },
    "move": {
        "enable": true,
        "speed": 6.8914764163227265,
        "direction": "top",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
        }
    }
},
"interactivity": {
    "detect_on": "canvas",
    "events": {
        "onhover": {
            "enable": false,
            "mode": "bubble"
        },
        "onclick": {
            "enable": false,
            "mode": "repulse"
        },
        "resize": true
    },
    "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
                "opacity": .5
            }
        },
        "bubble": {
            "distance": 400,
            "size": 4,
            "duration": 0.5,
            "opacity": 1,
            "speed": 3
        },
        "repulse": {
            "distance": 200,
            "duration": 0.4
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        }
    }
},
"retina_detect": true
};

function Hero() {

    return (
        <section className="hero section--flush-top">
            <div className="container hero__container">
                <div className="hero__wrapper">
                    <picture>
                        <source className="hero__image" srcSet="img/rein.webp" type="image/webp"/>
                        <source className="hero__image" srcSet="/img/rein.jpg" type="image/jpeg"/> 
                        <img className="hero__image" src="/img/rein.jpg" alt="@maxgrecke"/>
                    </picture>
                </div>
                <div className="hero__description">
                    <header className="hero__header">
                        <h2 className="hero__subtitle">JUSTICE WILL BE DONE</h2>
                        <h1 className="hero__title">Reinhardt</h1>
                    </header>
                    <div className="hero__author">IG @maxgrecke</div>
                </div>
            </div>
            <Particles canvasClassName="js-particles" params={particleParam}/>
        </section>
    );
}
export default Hero;