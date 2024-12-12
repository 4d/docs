---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | カレントプリンター名 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get current printer.Summary-->**Get current printer** コマンドは、4Dアプリケーションに定義されたカレントプリンター名を返します。<!-- END REF-->デフォルトで4Dの起動時には、システムで定義されたプリンターがカレントプリンターとなります。

プリントサーバー (スプーラー) を使用してカレントプリンターを管理している場合、完全なアクセスパス (Windows) またはスプーラーの名前 (macOS) が返されます。

使用できるプリンターの一覧および追加情報を取得するには[PRINTERS LIST](printers-list.md)コマンドを使用します。カレントプリンタを変更するには、[SET CURRENT PRINTER](set-current-printer.md)を使用します。

**注:** [SET CURRENT PRINTER](set-current-printer.md) で Generic PDF driver のオプションを有効にしている場合、[Get current printer](get-current-printer.md) コマンドの戻り値は "\_4d\_pdf\_printer" または実際の PDF ドライバーの名称です。

#### エラー管理 

プリンターがインストールされていなければ、エラーが生成されます。

#### 参照 

[PRINTERS LIST](printers-list.md)  
[SET CURRENT PRINTER](set-current-printer.md)  