---
id: CryptoKeyClass
title: CryptoKey
---


The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

### Exemplo

The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token.

```4d
 // Generate a new ECDSA key pair
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Get signature as base64
$message:="hello world"
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```


### Resumo
|                                                                                                         |
| ------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary --></p>       |
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary --> </p>                   |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary --></p>             |
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary --></p>             |
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary --></p> |
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary --></p>   |
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary --> </p>                   |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary --> </p>                     |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary --> </p>                     |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary --></p>               |








## 4D.CryptoKey.new()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| Parameter | Type         |    | Description                                                                  |
| --------- | ------------ | -- | ---------------------------------------------------------------------------- |
| settings  | Objeto       | -> | Parâmetros para gerar ou carregar um par de chaves                           |
| result    | 4D.CryptoKey | <- | Objeto que contém um par de chaves de criptografia<!-- END REF -->


|


A função `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary -->cria um novo objeto `4D.CryptoKey` que encapsula um par de chaves de cifrado<!-- END REF -->, baseado no parâmetro de objeto *settings*. Permite gerar uma nova chave RSA o ECDSA, ou carregar um par de chaves existente desde uma definição PEM.

#### *settings*

| Property        | Type    | Description                                    |
| --------------- | ------- | ---------------------------------------------- |
| [curve](#curve) | text    | Name of ECDSA curve                            |
| [pem](#pem)     | text    | PEM definition of an encryption key to load    |
| [size](#size)   | integer | Size of RSA key in bits                        |
| [type](#type)   | text    | Type of the key: "RSA", "ECDSA", or "PEM"</li> |


#### *CryptoKey*

O objeto `CryptoKey` devolvido encapsula um par de chaves de cifrado. É um objeto compartido e, portanto, pode ser utilizado por vários processos 4D simultaneamente.



<!-- REF CryptoKey.curve -->
## .curve

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->




Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->curva normalizada nome da chave<!-- END REF -->.

Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.

<!-- END REF -->


## .decrypt()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->
| Parameter | Type   |    | Description                                                                           |
| --------- | ------ | -- | ------------------------------------------------------------------------------------- |
| message   | Texto  | -> | String de mensagens a decodificar utilizando `options.encodingEncrypted` e descifrar. |
| options   | Objeto | -> | Opções de decodificação                                                               |
| Result    | Objeto | <- | Estado                                                                                |
<!-- END REF -->



A função `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->descifra o parâmetro *message* utilizando a chave **private**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

A chave deveser do estilo RSA, o algoritmo é RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Property          | Type | Description                                                                                                                                      |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                           |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64". |
| encodingDecrypted | text | Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".      |


#### *Result*

A função devolve um objeto "status" com a propriedade `success` definida como `true` se *message* puder ser descifrada com êxito.

| Property | Type       | Description                                                         |
| -------- | ---------- | ------------------------------------------------------------------- |
| success  | booleano   | True if the message has been successfully decrypted                 |
| result   | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors   | collection | If `success` is `false`, may contain a collection of errors         |


Caso *message* não possa ser decifrado por não ter sido criptografado com a mesma chave ou algoritmo, o objeto `status` que se devolve conter uma coleção de erros em `status.errors`.


<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->
| Parameter | Type   |    | Description                                                                        |
| --------- | ------ | -- | ---------------------------------------------------------------------------------- |
| message   | Texto  | -> | String de mensagens a codificar utilizando `options.encodingDecrypted` e encriptar |
| options   | Objeto | -> | Opções de codificação                                                              |
| Result    | Texto  | <- | Mensagem criptografada e codificada utilizando `options.encodingEncrypted`         |
<!-- END REF -->

A função `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->encrypts the *message* parâmetro usando a chave **public**<!-- END REF -->. O algoritmo utilizado depende do tipo da chave.

A chave deveser do estilo RSA, o algoritmo é RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Property          | Type | Description                                                                                                                                               |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512".                                                                                    |
| encodingEncrypted | text | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                       |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8". |


#### *Result*

O valor devolvido é uma mensagem criptografada.
<!-- END REF -->




<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #CryptoKey.getPrivateKey().Params -->
| Parameter | Type  |    | Description                  |
| --------- | ----- | -- | ---------------------------- |
| Result    | Texto | <- | Chave privada em formato PEM |
<!-- END REF -->

A função `.getPrivateKey()`  <!-- REF #CryptoKey.getPrivateKey().Summary -->devolve a chave privada do objeto `CryptoKey`<!-- END REF --> em formato PEM, ou uma string vazia se não houver nenhuma disponível.

#### *Result*

O valor devolvido é a chave privada.
<!-- END REF -->



<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->
| Parameter | Type  |    | Description                  |
| --------- | ----- | -- | ---------------------------- |
| Result    | Texto | <- | Chave pública em formato PEM |
<!-- END REF -->


A função `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary -->devolve a chave pública do objeto `CryptoKey`<!-- END REF --> em formato PEM, ou uma string vazia se não houver nenhuma disponível.

#### *Result*

O valor devolvido é a chave pública.
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #CryptoKey.pem.Summary -->Definição PEM de uma chave de criptografia a carregar<!-- END REF -->. Se a chave for uma chave privada, será deduzido dela a chave pública RSA ou ECDSA.
<!-- END REF -->



<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->
| Parameter | Type   |    | Description                                                                     |
| --------- | ------ | -- | ------------------------------------------------------------------------------- |
| message   | Texto  | -> | String mensagem a assinar                                                       |
| options   | Objeto | -> | Opções de assinatura                                                            |
| Result    | Texto  | <- | Assinatura em representação Base64 ou Base64URL, dependendo da opção "encoding" |
<!-- END REF -->

A função `.sign()` <!-- REF #CryptoKey.sign().Summary -->assina a representação utf8 de uma string *message*<!-- END REF --> utilizando as chaves de objeto `CryptoKey` e as *options* fornecidas. Devolve sua assinatura em formato base64 ou base64URL, dependendo do valor do atributo `options.encoding` que tiver passado.

`CryptoKey` deve conter uma chave válida **privada**.

#### *options*

| Property          | Type     | Description                                                                                                                                                          |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text     | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
| encodingEncrypted | text     | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".                                  |
| pss               | booleano | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passa `true` ao produzir um JWT para o algoritmo PS@                        |
| encoding          | text     | Representação que se utilizará para a assinatura de resultados. Valores possíveis: "Base64" ou "Base64URL". Default is "Base64".                                     |


#### *Result*

Representação utf8 da string *message*.
<!-- END REF -->


<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->


Definido só para chaves RSA: <!-- REF #CryptoKey.size.Summary -->o tamanho da chave em bits<!-- END REF -->. Normalmente 2048 padrão).


<!-- REF CryptoKey.type -->
## .type
<!-- END REF -->

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>


<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->


<!-- REF #CryptoKey.type.Summary -->Nome do tipo da chave - "RSA", "ECDSA", "PEM"<!-- END REF --><li>"RSA": um par de chaves RSA, utilizando `settings.size` como [.size](#size).</li><li>"ECDSA": um par de chaves de Algoritmo de Firma Digital de Curva Elíptica, utilizando `settings.curve` como [.curve](#curve). Lembre que chaves ECDSA não podem ser usadas para a criptografia mas só pela assinatura.</li><li>"PEM": uma definição de par de chaves em formato PEM usando`settings.pem` como [.pem](#pem).


<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v18 R4 | Adicionado |
</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->
| Parameter | Type   |    | Description                                                                                                        |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------ |
| message   | Texto  | -> | String de mensagem utilizada para gerar a assinatura                                                               |
| signature | Texto  | -> | Assinatura que vai ser verificada, em representação Base64 ou Base64URL, dependendo do valor de `options.encoding` |
| options   | Objeto | -> | Opções de assinatura                                                                                               |
| Result    | Objeto | <- | Estado da verificação                                                                                              |
<!-- END REF -->

A função `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica a assinatura base64 contra a representação utf8 de *message*<!-- END REF --> utilizando as chaves do objeto `CryptoKey` e as *options* proporcionadas.

`CryptoKey` deve conter uma chave válida **publica**.


#### *options*

| Property | Type     | Description                                                                                                                                                          |
| -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash     | text     | Digest algorithm to use. For example: "SHA256", "SHA384", or "SHA512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size |
| pss      | booleano | Utiliza Probabilistic Signature Scheme (PSS). Ignorado se a chave não for uma chave RSA. Passa `true` ao verficar um JWT para o algoritmo PS@                        |
| encoding | text     | Representação de uma assinatura fornecida. Valores possíveis: "Base64" ou "Base64URL". Default is "Base64".                                                          |


#### *Result*

A função devolve um objeto "status" com a propriedade `success`estabelecida para `true` se `message` puder ser verificada com êxito (ou seja, se a assinatura coincidir).

Caso a assinatura não possa ser confirmada porque *message* não foi assinada com a mesma chave ou algoritmo, o objeto `status` retornado terá um erro de coleção em `status.errors`.

| Property | Type       | Description                                                 |
| -------- | ---------- | ----------------------------------------------------------- |
| success  | booleano   | True se a assinatura corresponder com a mensagem            |
| errors   | collection | If `success` is `false`, may contain a collection of errors |
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
