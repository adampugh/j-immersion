import firebase from '../firebase';

const getRandomIdAndImage = (episodeId, episodeArray) => {
    const filteredEpisodeArray = episodeArray.filter(({ id }) => id !== episodeId);
    return filteredEpisodeArray[Math.floor(Math.random() * filteredEpisodeArray.length)];
};

const fetchRandomEpisode = (episodeId, episodeArray) => {
    const { id, img } = getRandomIdAndImage(episodeId, episodeArray);
    const storage = firebase.storage();
    const pathReference = storage.ref(`${id}.mp3`);
    return pathReference.getDownloadURL().then((url) => ({ id, img, audio: url }));
};

export default fetchRandomEpisode;
