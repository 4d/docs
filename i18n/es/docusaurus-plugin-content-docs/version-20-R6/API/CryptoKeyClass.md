---
id: CryptoKeyClass
title: CryptoKey
---

La clase `CryptoKey` del lenguaje 4D encapsula un par de llaves de cifrado asimétrico.

Esta clase está disponible en el "class store" de `4D`.

:::info Ver también

Para obtener una visión general de esta clase, consulte la entrada del blog [**CryptoKey: cifrar, descifrar, firmar y verificar**](https://blog.4d.com/cryptokey-encrypt-decrypt-sign-and-verify/).

:::

### Resumen

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

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| Parámetros | Tipo                         |    | Descripción                                       |
| ---------- | ---------------------------- | -- | ------------------------------------------------- |
| settings   | Object                       | -> | Parámetros para generar o cargar un par de llaves |
| resultado  | 4D.CryptoKey | <- | Objeto que encapsula un par de llaves de cifrado  |

<!-- END REF -->

La función `4D.CryptoKey.new()` <!-- REF #4D.CryptoKey.new().Summary -->crea un nuevo objeto `4D.CryptoKey` que encapsula un par de llaves de cifrado<!-- END REF -->, en función del parámetro *settings*. Permite generar una nueva llave RSA o ECDSA, o cargar un par de llaves existente desde una definición PEM.

#### *settings*

| Propiedad       | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Define el tipo de clave a crear: <li>"RSA": genera un par de llaves RSA, utilizando [.size](#size) como tamaño.</li><li>"ECDSA": genera un par de llaves Elliptic Curve Digital Signature Algorithm, utilizando [.curve](#curve) como curva. Tenga en cuenta que las llaves ECDSA no pueden utilizarse para cifrar, sino sólo para firmar.</li><li>"PEM": carga una definición de par de llaves en formato PEM, utilizando [.pem](#pem).</li> |
| [curve](#curve) | text    | Nombre de la curva ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [pem](#pem)     | text    | Definición PEM de una llave de cifrado a cargar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [size](#size)   | integer | Tamaño de la llave RSA en bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

#### *CryptoKey*

El objeto `CryptoKey` devuelto encapsula un par de llaves de cifrado. Es un objeto compartido y, por tanto, puede ser utilizado por varios procesos 4D simultáneamente.

#### Ejemplo 1

Un mensaje está firmado por una llave privada y la firma es verificada por la llave pública correspondiente. El siguiente código firma y verifica una firma de mensaje simple.

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

- Lado Alice:

```4d
// Obtener mensaje, llave pública y firma
$message:=Folder(fk desktop folder).file("message.txt").getText()
$publicKey:=Folder(fk desktop folder).file("public.pem").getText()
$signature:=Folder(fk desktop folder).file("signature"). etText()

// Crear una llave
$type:=New object("type";"PEM";"pem";$publicKey)
$key:=4D.CryptoKey.new($type)

// Verificar la firma
If ($key.verify($message;$signature;$type).success)
// La firma es válida

End if
```

#### Ejemplo 2

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

<!-- REF CryptoKey.curve -->

## .curve

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->

Definido sólo para las llaves ECDSA: el <!-- REF #CryptoKey.curve.Summary -->nombre de la curva normalizada de la llave<!-- END REF -->. Generalmente "prime256v1" para ES256 (por defecto), "secp384r1" para ES384, "secp521r1" para ES512.

<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->

## .decrypt()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                                 |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Cadena mensaje que se descodificará utilizando `options.encodingEncrypted` y se descifrará. |
| options    | Object | -> | Opciones de decodificación                                                                                  |
| Result     | Object | <- | Estado                                                                                                      |

<!-- END REF -->

La función `.decrypt()` <!-- REF #CryptoKey.decrypt().Summary -->descifra el parámetro *message* utilizando la llave **privada**<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### *opciones*

| Propiedad         | Tipo | Descripción                                                                                                                                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                            |
| encodingEncrypted | text | Codificación utilizada para convertir el parámetro `message` en la representación binaria a descifrar. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".  |
| encodingDecrypted | text | Codificación utilizada para convertir el mensaje binario descifrado en la cadena de resultados. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8". |

#### *Resultado*

La función devuelve un objeto status con la propiedad `success` definida en `true` si el *message* pudo ser desencriptado con éxito.

| Propiedad | Tipo       | Descripción                                                              |
| --------- | ---------- | ------------------------------------------------------------------------ |
| success   | boolean    | True si el mensaje ha sido descifrado con éxito                          |
| resultado | text       | Mensaje descifrado y decodificado utilizando `options.encodingDecrypted` |
| errors    | collection | Si `success` es `false`, puede contener una colección de errores         |

En caso de que *message* no haya podido ser descifrado por no haber sido cifrado con la misma clave o algoritmo, el objeto `status` devuelto contiene una colección de errores en `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                     |
| ---------- | ------ | -- | ----------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Cadena mensaje a codificar utilizando `options.encodingDecrypted` y encriptada. |
| options    | Object | -> | Opciones de codificación                                                                        |
| Result     | Text   | <- | Mensaje encriptado y codificado utilizando la opción `options.encodingEncrypted`                |

<!-- END REF -->

La función `.encrypt()` <!-- REF #CryptoKey.encrypt().Summary -->cifra el parámetro *message* utilizando la llave **pública**<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

La llave debe ser una llave RSA, el algoritmo es RSA-OAEP (ver [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### *opciones*

| Propiedad         | Tipo | Descripción                                                                                                                                                                                                             |
| ----------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                                |
| encodingEncrypted | text | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".             |
| encodingDecrypted | text | Codificación utilizada para convertir el parámetro `message` en la representación binaria a cifrar. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8". |

#### *Resultado*

El valor devuelto es un mensaje encriptado.

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| Result     | Text | <- | Llave privada en formato PEM |

<!-- END REF -->

La función `.getPrivateKey()` <!-- REF #CryptoKey.getPrivateKey().Summary -->devuelve la llave privada del objeto `CryptoKey`<!-- END REF --> en formato PEM, o una cadena vacía si no está disponible.

#### *Resultado*

El valor devuelto es la llave privada.

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| Result     | Text | <- | Llave pública en formato PEM |

<!-- END REF -->

La función `.getPublicKey()` <!-- REF #CryptoKey.getPublicKey().Summary -->devuelve la llave pública del objeto `CryptoKey`<!-- END REF --> en formato PEM, o una cadena vacía si no hay ninguna disponible.

#### *Resultado*

El valor devuelto es la llave pública.

<!-- END REF -->

---

<!-- REF CryptoKey.pem.Desc -->

## .pem

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->

<!-- REF #CryptoKey.pem.Summary -->

Definición PEM de una llave de cifrado a cargar. Si la llave es una llave privada, se deducirá de ella la llave pública RSA o ECDSA. <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->

## .sign()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Object) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->

| Parámetros | Tipo   |    | Descripción                                                           |
| ---------- | ------ | -- | --------------------------------------------------------------------- |
| message    | Text   | -> | Cadena mensaje a firmar                                               |
| options    | Object | -> | Opciones de firma                                                     |
| Result     | Text   | <- | Firma en representación Base64 o Base64URL, según la opción "encoding |

<!-- END REF -->

La función `.sign()` <!-- REF #CryptoKey.sign().Summary -->firma la representación utf8 de una cadena de *message*<!-- END REF --> utilizando las llaves del objeto `CryptoKey` y las *options* suministradas. Devuelve su firma en formato base64 o base64URL, dependiendo del valor del atributo `options.encoding` que le haya pasado.

La `CryptoKey` debe contener una llave **privada** válida.

#### *opciones*

| Propiedad         | Tipo    | Descripción                                                                                                                                                                                                                                                                                            |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| encodingEncrypted | text    | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".                                                                                            |
| pss               | boolean | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase `true` al producir un JWT para el algoritmo PS@                                                                                       |
| encoding          | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Por defecto es "Base64".                                                                                                                                            |

#### *Resultado*

La representación utf8 de la cadena *message*.

<!-- END REF -->

<!-- REF CryptoKey.size -->

## .size

<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->

Definido sólo para llaves RSA: <!-- REF #CryptoKey.size.Summary -->el tamaño de la llave en bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->

## .type

<!-- END REF -->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->

Contiene el <!-- REF #CryptoKey.type.Summary -->nombre del tipo de llave - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA": un par de llaves RSA, utilizando `settings.size` como [.size](#size).
- "ECDSA": un par de llaves Elliptic Curve Digital Signature Algorithm, utilizando `settings.curve` como [.curve](#curve). Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino sólo para la firma.
- "PEM": definición de par de llaves en formato PEM, utilizando `settings.pem` como [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                   |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Cadena mensaje utilizada para generar la firma                                                |
| signature  | Text   | -> | Firma a verificar, en representación Base64 o Base64URL, según el valor de `options.encoding` |
| options    | Object | -> | Opciones de firma                                                                             |
| Result     | Object | <- | Estado de la verificación                                                                     |

<!-- END REF -->

La función `.verify()` <!-- REF #CryptoKey.verify().Summary -->verifica la firma base64 contra la representación utf8 del *message*<!-- END REF --> usando las llaves del objeto `CryptoKey` y las *options* suministradas.

La `CryptoKey` debe contener una llave **pública** válida.

#### *opciones*

| Propiedad | Tipo    | Descripción                                                                                                                                                                                                                                                                                            |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash      | text    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| pss       | boolean | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pase `true` al verificar un JWT para el algoritmo PS@                                                                                      |
| encoding  | text    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Por defecto es "Base64".                                                                                                                |

#### *Resultado*

La función devuelve un objeto de estado con la propiedad `success` en `true` si `message` ha podido ser verificado con éxito (es decir, la firma coincide).

En caso de que la firma no se haya podido verificar porque no se ha firmado con el mismo *message*, llave o algoritmo, el objeto `status` que se devuelve contiene una colección de errores en `status.errors`.

| Propiedad | Tipo       | Descripción                                                      |
| --------- | ---------- | ---------------------------------------------------------------- |
| success   | boolean    | True si la firma coincide con el mensaje                         |
| errors    | collection | Si `success` es `false`, puede contener una colección de errores |

<!-- END REF -->
