'use strict';

let syncPageState = require('./syncPageState');

let isFirstInWindow = require('./isFirstInWindow');

let {
    startMomenter
} = require('doming');

let startMoment = startMomenter();

let first = (memory, winId, config) => {
    let entrance = config.entrance;
    let network = config.nextwork || {};
    return startMoment({
        startTimeout: network.startTimeout || 10000
    }).then(() => {
        // hack fail to load page in chrome
        if (window.location.href === 'data:text/html,chromewebdata') {
            throw new Error('fail to load page!');
        } else {
            return isFirstInWindow(memory, winId).then(res => {
                if (res) {
                    // sync page state
                    syncPageState(entrance);
                    // hack. js wont end here.
                    window.location.reload();
                    return true;
                } else {
                    return false;
                }
            });

        }
    });
};

module.exports = first;
