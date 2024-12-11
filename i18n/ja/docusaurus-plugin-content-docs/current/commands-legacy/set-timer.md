---
id: set-timer
title: SET TIMER
slug: /commands/set-timer
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMER.Syntax-->**SET TIMER** ( *tickCount* )<!-- END REF-->
<!--REF #_command_.SET TIMER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tickCount | Integer | &#8594;  | Tickcount または -1=すぐに実行する |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET TIMER.Summary-->**SET TIMER** コマンドは、On Timerフォームイベントを有効にし、カレントプロセスのカレントフォームでOn Timerフォームイベント間の間隔Tick数を設定します。<!-- END REF--> 

**Note:** このフォームイベントに関する詳細は、[Form event code](../commands/form-event-code.md) コマンドの説明を参照してください。

このコマンドをフォームを表示していないコンテキストで呼び出しても、効果はありません。

**Note:** **SET TIMER** コマンドがサブフォームのコンテキスト (サブフォームメソッド) で呼び出されると、On Timer イベントは親フォームレベルではなくサブフォームで生成されます。

*tickCount* 引数に-1を渡すと、コマンドはOn Timer フォームイベントを即座に有効にします。言い換えれば、4Dアプリケーションがイベントマネージャにコントロールを渡し次第ということです。特にこれは、処理の開始前にフォームが完全に表示されることを意味します。

On Timerフォームイベントの生成を取り消すには、*tickCount*に0をセットした**SET TIMER** をもう一度実行してください。

#### 例題 

フォームが画面に表示されている時に、コンピュータが3秒毎に警告音を鳴らすようにしたいと仮定します。これを実行するには、下記のようにフォームメソッドを書きます:

```4d
 If(Form event code=On Load)
    SET TIMER(60*3)
 End if
 
 If(Form event code=On Timer)
    BEEP
 End if
```

#### 参照 

[Form event code](../commands/form-event-code.md)  
[REDRAW](redraw.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 645 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


