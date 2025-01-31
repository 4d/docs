---
id: authUsers
title: ユーザーとセッション
---

## セッション

[スケーラブルセッションが有効](WebServer/sessions.md#セッションの有効化) になっている場合 (推奨)、RESTリクエストは [Webユーザーセッション](WebServer/sessions.md) を作成・使用することができます。これにより、複数リクエストの処理や、Webクライアントプロセス間のデータ共有、ユーザー権限の制御などの追加機能を利用することができます。

開かれた Webユーザーセッションは、`Session`オブジェクトと [Session API](API/SessionClass.md) を介して操作することができます。 後続の RESTリクエストは同じセッションcookie を再使用します。

セッションは、ユーザーが正常にログインした後に開かれます (後述参照)。

> - 4D Server 上では、開かれる RESTセッションにつき、4Dクライアントライセンスが 1 消費されます。<br/>
> - シングルユーザーの 4D では、テスト目的で RESTセッションを 3つまで開くことができます。

## 強制ログインモード

:::note 互換性

4D 20 R6 以降、`On REST Authentication` データベースメソッドに基づく従来のログインモードは **非推奨** となりました。 現在は、[**強制ログインモード**](../ORDA/privileges.md#rolesjson-ファイル) の使用 (新規プロジェクトでは自動的に有効) および [`ds.authentify()`関数](#dsauthentify) の実装が推奨されています。 変換されたプロジェクトでは、[設定ダイアログボックスのボタン](../settings/web.md#dsauthentify-関数によって-rest認証を有効化する) を使用して、構成をアップグレードすることができます。 Qodly Studio for 4D では、権限パネルの [**強制ログイン**オプション](../WebServer/qodly-studio.md#force-login) を使用してログインモードを設定することができます。

:::

ユーザーログインシーケンスは次のとおりです:

1. 最初の RESTコール (たとえば Qodlyページコール) では、"ゲスト" Webユーザーセッションが作成されます。 [記述的RESTリクエスト](#記述的restリクエスト) 以外のリクエストを実行する権限も、ライセンスの消費もありません。\
   記述的RESTリクエスト は、ライセンスを消費する Webユーザーセッションが開かれていなくても、常にサーバーで処理されます。 この場合、それらは "ゲスト" セッションを介して処理されます。

2. 事前に用意した [`authentify()` 関数](#authentify) を呼び出し、ユーザーの資格情報をチェックして、適切な権限で[`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) を呼び出します。 `authentify()` は公開された [データストアクラス関数](../ORDA/ordaClasses.md#datastore-クラス) でなければなりません。

3. `/rest/$catalog/authentify` リクエストは、ユーザーの資格情報と共にサーバーに送信されます。 このステップでは、データにアクセスしない基本的なログインフォームのみが必要です。`/rest/$getWebForm`リクエストを介して呼び出される [Qodlyページ](../WebServer/qodly-studio.md) を利用できます。

4. ユーザーが正常に認証された場合、4Dライセンスがサーバー上で消費され、すべての RESTリクエストが受け入れられます。

![alt-text](../assets/en/REST/force-login-2.jpeg)

ユーザーログインの段階では、ライセンスの消費は Webユーザーセッションから切り離されます。 ライセンスは、[`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) が実行された時にのみ必要なため、使用されるライセンスの数を制御することができます。

他のすべての RESTリクエスト (データ処理や関数の実行) は、適切な権限を持つ Webセッション内で実行された場合にのみ処理されます。それ以外の場合はエラーを返します Webセッションに権限を割り当てるには、セッションに対して [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) 関数を実行する必要があります。 この関数を実行すると、4Dライセンスの消費が発生します。

### 記述的RESTリクエスト

記述的RESTリクエストは、ライセンスを必要としない Webユーザーセッション ("ゲスト" セッション) で処理することができます。 記述的RESTリクエストとは以下のものを指します:

- [`/rest/$catalog`]($catalog.md) リクエスト (例: `/rest/$catalog/$all`) - 利用可能なデータクラスへのアクセス
- `/rest/$catalog/authentify` - ユーザーログインに使用されるデータストア関数
- `/rest/$getWebForm` - Qodlyページのレンダリング

![alt-text](../assets/en/REST/force-login-1.jpeg)

## `Function authentify`

### シンタックス

```4d
exposed Function authentify({params : type}) {-> result : type}
    // コード

```

`authentify()` 関数は、プロジェクトの [DataStore クラス](../ORDA/ordaClasses.md#datastore-クラス) に実装されている必要があり、RESTリクエストを介して呼び出される必要があります。

"強制ログイン" モードが有効な場合、この関数は、RESTゲストセッションから唯一の利用可能なエントリーポイントです。セッションが適切な権限を取得するまで、他の関数の呼び出しやデータアクセスは拒否されます。

:::note

[`roles.json`ファイル](../ORDA/privileges.md#rolesjson-ファイル) の権限設定にかかわらず、RESTゲストセッションは常に `authentify()` 関数を実行できます。

:::

この関数は、任意の認証またはコンテキスト情報を [引数](ClassFunctions.md#引数) として受け取り、任意の値を返すことができます。 この関数は RESTリクエストからのみ呼び出すことができるため、引数は POSTリクエストの本文で渡されなければなりません。

この関数は 2部構成で書かれる必要があります:

- RESTリクエストの送信元を識別し、認証するためのコード
- 認証が成功した場合、セッションに適切な権限を割り当てる [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) の呼び出し

関数が [`Session.setPrivileges()`](../API/SessionClass.md#setprivileges) を呼び出さない場合、権限が割り当てられないため、ライセンスも消費されず、後続の記述的でない RESTリクエストは拒否されます。

### 例題

サーバー上で Webセッションを開くためにユーザー情報を確認します。 DataStore クラスに次の `authentify()` 関数を作成しました:

```4d
exposed Function authentify($credentials : Object) : Text

var $users : cs.UsersSelection
var $user : cs.UsersEntity

$users:=ds.Users.query("name = :1"; $credentials.name)
$user:=$users.first()

If ($user#Null) // 登録されているユーザーの場合
    If (Verify password hash($credentials.password; $user.password))
        Session.setPrivileges("vip")
    Else 
        return "パスワードに誤りがあります"
    End if 
Else 
        return "登録されていないユーザーです"
End if
```

`authentify()` 関数を呼び出すには:

**POST** `127.0.0.1:8111/rest/$catalog/authentify`

リクエストのボディ:

```json
[{"name":"Henry",
"password":"123"}]
```
