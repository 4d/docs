---
id: get-indexed-string
title: Get indexed string
slug: /commands/get-indexed-string
displayed_sidebar: docs
---

<!--REF #_command_.Get indexed string.Syntax-->**Get indexed string** ( *resID* ; *strID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get indexed string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | リソースID番号、または 'group'要素の'id'属性 (XLIFF) |
| strID | Integer | &#8594;  | ストリング番号、または 'trans-unit'要素の'id'属性 (XLIFF) |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時: すべてのXLIFFファイル、または 開かれているリソースファイル |
| 戻り値 | Text | &#8592; | インデックス付きストリングの値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get indexed string.Summary-->Get indexed string コマンドは以下の値を返します: 

* ストリングリスト (“STR#”) リソースに格納された、IDが*resID*の文字列、または
* 開かれたXLIFFファイル中、'group'要素の'id'属性が*resID*である文字列 (後述の"XLIFFアーキテクチャとの互換性"を参照)。<!-- END REF-->

*strID*にストリングの番号を渡します。ストリングリストリソースのストリングは1からNの順に番号が振られます。ストリングリストリソースのすべてのストリング (およびそのストリング番号) を取得するには[STRING LIST TO ARRAY](string-list-to-array.md "STRING LIST TO ARRAY")を使用します。

リソースまたはそのリソース内のストリングが見つからなかった場合、空の文字列が返され、システム変数OKに0が設定されます。

*resFile*に有効なリソースファイル参照番号を渡すと、そのリソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、リソースチェーン内で最初に見つかったリソースのオカレンスが返されます。

**Note:** ストリングリストリソースの各ストリングは、最大255文字を格納できます。

##### XLIFFアーキテクチャとの互換性 

4D v11より、Get indexed string コマンドはXLIFFアーキテクチャと互換があります。コマンドはまず*resID*と*strID*に対応するリソースをすべての開かれたXLIFFファイル内で探します (*resFile* 引数が省略されていれば)。この場合、*resID*は**group**要素の**id**属性を表し、*strID*は**trans-unit**要素の**id**属性を表します。値が見つからない場合、コマンドは引き続き開かれたリソースファイルを検索します。4DにおけるXLIFFアーキテクチャに関する詳細は4D Design Referenceマニュアルを参照してください。

#### システム変数およびセット 

リソースが見つかるとOKは1に、そうでなければ0にう設定されます。

#### 参照 

[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  