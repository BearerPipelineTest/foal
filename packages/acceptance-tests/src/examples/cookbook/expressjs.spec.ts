// std
import { strictEqual } from 'assert';

// 3p
import * as express from 'express';
import * as request from 'supertest';

// FoalTS
import { createApp } from '@foal/core';

it('[Docs] Cookbook > ExpressJS', async () => {
  let called = false;
  class AppController {}

  /* Code - begin */
  const expressApp = express();
  expressApp.use((req, res, next) => {
    called = true;
    next();
  });
  const app = createApp(AppController, expressApp);
  /* Code - end */

  await request(app)
    .get('/foo')
    .expect(404);

  strictEqual(called, true);

  called = false;

  class MyServiceClass {
    doSomething() {
      called = true;
    }
  }

  /* Code - begin */
  const app2 = createApp(AppController);
  app2.foal.services.get(MyServiceClass).doSomething();
  /* Code - end */

  strictEqual(called, true);
});
