import React, {useState} from 'react';
import styled from 'styled-components';

const MountainAndBeaches = () => {

    const [imageSrc, imageSrcUpdate] = useState('/assets/img/mountain.jpg');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/beach.jpg');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/mountain.jpg');
    }

    return (
        <MountainAndBeachesStyled className='MountainAndBeaches'>
            <h2>MountainAndBeaches</h2>
            <img
                src={ imageSrc }
                alt='The Mountain and Beaches'
                onMouseOver={ imageOver }
                onMouseOut={ imageOut }
            /> 
        </MountainAndBeachesStyled>
    );
}

export default MountainAndBeaches;

const MountainAndBeachesStyled = styled.div`
    
`;
