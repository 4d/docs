---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( {* ;} *object* ; *url* )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| url | Text | &#8594;  | WebエリアにロードするURL |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA OPEN URL.Summary-->**WA OPEN URL**コマンドは、*url* 引数に渡したURLを、*\** と *object* 引数で指定したWebエリアにロードします。<!-- END REF-->

*url*に空の文字列を渡すと、**WA OPEN URL**コマンドは何も行わず、エラーも生成されません。Webエリアに空のページをロードするには、*url*引数に"about:blank"文字列を渡します。

既存の[OPEN URL](open-url.md)コマンドのように、**WA OPEN URL**はファイルを指定するための複数のシンタックスを*url* 引数に受け入れます:

* POSIXシンタックス: "file:///c:/My%20File"
* システムシンタックス: "c:\\MyFolder\\MyFile" (Windows) または "MyDisk:MyFolder:MyFile" (Mac OS).

**注:** 互換性のため (2つのスラッシュを使用する) "file://" シンタックスを4Dは受け入れますが、これはRFCに準拠していません。RFCに準拠した"file:///"シンタックス (3つのスラッシュ "/") 利用を推奨します。

Mac OSにおいてFileVault が有効化されている場合には、Posix シンタックスを使用する必要があります。[Convert path system to POSIX](convert-path-system-to-posix.md) コマンドを使用してシステムのパスを変換することができます。

このコマンドは、Webエリアに関連付けられた"URL"変数の値を更新することと同じ効果があります。例として、エリアのURL変数がMyWArea\_urlのとき:

```4d
 MyWArea_url:="http://www.4d.com/"
```

は以下と同じです:

```4d
 WA OPEN URL(MyWArea;"http://www.4d.com/")
```

#### 参照 

[OPEN URL](open-url.md)  
[WA OPEN BACK URL](wa-open-back-url.md)  
[WA OPEN FORWARD URL](wa-open-forward-url.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1020 |
| スレッドセーフである | &cross; |


