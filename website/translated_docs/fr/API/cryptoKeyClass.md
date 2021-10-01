---
id: cryptoClass
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

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| Paramètres | Type         |    | Description                                                                 |
| ---------- | ------------ | -- | --------------------------------------------------------------------------- |
| settings   | Object       | -> | Paramètres pour générer ou charger une paire de clés                        |
| result     | 4D.CryptoKey | <- | Objet contenant une paire de clés de chiffrement|<!-- END REF -->


|


The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. Elle permet de générer une nouvelle clé RSA ou ECDSA, ou de charger une paire de clés existante à partir de la définition PEM.

#### *settings*

| Propriété       | Type    | Description                                       |
| --------------- | ------- | ------------------------------------------------- |
| [curve](#curve) | text    | Name of ECDSA curve                               |
| [pem](#pem)     | text    | Définition PEM d'une clé de chiffrement à charger |
| [size](#size)   | integer | Size of RSA key in bits                           |
| [type](#type)   | text    | Type of the key: "RSA", "ECDSA", or "PEM"</li>    |


#### *cryptoKey*

L'objet `cryptoKey` retourné encapsule une paire de clés de chiffrement. C'est un objet partagé et peut être alors utilisé par de multiples traitements 4D simultanés.



<!-- REF cryptokey.curve -->
## .curve

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

<!-- REF #cryptokey.curve.Syntax -->**.curve** : Texte<!-- END REF -->




Défini uniquement pour les clés ECDSA : le <!-- REF #cryptokey.curve.Summary -->nom de la courbe normalisée de la clé. <!-- END REF -->
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
| Paramètres | Type   |    | Description                                                                       |
| ---------- | ------ | -- | --------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaine message à déchiffrer à l'aide de `options.encodingEncrypted` et decrypted. |
| options    | Object | -> | Options de décodage                                                               |
| Résultat   | Object | <- | Statut                                                                            |
<!-- END REF -->


La fonction `.encrypt()` <!-- REF #cryptokey.decrypt().Summary -->déchiffre le paramètre *message* à l'aide de la clé **private** key<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propriété         | Type | Description                                                                                                                                                             |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                         |
| encodingEncrypted | text | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à déchiffrer. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64". |
| encodingDecrypted | text | Encodage utilisé pour convertir le message binaire déchiffré en chaîne de résultat. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8".       |


#### *Résultat*

La fonction renvoie un objet "status" avec la propriété `success` définie sur `true` si le *message* a pu être déchiffré avec succès.

| Propriété | Type       | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| success   | boolean    | True si le message a été déchiffré avec succès                              |
| result    | text       | Message déchiffré et décodé à l'aide de `options.encodingDecrypted`         |
| errors    | collection | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs |


Si le *message* n'a pas pu être déchiffré car il n'a pas été chiffré avec la même clé ou le même algorithme, l'objet `status` retourné contient une collection d'erreurs dans `status.errors`.
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
| Paramètres | Type   |    | Description                                                                     |
| ---------- | ------ | -- | ------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaine message à chiffrer à l'aide de `options.encodingDecrypted` et encrypted. |
| options    | Object | -> | Options de chiffrement                                                          |
| Résultat   | Text   | <- | Message chiffré et encodé à l'aide de `options.encodingEncrypted`               |
<!-- END REF -->

La fonction `.encrypt()` <!-- REF #cryptokey.encrypt().Summary -->crypte le paramètre *message* à l'aide de la clé **publique**<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propriété         | Type | Description                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                               |
| encodingEncrypted | text | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                    |
| encodingDecrypted | text | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à chiffrer. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |


#### *Résultat*

La valeur retournée est un message chiffré.
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
| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé primaire au format PEM |
<!-- END REF -->

La fonction `.getPrivateKey()`  <!-- REF #cryptokey.getPrivateKey().Summary -->retourne la clé privée de l'objet `cryptoKey`<!-- END REF --> au format PEM, ou une chaîne vide si aucune n'est disponible.

#### *Résultat*

La valeur retournée est la clé privée.
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
| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé publique au format PEM |
<!-- END REF -->


La fonction `.getPublicKey()` <!-- REF #cryptokey.getPublicKey().Summary -->retourne la clé publique de l'objet `cryptoKey`<!-- END REF --> au format PEM, ou une chaîne vide si aucune n'est disponible.

#### *Résultat*

La valeur retournée est la clé publique.
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


<!-- REF #cryptokey.pem.Summary -->PEM definition of an encryption key to load<!-- END REF -->. Si la clé est une clé privée, la clé publique RSA ou ECDSA en sera déduite.
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
| Paramètres | Type   |    | Description                                                                |
| ---------- | ------ | -- | -------------------------------------------------------------------------- |
| message    | Text   | -> | Chaîne message à signer                                                    |
| options    | Object | -> | Options de signature                                                       |
| Résultat   | Text   | <- | Signature en représentation Base64 ou Base64URL, selon l'option "encoding" |
<!-- END REF -->

La fonction `.sign()` <!-- REF #cryptokey.sign().Summary -->signe la représentation utf8 de la chaîne *message*<!-- END REF --> à l'aide des clés d'objet `cryptoKey` et des *options* fournies. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut `options.encoding` que vous avez passé.

La `cryptoKey` doit contenir une clé **privée** valide.

#### *options*

| Propriété         | Type    | Description                                                                                                                                                                                                            |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                             |
| pss               | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la production d'un JWT pour l'algorithme PS@                                                            |
| encoding          | text    | ERepresentation to be used for result signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                       |


#### *Résultat*

Représentation utf8 de la chaîne *message*.
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


Défini uniquement pour les clés RSA : <!-- REF #cryptokey.size.Summary -->la taille de la clé en bits<!-- END REF -->. Habituellement 2048 (par défaut).


<!-- REF cryptokey.type -->
## .type
<!-- END REF -->

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


<!-- REF #cryptokey.type.Syntax -->**.type** : Texte<!-- END REF -->


<!-- REF #cryptokey.type.Summary -->Name of the key type - "RSA", "ECDSA", "PEM"<!-- END REF --><li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).


<!-- REF cryptokey.verify().Desc -->
## .verify()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

<!-- REF #cryptokey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #cryptokey.verify().Params -->
| Paramètres | Type   |    | Description                                                                                     |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaîne message utilisée pour générer la signature                                               |
| signature  | Text   | -> | Signature à vérifier, en représentation Base64 ou Base64URL, selon la valeur `options.encoding` |
| options    | Object | -> | Options de signature                                                                            |
| Résultat   | Object | <- | Statut de la vérification                                                                       |
<!-- END REF -->

La fonction `.verify()` <!-- REF #cryptokey.verify().Summary -->vérifie la signature base64 par rapport à la représentation utf8 du *message*<!-- END REF --> à l'aide des clés d'objet `cryptoKey` et des *options* fournies.

La `cryptoKey` doit contenir une clé **publique** valide.


#### *options*

| Propriété | Type    | Description                                                                                                                                                                                                            |
| --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | text    | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| pss       | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la vérification d'un JWT pour l'algorithme PS@                                                          |
| encoding  | text    | Représentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                |


#### *Résultat*

La fonction retourne un objet status avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès (c'est-à-dire si la signature est correspondante).

Si la signature n'a pas pu être vérifiée car elle n'a pas été signée avec le même *message*, la clé ou l'algorithme, l'objet `status` retourné contient une collection d'erreurs dans `status.errors`.

| Propriété | Type       | Description                                                                 |
| --------- | ---------- | --------------------------------------------------------------------------- |
| success   | boolean    | True si la signature correspond au message                                  |
| errors    | collection | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs |
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
