import React, { useEffect } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
const viewportCss = {
    overflow: 'hidden',
  }
  const containerCss = {
    display: 'flex',
  }
  const slideCss = {
    position: 'relative',
  }
function Finding() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: 2 })

    useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
      }
    }, [emblaApi])
    return (
        <section className="finding">
            <div className="container finding__container">
                <h2 className="finding__header">Finding My Style</h2>
            <p className="finding__paragraph">Before college, my drawings rocked the Dragon Ball Z hairstyle and huge bubbly eyes. In college, I ventured to the opposite extreme and experimented with realism via charoal figure drawings. Recently, I've dabbled in what I call a “hybrid semi-realism but hints of cartoonization” style.</p>
<p className="finding__paragraph">Admittedly, I’ve never had any formal art anatomy training and was envious of friends who were accepted to Art Center and OTIS. 
Fortunately, with Instagram and Youtube, I’ve been learning for free and have been able to learn from various artists online.</p>
<p className="finding__paragraph">A few of my inspirations come from these artists</p>
            </div>
            <div className="finding__gallery">
                <div className="finding__images">
                    <div style={viewportCss} ref={emblaRef}>
                        <div style={containerCss}>
                            <a className="finding__item" style={slideCss} href="https://www.instagram.com/cameronmarkart/">
                                <div className="finding__subtitle">@cameronmarkart</div>
                                <img src="/img/gallery/1.jpg"/>
                            </a>
                            <a className="finding__item" style={slideCss} href="https://www.instagram.com/loisvb/">
                                <div className="finding__subtitle">@loisvb</div>
                                <img src="/img/gallery/2.jpg"/>
                            </a>
                            <a className="finding__item" style={slideCss} href="https://www.instagram.com/samuelyounart/">
                                <div className="finding__subtitle">@samuelyounart</div>
                                <img src="/img/gallery/3.jpg"/>
                            </a>
                            <a className="finding__item" style={slideCss} href="https://www.instagram.com/samdoesarts/">
                                <div className="finding__subtitle">@samdoesarts</div>
                                <img src="/img/gallery/5.jpg"/>
                            </a>
                            <a className="finding__item" style={slideCss} href="https://www.instagram.com/illust.hyen/">
                                <div className="finding__subtitle">@illust.hyen</div>
                                <img src="/img/gallery/6.jpg"/>
                            </a>
                            <a className="finding__item" style={slideCss} href="https://www.instagram.com/bigbitecode/">
                                <div className="finding__subtitle">@bigbitecode</div>
                                <img src="/img/gallery/4.jpg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Finding;