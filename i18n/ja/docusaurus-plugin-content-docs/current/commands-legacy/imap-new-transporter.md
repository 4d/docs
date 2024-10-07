---
id: imap-new-transporter
title: IMAP New transporter
slug: /commands/imap-new-transporter
displayed_sidebar: docs
---

<!--REF #_command_.IMAP New transporter.Syntax-->**IMAP New transporter** ( *server* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.IMAP New transporter.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| server | オブジェクト | &#x1F852; | Mail server information |
| 戻り値 | オブジェクト | &#x1F850; | IMAP transporter object |

<!-- END REF-->

#### 説明 

<!--REF #_command_.IMAP New transporter.Summary-->**IMAP New transporter** コマンドは、*server* 引数に渡された情報に基づいて新しいIMAP 接続を作成し、新しい*transporter* オブジェクトを返します。<!-- END REF-->返されたオブジェクトは一般的にEメールの受信のためなどに使用されます。

*server* 引数には、以下のプロパティを格納しているオブジェクトを渡します:

| **プロパティ**                | **型 <br/>** | **詳細**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| host                     | テキスト                | IMAP 通信に使用するホストサーバーの名前またはIP アドレス                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| port                     | 数値                  | IMAP 通信に使用するポート番号。デフォルト値=993                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| connectionTimeOut        | 数値                  | サーバーとの接続を確立するまでの最大の待機時間(秒単位)。デフォルト値=30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| authenticationMode       | テキスト                | IMAP サーバーとのセッションを開くのに使用する認証モード(\*)。取りうる値:<br/> <table> <thead> <tr> <td>定数</td> <td>値</td> <td>コメント</td> </tr> </thead> <tbody> <tr> <td>IMAP authentication CRAM MD5</td> <td>CRAM-MD5</td> <td>CRAM-MD5 プロトコルを使用したIMAP 認証</td> </tr><tr> <td>IMAP authentication login</td> <td>LOGIN</td> <td>LOGIN プロトコルを使用したIMAP 認証</td> </tr><tr> <td>IMAP authentication OAUTH2</td> <td>OAUTH2</td> <td>OAuth 2 プロトコルを使用したIMAP 認証</td> </tr><tr> <td>IMAP authentication plain</td> <td>PLAIN</td> <td>PLAIN プロトコルを使用したIMAP 認証</td> </tr> </tbody> </table> |
| accessTokenOAuth2        | テキスト                | OAuth 2 認証視覚情報を表すテキスト文字列。*authenticationMode*がOAUTH2 の場合のみ使用されます。*accessTokenOAuth2* が使用されているが*authenticationMode* が省略されていた場合、OAuth2 プロトコルが使用されます(サーバーで許可されていれば)。<br/><br/>**注**: アクセストークンには残存時間が決められており、一般的には1時間で失効します。アクセストークンが失効すると、自動再接続は不可能です(例: サーバーから接続解除したなど)。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| user                     | テキスト                | サーバーとの認証のためのユーザー名                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| password                 | テキスト                | サーバーとの認証のためのユーザーパスワード                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| acceptUnsecureConnection | ブール                 | True を指定すると、暗号化された接続が使用できない場合に4D に暗号化されていない接続を確立することを許可します(\*\*)。False を指定すると、暗号化された接続が不可能な場合にはエラーが返されます。デフォルト値=False                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| logFile                  | テキスト                | 拡張されたログファイルのファイルパス(\*\*\*)。(カレントのLogs フォルダからの)相対パス、または絶対パスを指定可能です。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| checkConnectionDelay     | 数値                  | サーバーへの接続をチェックしない最大時間(秒単位)。二つのメソッドの呼び出しの間隔がこの時間を超えた場合、サーバーへの接続がチェックされます。デフォルト値:300                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

(\*) *authenticationMode* がnull または未定義の場合、サーバーでサポートされている最も安全な認証が使用されます。

(\*\*) 利用可能なIMAP の保護されたポートは以下の通りです:

* 143: IMAP 非暗号化ポート
* 993: IMAP の STARTTLS アップグレード(サーバーによってサポートされていれば)

(\*\*\*) (コマンドによって有効化される)通常のログファイルとは異なり、拡張されたログファイルは全ての送信メールのMIME コンテンツを保存し、サイズに制限はありません。詳細な情報については、*4DIMAPLog.txt* の章を参照してください。

**警告**: 定義されたタイムアウトが、サーバータイムアウトより短いようにして下さい。そうでない場合、クライアントタイムアウトは無意味になります。

**返されるオブジェクト**

返される*transporter* オブジェクトには、以下の**読み出し専用**プロパティとメソッドが格納されています:

| ****プロパティ**                            | **型** | ****詳細**                                                      |
| -------------------------------------- | ----- | ------------------------------------------------------------- |
| *transporter.host*                     | テキスト  | メール通信に使用されたホストサーバーの名前またはIP アドレス                               |
| *transporter.port*                     | 数値    | メール通信に使用されたポート番号                                              |
| *transporter.connectionTimeOut*        | 数値    | サーバーとの接続を確立するまでの最大の待機時間(秒単位)                                  |
| *transporter.acceptUnsecureConnection* | ブール   | 暗号化された接続が不可能な場合に暗号化されていない接続が4D に許可されているならばTrue、それ以外の場合にはFalse |
| *transporter.authenticationMode*       | テキスト  | メールサーバーとのセッションを開くのに実際に使用された認証モード                              |
| *transporter.user*                     | テキスト  | サーバーとの認証に使用されたユーザー名                                           |
| *transporter.logFile*                  | テキスト  | ログファイルのフルパス(あれば)                                              |
| *transporter.checkConnectionDelay*     | 数値    | サーバーへの接続をチェックするまでの最大時間(秒単位)                                   |

| **メソッド**                               | **詳細**                             |
| -------------------------------------- | ---------------------------------- |
| *IMAP\_transporter.addFlags( )*        | メッセージのフラグを更新します                    |
| *IMAP\_transporter.append( )*          | Eメールをメールボックスに追加します                 |
| *IMAP\_transporter.checkConnection( )* | 認証をチェックします                         |
| *IMAP\_transporter.copy( )*            | メッセージをあるメールボックスから別のメールボックスへとコピーします |
| *IMAP\_transporter.delete( )*          | メッセージに"削除"フラグをつけます                 |
| *IMAP\_transporter.expunge( )*         | "削除"フラグがつけられたメッセージを削除します           |
| *IMAP\_transporter.selectBox( )*       | メールボックスを選択します                      |
| *IMAP\_transporter.getBoxList( )*      | メールボックスの一覧を返します                    |
| *IMAP\_transporter.getDelimiter( )*    | 階層区切り文字を返します                       |
| *IMAP\_transporter.getBoxInfo( )*      | メールボックスについての情報を返します                |
| *IMAP\_transporter.getMail( )*         | 特定のEメールを返します                       |
| *IMAP\_transporter.getMails( )*        | Eメールのコレクションを返します                   |
| *IMAP\_transporter.getMIMEAsBlob( )*   | 特定のEメールのMIME コンテンツをBLOB として返します    |
| *IMAP\_transporter.move( )*            | メッセージをあるメールボックスから別のメールボックスへと移動します  |
| *IMAP\_transporter.numToID( )*         | メッセージのシークエンス番号を固有IDへと変換します         |
| *IMAP\_transporter.removeFlags( )*     | メッセージからフラグを取り消します                  |
| *IMAP\_transporter.searchMails( )*     | えられた条件に合致するメッセージを検索します             |

**注**: IMAP 接続は、*transporter* オブジェクトが消去された時点で自動的に閉じられます。
