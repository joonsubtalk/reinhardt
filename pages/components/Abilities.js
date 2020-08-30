import React, {useState} from 'react';

const Ability = () => {
    return (<div className="ability">
        <div className="ability__container">
            I am Ability;
        </div>
    </div>)

};

function Abilities() {
    const [name, setName] = useState('test');
    function clickHandler(evt) {
        setName(evt.target.value);
    }
    return (
        <section className="abilities">
            <div className="abilities__container">
                <Ability />
                <Ability />
                <Ability />
                <button onClick={clickHandler}>Abilities</button>
            </div>
        </section>
    );
}
export default Abilities;