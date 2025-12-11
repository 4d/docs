---
id: trim
title: Trim
displayed_sidebar: docs
---

<!--REF #_command_.Trim.Syntax-->**Trim** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim.Params-->

| Parâmetro | Tipo |                             | Descrição    |
| --------- | ---- | --------------------------- | ------------ |
| aString   | Text | &#8594; | Text to trim |
| Resultado | Text | &#8592; | Trimmed text |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 21      | Adicionado |

</details>

## Descrição

The **Trim** command <!--REF #_command_.Trim.Summary--> removes **whitespace** from both ends of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> **Whitespace** includes spaces, tabs, LF, CR, etc.

To return a new string with whitespace trimmed from just one end, use [`Trim start`](./trim-start.md) or [`Trim end`](./trim-end.md).

In the *aString* parameter, you can pass any text expression. It will be left untouched by the command.

The command returns the trimmed version of the *aString* string. If there is no whitespace at any end of *aString*, the returned string is identical as the one passed in parameter.

:::note

This command is based upon the [`TrimString` Ecmascript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-trimstring).

:::

## Exemplo

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim($input) //"Hello World!"
```

## Veja também

[Trim start](./trim-start.md)  
[Trim end](./trim-end.md)

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1853                        |
| Thread safe       | yes |


