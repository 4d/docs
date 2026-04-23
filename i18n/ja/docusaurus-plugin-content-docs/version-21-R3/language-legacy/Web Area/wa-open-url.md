---
id: wa-open-url
title: WA OPEN URL
slug: /commands/wa-open-url
displayed_sidebar: docs
---

<!--REF #_command_.WA OPEN URL.Syntax-->**WA OPEN URL** ( * ; *object* : Text ; *url* : Text )<br/>**WA OPEN URL** ( *object* : Variable, Field ; *url* : Text )<!-- END REF-->
<!--REF #_command_.WA OPEN URL.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594; | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| url | Text | &#8594; | WebエリアにロードするURL |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL Release 2|初出|

</details>
</div>

## 説明 

<!--REF #_command_.WA OPEN URL.Summary-->**WA OPEN URL**コマンドは、*url* 引数に渡したURLを、*\** と *object* 引数で指定したWebエリアにロードします。<!-- END REF-->

*url*に空の文字列を渡すと、**WA OPEN URL**コマンドは何も行わず、エラーも生成されません。Webエリアに空のページをロードするには、*url*引数に"about:blank"文字列を渡します。

既存の[OPEN URL](../commands/open-url)コマンドのように、**WA OPEN URL**はファイルを指定するための複数のシンタックスを*url* 引数に受け入れます:

* POSIXシンタックス: "file:///c:/My%20File"
* システムシンタックス: "c:\\MyFolder\\MyFile" (Windows) または "MyDisk:MyFolder:MyFile" (macOS).

**注:** 互換性のため (2つのスラッシュを使用する) "file://" シンタックスを4Dは受け入れますが、これはRFCに準拠していません。RFCに準拠した"file:///"シンタックス (3つのスラッシュ "/") 利用を推奨します。

Mac OSにおいてFileVault が有効化されている場合には、Posix シンタックスを使用する必要があります。[Convert path system to POSIX](../commands/convert-path-system-to-posix) コマンドを使用してシステムのパスを変換することができます。

このコマンドは、Webエリアに関連付けられた"URL"変数の値を更新することと同じ効果があります。例として、エリアのURL変数がMyWArea\_urlのとき:

```4d
 MyWArea_url:="http://www.4d.com/"
```

は以下と同じです:

```4d
 WA OPEN URL(MyWArea;"http://www.4d.com/")
```

## 参照 

[OPEN URL](../commands/open-url)  
[WA OPEN BACK URL](../commands/wa-open-back-url)  
[WA OPEN FORWARD URL](../commands/wa-open-forward-url)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1020 |
| スレッドセーフである | no |


