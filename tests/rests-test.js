const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const assert = chai.assert; // eslint-disable-line prefer-destructuring
chai.use(chaiHttp);

describe('/GET Nasdaq stocks', () => {
    it('it should GET Nasdaq stocks', (done) => {
        chai.request(app)
            .get('/stocks/nasdaq')
            .end((err, res) => {
                assert.equal(res.status, 200, 'result status should be 200');
                assert.isTrue(Array.isArray(res.body), 'response body should be array');
                done();
            });
    });
});
