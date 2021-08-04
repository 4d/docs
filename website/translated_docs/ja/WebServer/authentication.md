---
id: authentication
title: 認証
---

Authenticating users is necessary when you want to provide specific access rights to web users. Authentication designates the way the information concerning the user credentials (usually name and password) are collected and processed.


## Authentication modes

The 4D web server proposes three authentication modes, that you can select in the **Web**/**Options (I)** page of the Settings dialog box:

![](assets/en/WebServer/authentication.png)

> Using a **custom** authentication is recommended.

### 概要

The operation of the 4D web server's access system is summarized in the following diagram:

![](assets/en/WebServer/serverAccess.png)

> Requests starting with `rest/` are directly handled by the [REST server](REST/configuration.md).


### Custom (default)

Basically in this mode, it's up to the developer to define how to authenticate users. 4D only evaluates HTTP requests [that require an authentication](#method-calls).

This authentication mode is the most flexible because it allows you to:

- either, delegate the user authentication to a third-party application (e.g. a social network, SSO);
- or, provide an interface to the user (e.g. a web form) so that they can create their account in your customer database; then, you can authenticate users with any custom algorithm (see [this example](sessions.md#example) from the "User sessions" chapter). The important thing is that you never store the password in clear, using such code:

```4d
//... user account creation
ds.webUser.password:=Generate password hash($password)  
ds.webUser.save()
```

See also [this example](gettingStarted.md#authenticating-users) from the "Getting started" chapter.

If no custom authentication is provided, 4D calls the [`On Web Authentication`](#on-web-authentication) database method (if it exists). In addition to $1 and $2, only the IP addresses of the browser and the server ($3 and $4) are provided, the user name and password ($5 and $6) are empty. The method must return **True** in $0 if the user is successfully authenticated, then the resquested resource is served, or **False** in $0 if the authentication failed.

> **Warning:** If the `On Web Authentication` database method does not exist, connections are automatically accepted (test mode).


### BASIC認証

When a user connects to the server, a standard dialog box appears on their browser in order for them to enter their user name and password.

> The name and password entered by the user are sent unencrypted in the HTTP request header. This mode typically requires HTTPS to provide confidentiality.

Entered values are then evaluated:

- If the **Include 4D passwords** option is checked, user credentials will be first evaluated against the [internal 4D users table](Users/overview.md).
    - If the user name sent by the browser exists in the table of 4D users and the password is correct, the connection is accepted. If the password is incorrect, the connection is refused.
    - If the user name does not exist in the table of 4D users, the [`On Web Authentication`](#on-web-authentication) database method is called. If the `On Web Authentication` database method does not exist, connections are rejected.

- If the **Include 4D passwords** option is not checked, user credentials are sent to the [`On Web Authentication`](#on-web-authentication) database method along with the other connection parameters (IP address and port, URL...) so that you can process them. If the `On Web Authentication` database method does not exist, connections are rejected.
> With the 4D Client web server, keep in mind that all the sites published by the 4D Client machines will share the same table of users. Validation of users/passwords is carried out by the 4D Server application.

### DIGEST認証

This mode provides a greater level of security since the authentication information is processed by a one-way process called hashing which makes their contents impossible to decipher.

As in BASIC mode, users must enter their name and password when they connect. The [`On Web Authentication`](#on-web-authentication) database method is then called. When the DIGEST mode is activated, the $6 parameter (password) is always returned empty. In fact, when using this mode, this information does not pass by the network as clear text (unencrypted). It is therefore imperative in this case to evaluate connection requests using the `WEB Validate digest` command.
> You must restart the web server in order for the changes made to these parameters to be taken into account.



## On Web Authentication

The `On Web Authentication` database method is in charge of managing web server engine access. It is called by 4D or 4D Server when a dynamic HTTP request is received.

### データベースメソッドの呼び出し

The `On Web Authentication` database method is automatically called when a request or processing requires the execution of some 4D code (except for REST calls). It is also called when the web server receives an invalid static URL (for example, if the static page requested does not exist).

The `On Web Authentication` database method is therefore called:

- when the web server receives a URL requesting a resource that does not exist
- when the web server receives a URL beginning with `4DACTION/`, `4DCGI/`...
- when the web server receives a root access URL and no home page has been set in the Settings or by means of the `WEB SET HOME PAGE` command
- when the web server processes a tag executing code (e.g `4DSCRIPT`) in a semi-dynamic page.

The `On Web Authentication` database method is NOT called:

- when the web server receives a URL requesting a valid static page.
- when the web server reveives a URL beginning with `rest/` and the REST server is launched (in this case, the authentication is handled through the [`On REST Authentication` database method](REST/configuration.md#using-the-on-rest-authentication-database-method) or [Structure settings](REST/configuration.md#using-the-structure-settings)).


### シンタックス

**On Web Authentication**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text ) -> $0 : Boolean

| 引数 | タイプ  |    | 説明                                           |
| -- | ---- |:--:| -------------------------------------------- |
| $1 | テキスト | <- | URL                                          |
| $2 | テキスト | <- | HTTPヘッダー + HTTPボディ (32 KBまで)                 |
| $3 | テキスト | <- | Webクライアント (ブラウザー) の IPアドレス                   |
| $4 | テキスト | <- | サーバーの IPアドレス                                 |
| $5 | テキスト | <- | ユーザー名                                        |
| $6 | テキスト | <- | パスワード                                        |
| $0 | ブール  | -> | True = リクエストは受け入れられました、False = リクエストが拒否されました |

これらの引数を以下のように宣言しなければなりません:

```4d
// On Web Authentication データベースメソッド

 C_TEXT($1;$2;$3;$4;$5;$6)
 C_BOOLEAN($0)

// メソッドのコード
```

あるいは、[名前付き引数](Concepts/parameters.md#名前付き引数) シンタックスを利用することもできます:

```4d
// On Web Authentication データベースメソッド
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean

```
> All the `On Web Authentication` database method's parameters are not necessarily filled in. The information received by the database method depends on the selected [authentication mode](#authentication-mode)).


#### $1 - URL

The first parameter (`$1`) is the URL received by the server, from which the host address has been removed.

Let’s take the example of an Intranet connection. 4D Webサーバーマシンの IPアドレスを 123.45.67.89 とします。 以下の表は Webブラウザーに入力された URL に対して、$1 が受け取る値を示しています:

| Webブラウザーに入力された値                      | $1 の値                    |
| ------------------------------------ | ------------------------ |
| 123.45.67.89                         | /                        |
| http://123.45.67.89                  | /                        |
| 123.45.67.89/Customers               | /Customers               |
| http://123.45.67.89/Customers/Add    | /Customers/Add           |
| 123.45.67.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

#### $2 - HTTPリクエストのヘッダーとボディ

二番目の引数 (`$2`) は、Webブラウザーから送信された HTTPリクエストのヘッダーとボディです。 この情報は `On Web Authentication` データベースメソッドに "そのまま" 渡されることに留意してください。 その内容は、接続を試みた Webブラウザーの仕様により異なります。

アプリケーションでこの情報を使用するには、開発者がヘッダーとボディを解析しなければなりません。 `WEB GET HTTP HEADER` や `WEB GET HTTP BODY` コマンドを使うことができます。
> パフォーマンス上の理由により、$2 を介して渡されるデータのサイズは 32KB 以下でなくてはなりません。 これを超過する分は、4D HTTPサーバーにより切り取られます。

#### $3 - Webクライアントの IPアドレス

`$3` 引数はブラウザーマシンの IPアドレスを受け取ります。 この情報を使用して、イントラネットアクセスとインターネットアクセスを区別できます。
> 4D は IPv4 アドレスを、96-bit の接頭辞付きのハイブリッド型 IPv6/IPv4 フォーマットで返します。たとえば、::ffff:192.168.2.34 は、192.168.2.34 という IPv4 アドレスを意味します。 詳細については、[IPv6 のサポートについて](webServerConfig.md#IPv6-のサポートについて) の章を参照ください。


#### $4 - サーバー IPアドレス

`$4` 引数は Webサーバーを呼び出すために使用された IPアドレスを受け取ります。 4D はマルチホーミングをサポートしており、複数の IPアドレスを持つマシンを使用できます。 詳細は [設定ページ](webServerConfig.md#リクエストを受け付ける-IPアドレス) を参照ください。


#### $5 と $6 - ユーザー名とパスワード

`$5` と `$6` 引数は、ブラウザーが表示する標準の認証ダイアログにユーザーが入力したユーザー名とパスワードを受け取ります。 [BASIC](#basic認証) または [DIGEST](#digest認証) 認証が選択されていると、接続のたびにこのダイアログが表示されます。
> ブラウザーから送信されたユーザー名が 4D に存在する場合、$6 引数 (ユーザーパスワード) はセキュリティのため渡されません。

#### $0 引数

`On Web Authentication` データベースメソッドはブール値を $0 に返します:

*   $0=True: 接続を受け入れます。

*   $0=False: 接続を受け入れません。

`On Web Connection` データベースメソッドは、`On Web Authentication` データベースメソッドにより接続が受け入れられた時にのみ実行されます。
> **警告**<br>$0 に値が設定されないか、`On Web Authentication`データベースメソッド内で $0 が定義されていない場合、接続は受け入れられたものとされ、`On Web Connection` データベースメソッドが実行されます。
> * `On Web Authentication` データベースメソッド内でインターフェース要素を呼び出してはいけません (`ALERT`, `DIALOG` 等)。メソッドの実行が中断され、接続が拒否されてしまいます。 処理中にエラーが発生した場合も同様です。


### 例題

[DIGEST認証モード](#digest認証) での `On Web Authentication` データベースメソッドの例題:

```4d
 // On Web Authentication データベースメソッド
 #DECLARE ($url : Text; $header : Text; $ipB : Text; $ipS : Text; \
    $user : Text; $pw : Text) -> $valid : Boolean

 var $found : cs.WebUserSelection
 $valid:=False

 $found:=ds.WebUser.query("User === :1";$user)
 If($found.length=1) // ユーザーが見つかった場合
    $valid:=WEB Validate digest($user;[WebUser]password)
 Else
    $valid:=False // ユーザーは存在しません
 End if
```
