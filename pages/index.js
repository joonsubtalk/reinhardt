import dynamic from 'next/dynamic'
import Hero from './components/Hero'
import About from './components/About'
import Abilities from './components/Abilities'
import { useEffect } from 'react'

const DynamicHeadWithNoSSR = dynamic(
  () => import('next/head'),
  { ssr: false }
)

const particles = () => {
  particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 3000
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
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 5,
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
            "speed": 4.8914764163227265,
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
                "duration": 0.3,
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
  });
  var count_particles, stats, update;
  stats = new Stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
          count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
  };
  requestAnimationFrame(update);;
}

function Home() {

  useEffect(()=>{
    setTimeout(()=>{
      particles();
    }, 500);
  }, []);

  return (
    <div>
      <DynamicHeadWithNoSSR>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="description" content="Free Web tutorials"/>
        <meta name="keywords" content="HTML, CSS, JavaScript"/>
        <meta name="author" content="John Doe"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap" rel="stylesheet"></link>
      </DynamicHeadWithNoSSR>
        <div id="particles-js">
          <Hero />
        </div>
      <About />
      <Abilities />
      <div>
        <div className="count-particles">
          <span className="js-count-particles">--</span> particles 
        </div>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="https://threejs.org/examples/js/libs/stats.min.js" />
      </div>
    </div>
  )
}




export default Home