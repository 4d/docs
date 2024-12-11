---
id: sax-add-xml-comment
title: SAX ADD XML COMMENT
slug: /commands/sax-add-xml-comment
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD XML COMMENT.Syntax-->**SAX ADD XML COMMENT** ( *document* ; *comment* )<!-- END REF-->
<!--REF #_command_.SAX ADD XML COMMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開かれたドキュメントの参照 |
| comment | Text | &#8594;  | 追加するコメント |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX ADD XML COMMENT.Summary-->SAX ADD XML COMMENT コマンドは*document*で参照されるXMLドキュメントに、*comment*で指定したコメントを追加します。<!-- END REF-->

XMLのコメントはXMLインタプリタが内容を解析しないテキストです。XMLコメントは <!-- と --> 文字の間に書かれなければなりません。 

#### 例題 

以下のコードは:

```4d
 vComment:="Created by 4D"
 SAX ADD XML COMMENT($DocRef;vComment)
```

ドキュメントに以下のコードを書き込みます: 

```XML
<!--Created by 4D-->
```

#### システム変数およびセット 

 コマンドが正しく実行されるとシステム変数OKに1が設定され、エラーが発生すると0が設定されます。

#### エラー管理 

エラーが発生した場合、コマンドはエラー処理メソッドでとらえることのできるエラーを返します。

#### 参照 

[SAX ADD XML DOCTYPE](sax-add-xml-doctype.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 852 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


