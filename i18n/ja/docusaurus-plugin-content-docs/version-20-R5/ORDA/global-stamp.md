---
id: global-stamp
title: グローバルスタンプの使い方
---

## 概要

4D automatically manages an internal **global modification stamp**, useful to handle data change tracking implementations, for example to monitor activity, backup, run incremental synchronization, etc.

グローバル変更スタンプは、データベースの復元やインポートなどの場合も含め、4D が常に管理する番号です。 Note however that the stamp can be modified using the [`.setGlobalStamp()`](../API/DataStoreClass.md#setglobalstamp) function.

Once the [data change tracking is configured and enabled](#configuring-data-change-tracking), the following actions are automatically executed by 4D at each record modification (add, modify, delete):

1. グローバル変更スタンプのカレント値は、関連エンティティの特別な "__GlobalStamp" 属性に保存されます。
   In case of a deletion, a new entity is also added to the `__DeletedRecords` table with information about the deleted entity and the current global modification stamp value is saved in the "__Stamp" attribute.

2. グローバル変更スタンプの値が増分されます。

この仕組みにより、ある時点以降に変更、追加、または削除されたエンティティを特定し、適切なアクションを実行することができます (例題参照)。

:::info

Do not confuse the **global modification stamp** with the internal **entity stamp**, used for the [optimistic locking feature](entities.md#automatic-optimistic-lock).

:::

## データ変更追跡の設定

By default, the global modification stamp is not created (the [`.getGlobalStamp()`](../API/DataStoreClass.md#getglobalstamp) function returns 0. データ変更追跡を有効にするには、特別なフィールドとテーブルをストラクチャーに追加する必要があります。 ストラクチャーエディターのコンテキストメニューを使用すると、必要な要素をすべて自動的に作成できます。

### ストラクチャー要件

To enable data change tracking, the application structure must contain at least one table with a `__GlobalStamp` field.

また、本機能を適切に動作させるためには、以下の条件が必要です:

- The `__GlobalStamp` field must must be of type _Integer 64 bits_, with _automatic index_, _Expose as REST resource_, and _Invisible_ properties selected.
- A `__DeletedRecords` table must be added, with the following fields:

| フィールド                                                   | タイプ     | 説明                   |
| ------------------------------------------------------- | ------- | -------------------- |
| __PrimaryKey  | Text    | 削除されたエンティティのプライマリーキー |
| __Stamp       | 64ビット整数 | 削除直前のグローバルスタンプ       |
| __TableName   | Text    | 削除されたエンティティのテーブル名    |
| __TableNumber | 倍長整数    | 削除されたエンティティのテーブル番号   |

You can only track changes for data in tables having the `__GlobalStamp` field.

:::note

In the 4D language, the `__GlobalStamp` field value should be handled through a `Real` type variable.

:::

### ストラクチャーエディターを使用する

4Dストラクチャーエディターでは、データ変更追跡の有効化・無効化が、たった一つのメニュー項目で切り替えられます。

データ変更追跡を有効化するには:

1. データ変更追跡を有効にするテーブルを選択します。
2. Right-click on a selected table and select **Enable data change tracking** in the contextual menu.
3. 確認用のダイアログボックスが表示されます。 **OK** をクリックします。

すると、4D は次の変更をおこないます:

- A preconfigured `__GlobalStamp` field is added to the table(s).
- If not already existing, a `__DeletedRecords` table is added to the structure.

データ変更追跡を無効化するには:

1. データ変更追跡を無効にするテーブルを選択します。
2. Right-click on a selected table and select **Disable data change tracking** in the contextual menu.
3. 確認用のダイアログボックスが表示されます。 **OK** をクリックします。

4D then removes the `__GlobalStamp` field from the table(s). Note that if you want to remove the `__DeletedRecords` table, you need to do it manually.

## 例題

```4d
var $oldStamp : Real
var $tableName : Text
var $modifiedEmps : cs.EmployeeSelection
var $deletedEmpsInfo : cs.__DeletedRecordsSelection

$tableName:="Employee"
$oldStamp:=... //load the previous stamp value  
	//from which you want to compare the current stamp

If ($oldStamp # ds.getGlobalStamp())
		//get all new or modified entities
	$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)
		//get all deleted entities
	$deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\
	$oldStamp; $tableName)
End if
```
