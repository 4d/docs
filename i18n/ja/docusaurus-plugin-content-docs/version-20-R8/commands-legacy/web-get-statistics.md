---
id: web-get-statistics
title: WEB GET STATISTICS
slug: /commands/web-get-statistics
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET STATISTICS.Syntax-->**WEB GET STATISTICS** ( *pages* ; *hits* ; *usage* )<!-- END REF-->
<!--REF #_command_.WEB GET STATISTICS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pages | Text array | &#8592; | 最も閲覧されるページの名前 |
| hits | Integer array | &#8592; | 各ページのヒット数 |
| usage | Integer | &#8592; | キャッシュの使用率 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB GET STATISTICS.Summary-->**WEB GET STATISTICS**コマンドを使用すると、Webサーバのキャッシュに読み込まれた最も閲覧されたページに関する情報を取得 することができます。<!-- END REF-->そのため、これらの統計は、静止画、GIFピクチャ、JPEGピクチャ (100KB未満) とスタイルシート (.css) のみに適用されます。

**Note:** 4D Webサーバのキャッシュの設定に関する詳細は[QR DELETE COLUMN](qr-delete-column.md)を参照してください。

コマンドは最も閲覧されたページの名前をテキスト配列*pages*に代入します。倍長整数配列 *hits* は各ページの "ヒット" 数を受け取ります。引数 *usage* は各ページごとのWebキャッシュの使用率を受け取ります。

#### 例題 

Webキャッシュの統計を表示するセミダイナミックなページを生成します。これを行うために、"stats.shtm"という名前のスタティックHTMLページ (4Dは自動で.shtm拡張子のファイルを解析対象とします) 中に*<!––#4DSCRIPT/STATS––>*タグと、*vPages*と*vUsage*変数への参照を記述します。例えば

```HTML
<html>
<head><title>4D Web統計</title></head>
<!--#4DSCRIPT/STATS-->
<body>
<strong>使用されているキャッシュ (%): </strong>
<!--#4DTEXT vUsage-->
<hr>
<strong>最も参照されているページ: </strong>
<!--#4DHTML vPages-->
</body>
</html>
```

STATSプロジェクトメソッドには以下のコードを書きます:

```4d
 var $1 : Text
 var vPages : Text
 ARRAY TEXT(pages;0)
 ARRAY LONGINT(hits;0)
 var vUsage : Integer
 
 WEB GET STATISTICS(pages;hits;vUsage)
 For($i;1;Size of array(pages))
  // キャッシュ中に現れるページごとに
    vPages:=vPages+pages{$i}+"   "+String(hits{$i})+"
"
  // ページの名称とHTMLコードを挿入する
 End for
```

URLリンクまたは[WEB SEND FILE](web-send-file.md)コマンドを使用して"stats.shtm"ページを参照できます。


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 658 |
| スレッドセーフである | &check; |


