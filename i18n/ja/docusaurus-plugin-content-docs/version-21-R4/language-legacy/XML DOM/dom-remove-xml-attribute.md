---
id: dom-remove-xml-attribute
title: DOM REMOVE XML ATTRIBUTE
slug: /commands/dom-remove-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Syntax-->**DOM REMOVE XML ATTRIBUTE** ( *elementRef* : Text ; *attribName* : Text )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XML要素参照 |
| attribName | Text | &#8594; | 取り除く属性 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|12|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DOM REMOVE XML ATTRIBUTE.Summary-->DOM REMOVE XML ATTRIBUTE コマンドは*elementRef*で指定されたXML要素に*attrName*で指定された属性が存在すれば、それを取り除きます。<!-- END REF--> 

属性が正しく取り除かれると、OKシステム変数に1が設定されます。*elementRef*要素に*attrName*という名前の属性が存在しない場合、エラーが返され、OKシステム変数に0が設定されます。

## 例題 

以下のXML構造において:

![](../../assets/en/commands/pict204122.fr.png)

以下のコードは一番目の属性"N=1"を取り除きます: 

```4d
 var myBlobVar : Blob
 var $xml_Parent_Ref;$xml_Child_Ref : Text
 var $LineNum : Integer
 
 $xml_Parent_Ref:=DOM Parse XML variable(myBlobVar)
 $xml_Child_Ref:=DOM Get first child XML element($xml_Parent_Ref)
 DOM REMOVE XML ATTRIBUTE($xml_Child_Ref;"N")
```

## 参照 

[DOM GET XML ATTRIBUTE BY INDEX](../commands/dom-get-xml-attribute-by-index)  
[DOM GET XML ATTRIBUTE BY NAME](../commands/dom-get-xml-attribute-by-name)  
[DOM REMOVE XML ELEMENT](../commands/dom-remove-xml-element)  
[DOM SET XML ATTRIBUTE](../commands/dom-set-xml-attribute)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1084 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


