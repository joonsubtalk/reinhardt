import React from 'react';
function OldAndNew() {
    return (
        <section className="oldAndNew">
            <div className="oldAndNew__wrapper">
                <img className="oldAndNew__img" src="/img/Peoples.jpg" />
            </div>
            <div className="container oldAndNew__container">
                <div className="oldAndNew__card">
                    <h2 className="oldAndNew__header">Old to the New</h2>
                    <p className="oldAndNew__paragraph">I'm a huge Samsung Note Spen "guy." It’s served me well over the years as a doodle pad, but I cracked the screen and had to downgrade to an older phone.</p>
                    <p className="oldAndNew__paragraph"><strong>Sadface.</strong></p>
                    <p className="oldAndNew__paragraph">I decided to splurge a bit and acquired an iPad Pro. <i>And the $99 pencil.</i></p>
                    <p className="oldAndNew__paragraph">Probably one of my favorite purchases in a while.</p>
                </div>
            </div>
        </section>
    );
}
export default OldAndNew;