import firebase from '../firebase';

const getRandomIdAndImage = (episodeId, episodeArray) => {
    const filteredEpisodeArray = episodeArray.filter(({ id }) => id !== episodeId);
    return filteredEpisodeArray[Math.floor(Math.random() * filteredEpisodeArray.length)];
};

const fetchRandomEpisode = async (episodeId, episodeArray) => {
    const { id, img } = getRandomIdAndImage(episodeId, episodeArray);
    const storage = firebase.storage();
    const pathReference = storage.ref(`${id}.mp3`);
    return pathReference.getDownloadURL().then((url) => {
        const newEpisode = { id, img, audio: url };
        console.log(newEpisode);
        return newEpisode;
    });
};

export default fetchRandomEpisode;
