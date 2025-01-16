---
id: vp-delete-columns
title: VP DELETE COLUMNS
---

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->

**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP DELETE COLUMNS` コマンドは、<!-- REF #_method_.VP DELETE COLUMNS.Summary -->*rangeObj* 引数で指定したカラムを削除します<!-- END REF -->。

*rangeObj* 引数には、削除するカラムを指定するレンジオブジェクトを渡します。 渡すレンジについては、以下の点に注意してください:

- レンジにカラムと行の両方が含まれる場合、カラムのみが削除されます。
- レンジに行しか含まれていない場合、コマンドは何もしません。
  \> カラムは右から左に向かって削除されます。

> カラムは右から左に向かって削除されます。

#### 例題

ユーザーが選択したカラムを削除します (以下の画像の B、C、D のカラムを削除します):

![](../../assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

以下のコードを実行します:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### 参照

[VP DELETE ROWS](vp-delete-rows.md)<br/>
[VP INSERT COLUMNS](vp-insert-columns.md)<br/>
[VP INSERT ROWS](vp-insert-rows.md)
