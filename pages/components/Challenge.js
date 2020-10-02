import React, {useEffect} from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';

const viewportCss = {
    overflow: 'hidden',
  }
  const containerCss = {
    display: 'flex',
  }
  const slideCss = {
    position: 'relative',
    minWidth: '100%',
    marginLeft: '1em',
  }

function Challenge() {
    const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, speed: 5});
    const imgArr = [1,2,3];
    let myVar;

    const nextSlide = () => {
        emblaApi.scrollNext();
    }
    
    const myTimer = () => {
        nextSlide();
    }
    
    
    useEffect(() => {
        if (emblaApi) {
            myVar = setInterval(myTimer, 3000);
        }
      }, [emblaApi]);

    return (
        <section className="challenge">
            <div className="container challenge__container">
                <div className="challenge__row">
                    <div className="challenge__item">
                        <h2 className="challenge__header">Challenge accepted</h2>
                        <p className="challenge__paragraph">
                        Today marks the beginning of <a className="challenge__link" href="https://inktober.com/" rel="noopener noreferrer" target="_blank">Inktober</a>. Get out a piece of paper and ink it up! You'll be introduced to a new prompt each day of October to boost your creativity!
                        </p>
                    </div>
                    <div className="challenge__item">
                        <div style={viewportCss} ref={emblaRef}>
                            <div style={containerCss}>
                                {
                                    imgArr.map(img => {
                                        return <div key={img} className="challenge__image-container" style={slideCss}><img className="challenge__image" src={`/img/art${img}.jpg`} alt=""/></div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Challenge;