---
id: sax-add-xml-doctype
title: SAX ADD XML DOCTYPE
slug: /commands/sax-add-xml-doctype
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML DOCTYPE.Syntax-->**SAX ADD XML DOCTYPE** ( *document* ; *docType* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML DOCTYPE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| docType | Text | &#8594;  | 追加するDocType |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX ADD XML DOCTYPE.Summary-->SAX ADD XML DOCTYPE コマンドは、*document*で参照されるXMLドキュメントに*docType* 引数で指定されたDocType文を追加します。<!-- END REF-->

DocType文は書かれたXMLのタイプを示し、使用される Document Type Declaration (DTD) を指定するために使用されます。DocType文は通常以下の形式です: 

#### 例題 

以下のコードは:

```4d
 vDocType:="SYSTEM Books \"Book.DTD\""
 SAX ADD XML DOCTYPE($DocRef;vDocType)
```

ドキュメントに以下の行を書き込みます: 

```XML
<<!DOCTYPE SYSTEM Books "Book.DTD">
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### エラー管理 

エラーが発生した場合、コマンドはエラー処理メソッドでとらえることのできるエラーを返します。

#### 参照 

[SAX ADD XML COMMENT](sax-add-xml-comment.md)  