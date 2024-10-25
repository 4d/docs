---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FORM FIRST PAGE.Summary-->FORM FIRST PAGE コマンドは、現在表示されているフォームページを先頭のフォームページに変更します。<!-- END REF-->フォームが表示されていない、または[FORM LOAD](form-load.md) コマンドによってロードされてない場合や、すでに最初のフォームページが表示されている場合、FORM FIRST PAGE コマンドは何も行いません。

#### 例題 

以下の例は、メニューから呼び出される1行のメソッドです。これは、先頭のフォームページを表示します:

```4d
 FORM FIRST PAGE
```

#### 参照 

[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  