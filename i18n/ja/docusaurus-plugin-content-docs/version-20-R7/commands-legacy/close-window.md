---
id: close-window
title: CLOSE WINDOW
slug: /commands/close-window
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE WINDOW.Syntax-->**CLOSE WINDOW** {( *window* )}<!-- END REF-->
<!--REF #_command_.CLOSE WINDOW.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| window | Integer | &#8594;  | ウィンドウ参照番号, または 省略した場合、カレントプロセスの最前面ウィンドウ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLOSE WINDOW.Summary-->CLOSE WINDOW はカレントプロセスで[Open window](open-window.md "Open window") や [Open form window](open-form-window.md "Open form window") コマンドで開かれたアクティブウィンドウを閉じます。<!-- END REF-->カスタムウィンドウが開かれていない場合、CLOSE WINDOWは効果を持ちません (システムウィンドウは閉じられません)。CLOSE WINDOW はウィンドウ中でフォームがアクティブであるときに呼び出されても効力を持ちません。CLOSE WINDOWは[Open window](open-window.md "Open window") や [Open form window](open-form-window.md "Open form window") で開いたウィンドウの利用が終了したときに呼び出します。

[Open window](open-window.md "Open window")や[Open form window](open-form-window.md "Open form window")で事前に開いたウィンドウを閉じる際には、CLOSE WINDOWにウィンドウ参照番号を渡す必要はありません。CLOSE WINDOWは常にこれらのコマンドで開いた最後のウィンドウを閉じます。

*WinRef*には外部ウィンドウ参照番号を渡すことができます。この引数を渡すと指定した外部ウィンドウが閉じられます。外部ウィンドウに関する詳細は*Open external window*を参照してください。

#### 例題 

以下の例題はフォームウィンドウを開き、[ADD RECORD](add-record.md) コマンドでレコードを追加します。処理が終了したら**CLOSE WINDOW** でウィンドウを閉じます:

```4d
 FORM SET INPUT([Employees];"Entry")
 $winRef:=Open form window([Employees];"Entry")
 Repeat
    ADD RECORD([Employees]) //新規従業員レコードを追加
 Until(OK=0) //キャンセルされるまでループ
 CLOSE WINDOW //ウィンドウを閉じる
```

#### 参照 

[Open form window](open-form-window.md)  
[Open window](open-window.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 154 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


