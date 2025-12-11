---
id: trim-end
title: Trim end
displayed_sidebar: docs
---

<!--REF #_command_.Trim end.Syntax-->**Trim end** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim end.Params-->

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

El comando **Trim end** <!--REF #_command_.Trim end.Summary--> elimina el **whitespace** del final del parámetro *aString* y devuelve una nueva cadena, sin modificar la original.<!-- END REF--> **Whitespace** incluyen espacios, tabulaciones, LF, CR, etc.

Para devolver una nueva cadena con los whitespace recortados de ambos extremos, utilice [`Trim`](./trim.md). Para devolver una nueva cadena con los espacios en blanco recortados del principio de *aString*, utilice [`Trim start`](./trim-start.md).

En el parámetro *aString*, puede pasar cualquier expresión de tipo texto. Será dejado sin tocar por el comando.

El comando devuelve la versión recortada de la cadena *aString*. Si no hay espacios en blanco al final de *aString*, la cadena devuelta es idéntica a la pasada como parámetro.

:::note

Este comando se basa en la especificación [`trimEnd` Ecmascript](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimend).

:::

## Ejemplo

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim end($input) //"     Hello World!"
```

## Ver también

[Trim](./trim.md)  
[Trim start](./trim-start.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1855                        |
| Hilo seguro       | yes |


