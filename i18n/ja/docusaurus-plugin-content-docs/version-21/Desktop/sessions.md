---
id: desktop-sessions
title: デスクトップセッション
---

**デスクトップセッション** とは、4D Server または4D シングルユーザー版のユーザー関連の実行コンテキストであり、Web やREST アクセスに起因するものではないものです。

[**Web ユーザーセッション**](../WebServer/sessions.md) 同様、デスクトップセッションで実行されたコードは[`Session`](../API/SessionClass.md) オブジェクトへのアクセスが可能で、これによって提供される関数やプロパティによって(例えば[`session.storage`](../API/SessionClass.md#storage) オブジェクトを使用することによって)セッションの値を保存したりユーザープロセス間で共有することが可能になります。

しかしながら、Web ユーザーセッション内で実行されたコードとは違い、デスクトップセッション内で実行されたコードは[ロールと権限](../ORDA/privileges.md)によっては管理されません。 これはORDA およびデータモデルクラスを含め、4D アプリケーションのどの部分へもアクセスすることができます。 4D Server 上では、[ユーザー&グループ機能](../Users/handling_users_groups.md) でユーザーアクセスを管理することができます。

それでも、[デスクトップセッションをWeb セッションと**共有** すること](#webアクセス用にデスクトップセッションを共有する) ことができ、これによってデスクトップユーザーは、例えばQodly ページとWeb エリアを使用して、Web インターフェースを通して4D アプリケーションへとアクセスうすることができます。

## セッションの種類

デスクトップセッションには以下のような種類が含まれます:

- **リモートユーザーセッション**: クライアント/サーバーアプリケーションにおいては、サーバー上でユーザープロセスを管理するセッション。
- **ストアドプロシージャーセッション**: クライアント/サーバーアプリケーションにおいては、サーバー上で実行される全てのストアドプロシージャーを管理する固有のバーチャルユーザーセッション。
- **スタンドアロンセッション**: シングルユーザーアプリケーション内で返されるローカルセッションオブジェクト(クライアント/サーバーアプリケーションの開発およびテストフェーズにおいて有用です)。

:::note

[スケーラブルセッション](../WebServer/sessions.md#webセッションの有効化) 有効化されているときに、4D プロジェクトがWeb またはREST 経由でアクセスがあれば、すぐに[**Web セッション**](../WebServer/sessions.md) が使用されるという点に注意してください。

:::

以下の図は、異なるセッションの種類とそれらがどのように関連するかを表しています:

![](../assets/en/Desktop/sessions.png)

## リモートユーザーセッション

サーバー上では、"ユーザープロセス"(つまりリモートユーザーに関連したプロセス)内では、[`Session`](../commands/session.md) コマンドはカレントのユーザーセッションを表す `session` オブジェクトを返します。  このオブジェクトを扱うには、[`Session` クラス](../API/SessionClass.md) の関数とプロパティを使用します。

:::note

リモート4D では、 `session` オブジェクトは常に null を返します。

:::

:::tip 関連したblog 記事

[クライアント/サーバー接続とストアドプロシージャーに対応した新しい 4Dリモートセッションオブジェクト](https://blog.4d.com/ja/new-4d-remote-session-object-with-client-server-connection-and-stored-procedure/)。

:::

### 効果

`session` オブジェクトを使用すると、リモートユーザーセッションに関する情報や権限を管理できます。

ユーザーセッションのすべてのプロセス間でデータを共有するには、[`Session.storage`](../API/SessionClass.md#storage) 共有オブジェクトを使用できます。 たとえば、クライアントがサーバーに接続する際にユーザー認証手続きを開始し、メールや SMS で送信されたコードをアプリケーションに入力させることができます。 次に、ユーザー情報をセッションの storage に追加し、サーバーがユーザーを識別できるようにします。 この方法により、4Dサーバーはすべてのクライアントプロセスのユーザー情報にアクセスできるため、ユーザーの役割に応じてカスタマイズされたコードを用意することができます。

また、リモートユーザーセッションに権限を割り当てることで、Webエリア内で実行されているQodly ページからセッションがきている場合にアクセスを管理することができます。

### 利用可能性

リモートユーザー `Session` オブジェクトは以下から利用できます:

- [サーバー上で実行](../Project/code-overview.md#サーバー上で実行) 属性を持つプロジェクトメソッド (クライアントプロセスの "双子" プロセスで実行されます)
- トリガー
- ORDA [データモデル関数](../ORDA/ordaClasses.md) (ただし、[`local`](../ORDA/ordaClasses.md#local-functions) キーワードで宣言されているものを除く)
- [`On Server Open Connection`](../commands/on-server-open-connection-database-method) と [`On Server Close Connection`](../commands/on-server-close-connection-database-method)などのデータベースメソッド。

## ストアドプロシージャーセッション

サーバー上では、全ての[ストアドプロシージャー](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.ja.html) は同じバーチャルユーザーセッションを共有します。

### 効果

You can share data between all processes of a store procedure session using the [`session.storage`](../API/SessionClass.md#storage) shared object.

### 利用可能性

The `session` object of stored procedures is available from:

- Project methods that are called by the [`Execute on Server`](../commands-legacy/execute-on-server.md) command,
- ORDA [data model functions](../ORDA/ordaClasses.md) called from a stored procedure,
- Database methods such as [`On Server Startup`](../commands/on-server-startup-database-method) and [`On Server Shutdown`](../commands/on-server-shutdown-database-method).

## Standalone sessions

A standalone session is the single-user session running when you work locally with 4D.

### 効果

The standalone session can be used to develop and test your client/server application and its interaction with web sessions and [OTP sharing](#sharing-a-desktop-session-for-web-accesses). You can use the `session` object in your code in standalone session just as the `session` object of the remote sessions.

### 利用可能性

The `session` object of a standalone is available from all methods and code executed on the 4D application.

## Sharing a desktop session for web accesses

Desktop sessions can be used to handle web accesses to the application by the same user and thus, manage their [privileges](../ORDA/privileges.md). This possibility is particularly useful for Client/Server applications where [Qodly pages](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) are used for the interface, running on remote machines. この構成では、アプリケーションは現代的なCSS ベースのWeb インターフェースを持ちながらも、統合されたクライアント/サーバーのパワーと単純さの恩恵に預かることができます。 このようなアプリケーションでは、Qodly ページは標準の4D [Web エリア](../FormObjects/webArea_overview.md)内で実行されます。

To manage this configuration in production, you need to use remote user sessions. Actually, requests coming from both the remote 4D application and its Qodly pages loaded in Web areas need to work inside the same session. You just have to share the session between the remote client and its web pages so that you can have the same [session storage](../API/SessionClass.md#storage) and client license, wherever the request comes from (web or remote 4D).

Note that [privileges](../ORDA/privileges.md) should be set in the session before executing a web request, so that the user automatically gets their privileges for web access (see example). Keep in mind that privileges **only apply to requests coming from the web**.

You can develop this configuration in your 4D Developer application (single-user): you can use the [standalone session](#standalone-sessions) to code and test all features related to web access, whether your application is intended for single-user or client/server deployment.

共有セッションは [OTPトークン](../WebServer/sessions.md#session-token-otp) を通して管理されます。 After you created an OTP token for the desktop session on the server or on the single-user 4D application, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server or the single-user application is identified and shared. Web サーバー側では、Web リクエストが $4DSID パラメーター内に *OTP id* を格納していた場合、そのOTP トークンに対応したセッションが使用されます。

:::note

When creating an OTP token in client/server environment, you need to execute the [OTP creation code](../API/SessionClass.md#createotp) **on the server** (the `Session` object is Null on a remote 4D). You can use for example the [`On Server Open Connection`](../commands-legacy/on-server-open-connection-database-method.md) database method.

:::

:::tip 関連したblog 記事

[Embed Qodly pages in a 4D web area without extra cost](https://blog.4d.com/embed-qodly-pages-in-a-4d-web-area-without-extra-cost)

:::

### 例題

In a form, get an OTP and open a Qodly page in a Web area:

```4d
Form.otp:=getOTP

Form.url:="http://localhost/$lib/renderer/?w=Products&$4DSID="+Form.otp

WA OPEN URL(*; "QodlyPage"; Form.url)

```

The *getOTP* project method (with the [**Execute on server** property](../Project/project-method-properties.md#execute-on-server) in Client/Server):

```4d
// In Client Server:
// ----------------
// Method executed on the server because the session object is on the server
// The Session object is Null on the client 
//

#DECLARE() : Text

return Session.createOTP()

```

Here is the code used to put the "viewProducts" privilege in the session:

```4d
// In Client Server:
// ----------------
// This code must be executed on the server because the session object is on the server
// The Session object is Null on the client 

Session.clearPrivileges() // Clean the session from its old privileges
Session.setPrivileges("viewProducts")
```

