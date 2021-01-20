import React, { useState } from 'react';

const MountainAndBeach = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/mountain.jpg');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/beach.jpg');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/mountain.jpg');
    }

    return (
        <div>
            The Mountain And Beach
            <img
                src={ imageSrc }
                alt='The Mountain and Beaches'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            />
        </div>
    )
}

export default MountainAndBeach;