---
id: dom-remove-xml-attribute
title: DOM REMOVE XML ATTRIBUTE
slug: /commands/dom-remove-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Syntax-->**DOM REMOVE XML ATTRIBUTE** ( *elementRef* ; *attribName* )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| attribName | Text | &#8594;  | 取り除く属性 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Summary-->DOM REMOVE XML ATTRIBUTE コマンドは*elementRef*で指定されたXML要素に*attrName*で指定された属性が存在すれば、それを取り除きます。<!-- END REF--> 

属性が正しく取り除かれると、OKシステム変数に1が設定されます。*elementRef*要素に*attrName*という名前の属性が存在しない場合、エラーが返され、OKシステム変数に0が設定されます。

#### 例題 

以下のXML構造において:

![](../assets/en/commands/pict204122.fr.png)

以下のコードは一番目の属性"N=1"を取り除きます: 

```4d
 var myBlobVar : Blob
 var $xml_Parent_Ref;$xml_Child_Ref : Text
 var $LineNum : Integer
 
 $xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)
 $xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)
 DOM REMOVE XML ATTRIBUTE($xml_Child_Ref;"N")
```

#### 参照 

[DOM GET XML ATTRIBUTE BY INDEX](dom-get-xml-attribute-by-index.md)  
[DOM GET XML ATTRIBUTE BY NAME](dom-get-xml-attribute-by-name.md)  
[DOM REMOVE XML ELEMENT](dom-remove-xml-element.md)  
[DOM SET XML ATTRIBUTE](dom-set-xml-attribute.md)  