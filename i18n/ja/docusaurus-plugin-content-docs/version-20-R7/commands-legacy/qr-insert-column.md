---
id: qr-insert-column
title: QR INSERT COLUMN
slug: /commands/qr-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.QR INSERT COLUMN.Syntax-->**QR INSERT COLUMN** ( *area* ; *colNumber* ; *object* )<!-- END REF-->
<!--REF #_command_.QR INSERT COLUMN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| colNumber | Integer | &#8594;  | カラム番号 |
| object | Field, Variable, Pointer | &#8594;  | カラムに挿入するオブジェクト |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR INSERT COLUMN.Summary-->QR INSERT COLUMN コマンドは指定された位置にカラムの作成または挿入を行います。<!-- END REF-->挿入された場所の右にあるカラムはすべて右側へ移動します。

*colNum*には、左から右へ順に付けられたカラム番号を渡します。

カラムのデフォルトのタイトルは*object*に渡された値です。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

**注:** このコマンドはクロステーブルレポートには使用できません。

#### 例題 

次のコードはクイックレポートエリアの一番目にカラムを挿入（または作成）し、カラムタイトルに“Field1”を設定し（デフォルト動作）、Field1の値をカラムの内容として代入します。

```4d
 QR INSERT COLUMN(MyArea;1;->[Table1]Field1)
```

#### 参照 

[QR DELETE COLUMN](qr-delete-column.md)  