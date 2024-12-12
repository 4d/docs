---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ACCEPT.Summary-->**ACCEPT** コマンドは以下の目的で、フォームメソッドまたはオブジェクトメソッド（またはサブルーチン）で使用されます：

* [ADD RECORD](add-record.md)、[MODIFY RECORD](modify-record.md)、*\_o\_ADD SUBRECORD*、*\_o\_MODIFY SUBRECORD* を使用して開始されたレコードやサブレコードのデータ新規あるいは更新入力を受け入れる。<!-- END REF-->
* [DIALOG](dialog.md) コマンドで表示されたフォームを受け入れる。
* [DISPLAY SELECTION](display-selection.md) や [MODIFY SELECTION](modify-selection.md) でレコードセレクションを表示したフォームを閉じる。

**ACCEPT** はユーザがEnterキーを押したのと同じ動作をします。フォームが受け入れられると、OKシステム変数に1が設定されます。

**ACCEPT** は一般的にメニューコマンド選択結果として実行されます。また**ACCEPT** は"アクションなし"ボタンのオブジェクトメソッドで使用されます。

また[Open window](open-window.md) コマンドのオプションのクローズボックスメソッドでもしばしば使用されます。ウィンドウ上にコントロールメニューボックスがあれば、コントロールメニューボックスをクリックまたは閉じるメニューコマンドが選択されたときに実行されるメソッド中で**ACCEPT** または[CANCEL](cancel.md) を呼び出すことができます。

**ACCEPT** を実行待ちのキューに追加することはできません。イベントへのレスポンスとしてメソッド中で2つの**ACCEPT** コマンドを実行しても、1回実行したのと同じ効果しかありません。

##### ヘッドレスモード 

**ACCEPT** コマンドは、*VP Run offscreen area* あるいは [WA Run offscreen area](wa-run-offscreen-area.md) で作成されたオフスクリーンエリアのコンテキストならば、ヘッドレスモードでも使用ができます。

#### 参照 

[CANCEL](cancel.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 269 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


