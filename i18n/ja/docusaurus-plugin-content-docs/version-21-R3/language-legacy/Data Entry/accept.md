---
id: accept
title: ACCEPT
slug: /commands/accept
displayed_sidebar: docs
---

<!--REF #_command_.ACCEPT.Syntax-->**ACCEPT**<!-- END REF-->
<!--REF #_command_.ACCEPT.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

## 説明 

**ACCEPT** コマンドは以下の目的で、フォームメソッドまたはオブジェクトメソッド（またはサブルーチン）で使用されます：

* [ADD RECORD](../commands/add-record)、[MODIFY RECORD](../commands/modify-record)、*\_o\_ADD SUBRECORD*、*\_o\_MODIFY SUBRECORD* を使用して開始されたレコードやサブレコードのデータ新規あるいは更新入力を受け入れる。
* [DIALOG](../commands/dialog) コマンドで表示されたフォームを受け入れる。
* [DISPLAY SELECTION](../commands/display-selection) や [MODIFY SELECTION](../commands/modify-selection) でレコードセレクションを表示したフォームを閉じる。

<!--REF #_command_.ACCEPT.Summary-->**ACCEPT** はユーザがEnterキーを押したのと同じ動作をします。フォームが受け入れられると、OKシステム変数に1が設定されます<!-- END REF-->

**ACCEPT** は一般的にメニューコマンド選択結果として実行されます。また**ACCEPT** は"アクションなし"ボタンのオブジェクトメソッドで使用されます。

また[Open window](../commands/open-window) コマンドのオプションのクローズボックスメソッドでもしばしば使用されます。ウィンドウ上にコントロールメニューボックスがあれば、コントロールメニューボックスをクリックまたは閉じるメニューコマンドが選択されたときに実行されるメソッド中で**ACCEPT** または[CANCEL](../commands/cancel) を呼び出すことができます。

**ACCEPT** を実行待ちのキューに追加することはできません。イベントへのレスポンスとしてメソッド中で2つの**ACCEPT** コマンドを実行しても、1回実行したのと同じ効果しかありません。

### ヘッドレスモード 

**ACCEPT** コマンドは、*VP Run offscreen area* あるいは [WA Run offscreen area](../commands/wa-run-offscreen-area) で作成されたオフスクリーンエリアのコンテキストならば、ヘッドレスモードでも使用ができます。

## 参照 

[CANCEL](../commands/cancel)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 269 |
| スレッドセーフである | no |
| システム変数を更新する | OK |



