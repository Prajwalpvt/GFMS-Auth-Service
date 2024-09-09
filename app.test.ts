import { calculateDiscount } from './src/utils';
import request from 'supertest';
import app from './src/app';

describe('App', () => {
  it('It Should calculate', () => {
    const result = calculateDiscount(100, 10);
    expect(result).toBe(10);
  });

  it('Should return 200 sttus', async () => {
    const response = await request(app).get('/').send();
    expect(response.statusCode).toBe(200);
  });
});
