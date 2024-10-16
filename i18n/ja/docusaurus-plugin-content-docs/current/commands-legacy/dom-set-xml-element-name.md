---
id: dom-set-xml-element-name
title: DOM SET XML ELEMENT NAME
slug: /commands/dom-set-xml-element-name
displayed_sidebar: docs
---

<!--REF #_command_.DOM SET XML ELEMENT NAME.Syntax-->**DOM SET XML ELEMENT NAME** ( *elementRef* ; *elementName* )<!-- END REF-->
<!--REF #_command_.DOM SET XML ELEMENT NAME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| elementName | Text | &#8594;  | 要素の新しい名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM SET XML ELEMENT NAME.Summary-->DOM SET XML ELEMENT NAME コマンドを使用して、*elementRef*で指定した要素の名前を変更します。<!-- END REF-->

名称を変更する要素の参照を*elementRef* に渡します。コマンドは要素の開く、閉じるタグの更新も行います。

#### 例題 

以下のXMLソースにおいて:

```XML
<Book>
   <Title>The Best Seller</Title>
</Book>
```

*vElemRef*が‘Book’要素への参照をもつときに、以下のコードを実行すると:

```4d
 DOM SET XML ELEMENT NAME(vElemRef;"BestSeller")
```

以下のようになります:

```XML
<BestSeller>
   <Title>The Best Seller</Title>
</BestSeller>
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### エラー管理 

以下のような場合にエラーが生成されます:  

* 要素参照が無効である。
* 新しい要素名が無効である (例えば要素名が数字から始まっているなど)。

#### 参照 

[DOM GET XML ELEMENT NAME](dom-get-xml-element-name.md)  