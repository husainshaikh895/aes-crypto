const AesCrypto = require('./index')

secret_key = ('3c778135777aa80e3d360830cd8a661c')

const encrypted = AesCrypto.encrypt('plain-text', secret_key)
const decrypted = AesCrypto.decrypt(encrypted, secret_key)

console.log('encrypted >>>>>>', encrypted)
console.log('decrypted >>>>>>', decrypted)