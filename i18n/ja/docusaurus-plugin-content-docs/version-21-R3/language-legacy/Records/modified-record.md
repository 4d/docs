---
id: modified-record
title: Modified record
slug: /commands/modified-record
displayed_sidebar: docs
---

<!--REF #_command_.Modified record.Syntax-->**Modified record** ( *aTable* : Table ) : Boolean<!-- END REF-->
<!--REF #_command_.Modified record.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594; | カレントレコードが修正されているかテストするテーブル, または 省略時、デフォルトテーブル |
| 戻り値 | Boolean | &#8592; | True: レコードは修正されている False: レコードは修正されていない |
</div>
<!-- END REF-->

## 説明 

<!--REF #_command_.Modified record.Summary-->**Modified record** は、*aTable*のレコードが更新されたが保存されていない場合に[True](../commands/true)を返します。<!-- END REF-->それ以外は[False](../commands/false)を 返します。この関数は、保存する必要があるレコードかどうかを判定する場合に使用します。これは、入力フォーム上で次のレコードに移動する前にカレントレコードを保存するかどうかチェックする際に特に有効です。このコマンドは新規レコードについては、常に[True](../commands/true)を返します。

このファンクションは以下の場合に置いては常にTrueを返す点に注意して下さい:

* カレントレコードが新規レコードの場合
* [PUSH RECORD](../commands/push-record) と [POP RECORD](../commands/pop-record) コマンドの実行後
* 値がレコードのフィールドへと割り当てられた場合(値が前のものと同じ場合も含みます)。例えば、**Modified record** は以下の宣言実行後にはTrueを返します:  
```4d  
 [Table_1]Field_1:=[Table_1]Field_1  
```

## 例題 

以下の例は、Modified recordの典型的な使用方法です:

```4d
 If(Modified record([Customers]))
    SAVE RECORD([Customers])
 End if
```

## 参照 

[Modified](../commands/modified)  
[Old](../commands/old)  
[SAVE RECORD](../commands/save-record)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 314 |
| スレッドセーフである | yes |


