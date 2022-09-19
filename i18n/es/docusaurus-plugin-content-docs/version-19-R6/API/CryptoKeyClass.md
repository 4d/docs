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

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->              |
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary -->                             |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->                   |
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary --> |
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->    |
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary -->                            |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary -->                                |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->                      |

## 4D.CryptoKey.new()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #4D.CryptoKey.new().Syntax --> **4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->



<!-- REF #4D.CryptoKey.new().Params -->
| Parámetros | Tipo         |    | Descripción                                                                    |
| ---------- | ------------ | -- | ------------------------------------------------------------------------------ |
| settings   | Object       | -> | Parámetros para generar o cargar un par de llaves                              |
| result     | 4D.CryptoKey | <- | Objeto que contiene un par de llaves de encriptación<!-- END REF --> |

La función `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary -->crea un nuevo objeto `4D.CryptoKey` que encapsula un par de llaves de cifrado<!-- END REF -->, basado en el parámetro objeto *settings*. Permite generar una nueva llave RSA o ECDSA, o cargar un par de llaves existente desde una definición PEM.

#### *settings*

| Propiedad       | Tipo    | Descripción                                      |
| --------------- | ------- | ------------------------------------------------ |
| [curve](#curve) | text    | Nombre de la curva ECDSA                         |
| [pem](#pem)     | text    | Definición PEM de una llave de cifrado a cargar  |
| [size](#size)   | integer | Tamaño de la llave RSA en bits                   |
| [type](#type)   | text    | Nombre del tipo de llave - "RSA", "ECDSA", "PEM" |

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


Definido sólo para llaves ECDSA: el <!-- REF #CryptoKey.curve.Summary -->nombre de la curva normalizada de la llave<!-- END REF -->. Generalmente "prime256v1" para ES256 (por defecto), "secp384r1" para ES384, "secp521r1" para ES512.
<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.decrypt().Syntax --> **.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->



<!-- REF #CryptoKey.decrypt().Params -->
| Parámetros | Tipo   |    | Descripción                                                                          |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------ |
| message    | Text   | -> | Cadena de mensajes a decodificar utilizando `options.encodingEncrypted` y descifrar. |
| options    | Object | -> | Opciones de decodificación                                                           |
| Result     | Object | <- | Status|<!-- END REF -->                                                    |

La función `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->descifra el parámetro *mensaje* utilizando la llave **privada**<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *options*

| Propiedad         | Tipo | Descripción                                                                                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                            |
| encodingEncrypted | text | Codificación utilizada para convertir el parámetro `mensaje` en la representación binaria a descifrar. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".  |
| encodingDecrypted | text | Codificación utilizada para convertir el mensaje binario descifrado en la cadena de resultados. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8". |

#### *Result*

La función devuelve un objeto "status" con la propiedad `success` definida como `true` si el *message* pudo ser descifrado con éxito.

| Propiedad | Tipo       | Descripción                                                              |
| --------- | ---------- | ------------------------------------------------------------------------ |
| success   | boolean    | True si el mensaje ha sido descifrado con éxito                          |
| result    | text       | Mensaje descifrado y decodificado utilizando `options.encodingDecrypted` |
| errors    | collection | Si `success` es `false`, puede contener una colección de errores         |

En caso de que el *message* no haya podido ser descifrado por no haber sido encriptado con la misma llave o algoritmo, el objeto `status` que se devuelve contiene una colección de errores en `status.errors`.
<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.encrypt().Syntax --> **.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->



<!-- REF #CryptoKey.encrypt().Params -->
| Parámetros | Tipo   |    | Descripción                                                                                                 |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Cadena de mensajes a codificar utilizando `options.encodingDecrypted` y encriptado.                         |
| options    | Object | -> | Opciones de codificación                                                                                    |
| Result     | Text   | <- | Mensaje encriptado y codificado utilizando la opción `options.encodingEncrypted`|<!-- END REF --> |

La función `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->encripta el parámetro *mensaje* utilizando la llave **pública**<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *options*

| Propiedad         | Tipo | Descripción                                                                                                                                                             |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                                |
| encodingEncrypted | text | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".             |
| encodingDecrypted | text | Codificación utilizada para convertir el parámetro `mensaje` en la representación binaria a cifrar. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8". |

#### *Result*

El valor devuelto es un mensaje encriptado.
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.getPrivateKey().Syntax --> **.getPrivateKey()** : Text<!-- END REF -->



<!-- REF #CryptoKey.getPrivateKey().Params -->
| Parámetros | Tipo |    | Descripción                                             |
| ---------- | ---- | -- | ------------------------------------------------------- |
| Result     | Text | <- | Llave privada en formato PEM|<!-- END REF --> |

La función `.getPrivateKey()`  <!-- REF #CryptoKey.getPrivateKey().Summary -->devuelve la llave privada del objeto `CryptoKey`<!-- END REF --> en formato PEM, o una cadena vacía si no hay ninguna disponible.

#### *Result*

El valor devuelto es la llave privada.
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.getPublicKey().Syntax --> **.getPublicKey( )** : Text<!-- END REF -->



<!-- REF #CryptoKey.getPublicKey().Params -->
| Parámetros | Tipo |    | Descripción                                             |
| ---------- | ---- | -- | ------------------------------------------------------- |
| Result     | Text | <- | Llave pública en formato PEM|<!-- END REF --> |

La función `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary -->devuelve la llave pública del objeto `CryptoKey`<!-- END REF --> en formato PEM, o una cadena vacía si no hay ninguna disponible.

#### *Result*

El valor devuelto es la llave pública.
<!-- END REF -->

---<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.pem.Syntax --> **.pem** : Text<!-- END REF -->



<!-- REF #CryptoKey.pem.Summary --> Definición PEM de una llave de cifrado a cargar. Si la llave es una llave privada, se deducirá de ella la llave pública RSA o ECDSA. <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->



<!-- REF #CryptoKey.sign().Params -->
| Parámetros | Tipo   |    | Descripción                                                                                      |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------ |
| message    | Text   | -> | Cadena mensaje a firmar                                                                          |
| options    | Object | -> | Opciones de firma                                                                                |
| Result     | Text   | <- | Firma en representación Base64 o Base64URL, según la opción "encoding|<!-- END REF --> |

La función `.sign()` <!-- REF #CryptoKey.sign().Summary -->firma la representación utf8 de una cadena *mensaje*<!-- END REF --> utilizando las llaves del objeto `CryptoKey` y las *opciones* suministradas. Devuelve su firma en formato base64 o base64URL, dependiendo del valor del atributo `options.encoding` que haya pasado.

`CryptoKey` debe contener una llave válida **privada**.

#### *options*

| Propiedad         | Tipo    | Descripción                                                                                                                                                                                        |
| ----------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| encodingEncrypted | text    | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".                                        |
| pss               | boolean | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase `true` al producir un JWT para el algoritmo PS@                                                   |
| encoding          | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Por defecto es "Base64".                                                                                        |

#### *Result*

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


Definido sólo para llaves RSA: <!-- REF #CryptoKey.size.Summary -->el tamaño de la llave en bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->
## .type

<!-- END REF -->

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->


El <!-- REF #CryptoKey.type.Summary -->nombre del tipo de llave - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA": un par de llaves RSA, utilizando l`settings.size` como [.size](#size).
- "ECDSA": un par de llaves del Algoritmo Elliptic Curve Digital Signature Algorithm, utilizando `settings.curve` como [.curve](#curve). Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino sólo para la firma.
- "PEM": una definición de par de llaves en formato PEM, utilizando `settings.pem` como [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v18 R4  | Añadidos       |
</details>


<!-- REF #CryptoKey.verify().Syntax --> **.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->



<!-- REF #CryptoKey.verify().Params -->
| Parámetros | Tipo   |    | Descripción                                                                                          |
| ---------- | ------ | -- | ---------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Cadena mensaje utilizada para generar la firma                                                       |
| signature  | Text   | -> | Firma a verificar, en representación Base64 o Base64URL, dependiendo del valor de `options.encoding` |
| options    | Object | -> | Opciones de firma                                                                                    |
| Result     | Object | <- | Estado de la verificación|<!-- END REF -->                                                 |


La función `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica la firma base64 contra la representación utf8 del *mensaje*<!-- END REF --> utilizando las llaves del objeto `CryptoKey` y las *opciones* suministradas.

La función `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica la firma base64 contra la representación utf8 del *message*<!-- END REF --> utilizando las llaves del objeto `CryptoKey` y las *options* proporcionadas.

#### *options*

| Propiedad | Tipo    | Descripción                                                                                                                                                                                        |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash      | text    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| pss       | boolean | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase `true` al verificar un JWT para el algoritmo PS@                                                  |
| encoding  | text    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Por defecto es "Base64".                                                            |

#### *Result*

La `CryptoKey` debe contener una llave **pública** válida.

La función devuelve un objeto de estado con la propiedad `success` definida como `true` si el `message` pudo ser verificado con éxito (es decir, la firma coincide).

| Propiedad | Tipo       | Descripción                                                                                 |
| --------- | ---------- | ------------------------------------------------------------------------------------------- |
| success   | boolean    | True si la firma coincide con el mensaje                                                    |
| errors    | collection | Si `success` es `false`, puede contener una colección de errores|<!-- END REF --> |
