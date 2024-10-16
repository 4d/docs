---
id: dom-get-xml-attribute-by-index
title: DOM GET XML ATTRIBUTE BY INDEX
slug: /commands/dom-get-xml-attribute-by-index
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Syntax-->**DOM GET XML ATTRIBUTE BY INDEX** ( *elementRef* ; *attribIndex* ; *attribName* ; *attribValue* )<!-- END REF-->
<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| attribIndex | Integer | &#8594;  | 属性のインデックス番号 |
| attribName | Variable | &#8592; | 属性名 |
| attribValue | Variable | &#8592; | 属性値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM GET XML ATTRIBUTE BY INDEX.Summary-->**DOM GET XML ATTRIBUTE BY INDEX** コマンドは、属性のインデックスを使用して、属性名と値を取得するために使用します。<!-- END REF-->

*elementRef* にはXML要素参照を、*attribIndex*には名前を知りたい要素のインデックス番号を渡します。名前が*attribName* 引数に、値が*attribValue* 引数に返されます。4Dは取得した値を引数として渡した変数と同じ型に変換します。変数の型が定義されていない場合、値はデフォルトでテキスト型で返されます。

**Note:** 配列のインデックス番号はXMLファイル中に表示される属性の順番通りではありません。XML中、属性のインデックスはnameのアルファベット順に並びかえられた属性の位置を示します。この点については[DOM Count XML attributes](dom-count-xml-attributes.md) コマンドの説明を参照してください。

*attribIndex* に渡された値がXML要素に定義された属性数より多い場合、エラーが返されます。

#### 例題 

[DOM Count XML attributes](dom-count-xml-attributes.md "DOM Count XML attributes") コマンドの例題参照

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### 参照 

[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ATTRIBUTE](dom-remove-xml-attribute.md)  