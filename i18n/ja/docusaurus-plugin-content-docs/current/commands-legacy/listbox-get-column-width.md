---
id: listbox-get-column-width
title: LISTBOX Get column width
slug: /commands/listbox-get-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column width.Syntax-->**LISTBOX Get column width** ( {* ;} *object* {; *minWidth* {; *maxWidth*}} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.LISTBOX Get column width.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#x1F852; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#x1F852; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| minWidth | Integer | &#x1F858; | 列の最小幅 (ピクセル単位) |
| maxWidth | Integer | &#x1F858; | 列の最大幅 (ピクセル単位) |
| 戻り値 | Integer | &#x1F850; | 列幅 (ピクセル単位) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get column width.Summary-->LISTBOX Get column width コマンドは、*object*引数および *\** で指定された列の幅（ピクセル単位）を返します。<!-- END REF-->*object*引数には、リストボックスの列や列ヘッダを渡すことができます。

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細はの節を参照してください。

LISTBOX Get column width は列サイズ変更の制限値を *minWidth* と *maxWidth* に返すことができます。これらの制限は [LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md "LISTBOX SET COLUMN WIDTH") コマンドで設定できます。   
列の最小や最大サイズが設定されていない場合、対応する引数には0が返されます。

#### 参照 

[LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md)  