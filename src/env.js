'use strict';

let front = require('./bridge');

module.exports = ({
    winId, sandbox
}) => {
    let call = front(winId, sandbox);

    // detect env
    return call.detect().then(() => {
        return {
            call
        };
    });
};
