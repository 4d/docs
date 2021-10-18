---
id: CryptoKeyClass
title: CryptoKey
---


La classe `CryptoKey` du langage 4D contient une paire de clés de chiffrement asymétrique.

Cette classe est disponible depuis le "class store" de `4D`.

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
|                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary --> |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary --> |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary --> |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary --> |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->|








## 4D.CryptoKey.new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| Paramètres | Type         |    | Description                                                                 |
| ---------- | ------------ | -- | --------------------------------------------------------------------------- |
| settings   | Objet        | -> | Paramètres pour générer ou charger une paire de clés                        |
| result     | 4D.CryptoKey | <- | Objet contenant une paire de clés de chiffrement|<!-- END REF -->


|


The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. Elle permet de générer une nouvelle clé RSA ou ECDSA, ou de charger une paire de clés existante à partir de la définition PEM.

#### *settings*

| Propriété       | Type    | Description                                       |
| --------------- | ------- | ------------------------------------------------- |
| [curve](#curve) | Texte   | Name of ECDSA curve                               |
| [pem](#pem)     | Texte   | Définition PEM d'une clé de chiffrement à charger |
| [size](#size)   | integer | Size of RSA key in bits                           |
| [type](#type)   | Texte   | Type of the key: "RSA", "ECDSA", or "PEM"</li>    |


#### *CryptoKey*

The returned `CryptoKey` object encapsulates an encryption key pair. C'est un objet partagé et peut être alors utilisé par de multiples traitements 4D simultanés.



<!-- REF CryptoKey.curve -->
## .curve

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Texte<!-- END REF -->




Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->normalised curve name of the key. <!-- END REF -->
Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.
<!-- END REF -->


<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->
| Paramètres | Type  |    | Description                                                                       |
| ---------- | ----- | -- | --------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaine message à déchiffrer à l'aide de `options.encodingEncrypted` et decrypted. |
| options    | Objet | -> | Options de décodage                                                               |
| Résultat   | Objet | <- | Statut                                                                            |
<!-- END REF -->


The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propriété         | Type  | Description                                                                                                                                                             |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Texte | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                         |
| encodingEncrypted | Texte | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à déchiffrer. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64". |
| encodingDecrypted | Texte | Encodage utilisé pour convertir le message binaire déchiffré en chaîne de résultat. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8".       |


#### *Résultat*

La fonction renvoie un objet "status" avec la propriété `success` définie sur `true` si le *message* a pu être déchiffré avec succès.

| Propriété | Type       | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| success   | boolean    | True si le message a été déchiffré avec succès                              |
| result    | Texte      | Message déchiffré et décodé à l'aide de `options.encodingDecrypted`         |
| errors    | collection | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs |


Si le *message* n'a pas pu être déchiffré car il n'a pas été chiffré avec la même clé ou le même algorithme, l'objet `status` retourné contient une collection d'erreurs dans `status.errors`.
<!-- END REF -->


<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->
| Paramètres | Type  |    | Description                                                                     |
| ---------- | ----- | -- | ------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaine message à chiffrer à l'aide de `options.encodingDecrypted` et encrypted. |
| options    | Objet | -> | Options de chiffrement                                                          |
| Résultat   | Texte | <- | Message chiffré et encodé à l'aide de `options.encodingEncrypted`               |
<!-- END REF -->

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propriété         | Type  | Description                                                                                                                                                                   |
| ----------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Texte | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                               |
| encodingEncrypted | Texte | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                    |
| encodingDecrypted | Texte | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à chiffrer. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |


#### *Résultat*

La valeur retournée est un message chiffré.
<!-- END REF -->




<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #CryptoKey.getPrivateKey().Params -->
| Paramètres | Type  |    | Description                |
| ---------- | ----- | -- | -------------------------- |
| Résultat   | Texte | <- | Clé primaire au format PEM |
<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Résultat*

La valeur retournée est la clé privée.
<!-- END REF -->



<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->
| Paramètres | Type  |    | Description                |
| ---------- | ----- | -- | -------------------------- |
| Résultat   | Texte | <- | Clé publique au format PEM |
<!-- END REF -->


The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Résultat*

La valeur retournée est la clé publique.
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #CryptoKey.pem.Summary -->PEM definition of an encryption key to load<!-- END REF -->. Si la clé est une clé privée, la clé publique RSA ou ECDSA en sera déduite.
<!-- END REF -->



<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->
| Paramètres | Type  |    | Description                                                                |
| ---------- | ----- | -- | -------------------------------------------------------------------------- |
| message    | Texte | -> | Chaîne message à signer                                                    |
| options    | Objet | -> | Options de signature                                                       |
| Résultat   | Texte | <- | Signature en représentation Base64 ou Base64URL, selon l'option "encoding" |
<!-- END REF -->

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `CryptoKey` object keys and provided *options*. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut `options.encoding` que vous avez passé.

The `CryptoKey` must contain a valid **private** key.

#### *options*

| Propriété         | Type    | Description                                                                                                                                                                                                            |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | Texte   | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | Texte   | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                             |
| pss               | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la production d'un JWT pour l'algorithme PS@                                                            |
| encoding          | Texte   | ERepresentation to be used for result signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                       |


#### *Résultat*

Représentation utf8 de la chaîne *message*.
<!-- END REF -->


<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->


Defined only for RSA keys: <!-- REF #CryptoKey.size.Summary -->the size of the key in bits<!-- END REF -->. Habituellement 2048 (par défaut).


<!-- REF CryptoKey.type -->
## .type
<!-- END REF -->

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>


<!-- REF #CryptoKey.type.Syntax -->**.type** : Texte<!-- END REF -->


<!-- REF #CryptoKey.type.Summary -->Name of the key type - "RSA", "ECDSA", "PEM"<!-- END REF --><li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).


<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajout         |
</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->
| Paramètres | Type  |    | Description                                                                                     |
| ---------- | ----- | -- | ----------------------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaîne message utilisée pour générer la signature                                               |
| signature  | Texte | -> | Signature à vérifier, en représentation Base64 ou Base64URL, selon la valeur `options.encoding` |
| options    | Objet | -> | Options de signature                                                                            |
| Résultat   | Objet | <- | Statut de la vérification                                                                       |
<!-- END REF -->

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `CryptoKey` object keys and provided *options*.

The `CryptoKey` must contain a valid **public** key.


#### *options*

| Propriété | Type    | Description                                                                                                                                                                                                            |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | Texte   | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| pss       | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la vérification d'un JWT pour l'algorithme PS@                                                          |
| encoding  | Texte   | Représentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                |


#### *Résultat*

La fonction retourne un objet status avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès (c'est-à-dire si la signature est correspondante).

Si la signature n'a pas pu être vérifiée car elle n'a pas été signée avec le même *message*, la clé ou l'algorithme, l'objet `status` retourné contient une collection d'erreurs dans `status.errors`.

| Propriété | Type       | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| success   | boolean    | True si la signature correspond au message                                  |
| errors    | collection | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs |
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
