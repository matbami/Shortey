/* eslint-disable no-undef */
const request = require('supertest');
const faker = require('faker');
const httpStatus = require('http-status');
const app = require('../src/app');
const { Url } = require('../src/models');

describe('Url routes', () => {
  describe('ValidateUrl', () => {
    beforeEach(() => {
      newUrl = {
        url: faker.internet.url(),
      };
    });

    test('should return True if shortUrl is created and Ok', async () => {
      const res = await request(app).post('/v1/url').send(newUrl).expect(httpStatus.CREATED);

      expect(res.body).toEqual({
        id: expect.anything(),
        longUrl: newUrl.url,
        shortUrl: expect.anything(),
        urlCode: expect.anything(),
        date: Date.now(),
      });

      const dbUrl = await Url.findById(res.body.id);
      expect(dbUrl).toBeDefined();
      expect(dbUrl).toMatchObject({
        id: expect.anything(),
        longUrl: newUrl.url,
        shortUrl: expect.anything(),
        urlCode: expect.anything(),
        date: Date.now(),
      });
    });

    test('should return 400 if Url is wrong', async () => {
      await request(app).post('/v1/url').send(newUrl).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 200 on successful redirect', async () => {
      await request(app).get('/v1/UrlId').expect(httpStatus.OK).expect(res.body).toBe(html);
    });

    test('should return 400 on failed redirect', async () => {
      await request(app).get('/v1/UrlId').expect(httpStatus.INTERNAL_SERVER_ERROR).expect(res.body).toBe(html);
    });
  });
});
