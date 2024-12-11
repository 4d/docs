---
id: form-get-current-page
title: FORM Get current page
slug: /commands/form-get-current-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM Get current page.Syntax-->**FORM Get current page** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.FORM Get current page.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | カレントサブフォームページ番号を返す |
| 戻り値 | Integer | &#8592; | 現在表示されているページ番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM Get current page.Summary-->**FORM Get current page**コマンドは、現在表示されているフォームページ、または[FORM LOAD](../commands/form-load.md) コマンドによってロードされたカレントフォームの番号を返します。<!-- END REF-->

*\** 引数は、複数のページを含むサブフォームタイプのページのコンテキストでコマンドが呼び出される場合に使用します。この場合、この引数を渡すと、コマンドは (コマンドを呼び出した) カレントサブフォームのページを変更します。*\** が省略された場合、デフォルトでコマンドは常に親フォームに適用されます。

#### 例題 

フォームにおいて、メニューバーから任意のメニューを選択、またはそのフォームが別プロセスからの呼び出しを受信した場合に、現在表示されているフォームページに応じて異なる動作を実行することができます。この例を以下に示します: 

```4d
  // [myTable];"myForm" フォームメソッド
 Case of
    :(Form event code=On Load) //v17 以前はForm eventを使用すること
  // ...
    :(Form event code=On Unload) //v17 以前はForm event を使用すること
  // ...
    :(Form event code=On Menu Selected) //v17 以前はForm event を使用すること
       $vlMenuNumber:=Menu selected>>16
       $vlItemNumber:=Menu selected & 0xFFFF
       Case of
          :($vlMenuNumber=...)
             Case of
                :($vlItemNumber=...)
                :(FORM Get current page=1)
  // ページ 1のアクション
                :(FORM Get current page=2)
  // ページ 2のアクション
  // ...
                :($vlItemNumber=...)
  // ...
             End case
          :($vlMenuNumber=...)
  // ...
       End case
    :(Form event code=On Outside Call) //v17 以前はForm event を使用すること
       Case of
          :(FORM Get current page=1)
  // ページ 1のアクション
          :(FORM Get current page=2)
  // ページ 2のアクション
       End case
  // ...
 End case
```

#### 参照 

[FORM FIRST PAGE](form-first-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM LAST PAGE](form-last-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 276 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


