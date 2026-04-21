---
id: dom-get-xml-element-name
title: DOM GET XML ELEMENT NAME
slug: /commands/dom-get-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT NAME.Syntax-->**DOM GET XML ELEMENT NAME** ( *elementRef* : Text ; *elementName* : Variable )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT NAME.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XML要素参照 |
| elementName | Variable | &#8592; | 要素の名前 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DOM GET XML ELEMENT NAME.Summary-->DOM GET XML ELEMENT NAME コマンドは、*elementRef* で指定したXML要素の名前を*elementName* 引数に返します。<!-- END REF-->引数の型が定義されてない場合、デフォルトでテキスト型が使用されます。

XML要素名に関する詳細は*XML DOMコマンドの概要* の節を参照してください。

## 例題 

このメソッドは$xml\_Element\_Ref要素の名前を返します:

```4d
 var $xml_Element_Ref : Text
 var $name : Text
 
 DOM GET XML ELEMENT NAME($xml_Element_Ref;$name)
```

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

## 参照 

[DOM Get XML element](../commands/dom-get-xml-element)  
[DOM GET XML ELEMENT VALUE](../commands/dom-get-xml-element-value)  
[DOM SET XML ELEMENT NAME](../commands/dom-set-xml-element-name)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 730 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


