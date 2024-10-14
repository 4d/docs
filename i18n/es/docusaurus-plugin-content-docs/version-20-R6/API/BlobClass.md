---
id: BlobClass
title: Blob
---

La clase Blob permite crear y manipular [objetos blob](../Concepts/dt_blob.md#blob-types) (`4D.Blob`).

### Resumen

|                                                                                                  |
| ------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #4D.Blob.new().Syntax -->](#4dblobnew)<br/><!-- INCLUDE #4D.Blob.new().Summary --> |
| [<!-- INCLUDE #Blob.size.Syntax -->](#size)<br/><!-- INCLUDE #Blob.size.Summary -->              |
| [<!-- INCLUDE #Blob.slice().Syntax -->](#slice)<br/><!-- INCLUDE #Blob.slice().Summary -->       |

## 4D.Blob.new()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R2       | Añadidos       |

</details>

<!-- REF #4D.Blob.new().Syntax -->**4D.Blob.new()** : 4D.Blob<br/>**4D.Blob.new**( *blobScal* : Blob ) : 4D.Blob<br/>**4D.Blob.new**( *blobObj* : 4D.Blob ) : 4D.Blob<!-- END REF -->

<!-- REF #4D.Blob.new().Params -->

| Parámetros | Tipo                           |                             | Descripción                   |
| ---------- | ------------------------------ | :-------------------------: | ----------------------------- |
| blob       | Blob o 4D.Blob |              ->             | Blob a copiar                 |
| Result     | 4D.Blob        | <- | Nuevo 4D.Blob |

<!-- END REF -->

#### Descripción

`4D.Blob.new` <!-- REF #4D.Blob.new().Summary -->crea un nuevo objeto `4D.Blob` opcionalmente encapsulando una copia de los datos de otro blob (blob escalar o `4D.Blob`)<!-- END REF -->.

Si el parámetro `blob` se omite, el método devuelve un 4D.Blob vacío.

## .size

<!-- REF #Blob.size.Syntax -->**.size** : Real<!-- END REF -->

#### Descripción

La propiedad `.size` <!-- REF #Blob.size.Summary -->devuelve el tamaño de un `4D.Blob`, expresado en bytes.<!-- END REF -->

## .slice()

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R2       | Añadidos       |

</details>

<!-- REF #Blob.slice().Syntax -->**.slice()** : 4D.Blob<br/>**.slice**( *start* : Real ) : 4D.Blob<br/>**.slice**( *start* : Real; *end* : Real ) : 4D.Blob<!-- END REF -->

<!-- REF #Blob.slice().Params -->

| Parámetros | Tipo                    |                             | Descripción                                                             |
| ---------- | ----------------------- | :-------------------------: | ----------------------------------------------------------------------- |
| start      | Real                    |              ->             | índice del primer byte a incluir en el nuevo `4D.Blob`. |
| end        | Real                    |              ->             | índice del primer byte que no se incluirá en el nuevo `4D.Blob`         |
| Result     | 4D.Blob | <- | Nuevo `4D.Blob`                                                         |

<!-- END REF -->

#### Descripción

`.slice()` <!-- REF #Blob.slice().Summary --> crea y devuelve un `4D.Blob` que hace referencia a los datos de un subconjunto del blob en el que se llama. El blob original no se altera.<!-- END REF -->

El parámetro `start` es un índice en el blob que indica el primer byte a incluir en el nuevo `4D.Blob`. Si indica un valor negativo, 4D lo trata como un desplazamiento desde el final del blob hacia el inicio. Por ejemplo, -10 sería el décimo desde el último byte del blob. El valor por defecto es 0. Si indica un valor de inicio mayor al tamaño del blob fuente, el tamaño del `4D.Blob` devuelto es 0, y no contiene datos.

El parámetro `end` es un índice en el blob que indica el primer byte que no se incluirá en el nuevo `4D.Blob` (es decir, el byte situado exactamente en este índice no se incluye). Si indica un valor negativo, 4D lo trata como un desplazamiento desde el final del blob hacia el inicio. Por ejemplo, -10 sería el décimo desde el último byte del blob. El valor por defecto es el tamaño del blob.

#### Ejemplo

```4d
var $myBlob : 4D.Blob

// Almacenar texto en un 4D.Blob
CONVERT FROM TEXT("Hello, World!"; "UTF-8"; $myBlob)
$is4DBlob:=OB Instance of($myBlob; 4D.Blob);   //True

$myString:=Convert to text($myBlob; "UTF-8")
// $myString contiene "Hello, World!"

// Crear un nuevo 4D.Blob a partir de $myBlob
$myNewBlob:=$myBlob.slice(0; 5)

$myString:=Convert to text($myNewBlob; "UTF-8")
// $myString contiene "Hello"
```
