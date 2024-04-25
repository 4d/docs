---
id: CryptoKeyClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

### Exemple

L'extrait de code suivant illustre la signature et la vérification d'un message à l'aide d'une nouvelle paire de clés ECDSA, afin de créer, par exemple, un token Web JSON ES256.

```4d
 // Générer une nouvelle paire de clés ECDSA
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Obtenir une signature en base64
$message:="hello world" 
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Vérifier la signature
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```

### Sommaire

|                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->              |
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.curve.Summary -->                             |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary --> |
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->    |
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.sign().Summary -->                            |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.size.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.type.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)&amp;nbsp;&amp;nbsp;&amp;nbsp;&amp;nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->                      |

## 4D.CryptoKey.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->

**4D.CryptoKey.new**( _settings_ : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| Paramètres | Type                         |    | Description                                          |
| ---------- | ---------------------------- | -- | ---------------------------------------------------- |
| settings   | Object                       | -> | Paramètres pour générer ou charger une paire de clés |
| result     | 4D.CryptoKey | <- | Objet contenant une paire de clés de chiffrement     |

<!-- END REF -->

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the _settings_ object parameter. Elle permet de générer une nouvelle clé RSA ou ECDSA, ou de charger une paire de clés existante à partir de la définition PEM.

#### _settings_

| Propriété       | Type   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text   | Defines the type of the key to create: <li>"RSA": generates a RSA key pair, using [.size](#size) as size.</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using [.curve](#curve) as curve. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li> |
| [curve](#curve) | text   | Nom de la courbe ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [pem](#pem)     | text   | Définition PEM d'une clé de chiffrement à charger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [size](#size)   | entier | Taille de la clé RSA en octets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### _CryptoKey_

The returned `CryptoKey` object encapsulates an encryption key pair. C'est un objet partagé et peut être alors utilisé par de multiples traitements 4D simultanés.

<!-- REF CryptoKey.curve -->

## .curve

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->

Défini uniquement pour les clés ECDSA : le <!-- REF #CryptoKey.curve.Summary -->nom de la courbe normalisée de la clé<!-- END REF -->. Généralement "prime256v1" pour ES256 (défaut), "secp384r1" pour ES384, "secp521r1" pour ES512.

<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->

## .decrypt()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.decrypt().Syntax -->

**.decrypt**( _message_ : Text ; _options_ : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| Paramètres | Type   |    | Description                                                                                   |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options    | Object | -> | Options de décodage                                                                           |
| Résultat   | Object | <- | Statut                                                                                        |

<!-- END REF -->

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the _message_ parameter using the **private** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### _options_

| Propriété         | Type | Description                                                                                                                                                                                                       |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512".                                                                                   |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64". |
| encodingDecrypted | text | Encodage utilisé pour convertir le message binaire déchiffré en chaîne de résultat. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |

#### _Résultat_

The function returns a status object with `success` property set to `true` if the _message_ could be successfully decrypted.

| Propriété | Type       | Description                                                         |
| --------- | ---------- | ------------------------------------------------------------------- |
| success   | boolean    | True si le message a été déchiffré avec succès                      |
| result    | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors    | collection | If `success` is `false`, may contain a collection of errors         |

In case the _message_ couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->

**.encrypt**( _message_ : Text ; _options_ : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| Paramètres | Type   |    | Description                                                                                   |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options    | Object | -> | Options de chiffrement                                                                        |
| Résultat   | Text   | <- | Message encrypted and encoded using the `options.encodingEncrypted`                           |

<!-- END REF -->

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the _message_ parameter using the **public** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### _options_

| Propriété         | Type | Description                                                                                                                                                                                                               |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512".                                                                                           |
| encodingEncrypted | text | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |

#### _Résultat_

La valeur retournée est un message chiffré.

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->

**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé primaire au format PEM |

<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Résultat_

La valeur retournée est la clé privée.

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->

**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé publique au format PEM |

<!-- END REF -->

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Résultat_

La valeur retournée est la clé publique.

<!-- END REF -->

---

<!-- REF CryptoKey.pem.Desc -->

## .pem

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.pem.Syntax -->

**.pem** : Text<!-- END REF -->

<!-- REF #CryptoKey.pem.Summary -->

Définition PEM d'une clé de chiffrement à charger. Si la clé est une clé privée, la clé publique RSA ou ECDSA en sera déduite. <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->

## .sign()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Object) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->

| Paramètres | Type   |    | Description                                                                |
| ---------- | ------ | -- | -------------------------------------------------------------------------- |
| message    | Text   | -> | Chaîne message à signer                                                    |
| options    | Object | -> | Options de signature                                                       |
| Résultat   | Text   | <- | Signature en représentation Base64 ou Base64URL, selon l'option "encoding" |

<!-- END REF -->

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a _message_ string<!-- END REF --> using the `CryptoKey` object keys and provided _options_. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### _options_

| Propriété         | Type    | Description                                                                                                                                                                                                                                                                                                                |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                                 |
| pss               | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Pass `true` when producing a JWT for PS@ algorithm                                                                                                                |
| encoding          | text    | Représentation à utiliser pour la signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                                               |

#### _Résultat_

The utf8 representation of the _message_ string.

<!-- END REF -->

<!-- REF CryptoKey.size -->

## .size

<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->

Défini uniquement pour les clés RSA : <!-- REF #CryptoKey.size.Summary -->la taille de la clé en octets<!-- END REF -->. Habituellement 2048 (par défaut).

<!-- REF CryptoKey.type -->

## .type

<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->

Contains the <!-- REF #CryptoKey.type.Summary -->name of the key type - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA" : paire de clés RSA, utilise `settings.size` pour la taille [.size](#size).
- "ECDSA" : paire de clés Elliptic Curve Digital Signature Algorithm, utilise `settings.curve` pour la propriété curve [.curve](#curve). A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.
- "PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.verify().Syntax -->

**.verify**( _message_ : Text ; _signature_ : Text ; _options_ : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Paramètres | Type   |    | Description                                                                                       |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaîne message utilisée pour générer la signature                                                 |
| signature  | Text   | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options    | Object | -> | Options de signature                                                                              |
| Résultat   | Object | <- | Statut de la vérification                                                                         |

<!-- END REF -->

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of _message_<!-- END REF --> using the `CryptoKey` object keys and provided _options_.

The `CryptoKey` must contain a valid **public** key.

#### _options_

| Propriété | Type    | Description                                                                                                                                                                                                                                                                                                                |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | text    | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| pss       | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Pass `true` when verifying a JWT for PS@ algorithm                                                                                                                |
| encoding  | text    | Représentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                                                    |

#### _Résultat_

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same _message_, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Propriété | Type       | Description                                                 |
| --------- | ---------- | ----------------------------------------------------------- |
| success   | boolean    | True si la signature correspond au message                  |
| errors    | collection | If `success` is `false`, may contain a collection of errors |

<!-- END REF -->
