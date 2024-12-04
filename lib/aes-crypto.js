'use strict';

const crypto = require('crypto');

class AesCrypto {
  static encrypt(textPlain, secretKey) {
    if (!secretKey || typeof secretKey !== 'string') {
      throw new Error('A valid secret key must be provided as a string');
    }
    const secretBuffer = Buffer.from(secretKey, 'hex');
    const cipher = crypto.createCipheriv('aes-256-ecb', secretBuffer, null);
    let cipherText = cipher.update(textPlain, 'utf8', 'hex');
    cipherText += cipher.final('hex');
    return cipherText;
  }

  static decrypt(textEncrypted, secretKey) {
    if (!secretKey || typeof secretKey !== 'string') {
      throw new Error('A valid secret key must be provided as a string');
    }
    const secretBuffer = Buffer.from(secretKey, 'hex');
    const decipher = crypto.createDecipheriv('aes-256-ecb', secretBuffer, null);
    let decryptedString = decipher.update(textEncrypted, 'hex', 'utf8');
    decryptedString += decipher.final('utf8');
    return decryptedString;
  }
}

module.exports = AesCrypto;
