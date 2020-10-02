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
  }

function Climb() {
    const imgArr = Array.from({length: 30}, (v, i) => i);
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, dragFree: true, });

    useEffect(() => {
        if (emblaApi) {
          // Embla API is ready
        }
      }, [emblaApi])
    return (
        <section className="climb">
            <div className="climb__container">
                <div className="container climb__wrapper">
                    <h2 className="climb__header">The 30 day Climb</h2>
                    <p className="climb__paragraph">I'm fairly new to the digital art world, so I spent 30 days posting one art a day on <a className="climb__link" href="https://www.instagram.com/bigbitecode">instagram</a> and came up with the following pieces:</p>
                </div>
                <div style={viewportCss} ref={emblaRef}>
                    <div style={containerCss}>
                        {
                            imgArr.map(img => {
                                return <div key={img} className="climb__frame"><img className="climb__img" src={`/img/art/${img+1}.jpg`} alt=""/>Day {img + 1}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Climb;