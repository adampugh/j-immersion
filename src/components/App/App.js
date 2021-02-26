import React, { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

import episodeLibrary from '../../assets/episodeLibrary/episodeLibrary';
import randomEpisode from '../../utils/randomEpisode';

import './App.scss';

const App = () => {
    const [episode, setEpisode] = useState(randomEpisode('', episodeLibrary));

    const getRandomEpisode = () => {
        setEpisode(randomEpisode(episode.id, episodeLibrary));
    };

    return (
        <div id="App">
            <div className="blur"></div>
            <div className="content">
                <img className="content__bg-image" src={episode.img} alt="episode background" />
                <AudioPlayer
                    className="content__controls"
                    autoPlay
                    src={episode.audio}
                    showSkipControls={true}
                    showJumpControls={false}
                    onEnded={getRandomEpisode}
                    onClickNext={getRandomEpisode}
                    onClickPrevious={getRandomEpisode}
                />
            </div>
        </div>
    );
};

export default App;
