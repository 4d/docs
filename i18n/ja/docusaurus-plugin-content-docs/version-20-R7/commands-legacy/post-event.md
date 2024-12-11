---
id: post-event
title: POST EVENT
slug: /commands/post-event
displayed_sidebar: docs
---

<!--REF #_command_.POST EVENT.Syntax-->**POST EVENT** ( *what* ; *message* ; *when* ; *mouseX* ; *mouseY* ; *modifiers* {; *process*} )<!-- END REF-->
<!--REF #_command_.POST EVENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| what | Integer | &#8594;  | イベントのタイプ |
| message | Integer | &#8594;  | イベントメッセージ |
| when | Integer | &#8594;  | Tick単位でのイベント時間 |
| mouseX | Integer | &#8594;  | マウスの水平座標 |
| mouseY | Integer | &#8594;  | マウスの垂直座標 |
| modifiers | Integer | &#8594;  | モディファイアキーのステータス |
| process | Integer | &#8594;  | 送信先のプロセス参照番号、 省略または0の場合、アプリケーションイベントキュー |

<!-- END REF-->

#### 説明 

<!--REF #_command_.POST EVENT.Summary-->POST EVENT コマンドは、キーボードまたはマウスイベントをシミュレートします。<!-- END REF-->これは、ユーザが実際にキーボードやマウス上で動作を行った場合と同様の結果を生じます。

引数 *what* には、以下の値のいずれかを渡します。

| 定数               | 型    | 値 |
| ---------------- | ---- | - |
| Auto key event   | 倍長整数 | 5 |
| Key down event   | 倍長整数 | 3 |
| Key up event     | 倍長整数 | 4 |
| Mouse down event | 倍長整数 | 1 |
| Mouse up event   | 倍長整数 | 2 |
  
  
イベントがマウス関連のイベントであれば、0 (ゼロ) を *message* に渡します。イベントがキーボード関連のイベントであれば、シミュレートされる文字のコードを *message* に渡します。 

通常、[Tickcount](tickcount.md "Tickcount") によって返される値を *when* に渡します。

イベントがマウス関連のイベントであれば、クリックの水平座標と垂直座標を *mouseX* と *mouseY* に渡します。

引数 *modifiers* には、テーマの定数を1つまたは組み合わせを渡します。

| 定数                     | 型    | 値     | コメント                                   |
| ---------------------- | ---- | ----- | -------------------------------------- |
| Activate window bit    | 倍長整数 | 0     |                                        |
| Activate window mask   | 倍長整数 | 1     |                                        |
| Caps lock key bit      | 倍長整数 | 10    | WindowsおよびOS X                         |
| Caps lock key mask     | 倍長整数 | 1024  | WindowsおよびOS X                         |
| Command key bit        | 倍長整数 | 8     | WindowsでのCtrlキー、OS XでのCommandキー        |
| Command key mask       | 倍長整数 | 256   | WindowsでのCtrlキー、OS XでのCommandキー        |
| Control key bit        | 倍長整数 | 12    | OS XでのCtrlキー、あるいはWindowsおよびOS Xでの右クリック |
| Control key mask       | 倍長整数 | 4096  | OS XでのCtrlキー、あるいはWindowsおよびOS Xでの右クリック |
| Mouse button bit       | 倍長整数 | 7     |                                        |
| Mouse button mask      | 倍長整数 | 128   |                                        |
| Option key bit         | 倍長整数 | 11    | Alt キー(OS XではOptionキーとも呼ばれます)          |
| Option key mask        | 倍長整数 | 2048  | Alt キー(OS XではOptionキーとも呼ばれます)          |
| Right control key bit  | 倍長整数 | 15    |                                        |
| Right control key mask | 倍長整数 | 32768 |                                        |
| Right option key bit   | 倍長整数 | 14    |                                        |
| Right option key mask  | 倍長整数 | 16384 |                                        |
| Right shift key bit    | 倍長整数 | 13    |                                        |
| Right shift key mask   | 倍長整数 | 8192  |                                        |
| Shift key bit          | 倍長整数 | 9     | WindowsおよびOS X                         |
| Shift key mask         | 倍長整数 | 512   | WindowsおよびOS X                         |

例えば、Shift キーをシミュレートするには Shift key bit を渡します。

引数 *process* を指定すると、 イベントは、*process* に渡したプロセス番号を持つプロセスへと送られます。 0 (ゼロ) を渡したり、この引数を省略すると、イベントはアプリケーションレベルに送られます。そして、4Dスケジューラーがそれを適切なプロセスにディスパッチします。

#### 参照 

[POST CLICK](post-click.md)  
[POST KEY](post-key.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 467 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


