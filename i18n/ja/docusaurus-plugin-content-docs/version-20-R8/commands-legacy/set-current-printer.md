---
id: set-current-printer
title: SET CURRENT PRINTER
slug: /commands/set-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.SET CURRENT PRINTER.Syntax-->**SET CURRENT PRINTER** ( *printerName* )<!-- END REF-->
<!--REF #_command_.SET CURRENT PRINTER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| printerName | Text | &#8594;  | 使用されるプリンター名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET CURRENT PRINTER.Summary-->**SET CURRENT PRINTER** コマンドは現行の4Dアプリケーションでの印刷に使用するプリンターを指定するために使用します。<!-- END REF-->

*printerName* に選択するプリンター名を渡します。使用できるプリンターの一覧を取得するには、このコマンドの前に [PRINTERS LIST](printers-list.md) コマンドを使用します。  
*printerName* に空の文字列を渡すと、システムに定義されたカレントプリンターが使用されます。

また*Print Options* テーマ内の以下の定数を渡すことで、プラットフォームに関係なく汎用的なPDF プリンターを自動的に指定することができます:

| 定数                 | 値                  | コメント                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generic PDF driver | \_4d\_pdf\_printer | OS X上では、デフォルトドライバーをカレントプリンターに設定します。このドライバーは表示されず、[PRINTERS LIST](printers-list.md)によって返される一覧にも含まれていません。PDF文書のパスは[SET PRINT OPTION](set-print-option.md)を使って設定しなければならず、そうでない場合はエラー3107が返されます。 Windows上では、Windows PDFドライバー("Microsoft Print to PDF"という名前)をカレントプリンターに設定します。この定数はPDFオプションが有効化されているWindows 10でのみ有効です。他のバージョンのWindowsやPDFドライバーが使用できないWindowsでは、このコマンドは何もせず、*OK*変素は0に設定されます。 |

**SET CURRENT PRINTER** コマンドは、利用可能なオプションが選択したプリンタに対応するように、必ず [SET PRINT OPTION](set-print-option.md) コマンドよりも前に呼び出してください。それに対し、**SET CURRENT PRINTER** コマンドは、*\_o\_PAGE SETUP* コマンドの後で呼び出さなければなりません。これを行わないと、印刷設定が失われます。

このコマンドは [PRINT SELECTION](print-selection.md)、[PRINT RECORD](print-record.md)、[Print form](../commands/print-form.md)、および [QR REPORT](qr-report.md) コマンドと一緒に使用することができ、デザインモードを含め、4Dにおけるすべての印刷に対して適用されます。  
指定した設定が失われないようにするには、必要に応じて印刷コマンドは必ず引数 *\>* を用いて呼び出さなければなりません。

#### システム変数およびセット 

プリンターの選択が正しく実行されると、システム変数OKに1が設定されます。そうでない場合 (例えば指定したプリンターが見つからない場合など) は、システム変数OKは0に設定され、カレントプリンターは変更されません。

#### 例題 

Windows 環境下でのPDF ドキュメントの作成は、以下のようにします:

```4d
 var $pdfpath : Text
 $pdfpath:=System folder(Desktop)+"test.pdf"
 SET CURRENT PRINTER(Generic PDF driver)
 SET PRINT OPTION(Destination option;3;$pdfpath)
 ALL RECORDS([Table_1])
 PRINT SELECTION([Table_1];*)
 SET CURRENT PRINTER("")
```

#### 参照 

[Get current printer](get-current-printer.md)  
[PRINTERS LIST](printers-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 787 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


