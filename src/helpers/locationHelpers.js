const randomLocation = () => {
    return Math.floor(Math.random() * 126)
}

const characterId = (char = '') => {
    const arr = char.split('/');
    return arr[arr.length - 1];
}

module.exports = {
    randomLocation,
    characterId
}