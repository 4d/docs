---
id: get-menu-items
title: GET MENU ITEMS
slug: /commands/get-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEMS.Syntax-->**GET MENU ITEMS** ( *menu* ; *menuTitlesArray* ; *menuRefsArray* )<!-- END REF-->
<!--REF #_command_.GET MENU ITEMS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | メニュー参照またはメニュー番号 |
| menuTitlesArray | Text array | &#8592; | メニュータイトル配列 |
| menuRefsArray | Text array | &#8592; | メニュー参照配列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET MENU ITEMS.Summary-->GET MENU ITEMS コマンドは、*menu*引数で指定したメニューまたはメニューバーのタイトルとIDを*menuTitlesArray* と *menuRefsArray* 配列に返します。<!-- END REF-->

*menu* 引数にはメニュー参照 ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu"))、メニューバー番号、または[Get menu bar reference](get-menu-bar-reference.md "Get menu bar reference") コマンドを使用して取得したメニューバー参照を渡します。

項目にメニュー参照が割り当てられていない場合、対応する配列要素には空の文字列が返されます。

#### 例題 

カレントプロセスのメニューバーの内容を取得します: 

```4d
 ARRAY TEXT(menuTitlesArray;0)
 ARRAY TEXT(menuRefsArray;0)
 MenuBarRef:=Get menu bar reference(Frontmost process)
 GET MENU ITEMS(MenuBarRef;menuTitlesArray;menuRefsArray)
```
