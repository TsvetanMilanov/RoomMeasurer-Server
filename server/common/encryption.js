'use strict';
let sha1 = require('sha1');

module.exports = {
    createHash: function(text) {
        let hash = sha1(text);

        return hash;
    }
};
