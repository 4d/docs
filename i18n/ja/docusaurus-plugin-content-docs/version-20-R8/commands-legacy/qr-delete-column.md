---
id: qr-delete-column
title: QR DELETE COLUMN
slug: /commands/qr-delete-column
displayed_sidebar: docs
---

<!--REF #_command_.QR DELETE COLUMN.Syntax-->**QR DELETE COLUMN** ( *area* ; *colNumber* )<!-- END REF-->
<!--REF #_command_.QR DELETE COLUMN.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| colNumber | Integer | &#8594;  | カラム番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR DELETE COLUMN.Summary-->QR DELETE COLUMNは、*area*にある*colNumber*に渡された番号のカラムを削除します。<!-- END REF-->このコマンドはクロステーブルレポートに対しては適用されません。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*column*番号を渡した場合、エラー番号-9852が生成されます。 

#### 例題 

次の例題は、レポートがリストレポートであることを確認し、3番目のカラムを削除します: 

```4d
 If(QR Get report kind(MyArea)=qr list report)
    QR DELETE COLUMN(MyArea;3)
 End if
```

#### 参照 

[QR INSERT COLUMN](qr-insert-column.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 749 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


