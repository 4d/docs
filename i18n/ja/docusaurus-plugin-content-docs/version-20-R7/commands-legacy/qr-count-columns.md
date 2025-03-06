---
id: qr-count-columns
title: QR Count columns
slug: /commands/qr-count-columns
displayed_sidebar: docs
---

<!--REF #_command_.QR Count columns.Syntax-->**QR Count columns** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Count columns.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| 戻り値 | Integer | &#8592; | エリア中のカラム数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Count columns.Summary-->QR Count columns コマンドは、クイックレポート*area*に存在するカラムの数を返します。<!-- END REF-->

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 例題 

次のコードはカラムの数を取得して、一番右端にある既存のカラムの右側にカラムを挿入します:

```4d
 $ColNb:=QR Count columns(MyArea)
 QR INSERT COLUMN(MyArea;$ColNb+1;->[Table1]Field2)
```

#### 参照 

[QR DELETE COLUMN](qr-delete-column.md)  
[QR INSERT COLUMN](qr-insert-column.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 764 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


