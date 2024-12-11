---
id: wa-get-page-title
title: WA Get page title
slug: /commands/wa-get-page-title
displayed_sidebar: docs
---

<!--REF #_command_.WA Get page title.Syntax-->**WA Get page title** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get page title.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Text | &#8592; | 現在のページのタイトル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Get page title.Summary-->WA Get page title コマンドは、*\** と *object* 引数で指定したWebエリアの現在のページまたは表示されているページのタイトルを返します。<!-- END REF-->タイトルはHTMLのtitleタグに対応します。

現在のURLでタイトルが利用できない場合、このコマンドは空の文字列を返します。

#### 参照 

[WA Get page content](wa-get-page-content.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1036 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


