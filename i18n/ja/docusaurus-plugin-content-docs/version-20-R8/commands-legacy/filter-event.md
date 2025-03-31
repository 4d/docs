---
id: filter-event
title: FILTER EVENT
slug: /commands/filter-event
displayed_sidebar: docs
---

<!--REF #_command_.FILTER EVENT.Syntax-->**FILTER EVENT**<!-- END REF-->
<!--REF #_command_.FILTER EVENT.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FILTER EVENT.Summary-->**FILTER EVENT** コマンドは、[ON EVENT CALL](on-event-call.md) コマンドでインストールされたイベント処理プロジェクトメソッドから呼び出されます。<!-- END REF-->

イベント処理メソッドで**FILTER EVENT** を呼び出すと、カレントイベントが4Dに渡されなくなります。

このコマンドを使用すると、イベントキューからカレントイベント（クリック、キー入力）を取り除くことができます。したがって、4Dはイベント処理プロジェクトメソッド内で発生したイベントに対してそれ以上の処理は行いません。

**警告:** **FILTER EVENT** コマンドを呼び出すだけのイベント処理メソッドを作成しないようにしてください。そのようにするとすべてのイベントが4Dから無視されるためです。**FILTER EVENT** コマンドだけのイベント処理メソッドがある場合には、Ctrl+Shift+Alt+Backspace (Windows) またはCommand-Option-Shift-Control-Backspace (Macintosh) キーを押します。これにより、On Event Callプロセスがイベントをまったく受け取らない通常のプロセスに切り替わります。

**特別なケース:** フォームが[DISPLAY SELECTION](display-selection.md) や [MODIFY SELECTION](modify-selection.md) で表示されているとき、**FILTER EVENT** コマンドを標準の出力フォームメソッドで使用できます。この特別なケースでは、**FILTER EVENT** コマンドを使用してレコード上でのダブルクリックをフィルタすることができます（また、この方法でページモードでのレコードオープン以外の動作を実行します）。これを行うには、出力フォームメソッドに次の行を追加します:

```4d
 If(Form event code=On Double Clicked)
    FILTER EVENT
    ... //ダブルクリックを処理する
 End if
```

#### 例題 

[ON EVENT CALL](on-event-call.md "ON EVENT CALL")コマンドの例題を参照.

#### 参照 

[ON EVENT CALL](on-event-call.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 321 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


