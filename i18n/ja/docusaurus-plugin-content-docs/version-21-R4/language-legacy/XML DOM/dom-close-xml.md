---
id: dom-close-xml
title: DOM CLOSE XML
slug: /commands/dom-close-xml
displayed_sidebar: docs
---

<!--REF #_command_.DOM CLOSE XML.Syntax-->**DOM CLOSE XML** ( *elementRef* : Text )<!-- END REF-->
<!--REF #_command_.DOM CLOSE XML.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XMLルート要素参照 |
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

<!--REF #_command_.DOM CLOSE XML.Summary-->DOM CLOSE XML コマンドは*elementRef*で指定されたXMLオブジェクトにより使用されているメモリを開放します。<!-- END REF--> 

*elementRef*がXMLルートオブジェクトでない場合、エラーが生成されます。

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

## 参照 

[DOM Parse XML source](../commands/dom-parse-xml-source)  
[DOM Parse XML variable](../commands/dom-parse-xml-variable)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 722 |
| スレッドセーフである | yes |
| システム変数を更新する | OK、error |


