---
id: vp-delete-rows
title: VP DELETE ROWS
---

<!-- REF #_method_.VP DELETE ROWS.Syntax -->

**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE ROWS.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP DELETE ROWS` コマンドは、<!-- REF #_method_.VP DELETE ROWS.Summary -->*rangeObj* 引数で指定した行を削除します<!-- END REF -->。

*rangeObj* 引数には、削除する行を指定するレンジオブジェクトを渡します。 渡すレンジについては、以下の点に注意してください:

- レンジにカラムと行の両方が含まれる場合、行のみが削除されます。
- レンジにカラムしか含まれていない場合、コマンドは何もしません。
  \> 行は下から上に向かって削除されます。

> 行は下から上に向かって削除されます。

#### 例題

ユーザーが選択した行を削除します (以下の画像の 1、2、3行目を削除します):

![](../../assets/en/ViewPro/cmd_vpDeleteRows.PNG)

以下のコードを実行します:

```4d

 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### 参照

[VP DELETE ROWS](vp-delete-columns.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
