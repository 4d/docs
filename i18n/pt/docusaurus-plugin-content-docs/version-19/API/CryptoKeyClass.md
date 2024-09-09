---
id: CryptoKeyClass
title: CryptoKey
---


A classe `CryptoKey` da linguagem 4D contém um par de chaves de cifrado assimétrico.

Esta classe está disponível na loja de classes de `4D`.

:::info Ver também

For a comprehensive overview of this class, please refer to the [**CryptoKey: encrypt, decrypt, sign, and verify!**](https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/) blog post.

:::

### Resumo

|                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<br/><!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)<br/><!-- INCLUDE #CryptoKey.curve.Summary --> |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)<br/><!-- INCLUDE #CryptoKey.decrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)<br/><!-- INCLUDE #CryptoKey.encrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)<br/><!-- INCLUDE #CryptoKey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)<br/><!-- INCLUDE #CryptoKey.getPublicKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)<br/><!-- INCLUDE #CryptoKey.sign().Summary --> |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)<br/><!-- INCLUDE #CryptoKey.size.Summary --> |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)<br/><!-- INCLUDE #CryptoKey.type.Summary --> |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)<br/><!-- INCLUDE #CryptoKey.verify().Summary -->|

## 4D. CryptoKey.new()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->


<!-- REF #4D.CryptoKey.new().Params -->
| Parâmetro | Tipo         |    | Descrição                                         |
| --------- | ------------ | -- | ------------------------------------------------- |
| settings  | Object       | -> | Settings to generate or load a key pair           |
| result    | 4D.CryptoKey | <- | Objeto que contém um par de chaves de encriptação |
<!-- END REF -->

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition.

#### *settings*

| Propriedade     | Tipo    | Descrição                                                                                                  |
| --------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Define o tipo da chave a criar: <li>"RSA": gera um par de chaves RSA usando [.size](#size) como size.</li><li>"ECDSA": gera um par de chaves Elliptic Curve Digital Signature Algorithm, usando [.curve](#curve) como curve. Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.</li><li>"PEM": carrega uma definição de par de chaves em formato PEM, usando [.pem](#pem).</li> |
| [curve](#curve) | text    | Nome da curva ECDSA                                                                                        |
| [pem](#pem)     | text    | Definição PEM de uma chave de cifrado a carregar                                                           |
| [size](#size)   | integer | Tamanho da chave RSA em bits                                                                               |


#### *CryptoKey*

The returned `CryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.

#### Exemplo 1

A message is signed by a private key and the signature is verified by the corresponding public key. The following code signs and verifies a simple message signature.

- Bob's side:

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

- Alice's side:

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

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->


Definido apenas para as chaves ECDSA: o <!-- REF #CryptoKey.curve.Summary -->nome da curva normalizada da chave<!-- END REF -->. Normalmente "prime256v1" para ES256 (por defeito), "secp384r1" para ES384, "secp521r1" para ES512.
<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->


<!-- REF #CryptoKey.decrypt().Params -->
| Parâmetro  | Tipo   |    | Descrição                                                                             |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------- |
| message    | Text   | -> | String de mensagens a decodificar utilizando `options.encodingEncrypted` e descifrar. |
| options    | Object | -> | Opções de codificação                                                                 |
| Resultados | Object | <- | Estado                                                                                |
<!-- END REF -->

A função `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->decifra o parâmetro *mensagem* usando a chave **privada**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

"RSA": um par de chaves RSA, utilizando `settings.size` como \[.size\](#size).

#### *options*

| Propriedade       | Tipo | Descrição                                                                                                                                                   |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                  |
| encodingEncrypted | text | Codificação utilizada para converter o parâmetro `mensagem` na representação binaria a decifrar. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".  |
| encodingDecrypted | text | Codificação utilizada para converter a mensagem binário decifrado na string de resultados. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### *Resultados*

`CryptoKey` deve conter uma chave válida **publica**.

| Propriedade | Tipo       | Descrição                                                                |
| ----------- | ---------- | ------------------------------------------------------------------------ |
| success     | boolean    | True se a mensagem tiver sido decifrada com êxito                        |
| result      | text       | Mensagem decifrado e decodificado utilizando `options.encodingDecrypted` |
| errors      | collection | Se `success` for `false`, pode conter uma coleção de erros               |

A função devolve um objeto "status" com a propriedade `success` definida como `true` se *message* puder ser descifrada com êxito.
<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->


<!-- REF #CryptoKey.encrypt().Params -->
| Parâmetro  | Tipo   |    | Descrição                                                                          |
| ---------- | ------ | -- | ---------------------------------------------------------------------------------- |
| message    | Text   | -> | String de mensagens a codificar utilizando `options.encodingDecrypted` e encriptar |
| options    | Object | -> | Opções de decodificação                                                            |
| Resultados | Text   | <- | Message encrypted and encoded using the `options.encodingEncrypted`                |
<!-- END REF -->

A função `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->encripta o parâmetro *mensagem* utilizando a chave **public**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

"RSA": um par de chaves RSA, utilizando `settings.size` como \[.size\](#size).

##### *options*

| Propriedade       | Tipo | Descrição                                                                                                                                                     |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512".                                                                                    |
| encodingEncrypted | text | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".         |
| encodingDecrypted | text | Codificação utilizada para converter a mensagem binária criptografada na string  resultante. Pode ser "UTF-8", "Base64" ou "Base64URL". Por padrão é "UTF-8". |

#### *Resultados*

O valor devolvido é uma mensagem encriptada.
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #CryptoKey.getPrivateKey().Params -->
| Parâmetro  | Tipo |    | Descrição                    |
| ---------- | ---- | -- | ---------------------------- |
| Resultados | Text | <- | Chave privada em formato PEM |
<!-- END REF -->

A função `.getPrivateKey()`  <!-- REF #CryptoKey.getPrivateKey().Summary -->devolve a chave privada do objecto `CryptoKey`<!-- END REF --> em formato PEM, ou uma string vazia se nenhum estiver disponível.

#### *Resultados*

O valor devolvido é a chave privada.
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey**() : Text<!-- END REF -->


<!-- REF #CryptoKey.getPublicKey().Params -->
| Parâmetro  | Tipo |    | Descrição                    |
| ---------- | ---- | -- | ---------------------------- |
| Resultados | Text | <- | Chave pública em formato PEM |
<!-- END REF -->

A função `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary -->devolve a chave pública do objecto `CryptoKey`<!-- END REF --> em formato PEM, ou uma string vazia se nenhum estiver disponível.

#### *Resultados*

O valor devolvido é a chave pública.
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #CryptoKey.pem.Summary -->
Definição PEM de uma chave de cifrado a carregar. Se a chave for uma chave privada, será deduzido dela a chave pública RSA ou ECDSA. <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>Histórico</summary>

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

A função `.sign()` <!-- REF #CryptoKey.sign().Summary -->assina a representação utf8 de uma mensagem ** string<!-- END REF --> utilizando o `CryptoKey` chaves-objecto e forneceu *opções*. Devolve a sua assinatura no formato base64 ou base64URL, dependendo do valor do atributo `options.encoding` que passou.

`CryptoKey` deve conter uma chave válida **privada**.

#### *options*

| Propriedade       | Tipo    | Descrição                                                                                                                                                                                         |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| encodingEncrypted | text    | Codificação utilizada para converter a mensagem binária criptografada na string resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                             |
| pss               | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passa `true` ao produzir um JWT para o algoritmo PS@                                                     |
| encoding          | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Por padrão é "Base64".                                                                                         |

#### *Resultados*

`CryptoKey` deve conter uma chave válida **privada**.
<!-- END REF -->

<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->


Definido apenas para chaves RSA: <!-- REF #CryptoKey.size.Summary -->o tamanho da chave em bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->
## .type
<!-- END REF -->

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->


Contém <!-- REF #CryptoKey.type.Summary -->nome do tipo da chave - "RSA", "ECDSA", "PEM" <!-- END REF -->.


- "RSA": um par de chaves RSA, usando `settings.size` como [.size](#size).
- "ECDSA": um par de chaves de Algoritmos de Assinatura Digital de Curva Elíptica, usando `settings.curve` como [.curve](#curve). Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.
- "PEM": uma definição de par chave em formato PEM, usando `settings.pem` como [.pem](#pem).



<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>Histórico</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 18 R4   | Adicionado |
</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->


<!-- REF #CryptoKey.verify().Params -->
| Parâmetro  | Tipo   |    | Descrição                                                                                                          |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------ |
| message    | Text   | -> | String de mensagem utilizada para gerar a assinatura                                                               |
| signature  | Text   | -> | Assinatura que vai ser verificada, em representação Base64 ou Base64URL, dependendo do valor de `options.encoding` |
| options    | Object | -> | Opções de assinatura                                                                                               |
| Resultados | Object | <- | Estado da verificação                                                                                              |
<!-- END REF -->


A função `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica a assinatura base64 contra a representação utf8 de *mensagem*<!-- END REF --> utilizando o `CryptoKey` chaves-objecto e forneceu *opções*.

`CryptoKey` deve conter uma chave válida **publica**.

#### *options*

| Propriedade | Tipo    | Descrição                                                                                                                                                                                         |
| ----------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash        | text    | Algoritmo Digest a utilizar. Por exemplo: "SHA256", "SHA384", ou "SHA512". Quando utilizar para produzir um JWT, o tamanho de hash deve coincidir com o tamanho do algoritmo PS@, ES@, RS@ ou PS@ |
| pss         | boolean | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passa `true` ao verficar um JWT para o algoritmo PS@                                                     |
| encoding    | text    | Codificação utilizada para converter a mensagem binária criptografada na string  resultante. Pode ser "Base64", ou "Base64URL". Por padrão é "Base64".                                            |

#### *Resultados*

A função devolve um objeto "status" com a propriedade `success`estabelecida para `true` se `message` puder ser verificada com êxito (ou seja, se a assinatura coincidir).

Se a assinatura não puder ser verificada por não ter sido assinada com a mesma *message*, chave ou algoritmo, o objecto `status` devolvido contém uma colecção de erros em `status.errors`.

| Propriedade | Tipo       | Descrição                                                  |
| ----------- | ---------- | ---------------------------------------------------------- |
| success     | boolean    | True se a assinatura corresponder com a mensagem           |
| errors      | collection | Se `success` for `false`, pode conter uma coleção de erros |
<!-- END REF -->
