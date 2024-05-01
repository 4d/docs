---
id: gettingStarted
title: Web 開発
---

この章は、データベースのデータを扱う 4D Webサイトをゼロから作成する方法を知りたい、初心者ユーザーを対象としています。 さあ、始めましょう！

## Hello World 例題

まずは、Webサーバーからブラウザーに向けて "Hello World" を送信するところから始めましょう。 The most simple way to do this is to create a project, start the web server and write a small code that returns a text in the `On Web Connection` database method.

### Webサーバーの開始

4D Webサーバーを開始するには:

1. 4Dアプリケーションを起動し、新規プロジェクトを作成します。
2. In the **Run** menu, select **Start Web Server**.

これだけです。 The web server is started (you can see that the menu item has become **Stop Web Server**). これでリクエストを処理できるようになりました。 確認のため、デフォルトホームページを表示してみましょう。

### デフォルトホームページの表示

The 4D web server creates automatically a default `index.html` page in the default `WebFolder` root folder, created at the same level as the Project folder.

1. Webブラウザーを起動し、Webサーバーの IPアドレス (4D Webサーバーのデフォルト httpポートは 80) に接続します。 If the web server and the browser are on the same machine, you can select **Test Web Server** in the **Run** menu.

デフォルトのホームページが表示されます:

![](../assets/en/WebServer/defaultHomePage.png)

### Hello World の表示

1. Open the Explorer, display the Database Methods list and double-click on `On Web Connection`.

2. 次のコードを入力します:

```4d
Case of 
	: ($1="/hello")
		WEB SEND TEXT("Hello World!")
	Else 
		// Error 404 for example
End case 
```

The [`On Web Connection`](httpRequests.md#on-web-connection) database method is called for incoming requests and receives the target URL in the `$1` parameter. この非常にシンプルなコードは、ただテキストをブラウザーに送信します。

3. ブラウザーで次の URL を入力します:

```
http://localhost/hello
```

Webサーバーがリクエストを処理して次を返します:

![](../assets/en/WebServer/hello.png)

## データベースのデータを取得する

次に、データベースからデータを取得するのが、いかに簡単か見てみましょう。 まず、テーブルを作成し、そこにデータを入力していきます。

たとえば、数件のレコードを含む 1つのテーブルを持つ基本的なデータベースを作成します:

![](../assets/en/WebServer/hello2.png)
![](../assets/en/WebServer/hello3.png)

### ページへのデータ表示

The most simple solution to display data is to call a [template page](templates.md) containing tags.

1. 任意のテキストエディターを使用して、以下の行を格納するファイルを作成します:

```html
<html>
<body>
<!--#4DCODE ALL RECORDS([Friends])-->
<!--#4DLOOP [Friends]-->
<!--#4DTEXT [Friends]lastName--> <!--#4DTEXT [Friends]firstName--><br/>
<!--#4DENDLOOP-->
</body>
</html>
```

2. Name the file "friends.shtml" and save it in the **WebFolder** of your project.
3. ブラウザーで次の URL を入力します:

```
http://localhost/friends.shtml
```

`.shtml` pages are automatically processed by the web server. データを表示するページが返されます:

![](../assets/en/WebServer/hello3bis.png)

### RESTリクエスト

If we not only want to _display_ data, but to _use_ it, we can use ORDA and the REST server. Thanks to the [ORDA concept](ORDA/overview.md), the `Friends` table is automatically mapped to a dataclass and is available through [REST](REST/gettingStarted.md).

1. We will use the REST server to access data: go the **Settings** dialog box, select **Web** > **Web Features**, and check the **Expose as REST server** option.

![](../assets/en/WebServer/hello5.png)

2. ブラウザーで次の URL を入力します:

```
http://localhost/rest/$catalog
```

Webサーバーは結果を JSON で返します:

```json
{
	"__UNIQID": "3F1B6ACFFE12B64493629AD76011922D",
	"dataClasses": [
		{
			"name": "Friends",
			"uri": "/rest/$catalog/Friends",
			"dataURI": "/rest/Friends"
		}
	]
}
```

カタログ、つまりデータストアで公開されているデータクラスと属性のリストが取得されます。

任意のデータを取得することもできます。

3. 以下のURLを入力します:

```
http://localhost/rest/Friends
```

サーバーは、Friendsデータクラスのエンティティ、つまりデータを返します:

```json
{
	"__DATACLASS": "Friends",
	"__entityModel": "Friends",
	"__GlobalStamp": 0,
	"__COUNT": 4,
	"__FIRST": 0,
	"__ENTITIES": [
		{
			"__KEY": "1",
			"__TIMESTAMP": "2020-10-27T14:29:01.914Z",
			"__STAMP": 1,
			"ID": 1,
			"lastName": "Smith",
			"firstName": "John"
		},
		{
			"__KEY": "2",
			"__TIMESTAMP": "2020-10-27T14:29:16.035Z",
			"__STAMP": 1,
			"ID": 2,
			"lastName": "Brown",
			"firstName": "Danny"
		},
		{
			"__KEY": "3",
			"__TIMESTAMP": "2020-10-27T14:29:43.945Z",
			"__STAMP": 1,
			"ID": 3,
			"lastName": "Purple",
			"firstName": "Mark"
		},
		{
			"__KEY": "4",
			"__TIMESTAMP": "2020-10-27T14:34:58.457Z",
			"__STAMP": 1,
			"ID": 4,
			"lastName": "Dupont",
			"firstName": "Jenny"
		}
	],
	"__SENT": 4
}
```

This very simple example shows how the web server interacts transparently with the [REST server](REST/gettingStarted.md) to return any requested data, provided it is exposed. 返されたデータは、Webインターフェース内で javascript や html のコードと簡単に結びつけることができます。 See the built-in [Web Data Explorer](Admin/dataExplorer.md) to have an example of sophisticated web interface bound to dataclasses.

## ログインとセッション

上の例で Webリクエストは、アプリケーションへの自由なアクセスを得ています。 しかし、Webアプリケーションの世界では、データアクセスのセキュリティが最優先されます。 4D Webサーバーに接続する際には、ユーザーを認証し、そのナビゲーションを制御する必要があります。

### ユーザーテーブルの作成

4D Webサーバーにユーザーをログインさせる、もっともシンプルで安全な方法は、以下のシナリオに基づきます:

- Users are stored in a dedicated, unexposed table (named _WebUsers_ for example)
- The _WebUsers_ table could be [encrypted](MSC/encrypt.md) and stores the user login and a hash of their password.

1. いくつかのフィールドを持つテーブルを作成します。たとえば:

![](../assets/en/WebServer/helloUsers.png)

2. 以下のコードを実行し、ユーザーを作成します:

```4d
var $webUser : cs.WebUsersEntity

$webUser:=ds.WebUsers.new()
$webUser.firstName:="John"
$webUser.lastName:="Doe"
// パスワードはユーザーが自身で入力します
$webUser.password:=Generate password hash("123")
$webUser.userId:="john@4d.com"
$webUser.save()
```

### ユーザー認証

> To be secure from end to end, it is necessary that the whole connection is established via [https](webServerConfig.md#enable-https).

1. エクスプローラーを開き、"login" というプロジェクトメソッドを作成します。

2. 以下のコードを書きます:

```4d
var $indexUserId; $indexPassword : Integer
var $userId; $password : Text
var $user; $info : Object
ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

// get values sent in the header of the request
WEB GET VARIABLES($anames; $avalues)

// look for header login fields
$indexUserId:=Find in array($anames; "userId")
$userId:=$avalues{$indexUserId}
$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

//look for a user with the entered name in the users table
$user:=ds.WebUsers.query("userId = :1"; $userId).first()

If ($user#Null) //a user was found
		//check the password
    If (Verify password hash($password; $user.password))
    		//password ok, fill the session
        $info:=New object()
        $info.userName:=$user.firstName+" "+$user.lastName
        Session.setPrivileges($info)
        	//You can use the user session to store any information
        WEB SEND TEXT("Welcome "+Session.userName)
    Else 
        WEB SEND TEXT("Wrong user name or password.")
    End if 
Else 
    WEB SEND TEXT("Wrong user name or password.")
End if 
```

3. Display the method properties by clicking on the **[i]** button in the code editor, check the `4D tags and URLs (4DACTION...)` option and click **OK**.

![](../assets/en/WebServer/hello0.png)

4. ブラウザーで次の URL を入力します:

```
http://localhost/4DACTION/login/?userID=john@4d.com&password=123
```

> このような URL の使用は推奨されませんが、ここでは例を簡単にするために使っています。 より現実的なログインリクエストは、Webフォームと POSTリクエストで処理する必要があります。 See [this page](sessions.md#example) for an example of form POST.

すると、そのセッションでログインされます:

![](../assets/en/WebServer/login1.png)

間違ったログイン情報は拒否されます:

![](../assets/en/WebServer/login2.png)

Once a user is logged, you can handle the associated session using the `WEB Get Current Session ID` method. See the [User sessions](sessions.md) page.
