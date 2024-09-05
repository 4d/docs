---
id: CryptoKeyClass
title: CryptoKey
---

La classe `CryptoKey` du langage 4D contient une paire de clés de chiffrement asymétrique.

Cette classe est disponible depuis le "class store" de `4D`.

:::info Voir également

Pour une vue d'ensemble complète de cette classe, veuillez vous reporter au blog [**CryptoKey : chiffrer, déchiffrer, signer et vérifier!**](https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/).

:::

### Sommaire

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<br/><!-- INCLUDE #4D.CryptoKey.new().Summary -->              |
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)<br/><!-- INCLUDE #CryptoKey.curve.Summary -->                             |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)<br/><!-- INCLUDE #CryptoKey.decrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)<br/><!-- INCLUDE #CryptoKey.encrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)<br/><!-- INCLUDE #CryptoKey.getPrivateKey().Summary --> |
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)<br/><!-- INCLUDE #CryptoKey.getPublicKey().Summary -->    |
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)<br/><!-- INCLUDE #CryptoKey.sign().Summary -->                            |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)<br/><!-- INCLUDE #CryptoKey.size.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)<br/><!-- INCLUDE #CryptoKey.type.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)<br/><!-- INCLUDE #CryptoKey.verify().Summary -->                      |

## 4D.CryptoKey.new()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| Paramètres | Type                         |    | Description                                      |
| ---------- | ---------------------------- | -- | ------------------------------------------------ |
| settings   | Object                       | -> | Settings to generate or load a key pair          |
| result     | 4D.CryptoKey | <- | Objet contenant une paire de clés de chiffrement |

<!-- END REF -->

La fonction `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary -->crée un nouvel objet `4D.CryptoKey` encapsulant une paire de clés de chiffrement<!-- END REF -->, en fonction du paramètre *settings*. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *settings*

| Propriété       | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Définit le type de clé à créer : " <li>RSA" : génère une paire de clés RSA, en utilisant [.size](#size) comme taille.</li><li>"ECDSA" : génère une paire de clés Elliptic Curve Digital Signature Algorithm, en utilisant [.curve](#curve) comme courbe. Notez que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.</li><li>"PEM" : charge une définition de paire de clés au format PEM, en utilisant [.pem](#pem)</li>. |
| [curve](#curve) | text    | Nom de la courbe ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [pem](#pem)     | text    | Définition PEM d'une clé de chiffrement à charger                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [size](#size)   | integer | Taille de la clé RSA en octets                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### *CryptoKey*

L'objet `CryptoKey` retourné encapsule une paire de clés de chiffrement. It is a shared object and can therefore be used by multiple 4D processes simultaneously.

#### Exemple 1

Un message est signé par une clé privée et la signature est vérifiée par la clé publique correspondante. Le code suivant signe et vérifie une signature de message simple.

- Côté bob :

```4d
// Créer le message
$message:="hello world"
Folder(fk desktop folder).file("message.txt").setText($message)

// Créer une clé
$type:=New object("type";"RSA")
$key:=4D.CryptoKey.new($type)

// Récupérer et stocker une clé publique
Folder(fk desktop folder).file("public.pem").setText($key.getPublicKey())

// Récupérer et stocker une signature en base64
Folder(fk desktop folder).file("signature").setText($key.sign($message;$type))

/*Bob envoie le message, la clé publique et la signature à Alice*/
```

- Côté Alice :

```4d
// Récupérer le message, la clé publique et la signature
$message:=Folder(fk desktop folder).file("message.txt").getText()
$publicKey:=Folder(fk desktop folder).file("public.pem").getText()
$signature:=Folder(fk desktop folder).file("signature").getText()

// Créer une clé
$type:=New object("type";"PEM";"pem";$publicKey)
$key:=4D.CryptoKey.new($type)

// Vérifier la signature
If ($key.verify($message;$signature;$type).success)
// La signature est valide

End if
```

#### Exemple 2

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

<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| Paramètres | Type   |    | Description                                                                                       |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaine message à déchiffrer à l'aide de `options.encodingEncrypted` et decrypted. |
| options    | Object | -> | Options de décodage                                                                               |
| Résultat   | Object | <- | Statut                                                                                            |

<!-- END REF -->

La fonction `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->déchiffre le paramètre *message* en utilisant la clé **privée**<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propriété         | Type | Description                                                                                                                                                                                                             |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512".                                                                                         |
| encodingEncrypted | text | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à déchiffrer. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64". |
| encodingDecrypted | text | Encodage utilisé pour convertir le message binaire déchiffré en chaîne de résultat. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8".       |

#### *Result*

La fonction renvoie un objet "status" avec la propriété `success` définie sur `true` si le *message* a pu être déchiffré avec succès.

| Propriété | Type       | Description                                                         |
| --------- | ---------- | ------------------------------------------------------------------- |
| success   | boolean    | True si le message a été déchiffré avec succès                      |
| result    | text       | Message déchiffré et décodé à l'aide de `options.encodingDecrypted` |
| errors    | collection | Si `success` est `false`, peut contenir une collection d'erreurs    |

Si le *message* n'a pas pu être déchiffré parce qu'il n'a pas été chiffré avec la même clé ou le même algorithme, l'objet `status` renvoyé contient une collection d'erreurs dans `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| Paramètres | Type   |    | Description                                                                                     |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaine message à chiffrer à l'aide de `options.encodingDecrypted` et encrypted. |
| options    | Object | -> | Options de chiffrement                                                                          |
| Résultat   | Text   | <- | Message chiffré et encodé à l'aide de `options.encodingEncrypted`                               |

<!-- END REF -->

La fonction `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->chiffre le paramètre *message* à l'aide de la clé **publique**<!-- END REF -->. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propriété         | Type | Description                                                                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512".                                                                                               |
| encodingEncrypted | text | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                    |
| encodingDecrypted | text | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à chiffrer. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |

#### *Result*

La valeur retournée est un message chiffré.

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé primaire au format PEM |

<!-- END REF -->

La fonction `.getPrivateKey()` <!-- REF #CryptoKey.getPrivateKey().Summary -->renvoie la clé privée de l'objet `CryptoKey`<!-- END REF --> au format PEM, ou une chaîne vide s'il n'y en a pas.

#### *Result*

La valeur retournée est la clé privée.

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| Paramètres | Type |    | Description                |
| ---------- | ---- | -- | -------------------------- |
| Résultat   | Text | <- | Clé publique au format PEM |

<!-- END REF -->

La fonction `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary -->renvoie la clé publique de l'objet `CryptoKey`<!-- END REF --> au format PEM, ou une chaîne vide s'il n'y en a pas.

#### *Result*

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

<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->

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

La fonction `.sign()` <!-- REF #CryptoKey.sign().Summary -->signe la représentation utf8 d'une chaîne de *message*<!-- END REF --> en utilisant les clés de l'objet `CryptoKey` et les *options* fournies. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut `options.encoding` que vous avez passé.

`CryptoKey` doit contenir une clé **privée** valide.

#### *options*

| Propriété         | Type    | Description                                                                                                                                                                                                                                                                                                                |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                                 |
| pss               | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la production d'un JWT pour l'algorithme PS@                                                                                                |
| encoding          | text    | Représentation à utiliser pour la signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                                               |

#### *Result*

La représentation utf8 de la chaîne *message*.

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

Défini uniquement pour les clés RSA : <!-- REF #CryptoKey.size.Summary -->la taille de la clé en bits<!-- END REF -->. Habituellement 2048 (par défaut).

<!-- REF CryptoKey.type -->

## .type

<!-- END REF -->

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->

Contient le <!-- REF #CryptoKey.type.Summary -->nom du type de clé - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA" : paire de clés RSA, utilise `settings.size` pour la taille [.size](#size).
- "ECDSA" : paire de clés Elliptic Curve Digital Signature Algorithm, utilise `settings.curve` pour la propriété [.curve](#curve). A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.
- "PEM" : Définition de paire de clés au format PEM, utilise `settings.pem` pour la propriété [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 18 R4   | Ajout         |

</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Paramètres | Type   |    | Description                                                                                     |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Chaîne message utilisée pour générer la signature                                               |
| signature  | Text   | -> | Signature à vérifier, en représentation Base64 ou Base64URL, selon la valeur `options.encoding` |
| options    | Object | -> | Options de signature                                                                            |
| Résultat   | Object | <- | Statut de la vérification                                                                       |

<!-- END REF -->

La fonction `.verify()` <!-- REF #CryptoKey.verify().Summary -->vérifie la signature base64 par rapport à la représentation utf8 du *message*<!-- END REF --> en utilisant les clés de l'objet `CryptoKey` et les *options* fournies.

La `CryptoKey` doit contenir une clé **publique** valide.

#### *options*

| Propriété | Type    | Description                                                                                                                                                                                                                                                                                                                |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | text    | Algorithme de hachage à utiliser. Par exemple : "SHA256", "SHA384" ou "SHA512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
| pss       | boolean | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la vérification d'un JWT pour l'algorithme PS@                                                                                              |
| encoding  | text    | Représentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                                                    |

#### *Result*

La fonction retourne un objet status avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès (c'est-à-dire si la signature est correspondante).

La fonction retourne un objet status avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès (c'est-à-dire si la signature est correspondante).

| Propriété | Type       | Description                                                      |
| --------- | ---------- | ---------------------------------------------------------------- |
| success   | boolean    | True si la signature correspond au message                       |
| errors    | collection | Si `success` est `false`, peut contenir une collection d'erreurs |

<!-- END REF -->
