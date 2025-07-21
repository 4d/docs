---
id: trim-start
title: Trim start
displayed_sidebar: docs
---

<!--REF #_command_.Trim start.Syntax-->**Trim start** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim start.Params-->

| 引数      | 型    |                             | 説明           |
| ------- | ---- | --------------------------- | ------------ |
| aString | Text | &#8594; | Text to trim |
| 戻り値     | Text | &#8592; | Trimmed text |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 21   | 追加 |

</details>

## 説明

The **Trim start** command <!--REF #_command_.Trim start.Summary--> removes **whitespace** from the beginning of the *aString* parameter and returns a new string, without modifying the original one.<!-- END REF--> **Whitespace** includes spaces, tabs, LF, CR, etc.

To return a new string with whitespace trimmed from both ends, use [`Trim`](./trim.md). To return a new string with whitespace trimmed from the end of *aString*, use [`Trim end`](./trim-end.md).

In the *aString* parameter, you can pass any text expression. It will be left untouched by the command.

The command returns the trimmed version of the *aString* string. If there is no whitespace at the beginning of *aString*, the returned string is identical as the one passed in parameter.

:::note

This command is based upon the [`trimStart` Ecmascript specification](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimstart).

:::

## 例題

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim start($input) //"Hello World!    "
```

## 参照

[Trim](./trim.md)\
[Trim end](./trim-end.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1854                        |
| スレッドセーフ | &check; |


