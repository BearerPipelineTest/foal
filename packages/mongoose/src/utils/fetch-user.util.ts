/**
 * Create a function that finds the first document that matches some id.
 *
 * It returns undefined if no document can be found.
 *
 * This function is usually used by:
 * - TokenRequired (@foal/core)
 * - TokenOptional (@foal/core)
 * - JWTRequired (@foal/jwt)
 * - JWTOptional (@foal/jwt)
 *
 * @export
 * @deprecated
 * @param {any} userModel - The Mongoose Model
 * @returns {((id: number|string) => Promise<any>)} The returned function expecting an id.
 */
export function fetchUser(userModel: any): (id: number|string) => Promise<any> {
  return (id: number|string) => {
    if (typeof id === 'number') {
      throw new Error('Unexpected type for MongoDB user ID: number.');
    }
    return new Promise((resolve, reject) => {
      userModel.findOne({ _id: id }, (err: any, res: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(res || undefined);
      });
    });
  };
}
