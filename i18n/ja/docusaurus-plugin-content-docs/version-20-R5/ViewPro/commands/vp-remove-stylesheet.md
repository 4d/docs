---
id: vp-remove-stylesheet
title: VP REMOVE STYLESHEET
---

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->

**VP REMOVE STYLESHEET** ( _vpAreaName_ : Text ; _styleName_ : Text { ; _sheet_ : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| 引数         | タイプ     |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| styleName  | Text    | -> | 削除するスタイルの名前                                    |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP REMOVE STYLESHEET` コマンドは、<!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->_vpAreaName_ 引数で指定したエリアから、_styleName_ で指定したスタイルシートを削除します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_styleName_ 引数には、削除するスタイルシートの名前を渡します。

任意の _sheet_ 引数を使用することで、スタイルシートをどこから削除するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

- `vk current sheet`
- `vk workbook`

#### 例題

カレントシートから、_GreenDashDotStyle_ スタイルオブジェクトを削除します:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```

#### 参照

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)
