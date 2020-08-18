---
id: cryptoClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymetric encryption key pair.

This class is available from the `4D` class store.

### Example

The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token.

```4d
 // Generate a new ECDSA key pair
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Get signature as base64
$message:="hello world"
$signature:=$key.sign($message;New object("hash";"HASH256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"HASH256"))
ASSERT($status.success)
```


## Summary
||
|---|
|[**4D.CryptoKey.new**( *settings* ) -> *cryptoKey*](#new-)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new object encapsulating an encryption key pair|
|[**.curve** -> *text*](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;normalised curve name of the key.  |
|[**.decrypt**( *message* ; *options* ) -> *status*](#decrypt-)<p>&nbsp;&nbsp;&nbsp;&nbsp;decrypts the *message* parameter using the **private** key|
|[**.encrypt**( *message* ; *options* ) -> *encrypted*](#encrypt-)<p>&nbsp;&nbsp;&nbsp;&nbsp;encrypts the *message* parameter using the **public** key|
|[**.getPrivateKey( )** -> *privateKey*](#getprivatekey-)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the private key of the `cryptoKey` object|
|[**.getPublicKey( )** -> *publicKey*](#getpublickey-)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the public key of the `cryptoKey` object|
|[.**sign** (*message* ; *options*) -> *signature*](#sign-)<p>&nbsp;&nbsp;&nbsp;&nbsp;signs the utf8 representation of a *message* string |
|[**.size** -> *integer*](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;the size of the key in bits |
|[**.type** -> *text*](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;Name of the key type |
|[**.verify**( *message* ; *signature* ; *options* ) -> *status*](#verify-)<p>&nbsp;&nbsp;&nbsp;&nbsp;verifies the base64 signature against the utf8 representation of *message*|




---
## 4D.CryptoKey.new( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**4D.CryptoKey.new**( *settings* ) -> *cryptoKey*
|Parameter|Type||Description|
|---|---|----|---|
|settings|object|->|Settings to generate or load a key pair|
|cryptoKey|object|<-|Object encapsulating an encryption key pair|


The `4D.CryptoKey.new( )` function  creates a new object encapsulating an encryption key pair, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *settings*

|Property|Type|Description|
|---|---|---|
|type|text|Type of the key: "RSA", "ECDSA", or "PEM":<li>"RSA": generates an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).</li>|
|size|integer|Size of RSA key in bits. 2048 by default|
|curve|text|name of ECDSA curve. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512|
|pem|text|PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it.|

#### *cryptoKey*

The returned `cryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.

---
## .curve

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.curve** -> *text*
|Parameter|Type||Description|
|---|---|---|----|
|curve|text|<-|Normalised curve name of the key|

Defined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.

---
## .decrypt( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.decrypt**( *message* ; *options* ) -> *status*
|Parameter|Type||Description|
|---|---|----|---|
|message|text|->|Message string to be decoded using `options.encodingEncrypted` and decrypted.|  
|options|object|->|Decoding options|
|status|object|<-|Result|


The `.decrypt( )` function decrypts the *message* parameter using the **private** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

|Property|Type|Description|
|---|---|---|
|hash|text|Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". |
|encodingEncrypted|text|Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".|
|encodingDecrypted|text|Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".|


#### *status*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

|Property|Type|Description|
|---|---|---|
|success|boolean|True if the message has been successfully decrypted|
|result|text|Message decrypted and decoded using the `options.encodingDecrypted`|
|errors|collection|If `success` is `false`, may contain a collection of errors|

In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.


---
## .encrypt( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.encrypt**( *message* ; *options* ) -> *encrypted*
|Parameter|Type||Description|
|---|---|----|---|
|message|text|->|Message string to be encoded using `options.encodingDecrypted` and encrypted.|  
|options|object|->|Encoding options|
|encrypted|text|<-|Message encrypted and encoded using the `options.encodingEncrypted`|

The `.encrypt( )` function encrypts the *message* parameter using the **public** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

|Property|Type|Description|
|---|---|---|
|hash|text|Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". |
|encodingEncrypted|text|Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".|
|encodingDecrypted|text|Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".|


#### *encrypted*

The returned value is an encrypted message.




---
## .getPrivateKey( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.getPrivateKey( )** -> *privateKey*
|Parameter|Type||Description|
|---|---|----|---|
|privateKey|text|<-|Private key in PEM format|

The `.getPrivateKey( )` function  returns the private key of the `cryptoKey` object in PEM format, or an empty string if none is available.

#### *privateKey*

The returned value is the private key.


---
## .getPublicKey( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.getPublicKey( )** -> *publicKey*
|Parameter|Type||Description|
|---|----|---|---|
|publicKey|text|<-|Public key in PEM format|


The `.getPublicKey( )` function returns the public key of the `cryptoKey` object in PEM format, or an empty string if none is available.

#### *publicKey*

The returned value is the public key.

---
## .pem

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.pem** -> *text*
|Property|Type||Description|
|---|---|---|----|
|pem|text|<-|PEM definition of an encryption key to load|

---
## .sign( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

.**sign** (*message* ; *options*) -> *signature*
|Parameter|Type||Description|
|---|----|---|---|
|message|text|->|Message string to sign|  
|options|object|->|Signing options|
|signature|text|<-|Resulting signature in Base64 or Base64URL representation, depending on "encoding" option|

The `.sign( )` function signs the utf8 representation of a *message* string using the `cryptoKey` object keys and provided *options*. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `cryptoKey` must contain a valid **private** key.

#### *options*

|Property|Type|Description|
|---|---|---|
|hash|text|Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size|
|encodingEncrypted|text|Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".|
|pss|boolean|Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm|
|encoding|text|ERepresentation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".|


#### *signature*

The utf8 representation of the *message* string.

---
## .size

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

**.size** -> *integer*
|Property|Type||Description|
|---|---|---|----|
|size|integer|<-|Size of the key in bits|
Defined only for RSA keys: the size of the key in bits. Typically 2048 (default).

---
## .type

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>


**.type** -> *text*
|Property|Type||Description|
|---|---|---|----|
|type|text|<-|Name of the key type|
Name of the key type - "RSA", "ECDSA", or "PEM":

---
## .verify( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

**.verify**( *message* ; *signature* ; *options* ) -> *status*
|Parameter|Type||Description|
|---|---|---|---|
|message|text|->|Message string that was used to produce the signature|  
|signature|text|->|Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value|
|options|object|->|Signing options|
|status|object|<-|Result of the verification|

The `.verify( )` function verifies the base64 signature against the utf8 representation of *message* using the `cryptoKey` object keys and provided *options*.

The `cryptoKey` must contain a valid **public** key.


#### *options*

|Property|Type|Description|
|---|---|---|
|hash|text|Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size|
|pss|boolean|Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm|
|encoding|text|Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".


#### *status*

The function returns a `status` object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

|Property|Type|Description|
|---|---|---|
|success|boolean|True if the signature matches the message|
|errors|collection|If `success` is `false`, may contain a collection of errors|
