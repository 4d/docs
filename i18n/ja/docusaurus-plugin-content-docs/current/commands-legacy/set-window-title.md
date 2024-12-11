---
id: set-window-title
title: SET WINDOW TITLE
slug: /commands/set-window-title
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW TITLE.Syntax-->**SET WINDOW TITLE** ( *title* {; *window*} )<!-- END REF-->
<!--REF #_command_.SET WINDOW TITLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| title | Text | &#8594;  | ウィンドウタイトル |
| window | Integer | &#8594;  | ウィンドウ参照番号, または 省略時カレントプロセスの最前面ウィンドウ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET WINDOW TITLE.Summary-->SET WINDOW TITLE コマンドは*window* に渡した参照番号のウィンドウのタイトルを、*title*に渡したテキストに変更します (最大80文字)。<!-- END REF-->

ウィンドウが存在しない場合、SET WINDOW TITLEは何も行いません。 

*window* 引数を省略すると、SET WINDOW TITLEはカレントプロセスの最前面ウィンドウのタイトルを変更します。

**Note:** デザインモードで4Dはウィンドウタイトルを自動で変更します。例えばデータ入力時には“更新：テーブル”となります。ウィンドウタイトルを変更しても、4Dがそれを上書きしてしまいます。他方、アプリケーションモードでは4Dはウィンドウタイトルの変更を行いません。

#### 例題 

フォームでデータ入力を行っている間、長い時間のかかる処理を行うためにボタンをクリックします (例えばプログラムでリレーとするレコードをブラウズするなど)。カレントウィンドウのタイトルを使用して進捗状況を知らせることができます:

```4d
  // bAnalysis button Object Method
 Case of
    :(Form event code=On Clicked) //v17 以前ではForm event を使用すること
  // 現在のタイトルを保持
       $vsCurTitle:=Get window title
  // 時間のかかる処理を開始
       FIRST RECORD([Invoice Line Items])
       For($vlRecord;1;Records in selection([Invoice Line Items]))
          DO SOMETHING
  // 進捗状況を表示
          SET WINDOW TITLE("Processing Line Item #"+String($vlRecord))
       End for
  // 元のウィンドウタイトルに戻す
       SET WINDOW TITLE($vsCurTitle)
 End case
```

#### 参照 

[Get window title](get-window-title.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 213 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


