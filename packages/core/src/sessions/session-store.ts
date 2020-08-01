// FoalTS
import { generateToken } from '../common';
import { Config } from '../core';
import { SESSION_DEFAULT_ABSOLUTE_TIMEOUT, SESSION_DEFAULT_INACTIVITY_TIMEOUT } from './constants';
import { Session } from './session';
import { SessionState } from './session-state.interface';

export interface SessionOptions {
  csrfToken?: boolean;
  userId?: number|string;
}

/**
 * Abstract class to be override when creating a session storage service.
 *
 * A session store peforms CRUD operations on sessions and can store them in
 * a database, file system, memory, etc.
 *
 * Examples of Store: TypeORMStore, RedisStore, MongoDBStore.
 *
 * @export
 * @abstract
 * @class Store
 */
export abstract class Store {

  static concreteClassConfigPath = 'settings.session.store';
  static concreteClassName = 'ConcreteSessionStore';

  /**
   * Read session expiration timeouts from the configuration.
   *
   * The values are in seconds.
   *
   * Default values are:
   * - 15 min for inactivity timeout
   * - 1 week for absolute timeout
   *
   * This method throws an error if one of the following is true:
   * - The given inactivity timeout is negative.
   * - The given absolute timeout is negative.
   * - The given inactivity timeout is greater than the absolute timeout.
   *
   * @static
   * @returns {{ inactivity: number , absolute: number }} The expiration timeouts
   * @memberof Store
   */
  static getExpirationTimeouts(): { inactivity: number , absolute: number } {
    const result = {
      absolute: Config.get('settings.session.expirationTimeouts.absolute', 'number', SESSION_DEFAULT_ABSOLUTE_TIMEOUT),
      inactivity: Config.get(
        'settings.session.expirationTimeouts.inactivity',
        'number',
        SESSION_DEFAULT_INACTIVITY_TIMEOUT
      ),
    };
    if (result.absolute < 0) {
      throw new Error('[CONFIG] The value of settings.session.expirationTimeouts.absolute must be a positive number.');
    }
    if (result.inactivity < 0) {
      throw new Error(
        '[CONFIG] The value of settings.session.expirationTimeouts.inactivity must be a positive number.'
      );
    }
    if (result.absolute < result.inactivity) {
      throw new Error(
        '[CONFIG] The value of settings.session.expirationTimeouts.absolute must be greater than *.inactivity.'
      );
    }
    return result;
  }

  /**
   * Create and save a new session.
   *
   * This method *MUST* call the `generateSessionID` method to generate the session ID.
   * This method *MUST* call the `applySessionOptions` method to extend the sessionContent.
   *
   * @abstract
   * @param {object} sessionContent - The content of the session (often includes the user ID).
   * @param {SessionOptions} options - Session options.
   * @param {boolean} [options.csrfToken] - Generate and add a `csrfToken` to the sessionContent.
   * @returns {Promise<Session>} The created session.
   * @memberof Store
   */
  abstract createAndSaveSession(sessionContent: object, options?: SessionOptions): Promise<Session>;
  /**
   * Update and extend the lifetime of a session.
   *
   * Depending on the implementation, the internal behavior can be similar to "update" or "upsert".
   *
   * @abstract
   * @param {SessionState} state - The session state.
   * @returns {Promise<void>}
   * @memberof Store
   */
  abstract update(state: SessionState): Promise<void>;
  /**
   * Delete a session, whether it exists or not.
   *
   * @abstract
   * @param {string} id - The ID of the session.
   * @returns {Promise<void>}
   * @memberof Store
   */
  abstract destroy(id: string): Promise<void>;
  /**
   * Read a session from its ID.
   *
   * Returns `undefined` if the session does not exist or has expired.
   *
   * @abstract
   * @param {string} id - The ID of the session.
   * @returns {(Promise<SessionState|undefined>)} The state of the session.
   * @memberof Store
   */
  abstract read(id: string): Promise<SessionState|undefined>;
  /**
   * Clear all sessions.
   *
   * @abstract
   * @returns {Promise<void>}
   * @memberof Store
   */
  abstract clear(): Promise<void>;
  /**
   * Some session stores may need to run periodically background jobs to cleanup expired sessions.
   *
   * This method deletes all expired sessions.
   *
   * @abstract
   * @returns {Promise<void>}
   * @memberof Store
   */
  abstract cleanUpExpiredSessions(): Promise<void>;

  /**
   * Generate a 128-bit base64url-encoded session ID.
   *
   * @protected
   * @returns {Promise<string>} - The session ID.
   * @memberof Store
   */
  protected async generateSessionID(): Promise<string> {
    return generateToken();
  }

  /**
   * Apply session options to the given session content.
   *
   * @protected
   * @param {object} content - Session content.
   * @param {SessionOptions} options - Session options.
   * @param {boolean} [options.csrfToken] - Generate and add a `csrfToken` to the sessionContent.
   * @returns {Promise<void>}
   * @memberof Store
   */
  protected async applySessionOptions(content: object, options: SessionOptions): Promise<void> {
    if (options.csrfToken) {
      (content as any).csrfToken = await generateToken();
    }
  }
}

export { Store as SessionStore };
