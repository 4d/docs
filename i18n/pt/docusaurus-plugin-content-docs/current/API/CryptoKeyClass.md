---
id: CryptoKeyClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

Essa classe está disponível no "class store" de `4D`.

:::info Veja também

For a comprehensive overview of this class, please refer to the [**CryptoKey: encrypt, decrypt, sign, and verify!**](https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/) blog post.

:::

### Resumo

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

## 4D. CryptoKey.new()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| Parâmetro | Tipo                         |                             | Descrição                                         |
| --------- | ---------------------------- | --------------------------- | ------------------------------------------------- |
| settings  | Object                       | ->                          | Settings to generate or load a key pair           |
| resultado | 4D.CryptoKey | <- | Objeto que contém um par de chaves de encriptação |

<!-- END REF -->

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *parâmetros*

| Propriedade     | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Defines the type of the key to create: <li>"RSA": generates a RSA key pair, using [.size](#size) as size.</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using [.curve](#curve) as curve. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li> |
| [curve](#curve) | text    | Nome da curva ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [pem](#pem)     | text    | Definição PEM de uma chave de cifrado a carregar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [size](#size)   | integer | Tamanho da chave RSA em bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### *CryptoKey*

O objeto `CryptoKey` devolvido encapsula um par de chaves de cifrado. It is a shared object and can therefore be used by multiple 4D processes simultaneously.

#### Exemplo 1

A message is signed by a private key and the signature is verified by the corresponding public key. The following code signs and verifies a simple message signature.

- Lado bob:

```4d
// Create the message
$message:="hello world"
Folder(fk desktop folder).file("message.txt").setText($message)

// Create a key
$type:=New object("type";"RSA")
$key:=4D.CryptoKey.new($type)

// Get the public key and save it
Folder(fk desktop folder).file("public.pem").setText($key.getPublicKey())

// Get signature as base64 and save it
Folder(fk desktop folder).file("signature").setText($key.sign($message;$type))

/*Bob sends the message, the public key and the signature to Alice*/
```

- O lado Alice:

```4d
// Get message, public key & signature
$message:=Folder(fk desktop folder).file("message.txt").getText()
$publicKey:=Folder(fk desktop folder).file("public.pem").getText()
$signature:=Folder(fk desktop folder).file("signature").getText()

// Create a key
$type:=New object("type";"PEM";"pem";$publicKey)
$key:=4D.CryptoKey.new($type)

// Verify signature
If ($key.verify($message;$signature;$type).success)
// The signature is valid

End if
```

#### Exemplo 2

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

<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                                                                     |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| message    | Text   | ->                          | String de mensagens a ser decodificada usando `options.encodingEncrypted` e descriptografada. |
| options    | Object | ->                          | Opções de codificação                                                                                         |
| Resultados | Object | <- | Estado                                                                                                        |

<!-- END REF -->

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *opções*

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                  |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".       |
| encodingDecrypted | text | Codificação utilizada para converter a mensagem binário decifrado na string de resultados. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### *Resultado*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

| Propriedade | Tipo       | Descrição                                                                |
| ----------- | ---------- | ------------------------------------------------------------------------ |
| success     | boolean    | True se a mensagem tiver sido decifrada com êxito                        |
| resultado   | text       | Mensagem decifrado e decodificado utilizando `options.encodingDecrypted` |
| errors      | collection | Se `success` for `false`, pode conter uma coleção de erros               |

In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                                                                    |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------ |
| message    | Text   | ->                          | String de mensagens a ser codificada utilizando `options.encodingDecrypted` e criptografada. |
| options    | Object | ->                          | Opções de decodificação                                                                                      |
| Resultados | Text   | <- | Mensagem criptografada e codificada utilizando `options.encodingEncrypted`                                   |

<!-- END REF -->

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *opções*

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                    |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                   |
| encodingEncrypted | text | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".        |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### *Resultado*

O valor devolvido é uma mensagem encriptada.

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| Parâmetro  | Tipo |                             | Descrição                    |
| ---------- | ---- | --------------------------- | ---------------------------- |
| Resultados | Text | <- | Chave privada em formato PEM |

<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Resultado*

O valor devolvido é a chave privada.

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| Parâmetro  | Tipo |                             | Descrição                    |
| ---------- | ---- | --------------------------- | ---------------------------- |
| Resultados | Text | <- | Chave pública em formato PEM |

<!-- END REF -->

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Resultado*

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

<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->

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

| Parâmetro  | Tipo   |                             | Descrição                                                                       |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------- |
| message    | Text   | ->                          | String mensagem a assinar                                                       |
| options    | Object | ->                          | Opções de assinatura                                                            |
| Resultados | Text   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |

<!-- END REF -->

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `CryptoKey` object keys and provided *options*. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

A `CryptoKey` deve conter uma chave **privada** válida.

#### *opções*

| Propriedade       | Tipo    | Descrição                                                                                                                                                                                                                                                                                             |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                                                                                 |
| pss               | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passe `true` ao produzir um JWT para o algoritmo PS@                                                                                         |
| encoding          | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Por padrão é "Base64".                                                                                                                                             |

#### *Resultado*

A representação utf8 da string *message*.

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

- "RSA": um par de chaves RSA, usando `settings.size` como [.size](#size).
- "ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.
- "PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : Object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                                                         |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------- |
| message    | Text   | ->                          | String de mensagem utilizada para gerar a assinatura                                              |
| signature  | Text   | ->                          | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options    | Object | ->                          | Opções de assinatura                                                                              |
| Resultados | Object | <- | Estado da verificação                                                                             |

<!-- END REF -->

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `CryptoKey` object keys and provided *options*.

A `CryptoKey` deve conter uma chave **pública** válida.

#### *opções*

| Propriedade | Tipo    | Descrição                                                                                                                                                                                                                                                                                             |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash        | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| pss         | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passa `true` ao verficar um JWT para o algoritmo PS@                                                                                         |
| encoding    | text    | Codificação utilizada para converter a mensagem binária criptografada na string  resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                                                                                |

#### *Resultado*

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Propriedade | Tipo       | Descrição                                                  |
| ----------- | ---------- | ---------------------------------------------------------- |
| success     | boolean    | True se a assinatura corresponder com a mensagem           |
| errors      | collection | Se `success` for `false`, pode conter uma coleção de erros |

<!-- END REF -->
