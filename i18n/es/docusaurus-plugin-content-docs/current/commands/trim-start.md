---
id: trim-start
title: Trim start
displayed_sidebar: docs
---

<!--REF #_command_.Trim start.Syntax-->**Trim start** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim start.Params-->

| Parámetros | Tipo |                             | Descripción      |
| ---------- | ---- | --------------------------- | ---------------- |
| aString    | Text | &#8594; | Texto a recortar |
| Resultado  | Text | &#8592; | Texto recortado  |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21          | Añadidos       |

</details>

## Descripción

El comando **Trim start** <!--REF #_command_.Trim start.Summary--> elimina los **whitespace** del principio del parámetro *aString* y devuelve una nueva cadena, sin modificar la original.<!-- END REF--> **Whitespace** incluyen espacios, tabulaciones, LF, CR, etc.

Para devolver una nueva cadena con los whitespace recortados de ambos extremos, utilice [`Trim`](./trim.md). Para devolver una nueva cadena con los espacios en blanco recortados del final de *aString*, utilice [`Trim end`](./trim-end.md).

En el parámetro *aString*, puede pasar cualquier expresión de tipo texto. Será dejado sin tocar por el comando.

El comando devuelve la versión recortada de la cadena *aString*. Si no hay whitespace al principio de *aString*, la cadena devuelta es idéntica a la pasada como parámetro.

:::note

Este comando se basa en la especificación [Ecmascript `trimStart`](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimstart).

:::

## Ejemplo

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim start($input) //"Hello World!    "
```

## Ver también

[Trim](./trim.md)  
[Trim end](./trim-end.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1854                        |
| Hilo seguro       | &check; |


