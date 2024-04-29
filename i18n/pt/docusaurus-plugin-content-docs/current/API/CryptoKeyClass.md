---
id: CryptoKeyClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

### Exemplo

O código abaixo de exemplo firma e verifica uma mensagem utilizando um novo par de chaves ECDSA, por exemplo para criar um token web JSON ES256.

```4d
 // Generate a new ECDSA key pair
$key:=4D. CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Get signature as base64
$message:="hello world"
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```

### Resumo

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

## 4D. CryptoKey.new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->

**4D.CryptoKey.new**( _settings_ : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| Parâmetro | Tipo                          |    | Descrição                                          |
| --------- | ----------------------------- | -- | -------------------------------------------------- |
| settings  | Object                        | -> | Parâmetros para gerar ou carregar um par de chaves |
| result    | 4D. CryptoKey | <- | Object encapsulating an encryption key pair        |

<!-- END REF -->

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the _settings_ object parameter. Permite gerar uma nova chave RSA o ECDSA, ou carregar um par de chaves existente desde uma definição PEM.

#### _parâmetros_

| Propriedade     | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Defines the type of the key to create: <li>"RSA": generates a RSA key pair, using [.size](#size) as size.</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using [.curve](#curve) as curve. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li> |
| [curve](#curve) | text    | Nome da curva ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [pem](#pem)     | text    | Definição PEM de uma chave de cifrado a carregar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [size](#size)   | integer | Tamanho da chave RSA em bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### _CryptoKey_

The returned `CryptoKey` object encapsulates an encryption key pair. É um objeto compartido e, portanto, pode ser utilizado por vários processos 4D simultaneamente.

<!-- REF CryptoKey.curve -->

## .curve

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->

Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->normalised curve name of the key<!-- END REF -->. Normalmente "prime256v1" para ES256 (por defeito), "secp384r1" para ES384, "secp521r1" para ES512.

<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->

## .decrypt()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.decrypt().Syntax -->

**.decrypt**( _message_ : Text ; _options_ : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| Parâmetro  | Tipo   |    | Descrição                                                                                     |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options    | Object | -> | Opções de codificação                                                                         |
| Resultados | Object | <- | Estado                                                                                        |

<!-- END REF -->

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the _message_ parameter using the **private** key<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### _opções_

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                  |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".       |
| encodingDecrypted | text | Codificação utilizada para converter a mensagem binário decifrado na string de resultados. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### _Resultado_

The function returns a status object with `success` property set to `true` if the _message_ could be successfully decrypted.

| Propriedade | Tipo       | Descrição                                                           |
| ----------- | ---------- | ------------------------------------------------------------------- |
| success     | boolean    | True se a mensagem tiver sido decifrada com êxito                   |
| result      | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors      | collection | If `success` is `false`, may contain a collection of errors         |

In case the _message_ couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->

**.encrypt**( _message_ : Text ; _options_ : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| Parâmetro  | Tipo   |    | Descrição                                                                                     |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options    | Object | -> | Opções de decodificação                                                                       |
| Resultados | Text   | <- | Message encrypted and encoded using the `options.encodingEncrypted`                           |

<!-- END REF -->

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the _message_ parameter using the **public** key<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### _opções_

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                    |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                   |
| encodingEncrypted | text | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".        |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### _Resultado_

O valor devolvido é uma mensagem encriptada.

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->

**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| Parâmetro  | Tipo |    | Descrição                    |
| ---------- | ---- | -- | ---------------------------- |
| Resultados | Text | <- | Chave privada em formato PEM |

<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Resultado_

O valor devolvido é a chave privada.

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->

**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| Parâmetro  | Tipo |    | Descrição                    |
| ---------- | ---- | -- | ---------------------------- |
| Resultados | Text | <- | Chave pública em formato PEM |

<!-- END REF -->

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Resultado_

O valor devolvido é a chave pública.

<!-- END REF -->

---

<!-- REF CryptoKey.pem.Desc -->

## .pem

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.pem.Syntax -->

**.pem** : Text<!-- END REF -->

<!-- REF #CryptoKey.pem.Summary -->

Definição PEM de uma chave de cifrado a carregar. Se a chave for uma chave privada, será deduzido dela a chave pública RSA ou ECDSA. <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->

## .sign()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Object) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->

| Parâmetro  | Tipo   |    | Descrição                                                                       |
| ---------- | ------ | -- | ------------------------------------------------------------------------------- |
| message    | Text   | -> | String mensagem a assinar                                                       |
| options    | Object | -> | Opções de assinatura                                                            |
| Resultados | Text   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |

<!-- END REF -->

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a _message_ string<!-- END REF --> using the `CryptoKey` object keys and provided _options_. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### _opções_

| Propriedade       | Tipo    | Descrição                                                                                                                                                                                                                                                                                             |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                                                                                 |
| pss               | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Pass `true` when producing a JWT for PS@ algorithm                                                                                           |
| encoding          | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Por padrão é "Base64".                                                                                                                                             |

#### _Resultado_

The utf8 representation of the _message_ string.

<!-- END REF -->

<!-- REF CryptoKey.size -->

## .size

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->

Defined only for RSA keys: <!-- REF #CryptoKey.size.Summary -->the size of the key in bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->

## .type

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->

Contains the <!-- REF #CryptoKey.type.Summary -->name of the key type - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA": an RSA key pair, using `settings.size` as [.size](#size).
- "ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.
- "PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.verify().Syntax -->

**.verify**( _message_ : Text ; _signature_ : Text ; _options_ : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Parâmetro  | Tipo   |    | Descrição                                                                                         |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | String de mensagem utilizada para gerar a assinatura                                              |
| signature  | Text   | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options    | Object | -> | Opções de assinatura                                                                              |
| Resultados | Object | <- | Estado da verificação                                                                             |

<!-- END REF -->

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of _message_<!-- END REF --> using the `CryptoKey` object keys and provided _options_.

The `CryptoKey` must contain a valid **public** key.

#### _opções_

| Propriedade | Tipo    | Descrição                                                                                                                                                                                                                                                                                             |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash        | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| pss         | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Pass `true` when verifying a JWT for PS@ algorithm                                                                                           |
| encoding    | text    | Codificação utilizada para converter a mensagem binária criptografada na string  resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                                                                                |

#### _Resultado_

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same _message_, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Propriedade | Tipo       | Descrição                                                   |
| ----------- | ---------- | ----------------------------------------------------------- |
| success     | boolean    | True se a assinatura corresponder com a mensagem            |
| errors      | collection | If `success` is `false`, may contain a collection of errors |

<!-- END REF -->
