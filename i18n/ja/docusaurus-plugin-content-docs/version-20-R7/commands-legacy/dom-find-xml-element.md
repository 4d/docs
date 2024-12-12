---
id: dom-find-xml-element
title: DOM Find XML element
slug: /commands/dom-find-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.DOM Find XML element.Syntax-->**DOM Find XML element** ( *elementRef* ; *xPath* {; *arrElementRefs*} ) : Text<!-- END REF-->
<!--REF #_command_.DOM Find XML element.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | XML要素参照 |
| xPath | Text | &#8594;  | 検索する要素のXPathパス |
| arrElementRefs | Text array | &#8592; | 見つかった要素参照のリスト (該当する場合) |
| 戻り値 | Text | &#8592; | 見つかった要素の参照 (該当する場合) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM Find XML element.Summary-->DOM Find XML element コマンドはXMLストラクチャ中で特定のXML要素を検索するために使用します。<!-- END REF-->検索は*elementRef* 引数で指定された要素から開始されます。

探すXMLノードはXPath記法を使用して *xPath* 引数に指定します (詳細な情報については、*XPath記法のサポート (DOM)* の章を参照してください)。以下のパス式がサポートされます:

| **式**                           | **アクション**                                                                     |
| ------------------------------- | ----------------------------------------------------------------------------- |
| *nodename*                      | コンテキストノードの子で、"nodename" という名前を持つ要素すべてを選択します。                                  |
| /                               | パスがツリーのルート(根)から始まることを示します。(絶対パス)                                              |
| //                              | パスがツリーのカレントノードから始まり、中間の要素数は問わないことを示します。                                       |
| @                               | 属性を選択します                                                                      |
| .                               | カレントノードを選択します                                                                 |
| ..                              | カレントノードの親を選択します                                                               |
| \*                              | コンテキストノードの子要素を選択します                                                           |
| @\*                             | コンテキストノードの属性を全て選択します                                                          |
| text()                          | コンテキストノードのテキストノードを連結して選択します                                                   |
| node()                          | コンテキストノードの子に相当するすべてのノードを選択します                                                 |
| local-name()                    | コンテキストノードのローカル名を返します。ノードセットに対して使用した場合、1番目のノードのローカル名を返します                      |
| para\[1\]                       | コンテキストノードの子で、"para" という名前を持つ最初の要素を選択します                                       |
| para\[last()\]                  | コンテキストノードの子で、"para" という名前を持つ最後の要素を選択します                                       |
| chapter\[title="Introduction"\] | コンテキストノードの子で、"chapter" という要素名であり、"title" という子がIntroduction という文字列値である要素を選択します |
| chapter\[title\]                | コンテキストノードの子で、"chapter"という要素名であり、"title"という子を持つ要素を選択します                        |
| para\[@type="warning"\]         | コンテキストノードの子で、"para" という名前を持ち、"type" 属性が"warning" という値である全ての要素を選択します           |
| para\[@type="warning"\]\[5\]    | コンテキストノードの子で、"para" という名前を持ち、"type" 属性が"warning" という値である5つ目の要素を選択します          |
| para\[5\]\[@type="warning"\]    | コンテキストノードの子で"para" という名前を持つ5番目の要素の"type" 属性が"warming" という値であれば選択します           |
| para\[contains(@type,'bg')\]    | コンテキストノードの子で"para" という名前を持ち、"type"属性が"bg"という文字列を含んでいる全ての要素を選択します              |
| //title \| //price              | ドキュメント内の全てのtitle要素とprice要素を選択します                                              |

**互換性に関する注意:* v18 R3 以降、* *4D のXPath 実装はより幅広い式に対応しサポートするために変更されました。互換性上の理由から、以前の標準でない実装は返還されたデータベースではデフォルトでは維持されます。変換されたデータベースにおいて拡張された機能を利用するためには、* *互換性ページの互換性オプションの標準XPath を使用するオプションを選択してください。*

**注:** 検索は全て小文字と大文字を区別します。

このコマンドは見つかった要素のXML 参照を返します。*arrElementRefs* 文字列配列が渡されると、コマンドはこの配列に見つけた要素のリストを返します。この場合コマンドは結果として*arrElementRefs* 配列の最初の要素を返します。この引数は*xPath* 引数で指定した場所に同じ名前の要素が複数ある場合に利用できます。

#### 例題 1 

以下のXML 構造がある場合を考えます:

```RAW
  Harry Potter  29.99  Learning XML  39.95
```

以下のコードを実行すると、XML 要素を素早く検索し、その値を表示させることができます:

```4d
 vElemRef:=DOM Parse XML source("books.xml")
 vFound:=DOM Find XML element(vElemRef;"book[2]/title") // カレントノードからの相対パス
 DOM GET XML ELEMENT VALUE(vFound;value)
 ALERT("要素の値は: \""+value+"\"") // Learning XML が表示される
```

同じ検索は、以下のコードを使用しても実行できます:

```4d
 vElemRef:=DOM Parse XML source("books.xml")
 vFound:=DOM Find XML element(vElemRef;"/bookstore/book[2]") // rootからの絶対パス
 vFound:=DOM Find XML element(vFound;"title")
 DOM GET XML ELEMENT VALUE(vFound;value)
 ALERT("要素の値は: \""+value+"\"") // Learning XML が表示される
```

#### 例題 2 

以下のXML構造があるとき: 

```RAW
         aaa      bbb      ccc   
```

以下のコード使用して、それぞれのElem2 要素の参照をarrAfound 配列に取得することができます:

```4d
 vElemRef:=DOM Parse XML source("example.xml")
 ARRAY TEXT(arrAfound;0)
 vFound:=DOM Find XML element(vElemRef;"/Root/Elem1/Elem2";arrAfound)
```

#### 例題 3 

"rect" 要素のうち、"class" 属性に"bgcontainer" という文字列が含まれているものを全て選択したい場合を考えます:

```4d
 $node:=DOM Find XML element($root;" //rect[contains(@class,'bgcontainer')")
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### エラー管理 

エラーは以下の場合に生成されます:  

* 要素参照が無効の場合。
* 指定されたXPathパスが無効の場合。

#### 参照 

[DOM Count XML elements](dom-count-xml-elements.md)  
[DOM Create XML element](dom-create-xml-element.md)  