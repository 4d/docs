---
id: convert-to-text
title: Convert to text
slug: /commands/convert-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Convert to text.Syntax-->**Convert to text** ( *BLOB* ; *charSet* ) : Text<!-- END REF-->
<!--REF #_command_.Convert to text.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | 特定の文字セットで記述されている テキストを含むBLOB |
| charSet | Text, Integer | &#8594;  | BLOB文字セットの番号または名前 |
| 戻り値 | Text | &#8592; | 4Dの文字セットで表現されたBLOBの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Convert to text.Summary-->Convert to textコマンドは、*blob*引数に含まれているテキストを変換して、4Dの文字セットで記述されているテキストで返します。<!-- END REF--> 4DはデフォルトでUnicode 文字コードを使用します。  

*charSet*には変換に使用される、*blob*に含まれているテキストの文字セットを渡します。もしBLOBに4D内でコピーされたテキストが含まれている場合、そのBLOBの文字コードはUTF-16です。標準名やエイリアス名 (例えば"ISO-8859-1" や "UTF-8")、またはその識別子 (倍長整数) を指定できます。詳細は[CONVERT FROM TEXT](convert-from-text.md "CONVERT FROM TEXT")コマンドの説明を参照してください。

Convert to textはByte Order Marks (BOM) をサポートします。指定された文字セットがUnicodeタイプ (UTF-8, UTF-16またはUTF-32) であるとき、4Dは受信した最初のバイトでBOMの識別を試みます。BOMが検知できると、BOMは結果から取り除かれ、4Dは*charSet*ではなくBOMが指定した文字セットを使用します。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されます。

#### 参照 

[CONVERT FROM TEXT](convert-from-text.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1012 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


