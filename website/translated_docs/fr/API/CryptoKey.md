---
id: cryptoClass
title: Classe CryptoKey
---

## Aperçu

La classe `CryptoKey` du langage 4D contient une paire de clés de chiffrement asymétrique.

Cette classe est disponible depuis le "class store" de `4D`.

### Propriétés de l'objet `cryptoKey`

Un objet `cryptoKey` est instancié par la méthode [4D.CryptoKey.new](#4dcryptokeynew). Ses propriétés sont les suivantes (en lecture seule) :

| Propriété | Type    | Description                                                                                                                           |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| type      | Texte   | Nom du type de clé. Par exemple : "ECDSA" ou "RSA".                                                                                   |
| size      | integer | Défini uniquement pour les clés RSA : la taille de la clé est exprimée en octets. Généralement 2048                                   |
| curve     | Texte   | Définie uniquement pour les clés ECDSA : le nom de courbe normalisé de la clé. Par exemple : "prime256v1", "secp384r1" or "secp521r1" |

### Exemple


L'exemple suivant illustre la signature et la vérification d'un message à l'aide d'une nouvelle paire de clés ECDSA, afin de créer, par exemple, un token Web JSON ES256.

```4d
 // Générer une nouvelle paire de clés ECDSA
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Obtenir une signature en base64
$message:="hello world" 
$signature:=$key.sign($message;New object("hash";"HASH256"))

  // Vérifier la signature
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

| Paramètres | Propriété | Type    |    | Description                                                                                                                    |
| ---------- | --------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------ |
| settings   |           | object  | -> | Paramètres pour générer ou charger une paire de clés                                                                           |
|            | type      | Texte   |    | Type de clé : "RSA", "ECDSA", ou "PEM" (voir ci-dessous)                                                                       |
|            | size      | integer |    | Taille de la clé RSA en octets. 2048 par défaut                                                                                |
|            | curve     | Texte   |    | nom de la courbe ECDSA. Généralement "prime256v1" pour ES256 (par défaut), "secp384r1" pour ES384, "secp521r1" pour ES512      |
|            | pem       | Texte   |    | Définition PEM d'une clé de chiffrement à charger. Si la clé est une clé privée, la clé publique RSA ou ECDSA en sera déduite. |
|            |           |         |    |                                                                                                                                |
| keyPair    |           | object  | <- | Objet contenant une paire de clés de chiffrement                                                                               |

Cette méthode crée un nouvel objet contenant une paire de clés de chiffrement, fondée sur le paramètre `settings`. Elle permet de générer une nouvelle clé RSA ou ECDSA, ou de charger une paire de clés existante à partir de la définition PEM.

Passez le type de clé dans la propriété `type` du paramètre `settings` :

- "RSA" : génère une paire de clés RSA, à l'aide de `settings.size` pour la taille.
- "ECDSA": génère une paire de clés Elliptic Curve Digital Signature Algorithm, à l'aide de `settings.curve` pour la propriété curve. A noter que les clés ECDSA ne peuvent pas être utilisées pour le chiffrement, mais uniquement pour la signature.
- "PEM" : charge une définition de paire de clés au format PEM, à l'aide de `settings.pem`.

L'objet `keyPair` qui en résulte est un objet partagé et peut être alors utilisé par de multiples traitements 4D simultanés.


## cryptoKey.getPrivateKey()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

#### cryptoKey.getPrivateKey() -> privateKey

| Paramètres | Propriété | Type  |    | Description                |
| ---------- | --------- | ----- | -- | -------------------------- |
|            |           |       |    |                            |
| privateKey |           | Texte | <- | Clé primaire au format PEM |

Cette méthode retourne la clé privée de l'objet `cryptoKey` au format PEM, ou une chaine vide si aucune n'est disponible.


## cryptoKey.getPublicKey()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

#### cryptoKey.getPublicKey() -> publicKey

| Paramètres | Propriété | Type  |    | Description                |
| ---------- | --------- | ----- | -- | -------------------------- |
|            |           |       |    |                            |
| publicKey  |           | Texte | <- | Clé publique au format PEM |

Cette méthode retourne la clé publique de l'objet `cryptoKey` au format PEM, ou une chaine vide si aucune n'est disponible.


## cryptoKey.sign()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

#### cryptoKey.sign(message;options) -> signature

| Paramètres | Propriété | Type    |    | Description                                                                                                                                                                                                                |
| ---------- | --------- | ------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |           | Texte   | -> | Chaîne message à signer                                                                                                                                                                                                    |
| options    |           | object  | -> | Options de signature                                                                                                                                                                                                       |
|            | hash      | Texte   |    | Algorithme de hachage à utiliser. Par example : "HASH256", "HASH384", ou "HASH512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
|            | pss       | boolean |    | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la production d'un JWT pour l'algorithme PS@                                                                |
|            | encoding  | Texte   |    | Représentation à utiliser pour la signature. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                               |
|            |           |         |    |                                                                                                                                                                                                                            |
| signature  |           | Texte   | <- | Signature résultante en représentation Base64 ou Base64URL, selon l'option "encoding"                                                                                                                                      |

Cette méthode signe la représentation utf8 d'une chaîne `message` à l'aide des clés d'objet `cryptoKey` et des `options` fournies. Elle retourne sa signature au format base64 ou base64URL, selon la valeur de l'attribut `options.encoding` que vous avez passé.

La `cryptoKey` doit contenir une clé **privée** valide.

## cryptoKey.verify()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

#### cryptoKey.verify(message;signature;options) -> status

| Paramètres | Propriété | Type       |    | Description                                                                                                                                                                                                                |
| ---------- | --------- | ---------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |           | Texte      | -> | Chaîne message utilisée pour générer la signature                                                                                                                                                                          |
| signature  |           | Texte      | -> | Signature à vérifier, en représentation Base64 ou Base64URL, selon l'option "encoding"                                                                                                                                     |
| options    |           | object     | -> | Options de signature                                                                                                                                                                                                       |
|            | hash      | Texte      |    | Algorithme de hachage à utiliser. Par example : "HASH256", "HASH384", ou "HASH512". Lorsqu'elle est utilisée pour produire un JWT, la taille du hachage doit correspondre à la taille de l'algorithme PS@, ES@, RS@ ou PS@ |
|            | pss       | boolean    |    | Utilise le Probabilistic Signature Scheme (PSS). Ignoré si la clé n'est pas une clé RSA. Passez `true` lors de la vérification d'un JWT pour l'algorithme PS@                                                              |
|            | encoding  | Texte      |    | Représentation de la signature fournie. Valeurs possibles : "Base64" ou "Base64URL". La valeur par défaut est "Base64".                                                                                                    |
|            |           |            |    |                                                                                                                                                                                                                            |
| status     |           | object     | <- | Résultat de la vérification                                                                                                                                                                                                |
|            | success   | boolean    |    | True si la signature correspond au message                                                                                                                                                                                 |
|            | errors    | collection |    | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs                                                                                                                                                |

Cette méthode vérifie et compare la signature base64 par rapport à la représentation utf8 du `message` à l'aide des clés d'objet `cryptoKey` et des `options` fournies.

La méthode renvoie un objet `status` avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès (la signature est correspondante).

Si la signature n'a pas pu être vérifiée car elle n'a pas été signée avec le même `message`, la clé ou l'algorithme, l'objet `status` retourné contient une collection d'erreurs dans `status.errors`.

La `cryptoKey` doit contenir une clé **publique** valide.

## cryptoKey.encrypt()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

#### cryptoKey.encrypt(message;options) -> result

| Paramètres | Propriété         | Type   |    | Description                                                                                                                                                                   |
| ---------- | ----------------- | ------ | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |                   | Texte  | -> | Chaine message à chiffrer à l'aide de options.encodingDecrypted et encrypted.                                                                                                 |
| options    |                   | object | -> | Options de chiffrement                                                                                                                                                        |
|            | hash              | Texte  |    | Algorithme de hachage à utiliser. Par example : "HASH256", "HASH384", ou "HASH512".                                                                                           |
|            | encodingEncrypted | Texte  |    | Chiffrement utilisé pour convertir le message chiffré binaire en chaîne de résultat. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64".                    |
|            | encodingDecrypted | Texte  |    | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à chiffrer. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8". |
|            |                   |        |    |                                                                                                                                                                               |
| result     |                   | Texte  | <- | Message chiffré et encodé à l'aide de `options.encodingEncrypted`                                                                                                             |

Cette méthode déchiffre le paramètre de `message` à l'aide de la clé **privée**. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).



## cryptoKey.decrypt()

<details><summary>Historique</summary>

| Version | Modifications |
| ------- | ------------- |
| v18 R4  | Ajoutées      |
</details>

#### cryptoKey.decrypt(message;options) -> status

| Paramètres | Propriété         | Type       |    | Description                                                                                                                                                             |
| ---------- | ----------------- | ---------- | -- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message    |                   | Texte      | -> | Chaine message à décoder à l'aide de options.encodingEncrypted et decrypted.                                                                                            |
| options    |                   | object     | -> | Options de décodage                                                                                                                                                     |
|            | hash              | Texte      |    | Algorithme de hachage à utiliser. Par example : "HASH256", "HASH384", ou "HASH512".                                                                                     |
|            | encodingEncrypted | Texte      |    | Chiffrement utilisé pour convertir le paramètre `message` en représentation binaire à déchiffrer. Peut être "Base64" ou "Base64URL". La valeur par défaut est "Base64". |
|            | encodingDecrypted | Texte      |    | Encodage utilisé pour convertir le message binaire déchiffré en chaîne de résultat. Peut être "UTF-8", "Base64" ou "Base64URL". La valeur par défaut est "UTF-8".       |
|            |                   |            |    |                                                                                                                                                                         |
| status     |                   | object     | <- | Résultat                                                                                                                                                                |
|            | success           | boolean    |    | True si le message a été déchiffré avec succès                                                                                                                          |
|            | result            | Texte      |    | Message déchiffré et décodé à l'aide de `options.encodingDecrypted`                                                                                                     |
|            | errors            | collection |    | Si `success` est mis sur `false`, il peut contenir une collection d'erreurs                                                                                             |

Cette méthode chiffre le paramètre `message` à l'aide de la clé **publique**. L'algorithme utilisé dépend du type de clé.

La clé doit être une clé RSA, l'algorithme est RSA-OAEP (voir [RFC 3447](https://tools.ietf.org/html/rfc3447)).

La méthode renvoie un objet "status" avec la propriété `success` définie sur `true` si le `message` a pu être déchiffré avec succès.

Si le `message` n'a pas pu être déchiffré car il n'a pas été chiffré avec la même clé ou le même algorithme, l'objet `status` retourné contient une collection d'erreurs dans `status.errors`.

