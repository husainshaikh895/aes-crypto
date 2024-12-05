This is a custom version of aes encryption which is inspired from node package aes-crypto's implementation of aes algorithm using crypto.js

This is a thread safe version and also uses a ecb-128 bit instead of ecb-256 for performance. This is because for shorter plain text, 128 will be faster (also less secure, because of less mixing rounds)

It requires a secret key of 16 Bytes (32 hex) and no IV becuase of ecb.