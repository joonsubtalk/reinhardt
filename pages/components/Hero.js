import React, { useEffect, useRef } from 'react';
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
        "value": ["#383838","#f0e6cf","#f60000","#565656"]
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

    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },1000)
    }, []);

    return (
        <section className="hero section--flush-top">
            <div className="container hero__container">
                <div className="hero__wrapper">
                    <video
                        ref={videoRef}
                        className="hero__video"
                        loop
                        muted>
                        <source src={'/img/inktoberhero.mp4'} />
                    </video>
                </div>
                <div className="hero__description">
                    <header className="hero__header">
                        <h2 className="hero__subtitle">31 Days. 31 Drawings.</h2>
                        <h1 className="hero__title">inktober</h1>
                    </header>
                    <div className="hero__author">Joon-Sub Chung | October 1, 2020</div>
                </div>
            </div>
            <Particles canvasClassName="js-particles" params={particleParam}/>
        </section>
    );
}
export default Hero;