'use strict';

module.exports = (call) => {
    return {
        get: (key) => call('memory.get', [key]),
        set: (key, value) => call('memory.set', [key, value]),
        remove: (key) => call('memory.remove', [key])
    };
};
