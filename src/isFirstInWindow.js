'use strict';

// TODO fix bad logic
let isFirstInWindow = (store) => {
    const notFirstKey = 'not-first';
    return store.get(notFirstKey).then((res) => {
        if (res) {
            // not first
            return false;
        } else {
            return store.set(notFirstKey, true).then(() => {
                // first
                return true;
            });
        }
    });
};

module.exports = isFirstInWindow;
