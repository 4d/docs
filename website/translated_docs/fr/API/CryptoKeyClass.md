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
|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new `4D.CryptoKey` object encapsulating an encryption key pair</p>                |
| [**.curve** : Texte](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;normalised curve name of the key.  </p>                                                                 |
| [**.decrypt**( *message* : Text ; *options* : Object ) : Object](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;decrypts the *message* parameter using the **private** key</p>                   |
| [**.encrypt**( *message* : Text ; *options* : Object ) : Text](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;encrypts the *message* parameter using the **public** key</p>                     |
| [**.getPrivateKey()** : Text](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the private key of the `CryptoKey` object</p>                                                |
| [**.getPublicKey( )** : Text](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the public key of the `CryptoKey` object</p>                                                 |
| [.**sign** (*message* : Text ; *options* : Text) : Text](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;signs the utf8 representation of a *message* string </p>                              |
| [**.size** : Integer](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;the size of the key in bits </p>                                                                 |
| [**.type** : Texte](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;Name of the key type - "RSA", "ECDSA", "PEM" </p>                                                                   |
| [**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;verifies the base64 signature against the utf8 representation of *message*</p> |








## 4D.CryptoKey.new()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey
| Paramètres | Type         |    | Description                                          |
| ---------- | ------------ | -- | ---------------------------------------------------- |
| settings   | Objet        | -> | Paramètres pour générer ou charger une paire de clés |
| result     | 4D.CryptoKey | <- | Object encapsulating an encryption key pair          |

The `4D.CryptoKey.new()` function creates a new `4D.CryptoKey` object encapsulating an encryption key pair, based upon the *settings* object parameter. Elle permet de générer une nouvelle clé RSA ou ECDSA, ou de charger une paire de clés existante à partir de la définition PEM.

#### *settings*

| Propriété       | Type    | Description                                       |
| --------------- | ------- | ------------------------------------------------- |
| [curve](#curve) | text    | Name of ECDSA curve                               |
| [pem](#pem)     | text    | Définition PEM d'une clé de chiffrement à charger |
| [size](#size)   | integer | Size of RSA key in bits                           |
| [type](#type)   | text    | Type of the key: "RSA", "ECDSA", or "PEM"</li>    |


#### *CryptoKey*

The returned `CryptoKey` object encapsulates an encryption key pair. C'est un objet partagé et peut être alors utilisé par de multiples traitements 4D simultanés.



## .curve

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

**.curve** : Texte



Defined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.


## .decrypt()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**.decrypt**( *message* : Text ; *options* : Object ) : Object
| Paramètres | Type  |    | Description                                                                       |
| ---------- | ----- | -- | --------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaine message à déchiffrer à l'aide de `options.encodingEncrypted` et decrypted. |
| options    | Objet | -> | Options de décodage                                                               |
| Résultat   | Objet | <- | Statut                                                                            |



The `.decrypt()` function decrypts the *message* parameter using the **private** key. L'algorithme utilisé dépend du type de clé.

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


## .encrypt()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**.encrypt**( *message* : Text ; *options* : Object ) : Text
| Paramètres | Type  |    | Description                                                                     |
| ---------- | ----- | -- | ------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaine message à chiffrer à l'aide de `options.encodingDecrypted` et encrypted. |
| options    | Objet | -> | Options de chiffrement                                                          |
| Résultat   | Texte | <- | Message chiffré et encodé à l'aide de `options.encodingEncrypted`               |

The `.encrypt()` function encrypts the *message* parameter using the **public** key. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propriété         | Type | Description                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512".                                                                                               |
| encodingEncrypted | text | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                    |
| encodingDecrypted | text | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à chiffrer. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |


#### *Résultat*

The returned value is an encrypted message.




## .getPrivateKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**.getPrivateKey()** : Text

| Paramètres | Type  |    | Description                |
| ---------- | ----- | -- | -------------------------- |
| Résultat   | Texte | <- | Clé primaire au format PEM |

The `.getPrivateKey()` function  returns the private key of the `CryptoKey` object in PEM format, or an empty string if none is available.

#### *Résultat*

The returned value is the private key.



## .getPublicKey()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**.getPublicKey( )** : Text
| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé publique au format PEM |


The `.getPublicKey()` function returns the public key of the `CryptoKey` object in PEM format, or an empty string if none is available.

#### *Résultat*

The returned value is the public key.

---
## .pem

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**.pem** : Text

PEM definition of an encryption key to load. Si la clé est une clé privée, la clé publique RSA ou ECDSA en sera déduite.



## .sign()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

.**sign** (*message* : Text ; *options* : Text) : Text
| Paramètres | Type  |    | Description                                                                |
| ---------- | ----- | -- | -------------------------------------------------------------------------- |
| message    | Texte | -> | Chaîne message à signer                                                    |
| options    | Objet | -> | Options de signature                                                       |
| Résultat   | Texte | <- | Signature en représentation Base64 ou Base64URL, selon l'option "encoding" |

The `.sign()` function signs the utf8 representation of a *message* string using the `CryptoKey` object keys and provided *options*. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut `options.encoding` que vous avez passé.

The `CryptoKey` must contain a valid **private** key.

#### *options*

| Propriété         | Type    | Description                                                                                                                                                                                                            |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algorithme de hachage à utiliser. For example: "SHA256", "SHA384", or "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | Texte   | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                             |
| pss               | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la production d'un JWT pour l'algorithme PS@                                                            |
| encoding          | Texte   | ERepresentation to be used for result signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                       |


#### *Résultat*

Représentation utf8 de la chaîne *message*.


## .size

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

**.size** : Integer

Defined only for RSA keys: the size of the key in bits. Habituellement 2048 (par défaut).


## .type

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>


**.type** : Texte
Name of the key type - "RSA", "ECDSA", "PEM"<li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).


## .verify()

<details><summary>Historique</summary>
| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object
| Paramètres | Type  |    | Description                                                                                     |
| ---------- | ----- | -- | ----------------------------------------------------------------------------------------------- |
| message    | Texte | -> | Chaîne message utilisée pour générer la signature                                               |
| signature  | Texte | -> | Signature à vérifier, en représentation Base64 ou Base64URL, selon la valeur `options.encoding` |
| options    | Objet | -> | Options de signature                                                                            |
| Résultat   | Objet | <- | Statut de la vérification                                                                       |

The `.verify()` function verifies the base64 signature against the utf8 representation of *message* using the `CryptoKey` object keys and provided *options*.

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

<style> h2 { background: #d9ebff;}</style>
