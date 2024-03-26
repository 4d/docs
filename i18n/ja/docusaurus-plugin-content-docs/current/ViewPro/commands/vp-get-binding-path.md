---
id: vp-get-binding-path
title: VP Get binding path
---

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R5 | 追加 |

</details>

<!-- REF #_method_.VP Get binding path.Syntax -->

**VP Get binding path** ( _rangeObj_ : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get binding path.Params -->

| 引数       | タイプ    |    | 説明              |                  |
| -------- | ------ | -- | --------------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト       |                  |
| 戻り値      | Text   | <- | セルにバインドされた属性の名称 | <!-- END REF --> |

#### 説明

`VP Get binding path` コマンドは、<!-- REF #_method_.VP Get binding path.Summary -->_rangeObj_ で指定したセルにバインドされた属性の名称を返します<!-- END REF -->。

_rangeObj_ 引数には、セルレンジまたは複合セルレンジのオブジェクトを渡します。 注:

- _rangeObj_ のレンジが複数セルを含む場合、コマンドは最初のセルにバインドされている属性名を返します。
- _rangeObj_ 引数が複数のレンジを含む場合、最初のレンジの最初のセルにバインドされた属性名が返されます。

#### 例題

```4d
var $p; $options : Object
var $myAttribute : Text

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

$myAttribute:=VP Get binding path(VP Cell("ViewProArea"; 1; 0)) // "lastName"
```

#### 参照

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
