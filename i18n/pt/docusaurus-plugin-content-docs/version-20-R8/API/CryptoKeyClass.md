---
id: CryptoKeyClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

Essa classe está disponível no "class store" de `4D`.

:::info Veja também

Para obter uma visão geral abrangente dessa classe, consulte a postagem do blog [**CryptoKey: criptografar, descriptografar, assinar e verificar!**](https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/).

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
| [<!-- INCLUDE #CryptoKey.pem.Syntax -->](#pem)<br/><!-- INCLUDE #CryptoKey.pem.Summary -->                                   |
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

| Parâmetro  | Tipo                         |                             | Descrição                                         |
| ---------- | ---------------------------- | --------------------------- | ------------------------------------------------- |
| settings   | Object                       | ->                          | Settings to generate or load a key pair           |
| Resultados | 4D.CryptoKey | <- | Objeto que contém um par de chaves de encriptação |

<!-- END REF -->

A função `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary -->cria um novo objeto `4D.CryptoKey` que encapsula um par de chaves de criptografia<!-- END REF -->, com base no parâmetro objeto *settings*. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *parâmetros*

| Propriedade     | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Define o tipo de chave a ser criada: <li>"RSA": gera um par de chaves RSA, usando [.size](#size) como tamanho.</li><li>"ECDSA": gera um par de chaves Elliptic Curve Digital Signature Algorithm, usando [.curve](#curve) como curva. Note que chaves ECDSA não podem ser usadas para criptografia, mas apenas para assinatura.</li><li>"PEM": carrega uma definição de par chave no formato PEM, usando [.pem](#pem).</li> |
| [curve](#curve) | text    | Nome da curva ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [pem](#pem)     | text    | Definição PEM de uma chave de cifrado a carregar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [size](#size)   | integer | Tamanho da chave RSA em bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### *CryptoKey*

O objeto `CryptoKey` devolvido encapsula um par de chaves de cifrado. It is a shared object and can therefore be used by multiple 4D processes simultaneously.

#### Exemplo 1

A message is signed by a private key and the signature is verified by the corresponding public key. The following code signs and verifies a simple message signature.

- Lado bob:

```4d
// Criar a mensagem
$message:="hello world"
Folder(fk desktop folder).file("message.txt").setText($message)

// Criar uma chave
$type:=New object("type"; "RSA")
$key:=4D.CryptoKey.new($type)

// Obtenha a chave pública e salve-a
Folder(fk desktop folder).file("public.pem").setText($key.getPublicKey())

// Obtenha a assinatura como base64 e salve-a
Folder(fk desktop folder).file("signature").setText($key.sign($message;$type))

/*Bob envia a mensagem, a chave pública e a assinatura para Alice*/
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

Definido somente para chaves ECDSA: o <!-- REF #CryptoKey.curve.Summary -->nome da curva normalizada da chave<!-- END REF -->. Normalmente "prime256v1" para ES256 (por defeito), "secp384r1" para ES384, "secp521r1" para ES512.

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

A função `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->criptografa o parâmetro *message* usando a chave **pública**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *opções*

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                  |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".       |
| encodingDecrypted | text | Codificação utilizada para converter a mensagem binário decifrado na string de resultados. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### *Resultado*

A função retorna um objeto status com a propriedade `success` definida como `true` se a *mensagem* puder ser descriptografada com êxito.

| Propriedade | Tipo       | Descrição                                                                |
| ----------- | ---------- | ------------------------------------------------------------------------ |
| success     | boolean    | True se a mensagem tiver sido decifrada com êxito                        |
| resultado   | text       | Mensagem decifrado e decodificado utilizando `options.encodingDecrypted` |
| errors      | collection | Se `success` for `false`, pode conter uma coleção de erros               |

Caso a *mensagem* não possa ser descriptografada porque não foi criptografada com a mesma chave ou algoritmo, o objeto `status` que está sendo retornado contém uma coleção de erros em `status.errors`.

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

A função `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->descriptografa o parâmetro *message* usando a chave **privada**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

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

A função ’.getPrivateKey()`<!-- REF #CryptoKey.getPrivateKey().Summary -->retorna a chave privada do objeto`CryptoKey\`<!-- END REF --> no formato PEM ou uma cadeia de caracteres vazia se não houver nenhuma disponível.

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

A função `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary -->retorna a chave pública do objeto `CryptoKey`<!-- END REF --> no formato PEM ou uma cadeia de caracteres vazia se não houver nenhuma disponível.

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

<!-- REF #CryptoKey.pem.Summary -->PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it. <!-- END REF -->

<!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->

## .sign()

<details><summary>História</summary>

| Release | Mudanças                      |
| ------- | ----------------------------- |
| 20 R8   | Suporte de mensagem como Blob |
| 18 R4   | Adicionado                    |

</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Object) : Text<br/>.**sign** (*message* : Blob ; *options* : Object) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->

| Parâmetro  | Tipo          |                             | Descrição                                                                       |
| ---------- | ------------- | --------------------------- | ------------------------------------------------------------------------------- |
| message    | Texto OU Blob | ->                          | Mensagem a assinar                                                              |
| options    | Object        | ->                          | Opções de assinatura                                                            |
| Resultados | Text          | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |

<!-- END REF -->

A função `.sign()` <!-- REF #CryptoKey.sign().Summary -->assina a representação utf8 de uma string *message* ou Blob<!-- END REF --> usando as chaves do objeto `CryptoKey` e as *opções* fornecidas. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

A `CryptoKey` deve conter uma chave **privada** válida.

#### *opções*

| Propriedade       | Tipo    | Descrição                                                                                                                                                                                                                                                                                             |
| ----------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                                                                                 |
| pss               | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passe `true` ao produzir um JWT para o algoritmo PS@                                                                                         |
| encoding          | text    | Representação a ser usada para a assinatura do resultado. Possible values are "Base64" or "Base64URL". Por padrão é "Base64".                                                                                                                         |

#### *Resultado*

A representação utf8 de *mensagem*.

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

Definido somente para chaves RSA: <!-- REF #CryptoKey.size.Summary -->o tamanho da chave em bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->

## .type

<!-- END REF -->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->

Contém o nome <!-- REF #CryptoKey.type.Summary -->do tipo de chave - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA": um par de chaves RSA, usando `settings.size` como [.size](#size).
- "ECDSA": um par de chaves Elliptic Curve Digital Signature Algorithm, usando `settings.curve` como [.curve](#curve). Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.
- "PEM": uma definição de par chave em formato PEM, usando `settings.pem` como [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>História</summary>

| Release | Mudanças                      |
| ------- | ----------------------------- |
| 20 R8   | Suporte de mensagem como Blob |
| 18 R4   | Adicionado                    |

</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : Object<br/>*.verify**( *message* : Blob ; *signature* : Text ; *options* : Object) : Object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Parâmetro  | Tipo          |                             | Descrição                                                                                         |
| ---------- | ------------- | --------------------------- | ------------------------------------------------------------------------------------------------- |
| message    | Texto OU Blob | ->                          | Message that was used to produce the signature                                                    |
| signature  | Text          | ->                          | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options    | Object        | ->                          | Opções de assinatura                                                                              |
| Resultados | Object        | <- | Estado da verificação                                                                             |

<!-- END REF -->

A função `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica a assinatura base64 em relação à representação utf8 da *message*<!-- END REF --> usando as chaves do objeto `CryptoKey` e as *options* fornecidas.

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
