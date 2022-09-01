---
id: CryptoKeyClass
title: CryptoKey
---


The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

### Beispiel

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

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary --> |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary --> |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary --> |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary --> |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->|

## 4D.CryptoKey.new()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #4D.CryptoKey.new().Syntax -->
**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| Parameter | Typ          |    | Beschreibung                                                           |
| --------- | ------------ | -- | ---------------------------------------------------------------------- |
| settings  | Objekt       | -> | Settings to generate or load a key pair                                |
| ergebnis  | 4D.CryptoKey | <- | Object encapsulating an encryption key pair|<!-- END REF -->

|

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *settings*

| Property        | Typ      | Beschreibung                                |
| --------------- | -------- | ------------------------------------------- |
| [curve](#curve) | Text     | Name of ECDSA curve                         |
| [pem](#pem)     | Text     | PEM definition of an encryption key to load |
| [size](#size)   | ganzzahl | Size of RSA key in bits                     |
| [typ](#type)    | Text     | Type of the key: "RSA", "ECDSA", or "PEM"   |

#### *CryptoKey*

The returned `CryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.

<!-- REF CryptoKey.curve -->
## .curve

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.curve.Syntax -->
**.curve** : Text<!-- END REF -->

Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->normalised curve name of the key<!-- END REF -->. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.
<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.decrypt().Syntax -->
**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->
| Parameter | Typ    |    | Beschreibung                                                                  |
| --------- | ------ | -- | ----------------------------------------------------------------------------- |
| message   | Text   | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options   | Objekt | -> | Decoding options                                                              |
| Ergebnis  | Objekt | <- | Status|<!-- END REF -->

|

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Property          | Typ  | Beschreibung                                                                                                                                     |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | Text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                           |
| encodingEncrypted | Text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64". |
| encodingDecrypted | Text | Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".      |

#### *Ergebnis*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

| Property | Typ        | Beschreibung                                                        |
| -------- | ---------- | ------------------------------------------------------------------- |
| success  | boolean    | True if the message has been successfully decrypted                 |
| ergebnis | Text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors   | collection | If `success` is `false`, may contain a collection of errors         |

In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.
<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.encrypt().Syntax -->
**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->
| Parameter | Typ    |    | Beschreibung                                                                                   |
| --------- | ------ | -- | ---------------------------------------------------------------------------------------------- |
| message   | Text   | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted.                  |
| options   | Objekt | -> | Encoding options                                                                               |
| Ergebnis  | Text   | <- | Message encrypted and encoded using the `options.encodingEncrypted`|<!-- END REF -->

|

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Property          | Typ  | Beschreibung                                                                                                                                              |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                                    |
| encodingEncrypted | Text | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                       |
| encodingDecrypted | Text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8". |

#### *Ergebnis*

The returned value is an encrypted message.
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->
**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->
| Parameter | Typ  |    | Beschreibung                                         |
| --------- | ---- | -- | ---------------------------------------------------- |
| Ergebnis  | Text | <- | Private key in PEM format|<!-- END REF -->

|

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Ergebnis*

The returned value is the private key.
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->
**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->
| Parameter | Typ  |    | Beschreibung                                        |
| --------- | ---- | -- | --------------------------------------------------- |
| Ergebnis  | Text | <- | Public key in PEM format|<!-- END REF -->

|

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Ergebnis*

The returned value is the public key.
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.pem.Syntax -->
**.pem** : Text<!-- END REF -->

<!-- REF #CryptoKey.pem.Summary -->
PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.sign().Syntax -->
.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->
| Parameter | Typ    |    | Beschreibung                                                                                               |
| --------- | ------ | -- | ---------------------------------------------------------------------------------------------------------- |
| message   | Text   | -> | Message string to sign                                                                                     |
| options   | Objekt | -> | Signing options                                                                                            |
| Ergebnis  | Text   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option|<!-- END REF -->

|

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `CryptoKey` object keys and provided *options*. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### *options*

| Property          | Typ     | Beschreibung                                                                                                                                                         |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Text    | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
| encodingEncrypted | Text    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                                  |
| pss               | boolean | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm                                   |
| encoding          | Text    | ERepresentation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".                                                      |

#### *Ergebnis*

The utf8 representation of the *message* string.
<!-- END REF -->

<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.size.Syntax -->
**.size** : Integer<!-- END REF -->

Defined only for RSA keys: <!-- REF #CryptoKey.size.Summary -->the size of the key in bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->
## .typ
<!-- END REF -->

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.type.Syntax -->
**.type** : Text<!-- END REF -->

<!-- REF #CryptoKey.type.Summary -->
Name of the key type - "RSA", "ECDSA", "PEM" <!-- END REF -->.<li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).</li><!-- END REF -->

<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>History</summary>

| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

<!-- REF #CryptoKey.verify().Syntax -->
**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->
| Parameter | Typ    |    | Beschreibung                                                                                      |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message   | Text   | -> | Message string that was used to produce the signature                                             |
| signature | Text   | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options   | Objekt | -> | Signing options                                                                                   |
| Ergebnis  | Objekt | <- | Status of the verification|<!-- END REF -->

|

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `CryptoKey` object keys and provided *options*.

The `CryptoKey` must contain a valid **public** key.

#### *options*

| Property | Typ     | Beschreibung                                                                                                                                                         |
| -------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash     | Text    | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
| pss      | boolean | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm                                   |
| encoding | Text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".                                                              |

#### *Ergebnis*

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Property | Typ        | Beschreibung                                                                           |
| -------- | ---------- | -------------------------------------------------------------------------------------- |
| success  | boolean    | True if the signature matches the message                                              |
| errors   | collection | If `success` is `false`, may contain a collection of errors|<!-- END REF -->
|
