---
id: desktop-sessions
title: デスクトップセッション
---

## 概要

A desktop session is a user-related execution context on 4D Server, 4D remote, or 4D single-user that **does not result from any web or REST access**.

デスクトップセッションには以下のような種類が含まれます:

- **Remote user sessions**: In client/server applications, remote users have their own sessions, managed from the client and from the server.
- **ストアドプロシージャーセッション**: クライアント/サーバーアプリケーションにおいては、サーバー上で実行される全てのストアドプロシージャーを管理する固有のバーチャルユーザーセッション。
- **スタンドアロンセッション**: シングルユーザーアプリケーション内で返されるローカルセッションオブジェクト(クライアント/サーバーアプリケーションの開発およびテストフェーズにおいて有用です)。

以下の図は、異なるセッションの種類とそれらがどのように関連するかを表しています:

![](../assets/en/Desktop/sessions.png)

[**Web ユーザーセッション**](../WebServer/sessions.md) 同様、デスクトップセッションで実行されたコードは[`Session`](../API/SessionClass.md) オブジェクトへのアクセスが可能で、これによって提供される関数やプロパティによって(例えば[`session.storage`](../API/SessionClass.md#storage) オブジェクトを使用することによって)セッションの値を保存したりユーザープロセス間で共有することが可能になります。

しかしながら、Web ユーザーセッション内で実行されたコードとは違い、デスクトップセッション内で実行されたコードは[ロールと権限](../ORDA/privileges.md)によっては管理されません。 It can access any parts of the 4D application, including ORDA and data model classes (on 4D Server, [users and groups feature](../Users/handling_users_groups.md) can manage user accesses). Note also that desktop sessions do not require [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) to be enabled.

You can nevertheless [**share** a remote session with a web session](#sharing-a-remote-session-for-web-accesses) so that desktop application users can access your 4D application through a web interface, using in particular **Qodly pages** and Web areas.

## リモートユーザーセッション {#remote-user-sessions}

In client/server applications, when a user connects to the server, a **remote user session object** is created and available on both the server and the client. It is returned by the [`Session`](../commands/session) command on both machines.

このオブジェクトを扱うには、[`Session` クラス](../API/SessionClass.md) の関数とプロパティを使用します。

### Comparing server-side and client-side user session objects {#comparing-server-side-and-client-side-user-session-objects}

Depending on where the code is executed, a server-side or a client-side user `session` object is available. Both objects are similar, except that:

- their [`.storage`](../API/SessionClass.md#storage) properties are not the same object. A value stored in the `.storage` of the user session on the server will not be available in the `.storage` of the user session on the client and conversely.
- for security reasons, the client-side session cannot execute functions that **modify** [privileges](../ORDA/privileges.md) ([`setPrivileges()`](../API/SessionClass.md#setprivileges), [`clearPrivileges()`](../API/SessionClass.md#clearprivileges), [`promote()`](../API/SessionClass.md#promote), [`demote()`](../API/SessionClass.md#demote), [`restore()`](../API/SessionClass.md#restore)). Calling these functions on a client generates an error.

:::note

Functions that read privileges can be called on both client and server sides ([`getPrivileges()`](../API/SessionClass.md#getprivileges), [`hasPrivilege()`](../API/SessionClass.md#hasprivilege), [`isGuest()`](../API/SessionClass.md#isguest))

:::

### 効果

You use the remote user `session` object to manage and share session data.

Within each environment, a [session `storage`](../API/SessionClass.md#storage) object is shared across all processes of the same user session. For example on the server, you can launch a user authentication and verification procedure when a client connects to the server, involving entering a code sent by e-mail or SMS into the application. 次に、ユーザー情報をセッションの storage に追加し、サーバーがユーザーを識別できるようにします。 この方法により、4Dサーバーはすべてのクライアントプロセスのユーザー情報にアクセスできるため、ユーザーの役割に応じてカスタマイズされたコードを用意することができます。

Within each environment, you can use the remote user `session` object to [create an OTP](../API/SessionClass.md#createotp) and [share the remote session for web accesses](#sharing-a-remote-session-for-web-accesses).

On the server, you can also [assign privileges](../API/SessionClass.md#setprivileges) to a remote user session to control access when the session comes from [Qodly pages running in web areas](#sharing-a-remote-session-for-web-accesses).

:::note

On the client side, two distinct local storage objects are available:

- the [`Storage`](../commands/storage) object of the client machine,
- the [`session.storage`](../API/SessionClass.md#storage) object of the user remote session (also returned by the [`Session storage`](../commands/session-storage) command).

:::

:::tip 関連したblog 記事

- [クライアント/サーバー接続とストアドプロシージャーに対応した新しい 4Dリモートセッションオブジェクト](https://blog.4d.com/ja/new-4d-remote-session-object-with-client-server-connection-and-stored-procedure/)。
- [Client / server – Handle a session when working on a 4D client](https://blog.4d.com/client-server-handle-a-session-when-working-on-a-4d-client).

:::

### Sharing a remote session for web accesses {#sharing-a-remote-session-for-web-accesses}

Remote user sessions can be used to handle web accesses to the application by the same user and thus, manage their [privileges](../ORDA/privileges.md). これは、リモートマシン上で実行中の、 [Qodly pages](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) がインターフェースとして使用されているクライアント/サーバーアプリケーションにおいて特に有用です。 この構成では、アプリケーションは現代的なCSS ベースのWeb インターフェースを持ちながらも、統合されたクライアント/サーバーのパワーと単純さの恩恵に預かることができます。 このようなアプリケーションでは、Qodly ページは標準の4D [Web エリア](../FormObjects/webArea_overview.md)内で実行されます。

このような構成を製品において管理するためには、リモートユーザーセッションが必要です。 実は、リモート4D アプリケーションとWeb エリアにロードされたQodly ページの両方からリクエストが来る場合には、これらは同じセッション内で動作する必要があります。 You just have to share the session on the server between the remote client and its web pages so that you can have the same [session storage](../API/SessionClass.md#storage) and client license, wherever the request comes from (web or remote 4D).

[Privileges](../ORDA/privileges.md) should be set in the session before executing a web request, so that the user automatically gets their privileges for web access (see example). Keep in mind that privileges only apply to requests coming from the web.

:::note

Privileges can only be set from the remote user session on the server. For security reasons, they cannot be modified from the remote user session on the client (see [Comparing server-side and client-side user session objects](#comparing-server-side-and-client-side-user-session-objects)).

:::

共有セッションは [OTPトークン](../WebServer/sessions.md#session-token-otp) を通して管理されます。 After you created an OTP token for the remote session, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server is identified and shared. Web サーバー側では、Web リクエストが $4DSID パラメーター内に *OTP id* を格納していた場合、そのOTP トークンに対応したセッションが使用されます。

:::note

You can execute the [OTP creation code](../API/SessionClass.md#createotp) from the server or directly from the client (on the server you can use for example the [`On Server Open Connection`](../commands/on-server-open-connection-database-method) database method). However, keep in mind that the web session `.storage` is shared with the server-side user session `.storage` that and privileges can only be set from the user session on the server.

:::

:::tip

For development and testing purposes, you can use a [standalone session](#standalone-sessions) to code and test all features related to web access sharing, whether your application is intended for single-user or client/server deployment.

:::

:::tip 関連したblog 記事

[Embed Qodly pages in a 4D web area without extra cost](https://blog.4d.com/share-your-4d-remote-client-session-with-web-accesses/)

:::

### 例題

フォーム内において、OTP を取得し、Web エリア内にQodly ページを開きます:

```4d
Form.otp:=getOTP

Form.url:="http://localhost/$lib/renderer/?w=Products&$4DSID="+Form.otp

WA OPEN URL(*; "QodlyPage"; Form.url)

```

*getOTP* プロジェクトメソッド(クライアント/サーバーで[**サーバー上で実行**](../Project/project-method-properties.md#execute-on-server) 付き):

```4d
// クライアント サーバー:
// ----------------
// セッションオブジェクトはサーバー上にあるため、メソッドはサーバー上で実行する必要がある
// セッションオブジェクトはクライアントでは常にNull
//

#DECLARE() : Text

return Session.createOTP()

```

"viewProducts" セッションに権限を付与するために使用されるコードは以下の通りになります:

```4d
// クライアント サーバー:
// ----------------
// セッションオブジェクトはサーバー上にあるため、メソッドはサーバー上で実行する必要がある
// セッションオブジェクトはクライアントでは常に Null 

Session.clearPrivileges() // セッションから古い権限を消去する
Session.setPrivileges("viewProducts")
```

## ストアドプロシージャーセッション {#stored-procedure-sessions}

サーバー上では、全ての[ストアドプロシージャー](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.ja.html) は同じバーチャルユーザーセッションを共有します。

### 効果

ストアドプロシージャーセッションのすべてのプロセス間でデータを共有するには、[`Session.storage`](../API/SessionClass.md#storage) 共有オブジェクトを使用できます。

### 利用可能性

ストアドプロシージャーの `session` オブジェクトは、次のいずれかから利用できます:

- [`Execute on Server`](../commands/execute-on-server) コマンドで呼び出されたプロジェクトメソッド
- ストアドプロシージャーから呼び出されたORDA [データモデル関数](../ORDA/ordaClasses.md)
- [`On Server Startup`](../commands/on-server-startup-database-method) と [`On Server Shutdown`](../commands/on-server-shutdown-database-method)などのデータベースメソッド。

## スタンドアロンセッション {#standalone-sessions}

スタンドアロンセッションとは、4D をローカルに使用している際に実行されるシングルユーザーセッションのことです。

### 効果

スタンドアロンセッションでも、Web セッションと [OTP 共有](#sharing-a-desktop-session-for-web-accesses)を使用することでクライアント/サーバーアプリケーションの開発とテストを行うことができます。 スタンドアロンセッション内のコードでも、リモートセッションにおける `session` オブジェクトと同じように `session` オブジェクトを使用することができます。

### 利用可能性

スタンドアロンの `session` オブジェクトは4D アプリケーション上で実行される全てのメソッドとコードから利用することが可能です。


