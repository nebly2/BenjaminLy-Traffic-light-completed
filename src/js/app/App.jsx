import React, { useState } from 'react';

const App = () => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="body">
            <div className="container">
                <div className="topStick"></div>
                <div className="trafficLight">
                    <div
                        className={'red light' + (selected === 'red' ? ' selected' : '')}
                        onClick={() => setSelected('red')}
                    ></div>
                    <div
                        className={'yellow light' + (selected === 'yellow' ? ' selected' : '')}
                        onClick={() => setSelected('yellow')}
                    ></div>
                    <div
                        className={'green light' + (selected === 'green' ? ' selected' : '')}
                        onClick={() => setSelected('green')}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default App;
