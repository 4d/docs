---
id: CryptoKeyClass
title: CryptoKey
---


The `CryptoKey` class in the 4D language encapsulates an asymetric encryption key pair.

This class is available from the `4D` class store.

### Ejemplo

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
|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new `4D.CryptoKey` object encapsulating an encryption key pair</p>                |
| [**.curve** : Text](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;normalised curve name of the key.  </p>                                                                  |
| [**.decrypt**( *message* : Text ; *options* : Object ) : Object](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;decrypts the *message* parameter using the **private** key</p>                   |
| [**.encrypt**( *message* : Text ; *options* : Object ) : Text](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;encrypts the *message* parameter using the **public** key</p>                     |
| [**.getPrivateKey()** : Text](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the private key of the `CryptoKey` object</p>                                                |
| [**.getPublicKey( )** : Text](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the public key of the `CryptoKey` object</p>                                                 |
| [.**sign** (*message* : Text ; *options* : Text) : Text](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;signs the utf8 representation of a *message* string </p>                              |
| [**.size** : Integer](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;the size of the key in bits </p>                                                                 |
| [**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;Name of the key type - "RSA", "ECDSA", "PEM" </p>                                                                    |
| [**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;verifies the base64 signature against the utf8 representation of *message*</p> |








## 4D.CryptoKey.new()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey
| Parameter  | Tipo         |    | Descripción                                 |
| ---------- | ------------ | -- | ------------------------------------------- |
| parámetros | Objeto       | -> | Settings to generate or load a key pair     |
| result     | 4D.CryptoKey | <- | Object encapsulating an encryption key pair |

The `4D.CryptoKey.new()` function creates a new `4D.CryptoKey` object encapsulating an encryption key pair, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *parámetros*

| Propiedad       | Tipo    | Descripción                                    |
| --------------- | ------- | ---------------------------------------------- |
| [curve](#curve) | text    | Name of ECDSA curve                            |
| [pem](#pem)     | text    | PEM definition of an encryption key to load    |
| [size](#size)   | integer | Size of RSA key in bits                        |
| [type](#type)   | text    | Type of the key: "RSA", "ECDSA", or "PEM"</li> |


#### *CryptoKey*

The returned `CryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.



## .curve

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

**.curve** : Text



Defined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.


## .decrypt()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**.decrypt**( *message* : Text ; *options* : Object ) : Object
| Parameter | Tipo   |    | Descripción                                                                   |
| --------- | ------ | -- | ----------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options   | Objeto | -> | Decoding options                                                              |
| Resultado | Objeto | <- | Status                                                                        |



The `.decrypt()` function decrypts the *message* parameter using the **private** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propiedad         | Tipo | Descripción                                                                                                                                                    |
| ----------------- | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                                         |
| encodingEncrypted | text | Codificación utilizada para convertir el parámetro `mensaje` en la representación binaria a descifrar. Puede ser "Base64", o "Base64URL". Default is "Base64". |
| encodingDecrypted | text | Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".                    |


#### *Resultado*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

| Propiedad | Tipo       | Descripción                                                         |
| --------- | ---------- | ------------------------------------------------------------------- |
| success   | boolean    | True if the message has been successfully decrypted                 |
| result    | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors    | collection | If `success` is `false`, may contain a collection of errors         |


In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.


## .encrypt()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**.encrypt**( *message* : Text ; *options* : Object ) : Text
| Parameter | Tipo   |    | Descripción                                                                   |
| --------- | ------ | -- | ----------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options   | Objeto | -> | Encoding options                                                              |
| Resultado | Texto  | <- | Message encrypted and encoded using the `options.encodingEncrypted`           |

The `.encrypt()` function encrypts the *message* parameter using the **public** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propiedad         | Tipo | Descripción                                                                                                                                               |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                                    |
| encodingEncrypted | text | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                       |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8". |


#### *Resultado*

The returned value is an encrypted message.




## .getPrivateKey()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**.getPrivateKey()** : Text

| Parameter | Tipo  |    | Descripción               |
| --------- | ----- | -- | ------------------------- |
| Resultado | Texto | <- | Private key in PEM format |

The `.getPrivateKey()` function  returns the private key of the `CryptoKey` object in PEM format, or an empty string if none is available.

#### *Resultado*

The returned value is the private key.



## .getPublicKey()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**.getPublicKey( )** : Text
| Parameter | Tipo |    | Descripción              |
| --------- | ---- | -- | ------------------------ |
| Resultado | Text | <- | Public key in PEM format |


The `.getPublicKey()` function returns the public key of the `CryptoKey` object in PEM format, or an empty string if none is available.

#### *Resultado*

The returned value is the public key.

---
## .pem

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**.pem** : Text

PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it.



## .sign()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

.**sign** (*message* : Text ; *options* : Text) : Text
| Parameter | Tipo   |    | Descripción                                                                     |
| --------- | ------ | -- | ------------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string to sign                                                          |
| options   | Objeto | -> | Signing options                                                                 |
| Resultado | Texto  | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |

The `.sign()` function signs the utf8 representation of a *message* string using the `CryptoKey` object keys and provided *options*. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### *options*

| Propiedad         | Tipo     | Descripción                                                                                                                                                                                      |
| ----------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text     | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| encodingEncrypted | texto    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                                                              |
| pss               | booleano | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm                                                               |
| encoding          | texto    | ERepresentation to be used for result signature. Los valores posibles son "Base64" o "Base64URL". Default is "Base64".                                                                           |


#### *Resultado*

The utf8 representation of the *message* string.


## .size

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

**.size** : Integer

Defined only for RSA keys: the size of the key in bits. Typically 2048 (default).


## .type

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>


**.type** : Text
Name of the key type - "RSA", "ECDSA", "PEM"<li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).


## .verify()

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v18 R4  | Added   |
</details>

**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object
| Parameter | Tipo   |    | Descripción                                                                                       |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message   | Texto  | -> | Message string that was used to produce the signature                                             |
| signature | Texto  | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options   | Objeto | -> | Signing options                                                                                   |
| Resultado | Objeto | <- | Status of the verification                                                                        |

The `.verify()` function verifies the base64 signature against the utf8 representation of *message* using the `CryptoKey` object keys and provided *options*.

The `CryptoKey` must contain a valid **public** key.


#### *options*

| Propiedad | Tipo     | Descripción                                                                                                                                                                                      |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash      | texto    | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| pss       | booleano | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm                                                               |
| encoding  | texto    | Representación de la firma facilitada. Puede ser "Base64" o "Base64URL". Default is "Base64".                                                                                                    |


#### *Resultado*

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Propiedad | Tipo      | Descripción                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| success   | booleano  | True if the signature matches the message                   |
| errors    | colección | If `success` is `false`, may contain a collection of errors |

<style> h2 { background: #d9ebff;}</style>
