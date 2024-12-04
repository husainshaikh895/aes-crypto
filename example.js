const AesCrypto = require('./index')

secret_key = ('11122233344455566677788822244455555555555555555231231321313aaaff')

const encrypted = AesCrypto.encrypt('some-plain-text', secret_key)
const decrypted = AesCrypto.decrypt(encrypted, secret_key)

console.log('encrypted >>>>>>', encrypted)
console.log('decrypted >>>>>>', decrypted)