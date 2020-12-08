// const Helper = require('../helpers/helper');
// const helper = new Helper();
const supertest = require('supertest');
const app = require('../../../index');
const request = supertest(app);

describe('Get deals', () => {
  it('Consuming API endpoint', async done => {
    const res = await request.get('/pipedrive/deals');
    // expect(res.statusCode).toEqual(200);
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('success');
    expect(res.body).toHaveProperty('data');
    done();
  })
})