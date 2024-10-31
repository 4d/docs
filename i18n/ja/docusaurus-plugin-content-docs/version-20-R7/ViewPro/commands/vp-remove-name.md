---
id: vp-remove-name
title: VP REMOVE NAME
---

<!-- REF #_method_.VP REMOVE NAME.Syntax -->

**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP REMOVE NAME.Params -->

| 引数         | 型    |    | 説明                                            |                  |
| ---------- | ---- | -- | --------------------------------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名                       |                  |
| name       | テキスト | -> | 削除する命名レンジまたは命名フォーミュラの名前                       |                  |
| scope      | 整数   | -> | ターゲットのスコープ (デフォルト=カレントシート) | <!-- END REF --> |

#### 説明

`VP REMOVE NAME` コマンドは、<!-- REF #_method_.VP REMOVE NAME.Summary -->*name* の命名レンジまたは命名フォーミュラを、定義された *scope* のスコープから削除します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*name* には、削除したい命名レンジあるいは命名フォーミュラの名前を渡します。

*scope* 引数を使用することで、命名レンジまたは命名フォーミュラをどこから削除するのか、指定することができます。その際、シートのインデックス (0 起点) を渡すか、以下の定数のいずれかを渡します:

- `vk current sheet`
- `vk workbook`

#### 例題

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
// $formula=null
```

#### 参照

[VP Name](vp-name.md)
