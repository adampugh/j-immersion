import React, { useEffect, useState } from 'react';

import episodeLibrary from '../../assets/episodeLibrary/episodeLibrary';
import fetchRandomEpisode from '../../utils/fetchRandomEpisode';

import DefaultImage from '../../assets/images/loading.jpg';

import * as S from './App.styles.jsx';

const App = () => {
    const [episode, setEpisode] = useState({ id: '', img: DefaultImage, audio: '' });

    useEffect(() => updateEpisode(), []);

    const updateEpisode = async () => {
        const fetchedEpisode = await fetchRandomEpisode(episode.id, episodeLibrary);
        setEpisode(fetchedEpisode);
    };

    return (
        <S.AppDiv img={episode.img}>
            <S.BlurredDiv />
            <S.ContentDiv>
                <S.ContentImg src={episode.img} alt="episode background" />
                <S.AudioPlayerStyled
                    autoPlay
                    src={episode.audio}
                    showSkipControls={true}
                    showJumpControls={false}
                    onEnded={updateEpisode}
                    onClickNext={updateEpisode}
                    onClickPrevious={updateEpisode}
                />
            </S.ContentDiv>
        </S.AppDiv>
    );
};

export default App;
