---
id: dom-set-xml-element-value
title: DOM SET XML ELEMENT VALUE
slug: /commands/dom-set-xml-element-value
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Syntax-->**DOM SET XML ELEMENT VALUE** ( *elementRef* {; *xPath*}; *elementValue* {; *} )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| xPath | Text | &#8594;  | XML要素のXPathパス |
| elementValue | Text, Variable | &#8594;  | 要素の新しい値 |
| * | 演算子 | &#8594;  | 指定時: 値をCDATAに設定 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM SET XML ELEMENT VALUE.Summary-->**DOM SET XML ELEMENT VALUE** コマンドを使用して、*elementRef* で指定した要素の値を更新できます。<!-- END REF-->

オプションの*xPath* 引数を渡すと、更新する要素の指定にXPath記法を指定したことになります (この記法に関する詳細は、*XPath記法のサポート (DOM)* を参照してください)。以下のパス式がサポートされます: 

| **式**          | **アクション**              |
| -------------- | ---------------------- |
| /              | rootノードを指定します(絶対パス)    |
| para\[1\]      | コンテキストノードの最初のパラ子を指定します |
| para\[last()\] | コンテキストノードの最後のパラ子を指定します |

この場合、*elementRef* 引数にはルートXML 要素の参照を渡し、変更する要素のXPath パスを*xPath* 引数に渡す必要があります。

**互換性に関する注意:* v18 R3 以降、4D のXPath 実装はよりXPathに準拠したに変更されました。* *互換性上の理由から、以前の標準でない実装は変換されたデータベースではデフォルトでは維持されます。変換されたデータベースにおいて拡張された機能を利用するためには、* *互換性ページの互換性オプションの*標準XPath を使用する*オプションを選択してください。*

*elementValue* には新しい値を格納した文字列、変数またはフィールドを渡します:

* 文字列を渡した場合、値はXML構造の中でそのまま使用されます。
* 変数またはフィールドを渡した場合、4Dは*elementValue* の型に基づき値を処理します。配列やピクチャ、ポインタを除くすべてのデータタイプを使用できます。If *elementValue* が*undefined* に評価されてしまった場合、4D は空の文字列を使用します。

オプションのアスタリスクを渡すと、要素の値はCDATAセクションに設定されます。テキストをそのまま挿入するために特別なCDATAの形式が使用されます (例題 2参照)。

**注:** *elementRef* で指定された要素が**DOM SET XML ELEMENT VALUE** コマンドで処理されたBLOB の場合、それは自動でBase64 にエンコードされます。この場合[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md) は自動で逆の処理を行います。

##### 行末文字の処理についての注意 

XML処理のルールに準拠するため、行末文字シークエンス(CRとCRLF)は全てLF文字に変換されます。

#### 例題 1 

以下のXMLソースで: 

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

*vElemRef* が“Title”要素への参照を持つときに以下のコードを実行すると:

```4d
 DOM SET XML ELEMENT VALUE(vElemRef;"The Loser")
```

以下のようになります:

```XML
<Book>
   <Title>The Loser</Title>
</Book>
```

#### 例題 2 

以下のXMLソースがあるとき:

```XML
 <Maths>
   <Postulate>1+2=3</Postulate>
</Maths>
```

*<Postulate>* 要素にテキスト “12<18” を書き込みたいとします。 “<” 文字は受け入れられないため、この文字列をそのままXMLに書き込むことはできません。この文字を “<” に変更するか、CDATAの形式を使用しなければなりません。*vElemRef*がXML *<Postulate>* ノードを指すとき:

```4d
  // Normal form
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18")
```

このコードを実行すると、次のようになります:

```XML
 <Maths>
   <Postulate>12 < 18</Postulate>
</Maths>
```
  
  
```4d
  // CDATA form
 DOM SET XML ELEMENT VALUE(vElemRef;"12<18";*)
```

このコードを実行すると、次のようになります:

```XML
<Maths>
   <Postulate><![CDATA[12 < 18]]></Postulate>
</Maths>
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます (例えば要素参照が無効な時など)。

#### 参照 

[DOM GET XML ELEMENT VALUE](dom-get-xml-element-value.md)  
[XML SET OPTIONS](xml-set-options.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 868 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |


