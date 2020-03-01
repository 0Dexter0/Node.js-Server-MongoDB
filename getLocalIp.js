const os = require('os');

const getLocalIp = () => {
    const intarfaces = [...Object.values(os.networkInterfaces())].flat()
    const localV4 = intarfaces.filter(({family, internal}) => family === 'IPv4' && !internal)[0];
    return localV4.address;
}

module.exports = getLocalIp;