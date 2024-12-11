---
id: qr-get-selection
title: QR GET SELECTION
slug: /commands/qr-get-selection
displayed_sidebar: docs
---

<!--REF #_command_.QR GET SELECTION.Syntax-->**QR GET SELECTION** ( *area* ; *left* ; *top* {; *right* {; *bottom*}} )<!-- END REF-->
<!--REF #_command_.QR GET SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| left | Integer | &#8592; | 左境界 |
| top | Integer | &#8592; | 上境界 |
| right | Integer | &#8592; | 右境界 |
| bottom | Integer | &#8592; | 下境界 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR GET SELECTION.Summary-->QR GET SELECTION コマンドは、選択されたセルの座標を返します。<!-- END REF-->

*left* には、選択範囲の左側境界となるカラムの番号が返されます。*left* が0の場合、行全体が選択されています。

*top*には、選択範囲の上側境界となる行番号が返されます。*top*が0の場合、カラム全体が選択されています。

**Note:** *left*と*top*の両方が0の場合、エリア全体が反転表示（選択）されています。

*right*には、選択範囲の右側境界となるカラムの番号が返されます。

*bottom*には、選択範囲の下側境界となる行番号が返されます。

**Note:** 何も選択されていない場合、*left*、*top*、*right*、*bottom*には-1が代入されます。  
  
無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

[QR SET SELECTION](qr-set-selection.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 793 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


