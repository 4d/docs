---
id: vp-find-table
title: VP Find table
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R7 | 追加 |

</details>

<!-- REF #_method_.VP Find table.Syntax -->

**VP Find table** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

| 引数       | 型      |    | 説明         |                  |
| -------- | ------ | -- | ---------- | ---------------- |
| rangeObj | オブジェクト | -> | セルのレンジ     |                  |
| 戻り値      | テキスト   | <- | Table name | <!-- END REF --> |

#### 説明

`VP Find table` コマンドは、<!-- REF #_method_.VP Find table.Summary -->*rangeObj* で指定したセルが所属する表組みの名称を返します<!-- END REF -->。

*rangeObj* には、セルのレンジオブジェクトを渡します。 指定したセルが表組みの一部でない場合、コマンドは空の文字列を返します。

*rangeObj* 引数のレンジが単独セルのレンジでない場合、あるいは複数レンジを指定している場合、最初のレンジの先頭セルが使用されます。

#### 例題

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("表組み "+$tableName+" は変更されました。")
     End if 
End if
```

#### 参照

[VP Get table range](vp-get-table-range.md)
