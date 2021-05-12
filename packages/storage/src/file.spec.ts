import { strictEqual } from 'assert';
import { File } from './file';

describe('File', () => {

  it('should set its properties "encoding", "filename", "mimeType" and "size" from the constructor.', () => {
    const file1 = new File({
      encoding: '7bit',
      filename: 'report.txt',
      mimeType: 'text/plain',
      size: 36,
    });
    strictEqual(file1.encoding, '7bit');
    strictEqual(file1.filename, 'report.txt');
    strictEqual(file1.mimeType, 'text/plain');
    strictEqual(file1.size, 36);

    const file2 = new File({
      encoding: '7bit',
      // filename is optional
      mimeType: 'text/plain',
      // size is optional
    });
    strictEqual(file2.filename, undefined);
    strictEqual(file2.size, 0);
  });

  describe('when a path is provided in the constructor', () => {

    let file: File;

    beforeEach(() => file = new File({
      encoding: '7bit',
      filename: 'report.txt',
      mimeType: 'text/plain',
      path: 'foo/bar.txt',
    }));

    it('should set the "path" property with it.', () => {
      strictEqual(file.path, 'foo/bar.txt');
    });

    it('should set the "buffer" property with an empty buffer.', () => {
      strictEqual(file.buffer.length, 0);
    });

  });

  describe('when a buffer is provided in the constructor', () => {

    let file: File;

    beforeEach(() => file = new File({
      buffer: Buffer.alloc(10),
      encoding: '7bit',
      filename: 'report.txt',
      mimeType: 'text/plain',
    }));

    it('should set the "buffer" property with it.', () => {
      strictEqual(file.buffer.length, 10);
    });

    it('should set the "path" property with an empty string.', () => {
      strictEqual(file.path, '');
    });

  });

});
