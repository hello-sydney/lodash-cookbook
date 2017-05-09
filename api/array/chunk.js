const _ = require('lodash');

const chunk = (array, size) => {
    return _.chunk(array, size);
};

module.exports = chunk;
