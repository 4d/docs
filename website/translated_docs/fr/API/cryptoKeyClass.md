---
id: cryptoClass
title: CryptoKey
---

<style> h2 { background: #d9ebff;}</style>

La classe `CryptoKey` du langage 4D contient une paire de clés de chiffrement asymétrique.

Cette classe est disponible depuis le "class store" de `4D`.

### Exemple

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
| [<!-- INCLUDE #cryptokey.new().Syntax -->](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.new().Summary -->|
| [<!-- INCLUDE #cryptokey.curve.Syntax -->](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.curve.Summary --> |
| [<!-- INCLUDE #cryptokey.decrypt().Syntax -->](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.decrypt().Summary -->|
| [<!-- INCLUDE #cryptokey.encrypt().Syntax -->](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.encrypt().Summary -->|
| [<!-- INCLUDE #cryptokey.getPrivateKey().Syntax -->](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #cryptokey.getPublicKey().Syntax -->](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.getPublicKey().Summary -->|
| [<!-- INCLUDE #cryptokey.sign().Syntax -->](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.sign().Summary --> |
| [<!-- INCLUDE #cryptokey.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.size.Summary --> |
| [<!-- INCLUDE #cryptokey.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.type.Summary --> |
| [<!-- INCLUDE #cryptokey.verify().Syntax -->](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.verify().Summary -->|






## 4D.CryptoKey.new( )

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) -> *cryptoKey* : Object<!-- END REF -->

<!-- REF #cryptokey.new().Params -->
| Paramètres | Type  |    | Description                                          |
| ---------- | ----- | -- | ---------------------------------------------------- |
| settings   | Objet | -> | Paramètres pour générer ou charger une paire de clés |
| cryptoKey  | Objet | <- | Objet contenant une paire de clés de chiffrement     |


The `4D.CryptoKey.new()` function <!-- REF #cryptokey.new().Summary -->creates a new object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. Elle permet de générer une nouvelle clé RSA ou ECDSA, ou de charger une paire de clés existante à partir de la définition PEM.

#### *settings*

| Propriété       | Type    | Description                                                                                                                    |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)   | Texte   | Type of the key: "RSA", "ECDSA", or "PEM":<li>"RSA": generates an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.</li><li>"PEM": loads a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).</li>          |
| [size](#size)   | integer | Taille de la clé RSA en octets. 2048 par défaut                                                                                |
| [curve](#curve) | Texte   | nom de la courbe ECDSA. Généralement "prime256v1" pour ES256 (par défaut), "secp384r1" pour ES384, "secp521r1" pour ES512      |
| [pem](#pem)     | Texte   | Définition PEM d'une clé de chiffrement à charger. Si la clé est une clé privée, la clé publique RSA ou ECDSA en sera déduite. |

#### *cryptoKey*

The returned `cryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.
<!-- END REF -->


<!-- REF cryptokey.curve -->
## .curve

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

<!-- REF #cryptokey.curve.Syntax -->**.curve** : Text<!-- END REF -->




Defined only for ECDSA keys: the <!-- REF #cryptokey.curve.Summary -->normalised curve name of the key. <!-- END REF -->
Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.
<!-- END REF -->


<!-- REF cryptokey.decrypt().Desc -->
## .decrypt()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #cryptokey.decrypt().Params -->
| Paramètres | Type  |    | Description                                                                   |
| ---------- | ----- | -- | ----------------------------------------------------------------------------- |
| message    | Texte | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options    | Objet | -> | Options de décodage                                                           |
| Résultat   | Objet | <- | Statut                                                                        |
<!-- END REF -->


The `.decrypt()` function <!-- REF #cryptokey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propriété         | Type  | Description                                                                                                                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Texte | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                         |
| encodingEncrypted | Texte | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à déchiffrer. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64". |
| encodingDecrypted | Texte | Encodage utilisé pour convertir le message binaire déchiffré en chaîne de résultat. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8".       |


#### *Résultat*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

| Propriété | Type       | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| success   | boolean    | True si le message a été déchiffré avec succès                              |
| result    | Texte      | Message déchiffré et décodé à l'aide de `options.encodingDecrypted`         |
| errors    | collection | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs |

In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.
<!-- END REF -->


<!-- REF cryptokey.encrypt().Desc -->
## .encrypt()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #cryptokey.encrypt().Params -->
| Paramètres | Type  |    | Description                                                                   |
| ---------- | ----- | -- | ----------------------------------------------------------------------------- |
| message    | Texte | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options    | Objet | -> | Options de chiffrement                                                        |
| Résultat   | Texte | <- | Message chiffré et encodé à l'aide de `options.encodingEncrypted`             |
<!-- END REF -->

The `.encrypt()` function <!-- REF #cryptokey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propriété         | Type  | Description                                                                                                                                                                   |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Texte | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                               |
| encodingEncrypted | Texte | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                    |
| encodingDecrypted | Texte | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à chiffrer. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |


#### *Résultat*

The returned value is an encrypted message.
<!-- END REF -->




<!-- REF cryptokey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #cryptokey.getPrivateKey().Params -->
| Paramètres | Type  |    | Description                |
| ---------- | ----- | -- | -------------------------- |
| Résultat   | Texte | <- | Clé primaire au format PEM |
<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #cryptokey.getPrivateKey().Summary -->returns the private key of the `cryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Résultat*

The returned value is the private key.
<!-- END REF -->



<!-- REF cryptokey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.getPublicKey().Syntax -->**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #cryptokey.getPublicKey().Params -->
| Paramètres | Type  |    | Description                |
| ---------- | ----- | -- | -------------------------- |
| Résultat   | Texte | <- | Clé publique au format PEM |
<!-- END REF -->


The `.getPublicKey()` function <!-- REF #cryptokey.getPublicKey().Summary -->returns the public key of the `cryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Résultat*

The returned value is the public key.
<!-- END REF -->

---
<!-- REF cryptokey.pem.Desc -->
## .pem

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #cryptokey.pem.Summary -->PEM definition of an encryption key to load<!-- END REF -->
<!-- END REF -->



<!-- REF cryptokey.sign().Desc -->
## .sign()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

<!-- REF #cryptokey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #cryptokey.sign().Params -->
| Paramètres | Type  |    | Description                                                                     |
| ---------- | ----- | -- | ------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaîne message à signer                                                         |
| options    | Objet | -> | Options de signature                                                            |
| Résultat   | Texte | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |
<!-- END REF -->

The `.sign()` function <!-- REF #cryptokey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `cryptoKey` object keys and provided *options*. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut `options.encoding` que vous avez passé.

La `cryptoKey` doit contenir une clé **privée** valide.

#### *options*

| Propriété         | Type    | Description                                                                                                                                                                                                            |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Texte   | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | Texte   | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                             |
| pss               | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la production d'un JWT pour l'algorithme PS@                                                            |
| encoding          | Texte   | ERepresentation to be used for result signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                       |


#### *Résultat*

The utf8 representation of the *message* string.
<!-- END REF -->


<!-- REF cryptokey.size -->
## .size
<!-- END REF -->

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

<!-- REF #cryptokey.size.Syntax -->**.size** : Integer<!-- END REF -->


Defined only for RSA keys: <!-- REF #cryptokey.size.Summary -->the size of the key in bits<!-- END REF -->. Typically 2048 (default).


<!-- REF cryptokey.type -->
## .type
<!-- END REF -->

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.type.Syntax -->**.type** : Texte<!-- END REF -->


<!-- REF #cryptokey.type.Summary -->Name of the key type<!-- END REF --> - "RSA", "ECDSA", ou "PEM":


<!-- REF cryptokey.verify().Desc -->
## .verify()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

<!-- REF #cryptokey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #cryptokey.verify().Params -->
| Paramètres | Type  |    | Description                                                                                       |
| ---------- | ----- | -- | ------------------------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaîne message utilisée pour générer la signature                                                 |
| signature  | Texte | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options    | Objet | -> | Options de signature                                                                              |
| Résultat   | Objet | <- | Status of the verification                                                                        |
<!-- END REF -->

The `.verify()` function <!-- REF #cryptokey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `cryptoKey` object keys and provided *options*.

La `cryptoKey` doit contenir une clé **publique** valide.


#### *options*

| Propriété | Type    | Description                                                                                                                                                                                                            |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | Texte   | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| pss       | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la vérification d'un JWT pour l'algorithme PS@                                                          |
| encoding  | Texte   | Représentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                |


#### *Résultat*

La fonction retourne un objet status avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès (c'est-à-dire si la signature est correspondante).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Propriété | Type       | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| success   | boolean    | True si la signature correspond au message                                  |
| errors    | collection | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs |
<!-- END REF -->
