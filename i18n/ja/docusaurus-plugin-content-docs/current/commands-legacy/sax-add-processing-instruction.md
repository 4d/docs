---
id: sax-add-processing-instruction
title: SAX ADD PROCESSING INSTRUCTION
slug: /commands/sax-add-processing-instruction
displayed_sidebar: docs
---

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Syntax-->**SAX ADD PROCESSING INSTRUCTION** ( *document* ; *statement* )<!-- END REF-->
<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開かれたドキュメントの参照 |
| statement | Text | &#8594;  | ドキュメントに挿入するステートメント |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX ADD PROCESSING INSTRUCTION.Summary-->SAX ADD PROCESSING INSTRUCTIONコマンドは、*document*で参照されるXMLドキュメントにXML処理命令*statement*を追加します。<!-- END REF--> 

処理命令を使用してアプリケーションのタイプや必要に応じて追加のパラメタを指定し、解析できない外部エンティティを処理できます。 

コマンドはXMLに従ってデータステートメントをフォーマットします。しかしステートメント自身は解析されず、それが有効であることを確認するのは開発者の責任です。

#### 例題 

以下のコードにおいて: 

```4d
 vtInstruct:="xml-stylesheet type="+Char(Quotes)+"text/xsl"+Char(Quotes)+
 "href="+Char(Quotes)+"style.xsl"+Char(Quotes)
 SAX ADD PROCESSING INSTRUCTION($DocRef;vtInstruct)
```

上記のコードはドキュメントに以下の行を書き込みます: 

```XML
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### 参照 

[SAX GET XML PROCESSING INSTRUCTION](sax-get-xml-processing-instruction.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 857 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


