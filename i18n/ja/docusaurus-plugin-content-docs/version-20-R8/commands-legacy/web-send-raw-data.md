---
id: web-send-raw-data
title: WEB SEND RAW DATA
slug: /commands/web-send-raw-data
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND RAW DATA.Syntax-->**WEB SEND RAW DATA** ( *data* {; *} )<!-- END REF-->
<!--REF #_command_.WEB SEND RAW DATA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| data | Blob | &#8594;  | 送るHTTPデータ |
| * | 演算子 | &#8594;  | チャンクして送る |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SEND RAW DATA.Summary-->**WEB SEND RAW DATA**コマンドを使用すると、4D Webサーバはチャンクが可能な"生"HTTPデータを送ります。<!-- END REF-->

引数 *data* はHTTP応答の2つのパートを含みます。つまり、ヘッダとボディです。データは事前にフォーマットされずにサーバから送られます。ただし、応答ヘッダとボディの有効性を確認するため、4Dはそれらに対して基本的なチェックを行います。

* ヘッダが不完全またはHTTPプロトコルの仕様に準拠していない場合、4Dはヘッダを変更します。
* HTTPリクエストが不完全な場合、4Dは不足している情報を追加します。例えば、リクエストをリダイレクトしたい場合、以下のように記述します。
  
```HTML
HTTP/1.1 302
Location: http://...
```

以下の行のみを渡すと、

```HTML
Location: http://...
```

4DがHTTP/1.1 302 を追加して、そのリクエストを完成します。

オプション引数を用いると、応答を"チャンク" して送るよう指定できます。応答をいくつかのチャンクに切り分けると、全体の長さを認識せずに、サーバが応答を送る際に役に立ちます (例えば、応答が生成されていない場合) 。すべてのHTTP/1.1互換ブラウザはチャンクされた応答を受け入れます。  
引数 *\** を渡すと、Webサーバは、必要に応じて、応答ヘッダに *transfer-encoding: chunked* フィールドを自動的に取り入れます (応答ヘッダを手動で処理することも可能です) 。チャンクされたオプションのシンタックスを考慮するために、応答の残りの部分がフォーマットされます。 チャンクされた応答は、1つのヘッダと未定義中図の"チャンク"ボディを含みます。

同じメソッド内で実行された**WEB SEND RAW DATA**(data;\*) に続くすべての**WEB SEND RAW DATA**ステートメントは応答の一部と見なされます (それらが引数 *\** を含んでいるかどうかに関係なく) 。メソッドの実行が終了した際、サーバはチャンクを送ることを停止します。

**注:** WebクライアントがHTTP/1.1をサポートしていない場合、4Dは応答をHTTP/1.0互換フォーマットへ変換します (送られたデータはチャンクされません) 。ただし、この場合、必ずしも期待している結果を得られるとは限りません。そのため、WebブラウザがHTTP/1.1をサポートしているかどうかをチェックして適切な応答を送ることをお勧めします。これを実行するには、以下のメソッドを使用します。 

```4d
 var $0 : Boolean
 ARRAY TEXT(arFields;0)
 ARRAY TEXT(arValues;0)
 WEB GET HTTP HEADER(arFields;arValues)
 $0:=False
 If(Size of array(arValues)>=3)
    If(Position("HTTP/1.1";arValues{3})>0)
       $0:=True // ブラウザーがHTTP/1.1をサポートすればTrueを返す
    End if
 End if
```

新しい[WEB GET HTTP BODY](web-get-http-body.md)コマンド や "Webサーバ" テーマの他のコマンドと組み合わせると、このコマンドは4Dデベロッパが利用できるツールの範囲を完成させます。これは、新旧のHTTP接続の処理を全体的にカスタマイズするためのものです。これら異なるツールを以下の図に表します。

![](../assets/en/commands/pict856016.en.png)

#### 例題 

**WEB SEND RAW DATA**コマンドを用いたチャンクオプションの使用例を表します。データ (数字のシーケンス) はループされオンザフライで生成された100個のチャンクで送られます。応答のヘッダは、明確に設定されません。**WEB SEND RAW DATA**コマンド が応答のヘッダを自動的に送り、それに *transfer-encoding: chunked* フィールドを挿入します。それは引数 *\** が適用されているからです。

```4d
 var $cpt : Integer
 var $my_blob : Blob
 var $output : Text
 
 For($cpt;1;100)
    $output:="["+String($cpt)+"]"
    TEXT TO BLOB($output;$my_blob;UTF8 text without length)
    WEB SEND RAW DATA($my_blob;*)
 End for
```

#### 参照 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB GET HTTP HEADER](web-get-http-header.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 815 |
| スレッドセーフである | &check; |


