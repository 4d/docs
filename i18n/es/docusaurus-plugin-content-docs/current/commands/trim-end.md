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

The **Trim end** command <!--REF #_command_.Trim end.Summary--> removes **whitespace** from the end of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> **Whitespace** includes spaces, tabs, LF, CR, etc.

To return a new string with whitespace trimmed from both ends, use [`Trim`](./trim.md). To return a new string with whitespace trimmed from the beginning of *aString*, use [`Trim start`](./trim-start.md).

In the *aString* parameter, you can pass any text expression. It will be left untouched by the command.

The command returns the trimmed version of the *aString* string. If there is no whitespace at the end of *aString*, the returned string is identical as the one passed in parameter.

:::note

This command is based upon the [`trimEnd` Ecmascript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimend).

:::

## Ejemplo

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim end($input) //"     Hello World!"
```

## Ver también

[Trim](./trim.md)\
[Trim start](./trim-start.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1855                        |
| Hilo seguro       | &check; |


