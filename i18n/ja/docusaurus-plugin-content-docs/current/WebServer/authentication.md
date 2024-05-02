---
id: authentication
title: 認証
---

Webユーザーに特定のアクセス権を与えるには、ユーザーを認証することが必要です。 認証とは、ユーザーの資格情報 (通常は名前とパスワード) を取得・処理する方法のことです。

## 認証モード

The 4D web server proposes three authentication modes, that you can select in the **Web**/**Options (I)** page of the Settings dialog box:

![](../assets/en/WebServer/authentication.png)

> Using a **custom** authentication is recommended.

### 概要

4D Webサーバーのアクセスシステムの処理を以下に図示します:

![](../assets/en/WebServer/serverAccess.png)

> Requests starting with `rest/` are directly handled by the [REST server](REST/configuration.md).

### カスタムの認証 (デフォルト)

このモードでは基本的に、ユーザーを認証する方法は開発者に委ねられています。 4D only evaluates HTTP requests [that require an authentication](#method-calls).

この認証モードは最も柔軟性が高く、以下のことが可能です:

- ユーザー認証をサードパーティ・アプリケーション (例: ソーシャルネットワーク、SSO) に委ねることができます。
- or, provide an interface to the user (e.g. a web form) so that they can create their account in your customer database; then, you can authenticate users with any custom algorithm (see [this example](sessions.md#example) from the "User sessions" chapter). 重要なのは、以下のようなコードを使って、決してパスワードを平文で保存しないことです:

```4d
//... ユーザーアカウントの作成
ds.webUser.password:=Generate password hash($password)  
ds.webUser.save()
```

See also [this example](gettingStarted.md#authenticating-users) from the "Getting started" chapter.

If no custom authentication is provided, 4D calls the [`On Web Authentication`](#on-web-authentication) database method (if it exists). $1 と $2 に加えて、ブラウザーとサーバーの IPアドレス ($3 と$ 4) のみが提供され、ユーザー名とパスワード ($5 と $6) は空です。 The method must return **True** in $0 if the user is successfully authenticated, then the resquested resource is served, or **False** in $0 if the authentication failed.

> **Warning:** If the `On Web Authentication` database method does not exist, connections are automatically accepted (test mode).

### BASIC認証

ユーザーがサーバーに接続するとダイアログボックスがブラウザー上に表示され、ユーザー名とパスワードの入力を求められます。

> ユーザーが入力したユーザー名とパスワードは暗号化されずに、HTTPリクエストヘッダーに含められて送信されます。 このモードで機密性を確保するには通常、HTTPSを必要とします。

入力された値は次のように評価されます:

- If the **Include 4D passwords** option is checked, user credentials will be first evaluated against the [internal 4D users table](Users/overview.md).
  - ブラウザーから送信されたユーザー名が 4D のユーザーテーブルに存在し、パスワードが正しい場合、接続は受け入れられます。 パスワードが正しくなければ接続は拒否されます。
  - If the user name does not exist in the table of 4D users, the [`On Web Authentication`](#on-web-authentication) database method is called. If the `On Web Authentication` database method does not exist, connections are rejected.
- If the **Include 4D passwords** option is not checked, user credentials are sent to the [`On Web Authentication`](#on-web-authentication) database method along with the other connection parameters (IP address and port, URL...) so that you can process them. If the `On Web Authentication` database method does not exist, connections are rejected.

> 4Dクライアントの Webサーバーでは、すべての 4Dクライアントマシンが同じユーザーテーブルを共有することに留意が必要です。 ユーザー名/パスワードの検証は 4D Serverアプリケーションでおこなわれます。

### DIGEST認証

DIGESTモードはより高いセキュリティレベルを提供します。認証情報は復号が困難な一方向ハッシュを使用して処理されます。

BASICモードと同様に、ユーザーは接続時に自分の名前とパスワードを入力する必要があります。 The [`On Web Authentication`](#on-web-authentication) database method is then called. DIGESTモードが有効の時、$6引数 (パスワード) は常に空の文字列が渡されます。 実際このモードを使用するとき、この情報はネットワークからクリアテキスト (平文) では渡されません。 It is therefore imperative in this case to evaluate connection requests using the `WEB Validate digest` command.

> これらのパラメーターの変更を反映させるためには、Webサーバーを再起動する必要があります。

## On Web Authentication

The `On Web Authentication` database method is in charge of managing web server engine access. 4D または 4D Server は、動的な HTTPリクエストを受け取ると、このデータベースメソッドを呼び出します。

### データベースメソッドの呼び出し

The `On Web Authentication` database method is automatically called when a request or processing requires the execution of some 4D code (except for REST calls). また、Webサーバーが無効な静的URLを受信した場合 (要求された静的ページが存在しない場合など) にも呼び出されます。

The `On Web Authentication` database method is therefore called:

- Webサーバーが、存在しないリソースを要求する URL を受信した場合
- when the web server receives a URL beginning with `4DACTION/`, `4DCGI/`...
- when the web server receives a root access URL and no home page has been set in the Settings or by means of the `WEB SET HOME PAGE` command
- when the web server processes a tag executing code (e.g `4DSCRIPT`) in a semi-dynamic page.

The `On Web Authentication` database method is NOT called:

- Webサーバーが有効な静的ページを要求する URL を受信したとき。
- when the web server reveives a URL beginning with `rest/` and the REST server is launched (in this case, the authentication is handled through the [`On REST Authentication` database method](REST/configuration.md#using-the-on-rest-authentication-database-method) or [Structure settings](REST/configuration.md#using-the-structure-settings)).

### シンタックス

**On Web Authentication**( _$1_ : Text ; _$2_ : Text ; _$3_ : Text ; _$4_ : Text ; _$5_ : Text ; _$6_ : Text ) -> $0 : Boolean

| 引数 | タイプ     |     | 説明                                              |
| -- | ------- | :-: | ----------------------------------------------- |
| $1 | Text    |  <- | URL                                             |
| $2 | Text    |  <- | HTTPヘッダー + HTTPボディ (32 KBまで) |
| $3 | Text    |  <- | Webクライアント (ブラウザー) の IPアドレス   |
| $4 | Text    |  <- | サーバーの IPアドレス                                    |
| $5 | Text    |  <- | ユーザー名                                           |
| $6 | Text    |  <- | パスワード                                           |
| $0 | Boolean |  -> | True = リクエストは受け入れられました、False = リクエストが拒否されました    |

これらの引数を以下のように宣言しなければなりません:

```4d
//On Web Authentication database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)
 
//Code for the method
```

Alternatively, you can use the [named parameters](Concepts/parameters.md#named-parameters) syntax:

```4d
// On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean

```

> All the `On Web Authentication` database method's parameters are not necessarily filled in. The information received by the database method depends on the selected [authentication mode](#authentication-mode)).

#### $1 - URL

The first parameter (`$1`) is the URL received by the server, from which the host address has been removed.

イントラネット接続の場合をみてみましょう。 4D Webサーバーマシンの IPアドレスを 123.45.67.89 とします。 以下の表は Webブラウザーに入力された URL に対して、$1 が受け取る値を示しています:

| Webブラウザーに入力された値                                                                                                                                   | $1 の値                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.45.67.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.45.67.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $2 - HTTPリクエストのヘッダーとボディ

The second parameter (`$2`) is the header and the body of the HTTP request sent by the web browser. Note that this information is passed to your `On Web Authentication` database method as it is. その内容は、接続を試みた Webブラウザーの仕様により異なります。

アプリケーションでこの情報を使用するには、開発者がヘッダーとボディを解析しなければなりません。 You can use the `WEB GET HTTP HEADER` and the `WEB GET HTTP BODY` commands.

> パフォーマンス上の理由により、$2 を介して渡されるデータのサイズは 32KB 以下でなくてはなりません。 これを超過する分は、4D HTTPサーバーにより切り取られます。

#### $3 - Webクライアントの IPアドレス

The `$3` parameter receives the IP address of the browser’s machine. この情報を使用して、イントラネットアクセスとインターネットアクセスを区別できます。

> 4D は IPv4 アドレスを、96-bit の接頭辞付きのハイブリッド型 IPv6/IPv4 フォーマットで返します。たとえば、::ffff:192.168.2.34 は、192.168.2.34 という IPv4 アドレスを意味します。 For more information, refer to the [IPv6 Support](webServerConfig.md#about-ipv6-support) section.

#### $4 - サーバー IPアドレス

The `$4` parameter receives the IP address used to call the web server. 4D はマルチホーミングをサポートしており、複数の IPアドレスを持つマシンを使用できます。 For more information, please refer to the [Configuration page](webServerConfig.md#ip-address-to-listen).

#### $5 と $6 - ユーザー名とパスワード

The `$5` and `$6` parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser. This dialog box appears for each connection, if [basic](#basic-protocol) or [digest](#digest-protocol) authentication is selected.

> ブラウザーから送信されたユーザー名が 4D に存在する場合、$6 引数 (ユーザーパスワード) はセキュリティのため渡されません。

#### $0 引数

The `On Web Authentication` database method returns a boolean in $0:

- $0=True: 接続を受け入れます。

- $0=False: 接続を受け入れません。

The `On Web Connection` database method is only executed if the connection has been accepted by `On Web Authentication`.

> **WARNING**<br/>If no value is set to $0 or if $0 is not defined in the `On Web Authentication` database method, the connection is considered as accepted and the `On Web Connection` database method is executed.

> - Do not call any interface elements in the `On Web Authentication` database method (`ALERT`, `DIALOG`, etc.) because otherwise its execution will be interrupted and the connection refused. 処理中にエラーが発生した場合も同様です。

### 例題

Example of the `On Web Authentication` database method in [DIGEST mode](#digest-protocol):

```4d
 // On Web Authentication Database Method
 #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \
 	$user : Text; $pw : Text) -> $valid : Boolean
  
 var $found : cs.WebUserSelection
 $valid:=False

 $found:=ds.WebUser.query("User === :1";$user)
 If($found.length=1) // User is found
 	$valid:=WEB Validate digest($user;[WebUser]password)
 Else
    $valid:=False // User does not exist
 End if
```
