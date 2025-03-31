---
id: web-send-file
title: WEB SEND FILE
slug: /commands/web-send-file
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND FILE.Syntax-->**WEB SEND FILE** ( *htmlFile* )<!-- END REF-->
<!--REF #_command_.WEB SEND FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| htmlFile | Text | &#8594;  | HTMLファイルへのHTMLパス名 または、WEB SEND FILEを終了させる場合空の文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WEB SEND FILE.Summary-->**WEB SEND FILE**コマンドは*htmlFile*に渡すパス名を持つHTMLページやWebファイルをWebブラウザへ送ります。<!-- END REF--> 

デフォルトで、4Dはドキュメントをデータベース設定で定義されているHTMLルートフォルダ内で検索します。

コマンドは (ディレクトリやフォルダー名がスラッシュで区切られる) Posixシンタックスまたはシステムシンタックスを受け入れます。  
無効なパス名を指定すると、4DはOSのファイル管理に関連するエラーを生成します。このエラーを[ON ERR CALL](on-err-call.md)でインストールするエラー処理メソッドでとらえることができます。メソッドがダイアログボックスや警告を表示すると、それはWebブラウザに表示されます。

**WEB SEND FILE**コマンドが実行されると、OKシステム変数が更新されます。送るファイルが存在していて、タイムアウトになっていなければ、OKシステム変数は1になります。その他の場合は0になります。

**注:** **WEB SEND FILE**コマンドをWebプロセスでないプロセスから呼び出した場合、コマンドは何も行わず、エラーも返しません。呼び出しは無効となります。

ドキュメントのタイプが対応する場合、送信前に*4DSCRIPT*等のタグが解析されます。

#### 例題 

データベースのHTMLルートフォルダはストラクチャーと同階層の**WebFolder**に設定されていて、以下のディレクトリにファイルが置かれています。 

```4d
 ../WebFolder/HTM\MyPage.HTM
```

Webページ "MyPage.HTM"を送信するには以下のようにします。

```4d
 WEB SEND FILE("HTM/MyPage.HTM")
```

#### システム変数およびセット 

送られるファイルが存在する場合やタイムアウトでない場合、OKシステム変数に1が代入されます。その他の場合は0になります。

#### 参照 

[WEB SEND BLOB](web-send-blob.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 619 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


