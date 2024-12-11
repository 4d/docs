---
id: dom-create-xml-element-arrays
title: DOM Create XML element arrays
slug: /commands/dom-create-xml-element-arrays
displayed_sidebar: docs
---

<!--REF #_command_.DOM Create XML element arrays.Syntax-->**DOM Create XML element arrays** ( *elementRef* ; *xPath* {; *attribNamesArray* ; *attribValuesArray*} {; *attribNamesArray2* ; *attribValuesArray2* ; ... ; *attribNamesArrayN* ; *attribValuesArrayN*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Create XML element arrays.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XMLルート要素参照 |
| xPath | Text | &#8594;  | 作成するXML要素のXPathパス |
| attribNamesArray | Text array | &#8594;  | 属性名配列 |
| attribValuesArray | Text array | &#8594;  | 属性値配列 |
| 戻り値 | Text | &#8592; | 作成されたXML要素の参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Create XML element arrays.Summary-->DOM Create XML element arrays コマンドを使用して*elementRef*要素に新しい要素を追加したり、さらに配列形式で渡された属性とその値も追加できます。<!-- END REF-->

配列をサポートしている以外、このコマンドは[DOM Create XML element](dom-create-xml-element.md "DOM Create XML element")と同じです。 動作についてはこのコマンドの説明を参照してください。 

さらに、DOM Create XML element arraysコマンドは*attribNamesArray*と*attribValuesArray*引数に複数の属性とその値のペアを配列として渡すことができます。*attribValuesArray*にはテキスト、日付、数値、そしてピクチャ型の配列を渡せます。4Dは自動で必要な変換を行います。新しい[XML SET OPTIONS](xml-set-options.md "XML SET OPTIONS")コマンドを使用してこの変換をコントロールできます。

配列は事前に作成されていなければなあらず、またペアで動作します。必要なだけ配列のペアを渡すことができ、またそれぞれのペアごとに必要なだけ要素を渡すことができます。

#### 例題 

以下の要素を作成します:

```XML
<?xml  version="1.0" encoding="UTF-8" standalone="no" ?>
<RootElement>
    <Elem1>
      <Elem2>
         <Elem3  Font="Verdana" Size="10" Style="Bold"></Elem3>
       </Elem2>
   </Elem1>
</RootElement>
```

これを行うには、以下のように記述します:

```4d
 ARRAY TEXT(arrAttNames;3)
 ARRAY TEXT(arrAttValues;3)
 arrAttNames{1}:="Font"
 arrAttValues{1}:="Verdana"
 arrAttNames{2}:="Size"
 arrAttValues{2}:="10"
 arrAttNames{3}:="Style"
 arrAttValues{3}:="Bold"
 vRootRef:=DOM Create XML Ref("RootElement")
 vxPath:="/RootElement/Elem1/Elem2/Elem3"
 vElementRef:=DOM Create XML element arrays(vRootRef;vxPath;arrAttNames;arrAttValues)
```

#### 参照 

[DOM Create XML element](dom-create-xml-element.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1097 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


