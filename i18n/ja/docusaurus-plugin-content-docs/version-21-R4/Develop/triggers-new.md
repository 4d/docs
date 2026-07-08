---
id: triggers-new
title: トリガ
---

to import

<!-- REF triggers.vs-events.Desc -->

## トリガとORDAエンティティイベントの比較

**トリガ** (別名データベースイベント) と[**ORDA エンティティイベント**](../ORDA/orda-events.md) には類似した目的があります。どちらもデータに対する基礎的な操作(作成、編集、削除)を管理するためのルールを設定するということです。 しかしながら、両者は同じレベルでは動作しません: しかしながら、両者は同じレベルでは動作しません:

- トリガはデータベースレベルで管理されます。これはもっとも低いレベルに当たります。
- ORDA エンティティイベントは[データストア](../ORDA/dsMapping.md#datastore) レベルで管理されます。これはあなたのビジネスロジックに関連しています。

[`.save()`](../API/EntityClass.md#save) や [`.drop`](../API/EntityClass.md#drop)などの、データストアを通して実行されたデータに対するアクションは、設定されていればトリガを呼び出します。

On the other hand, actions triggered at the 4D database level using the 4D classic language commands, such as [`SAVE RECORD`](../commands/save-record) or [standard actions](/Desktop/standard-actions) will NOT trigger ORDA entity events.

<!-- END REF -->

