---
id: dom-get-xml-element-value
title: DOM GET XML ELEMENT VALUE
slug: /commands/dom-get-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Syntax-->**DOM GET XML ELEMENT VALUE** ( *elementRef* : Text ; *elementValue* : Variable {; *cDATA* : Variable} )<!-- END REF-->
<!--REF #_command_.DOM GET XML ELEMENT VALUE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XML要素参照 |
| elementValue | Variable | &#8592; | 要素値 |
| cDATA | Variable | &#8592; | CDATAセクションの内容 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|12|変更|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DOM GET XML ELEMENT VALUE.Summary-->**DOM GET XML ELEMENT VALUE** コマンドは *elementRef*に指定したXML要素の値を*elementValue* 引数に返します。<!-- END REF-->4Dは取得した値を渡した変数と同じ型に変換します。変数の型が定義されていない場合、値はデフォルトでテキスト型で返されます。

オプションの *cDATA* 引数を使用して、*elementRef* 要素のCDATAセクションの値を所得できます。*elementValue* 引数のように、4Dは取得した値を渡した変数と同じ型に変換します。変数の型が定義されていない場合、値はデフォルトでテキスト型で返されます。

**Note:** *elementRef*で指定された要素が[DOM SET XML ELEMENT VALUE](../commands/dom-set-xml-element-value) コマンドで処理されたBLOBの場合、それは自動でBase64でエンコードされています。このコマンドは自動でBase64のデコードを試みます。

## 例題 

このメソッドは$xml\_Element\_Ref要素の値を返します:

```4d
 var $xml_Element_Ref : Text
 var $value : Real
 
 DOM GET XML ELEMENT VALUE($xml_Element_Ref;$value)
```

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

## 参照 

[DOM Get XML element](../commands/dom-get-xml-element)  
[DOM GET XML ELEMENT NAME](../commands/dom-get-xml-element-name)  
[DOM SET XML ELEMENT VALUE](../commands/dom-set-xml-element-value)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 731 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


