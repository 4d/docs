---
id: sessions
title: ユーザーセッション
---

4D Webサーバーは、**ユーザーセッション** を管理するビルトインの機能を提供します。 ユーザーセッションを作成・維持することで、Webアプリケーション上のユーザーエクスペリエンスを管理・向上することができます。 ユーザーセッションが有効かされていると、Webクライアントはリクエスト間で同じコンテキスト (セレクションや変数の値) を再利用できます。

Webサーバーのユーザーセッションでは、以下のことが可能です:

- 同一のWebクライアントからの複数のリクエストを、無制限のプリエンプティブプロセスで同時に処理 (Webサーバーセッションは **スケーラブル**です)。
- Webクライアントのプロセス間でデータを共有。
- ユーザーセッションに権限を関連付ける。
- `Session` オブジェクトと [Session API](API/SessionClass.md) を介したアクセスの処理。

> **注:** 現在の実装は、Webアプリケーション全体においてセッションを介して階層的なユーザー権限を開発者が管理できるようにする、今後予定されている包括的な機能の最初のステップに過ぎません。

## セッションの有効化

セッション管理機能は、4D Webサーバー上で有効または無効にすることができます。 セッション管理を有効化する方法は複数あります:

- ストラクチャー設定の Web / オプション (I) ページの **スケーラブルセッション** を使用する (永続的な設定): ![alt-text](../assets/en/WebServer/settingsSession.png)

このオプションは、新規プロジェクトではデフォルトで選択されています。 これは、**セッションなし** オプションを選択して無効にすることもできます。 この場合、Webセッション機能は無効になります (`Session` オブジェクトは使用できません)。

- Webサーバーオブジェクトの [`.scalableSession`](API/WebServerClass.md#scalablesession) プロパティを使用する ([`.start()`](API/WebServerClass.md#start) 関数に *settings* 引数として渡します）。 この場合、ストラクチャー設定ダイアログボックスで定義されたオプションよりも、Webサーバーオブジェクトの設定が優先されます (ディスクには保存されません)。

> メインの Webサーバーのセッションモードは、`WEB SET OPTION` コマンドを使って設定することもできます。

いずれの場合も、設定はマシンに対しローカルなものです。 つまり、4D Server の Webサーバーと、リモートの 4Dマシンの Webサーバーで異なる設定が可能です。

> **互換性について**: 4D v18 R6 以前の 4Dバージョンで作成されたプロジェクトでは、**旧式セッション** オプションが使用できます (詳細については、[doc.4d.com](https://doc.4d.com) の Webサイトを参照ください)。

## セッションの実装

[セッションを有効にする](#セッションの有効化) と、4D自身が設定したプライベート cookie ("4DSID_*AppName*"、*AppName* はアプリケーションプロジェクトの名称) に基づいて、自動メカニズムが実装されます。 この cookie は、アプリケーションのカレントWebセッションを参照します。

> この cookie の名前は、[`.sessionCookieName`](API/WebServerClass.md#sessioncookiename) プロパティを使用して取得できます。

1. Webサーバーは、各Webクライアントリクエストにおいて、プライベートな "4DSID_*AppName*" cookie の存在と値をチェックします。

2. cookie に値がある場合、4D は既存セッションの中からこのクッキーを作成したセッションを探し、見つかった場合には再利用します。

2. クライアントからのリクエストが、すでに開かれているセッションに対応していない場合:

- プライベートな "4DSID_*AppName*" cookie を持つ新しいセッションが Webサーバー上に作成されます。
- 新しいゲスト `Session` オブジェクトが作成され、このスケーラブルWebセッション専用に使用されます。

カレントの `Session` オブジェクトは、あらゆる Webプロセスのコードにおいて [`Session`](API/SessionClass.md#session) コマンドを介してアクセスできます。

![alt-text](../assets/en/WebServer/schemaSession.png)

Webプロセスは通常終了せず、効率化のためにプールされリサイクルされます。 プロセスがリクエストの実行を終えると、プールに戻され、次のリクエストに対応できるようになります。 Webプロセスはどのセッションでも再利用できるため、実行終了時には ([`CLEAR VARIABLE`](https://doc.4d.com/4dv18/help/command/ja/page89.html) などを使用し) コードによって [プロセス変数](Concepts/variables.md#プロセス変数) をクリアする必要があります 。 このクリア処理は、開かれたファイルへの参照など、プロセスに関連するすべての情報に対して必要です。 これが、セッション関連の情報を保持したい場合には、[Session](API/SessionClass.md) オブジェクトを使用することが **推奨** される理由です。

### プリエンプティブモード

4D Server上では、**インタプリタモードであっても**、Webサーバーセッションは自動的にプリエンプティブプロセスで処理されます。 そのため、Webサーバーのコードは [プリエンプティブ実行に準拠](preemptiveWeb.md#スレッドセーフなWebサーバーコードの書き方) している必要があります。

> サーバーマシン上のインタープリターWebコードをデバッグするには、あらかじめサーバーのデバッガーを [サーバー](Debugging/debugging-remote.md) または [リモートマシン](Debugging/debugging-remote.md#リモート4dクライアントでのデバッガーの有効化) で有効化する必要があります。 これにより、Webプロセスがコオペラティブモードに切り替わり、Webサーバーコードのデバッグが可能になります。

シングルユーザーの 4D では、インタープリターコードは常にコオペラティブモードで実行されます。

## 情報の共有

各 `Session` オブジェクトには、共有オブジェクトである [`.storage`](API/SessionClass.md#storage) プロパティが用意されています。 このプロパティにより、セッションで処理されるすべてのプロセス間で情報を共有することができます。

## セッションの有効期限

スケーラブルWebセッションは、以下の場合に閉じられます:

- Webサーバーが停止したとき。
- セッションcookie がタイムアウトしたとき。

非アクティブな cookie の有効期限は、デフォルトでは 60分です。 つまり、Webサーバーは、非アクティブなセッションを 60分後に自動的に閉じます。

このタイムアウトは、`Session` オブジェクトの [`.idleTimeout`](API/SessionClass.md#idletimeout) プロパティで設定できます (タイムアウトは 60分未満にはできません)。

スケーラブルWebセッションが閉じられた後に [`Session`](API/SessionClass.md#session) コマンドが呼び出されると:

- `Session` オブジェクトには権限が含まれていません (ゲストセッション)。
- [`.storage`](API/SessionClass.md#storage) プロパティは空です。
- 新しいセッションcookie がセッションに関連付けられています。

## 権限

セッションには、権限を関連付けることができます。 セッションの権限に応じて、特定のアクセスや機能を Webサーバー上で提供することができます。

権限を割り当てるには、[`.setPrivileges()`](API/SessionClass.md#setprivileges) 関数を使用します。 コード内では、[`.hasPrivilege()`](API/SessionClass.md#hasprivilege) 関数を使ってセッションの権限をチェックし、アクセスを許可または拒否することができます。 デフォルトでは、新しいセッションは権限を持たず、**ゲスト** セッションとなります ([`.isGuest()`](API/SessionClass.md#isguest) 関数は true を返します)。

> 現在の実装では (v18 R6)、"WebAdmin" アクセス権のみ利用可能です。

例:

```4d
If (Session.hasPrivilege("WebAdmin"))
 //Access is granted, do nothing
Else
 //Display an authentication page
End if
```

## 例題

CRMアプリケーションを使って、各営業担当者が自分の顧客ポートフォリオを管理します。 データストアには、少なくとも 2つのリンクされたデータクラス Customers と SalesPersons が含まれています (営業担当者は複数の顧客を持ちます)。

![alt-text](../assets/en/WebServer/exampleSession.png)

営業担当者がログインし、Webサーバー上でセッションを開き、上位3名の顧客をセッションに読み込ませたいとします。

1. セッションを開くために以下の URL を実行します:

```
http://localhost:8044/authenticate.shtml
```

> 本番環境では、暗号化されていない情報がネットワーク上を流れるのを防ぐために、[HTTPS接続](API/WebServerClass.md#httpsenabled) を使用する必要があります。

2. `authenticate.shtml` ページは、*userId* と *password* の入力フィールドを含むフォームで、4DACTION の POSTアクションを送信します:

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

3. authenticate project メソッドは、*userID* に合致する担当者を探し、*SalesPersons* テーブルに保存されているハッシュ値をパスワードと照合します。

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
        WEB SEND TEXT("This password is wrong")
    End if
Else
    WEB SEND TEXT("This userId is unknown")
End if
```
