---
id: push-record
title: PUSH RECORD
slug: /commands/push-record
displayed_sidebar: docs
---

<!--REF #_command_.PUSH RECORD.Syntax-->**PUSH RECORD** ({ *aTable* : Table })<!-- END REF-->
<!--REF #_command_.PUSH RECORD.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | レコードをプッシュするテーブル, または 省略時、デフォルトテーブル |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.PUSH RECORD.Summary-->PUSH RECORDは、*aTable*のカレントレコード (それに付随するサブレコードも含めて) を、そのテーブルのレコードスタックにプッシュします。<!-- END REF-->PUSH RECORDは、レコードがディスクに保存される前でも実行することができます。

変更可能 (アンロックされた) なレコ－ドをプッシュした場合、ポップしてアンロ－ドするまで、そのレコ－ドはすべてのユ－ザやプロセスに対して変更不可 (ロック) のままです。

**互換性に関する注意:** 4Dバージョン11より、このコマンドはサブテーブルをサポートしません。

## 例題 

以下の例は、\[Customer\]テーブルのレコードをレコードスタックにプッシュします:

```4d
 PUSH RECORD([Customer]) // 顧客レコードをスタックにプッシュする
```

## 参照 

[POP RECORD](../commands/pop-record)  
*レコードスタックの使用*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 176 |
| スレッドセーフである | yes |


