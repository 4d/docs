---
id: sax-get-xml-node
title: SAX Get XML node
slug: /commands/sax-get-xml-node
displayed_sidebar: docs
---

<!--REF #_command_.SAX Get XML node.Syntax-->**SAX Get XML node** ( *document* ) : Integer<!-- END REF-->
<!--REF #_command_.SAX Get XML node.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| document | Time | &#8594;  | 開いたドキュメントの参照 |
| 戻り値 | Integer | &#8592; | 関数から返されたイベント |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SAX Get XML node.Summary-->SAX Get XML node コマンドは、*document* で参照されるXMLドキュメントが解析されている間、SAXイベントのタイプを示す倍長整数値を返します。<!-- END REF-->

返されるイベントは""テーマの定数にあります:

| 定数                         | 型    | 値 |
| -------------------------- | ---- | - |
| XML CDATA                  | 倍長整数 | 7 |
| XML Comment                | 倍長整数 | 2 |
| XML DATA                   | 倍長整数 | 6 |
| XML End Document           | 倍長整数 | 9 |
| XML End Element            | 倍長整数 | 5 |
| XML Entity                 | 倍長整数 | 8 |
| XML Processing Instruction | 倍長整数 | 3 |
| XML Start Document         | 倍長整数 | 1 |
| XML Start Element          | 倍長整数 | 4 |

#### 例題 

以下の例題でイベントの処理方法を示します:   
  
```4d
 DocRef:=Open document("";"xml";Read Mode)
 If(OK=1)
    Repeat
       MyEvent:=SAX Get XML node(DocRef)
       Case of
          :(MyEvent=XML Start Document)
             DoSomething
          :(MyEvent=XML Comment)
             DoSomethingElse
       End case
    Until(MyEvent=XML End Document)
    CLOSE DOCUMENT(DocRef)
 End if
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKには1が、そうでなければ0が設定されエラーが生成されます。
