---
id: goto-selected-record
title: GOTO SELECTED RECORD
slug: /commands/goto-selected-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO SELECTED RECORD.Syntax-->**GOTO SELECTED RECORD** ( {*aTable* ;} *record* )<!-- END REF-->
<!--REF #_command_.GOTO SELECTED RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 指定したレコードをカレントレコードとするテーブル, または 省略時、デフォルトテーブル |
| record | Integer | &#8594;  | セレクション中のレコード位置番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GOTO SELECTED RECORD.Summary-->**GOTO SELECTED RECORD**は、*aTable*のカレントセレクション内の指定されたレコードに移動し、そのレコードをカレントレコードにします。<!-- END REF-->カレントセレクションは変更されません。*record*にはカレントセレクション内のレコードの位置を指定します。[Record number](record-number.md)で求められるレコード番号ではありません。このレコード位置はセレクションの作成方法およびセレクションがソートされているかどうかによって変わります。

**GOTO SELECTED RECORD** は以下の場合なにも行いません:

* カレントセレクション中にレコードが存在しない場合
* *record* がカレントセレクションに含まれていない場合
* *record* がすでにカレントレコードである場合

*record*に0を渡すと、*aTable*のカレントレコードが存在しなくなります。単一選択モードが選択されている場合、特に組み込みサブフォームで、これによりリスト中のレコードの選択を解除できます。

#### 例題 

以下の例は、\[People\]Last Nameフィールドの内容を*atNames*配列に取り込みます。*alRecNum*倍長整数配列にレコード位置番号を設定します。両方の配列をソートし、その配列を使用してセレクション内のレコードを参照します:

```4d
  // ここで[People] テーブルのセレクションを作成
  // ...
  // 名前を取得
 SELECTION TO ARRAY([People]Last Name;atNames)
  // レコード位置番号の配列を作成
 $vlNbRecords:=Size of array(atNames)
 ARRAY LONGINT(alRecNum;$vlNbRecords)
 For($vlRecord;1;$vlNbRecords)
    alRecNum{$vlRecord}:=$vlRecord
 End for
  // 配列を名前順でソート
 SORT ARRAY(atNames;alRecNum;>)
```

*atNames* 配列がスクロールエリアに表示され、ユーザは項目の一つをクリックします。2つの配列は同期されているので、*alRecNum*は対応する*atNames*の要素のレコード位置番号を保持しています。

以下の*atNames*オブジェクトメソッドは\[People\]セレクション中の、スクロールエリアで選択されたレコードをカレントレコードにします:

```4d
 Case of
    :(Form event code=On Clicked)
       If(atNames#0)
          GOTO SELECTED RECORD(alRecNum{atNames})
       End if
 End case
```

#### 参照 

[Selected record number](selected-record-number.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 245 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||


