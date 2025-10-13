---
id: trim-end
title: Trim end
displayed_sidebar: docs
---

<!--REF #_command_.Trim end.Syntax-->**Trim end** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim end.Params-->

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

**Trim end** コマンドは、<!--REF #_command_.Trim end.Summary-->*aString* 引数の文字列から終端の**空白** を削除し、元の文字列を変更することなく新しい文字列を返します。<!-- END REF--> **空白** にはスペース、タブ、LF、CR などが含まれます。

前後両方の空白を削除した新しい文字列を返すためには、[`Trim`](./trim.md) を使用してください。 *aString* 引数の文字列から最初の空白を削除した新しい文字列を返すためには、[`Trim start`](./trim-start.md) を使用してください。

*aString* 引数には、任意のテキスト式を渡します。 これには、コマンドは何も手を加えません。

*aString* コマンドは、引数の文字列をトリミングしたものを返します。 *aString* 引数の文字列の終端に空白がない場合は、返される文字列は引数に渡されたものと完全に同じものになります。

:::note

このコマンドは[`trimEnd` Ecmascript 仕様](https://tc39.es/ecma262/multipage/text-processing.html#sec-string.prototype.trimend) に基づいています。

:::

## 例題

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim end($input) //"     Hello World!"
```

## 参照

[Trim](./trim.md)  
[Trim start](./trim-start.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1855                        |
| スレッドセーフ | &check; |


