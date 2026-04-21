---
id: http-rules
title: HTTP ルール
---

4D Web サーバーで受信される任意のリクエスト(REST リクエストも含めます)に対してHTTP レスポンスヘッダーを管理するHTTP ルールを定義することができます。 HTTP ヘッダーの追加、変更、削除、リダイレクトの送信あるいはHTTP ステータスの設定などを行うことができます。 この機能はヘッダの管理に基づいてセキュリティポリシーを実装したい様な場合に有用です。

HTTP ルールを定義するためには、管理したいURL パターンを宣言するための正規表現を書くのに加えて、レスポンスヘッダーの編集の方法を定義します。 これらのルールは、プロジェクトフォルダ内に保存されている`HTTPRules.json` ファイルを使用するか、あるいはWeb サーバーオブジェクトの[`start()`](../API/WebServerClass.md#start) 関数の*settings* 引数を使用することで設定可能です。

## 要件

HTTP ルールは以下のコンテキストでサポートされています:

- [スケーラブルセッション](./sessions.md#enabling-web-sessions) あるいは [セッションなし](../settings/web.md#セッションなし) が有効化されている
- 4D あるいは4D Server 上でローカルに実行中のWeb サーバー([コンポーネントで実行されてるもの](./webServerObject.md) も含めます)。

## ルールの設定方法

以下の方法で、HTTP レスポンスルールを宣言することができます:

- プロジェクトの[`Project/Sources`](../Project/architecture.md#sources) フォルダ内に保存されている**HTTPRules.json** という名前の設定ファイルを使用する。 設定したルールは、Web サーバーが起動したときにロードされて適用されます。
- 任意のWeb サーバーオブジェクトに対して、[`start()`](../API/WebServerClass.md#start) 関数の*settings* 引数内で設定された[`.rules`](../API/WebServerClass.md#rules) プロパティを使用する:

```4d
WEB Server.start($settings.rules) //Web サーバー開始時にルールを設定する
```

**HTTPRules.json** ファイルと、有効な`$settings.rules` を持った [`WEB Server`](../commands/web-server) コマンドの両方が呼び出された場合、`WEB Server` コマンドの方が優先されます。

リクエストのURI がRegEx(正規表現)パターンのいずれにも合致しない場合、Web サーバーはデフォルトのレスポンスを返します。

## ルールの定義

**HTTPRules.json** ファイルまたは[`.rules`](../API/WebServerClass.md#rules) プロパティは、**ルールオブジェクト** のコレクションを格納している必要があります。

ルールオブジェクトは以下の様に定義されます:

- URL パターンを記述するRegEx(正規表現)。例: "^(.\*\\.(jpg|jpeg|png|gif))"
- HTTP レスポンスに対して実行するアクションの名前。例: "removeHeaders"
- アクションの値。例: "X-Unwanted-Header1"

その他のプロパティは無視されます。

### URL パターン

URL パターンは、**正規表現** を使用して与えられます。 正規表現パターンを宣言するためには、"RegExPattern" プロパティ名を使用します。

例: `"RegExPattern": "/Test/Authorized/(.*)"`

Web サーバーがリクエストを受信すると、**すべての** URL パターンが指定された順番で順次トリガーされ、全ての合致するパターンが実行されます。 複数のアクションが同様のリソースを編集しようとした場合、最後に実行されたアクションのみが考慮されます。

### アクション

以下のアクションキーワードがサポートされています:

| キーワード        | 値の型                | 説明                                                                                                                           |
| ------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Description  | テキストまたはテキストのコレクション | HTTP レスポンスから削除するヘッダー。 削除するヘッダーがレスポンスヘッダー内に存在しない場合は無視されます。                                                                    |
| `addHeaders` | Object             | HTTP レスポンスに追加するヘッダーのname(テキスト)とvalue(テキスト)。                                            |
| `setHeaders` | Object             | HTTP レスポンス内で編集するヘッダーのname (テキスト)とvalue (テキスト)。 編集するヘッダーがレスポンスヘッダー内に存在しない場合は、それが追加されます。 |
| `denyAccess` | Boolean            | リソースへのアクセスを今日日するにはtrue、アクセスを許可するにはfalse。 リソースへのアクセスが拒否された場合、Web サーバーはデフォルトで403 ステータスを返します。                                   |
| `redirect`   | Text               | リダイレクト URL。 リダイレクトがトリガーされた場合、Web サーバーはデフォルトで302 ステータスを返します。                                                                  |
| `status`     | Number             | HTTP ステータス                                                                                                                   |

### 変更不可なヘッダー

一部のヘッダーは追加、変更、削除ができません:

| ヘッダー             | 追加 | 設定           | 削除 |
| ---------------- | -- | ------------ | -- |
| Date             | ×  | ×            | ×  |
| Content-Length   | ×  | ×            | ×  |
| Content-Encoding | ×  | ×            | ×  |
| Vary             | ◯  | ×            | ×  |
| Set-Cookie       | ◯  | Cookie を追加する | ×  |

これらのヘッダーに対する認証されていない変更はエラーを生成することはしませんが、それらの変更は無視されます。

### 現在のルール

[Web サーバーオブジェクトの`.rules` プロパティ](../API/WebServerClass.md#rules) を使用することで、現在のルールを知ることができます:

```
var $rules : Collection
$rules:=WEB Server.rules //現在のルール
```

## 例題

ルールは、`HTTPRules.json` ファイルまたはWeb サーバー関数の[`.start()`](../API/WebServerClass.md#start) 関数の*settings* 引数を使用することで、設定することができます。

### HTTPRules.json ファイルを使用して設定する

```json

[
	{
		"comment": "All requests: allow GET method for, remove 'Server' header and set security headers",
		"regexPattern": "/(.*)",
		"setHeaders": {
			"Allow": "GET",
			"X-Frame-Options": "SAMEORIGIN",
			"Content-Security-Policy": "default-src 'self'"
		},
		"removeHeaders": [
			"Server"
		]
	},
	{
		"comment": "REST requests: allow POST method",
		"regexPattern": "/rest/(.*)",
		"addHeaders": {
			"Allow": "POST"
		}
	},
	{
		"comment": "HTML files in 'doc' folder: set cache control",
		"regexPattern": "/docs/(.*).html",
		"setHeaders": {
			"Cache-Control": "max-age=3600"
		},
		"removeHeaders": [
			"X-Powered-By"
		]
	},
	{
		"comment": "Status 503 on 'maintenance' page",
		"regexPattern": "^/maintenance.html",
		"status": 503
	},
	{
		"comment": "Redirect CSS and JS files",
		"regexPattern": "^(.*\\\\.(css|js))",
		"redirect": "https://cdn.example.com/"
	},
	{
		"comment": "Redirect images with permanent status code",
		"regexPattern": "^(.*\\\\.(jpg|jpeg|png|gif))",
		"redirect": "https://cdn.example.com/images/",
		"status": 301
	},
	{
		"comment": "Deny access for all resources placed in the 'private' folder",
		"regexPattern": "/private/(.*)",
		"denyAccess": true
	},
	{
		"comment": "Allow access to all resources placed in the 'private/allowed' folder",
		"regexPattern": "/private/allowed/(.*)",
		"denyAccess": false
	}
]

```

### *settings* 引数を使用して設定する

```4d
var $rule:={}

var $settings:={}

$settings.rules:=[]

$rule:={}
$rule.comment:="All requests: allow GET method for, remove 'Server' header and set security headers"
$rule.regexPattern:="/(.*)"
$rule.setHeaders:={Allow: "GET"}
$rule.setHeaders["X-Frame-Options"]:="SAMEORIGIN"
$rule.setHeaders["Content-Security-Policy"]:="default-src 'self'"
$rule.removeHeaders:=["Server"]
$settings.rules.push($rule)

$rule:={}
$rule.comment:="REST requests: allow POST method"
$rule.regexPattern:="/rest/(.*)"
$rule.addHeaders:={Allow: "POST"}
$settings.rules.push($rule)

$rule:={}
$rule.comment:="HTML files in 'doc' folder: set cache control"
$rule.regexPattern:="/docs/(.*).html"
$rule.setHeaders:={}
$rule.setHeaders["Cache-Control"]:="max-age=3600"
$rule.removeHeaders:=["X-Powered-By"]
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Status 503 on 'maintenance' page"
$rule.regexPattern:="^/maintenance.html"
$rule.status:=503
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Redirect CSS and JS files"
$rule.regexPattern:="^(.*\\\\.(css|js))"
$rule.redirect:="https://cdn.example.com/"
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Redirect images with permanent status code"
$rule.regexPattern:="^(.*\\\\.(jpg|jpeg|png|gif))"
$rule.redirect:="https://cdn.example.com/images/"
$rule.status:=301
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Deny access for all resources placed in the 'private' folder"
$rule.regexPattern:="/private/(.*)"
$rule.denyAccess:=True
$settings.rules.push($rule)

$rule:={}
$rule.comment:="Allow access to all resources placed in the 'private/allowed' folder"
$rule.regexPattern:="/private/allowed/(.*)"
$rule.denyAccess:=False
$settings.rules.push($rule)

$return:=WEB Server.start($settings)

```

:::tip 関連したblog 記事

[New Way to Control Your HTTP Responses](https://blog.4d.com/new-way-to-control-your-http-responses/)

:::

