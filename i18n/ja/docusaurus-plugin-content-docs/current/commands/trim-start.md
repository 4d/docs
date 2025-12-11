---
id: trim-start
title: Trim start
displayed_sidebar: docs
---

<!--REF #_command_.Trim start.Syntax-->**Trim start** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim start.Params-->

| 引数      | 型    |                             | 説明           |
| ------- | ---- | --------------------------- | ------------ |
| aString | Text | &#8594; | トリミングするテキスト  |
| 戻り値     | Text | &#8592; | トリミングされたテキスト |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |
| 21   | 追加 |

</details>

## 説明

**Trim start** コマンドは、<!--REF #_command_.Trim start.Summary-->*aString* 引数の文字列の最初の**空白** を削除し、元の文字列を変更することなく新しい文字列を返します。<!-- END REF--> **空白** にはスペース、タブ、LF、CR などが含まれます。

前後両方の空白を削除した新しい文字列を返すためには、[`Trim`](./trim.md) を使用してください。 *aString* 引数の文字列から終端の空白を削除した新しい文字列を返すためには、[`Trim end`](./trim-end.md) を使用してください。

*aString* 引数には、任意のテキスト式を渡します。 これには、コマンドは何も手を加えません。

*aString* コマンドは、引数の文字列をトリミングしたものを返します。 *aString* 引数の文字列の最初に空白がない場合は、返される文字列は引数に渡されたものと完全に同じものになります。

:::note

このコマンドは[`trimStart` Ecmascript 仕様](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimstart) に基づいています。

:::

## 例題

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim start($input) //"Hello World!    "
```

## 参照

[Trim](./trim.md)  
[Trim end](./trim-end.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1854                        |
| スレッドセーフ | yes |


