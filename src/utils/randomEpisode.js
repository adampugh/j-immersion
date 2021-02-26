const randomEpisode = (episodeId, episodeArray) => {
    const filteredEpisodeArray = episodeArray.filter(({ id }) => id !== episodeId);
    return filteredEpisodeArray[Math.floor(Math.random() * filteredEpisodeArray.length)];
};

export default randomEpisode;
