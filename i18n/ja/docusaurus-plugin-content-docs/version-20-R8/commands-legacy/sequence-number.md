---
id: sequence-number
title: Sequence number
slug: /commands/sequence-number
displayed_sidebar: docs
---

<!--REF #_command_.Sequence number.Syntax-->**Sequence number** {( *aTable* )} : Integer<!-- END REF-->
<!--REF #_command_.Sequence number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | シーケンス番号を求めるテーブル, または 省略時、デフォルトテーブル |
| 戻り値 | Integer | &#8592; | シーケンス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Sequence number.Summary-->**Sequence number** は、*aTable*の次のシーケンス番号を返します。<!-- END REF-->シーケンス番号は、各テーブルにおいて固有のものです。この番号は、*aTable*に対して新しいレコードが追加されるたびに加算される、決して重複することのない番号です。

(\*) 最適化のため、**Sequence number** コマンドまたはその他のシーケンス番号にアクセスする機能を最初に処理したときに初めてインクリメントが開始します (後述参照)。また、増分値は [SET DATABASE PARAMETER](set-database-parameter.md) コマンドによって変更することができます。したがって、戻り値を *aTable* に作成されたレコード数の参考にはできないことに注意が必要です。

番号は1から始まります。[SET DATABASE PARAMETER](set-database-parameter.md) コマンドを使用して、番号を変更することができます。 

**注:** カレントレコードが存在しておらず、[SET DATABASE PARAMETER](set-database-parameter.md) コマンドによって増分値も変更されている場合、戻り値は次のレコード作成のために予約されたものですが、 [SAVE RECORD](save-record.md) コマンドが成功した場合にかぎり **Sequence number** 関数によって返されます。

**Sequence number** が便利なケース:

* 番号の増分値に1以上の数を使用する必要がある場合
* シーケンス番号を他の管理番号の一部に使用する場合（部品番号の一部に使用する場合等）

メソッドを使用してシーケンス番号を各レコードに格納するには、テーブル上に倍長整数型のフィールドを作成し、そのフィールドにシーケンス番号を代入します。

このコマンドから返される *aTable* のシーケンス番号は、ストラクチャーインスペクターを使用してテーブルフィールドの**自動インクリメント**をチェックしたとき、あるいはフォームのフィールドにデフォルト値として *#N* 記号を設定した場合に得られる番号と同じです。詳細は4D Design Referenceマニュアルを参照してください。

**Note:** 自動インクリメントはSQLのAUTO\_INCREMENT属性で設定することもできます。

シーケンス番号が1以外の数値から始まる必要がある場合には、**Sequence number** に対してその差を加算するだけで構いません。例えば、番号が1000から始まる必要がある場合には、以下のようなステートメントを使用します:

```4d
 [Table1]SeqField :=Sequence number([Table1])+999
```

#### 例題 

以下の例は、フォームメソッドの一部です。このステートメントは、まずレコードが新しいものかどうか検査（請求書番号が空の文字列であるかどうかで判断）します。新しいレコードであれば、請求書番号を設定します。この請求書番号は、2つの情報から成り立っています。それは、シーケンス番号号とデータベースを開くときに入力された操作番号です。シーケンス番号を、5桁の文字列として扱います:

```4d
  // 請求番号が空なら新たに作成する
 If([Invoices]Invoice No="")
  // 請求番号は5桁のシーケンス番号とオペレータIDからなる
    [Invoices]Invoice No:=String(Sequence number;"00000")+[Invoices]OpID
 End if
```

#### 参照 

[Record number](record-number.md)  
[Selected record number](selected-record-number.md)  
*レコード番号について*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 244 |
| スレッドセーフである | &check; |


