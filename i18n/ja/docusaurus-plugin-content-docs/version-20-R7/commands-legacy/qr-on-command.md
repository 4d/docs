---
id: qr-on-command
title: QR ON COMMAND
slug: /commands/qr-on-command
displayed_sidebar: docs
---

<!--REF #_command_.QR ON COMMAND.Syntax-->**QR ON COMMAND** ( *area* ; *methodName* )<!-- END REF-->
<!--REF #_command_.QR ON COMMAND.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| methodName | Text | &#8594;  | 置き換えメソッド名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR ON COMMAND.Summary-->QR ON COMMAND コマンドは、ユーザによるメニューコマンドの選択やボタンのクリックなどで、クイックレポートコマンドが起動されると、 *methodName* に渡された4Dメソッドを実行します。<!-- END REF-->*area*が0の場合、データベースが閉じられるか、QR ON COMMAND (0;"")という構文で QR ON COMMAND コマンドが呼び出されるまで、*methodName*が各クイックレポートエリアに適用されます。

*methodName*は次の2つの引数を受け取ります:

* *$1*はエリアの参照(倍長整数)です。
* *$2*は選択されたコマンドのコマンド番号(倍長整数)です。この値は *QR Commands* テーマ内にある以下の定数と比較可能です。  
| 定数                   | 型    | 値    | コメント                               |  
| -------------------- | ---- | ---- | ---------------------------------- |  
| qr cmd generate      | 倍長整数 | 2008 | [QR RUN](qr-run.md) コマンドの使用が推奨されます |  
| qr cmd page setup    | 倍長整数 | 2006 |                                    |  
| qr cmd print preview | 倍長整数 | 2007 |                                    |

**注:** データベースをコンパイルする予定がある場合、*$1*と*$2*を使用しない場合でも、それぞれを倍長整数として定義する必要があります。

最初のコマンドを実行させたい場合には、呼び出されるメソッドに次の命令を記述する必要があります: [QR EXECUTE COMMAND](qr-execute-command.md)($1;$2)

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 参照 

*QR Commands*  
[QR EXECUTE COMMAND](qr-execute-command.md)  
[QR Get command status](qr-get-command-status.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 790 |
| スレッドセーフである | &cross; |
| システム変数を更新する | error |


