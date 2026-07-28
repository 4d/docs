---
id: dom-set-xml-attribute
title: DOM SET XML ATTRIBUTE
slug: /commands/dom-set-xml-attribute
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ATTRIBUTE.Syntax-->**DOM SET XML ATTRIBUTE** ( *elementRef* : Text ; *attrName* : Text ; *attrValue* : any {; ...(*attrName* : Text ; *attrValue* : any)} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ATTRIBUTE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594; | XML要素参照 |
| attrName | Text | &#8594; | 設定する属性 |
| attrValue | Text, Boolean, Integer, Real, Time, Date | &#8594; | 新しい属性値 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.DOM SET XML ATTRIBUTE.Summary-->DOM SET XML ATTRIBUTE コマンドを使用して、*elementRef* に渡したXML要素に1つ以上の属性を追加できます。<!-- END REF-->また定義されたそれぞれの属性に値を設定することもできます。

*attrName* と *attrValue*引数にそれぞれ設定する属性とその値を (変数、フィールド、またはリテラル値の形式で) 渡します。必要なだけ属性/値のペアを渡すことができます。   
*attrValue* 引数はテキストあるいは (ブール、整数、実数、日付または時間など) 他のタイプを渡すことができます。テキスト以外の値を渡した場合、4Dは以下の原則に基づきテキストに変換します:

| **型** | **変換された値の例**                         |
| ----- | ------------------------------------ |
| ブール   | "true" または "false"                   |
| 整数    | "123456"                             |
| 実数    | "12.34" (小数点は常に ".")                 |
| 日付    | "2006-12-04T00:00:00Z" (RFC 3339 標準) |
| 時間    | "5233" (秒数)                          |

## 例題 

以下のXMLソースがあるとき:

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

以下のコードを実行すると:

```4d
 vAttrName:="Font"
 vAttrVal:="Verdana"
 DOM SET XML ATTRIBUTE(vElemRef;vAttrName;vAttrVal)
```

以下のようになります:

```XML
<Book>
   <Title Font=Verdana>The Best Seller</Title>
</Book>
```

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

## 参照 

[DOM GET XML ATTRIBUTE BY INDEX](../commands/dom-get-xml-attribute-by-index)  
[DOM GET XML ATTRIBUTE BY NAME](../commands/dom-get-xml-attribute-by-name)  
[DOM REMOVE XML ATTRIBUTE](../commands/dom-remove-xml-attribute)  
[XML SET OPTIONS](../commands/xml-set-options)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 866 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


