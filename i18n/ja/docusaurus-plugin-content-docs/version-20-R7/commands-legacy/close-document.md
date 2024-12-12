---
id: close-document
title: CLOSE DOCUMENT
slug: /commands/close-document
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE DOCUMENT.Syntax-->**CLOSE DOCUMENT** ( *DocRef* )<!-- END REF-->
<!--REF #_command_.CLOSE DOCUMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Time | Time | &#8594;  | ドキュメント参照番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLOSE DOCUMENT.Summary-->CLOSE DOCUMENTは*DocRef*で指定したドキュメントを閉じます。<!-- END REF-->

ドキュメントを閉じることは、ファイルに書き込んだデータを確実に保存する唯一の方法です。コマンド[Open document](open-document.md "Open document")、[Create document](create-document.md "Create document")または[Append document](append-document.md "Append document")で開いたドキュメントはすべて、必ずこのコマンドを使用して閉じなければなりません。

#### 例題 

以下の例を使用して、新しいドキュメントを作成し、文字列"こんにちは" を書き込み、ドキュメントを閉じます。

```4d
 var vhDocRef : Time
 vhDocRef:=Create document("")
 If(OK=1)
    SEND PACKET(vhDocRef;"こんにちは") //ドキュメントに1つの言葉を書き込む
    CLOSE DOCUMENT(vhDocRef) //ドキュメントを閉じる
 End if
```

#### 参照 

[Append document](append-document.md)  
[Create document](create-document.md)  
[Open document](open-document.md)  