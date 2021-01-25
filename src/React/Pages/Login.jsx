import React, { useState } from 'react';

const Login = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/mountain.jpg');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/beach.jpg');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/mountain.jpg');
    }

    return (
        <div>
            <h1>The Mountain And Beach</h1>
            <img
                src={ imageSrc }
                alt='The Mountain and Beaches'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            />
        </div>
    )
}

export default Login;