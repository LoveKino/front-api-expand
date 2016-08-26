'use strict';

module.exports = (call, winId) => {
    return {
        get: (key) => call('winMemory.get', [winId, key]),
        set: (key, value) => call('winMemory.set', [winId, key, value]),
        remove: (key) => call('winMemory.remove', [winId, key]),
        clear: () => call('winMemory.removeWin', [winId])
    };
};
