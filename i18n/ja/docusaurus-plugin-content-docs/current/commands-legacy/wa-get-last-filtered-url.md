---
id: wa-get-last-filtered-url
title: WA Get last filtered URL
slug: /commands/wa-get-last-filtered-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get last filtered URL.Syntax-->**WA Get last filtered URL** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get last filtered URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Text | &#8592; | 最後にフィルタされたURL |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Get last filtered URL.Summary-->WA Get last filtered URL コマンドは、*\** と *object* 引数で指定したWebエリアで、最後にフィルタされたURLを返します。<!-- END REF-->

URLは以下のいずれかの理由でフィルタされることがあります:

* URLがフィルタにより拒否された ([WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS") コマンド)。
* デフォルトブラウザでリンクが開かれる ([WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md "WA SET EXTERNAL LINKS FILTERS") コマンド)。
* URLがポップアップウィンドウを開こうとしている。

フィルタされたURLを知るためには、On URL Filtering、On Open External Link、そしてOn Window Opening Deniedフォームイベントのコンテキストでこのコマンドを呼び出すことをお勧めします。

#### 参照 

[WA GET EXTERNAL LINKS FILTERS](wa-get-external-links-filters.md)  
[WA GET URL FILTERS](wa-get-url-filters.md)  
[WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md)  
[WA SET URL FILTERS](wa-set-url-filters.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1035 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


