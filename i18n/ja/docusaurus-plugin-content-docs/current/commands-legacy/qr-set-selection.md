---
id: qr-set-selection
title: QR SET SELECTION
slug: /commands/qr-set-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR SET SELECTION.Syntax-->**QR SET SELECTION** ( *area* ; *left* ; *top* {; *right* {; *bottom*}} )<!-- END REF-->
<!--REF #_command_.QR SET SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| left | Integer | &#8594;  | 左境界 |
| top | Integer | &#8594;  | 上境界 |
| right | Integer | &#8594;  | 右境界 |
| bottom | Integer | &#8594;  | 下境界 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR SET SELECTION.Summary-->QR SET SELECTION コマンドを使用するとマウスクリックをした場合と同様に、セルや行、カラム、またはエリア全体を反転表示 (選択) することができます。<!-- END REF-->また、現在選択されている範囲を解除することもできます。

*left*には左側境界となるカラムの番号を指定します。*left*が0の場合行全体が選択されます。  
*top*には上側境界となる行番号を指定します。*top*が0の場合カラム全体が選択されます。  
*right*には右側境界となるカラムの番号を指定します。  
*bottom*には下側境界となる行番号を指定します。

**Notes:**  

* *left*と*top*の両方が0の場合、エリア全体が反転表示 (選択) されます。
* 選択範囲を設定したくない場合、*left*、*top*、*right*、*bottom*に-1を渡します。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR GET SELECTION](qr-get-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 794 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


