---
id: desktop-sessions
title: デスクトップセッション
---

**デスクトップセッション** とは、4D Server または4D シングルユーザー版のユーザー関連の実行コンテキストであり、Web やREST アクセスに起因するものではないものです。

[**Web ユーザーセッション**](../WebServer/sessions.md) 同様、デスクトップセッションで実行されたコードは[`Session`](../API/SessionClass.md) オブジェクトへのアクセスが可能で、これによって提供される関数やプロパティによって(例えば[`session.storage`](../API/SessionClass.md#storage) オブジェクトを使用することによって)セッションの値を保存したりユーザープロセス間で共有することが可能になります。

しかしながら、Web ユーザーセッション内で実行されたコードとは違い、デスクトップセッション内で実行されたコードは[ロールと権限](../ORDA/privileges.md)によっては管理されません。 これはORDA やデータモデルクラスを含め、4D アプリケーションのあるゆる箇所にアクセスすることが可能です(4D Server では、[ユーザーとグループ機能](../Users/handling_users_groups.md) を使用してユーザーアクセスを管理することができます)。 また、デスクトップセッションは[スケーラブルセッション](../WebServer/sessions.md#enabling-web-sessions) を有効化する必要がないという点に注意してください。 これはORDA およびデータモデルクラスを含め、4D アプリケーションのどの部分へもアクセスすることができます。 4D Server 上では、[ユーザー&グループ機能](../Users/handling_users_groups.md) でユーザーアクセスを管理することができます。

それでも、[デスクトップセッションをWeb セッションと**共有** すること](#webアクセス用にデスクトップセッションを共有する) ことができ、これによってデスクトップユーザーは、例えばQodly ページとWeb エリアを使用して、Web インターフェースを通して4D アプリケーションへとアクセスうすることができます。

## セッションの種類 {#session-types}

デスクトップセッションには以下のような種類が含まれます:

- **リモートユーザーセッション**: クライアント/サーバーアプリケーションにおいては、サーバー上でユーザープロセスを管理するセッション。
- **ストアドプロシージャーセッション**: クライアント/サーバーアプリケーションにおいては、サーバー上で実行される全てのストアドプロシージャーを管理する固有のバーチャルユーザーセッション。
- **スタンドアロンセッション**: シングルユーザーアプリケーション内で返されるローカルセッションオブジェクト(クライアント/サーバーアプリケーションの開発およびテストフェーズにおいて有用です)。

:::note

[スケーラブルセッション](../WebServer/sessions.md#webセッションの有効化) 有効化されているときに、4D プロジェクトがWeb またはREST 経由でアクセスがあれば、すぐに[**Web セッション**](../WebServer/sessions.md) が使用されるという点に注意してください。

:::

以下の図は、異なるセッションの種類とそれらがどのように関連するかを表しています:

![](../assets/en/Desktop/sessions.png)

## リモートユーザーセッション {#remote-user-sessions}

サーバー上では、"ユーザープロセス"(つまりリモートユーザーに関連したプロセス)内では、[`Session`](../commands/session.md) コマンドはカレントのユーザーセッションを表す `session` オブジェクトを返します。  このオブジェクトを扱うには、[`Session` クラス](../API/SessionClass.md) の関数とプロパティを使用します。 このオブジェクトを扱うには、[`Session` クラス](../API/SessionClass.md) の関数とプロパティを使用します。

:::note

リモート4D 上では、 [`Session`](../commands/session) コマンドは必ず null を返します。

:::

:::tip 関連したblog 記事

[クライアント/サーバー接続とストアドプロシージャーに対応した新しい 4Dリモートセッションオブジェクト](https://blog.4d.com/ja/new-4d-remote-session-object-with-client-server-connection-and-stored-procedure/)。

:::

### 効果

`session` オブジェクトを使用すると、リモートユーザーセッションに関する情報や権限を管理できます。

ユーザーセッションのすべてのプロセス間でデータを共有するには、[`Session.storage`](../API/SessionClass.md#storage) 共有オブジェクトを使用できます。 たとえば、クライアントがサーバーに接続する際にユーザー認証手続きを開始し、メールや SMS で送信されたコードをアプリケーションに入力させることができます。 次に、ユーザー情報をセッションの storage に追加し、サーバーがユーザーを識別できるようにします。 この方法により、4Dサーバーはすべてのクライアントプロセスのユーザー情報にアクセスできるため、ユーザーの役割に応じてカスタマイズされたコードを用意することができます。 たとえば、クライアントがサーバーに接続する際にユーザー認証手続きを開始し、メールや SMS で送信されたコードをアプリケーションに入力させることができます。 次に、ユーザー情報をセッションの storage に追加し、サーバーがユーザーを識別できるようにします。 この方法により、4Dサーバーはすべてのクライアントプロセスのユーザー情報にアクセスできるため、ユーザーの役割に応じてカスタマイズされたコードを用意することができます。

また、リモートユーザーセッションに権限を割り当てることで、Webエリア内で実行されているQodly ページからセッションがきている場合にアクセスを管理することができます。

### 利用可能性

リモートユーザー `Session` オブジェクトは以下から利用できます:

- [サーバー上で実行](../Project/project-method-properties.md#サーバー上で実行) 属性を持つプロジェクトメソッド (クライアントプロセスの "ツイン(双子)" プロセスで実行されます)
- トリガー
- ORDA [データモデル関数](../ORDA/ordaClasses.md) (ただし、[`local`](../ORDA/ordaClasses.md#local-functions) キーワードで宣言されているものを除く)
- [`On Server Open Connection`](../commands/on-server-open-connection-database-method) と [`On Server Close Connection`](../commands/on-server-close-connection-database-method)などのデータベースメソッド。

## ストアドプロシージャーセッション {#stored-procedure-sessions}

サーバー上では、全ての[ストアドプロシージャー](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.ja.html) は同じバーチャルユーザーセッションを共有します。

### 効果

ストアドプロシージャーセッションのすべてのプロセス間でデータを共有するには、[`Session.storage`](../API/SessionClass.md#storage) 共有オブジェクトを使用できます。

### 利用可能性

ストアドプロシージャーの `session` オブジェクトは、次のいずれかから利用できます:

- [`Execute on Server`](../commands-legacy/execute-on-server.md) コマンドで呼び出されたプロジェクトメソッド
- ストアドプロシージャーから呼び出されたORDA [データモデル関数](../ORDA/ordaClasses.md)
- [`On Server Startup`](../commands/on-server-startup-database-method) と [`On Server Shutdown`](../commands/on-server-shutdown-database-method)などのデータベースメソッド。

## スタンドアロンセッション {#standalone-sessions}

スタンドアロンセッションとは、4D をローカルに使用している際に実行されるシングルユーザーセッションのことです。

### 効果

スタンドアロンセッションでも、Web セッションと [OTP 共有](#sharing-a-desktop-session-for-web-accesses)を使用することでクライアント/サーバーアプリケーションの開発とテストを行うことができます。 スタンドアロンセッション内のコードでも、リモートセッションにおける `session` オブジェクトと同じように `session` オブジェクトを使用することができます。

### 利用可能性

スタンドアロンの `session` オブジェクトは4D アプリケーション上で実行される全てのメソッドとコードから利用することが可能です。

## Webアクセスのためにデスクトップセッションを共有する {#sharing-a-desktop-session-for-web-accesses}

デスクトップセッションを使用して、同じユーザーによるアプリケーションへのWeb アクセスを管理し、それによって [権限](../ORDA/privileges.md) を管理することができます。 これは、リモートマシン上で実行中の、 [Qodly pages](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) がインターフェースとして使用されているクライアント/サーバーアプリケーションにおいて特に有用です。 この構成では、アプリケーションは現代的なCSS ベースのWeb インターフェースを持ちながらも、統合されたクライアント/サーバーのパワーと単純さの恩恵に預かることができます。 このようなアプリケーションでは、Qodly ページは標準の4D [Web エリア](../FormObjects/webArea_overview.md)内で実行されます。

このような構成を製品において管理するためには、リモートユーザーセッションが必要です。 実は、リモート4D アプリケーションとWeb エリアにロードされたQodly ページの両方からリクエストが来る場合には、これらは同じセッション内で動作する必要があります。 このような構成を製品において管理するためには、リモートユーザーセッションが必要です。 実は、リモート4D アプリケーションとWeb エリアにロードされたQodly ページの両方からリクエストが来る場合には、これらは同じセッション内で動作する必要があります。 リクエストがどこから来ているか(Web またはリモート4Dか)に関わらず、リモートクライアントとWeb ページが同じ[セッション storage](../API/SessionClass.md#storage) とクライアントライセンスを持つように、リモートクライアントとWeb ページ間でセッションを共有するようにするだけです。

この場合、ユーザーがWeb アクセスに対して持っている権限を自動的に取得できるように、Web リクエストをWeb エリアから実行する前にセッション内に[権限](../ORDA/privileges.md) を設定するべきであるという点に注意してください(例題参照)。 ただし権限は**Web から来るリクエストに対してのみ適用される**という点に注意してください。 ただし権限は**Web から来るリクエストに対してのみ適用される**という点に注意してください。

この設定は、4D Developer アプリケーション(シングルユーザー)で開発することができます: [standalone session](#standalone-sessions) を使用して、Web アクセスに関連した全ての機能のコードを書いてテストすることができます。アプリケーションの運用がシングルユーザー向けかクライアント/サーバー向けかは関係ありません。

共有セッションは [OTPトークン](../WebServer/sessions.md#session-token-otp) を通して管理されます。 サーバー上またはシングルユーザー4D アプリケーション上のデスクトップセッション用の OTP トークンを作成した後、Qodly ページを格納しているWeb エリア(あるいは他のWeb ブラウザ)から送信されたWeb リクエストに(`$4DSID` 引数値を通して)トークンを追加します。これによってサーバー上またはシングルユーザーアプリケーション上のユーザーセッションを特定して共有することができます。 Web サーバー側では、Web リクエストが $4DSID パラメーター内に *OTP id* を格納していた場合、そのOTP トークンに対応したセッションが使用されます。

:::note

クライアント/サーバー環境においてOTP トークンを作成する場合、[OTP 作成コード](../API/SessionClass.md#createotp) を**サーバー上で** 実行する必要があります(`Session` オブジェクトはリモート4D ではNull となります)。 たとえば [`On Server Open Connection`](../commands-legacy/on-server-open-connection-database-method.md) データベースメソッドなどを使用することができます。 たとえば [`On Server Open Connection`](../commands-legacy/on-server-open-connection-database-method.md) データベースメソッドなどを使用することができます。

:::

:::tip 関連したblog 記事

[Embed Qodly pages in a 4D web area without extra cost](https://blog.4d.com/share-your-4d-remote-client-session-with-web-accesses/)<br/>
[Enhance your Desktop Interface with Web widgets using 4D Qodly Pro](https://blog.4d.com/build-modern-hybrid-desktop-apps-with-4d-and-qodly-pro/)

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

