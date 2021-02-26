import styled from 'styled-components';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

export const AppDiv = styled.div`
    background: url(${(props) => props.img}) no-repeat center center fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;

export const BlurredDiv = styled.div`
    background: rgba(28, 28, 28, 0.2);
    backdrop-filter: blur(15px);
    height: 100vh;
    width: 100%;
`;

export const ContentDiv = styled.div`
    position: absolute;
    height: 100vh;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    max-width: 35vw;
`;

export const ContentImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AudioPlayerStyled = styled(AudioPlayer)`
    position: absolute;
    bottom: 0;
    width: 100%;
    font-family: 'Poppins', sans-serif;
`;