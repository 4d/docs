---
id: cancel
title: CANCEL
slug: /commands/cancel
displayed_sidebar: docs
---

<!--REF #_command_.CANCEL.Syntax-->**CANCEL**<!-- END REF-->
<!--REF #_command_.CANCEL.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2003|変更|
|<6|初出|

</details>
</div>

## 説明 

**CANCEL** コマンドは以下の目的で、フォームあるいはオブジェクトメソッド (またはそこから呼ばれるサブルーチンで) 使用されます:

* [ADD RECORD](../commands/add-record) 、[MODIFY RECORD](../commands/modify-record) を使用して開始されたレコードのデータ新規あるいは更新入力をキャンセルする。
* [DIALOG](../commands/dialog) コマンドで表示されたフォームをキャンセルする。
* [DISPLAY SELECTION](../commands/display-selection) や [MODIFY SELECTION](../commands/modify-selection) でレコードセレクションを表示したフォームを閉じる。
* [Print form](../commands/print-form) コマンドで印刷されようとしているフォームの印刷をキャンセルする (後述)。

<!--REF #_command_.CANCEL.Summary-->データ入力のコンテキストで、**CANCEL** はキャンセルキー (**Esc**) を押したのと同じ動作をします。<!-- END REF-->

**CANCEL** は一般的にメニューコマンド選択結果として実行されます。また**CANCEL** は"アクションなし"ボタンのオブジェクトメソッドで使用されます。

また[Open window](../commands/open-window) コマンドのオプションのクローズボックスメソッドでもしばしば使用されます。ウィンドウ上にコントロールメニューボックスがあれば、コントロールメニューボックスをクリックまたは閉じるメニューコマンドが選択されたときに実行されるメソッド中で[ACCEPT](../commands/accept) または **CANCEL** を呼び出すことができます。

**CANCEL** を実行待ちのキューに追加することはできません。イベントへのレスポンスとしてメソッド中で2つの**CANCEL** コマンドを実行しても、1回実行したのと同じ効果しかありません。

最後に、このコマンドは[Print form](../commands/print-form) コマンド使用時にOn Printing Detail フォームイベントで使用できます。このコンテキストでは、**CANCEL** コマンドは印刷しようとしていたフォームの印刷を一時的に停止し、次のページから再開します。このメカニズムは印刷スペースがなくなったときや、ページブレークが必要な時に使用できます。

**Note:** この処理はすべての印刷待ちフォームをキャンセルする[PAGE BREAK](../commands/page-break)(\*) コマンドとは動作が異なります。

### ヘッドレスモード 

**CANCEL** コマンドは、*VP Run offscreen area* あるいは [WA Run offscreen area](../commands/wa-run-offscreen-area) で作成されたオフスクリーンエリアのコンテキストならば、ヘッドレスモードでも使用ができます。

## 例題 

[SET PRINT MARKER](set-print-marker.md "SET PRINT MARKER")の例題を参照 

## システム変数およびセット 

CANCELコマンドが実行される (フォームや印刷がキャンセルされた) とシステム変数OKは0に設定されます。

## 参照 

[ACCEPT](../commands/accept)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 270 |
| スレッドセーフである | no |
| システム変数を更新する | OK |



