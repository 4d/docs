---
id: vp-get-stylesheet
title: VP Get stylesheets
---

<!-- REF #_method_.VP Get stylesheets.Syntax -->

**VP Get stylesheets** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

| 引数         | 型      |    | 説明                                              |                  |
| ---------- | ------ | -- | ----------------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                         |                  |
| sheet      | 整数     | -> | ターゲットのスコープ (デフォルト = カレントシート) |                  |
| 戻り値        | コレクション | <- | スタイルシートオブジェクトのコレクション                            | <!-- END REF --> |

#### 説明

`VP Get stylesheets` コマンドは、<!-- REF #_method_.VP Get stylesheets.Summary -->*sheet* で指定されたスコープにおいて定義されているスタイルシートのコレクションを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数を使用することで、スタイルシートをどこから取得するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

- `vk current sheet`
- `vk workbook`

#### 例題

以下のコードは、カレントシート内にある全スタイルオブジェクトのコレクションを返します:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

カレントシートが 2つのスタイルオブジェクトを使用していた場合:

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```

#### 参照

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)
