import React, { version } from 'react';
import HomePage from './views/HomePage/HomePage';

function App(props) {
    const someFunctions = () => {
        alert('These are some functions');
    }
    return <div>
        <HomePage 
            params1='thachthao'
            params2={someFunctions}
            version={version}
            setVersion={setVersion}>    
        </HomePage>
        <h1>{version}</h1>
    </div>
}

export default App;
