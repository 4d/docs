---
id: open-url
title: OPEN URL
slug: /commands/open-url
displayed_sidebar: docs
---

<!--REF #_command_.OPEN URL.Syntax-->**OPEN URL** ( *path* {; *appName*}{; *} )<!-- END REF-->
<!--REF #_command_.OPEN URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| path | Text | &#8594;  | 開くドキュメントまたはURL |
| appName | Text | &#8594;  | 使用するアプリケーション名 |
| * | 演算子 | &#8594;  | 指定した場合 = URLをエンコードしない, 省略した場合 = URLをエンコードする |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OPEN URL.Summary-->**OPEN URL** コマンドは、*appName* で指定したアプリケーションを使用して、*path* 引数に渡したファイルやURLを開きます。<!-- END REF-->引数には標準のURLまたはファイルのパス名のどちらかを渡す事ができます。コマンドは、OS X環境下ではコロン (':')、Windows環境下ではスラッシュ('\\')、またはfile://で始まるPosix URLを受け取る事ができます。

*appName* 引数が省略されていた場合、4Dはまず引数をファイルパス名として解釈しようとします。この場合4Dはシステムに、もっとも適切なアプリケーションを使用してファイルを開くよう、リクエストします (例えば、.htmlファイルにはブラウザを、.docファイルにはMS Wordを使用します)。この場合 \* 引数は無視されます。

*path* 引数に標準のURL (mailto:, news:, http:などのプロトコル) が渡された場合、4D はデフォルトのWebブラウザを開始し、URLにアクセスします。コンピュータに接続されたボリュームにブラウザがない場合、このコマンドは何も行いません。

*appName* parameter引数が渡された場合、コマンドはまずシステムに問い合わせをします。その名前のアプリケーションがインストールされていた場合、それが起動し、コマンドはそのアプリケーションに指定されたURLまたはドキュメントを開くようにリクエストします。  
Windows環境下では、アプリケーション名を認識するメカニズムは、スタートメニューの「ファイル名を指定して実行」で使用されているものと同じです。例えば、以下の様なものを渡す事ができます:

* "iexplore" で Internet Explorer を起動
* "chrome" で Chrome を起動(インストールされていれば)
* "winword" で MS Word を起動(インストールされていれば)

**注:** インストールされているアプリケーションの一覧は、以下のキーの*registry* にあります: HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\App Paths

OS X 環境下では、アプリケーションを探すのに、インストールされたアプリケーションを全て自動的にインデックスしてくれるFinderを使用します。パッケージ名を指定することで.app形式のアプリケーションをどれも認識する事ができます:

* "safari"
* "FireFox"
* "TextEdit"

*appName* 引数で指定されたアプリケーションが見つからない場合でも、エラーは返されません。コマンドはその引数が指定されなかったものとして実行されます。

4Dは自動でURLの特別文字をエンコードします。引数に*\**を渡すと、4DはURL特別文字のエンコードを行いません。このオプションを使用して、以下のようなURLの送信が可能です: "*http://www.server.net/page.htm?q=something*"

**注:** このコマンドはWebプロセスから呼ばれた時は動作しません。

#### 例題 1 

 以下では、このコマンドがURL引数として受け入れる異なるタイプの文字列を例示します:

```4d
 OPEN URL("http://www.4d.com")
 OPEN URL("file://C:/Users/Laurent/Documents/pending.htm")
 OPEN URL("C:\\Users\\Laurent\\Documents\\pending.htm")
 OPEN URL("mailto:jean_martin@4d.fr")
```

#### 例題 2 

 この例は最適なアプリケーションを起動するために使用できます: 

```4d
 $file:=Select document("";"";0)
 If(OK=1)
    OPEN URL(Document)
 End if
```

#### 例題 3 

*appName* 引数を使用すると同じテキストファイルを異なるアプリケーションを使用して開く事ができます:

```4d
 OPEN URL("C:\\temp\\cookies.txt") //ファイルをメモ帳で開く
 OPEN URL("C:\\temp\\cookies.txt";"winword") //ファイルをMS Wordで開く(インストールされていれば)
 OPEN URL("C:\\temp\\cookies.txt";"excel") //ファイルをMS Excelで開く(インストールされていれば)
```

#### 参照 

[LAUNCH EXTERNAL PROCESS](launch-external-process.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 673 |
| スレッドセーフである | &check; |


