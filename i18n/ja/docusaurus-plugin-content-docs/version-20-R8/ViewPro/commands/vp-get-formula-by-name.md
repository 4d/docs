---
id: vp-get-formula-by-name
title: VP Get formula by name
---

<!-- REF #_method_.VP Get formula by name.Syntax -->

**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get formula by name.Params -->

| 引数         | 型       |                             | 説明                                            |                  |
| ---------- | ------- | --------------------------- | --------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                       |                  |
| name       | Text    | ->                          | 命名レンジの名前                                      |                  |
| scope      | Integer | ->                          | ターゲットのスコープ (デフォルト=カレントシート) |                  |
| 戻り値        | Object  | <- | 命名フォーミュラ、または命名レンジの定義                          | <!-- END REF --> |

#### 説明

`VP Get formula by name` コマンドは、<!-- REF #_method_.VP Get formula by name.Summary --> *name* 引数で指定された名前の命名フォーミュラ、あるいは命名レンジに対応したフォーミュラとコメントを返します (定義されたスコープにそれらが存在しない場合には **null** が返されます)<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*name* には、取得したい命名レンジあるいは命名フォーミュラの名前を渡します。 命名レンジは、絶対セル参照を格納したフォーミュラとして返されるという点に注意してください。

*scope* 引数を使用することで、フォーミュラを取得するスコープを定義できます。その際、シートのインデックス (0 起点) を渡すか、以下の定数のいずれかを渡します:

- `vk current sheet`
- `vk workbook`

##### 返されるオブジェクト

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ   | 型    | 説明                                                                    |
| ------- | ---- | --------------------------------------------------------------------- |
| formula | Text | 命名フォーミュラまたは命名レンジに対応したフォーミュラのテキスト。 命名レンジの場合、フォーミュラは連続した絶対セル参照として返されます。 |
| comment | Text | 命名フォーミュラまたは命名レンジに対応したコメント                                             |

#### 例題

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1

$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (存在しない場合)
```

#### 参照

[VP ADD FORMULA NAME](vp-add-formula-name.md)<br/>
[VP Get names](vp-get-names.md)
