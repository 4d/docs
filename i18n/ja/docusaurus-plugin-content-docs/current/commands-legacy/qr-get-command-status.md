---
id: qr-get-command-status
title: QR Get command status
slug: /commands/qr-get-command-status
displayed_sidebar: docs
---

<!--REF #_command_.QR Get command status.Syntax-->**QR Get command status** ( *area* ; *command* {; *value*} ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get command status.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| command | Integer | &#8594;  | コマンド番号 |
| value | Integer, Text | &#8592; | 選択されたサブアイテムの値 |
| 戻り値 | Integer | &#8592; | コマンドの状態 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get command status.Summary-->QR Get command status コマンドは、*command*が使用不可であれば0を、使用可能であれば1を返します。<!-- END REF--> 

*value*は、選択されたサブアイテムがあれば、その値を返します。例えば、選択されたコマンドが**フォント**メニュー (1000) であり、選択されたフォントが“Arial”である場合、*value*には“Arial”が返されます。また、選択されたコマンドが**カラー**メニュー (1002,、1003、または1004) である場合、*value*にはカラー番号が返されます。

このコマンドは、次の2つの状況で使用することができます:

* あるコマンドが使用可であるか使用不可であるかを調べる単純な判定文として。
* [QR ON COMMAND](qr-on-command.md "QR ON COMMAND")コマンドでインストールされたメソッドにおいてこのコマンドを使用すると、選択されたサブアイテムを知ることができます。そのメソッドでは、*$1*がエリアの参照番号となり、*$2*がコマンド番号となります。
*command*にはには値または定数テーマの定数を渡すことができます。 

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。  
無効な*command*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR ON COMMAND](qr-on-command.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 792 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


