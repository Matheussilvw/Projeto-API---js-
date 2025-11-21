const request = require('supertest');
const app = require('../src/index');
describe('Auth flows', () => {
  it('register and login', async () => {
    const email = 'testuser@example.com';
    await request(app).post('/api/auth/register').send({ name: 'Test', email, password: 'pass123', role: 'volunteer' }).expect(201);
    const res = await request(app).post('/api/auth/login').send({ email, password: 'pass123' }).expect(200);
    expect(res.body.token).toBeDefined();
  }, 20000);
});
