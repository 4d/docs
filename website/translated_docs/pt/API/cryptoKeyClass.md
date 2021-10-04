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
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```


### Summary
|                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #cryptokey.curve.Syntax -->](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.curve.Summary --> |
| [<!-- INCLUDE #cryptokey.decrypt().Syntax -->](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.decrypt().Summary -->|
| [<!-- INCLUDE #cryptokey.encrypt().Syntax -->](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.encrypt().Summary -->|
| [<!-- INCLUDE #cryptokey.getPrivateKey().Syntax -->](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #cryptokey.getPublicKey().Syntax -->](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.getPublicKey().Summary -->|
| [<!-- INCLUDE #cryptokey.sign().Syntax -->](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.sign().Summary --> |
| [<!-- INCLUDE #cryptokey.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.size.Summary --> |
| [<!-- INCLUDE #cryptokey.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.type.Summary --> |
| [<!-- INCLUDE #cryptokey.verify().Syntax -->](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.verify().Summary -->|







## 4D.CryptoKey.new()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| Parameter | Type         |    | Description                                                            |
| --------- | ------------ | -- | ---------------------------------------------------------------------- |
| settings  | Object       | -> | Settings to generate or load a key pair                                |
| result    | 4D.CryptoKey | <- | Object encapsulating an encryption key pair|<!-- END REF -->


|


The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *settings*

| Property        | Type    | Description                                    |
| --------------- | ------- | ---------------------------------------------- |
| [curve](#curve) | text    | Name of ECDSA curve                            |
| [pem](#pem)     | text    | PEM definition of an encryption key to load    |
| [size](#size)   | integer | Size of RSA key in bits                        |
| [type](#type)   | text    | Type of the key: "RSA", "ECDSA", or "PEM"</li> |


#### *cryptoKey*

The returned `cryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.



<!-- REF cryptokey.curve -->
## .curve

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #cryptokey.curve.Syntax -->**.curve** : Text<!-- END REF -->




Defined only for ECDSA keys: the <!-- REF #cryptokey.curve.Summary -->normalised curve name of the key. <!-- END REF -->
Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.
<!-- END REF -->


<!-- REF cryptokey.decrypt().Desc -->
## .decrypt()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #cryptokey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #cryptokey.decrypt().Params -->
| Parameter | Type   |    | Description                                                                   |
| --------- | ------ | -- | ----------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options   | Object | -> | Decoding options                                                              |
| Result    | Object | <- | Status                                                                        |
<!-- END REF -->


The `.decrypt()` function <!-- REF #cryptokey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Property          | Type | Description                                                                                                                                      |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                           |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64". |
| encodingDecrypted | text | Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".      |


#### *Result*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

| Property | Type       | Description                                                         |
| -------- | ---------- | ------------------------------------------------------------------- |
| success  | boolean    | True if the message has been successfully decrypted                 |
| result   | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors   | collection | If `success` is `false`, may contain a collection of errors         |


In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.
<!-- END REF -->


<!-- REF cryptokey.encrypt().Desc -->
## .encrypt()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #cryptokey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #cryptokey.encrypt().Params -->
| Parameter | Type   |    | Description                                                                   |
| --------- | ------ | -- | ----------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options   | Object | -> | Encoding options                                                              |
| Result    | Texto  | <- | Message encrypted and encoded using the `options.encodingEncrypted`           |
<!-- END REF -->

The `.encrypt()` function <!-- REF #cryptokey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Property          | Type | Description                                                                                                                                               |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                                    |
| encodingEncrypted | text | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                       |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8". |


#### *Result*

The returned value is an encrypted message.
<!-- END REF -->




<!-- REF cryptokey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #cryptokey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #cryptokey.getPrivateKey().Params -->
| Parameter | Type  |    | Description               |
| --------- | ----- | -- | ------------------------- |
| Result    | Texto | <- | Private key in PEM format |
<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #cryptokey.getPrivateKey().Summary -->returns the private key of the `cryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Result*

The returned value is the private key.
<!-- END REF -->



<!-- REF cryptokey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #cryptokey.getPublicKey().Syntax -->**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #cryptokey.getPublicKey().Params -->
| Parameter | Type  |    | Description              |
| --------- | ----- | -- | ------------------------ |
| Result    | Texto | <- | Public key in PEM format |
<!-- END REF -->


The `.getPublicKey()` function <!-- REF #cryptokey.getPublicKey().Summary -->returns the public key of the `cryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Result*

The returned value is the public key.
<!-- END REF -->

---
<!-- REF cryptokey.pem.Desc -->
## .pem

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #cryptokey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #cryptokey.pem.Summary -->PEM definition of an encryption key to load<!-- END REF -->. If the key is a private key, the RSA or ECDSA public key will be deduced from it.
<!-- END REF -->



<!-- REF cryptokey.sign().Desc -->
## .sign()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #cryptokey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #cryptokey.sign().Params -->
| Parameter | Type   |    | Description                                                                     |
| --------- | ------ | -- | ------------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string to sign                                                          |
| options   | Object | -> | Signing options                                                                 |
| Result    | Texto  | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |
<!-- END REF -->

The `.sign()` function <!-- REF #cryptokey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `cryptoKey` object keys and provided *options*. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `cryptoKey` must contain a valid **private** key.

#### *options*

| Property          | Type    | Description                                                                                                                                                          |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
| encodingEncrypted | text    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                                  |
| pss               | boolean | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm                                   |
| encoding          | text    | ERepresentation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".                                                      |


#### *Result*

The utf8 representation of the *message* string.
<!-- END REF -->


<!-- REF cryptokey.size -->
## .size
<!-- END REF -->

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #cryptokey.size.Syntax -->**.size** : Integer<!-- END REF -->


Defined only for RSA keys: <!-- REF #cryptokey.size.Summary -->the size of the key in bits<!-- END REF -->. Typically 2048 (default).


<!-- REF cryptokey.type -->
## .type
<!-- END REF -->

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


<!-- REF #cryptokey.type.Syntax -->**.type** : Text<!-- END REF -->


<!-- REF #cryptokey.type.Summary -->Name of the key type - "RSA", "ECDSA", "PEM"<!-- END REF --><li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).


<!-- REF cryptokey.verify().Desc -->
## .verify()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #cryptokey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #cryptokey.verify().Params -->
| Parameter | Type   |    | Description                                                                                       |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string that was used to produce the signature                                             |
| signature | Texto  | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options   | Object | -> | Signing options                                                                                   |
| Result    | Object | <- | Status of the verification                                                                        |
<!-- END REF -->

The `.verify()` function <!-- REF #cryptokey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `cryptoKey` object keys and provided *options*.

The `cryptoKey` must contain a valid **public** key.


#### *options*

| Property | Type    | Description                                                                                                                                                          |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash     | text    | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
| pss      | boolean | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm                                   |
| encoding | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".                                                              |


#### *Result*

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Property | Type       | Description                                                 |
| -------- | ---------- | ----------------------------------------------------------- |
| success  | boolean    | True if the signature matches the message                   |
| errors   | collection | If `success` is `false`, may contain a collection of errors |
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
