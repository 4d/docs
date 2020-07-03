---
id: cryptoClass
title: Classe CryptoKey
---

## Aperçu

La classe `CryptoKey` du langage 4D contient une paire de clés de chiffrement asymétrique.

Cette classe est disponible depuis le "class store" de `4D`.

### Propriétés de l'objet `cryptoKey`

Un objet `cryptoKey` est instancié par la méthode [4D.CryptoKey.new](#4dcryptokeynew). Ses propriétés sont les suivantes (en lecture seule) :

| Propriété | Type   | Description                                                                                                               |
| --------- | ------ | ------------------------------------------------------------------------------------------------------------------------- |
| type      | Texte  | Nom du type de clé. Par exemple : "ECDSA" ou "RSA".                                                                       |
| size      | entier | Défini uniquement pour les clés RSA : la taille de la clé est exprimée en octets. Généralement 2048                       |
| curve     | Texte  | Defined only for ECDSA keys: the normalised curve name of the key. Par exemple : "prime256v1", "secp384r1" or "secp521r1" |


### Exemple

The following example signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token.

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

## 4D.CryptoKey.new()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### 4D.CryptoKey.new(settings) -> keyPair

| Paramètres | Propriété | Type   |    | Description                                                                                                                    |
| ---------- | --------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------------------ |
| settings   |           | objet  | -> | Paramètres pour générer ou charger une paire de clés                                                                           |
|            | type      | Texte  |    | Type de clé : "RSA", "ECDSA", ou "PEM" (voir ci-dessous)                                                                       |
|            | size      | entier |    | Taille de la clé RSA en octets. 2048 par défaut                                                                                |
|            | curve     | Texte  |    | nom de la courbe ECDSA. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512                 |
|            | pem       | Texte  |    | PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. |
|            |           |        |    |                                                                                                                                |
| keyPair    |           | object | <- | Object encapsulating an encryption key pair                                                                                    |


This method creates a new object encapsulating an encryption key pair, based upon the `settings` object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

Pass the type of key in the `type` property of the `settings` parameter:

- "RSA": generates an RSA key pair, using `settings.size` as size.
- "ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as curve. Note that ECDSA keys cannot be used for encryption but only for signature.
- "PEM": loads a key pair definition in PEM format, using `settings.pem`.

The resulting `keyPair` object is a shared object and can therefore be used by multiple 4D processes simultaneously.

## cryptoKey.getPrivateKey()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### cryptoKey.getPrivateKey() -> privateKey

| Paramètres | Propriété | Type  |    | Description               |
| ---------- | --------- | ----- | -- | ------------------------- |
|            |           |       |    |                           |
| privateKey |           | Texte | <- | Private key in PEM format |


This method returns the private key of the `cryptoKey` object in PEM format, or an empty string if none is available.

## cryptoKey.getPublicKey()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### cryptoKey.getPublicKey() -> publicKey

| Paramètres | Propriété | Type  |    | Description              |
| ---------- | --------- | ----- | -- | ------------------------ |
|            |           |       |    |                          |
| publicKey  |           | Texte | <- | Public key in PEM format |


This method returns the public key of the `cryptoKey` object in PEM format, or an empty string if none is available.

## cryptoKey.sign()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### cryptoKey.sign(message;options) -> signature

| Paramètres | Propriété | Type    |    | Description                                                                                                                                                             |
| ---------- | --------- | ------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |           | Texte   | -> | Message string to sign                                                                                                                                                  |
| options    |           | object  | -> | Signing options                                                                                                                                                         |
|            | hash      | Texte   |    | Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
|            | pss       | boolean |    | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm                                      |
|            | encoding  | Texte   |    | Representation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".                                                          |
|            |           |         |    |                                                                                                                                                                         |
| signature  |           | Texte   | <- | Resulting signature in Base64 or Base64URL representation, depending on "encoding" option                                                                               |


This method signs the utf8 representation of a `message` string using the `cryptoKey` object keys and provided `options`. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `cryptoKey` must contain a valid **private** key.

## cryptoKey.verify()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### cryptoKey.verify(message;signature;options) -> status

| Paramètres | Propriété | Type       |    | Description                                                                                                                                                             |
| ---------- | --------- | ---------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |           | Texte      | -> | Message string that was used to produce the signature                                                                                                                   |
| signature  |           | Texte      | -> | Signature to verify, in Base64 or Base64URL representation, depending on "encoding" option                                                                              |
| options    |           | object     | -> | Signing options                                                                                                                                                         |
|            | hash      | Texte      |    | Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
|            | pss       | boolean    |    | Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm                                      |
|            | encoding  | Texte      |    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".                                                                 |
|            |           |            |    |                                                                                                                                                                         |
| status     |           | object     | <- | Result of the verification                                                                                                                                              |
|            | success   | boolean    |    | True if the signature matches the message                                                                                                                               |
|            | errors    | collection |    | If `success` is `false`, may contain a collection of errors                                                                                                             |


This method verifies the base64 signature against the utf8 representation of `message` using the `cryptoKey` object keys and provided `options`.

The method returns a `status` object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same `message`, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

The `cryptoKey` must contain a valid **public** key.

## cryptoKey.encrypt()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### cryptoKey.encrypt(message;options) -> result

| Paramètres | Propriété         | Type   |    | Description                                                                                                                                               |
| ---------- | ----------------- | ------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |                   | Texte  | -> | Message string to be encoded using options.encodingDecrypted and encrypted.                                                                               |
| options    |                   | object | -> | Encoding options                                                                                                                                          |
|            | hash              | Texte  |    | Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512".                                                                                 |
|            | encodingEncrypted | Texte  |    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                       |
|            | encodingDecrypted | Texte  |    | Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8". |
|            |                   |        |    |                                                                                                                                                           |
| result     |                   | Texte  | <- | Message encrypted and encoded using the `options.encodingEncrypted`                                                                                       |


This method encrypts the `message` parameter using the **public** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

## cryptoKey.decrypt()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details> 

#### cryptoKey.decrypt(message;options) -> status

| Paramètres | Propriété         | Type       |    | Description                                                                                                                                      |
| ---------- | ----------------- | ---------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| message    |                   | Texte      | -> | Message string to be decoded using options.encodingEncrypted and decrypted.                                                                      |
| options    |                   | object     | -> | Decoding options                                                                                                                                 |
|            | hash              | Texte      |    | Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512".                                                                        |
|            | encodingEncrypted | Texte      |    | Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64". |
|            | encodingDecrypted | Texte      |    | Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".      |
|            |                   |            |    |                                                                                                                                                  |
| status     |                   | object     | <- | Result                                                                                                                                           |
|            | success           | boolean    |    | True if the message has been successfully decrypted                                                                                              |
|            | result            | Texte      |    | Message decrypted and decoded using the `options.encodingDecrypted`                                                                              |
|            | errors            | collection |    | If `success` is `false`, may contain a collection of errors                                                                                      |


This method decrypts the `message` parameter using the **private** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

The method returns a status object with `success` property set to `true` if the `message` could be successfully decrypted.

In case the `message` couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.