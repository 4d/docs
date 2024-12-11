---
id: sax-open-xml-element-arrays
title: SAX OPEN XML ELEMENT ARRAYS
slug: /commands/sax-open-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Syntax-->**SAX OPEN XML ELEMENT ARRAYS** ( *document* ; *tag* {; *attribNamesArray* ; *attribValuesArray*} {; *attribNamesArray2* ; *attribValuesArray2* ; ... ; *attribNamesArrayN* ; *attribValuesArrayN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| tag | Text | &#8594;  | 開く要素の名前 |
| attribNamesArray | Text array | &#8594;  | 属性名配列 |
| attribValuesArray | Text array, Integer array, Date array, Real array, Picture array, Boolean array | &#8594;  | 属性値配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX OPEN XML ELEMENT ARRAYS.Summary-->SAX OPEN XML ELEMENT ARRAYS コマンドコマンドを使用して、*document* で参照されるXMLドキュメント中に新しい要素およびオプションで属性とその値を配列で指定して追加できます。<!-- END REF--> 

配列をサポートすること以外 (後述参照)、このコマンドは[SAX OPEN XML ELEMENT](sax-open-xml-element.md "SAX OPEN XML ELEMENT")と同じです。処理に関する情報はこのコマンドの説明を参照してください。 

SAX OPEN XML ELEMENT ARRAYS は日付、数値、ブール、そしてピクチャ型の配列を*attribValuesArray*引数を受け入れます。4Dは自動で必要な変換を行います。[XML SET OPTIONS](xml-set-options.md "XML SET OPTIONS")コマンドを使用してこれらの変換を設定できます。

オプションでSAX OPEN XML ELEMENT ARRAYS コマンドは、*attribNamesArray*と*attribValuesArray*引数に属性名と属性値のペアを配列形式で渡すことができます。

配列は事前に作成され、属性名と属性値のペアで構成されていなければなりません。複数の配列を渡すことができ、それぞれの配列に複数の配列要素を含めることができます。

#### 例題 

以下のメソッドは:

```4d
 ARRAY TEXT(tAttrNames;2)
 ARRAY TEXT(tAttrValues;2)
 vElement:="Book"
 tAttrNames{1}:="Font"
 tAttrValues{1}:="Arial"
 tAttrNames{2}:="Style"
 tAttrValues{2}:="Bold"
 SAX OPEN XML ELEMENT ARRAYS($DocRef;vElement;tAttrNames;tAttrValues)
```

以下の行をドキュメントに書き込みます: 

```XML
<Book Font="Arial" Style="Bold">
```

#### 参照 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 921 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


