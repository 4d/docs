---
id: CryptoKeyClass
title: CryptoKey
---

A classe `CryptoKey` da linguagem 4D contém um par de chaves de cifrado assimétrico.

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

| Parâmetro  | Tipo                         |                             | Descrição                                          |
| ---------- | ---------------------------- | --------------------------- | -------------------------------------------------- |
| settings   | Object                       | ->                          | Parâmetros para gerar ou carregar um par de chaves |
| Resultados | 4D.CryptoKey | <- | Objeto que contém um par de chaves de encriptação  |

<!-- END REF -->

A função `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary -->cria um novo objeto `4D.CryptoKey` que encapsula um par de chaves de criptografia<!-- END REF -->, com base no parâmetro objeto *settings*. Permite gerar uma nova chave RSA o ECDSA, ou carregar um par de chaves existente desde uma definição PEM.

#### *parâmetros*

| Propriedade     | Tipo    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Define o tipo de chave a ser criada: <li>"RSA": gera um par de chaves RSA, usando [.size](#size) como tamanho.</li><li>"ECDSA": gera um par de chaves Elliptic Curve Digital Signature Algorithm, usando [.curve](#curve) como curva. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li> |
| [curve](#curve) | text    | Nome da curva ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [pem](#pem)     | text    | Definição PEM de uma chave de cifrado a carregar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [size](#size)   | integer | Tamanho da chave RSA em bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### *CryptoKey*

O objeto `CryptoKey` devolvido encapsula um par de chaves de cifrado. É um objeto compartido e, portanto, pode ser utilizado por vários processos 4D simultaneamente.

#### Exemplo 1

Uma mensagem é assinada por uma chave privada e a assinatura é verificada pela chave pública correspondente. O código a seguir assina e verifica uma assinatura de mensagem simples.

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
// Obter mensagem, chave pública e assinatura
$message:=Folder(fk desktop folder).file("message.txt").getText()
$publicKey:=Folder(fk desktop folder).file("public.pem").getText()
$signature:=Folder(fk desktop folder).file("signature").getText()

// Criar uma chave
$type:=New object("type"; "PEM"; "pem";$publicKey)
$key:=4D.CryptoKey.new($type)

// Verificar assinatura
If ($key.verify($message;$signature;$type).success)
// A assinatura é válida

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

A função `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->descriptografa o parâmetro *message* usando a chave **privada**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

A chave deve ser uma chave RSA, o algoritmo é RSA-OAEP (consulte [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *opções*

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                  |
| encodingEncrypted | text | Codificação utilizada para converter o parâmetro `message` na representação binaria a decifrar. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".   |
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

A função `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->criptografa o parâmetro *message* usando a chave **pública**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

A chave deve ser uma chave RSA, o algoritmo é RSA-OAEP (consulte [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *opções*

| Propriedade       | Tipo | Descrição                                                                                                                                                                                                             |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                            |
| encodingEncrypted | text | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                 |
| encodingDecrypted | text | Codificação usada para converter o parâmetro `message` na representação binária a ser criptografada. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

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
| Resultados | Text   | <- | Assinatura na representação Base64 ou Base64URL, dependendo da opção "encoding" |

<!-- END REF -->

A função `.sign()` <!-- REF #CryptoKey.sign().Summary -->assina a representação utf8 de uma string *message*<!-- END REF --> usando as chaves do objeto `CryptoKey` e as *options* fornecidas. Ele retorna sua assinatura no formato base64 ou base64URL dependendo do valor do atributo `options.encoding` que você passou.

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
- "ECDSA": um par de chaves de Algoritmos de Assinatura Digital de Curva Elíptica, usando `settings.curve` como [.curve](#curve). Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.
- "PEM": uma definição de par chave em formato PEM, usando `settings.pem` como [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |

</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : Object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Parâmetro  | Tipo   |                             | Descrição                                                                                                          |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| message    | Text   | ->                          | String de mensagem utilizada para gerar a assinatura                                                               |
| signature  | Text   | ->                          | Assinatura que vai ser verificada, em representação Base64 ou Base64URL, dependendo do valor de `options.encoding` |
| options    | Object | ->                          | Opções de assinatura                                                                                               |
| Resultados | Object | <- | Estado da verificação                                                                                              |

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
