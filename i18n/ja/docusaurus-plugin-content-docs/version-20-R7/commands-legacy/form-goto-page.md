---
id: form-goto-page
title: FORM GOTO PAGE
slug: /commands/form-goto-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM GOTO PAGE.Syntax-->**FORM GOTO PAGE** ( *pageNumber* {; *} )<!-- END REF-->
<!--REF #_command_.FORM GOTO PAGE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pageNumber | Integer | &#8594;  | 表示するフォームページ |
| * | 演算子 | &#8594;  | カレントサブフォームのページを変更 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.FORM GOTO PAGE.Summary-->**FORM GOTO PAGE**コマンドは、現在表示されているフォームページを*pageNumber*で指定したフォームページに変更します。<!-- END REF--> 

フォームが表示されていない場合や[FORM LOAD](form-load.md) コマンドによってフォームがロードされていない場合、または*pageNumber* が現在のページである場合、**FORM GOTO PAGE**コマンドは何も行いません。*pageNumber*がフォームページ数よりも大きければ、最終ページを表示します。*pageNumber* に1未満の数が指定されると、先頭のフォームページを表示します。

*\** 引数は、複数のページを含むサブフォームタイプのページのコンテキストでコマンドが呼び出される場合に使用します。この場合、この引数を渡すと、コマンドは (コマンドを呼び出した) カレントサブフォームのページを変更します。*\** が省略された場合、デフォルトでコマンドは常に親フォームに適用されます。

##### フォームページ管理コマンドについて 

標準アクションボタンは[FORM FIRST PAGE](form-first-page.md)、[FORM LAST PAGE](form-last-page.md)、[FORM NEXT PAGE](form-next-page.md)、[FORM PREVIOUS PAGE](form-previous-page.md)そして**FORM GOTO PAGE**と同じ動作を行い、タブコントロールやドロップダウンリストなどのオブジェクトに割り当てることができます。可能な限り、コマンドの代わりに標準アクションボタンを使用してください。 

ページコマンドは入力フォーム、もしくはダイアログウインドウに表示されているフォームに使用できます。出力フォームは最初のページのみを使います。フォームには、常に少なくとも最初の1ページが含まれます。フォームのページ数にかかわらず、各フォーム対するフォームメソッドは1つのみという点に留意してください。

表示されているページを確認するときは[FORM Get current page](form-get-current-page.md)コマンドを使用してください。

**注:** フォームのデザインは１ページからXページについて、また0ページ（0ページに配置されたオブジェクトはすべてのページに表示される）について作業を行うことができます。フォームを使用してページコマンドを呼び出した場合、1ページからXページについての作業を行うことになります。0ページ目は自動的に表示されているページと組み合わされます。

#### 例題 

以下の例はボタンのオブジェクトメソッドです。これは指定したフォームページ3を表示します: 

```4d
 FORM GOTO PAGE(3)
```

#### 参照 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  