---
id: sax-close-xml-element
title: SAX CLOSE XML ELEMENT
slug: /commands/sax-close-xml-element
displayed_sidebar: docs
---

<!--REF #_command_.SAX CLOSE XML ELEMENT.Syntax-->**SAX CLOSE XML ELEMENT** ( *document* )<!-- END REF-->
<!--REF #_command_.SAX CLOSE XML ELEMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開かれたドキュメントの参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX CLOSE XML ELEMENT.Summary-->SAX CLOSE XML ELEMENT コマンドは、 *document*で参照されるXMLドキュメントに、[SAX OPEN XML ELEMENT](sax-open-xml-element.md "SAX OPEN XML ELEMENT") コマンドを使用して開かれた最後の要素を閉じるのに必要な文を書き込みます。<!-- END REF-->

このコマンドの利用は任意です。実際4DはXMLドキュメントが閉じられるときに、閉じられていない要素に必要な終了タグを自動で追加します。

#### 例題 

最後に開かれた要素が*<Book>*であるとき、以下のコードは:

```4d
 SAX CLOSE XML ELEMENT($DocRef)
```

以下の行をドキュメントに書き込みます: 

```XML
</Book>
```

#### 参照 

[SAX OPEN XML ELEMENT](sax-open-xml-element.md)  
[SAX OPEN XML ELEMENT ARRAYS](sax-open-xml-element-arrays.md)  