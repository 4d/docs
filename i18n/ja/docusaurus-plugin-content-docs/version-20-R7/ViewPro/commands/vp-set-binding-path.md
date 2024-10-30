---
id: vp-set-binding-path
title: VP SET BINDING PATH
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #_method_.VP SET BINDING PATH.Syntax -->

**VP SET BINDING PATH** ( *rangeObj* : Object  ; *dataContextAttribute*  : Text) <!-- END REF -->

<!-- REF #_method_.VP SET BINDING PATH.Params -->

| 引数                   | 型      |    | 説明                      |                  |
| -------------------- | ------ | -- | ----------------------- | ---------------- |
| rangeObj             | オブジェクト | -> | レンジオブジェクト               |                  |
| dataContextAttribute | テキスト   | -> | *rangeObj* にバインドする属性の名称 | <!-- END REF --> |

#### 説明

`VP SET BINDING PATH` コマンドは、<!-- REF #_method_.VP SET BINDING PATH.Summary -->*rangeObj* で指定したレンジに、シートのデータコンテキストの属性をバインドします<!-- END REF -->。 機能するには、[SET DATA CONTEXT](vp-set-data-context.md) を使ってデータコンテキストを設定する必要があります。 読み込まれたデータコンテキストが属性を含む場合、*dataContextAttribute* の値が *rangeObj* のセルに自動的に表示されます。

*rangeObj* 引数には、セルレンジまたは複合セルレンジのオブジェクトを渡します。

- *rangeObj* 引数には、セルレンジまたは複合セルレンジのオブジェクトを渡します。
- *rangeObj* のレンジが複数セルを含む場合、コマンドは最初のセルに属性をバインドします。

*dataContextAttribute* には、*rangeObj* にバインドする属性の名称を渡します。 *dataContextAttribute* が空の文字列だった場合、関数は属性のバインドを解除します。

> コレクション型の属性はサポートされていません。 コレクション属性の名前を渡した場合、コマンドは何もしません。

#### 例題

データコンテキストを設定し、`firstName` と `lastName` の属性をセルにバインドします:

```4d
var $p : Object

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")
```

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

#### 参照

[VP Get binding path](vp-get-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
