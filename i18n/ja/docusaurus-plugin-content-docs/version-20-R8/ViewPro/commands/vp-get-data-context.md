---
id: vp-get-data-context
title: VP Get data context
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R5 | 追加 |

</details>

<!-- REF #_method_.VP Get data context.Syntax -->

**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : any<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

| 引数         | 型       |                             | 説明                                                 |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                            |                  |
| sheet      | Integer | ->                          | データコンテキストを取得するシートのインデックス                           |                  |
| 戻り値        | Variant | <- | Data context. Object or Collection | <!-- END REF --> |

#### 説明

`VP Get data context` コマンドは、 <!-- REF #_method_.VP Get data context.Summary -->ワークシートのカレントのデータコンテキストを返します<!-- END REF -->。 返されるコンテキストには、データコンテキストの内容に対しておこなわれた変更を含みます。

*sheet* には、データコンテキストを取得するシートのインデックスを渡します。 インデックスを省略した場合、コマンドはカレントワークシートのデータコンテキストを返します。 ワークシートのコンテキストが存在しない場合、コマンドは `Null` を返します。

[VP SET DATA CONTEXT](vp-set-data-context.md) により設定されたデータコンテキストの種類によって、関数はオブジェクトまたはコレクションを返します。

#### 例題

次のセルにバインドされたデータコンテキストを取得します:

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

#### 参照

[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP SET BINDING PATH](vp-set-binding-path.md)
