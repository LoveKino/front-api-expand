'use strict';

let front = require('./bridge');

module.exports = ({
    winId, sandbox
}) => {
    let {
        call, detect
    } = front(winId, sandbox);

    return detect().then(() => {
        return {
            call
        };
    });
};
