---
id: CryptoKeyClass
title: CryptoKey
---


La clase `CryptoKey` del lenguaje 4D contiene un par de llaves de cifrado asimétrico.

Esta clase está disponible en el almacén de clases de `4D`.

### Ejemplo

El siguiente código de ejemplo firma y verifica un mensaje utilizando un nuevo par de llaves ECDSA, por ejemplo para hacer un token web JSON ES256.

```4d
 // Generar un nuevo par de llaves ECDSA
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Obtener la firma como base64
$message:="hello world"
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Verificar firma
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```


### Resumen
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
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->


<!-- REF #4D.CryptoKey.new().Params -->
| Parámetros | Tipo         |    | Descripción                                                                    |
| ---------- | ------------ | -- | ------------------------------------------------------------------------------ |
| parámetros | Objeto       | -> | Parámetros para generar o cargar un par de llaves                              |
| result     | 4D.CryptoKey | <- | Objeto que contiene un par de llaves de encriptación<!-- END REF --> |


La función `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary --> crea un nuevo objeto `4D.CryptoKey` que encapsula un par de llaves de cifrado<!-- END REF -->, basado en el parámetro del objeto *settings*. Permite generar una nueva llave RSA o ECDSA, o cargar un par de llaves existente desde una definición PEM.

#### *parámetros*

| Propiedad       | Tipo    | Descripción                                           |
| --------------- | ------- | ----------------------------------------------------- |
| [curve](#curve) | texto   | Nombre de la curva ECDSA                              |
| [pem](#pem)     | texto   | Definición PEM de una llave de cifrado a cargar       |
| [size](#size)   | integer | Tamaño de la llave RSA en bits                        |
| [type](#type)   | texto   | Nombre del tipo de llave - "RSA", "ECDSA", "PEM"</li> |


#### *CryptoKey*

El objeto `CryptoKey` devuelto encapsula un par de llaves de cifrado. Es un objeto compartido y, por tanto, puede ser utilizado por varios procesos 4D simultáneamente.

<!-- REF CryptoKey.curve -->
## .curve

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->




Definido sólo para las llaves ECDSA: el <!-- REF #CryptoKey.curve.Summary -->nombre de la curva normalizada de la llave<!-- END REF -->. Generalmente "prime256v1" para ES256 (por defecto), "secp384r1" para ES384, "secp521r1" para ES512.
<!-- END REF -->


## .decrypt()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->


<!-- REF #CryptoKey.decrypt().Params -->
| Parámetros | Tipo   |    | Descripción                                                                          |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------ |
| message    | Texto  | -> | Cadena de mensajes a decodificar utilizando `options.encodingEncrypted` y descifrar. |
| options    | Objeto | -> | Opciones de decodificación                                                           |
| Resultado  | Objeto | <- | Estado                                                                               |

<!-- END REF -->



La función `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->descifra el parámetro *message* utilizando la llave **private**<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propiedad         | Tipo  | Descripción                                                                                                                                                        |
| ----------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | texto | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                           |
| encodingEncrypted | texto | Codificación utilizada para convertir el parámetro `mensaje` en la representación binaria a descifrar. Puede ser "Base64", o "Base64URL". Por defecto es "Base64". |
| encodingDecrypted | texto | Codificación utilizada para convertir el mensaje binario descifrado en la cadena de resultados. Puede ser "UTF-8", "Base64" o "Base64URL". Por defecto es "UTF-8". |


#### *Resultado*

La función devuelve un objeto "status" con la propiedad `success` definida como `true` si el *message* pudo ser descifrado con éxito.

| Propiedad | Tipo      | Descripción                                                              |
| --------- | --------- | ------------------------------------------------------------------------ |
| success   | booleano  | True si el mensaje ha sido descifrado con éxito                          |
| result    | texto     | Mensaje descifrado y decodificado utilizando `options.encodingDecrypted` |
| errors    | colección | Si `success` es `false`, puede contener una colección de errores         |


En caso de que el *message* no haya podido ser descifrado por no haber sido encriptado con la misma llave o algoritmo, el objeto `status` que se devuelve contiene una colección de errores en `status.errors`.

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->


<!-- REF #CryptoKey.encrypt().Params -->
| Parámetros | Tipo   |    | Descripción                                                                         |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------- |
| message    | Texto  | -> | Cadena de mensajes a codificar utilizando `options.encodingDecrypted` y encriptado. |
| options    | Objeto | -> | Opciones de codificación                                                            |
| Resultado  | Texto  | <- | Mensaje encriptado y codificado utilizando la opción `options.encodingEncrypted`    |

<!-- END REF -->

La función `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->encripta el parámetro *message* utilizando la llave **pública**<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propiedad         | Tipo  | Descripción                                                                                                                                                            |
| ----------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | texto | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                               |
| encodingEncrypted | texto | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".            |
| encodingDecrypted | texto | Codificación utilizada para convertir el parámetro `mensaje` en la representación binaria a cifrar. Puede ser "UTF-8", "Base64" o "Base64URL". Por defecto es "UTF-8". |


#### *Resultado*

El valor devuelto es un mensaje encriptado.
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->



<!-- REF #CryptoKey.getPrivateKey().Params -->
| Parámetros | Tipo  |    | Descripción                  |
| ---------- | ----- | -- | ---------------------------- |
| Resultado  | Texto | <- | Llave privada en formato PEM |

<!-- END REF -->

La función `.getPrivateKey()` <!-- REF #CryptoKey.getPrivateKey().Summary --> devuelve la llave privada del objeto `CryptoKey`<!-- END REF --> en formato PEM, o una cadena vacía si no hay ninguna disponible.

#### *Resultado*

El valor devuelto es la llave privada.
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey( )** : Text<!-- END REF -->


<!-- REF #CryptoKey.getPublicKey().Params -->
| Parámetros | Tipo  |    | Descripción                  |
| ---------- | ----- | -- | ---------------------------- |
| Resultado  | Texto | <- | Llave pública en formato PEM |

<!-- END REF -->


La función `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary --> devuelve la llave pública del objeto `CryptoKey`<!-- END REF --> en formato PEM, o una cadena vacía si no hay ninguna disponible.

#### *Resultado*

El valor devuelto es la llave pública.
<!-- END REF -->

---<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->



<!-- REF #CryptoKey.pem.Summary -->Definición PEM de una llave de encriptación a cargar<! -- END REF -->. Si la llave es una llave privada, se deducirá de ella la llave pública RSA o ECDSA.
<!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->


<!-- REF #CryptoKey.sign().Params -->
| Parámetros | Tipo   |    | Descripción                                                           |
| ---------- | ------ | -- | --------------------------------------------------------------------- |
| message    | Texto  | -> | Cadena mensaje a firmar                                               |
| options    | Objeto | -> | Opciones de firma                                                     |
| Resultado  | Texto  | <- | Firma en representación Base64 o Base64URL, según la opción "encoding |

<!-- END REF -->

La función `.sign()` <!-- REF #CryptoKey.sign().Summary -->firma la representación utf8 de un *message* string<!-- END REF --> utilizando las llaves del objeto `CryptoKey` y las *options* suministradas. Devuelve su firma en formato base64 o base64URL, dependiendo del valor del atributo `options.encoding` que haya pasado.

`CryptoKey` debe contener una llave válida **privada**.

#### *options*

| Propiedad         | Tipo     | Descripción                                                                                                                                                                                        |
| ----------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | texto    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| encodingEncrypted | texto    | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".                                        |
| pss               | booleano | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase `true` al producir un JWT para el algoritmo PS@                                                   |
| encoding          | texto    | Representación que se utilizará para la firma de resultados. Los valores posibles son "Base64" o "Base64URL". Por defecto es "Base64".                                                             |


#### *Resultado*

`CryptoKey` debe contener una llave válida **privada**.
<!-- END REF -->

<!-- REF CryptoKey.size -->
## .size

<!-- END REF -->

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->


Definido sólo para llaves RSA: <!-- REF #CryptoKey.size.Summary -->el tamaño de la llave en bits<!-- END REF -->. Normalmente 2048 (por defecto).

<!-- REF CryptoKey.type -->
## .type

<!-- END REF -->

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>



<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->



<!-- REF #CryptoKey.type.Summary -->Nombre del tipo de llave - "RSA", "ECDSA", "PEM"<!-- END REF --><li>"RSA": un par de llaves RSA, utilizando `settings.size` como [.size](#size).</li><li>"ECDSA": un par de llaves del Algoritmo de Firma Digital de Curva Elíptica, utilizando `settings.curve` como [.curve](#curve). Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino sólo para la firma.</li><li>"PEM": una definición de par de llaves en formato PEM, utilizando `settings.pem` como [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->


<!-- REF #CryptoKey.verify().Params -->
| Parámetros | Tipo   |    | Descripción                                                                                          |
| ---------- | ------ | -- | ---------------------------------------------------------------------------------------------------- |
| message    | Texto  | -> | Cadena mensaje utilizada para generar la firma                                                       |
| signature  | Texto  | -> | Firma a verificar, en representación Base64 o Base64URL, dependiendo del valor de `options.encoding` |
| options    | Objeto | -> | Opciones de firma                                                                                    |
| Resultado  | Objeto | <- | Estado de la verificación                                                                            |

<!-- END REF -->

Representación utf8 de la cadena *message*.

La función `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica la firma base64 contra la representación utf8 del *message*<!-- END REF --> utilizando las llaves del objeto `CryptoKey` y las *options* proporcionadas.


#### *options*

| Propiedad | Tipo     | Descripción                                                                                                                                                                                        |
| --------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | texto    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| pss       | booleano | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase `true` al verificar un JWT para el algoritmo PS@                                                  |
| encoding  | texto    | Representación de la firma facilitada. Puede ser "Base64" o "Base64URL". Por defecto es "Base64".                                                                                                  |


#### *Resultado*

La `CryptoKey` debe contener una llave **pública** válida.

La función devuelve un objeto de estado con la propiedad `success` definida como `true` si el `message` pudo ser verificado con éxito (es decir, la firma coincide).

| Propiedad | Tipo      | Descripción                                                      |
| --------- | --------- | ---------------------------------------------------------------- |
| success   | booleano  | True si la firma coincide con el mensaje                         |
| errors    | colección | Si `success` es `false`, puede contener una colección de errores |

<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
