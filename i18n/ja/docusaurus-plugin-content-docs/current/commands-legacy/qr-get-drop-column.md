---
id: qr-get-drop-column
title: QR Get drop column
slug: /commands/qr-get-drop-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Get drop column.Syntax-->**QR Get drop column** ( *area* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get drop column.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| 戻り値 | Integer | &#8592; | ドロップされた値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get drop column.Summary-->QR Get drop column コマンドは、ドロップ動作が行われた場所の値を返します。<!-- END REF-->

* 戻り値が負の場合、カラム番号を示します (例えば、カラム番号3にドロップされた場合には-3)。
* 戻り値が正の場合、そのカラムの前にあるセパレータ上でドロップ動作が実行されたことを示します (例えば、カラム2の後ろにドロップされた場合には3)。ドロップ動作は、必ずしも既存のカラムの前で実行する必要はないことに留意してください。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR DELETE COLUMN](qr-delete-column.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 747 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


