---
id: sessions
title: Webセッション
---

4D Webサーバーは、**Webセッション** を管理するビルトインの機能を提供します。  Webセッションを作成・維持することで、Webアプリケーション上のユーザーエクスペリエンスを管理・向上することができます。 Webセッションが有効かされていると、Webクライアントはリクエスト間で同じコンテキスト (セレクションや変数の値) を再利用できます。

Webセッションでは、以下のことが可能です:

- 同一のWebクライアントからの複数のリクエストを、無制限のプリエンプティブプロセスで同時に処理 (Webセッションは **スケーラブル**です)。
- `Session` オブジェクトと [Session API](API/SessionClass.md) を介したセッションの管理。
- セッションの [.storage](../API/SessionClass.md#storage) を使用して、Webクライアントのプロセス間でデータを保存および共有。
- セッションを実行しているユーザーに権限を関連付ける。

## 用途

Webセッションは次のものに使用されます:

- HTTPリクエストを送信する [Webアプリケーション](gettingStarted.md)
- [リモートデータストア](../ORDA/remoteDatastores.md) や [Qodlyフォーム](qodly-studio.md) が使用する [REST API](../REST/authUsers.md) への呼び出し

## Webセッションの有効化

セッション管理機能は、4D Webサーバー上で有効または無効にすることができます。 セッション管理を有効化する方法は複数あります: セッション管理を有効化する方法は複数あります:

- ストラクチャー設定の Web / オプション (I) ページの **スケーラブルセッション** を使用する (永続的な設定): ![alt-text](../assets/en/WebServer/settingsSession.png)

このオプションは、新規プロジェクトではデフォルトで選択されています。 これは、**セッションなし** オプションを選択して無効にすることもできます。この場合、Webセッション機能は無効になります (`Session` オブジェクトは使用できません)。

- Webサーバーオブジェクトの [`.scalableSession`](API/WebServerClass.md#scalablesession) プロパティを使用する ([`.start()`](API/WebServerClass.md#start) 関数に _settings_ 引数として渡します）。  この場合、ストラクチャー設定ダイアログボックスで定義されたオプションよりも、Webサーバーオブジェクトの設定が優先されます (ディスクには保存されません)。

> メインの Webサーバーのセッションモードは、`WEB SET OPTION` コマンドを使って設定することもできます。

いずれの場合も、設定はマシンに対しローカルなものです。つまり、4D Server の Webサーバーと、リモートの 4Dマシンの Webサーバーで異なる設定が可能です。

> **互換性について**: 4D v18 R6 以前の 4Dバージョンで作成されたプロジェクトでは、**旧式セッション** オプションが使用できます (詳細については、[doc.4d.com](https://doc.4d.com) の Webサイトを参照ください)。

## セッションの実装

[セッションを有効にする](#セッションの有効化) と、4D自身が設定したプライベート cookie ("4DSID__AppName_"、_AppName_ はアプリケーションプロジェクトの名称) に基づいて、自動メカニズムが実装されます。  この cookie は、アプリケーションのカレントWebセッションを参照します。

:::info

この cookie の名前は、[`.sessionCookieName`](API/WebServerClass.md#sessioncookiename) プロパティを使用して取得できます。

:::

1. Webサーバーは、各Webクライアントリクエストにおいて、プライベートな "4DSID__AppName_" cookie の存在と値をチェックします。

2. cookie に値がある場合、4D は既存セッションの中からこのクッキーを作成したセッションを探し、見つかった場合には再利用します。

3. クライアントからのリクエストが、すでに開かれているセッションに対応していない場合:

- プライベートな "4DSID__AppName_" cookie を持つ新しいセッションが Webサーバー上に作成されます。
- 新しいゲスト `Session` オブジェクトが作成され、このスケーラブルWebセッション専用に使用されます。

:::note

RESTリクエストのための Webセッションを作成するには、利用可能なライセンスが必要な場合があります。詳細は [こちらのページ](../REST/authUsers.md) を参照ください。

:::

カレントセッションの `Session` オブジェクトは、あらゆる Webプロセスのコードにおいて [`Session`](commands/session.md) コマンドを介してアクセスできます。

![alt-text](../assets/en/WebServer/schemaSession.png)

:::info

Webプロセスは通常終了せず、効率化のためにプールされリサイクルされます。 プロセスがリクエストの実行を終えると、プールに戻され、次のリクエストに対応できるようになります。 Webプロセスはどのセッションでも再利用できるため、実行終了時には ([`CLEAR VARIABLE`](https://doc.4d.com/4dv20/help/command/ja/page89.html) などを使用し) コードによって [プロセス変数](Concepts/variables.md#プロセス変数) をクリアする必要があります 。  このクリア処理は、開かれたファイルへの参照など、プロセスに関連するすべての情報に対して必要です。 これが、セッション関連の情報を保持したい場合には、[Session](API/SessionClass.md) オブジェクトを使用することが **推奨** される理由です。

:::

## セッション情報の保存と共有

各 `Session` オブジェクトには、共有オブジェクトである [`.storage`](API/SessionClass.md#storage) プロパティが用意されています。  このプロパティにより、セッションで処理されるすべてのプロセス間で情報を共有することができます。

## セッションの有効期限

スケーラブルWebセッションは、以下の場合に閉じられます:

- Webサーバーが停止したとき。
- セッションcookie がタイムアウトしたとき。

非アクティブな cookie の有効期限は、デフォルトでは 60分です。つまり、Webサーバーは、非アクティブなセッションを 60分後に自動的に閉じます。

このタイムアウトは、`Session` オブジェクトの [`.idleTimeout`](API/SessionClass.md#idletimeout) プロパティで設定できます (タイムアウトは 60分未満にはできません)。また、[`Open datastore`](../commands/open-datastore.md)コマンドの _connectionInfo_ パラメーターを使っても設定できます。

Webセッションが閉じられた後に [`Session`](commands/session.md) コマンドが呼び出されると:

- `Session` オブジェクトには権限が含まれていません (ゲストセッション)。
- [`.storage`](API/SessionClass.md#storage) プロパティは空です。
- 新しいセッションcookie がセッションに関連付けられています。

:::info

[**ログアウト**](qodly-studio.md#ログアウト) 機能を使用して、Qodly フォームからのセッションを閉じることができます。

:::

## 権限

Webユーザーセッションには、権限を関連付けることができます。  セッションの権限に応じて、特定のアクセスや機能を Webサーバー上で提供することができます。

権限を割り当てるには、[`.setPrivileges()`](API/SessionClass.md#setprivileges) 関数を使用します。  コード内では、[`.hasPrivilege()`](API/SessionClass.md#hasprivilege) 関数を使ってセッションの権限をチェックし、アクセスを許可または拒否することができます。  デフォルトでは、新しいセッションは権限を持たず、**ゲスト** セッションとなります ([`.isGuest()`](API/SessionClass.md#isguest) 関数は true を返します)。

例:

```4d
If (Session.hasPrivilege("WebAdmin"))
    // アクセス権が付与されているので、何もしません
Else
    // 認証ページを表示します
End if

```

:::info

権限は ORDAアーキテクチャーの中心に実装されており、データストアやデータクラス関数へのアクセスを制御するための強力な技術を開発者に提供します。  詳細については、ORDA の章の [**権限**](../ORDA/privileges.md) を参照ください。

:::

## 例題

CRMアプリケーションを使って、各営業担当者が自分の顧客ポートフォリオを管理します。  データストアには、少なくとも 2つのリンクされたデータクラス Customers と SalesPersons が含まれています (営業担当者は複数の顧客を持ちます)。

![alt-text](../assets/en/WebServer/exampleSession.png)

営業担当者がログインし、Webサーバー上でセッションを開き、上位3名の顧客をセッションに読み込ませたいとします。

1. セッションを開くために以下の URL を実行します:

```
http://localhost:8044/authenticate.shtml
```

> 本番環境では、暗号化されていない情報がネットワーク上を流れるのを防ぐために、[HTTPS接続](API/WebServerClass.md#httpsenabled) を使用する必要があります。

2. `authenticate.shtml` ページは、_userId_ と _password_ の入力フィールドを含むフォームで、4DACTION の POSTアクションを送信します:

```html
<!DOCTYPE html>
<html>
<body bgcolor="#ffffff">
<FORM ACTION="/4DACTION/authenticate" METHOD=POST>
    UserId: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
    Password: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<INPUT TYPE=SUBMIT NAME=OK VALUE="Log In">
</FORM>
</body>
</html>
```

![alt-text](../assets/en/WebServer/authenticate.png)

3. authenticate project メソッドは、_userID_ に合致する担当者を探し、_SalesPersons_ テーブルに保存されているハッシュ値をパスワードと照合します。

```4d
var $indexUserId; $indexPassword; $userId : Integer
var $password : Text
var $userTop3; $sales; $info : Object


ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

WEB GET VARIABLES($anames; $avalues)

$indexUserId:=Find in array($anames; "userId")
$userId:=Num($avalues{$indexUserId})

$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

$sales:=ds.SalesPersons.query("userId = :1"; $userId).first()

If ($sales#Null)
    If (Verify password hash($password; $sales.password))
        $info:=New object()
        $info.userName:=$sales.firstname+" "+$sales.lastname
        Session.setPrivileges($info)
        Use (Session.storage)
            If (Session.storage.myTop3=Null)
                $userTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)

                Session.storage.myTop3:=$userTop3
            End if
        End use
        WEB SEND HTTP REDIRECT("/authenticationOK.shtml")
    Else
        WEB SEND TEXT("パスワードに誤りがあります")
    End if
Else
    WEB SEND TEXT("この userId は登録されていません")
End if
```

:::note

[高度な Webアプリケーションに対応したスケーラブルセッション](https://blog.4d.com/ja/scalable-sessions-for-advanced-web-applications/)

:::

## セッショントークン(OTP)

4D web サーバーでは、OTP (One-Time Passcode/ワンタイムパスコード) セッショントークンを生成、共有、そして使用することができます。 OTP セッショントークンは、サードパーティのアプリケーションやWebサイトとの通信を保護するために使用されます。 OTP の詳細な情報については、Wikipedia の[ワンタイムパスワードのページ](https://ja.wikipedia.org/wiki/%E3%83%AF%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89) を参照して下さい。

4D では、OTP セッショントークンは外部URL を呼び出して、それが他のブラウザや他のデバイス(モバイル/PC) でコールバックされる場合に特に有用です。 通常、こういったサードパーティアプリケーションはコールバックリンクが入った確認メールを送信してきて、ユーザーはこれをクリックする必要があります。 コールバックリンクにはOTP トークンが含まれており、そのコールバックをトリガーしたセッションは、そのデータと権限とともにロードされます。 この原理により、同じセッションを複数のデバイス間で共有することができます。 このアーキテクチャーのおかげで、[セッションクッキー](#session-implementation) はネットワークに公開されることはないため、中間者攻撃のリスクを排除することができます。

### 概要

4D Web アプリケーションにおけるOTP セッショントークンの利用の基本的なシーケンスは、以下の通りです:

1. Web ユーザーが、保護されたサードパーティ接続を必要とするアクションを開始します。例えば、特定のセッション内での認証などです。
2. 4D コード内において、[`Session.createOTP()`](../API/SessionClass.md#createotp) 関数を使用してそのセッションのための新しいOTP を作成します。
3. サードパーティアプリケーションに対して、コールバックURL 内にセッショントークンを含んだリクエストを送信します。 ここで、サードパーティアプリケーションにコールバックURL を提供する方法は、API によって異なるという点に注意して下さい(下記参照)。
4. サードパーティアプリケーションは、コールバックURL に提供したパターンを使用して4D へリクエストを送り返します。
5. その後、そのリクエストのコールバックをアプリケーション内で処理します。

その名前が示す通り、OTP (ワンタイムパスワード)トークンは一度しか使用することができません。 このシナリオにおいては、既に使用されたセッショントークンを引数として持つWeb リクエストが受信された場合、最初のセッションは復元されません。

### OTPをコールバックで処理する

サードパーティアプリケーションからのOTP トークンを含んだコールバックは、開発とサードパーティAPI に応じて、4D アプリケーション内で違う方法で処理することもできます。 基本的には、トークンを扱う方法には2つの方法があります: 自動処理をする **`$4DSID`** 引数を通して渡すか、自分で処理する必要があるカスタム引数を通して渡すかです。

#### `$4DSID`をURLの中で使用する

`$4DSID` 引数を使用するのが、サードパーティアプリケーションからのコールバックを処理するための最もシンプルな方法です:

- OTP トークンは直接コールバックURL 内で引数として、標準の`?$4DSID=XXXX123` シンタックスを使用して提供されます。
- 4D では[`IncomingMessage`](../API/IncomingMessageClass.md) および [`OutgoingMessage`](../API/OutgoingMessageClass.md) クラスを使用して、4D アプリケーション内に専用の[HTTP リクエストハンドラー](http-request-handler.md) を実装します。
- `$4DSID` トークンが有効であれば、関連したWeb ユーザーセッションはあらゆるWeb プロセスにおいて、そのストレージと権限を持って **自動的に復元されます**。

:::note

4D 側では[`4DACTION`](./httpRequests.md#4daction) URL を使用することもできます。

:::

#### カスタムの引数を使用する

OTP トークンは、セッションを復元するために特別に処理する必要があるカスタムの引数として渡すこともできます。 このソリューションは、以下のような場合に使用する必要があります:

- サードパーティアプリケーションが`$4DSID` のような引数をリダイレクトURI に挿入することを許可しておらず、専用のAPI を提供している(実装はサードパーティアプリケーションに依存します)。
- あるいは、コールバックを処理するのにREST 経由でORDA 関数を呼び出したい場合。この場合、OTP は[REST 引数シンタックス](../REST/ClassFunctions.md#parameters) (例: `?$params='["XXX123"]'`) に則って渡す必要があります。

どちらの場合においても、カスタムの引数からトークンを抽出し、そして[`Session.restore()`](../API/SessionClass.md#restore) 関数にトークンを引数として渡して呼び出す必要があります。

#### 無効なOTPを処理する

OTP トークンは以下の場合には無効と判断されます:

- セッショントークンが既に使用されている場合
- セッショントークンが失効してしまっている場合
- セッショントークンが存在しない場合
- オリジナルのセッション自体が失効してしまっている場合

この場合、Web ユーザーセッションは復元されず、またカレントセッション(あれば)は変更されずにそのままにされます。 通常、ログインページを表示するか、あるいはゲストセッションを開くかを決めることができます。

受信したOTP トークンが有効化かどうかの検証するための方法は、その使用方法によって異なります:

- `$4DSID` を使用した場合、[session storage](../API/SessionClass.md#storage) にカスタムのステータスプロパティをトークン作成時に保存しておき、OTP トークンを受信したときにそれが同じ値であるかを見ることでステータスをチェックすることができます(例題参照)。
- [`Session.restore()`](../API/SessionClass.md#restore) 関数を使用した場合、セッションが正常に復元されていれば、この関数はTrue を返します。

### Scenario with $4DSID

The scenario using the `$4DSID` key is illustrated in the following diagram:

```mermaid
sequenceDiagram
  Actor User as User
  participant FrontEnd as Front end
  participant 4DServer as 4D Server
  participant ExternalPlatform as External platform

  User ->>+ FrontEnd: Validate
  
  FrontEnd ->>+ 4DServer: ValidateOperation()

    4DServer ->> 4DServer: Generate OTP with session.createOTP()
Note over 4DServer: e.g. OTP is 2E5D0D5xxx

  4DServer ->>+ ExternalPlatform: Call the external platform, give a callback URL containing a $4DSID parameter (depends on the platform API)

  Note right of 4DServer: e.g. callback URL: "https://acme.com/my4DApp/completeOperation?$4DSID=2E5D0D5xxx"

 ExternalPlatform ->>+ ExternalPlatform: Process request
ExternalPlatform ->>+ 4DServer: External platform calls back 4D Server if validation OK
Note right of 4DServer: e.g. https://acme.com/my4DApp/completeOperation?$4DSID=2E5D0D57751D471DB29FD110D2DCE253
    4DServer ->> 4DServer: An HTTP request handler processes the URL pattern "/my4DApp/completeOperation"<br/>(e.g.  handleOperation() function of the OperationsHandler singleton, see code below)

   Note over 4DServer: The original session is retrieved thanks to the OTP given in the $4DSID parameter.
     Note over 4DServer: Session object refers to the session which generated the OTP
  4DServer ->>+ FrontEnd: Restore session

```

The 4D HTTP request handler definition:

```json
[
  {
    "class": "OperationsHandler",
    "method": "handleOperation",
    "regexPattern": "/my4DApp/completeOperation",
    "verbs": "get"
  }
]
```

The singleton class:

```4d
//Class OperationsHandler
shared singleton Class constructor()
    function handleOperation($request : 4D.IncomingMessage) 
    $session:=Session
```

### Scenario with `restore` function

The scenario using a custom parameter is illustrated in the following diagram:

```mermaid
sequenceDiagram
  Actor User as User
  participant FrontEnd as Front end
  participant 4DServer as 4D Server
  participant ExternalPlatform as External platform

  User ->>+ FrontEnd: Validate
  FrontEnd ->>+ 4DServer: Validate()


    4DServer ->> 4DServer: Generate OTP with session.createOTP()
    Note over 4DServer: e.g. OTP is 2E5D0D5xxx

  4DServer ->> ExternalPlatform: Call the external platform giving the OTP, for example as a state parameter (depends on the platform)
    Note right of 4DServer: e.g. https://thirdPartSystem.com/validate?state=2E5D0D5xxx&redirect_uri=https://acme.com/my4DApp/completeOperation
      Note right of 4DServer: The callback URL will be like: https://acme.com/my4DApp/completeOperation?state=2E5D0D5xxx
 ExternalPlatform ->> ExternalPlatform: Process request
  ExternalPlatform ->> 4DServer: The state parameter is sent back by the third party system in the callback
        Note right of 4DServer: e.g. https://acme.com/my4DApp/completeOperation?state=2E5D0D5xxx
 4DServer ->> 4DServer: An HTTP request handler processes the URL pattern "/my4DApp/completeOperation"<br/> (e.g. handleOperation() function of the OperationHandler singleton, see code below)

4DServer ->> 4DServer: Session.restore()


 Note over 4DServer:The state parameter is got from the received request ($req.urlQuery.state)
   Note over 4DServer:The original session is retrieved by calling the restore() function
  Note over 4DServer:Session object refers to the session which generated the OTP
   4DServer ->>+ FrontEnd: Restore session


```

The 4D HTTP request handler definition:

```json
[
  {
    "class": "OperationsHandler",
    "method": "handleOperation",
    "regexPattern": "/my4DApp/completeOperation",
    "verbs": "get"
  }
]
```

The singleton class:

```4d
//Class OperationsHandler
shared singleton Class constructor()
    Function handleOperation($req : 4D.IncomingMessage) : 4D.OutgoingMessage
    Session.restore($req.urlQuery.state)
```

### Example of email validation with $4DSID

1. A user account is created in a _Users_ dataclass. A _$info_ object is received with the email and password. An OTP corresponding to the current session is generated. An URL is then returned with this OTP given in the $4DSID parameter.

```4d
//cs.Users class

Function create($info : Object) : Text
	
var $user : cs.UsersEntity
var $status : Object
var $token : Text
	
$user:=This.new() //create a new user
$user.fromObject($info)
$status:=$user.save()
	
//Store information in the session
//including user creation status
Use (Session.storage)
	Session.storage.status:=New shared object("step"; "Waiting for validation email"; /
    "email"; $user.email; "ID"; $user.ID)
End use 
	
//Generate an OTP corresponding to the session
$token:=Session.createOTP()

// Return an URL with a $4DSID parameter
return "https://my.server.com/tools/validateEmail?$4DSID="+$token`

```

2. The user is sent this URL as a link in an email. The URL prefix `/validateEmail` is handled by a [custom HTTP request handler](./http-request-handler.md):

```json
[
  {
    "class": "RequestHandler",
    "method": "validateEmail",
    "regexPattern": "/validateEmail",
    "verbs": "get"
  }
]
```

The _validateEmail()_ function of the RequestHandler singleton:

```4d
//validateEmail class

shared singleton Class constructor()

Function validateEmail() : 4D.OutgoingMessage
	
 var $result:=4D.OutgoingMessage.new()
    //The session which generated the OTP is retrieved 
    //thanks to the $4DSID parameter given in the URL
 If (Session.storage.status.step="Waiting for validation email")
	
  $user:=ds.Users.get(Session.storage.status.ID)
  $user.emailValidated() //set to true
		
  $result.setBody("Congratulations <br>"\
  +"Your email "+Session.storage.status.email+" has been validated")
		
  $result.setHeader("Content-Type"; "text/html"	
  Use (Session.storage.status)
	Session.storage.status.step:="Email validated"
  End use
 Else
  $result.setBody("Invalid token")

 End if 
	
 return $result

```

Since the `$4DSID` parameter contains a valid OTP corresponding to the original session, the `Session` object refers to the session that created the OTP.

A new user is created, and some information is stored in the session, especially the current step of the user account creation process (Waiting for validation email) and the user ID.

### Supported contexts

- Both HTTP and HTTPS schemas are supported.
- Only [scalable sessions](#enabling-web-sessions) can be reused with tokens.
- Only sessions of the host database can be reused (sessions created in component web servers cannot be restored).
- Tokens are not supported with client/server sessions or single-user sessions.

### Lifespan

A session token has a lifespan, and the session itself has a lifespan. The session token lifespan can be set [at the token creation](../API/SessionClass.md#createotp). By default, the token lifespan is the same value as the [`.idleTimeout`](../API/SessionClass.md#idletimeout) value.

A session is only restored by a token if both the session token lifespan and the session lifespan have not expired. In other cases (the session token has expired and/or the session itself has expired), a guest session is created when a web request with a session token is received.

:::note

For more information, please refer to the [Connect Your Web Apps to Third-Party Systems](https://blog.4d.com/connect-your-web-apps-to-third-party-systems/) blog post.

:::
