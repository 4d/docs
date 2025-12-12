---
id: trim
title: Trim
displayed_sidebar: docs
---

<!--REF #_command_.Trim.Syntax-->**Trim** ( *aString* ) : Text<!-- END REF-->

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

The **Trim** command <!--REF #_command_.Trim.Summary--> removes **whitespace** from both ends of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> **Whitespace** incluyen espacios, tabulaciones, LF, CR, etc.

To return a new string with whitespace trimmed from just one end, use [`Trim start`](./trim-start.md) or [`Trim end`](./trim-end.md).

En el parámetro *aString*, puede pasar cualquier expresión de tipo texto. Será dejado sin tocar por el comando.

El comando devuelve la versión recortada de la cadena *aString*. Si no hay espacios en blanco en ningún extremo de *aString*, la cadena devuelta es idéntica a la pasada como parámetro.

:::note

This command is based upon the [`TrimString` Ecmascript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-trimstring).

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

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1853                        |
| Hilo seguro       | &check; |


