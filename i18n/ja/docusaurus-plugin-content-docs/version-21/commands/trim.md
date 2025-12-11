---
id: trim
title: Trim
displayed_sidebar: docs
---

<!--REF #_command_.Trim.Syntax-->**Trim** ( *aString* ) : Text<!-- END REF-->

<!--REF #_command_.Trim.Params-->

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

**Trim** コマンドは<!--REF #_command_.Trim.Summary-->*aString* 引数の文字列の前後の **空白** を削除し、元の文字列を変更することなく新しい文字列を返します<!-- END REF-->。 **空白** にはスペース、タブ、LF、CR などが含まれます。

前後どちらかの空白のみをトリミングした新しい文字列を返すためには、[`Trim start`](./trim-start.md) あるいは [`Trim end`](./trim-end.md)を使用してください。

*aString* 引数には、任意のテキスト式を渡します。 これには、コマンドは何も手を加えません。

*aString* コマンドは、引数の文字列をトリミングしたものを返します。 *aString* 引数の文字列の前後に空白がない場合、返される文字列は引数に渡されたものと完全に同じものになります。

:::note

このコマンドは[`TrimString` Ecmascript 仕様](https://tc39.es/ecma262/multipage/text-processing.html#sec-trimstring) に基づいています。

:::

## 例題

```4d
var $input; $output : Text
$input:="     Hello World!    "
$output:=Trim($input) //"Hello World!"
```

## 参照

[Trim start](./trim-start.md)  
[Trim end](./trim-end.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1853                        |
| スレッドセーフ | yes |


