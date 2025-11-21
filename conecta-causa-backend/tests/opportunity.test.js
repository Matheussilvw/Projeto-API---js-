const request = require('supertest');
const app = require('../src/index');
describe('Opportunity flows', () => {
  let token;
  beforeAll(async () => {
    await request(app).post('/api/auth/register').send({ name: 'Tester', email: 'opp@test.com', password: 'pass123', role: 'volunteer' });
    const res = await request(app).post('/api/auth/login').send({ email: 'opp@test.com', password: 'pass123' });
    token = res.body.token;
  });
  it('create opportunity (needs auth) should fail if no auth', async () => {
    await request(app).post('/api/opportunities').send({ title: 'X' }).expect(401);
  });
}, 20000);
