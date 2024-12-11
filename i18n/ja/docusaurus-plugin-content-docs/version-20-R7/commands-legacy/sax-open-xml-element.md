---
id: sax-open-xml-element
title: SAX OPEN XML ELEMENT
slug: /commands/sax-open-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX OPEN XML ELEMENT.Syntax-->**SAX OPEN XML ELEMENT** ( *document* ; *tag* {; *attribName* ; *attribValue*} {; *attribName2* ; *attribValue2* ; ... ; *attribNameN* ; *attribValueN*} )<!-- END REF-->
<!--REF #_command_.SAX OPEN XML ELEMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| tag | Text | &#8594;  | 開く要素の名前 |
| attribName | Text | &#8594;  | 属性名 |
| attribValue | Text | &#8594;  | 属性値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX OPEN XML ELEMENT.Summary-->SAX OPEN XML ELEMENT コマンドを使用して、*document* で参照されるXMLドキュメント中に新しい要素およびオプションで属性とその値を追加できます。<!-- END REF--> 

追加された要素はドキュメント中で開かれた状態です (終了タグは追加されません)。作成した要素を閉じるには、以下のいずれかの方法を使用します:

* [SAX CLOSE XML ELEMENT](sax-close-xml-element.md "SAX CLOSE XML ELEMENT") コマンドを使用する
* XMLドキュメントを閉じる。4Dは自動で必要なXML終了タグを追加します。

*tag*には、作成する要素の名前を渡します。この名前には文字、数字 “.”, “-“,”\_” aや “:”.などの文字のみを渡せます。名前はXMLの仕様に従っていなければなりません。無効な文字が*tag*に渡されると、エラーが生成されます。

オプションで*attribName*と*attribValue*引数を使用し、(変数、フィールド、またはリテラル値で) コマンドに1つ以上の属性名/値のペアを渡すことができます。

#### 例題 

以下のコードは:

```4d
 vElement:="Book"
 SAX OPEN XML ELEMENT($DocRef;vElement)
```

ドキュメントに以下の行を書き込みます: 

```XML
<Book
```

#### エラー管理 

*tag*に無効な文字が渡されるとエラーが生成されます。

#### 参照 

[SAX CLOSE XML ELEMENT](sax-close-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 853 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


