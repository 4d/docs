---
id: modify-record
title: MODIFY RECORD
slug: /commands/modify-record
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY RECORD.Syntax-->**MODIFY RECORD** ( {*aTable*}{;}{*} )<!-- END REF-->
<!--REF #_command_.MODIFY RECORD.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | データ入力に使用するテーブル, または 省略した場合デフォルトテーブル |
| * | Operator |  &#8594;  | スクロールバーを隠す |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MODIFY RECORD.Summary-->MODIFY RECORDコマンドは、*aTable*テーブルまたは*aTable*引数を省略した場合デフォルトテーブルのカレントレコードを修正するために使用します。<!-- END REF-->MODIFY RECORDは、カレントプロセスにレコードがまだロードされていない場合にレコードをロードし、カレント入力フォームにレコードを表示します。カレントレコードがなければ、MODIFY RECORDは何も行いません。またMODIFY RECORDはカレントセレクションに影響を与えません。

フォームは現在のプロセスの最前面ウインドウに表示されます。ウインドウにはスクロールバーとサイズボックスがあります。オプションの *\** 引数を指定すると、スクロールバーやサイズボックスのないウインドウを表示します。

MODIFY RECORDを使用するには、必ずカレントレコ－ドは読み込み/書き込み可能であり、ロックされていてはいけません。フォームにカレントセレクションのレコード内を移動するためのボタンがある場合、ユーザはこれらのボタンをクリックして、レコードを修正した後、他のレコードへ移動することができます。

ユーザが保存ボタンをクリック、またはenterキーを押す、または[ACCEPT](accept.md "ACCEPT")コマンドが実行されると、レコードが保存されます。

ユーザがキャンセルボタンをクリック、またはキャンセルキーコンビネーション (WindowsではCtrl-ピリオド、Mac OSではCommand-ピリオド) を押す、または[CANCEL](cancel.md "CANCEL")コマンドが実行されると、レコードは保存されません。キャンセルされた場合でもレコードはメモリ上に残されていて、カレントレコードポインタが変更される前に[SAVE RECORD](save-record.md "SAVE RECORD")を実行すれば、レコードを保存できます。

MODIFY RECORDの呼び出し後、システム変数OKにはレコードが受け入れられると1が、キャンセルされると0が設定されます。

MODIFY RECORDを使用したが、ユーザがレコードのデータを変更しなかった場合、レコードは更新されたとは扱われず、レコードを受け入れても保存処理は行われません。変数の変更、チェックボックスのチェック、ラジオボタンの選択はレコードの更新とはみなされません。データ入力またはメソッドでフィールドデータの更新が行われた場合のみ、レコードの保存が実行されます。

#### 例題 

[ADD RECORD](add-record.md "ADD RECORD")コマンドの例題参照。

#### システム変数およびセット 

レコードが受け入れらると、システム変数OKに1を代入します。キャンセルされた場合は、システム変数OKに0を代入します。OKシステム変数はレコードが受け入れられたかキャンセルされた後に設定されます。

#### 参照 

[ADD RECORD](add-record.md)  
[Locked](locked.md)  
[Modified record](modified-record.md)  
[READ WRITE](read-write.md)  
[UNLOAD RECORD](unload-record.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 57 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


