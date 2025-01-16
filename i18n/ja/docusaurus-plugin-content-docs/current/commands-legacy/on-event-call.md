---
id: on-event-call
title: ON EVENT CALL
slug: /commands/on-event-call
displayed_sidebar: docs
---

<!--REF #_command_.ON EVENT CALL.Syntax-->**ON EVENT CALL** ( *eventMethod* {; *processName*} )<!-- END REF-->
<!--REF #_command_.ON EVENT CALL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| eventMethod | Text | &#8594;  | 発動されるイベントメソッド, または 空の文字の場合イベントの遮断を停止 |
| processName | Text | &#8594;  | プロセス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ON EVENT CALL.Summary-->**ON EVENT CALL** コマンドは、イベントを検知するメソッドである*eventMethod*をインストールします。<!-- END REF-->このメソッドは、**イベント処理メソッド**または**イベントキャッチメソッド**と呼ばれます。

**Tip:** このコマンドの使用には、上級のプログラミング知識が必要です。通常、イベントを用いて作業を実行する際に、**ON EVENT CALL** コマンドを使用する必要はありません。フォームの使用において、イベントは4Dによって管理され、適切なフォームやオブジェクトにイベントが送信されます。

**Tip:** [MOUSE POSITION](mouse-position.md)や[Shift down](shift-down.md)等のコマンドを使用して、イベントに関する情報を取得できます。これらのコマンドをオブジェクトメソッドでコールし、オブジェクトに関連するイベントについての必要な情報を取得することができます。これらのコマンドにより、**ON EVENT CALL** コマンドをもとにしたアルゴリズムを作成する必要がなくなります。

このコマンドのスコープは、現在の作業セッションです。デフォルトで、別々のローカルプロセス内でメソッドが実行されます。いちどに1つのイベント処理メソッドだけを使用できます。メソッドを用いたイベントの検知を中止するには、*eventMethod*に空の文字列を指定して再度**ON EVENT CALL** コマンドをコールします。

イベント管理メソッドは別プロセスとして実行されるため、4Dメソッドが1つも実行されなくても、常にアクティブになります。インストール後はイベ ントが発生するたびに4Dがイベント処理メソッドを呼び出します。管理できるイベントは、マウスボタンのクリックとキーボードからの入力です。

オプションの*processName*引数は、**ON EVENT CALL** コマンドで作成されるプロセスの名前です。*processName*の先頭にドル記号 ($) を付けるとローカルプロセスが開始されます。通常はこのローカルプロセスを使用します。*processName*引数を省略した場合、デフォルトで4Dは$イベントマネージャーという名前のプロセスを作成します。

**警告:** イベント処理メソッドで実行する処理については十分注意してください。イベントを発生させるコマンドはコールしないでください。このようなコマンドをコー ルした場合、イベント処理メソッドの実行から抜けるのが非常に困難になります。**Ctrl+Shift+Backspace**（Windows）または **Command-Shift-Control-Backspace**（Macintosh）キーにより、イベントマネージャープロセスを終了させることができます。イベント管理が正常な動作ではなくなった場合に、この手法を利用して回復することが可能です。

イベント処理メソッドでは以下のシステム変数を読み取ることができます: MouseDown, KeyCode, Modifiers, MouseX, MouseY, そして MouseProc。これらの変数がプロセス変数であるという点に注意してください。したがって、変数のスコープはイベント処理プロセス内です。別のプロセスでこれらの値が必要な場合、インタープロセス変数へコピーしてください。

* システム変数MouseDownには、イベントがマウスクリックである場合には1が、それ以外の場合には0が代入されます。
* システム変数KeyCodeには、押されたキーのコードが代入されます。この変数は文字コードまたはファンクションキーコードを返します。これらのコードは*Unicodeコード*、[EXPORT TEXT](export-text.md)(さらにそのサブセクション)、および*ファンクションキーコード*の節にリストがあります。4Dは主要な文字コードとファンクションキーコードにたいして定義済みの定数があります。エクスプローラウィンドウでこれらの定数のテーマを参照してください。
* システム変数Modifiersには、モデファイアキーの値が入ります。システム変数Modifiersはイベントが発生した時点でモディファイアキーが押されていたかどうかを示します。検知できるのは以下のキーです:  

| **プラットフォーム** | モディファイア                                                        |  
| ------------ | -------------------------------------------------------------- |  
| Windows      | Shift キー, Caps Lock, Alt キー, Ctrl キー                           |  
| Macintosh    | Shift キー, Caps Lock, Alt(あるいはOption)キー, Command キー, Control キー |  
    
モディファイアキーはそれ単体では何もイベントを生成しません。Modifiers変数はビットフィールドを格納する倍長整数です。4Dはそれぞれのモディファイアキーに対しビットポジションやビットマスクを指定する既定の定数を用意しています。例えば、イベントに対してShiftキーが押されたかどうかを検知するときには、以下のように書くか:  
```4d  
 If(Modifiers?? Shift key bit) //Shitキーが押されたか  
```  
    
あるいは以下のように書く事ができます:  
```4d  
 If((Modifiers&Shift key mask)#0) //Shitキーが押されたか  
```  
    
テストしたいモディファイアキーとプラットフォームに応じて、以下の定数のいずれか一つを使用する事ができます。これらの定数は*Events (Modifiers)*テーマにあります:  

| **モディファイア**               | **定数**                                 |  
| ------------------------- | -------------------------------------- |  
| Shift                     | Shift key bit / Shift key mask         |  
| Caps Lock                 | Caps lock key bit / Caps lock key mask |  
| Alt (OS XではOptionとも呼ばれます) | Option key bit / Option key mask       |  
| WindowsでのCtrl             | Command key bit / Command key mask     |  
| OS XでのCtrl                | Control key bit / Control key mask     |  
| OS XでのCommand             | Command key bit / Command key mask     |  
| 右クリック                     | Control key bit / Control key mask     |
* シテム変数MouseXとMouseYには、マウスがクリックされた時の座標位置が入ります。この位置は、クリックが発生したウインドウのローカル座標システムを用いて表現されます。ウインドウの左上隅の位置が0.0です。これらはマウスクリックした場合にのみ有効です。
* システム変数MouseProcには、イベント(マウスクリック)が発生したプロセスのプロセス参照番号が入ります。
**重要**: システム変数MouseDown、KeyCode、Modifiers、MouseX、MouseY、and MouseProcには、**ON EVENT CALL**コマンドでインストールされたイベント処理メソッド内でのみ意味を持つ値が納められます。

#### 例題 

次の例は、ユーザがCtrl+ピリオド（Windows）またはCommand+ピリオド（Macintosh）を押したら、印刷を中止します。ま ず、イベント処理メソッドをインストールします。次にユーザにメッセージを表示して、印刷を中止できることを知らせます。イベント処理メソッド内でイン タープロセス変数*<>vbWeStop*にTrueが代入されると、既に印刷されたレコードの数をユーザに知らせます。最後にイベント処理メソッドをクリアします:

```4d
 PAGE SETUP
 If(OK=1)
    <>vbWeStop:=False
    ON EVENT CALL("EVENT HANDLER") // イベント処理メソッドをインストール
    ALL RECORDS([People])
    MESSAGE("中断するにはCtrl+ピリオドを押す")
    $vlNbRecords:=Records in selection([People])
    For($vlRecord;1;$vlNbRecords)
       If(<>vbWeStop)
          ALERT("Printing cancelled at record "+String($vlRecord)+" of "+String($vlNbRecords))
          $vlRecord:=$vlNbRecords+1
       Else
          Print form([People];"Special Report")
       End if
    End for
    PAGE BREAK
    ON EVENT CALL("") // イベント処理メソッドをアンインストール
 End if
```

Ctrl+ピリオドが押されると、イベント処理メソッド内で*<>vbWeStop*がTrueに設定されます:

```4d
  // EVENT HANDLER project method
 If((Modifiers?? Command key bit) & (KeyCode=Period))
    CONFIRM("Are you sure?")
    If(OK=1)
       <>vbWeStop:=True
       FILTER EVENT // この呼び出しを忘れないでください。そうでないと、4Dもこのイベントを受け取ります
    End if
 End if
```

この例題では、ON EVENT CALLが使用されている点に注意してください。これは、ループで*PAGE SETUP*、[PRINT FORM](../commands/print-form.md "PRINT FORM")、[PAGE BREAK](page-break.md "PAGE BREAK")コマンドを使い、特別な印刷用レポートを生成しているためです。

[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドを使ってレポートを印刷する場合、ユーザに印刷を中断させるようなイベント処理を実行する必要はありません。この処理は[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドにより自動的に行われます。

#### 参照 

[FILTER EVENT](filter-event.md)  
[MOUSE POSITION](mouse-position.md)  
[Method called on event](method-called-on-event.md)  
[Shift down](shift-down.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 190 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


