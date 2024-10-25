---
id: get-pasteboard-data-type
title: GET PASTEBOARD DATA TYPE
slug: /commands/get-pasteboard-data-type
displayed_sidebar: docs
---

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Syntax-->**GET PASTEBOARD DATA TYPE** ( *4Dsignatures* ; *nativeTypes* {; *formatNames*} )<!-- END REF-->
<!--REF #_command_.GET PASTEBOARD DATA TYPE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 4Dsignatures | Text array | &#8592; | データタイプの4D シグネチャ |
| nativeTypes | Text array | &#8592; | ネイティブデータタイプ |
| formatNames | Text array | &#8592; | フォーマット名 (Windowsのみ), Mac OSでは空の文字列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET PASTEBOARD DATA TYPE.Summary-->GET PASTEBOARD DATA TYPE コマンドは、ペーストボードに含まれるデータタイプリストを取得するために使用します。<!-- END REF-->このコマンドは一般的にドラッグ＆ドロップのコンテキストで、ドロップ先オブジェクトのOn Drop または On Drag Over フォームイベント内で使用されます。特に、ペーストボードに特定のデータタイプが存在するかどうかをチェックするために使用します。

このコマンドは2つまたは3つの配列に、複数の異なるフォーマットのデータタイプを返します:

* *4Dsignatures* 配列には内部的な4D シグネチャ (例えば“com.4d.private.picture.gif”) を使用して表現されたデータタイプが返されます。4Dが認識できないデータタイプの場合、空の文字列 ("") が配列に返されます。
* *nativeTypes* 配列にはネイティブタイプを使用して表現されたデータタイプが返されます。ネイティブタイプのフォーマットはMac OSとWindowsで異なります:  
   * Mac OSでは、ネイティブタイプはUTI (Uniform Type Identifier) として表現されます。  
   * Windowsでは、ネイティブタイプはフォーマット名に割り当てられた番号として表現されます。*nativeTypes* 配列にはこの番号が文字列 (“3”, “12”, 等) として格納されます。もし明確なラベルが必要な場合は、オプションの*formatNames* 配列を使用することをお勧めします。この配列にはWindowsにおけるネイティタイプのフォーマット名が格納されます。  
*nativeTypes* 配列では、4Dが参照できないタイプを含む、ペーストボード中のすべてのデータタイプ を知ることができます。
* Windowsでは、*formatNames* 配列を渡して、ペーストボード中のデータタイプ名を取得することができます。この配列に返される値は、例えばフォーマット選択ポップアップメニューを作成するために使用できます。Mac OSでは、*formatNames* 配列に空の文字列が返されます。

サポートされるデータタイプに関する詳細はの節を参照してください。

#### 参照 

*ペーストボードの管理*  