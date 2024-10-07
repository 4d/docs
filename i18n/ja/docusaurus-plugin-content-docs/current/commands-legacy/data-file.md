---
id: data-file
title: Data file
slug: /commands/data-file
displayed_sidebar: docs
---

<!--REF #_command_.Data file.Syntax-->**Data file** {( *segment* )} -> 戻り値<!-- END REF-->
<!--REF #_command_.Data file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| segment | Integer | &#x1F852; | 廃止、使用されません |
| 戻り値 | Text | &#x1F850; | データベースのデータファイルのロング名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Data file.Summary-->Data file コマンドは、現在使用しているデータベースのデータファイルのロング名を返します。<!-- END REF-->

4Dバージョン11より、セグメントはサポートされなくなりました。*segment* 引数は無視され、使用されません。

Windows上  
例えば、ボリュームG上の\\DOCS\\MyCDsに配置されたデータベースMyCDsを使って作業している場合、この関数はG:\\DOCS\\MyCDs\\MyCDs.4DDを返します（データベース作成時にデフォルトの場所と名前を使用した場合）。

Macintosh上  
例えば、ハードディスクMacintosh HD上のDocuments:MyCDsフォルダに配置されたデータベースを使って作業している場合、この関数はMacintosh HD:Documents:MyCDs:MyCDs.4DDを返します（データベース作成時にデフォルトの場所と名前を使用した場合）。

**警告:** リモートモードの4Dからこのコマンドを呼び出した場合、ロング名ではなくデータファイル名のみが返されます。

#### 参照 

*\_o\_DATA SEGMENT LIST*  
[Application file](application-file.md)  
[Structure file](structure-file.md)  