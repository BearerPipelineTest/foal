// FoalTS
import { renderError } from '../common';
import { Config, Context, HttpResponse } from '../core';
import { CreateAppOptions } from './create-app';
import { sendResponse } from './send-response';

/**
 * Create an express middleware to return a 500 HTML page if an error is thrown and is not caught.
 *
 * @export
 * @param {CreateAppOptions} options - Options supplied to `createApp`.
 * @param {*} appController - Instance of the root controller class (App).
 * @param {*} [logFn=console.error]
 * @returns {ErrorRequestHandler}
 */
export function handleErrors(options: CreateAppOptions, appController: any, logFn = console.error) {
  return async (err: any, req: any, res: any, next: (err?: any) => any) => {
    if (err.expose && err.status) {
      next(err);
      return;
    }

    if (Config.get('settings.logErrors', 'boolean', true)) {
      logFn(err.stack);
    }

    const ctx = req.foal ? req.foal.ctx : new Context(req);

    let response: HttpResponse;
    if (appController.handleError) {
      try {
        response = await appController.handleError(err, ctx);
      } catch (error) {
        response = await renderError(err, ctx);
      }
    } else {
      response = await renderError(err, ctx);
    }
    sendResponse(response, res);
  };
}
