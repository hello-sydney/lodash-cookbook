const _ = require('lodash');

const debounce = () => {
    let duration = 1000;
    let start_time = new Date().getTime();

    return _.debounce(() => {
        let end_time = new Date().getTime();
        return end_time >= start_time + duration;

    }, duration);
};

module.exports = debounce;
