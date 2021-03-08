import React from 'react';
import styled from 'styled-components';

const Light = ({children}) => {
    return (
        <LightStyled className='Light'>
            { children }
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
    background-color: white;
    padding: 20px;

    position: absolute;
    top: 50%;
    left: 50%;

    margin-left: -100px;
    margin-top: -100px;

    width: 200px;


`;