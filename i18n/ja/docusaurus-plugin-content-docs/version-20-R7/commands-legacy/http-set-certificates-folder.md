---
id: http-set-certificates-folder
title: HTTP SET CERTIFICATES FOLDER
slug: /commands/http-set-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Syntax-->**HTTP SET CERTIFICATES FOLDER** ( *certificatesFolder* )<!-- END REF-->
<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| certificatesFolder | Text | &#8594;  | クライアント証明書フォルダのパス名と名前 |

<!-- END REF-->

:::info 互換性

このコマンドは互換性のためだけに維持されています。現在は [`4D.HTTPRequest クラス`](../API/HTTPRequestClass.md) を使用することが推奨されています。

:::

#### 説明 

<!--REF #_command_.HTTP SET CERTIFICATES FOLDER.Summary-->**HTTP SET CERTIFICATES FOLDER** コマンドは、 カレントセッションの全てのプロセスにおいてアクティブな証明書フォルダを変更します。<!-- END REF-->

クライアント証明書フォルダはWebサーバーからクライアント証明書の要求があったときに4Dが探しに行くフォルダです。デフォルトでは、**HTTP SET CERTIFICATES FOLDER** コマンドが実行されていない限り、4Dはストラクチャーファイルの隣に作成される "ClientCertificatesFolder" というフォルダを使用します。このフォルダは必要がある場合にのみ作成されます。

4D v14では、複数のクライアント証明書を使用できるようになりました。

*certificatesFolder* 引数には、クライアント証明書を内包しているユーザー定義のフォルダのパス名を渡します。アプリケーションのストラクチャーファイルからの相対パスか、ま たは絶対パスを渡すことができます。パスは以下の例のようにシステムシンタックスに従って書かれている必要があります:

* (OS X): Disk:Applications:myserv:folder
* (Windows): C:\\Applications\\myserv\\folder

自動的に作成されます。

このコマンドが実行されると新しいパスはその後に実行される[HTTP Request](http-request.md) などのコマンドに対し、直ちに有効になります(アプリケーションを再起動する必要はありません)。このコマンドはデータベースの全てのプロセスで使用されます。

指定されたフォルダが定義された場所にない場合、または*certificatesFolder* に渡したパス名が有効でない場合、エラーが生成されます。このエラーは [ON ERR CALL](on-err-call.md) によって実装されたエラーハンドリングメソッドによって割り込むことができます。

#### SSL 証明書について 

[このページで説明されているように](../Admin/tls.md)、4D によって管理されるSSL 証明書は**PEMフォーマット**でなければなりません。証明書のプロバイダー(例えば[startssl](https://www.startssl.com/) など)が証明書を .crt、 .pfx または .p12(フォーマットはブラウザによっても異なります)などのバイナリフォーマットで送ってきた場合、それを使用するためにはPEMフォーマットへと変換する必要があります。*sslshopper* などのようにこのような変換をオンライン上で行えるWeb サイトも存在します。

#### 例題 

証明書フォルダを一時的に変更したい場合を考えます:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //カレントフォルダを保存
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // 特定のリクエストの実行
 HTTP SET CERTIFICATES FOLDER($certifFolder) //以前のフォルダを復元
```

#### 参照 

[GENERATE CERTIFICATE REQUEST](generate-certificate-request.md)  
[HTTP Get certificates folder](http-get-certificates-folder.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1306 |
| スレッドセーフである | &check; |


