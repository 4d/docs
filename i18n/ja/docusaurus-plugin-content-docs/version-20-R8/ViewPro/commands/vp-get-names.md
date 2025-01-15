---
id: vp-get-names
title: VP Get names
---

<!-- REF #_method_.VP Get names.Syntax -->

**VP Get names** ( vpAreaName : Text { ; scope : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get names.Params -->

| 引数         | 型          |                             | 説明                                              |                  |
| ---------- | ---------- | --------------------------- | ----------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | 4D View Pro フォームオブジェクト名                         |                  |
| scope      | Integer    | ->                          | ターゲットのスコープ (デフォルト = カレントシート) |                  |
| 戻り値        | Collection | <- | 定義されたスコープ内に存在する名前                               | <!-- END REF --> |

#### 説明

`VP Get names` コマンドは、<!-- REF #_method_.VP Get names.Summary -->カレントシートまたは *scope* 引数で指定されたスコープ内において定義されているすべての "名前" のコレクションを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*scope* 引数を使用することで、名前を取得するスコープを定義できます。その際、シートのインデックス (0 起点) を渡すか、以下の定数のいずれかを渡します:

- `vk current sheet`
- `vk workbook`

##### 返されるコレクション

返されるコレクションには、1つの名前につき 1つのオブジェクトが格納されています。 以下のオブジェクトプロパティが返されます:

| プロパティ                                                                                   | 型    | 説明             |
| --------------------------------------------------------------------------------------- | ---- | -------------- |
| result\[ ].name    | Text | セルまたはレンジ名      |
| result\[ ].formula | Text | formula        |
| result\[ ].comment | Text | 名前に割り当てられたコメント |

返されるプロパティは、命名された要素のタイプ (命名セル、命名レンジ、または命名フォーミュラ) に応じて異なります。

#### 例題

```4d
var $list : Collection


$list:=VP Get names("ViewProArea";2) // 3番目のシートにある名前
```

#### 参照

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP ADD RANGE NAME](vp-add-range-name.md)<br/>
[VP Get formula by name](vp-get-formula-by-name.md)<br/>
[VP Name](vp-name.md)
