---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE コマンドは、現在表示されているフォームページから前のフォームページに移動します。<!-- END REF-->フォームが表示されていない、または[FORM LOAD](../commands/form-load.md) コマンドによってロードされてない場合や、すでに先頭のフォームページが表示されている場合、FORM PREVIOUS PAGE コマンドは何も行いません。

#### 例題 

以下の例は、メニューから呼び出される1行のメソッドです。これは、前のフォームページを表示します:

```4d
 FORM PREVIOUS PAGE
```

#### 参照 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 249 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


