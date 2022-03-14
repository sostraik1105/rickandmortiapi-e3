const randomLocation = () => {
    return Math.floor((Math.random() * 126)+1)
}

const generalId = (char = '') => {
    const arr = char.split('/');
    return arr[arr.length - 1];
}

module.exports = {
    randomLocation,
    generalId
}