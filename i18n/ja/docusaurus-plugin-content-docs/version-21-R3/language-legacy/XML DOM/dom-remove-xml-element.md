---
id: dom-remove-xml-element
title: DOM REMOVE XML ELEMENT
slug: /commands/dom-remove-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM REMOVE XML ELEMENT.Syntax-->**DOM REMOVE XML ELEMENT** ( *elementRef* : Text )<!-- END REF-->
<!--REF #_command_.DOM REMOVE XML ELEMENT.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XML要素参照 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DOM REMOVE XML ELEMENT.Summary-->DOM REMOVE XML ELEMENT コマンドは*elementRef*で指定した要素を取り除きます。<!-- END REF-->

## システム変数およびセット 

コマンドが正しく実行されると、システム変数OKは1に設定されます。そうでなければ0に設定されエラーが生成されます。  
エラーは要素参照が無効な場合に生成されます。

## 参照 

[DOM Create XML element](../commands/dom-create-xml-element)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 869 |
| スレッドセーフである | yes |
| システム変数を更新する | OK、error |


