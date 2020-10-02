import React from 'react';
function Giveaway() {
    return (
        <section className="giveaway">
            <div className="giveaway__container">
                <div className="container">
                    <div className="giveaway__card">
                        <h2 className="giveaway__header">Follow me!</h2>
                        <p>
                            It's been fun learning how to draw again. If you'd like to join me on my journey add me on <a href="https://www.instagram.com/bigbitecode">Instagram</a>!
                        </p>
                        <a href="https://www.instagram.com/bigbitecode/" aria-label="button"><div className="giveaway__id">@bigbitecode</div></a>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="app__other">
                        <h2 className="app__subheader">Previous Post:</h2>
                        <a href="https://www.joonsub.com/whittaker/">Mr. Whittaker</a>
                    </div>
                </div>
                <div className="app__copy">Made by Joon. Copyright 2020 <a className="app__link" href="https://joonsub.com/">Joonsub.com</a>
                </div>
            </footer>
        </section>
    );
}
export default Giveaway;