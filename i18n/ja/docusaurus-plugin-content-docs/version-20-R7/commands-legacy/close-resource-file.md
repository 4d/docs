---
id: close-resource-file
title: CLOSE RESOURCE FILE
slug: /commands/close-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE RESOURCE FILE.Syntax-->**CLOSE RESOURCE FILE** ( *resFile* )<!-- END REF-->
<!--REF #_command_.CLOSE RESOURCE FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resFile | Time | &#8594;  | リソースファイル参照番号 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.CLOSE RESOURCE FILE.Summary-->**CLOSE RESOURCE FILE**コマンドは、引数*resFile*に渡された参照番号を持つリソースファイルを閉じます。<!-- END REF-->

何度も同じリソースファイルを開いても、そのリソースファイルを閉じるには**CLOSE RESOURCE FILE**コマンドを1回呼び出すだけで済みます。

4Dアプリケーションやデータベースリソースファイルに**CLOSE RESOURCE FILE**コマンドを適用しても、このコマンドはそれを検知し何も行いません。

無効なリソースファイル参照番号を渡すと、このコマンドは何も行いません。

[Open resource file](open-resource-file.md)を使って開いたリソースファイルに対し、**CLOSE RESOURCE FILE**コマンドを呼び出すことを忘れないでください。また、アプリケーションを終了する (または他のデータベースを開く) 場合、4Dは開かれたリソースファイルを自動的に閉じる点にも注目してください。

#### 参照 

[Open resource file](open-resource-file.md)  