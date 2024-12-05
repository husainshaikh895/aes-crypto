'use strict';

const crypto = require('crypto');

class AesCryptoThreadSafe {
    // Shared cache for the entire class
    static cache = new Map();

    static getSecretBuffer(secretKey) {
    if (!AesCryptoThreadSafe.cache.has(secretKey)) {
        AesCryptoThreadSafe.cache.set(secretKey, Buffer.from(secretKey, 'hex'));
    }
        return AesCryptoThreadSafe.cache.get(secretKey);
    }


  static encrypt(textPlain, secretKey) {
    if (!secretKey || typeof secretKey !== 'string' || secretKey.length !== 32) {
      throw new Error('A valid secret key of 16 bytes (32 hex) must be provided as a string');
    }
    const secretBuffer = AesCryptoThreadSafe.getSecretBuffer(secretKey);
    const cipher = crypto.createCipheriv('aes-128-ecb', secretBuffer, null);
    let cipherText = cipher.update(textPlain, 'utf8', 'hex');
    cipherText += cipher.final('hex');
    return cipherText;
  }

  static decrypt(textEncrypted, secretKey) {
    if (!secretKey || typeof secretKey !== 'string') {
      throw new Error('A valid secret key must be provided as a string');
    }
    const secretBuffer = AesCryptoThreadSafe.getSecretBuffer(secretKey);
    const decipher = crypto.createDecipheriv('aes-128-ecb', secretBuffer, null);
    let decryptedString = decipher.update(textEncrypted, 'hex', 'utf8');
    decryptedString += decipher.final('utf8');
    return decryptedString;
  }
}

module.exports = AesCryptoThreadSafe;
