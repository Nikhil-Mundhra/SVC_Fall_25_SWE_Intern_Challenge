import request from 'supertest';
import { describe, it, expect } from 'vitest';
import http from 'http';
import app from '../app'; // change if server entry differs
describe('health', () => {
  it('GET /health -> 200', async () => {
    const srv = http.createServer(app);
    const res = await request(srv).get('/health');
    expect([200,204]).toContain(res.status);
  });
});
