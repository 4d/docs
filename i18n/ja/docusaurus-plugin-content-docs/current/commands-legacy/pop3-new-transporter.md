---
id: pop3-new-transporter
title: POP3 New transporter
slug: /commands/pop3-new-transporter
displayed_sidebar: docs
---

<!--REF #_command_.POP3 New transporter.Syntax-->**POP3 New transporter** ( *server* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.POP3 New transporter.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| server | Object | &srarr; | Mail server information |
| 戻り値 | Object | &larr; | POP3 transporter object |

<!-- END REF-->

#### Description 

<!--REF #_command_.POP3 New transporter.Summary-->**POP3 New transporter** コマンドは、*server* 引数に渡された情報に基づいて新しいPOP3 接続を作成し、新しい*transporter* オブジェクトを返します。<!-- END REF-->返されたオブジェクトは一般的にEメールの受信のためなどに使用されます。

*server* 引数には、以下のプロパティを格納しているオブジェクトを渡します:

| **プロパティ**                | **型** | **詳細**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                     | テキスト  | POP3 通信に使用するホストサーバーの名前またはIP アドレス                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| port                     | 数値    | (任意) POP3 通信に使用するポート番号。デフォルト値=995                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| authenticationMode       | テキスト  | POP3 サーバーとのセッションを開くのに使用する認証モード(\*)。取りうる値: <table> <thead> <tr> <td>定数</td> <td>値</td> <td>コメント</td> </tr> </thead> <tbody> <tr> <td>POP3 authentication APOP</td> <td>APOP</td> <td>APOP プロトコルを使用したPOP3 認証</td> </tr><tr> <td>POP3 authentication CRAM-MD5</td> <td>CRAM-MD5</td> <td>CRAM-MD5 プロトコルを使用したPOP3 認証</td> </tr><tr> <td>POP3 authentication login</td> <td>LOGIN</td> <td>LOGIN プロトコルを使用したPOP3 認証</td> </tr><tr> <td>POP3 authentication OAUTH2</td> <td>OAUTH2</td> <td>OAuth 2 プロトコルを使用したPOP3 認証</td> </tr><tr> <td>POP3 authentication plain</td> <td>PLAIN</td> <td>PLAIN プロトコルを使用したPOP3 認証</td> </tr> </tbody> </table> |
| accessTokenOAuth2        | テキスト  | OAuth 2 認証資格情報を表すテキスト文字列。*authenticationMode*がOAUTH2 の場合のみ使用されます。*accessTokenOAuth2* が使用されているが*authenticationMode* が省略されていた場合、OAuth2 プロトコルが使用されます(サーバーで許可されていれば)。 **注**: アクセストークンには残存時間が決められており、一般的には1時間で失効します。アクセストークンが失効すると、自動再接続は不可能です(例: サーバーから接続解除したなど)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| user                     | テキスト  | サーバーとの認証のためのユーザー名                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| password                 | テキスト  | サーバーとの認証のためのユーザーパスワード                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| acceptUnsecureConnection | ブール   | True を指定すると、暗号化された接続が使用できない場合に4D に暗号化されていない接続を確立することを許可します(\*\*)。False を指定すると、暗号化された接続が不可能な場合にはエラーが返されます。デフォルト値=False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| connectionTimeOut        | 数値    | (任意) サーバーとの接続を確立するまでの最大の待機時間(秒単位)。デフォルト値=30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| logFile                  | テキスト  | (任意) ログファイルのファイルパス。(カレントのLogs フォルダからの)相対パス、または絶対パスを指定可能です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

(\*) *authenticationMode* がnull または未定義の場合、サーバーでサポートされている最も安全な認証が使用されます。

(\*\*) 利用可能なPOP3 の保護されたポートは以下の通りです:

* 110: POP3 非暗号化ポート
* 995: POP3 の STARTTLS アップグレード(サーバーでサポートされていれば)

**返されるオブジェクト**

返される*transporter* オブジェクトには、以下の**読み出し専用**プロパティとメソッドが格納されています:

| **プロパティ**                              | **型** | **詳細**                                                        |
| -------------------------------------- | ----- | ------------------------------------------------------------- |
| *transporter.host*                     | テキスト  | メール通信に使用されたホストサーバーの名前またはIP アドレス                               |
| *transporter.port*                     | 数値    | メール通信に使用されたポート番号                                              |
| *transporter.connectionTimeOut*        | 数値    | サーバーとの接続を確立するまでの最大の待機時間(秒単位)                                  |
| *transporter.acceptUnsecureConnection* | ブール   | 暗号化された接続が不可能な場合に暗号化されていない接続が4D に許可されているならばTrue、それ以外の場合にはFalse |
| *transporter.authenticationMode*       | テキスト  | メールサーバーとのセッションを開くのに実際に使用された認証モード                              |
| *transporter.user*                     | テキスト  | サーバーとの認証に使用されたユーザー名                                           |
| *transporter.logFile*                  | テキスト  | ログファイルのフルパス(あれば)                                              |

| **メソッド**                               | **詳細**                         |
| -------------------------------------- | ------------------------------ |
| *POP3\_transporter.checkConnection( )* | 認証をチェックします                     |
| *POP3\_transporter.delete( )*          | 特定のEメールに対して削除のための特殊なフラッグを設定します |
| *POP3\_transporter.getBoxInfo( )*      | Eメールの受信箱についての情報を返します           |
| *POP3\_transporter.getMail( )*         | 特定のEメールを返します                   |
| *POP3\_transporter.getMailInfo( )*     | 特定のEメールについての情報を返します            |
| *POP3\_transporter.getMailInfoList( )* | Eメールの情報のコレクションを返します            |
| *POP3\_transporter.undeleteAll( )*     | 全てのEメールから削除フラグを除去します           |
| *POP3\_transporter.getMIMEAsBlob( )*   | 特定のEメールのMIMEコンテンツをBLOBの中に返します  |

**注**: POP3 接続は、*transporter* オブジェクトが消去された時点で自動的に閉じられます。
