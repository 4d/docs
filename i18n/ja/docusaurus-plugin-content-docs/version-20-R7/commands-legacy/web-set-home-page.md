---
id: web-set-home-page
title: WEB SET HOME PAGE
slug: /commands/web-set-home-page
displayed_sidebar: docs
---

<!--REF #_command_.WEB SET HOME PAGE.Syntax-->**WEB SET HOME PAGE** ( *homePage* )<!-- END REF-->
<!--REF #_command_.WEB SET HOME PAGE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| homePage | Text | &#8594;  | ページの名前またはページへのHTMLアクセスパス または、""でカスタムホームページを送らない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SET HOME PAGE.Summary-->**WEB SET HOME PAGE**コマンドを使用して、現在のWebプロセス用のカスタムホームページを変更します。<!-- END REF-->

定義されたページはWebプロセスとリンクしています。そのため、例えば、接続されているユーザーごとに異なるホームページを定義することができます。このページは、静止画でも動画を含んでいても構いません。 

HTMLホームページの名前、またはそのページのHTMLアクセスパスを引数 *homePage* に渡します。

**注:** 引数で指定されたページがWebプロセスが最初にアクセスしたときに存在していない場合、Webサーバーは、デフォルトホームページのコンテンツでそのページを作成します( を参照して下さい)。

現在のWebプロセスのホームページとして *homePage* の使用を停止するには、*homePage* に空の文字列 ("") を渡して**WEB SET HOME PAGE**コマンドを実行します。

**注:** Webサーバーのデフォルトホームページはデータベース設定ダイアログボックスで定義できます。
