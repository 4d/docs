---
id: trim
title: Trim
slug: /commands/trim
displayed_sidebar: docs
---

<!--REF #_command_.Trim.Syntax-->**Trim** ( *aString* : Text ) : Text<!-- END REF-->

<!--REF #_command_.Trim.Params-->

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

El comando **Trim** <!--REF #_command_.Trim.Summary--> elimina los **whitespace** de ambos extremos del parámetro *aString* y devuelve una nueva cadena, sin modificar la original.<!-- END REF--> **Whitespace** incluyen espacios, tabulaciones, LF, CR, etc.

Para devolver una nueva cadena con los espacios en blanco recortados de un solo extremo, utilice [`Trim start`](./trim-start.md) o [`Trim end`](./trim-end.md).

En el parámetro *aString*, puede pasar cualquier expresión de tipo texto. Será dejado sin tocar por el comando.

El comando devuelve la versión recortada de la cadena *aString*. Si no hay espacios en blanco en ningún extremo de *aString*, la cadena devuelta es idéntica a la pasada como parámetro.

:::note

Este comando se basa en la especificación [Ecmascript `TrimString`](https://tc39.es/ecma262/multipage/text-processing.html#sec-trimstring).

:::

## Ejemplo

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim($input) //"Hello World!"
```

## Ver también

[Trim start](./trim-start.md)  
[Trim end](./trim-end.md)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1853 |
| Hilo seguro       | sí   |


