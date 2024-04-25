---
id: CryptoKeyClass
title: CryptoKey
---

The `CryptoKey` class in the 4D language encapsulates an asymmetric encryption key pair.

This class is available from the `4D` class store.

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

## 4D.CryptoKey.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #4D.CryptoKey.new().Syntax -->

**4D.CryptoKey.new**( _settings_ : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->

| Parámetros | Tipo                         |    | Descripción                                       |
| ---------- | ---------------------------- | -- | ------------------------------------------------- |
| settings   | Object                       | -> | Parámetros para generar o cargar un par de llaves |
| result     | 4D.CryptoKey | <- | Objeto que encapsula un par de llaves de cifrado  |

<!-- END REF -->

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the _settings_ object parameter. Permite generar una nueva llave RSA o ECDSA, o cargar un par de llaves existente desde una definición PEM.

#### _settings_

| Propiedad       | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | Defines the type of the key to create: <li>"RSA": generates a RSA key pair, using [.size](#size) as size.</li><li>"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using [.curve](#curve) as curve. Note that ECDSA keys cannot be used for encryption but only for signature.</li><li>"PEM": loads a key pair definition in PEM format, using [.pem](#pem).</li> |
| [curve](#curve) | text    | Nombre de la curva ECDSA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [pem](#pem)     | text    | Definición PEM de una llave de cifrado a cargar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [size](#size)   | integer | Tamaño de la llave RSA en bits                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

#### _CryptoKey_

The returned `CryptoKey` object encapsulates an encryption key pair. Es un objeto compartido y, por tanto, puede ser utilizado por varios procesos 4D simultáneamente.

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

<!-- REF #CryptoKey.decrypt().Syntax -->

**.decrypt**( _message_ : Text ; _options_ : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                   |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options    | Object | -> | Opciones de decodificación                                                                    |
| Result     | Object | <- | Estado                                                                                        |

<!-- END REF -->

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the _message_ parameter using the **private** key<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

#### _opciones_

| Propiedad         | Tipo | Descripción                                                                                                                                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                            |
| encodingEncrypted | text | Encoding used to convert the `message` parameter into the binary representation to decrypt. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".             |
| encodingDecrypted | text | Codificación utilizada para convertir el mensaje binario descifrado en la cadena de resultados. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8". |

#### _Resultado_

The function returns a status object with `success` property set to `true` if the _message_ could be successfully decrypted.

| Propiedad | Tipo       | Descripción                                                         |
| --------- | ---------- | ------------------------------------------------------------------- |
| success   | boolean    | True si el mensaje ha sido descifrado con éxito                     |
| result    | text       | Message decrypted and decoded using the `options.encodingDecrypted` |
| errors    | collection | If `success` is `false`, may contain a collection of errors         |

In case the _message_ couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->

## .encrypt()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.encrypt().Syntax -->

**.encrypt**( _message_ : Text ; _options_ : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                   |
| ---------- | ------ | -- | --------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options    | Object | -> | Opciones de codificación                                                                      |
| Result     | Text   | <- | Message encrypted and encoded using the `options.encodingEncrypted`                           |

<!-- END REF -->

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the _message_ parameter using the **public** key<!-- END REF -->. El algoritmo utilizado depende del tipo de la llave.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

##### _opciones_

| Propiedad         | Tipo | Descripción                                                                                                                                                                                                     |
| ----------------- | ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| hash              | text | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512".                                                                                        |
| encodingEncrypted | text | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".     |
| encodingDecrypted | text | Encoding used to convert the `message` parameter into the binary representation to encrypt. Puede ser "UTF-8", "Base64", o "Base64URL". Por defecto es "UTF-8". |

#### _Resultado_

El valor devuelto es un mensaje encriptado.

<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->

## .getPrivateKey()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->

**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| Result     | Text | <- | Llave privada en formato PEM |

<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Resultado_

El valor devuelto es la llave privada.

<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->

## .getPublicKey()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->

**.getPublicKey**() : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->

| Parámetros | Tipo |    | Descripción                  |
| ---------- | ---- | -- | ---------------------------- |
| Result     | Text | <- | Llave pública en formato PEM |

<!-- END REF -->

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### _Resultado_

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

<!-- REF #CryptoKey.pem.Syntax -->

**.pem** : Text<!-- END REF -->

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

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a _message_ string<!-- END REF --> using the `CryptoKey` object keys and provided _options_. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `CryptoKey` must contain a valid **private** key.

#### _opciones_

| Propiedad         | Tipo    | Descripción                                                                                                                                                                                                                                                                                            |
| ----------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash              | text    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| encodingEncrypted | text    | Codificación utilizada para convertir el mensaje binario encriptado en la cadena de resultados. Puede ser "Base64", o "Base64URL". Por defecto es "Base64".                                                                                            |
| pss               | boolean | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pass `true` when producing a JWT for PS@ algorithm                                                                                         |
| encoding          | text    | Representation of provided signature. Possible values are "Base64" or "Base64URL". Por defecto es "Base64".                                                                                                                                            |

#### _Resultado_

The utf8 representation of the _message_ string.

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

Contains the <!-- REF #CryptoKey.type.Summary -->name of the key type - "RSA", "ECDSA", "PEM" <!-- END REF -->.

- "RSA": un par de llaves RSA, utilizando `settings.size` como [.size](#size).
- "ECDSA": un par de llaves del Algoritmo de Firma Digital de Curva Elíptica, utilizando `settings.curve` como [.curve](#curve). Tenga en cuenta que las llaves ECDSA no pueden utilizarse para el cifrado, sino sólo para la firma.
- "PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).

<!-- REF CryptoKey.verify().Desc -->

## .verify()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R4       | Añadidos       |

</details>

<!-- REF #CryptoKey.verify().Syntax -->

**.verify**( _message_ : Text ; _signature_ : Text ; _options_ : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->

| Parámetros | Tipo   |    | Descripción                                                                                       |
| ---------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message    | Text   | -> | Cadena mensaje utilizada para generar la firma                                                    |
| signature  | Text   | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options    | Object | -> | Opciones de firma                                                                                 |
| Result     | Object | <- | Estado de la verificación                                                                         |

<!-- END REF -->

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of _message_<!-- END REF --> using the `CryptoKey` object keys and provided _options_.

The `CryptoKey` must contain a valid **public** key.

#### _opciones_

| Propiedad | Tipo    | Descripción                                                                                                                                                                                                                                                                                            |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| hash      | text    | Algoritmo Digest a utilizar. Por ejemplo: "SHA256", "SHA384" o "SHA512". Cuando se utiliza para producir un JWT, el tamaño del hash debe coincidir con el tamaño del algoritmo PS@, ES@, RS@ o PS@ |
| pss       | boolean | Utilice el Probabilistic Signature Scheme (PSS). Se ignora si la llave no es una llave RSA. Pass `true` when verifying a JWT for PS@ algorithm                                                                                         |
| encoding  | text    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Por defecto es "Base64".                                                                                                                |

#### _Resultado_

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same _message_, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| Propiedad | Tipo       | Descripción                                                 |
| --------- | ---------- | ----------------------------------------------------------- |
| success   | boolean    | True si la firma coincide con el mensaje                    |
| errors    | collection | If `success` is `false`, may contain a collection of errors |

<!-- END REF -->
