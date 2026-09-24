---
id: dom-get-xml-element
title: DOM Get XML element
slug: /commands/dom-get-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Get XML element.Syntax-->**DOM Get XML element** ( *elementRef* : Text ; *elementName* : Text ; *index* : Integer {; *elementValue* : Variable {; *attrNames* : Text array {; *attrValues* : Text array }}}) : Text<!-- END REF-->
<!--REF #_command_.DOM Get XML element.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XML要素参照 |
| elementName | Text | &#8594; | 取得する要素の名前 |
| index | Integer | &#8594; | 取得する要素のインデックス番号 |
| elementValue | Variable | &#8592; | 要素値 |
| attrNames | Text array | &#8592; | 属性名 |
| attrValues | Text array | &#8592; | 属性値 |
| 戻り値 | Text | &#8592; | XML参照 (16 文字) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|16 R4|変更|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DOM Get XML element.Summary-->**DOM Get XML element** コマンドは、*elementName* と *index* 引数に基づき、子要素の参照を返します。<!-- END REF--> 

要素の値が*elementValue* 引数に返されます。

*attrNames* 配列を渡した場合、コマンドは要素の属性名をこの配列に返します。必要であれば、配列を自動的に作成してサイズを調整します。

*attrValues* 配列を渡した場合、コマンドはターゲットの要素の属性値をこの配列に返します。必要であれば、配列を自動的に作成してサイズを調整します。

**注:** デフォルトでは、**DOM Get XML element** は*elementName* 引数については大文字と小文字を区別します(xml準拠のため)。コマンドの大文字と小文字の区別については、[XML SET OPTIONS](../commands/xml-set-options) コマンドのXML DOM case sensitivity セレクターを使用することで管理可能です。

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OK に1 が設定され、エラーが発生すると0 が設定されます。

## 参照 

[DOM GET XML ELEMENT VALUE](../commands/dom-get-xml-element-value)  
[XML SET OPTIONS](../commands/xml-set-options)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 725 |
| スレッドセーフである | yes |
| システム変数を更新する | OK、error |


