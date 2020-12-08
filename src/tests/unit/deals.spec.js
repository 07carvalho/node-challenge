const supertest = require('supertest');
const app = require('../../../index');
const request = supertest(app);

describe('Get deals', () => {
  it('Consuming API endpoint', async done => {
    const res = await request.get('/deals');
    expect(res.status).toBe(200);
    done();
  })
})