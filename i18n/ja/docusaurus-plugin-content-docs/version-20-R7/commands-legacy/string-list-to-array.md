---
id: string-list-to-array
title: STRING LIST TO ARRAY
slug: /commands/string-list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.STRING LIST TO ARRAY.Syntax-->**STRING LIST TO ARRAY** ( *resID* ; *strings* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.STRING LIST TO ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | リソースID番号、または 'group'要素の'id'属性 (XLIFF) |
| strings | Text array | &#8592; | STR#リソースから取り出した文字列、または 'group'要素から取り出した文字列 (XLIFF) |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれているすべてのXLIFFファイル リソースファイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.STRING LIST TO ARRAY.Summary-->**STRING LIST TO ARRAY**コマンドは以下の要素から構築される*strings*配列を生成します:

* ストリングリスト (“STR#”) リソースに格納された、IDが*resID*の文字列、または
* 開かれたXLIFFファイル中、'group'要素の'id'属性が*resID*である文字列 (後述の"XLIFFアーキテクチャとの互換性"を参照)。<!-- END REF-->

リソースが見つからない場合*strings*配列はそのまま変更されず、システム変数OKに0が設定されます。

*resFile*に有効なリソースファイル参照番号を渡すと、そのリソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、リソースチェーン内で最初に見つかったリソースのオカレンスが返されます。

**STRING LIST TO ARRAY**を呼び出す前に、配列*strings*を文字列またはテキスト配列として宣言できます。配列を事前に定義しない場合、テキスト配列として作成されます。

**注:** ストリングリストリソースの各ストリングは、最大255文字を格納できます。

**Tip:** ストリングリストの総サイズを32Kに、また1リソースあたり数百文字列に制限しなければなりません。

#### XLIFFアーキテクチャとの互換性 

4D v11より、**STRING LIST TO ARRAY**コマンドはXLIFFアーキテクチャと互換があります。コマンドはまず*resID*と*strID*に対応するリソースをすべての開かれたXLIFFファイル内で探します (*resFile* 引数が省略されていれば)。この場合、*resID*は**group**要素の**id**属性を表し、*strID*は**trans-unit**要素の**id**属性を表します。値が見つからない場合、コマンドは引き続き開かれたリソースファイルを検索します。4DにおけるXLIFFアーキテクチャに関する詳細は4D Design Referenceマニュアルを参照してください。

#### システム変数およびセット 

リソースが見つかるとOK変数に1が、そうでなければ0が設定されます。

#### 参照 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 511 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


