---
id: xml-get-error
title: XML GET ERROR
slug: /commands/xml-get-error
displayed_sidebar: docs
---

<!--REF #_command_.XML GET ERROR.Syntax-->**XML GET ERROR** ( *elementRef* ; *errorText* {; *row* {; *column*}} )<!-- END REF-->
<!--REF #_command_.XML GET ERROR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| errorText | Variable | &#8592; | エラーテキスト |
| row | Variable | &#8592; | 行番号 |
| column | Variable | &#8592; | 列番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.XML GET ERROR.Summary-->XML GET ERROR コマンドは*errorText* 引数に、*elementRef* 引数で指定されたXML要素の処理中に検知したエラーの説明を返します。<!-- END REF-->返される情報はXerces.DLLライブラリから提供されるものです。 

オプションの*row*と*column*引数はエラーの場所を示します。これらの引数にはエラーが発生した行と、その行の中でのエラーの最初の文字の位置が返されます。

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM Get XML information](dom-get-xml-information.md)  