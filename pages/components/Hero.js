import React from 'react';
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
        </section>
    );
}
export default Hero;