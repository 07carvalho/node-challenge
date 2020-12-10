const supertest = require('supertest');
const app = require('../../../index');
const request = supertest(app);
const dealsController = require('../../controllers/deals');

describe('Get deals', () => {
  it('Consuming API endpoint', async done => {
    const res = await request.post('/deals');
    expect(res.status).toBe(200);
    done();
  })
});

describe('Get date', () => {
  it('Testing date split', () => {
    const date = dealsController.getDate('2020-12-01 11:34:21');
    expect(date).toBe('2020-12-01');
  })
});

describe('Get result', () => {
  it('Sum values and aggregate by date', () => {
    const data = [
      { value: 1, won_time: '2020-11-09 01:07:13' },
      { value: 6, won_time: '2020-11-09 01:08:48' },
      { value: 1, won_time: '2020-11-19 01:07:13' },
      { value: 6, won_time: '2020-11-23 01:08:48' },
      { value: 1, won_time: '2020-12-09 01:07:13' },
      { value: 6, won_time: '2020-12-09 01:08:48' },
      { value: 1, won_time: '2020-12-09 01:07:13' },
      { value: 6, won_time: '2020-12-19 01:08:48' }
    ];
    const result = dealsController.buildResult(data);
    const mockResult = [
      { date: '2020-11-09', value: 7 },
      { date: '2020-11-19', value: 1 },
      { date: '2020-11-23', value: 6 },
      { date: '2020-12-09', value: 8 },
      { date: '2020-12-19', value: 6 }
    ]
    expect(result).toStrictEqual(mockResult);
  })
});
