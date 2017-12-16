const chai = require('chai');
const nasDaqService = require('../scripts/services/nasdaq-services');

const assert = chai.assert; // eslint-disable-line prefer-destructuring

describe('NasdaqService', () => {
    it('getCurrentIndex() should return result which is greater than 0', () => {
        nasDaqService.getCurrentIndex()
            .then((result) => {
                assert.isAbove(result, 0, 'result is greater than 0');
            });
    });
});
