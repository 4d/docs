---
id: httpRequests
title: HTTPリクエストの処理
---

4D Webサーバーは、HTTPリクエストを処理するための機能を複数備えています:

- the `On Web Connection` database method, a router for your web application,
- the `/4DACTION` URL to call server-side code
- `WEB GET VARIABLES` to get values from HTML objects sent to the server
- other commands such as `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, or `WEB GET BODY PART` allow to customize the request processing, including cookies.
- the _COMPILER_WEB_ project method, to declare your variables.

## On Web Connection

The `On Web Connection` database method can be used as the entry point for the 4D Web server.

### データベースメソッドの呼び出し

The `On Web Connection` database method is automatically called when the server reveives any URL that is not a path to an existing page on the server. データベースメソッドは、URL とともに呼び出されます。

For example, the URL "_a/b/c_" will call the database method, but "_a/b/c.html_" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the [WebFolder](webServerConfig.md#root-folder).

> The request should have previously been accepted by the [`On Web Authentication`](authentication.md#on-web-authentication) database method (if it exists) and the web server must be launched.

### シンタックス

**On Web Connection**( _$1_ : Text ; _$2_ : Text ; _$3_ : Text ; _$4_ : Text ; _$5_ : Text ; _$6_ : Text )

| 引数 | タイプ  |     | 説明                                              |
| -- | ---- | :-: | ----------------------------------------------- |
| $1 | Text |  <- | URL                                             |
| $2 | Text |  <- | HTTPヘッダー + HTTPボディ (32 KBまで) |
| $3 | Text |  <- | Webクライアント (ブラウザー) の IPアドレス   |
| $4 | Text |  <- | サーバーの IPアドレス                                    |
| $5 | Text |  <- | ユーザー名                                           |
| $6 | Text |  <- | パスワード                                           |

これらの引数を以下のように宣言しなければなりません:

```4d
//On Web Connection database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 
//Code for the method
```

Alternatively, you can use the [named parameters](Concepts/parameters.md#named-parameters) syntax:

```4d
// On Web Connection database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```

> Calling a 4D command that displays an interface element (`DIALOG`, `ALERT`, etc.) is not allowed and ends the method processing.

### $1 - URL追加データ

最初の引数 ($1) は、ユーザーが Webブラウザーのアドレスエリアに入力した URL からホストのアドレスを取り除いたものです。

イントラネット接続の場合を見てみましょう。 4D Webサーバーマシンの IPアドレスを 123.4.567.89 とします。 以下の表は Webブラウザーに入力された URL に対して、$1 が受け取る値を示しています:

| Webブラウザーに入力された値                                                                                                                                   | $1 の値                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.4.567.89                                                                                      | /                                                                                     |
| http://123.4.567.89                                                               | /                                                                                     |
| 123.4.567.89/Customers                                                                            | /Customers                                                                            |
| http://123.4.567.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

この引数は必要に応じて自由に利用できます。 4D は単に URL のホスト部より後の部分を無視し、$1 に渡します。 For example, you can establish a convention where the value "_/Customers/Add_" means “go directly to add a new record in the `[Customers]` table.” 利用可能な値やデフォルトブックマークを Webユーザーに提供することで、アプリケーションの異なる部分へのショートカットを提供できます。 このようにして、Webユーザーは新しく接続するたびにナビゲーションを通過することなく、素早く Webサイトのリソースにアクセスできます。

### $2 - HTTPリクエストのヘッダーとボディ

二番目の引数 ($2) は、Webブラウザーから送信された HTTPリクエストのヘッダーとボディです。 Note that this information is passed to your `On Web Connection` database method "as is". その内容は、接続を試みた Webブラウザーの仕様により異なります。

アプリケーションでこの情報を使用するには、開発者がヘッダーとボディを解析しなければなりません。 You can use the `WEB GET HTTP HEADER` and the `WEB GET HTTP BODY` commands.

> パフォーマンス上の理由により、$2 を介して渡されるデータのサイズは 32KB 以下でなくてはなりません。 これを超過する分は、4D HTTPサーバーにより切り取られます。

### $3 - Webクライアントの IPアドレス

$3 引数はブラウザーマシンの IPアドレスを受け取ります。 この情報を使用して、イントラネットアクセスとインターネットアクセスを区別できます。

> 4D は IPv4 アドレスを、96-bit の接頭辞付きのハイブリッド型 IPv6/IPv4 フォーマットで返します。たとえば、::ffff:192.168.2.34 は、192.168.2.34 という IPv4 アドレスを意味します。 For more information, refer to the [IPv6 Support](webServerConfig.md#about-ipv6-support) section.

### $4 - サーバー IPアドレス

$4 引数は 4D Webサーバーによってリクエストされた IPアドレスを受け取ります。 4D はマルチホーミングをサポートしており、複数の IPアドレスを持つマシンを使用できます。 For more information, please refer to the [Configuration page](webServerConfig.html#ip-address-to-listen).

### $5 と $6 - ユーザー名とパスワード

The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the [authentication page](authentication.md)).

> ブラウザーから送信されたユーザー名が 4D に存在する場合、$6 引数 (ユーザーパスワード) はセキュリティのため渡されません。

## /4DACTION

\*\*/4DACTION/\*\*_MethodName_<br/>
\*\*/4DACTION/\*\*_MethodName/Param_

| 引数         | タイプ  |     | 説明                    |
| ---------- | ---- | :-: | --------------------- |
| MethodName | Text |  -> | 実行する 4Dプロジェクトメソッド名    |
| Param      | Text |  -> | プロジェクトメソッドに渡されるテキスト引数 |

**Usage:** URL or Form action.

This URL allows you to call the _MethodName_ 4D project method with an optional _Param_ text parameter. The method will receive this parameter in _$1_.

- The 4D project method must have been [allowed for web requests](allowProject.md): the “Available through 4D tags and URLs (4DACTION...)” attribute value must have been checked in the properties of the method. 属性がチェックされていない場合、Webリクエストは拒否されます。
- When 4D receives a `/4DACTION/MethodName/Param` request, the `On Web Authentication` database method (if it exists) is called.

`4DACTION/` can be associated with a URL in a static Web page:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

The `MyMethod` project method should generally return a "reply" (sending of an HTML page using `WEB SEND FILE` or `WEB SEND TEXT`, etc.). ブラウザーをブロックしないように、処理は可能な限り短時間でおこなわれるようにします。

> A method called by `/4DACTION` must not call interface elements (`DIALOG`, `ALERT`, etc.).

#### 例題

This example describes the association of the `/4DACTION` URL with an HTML picture object in order to dynamically display a picture in the page. スタティック HTMLページに以下のコードを記述します:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

The `getPhoto` method is as follows:

```4d
C_TEXT($1) // この引数は常に宣言する必要があります
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

 // Resources フォルダー内の Images フォルダー内でピクチャーを探します 
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"

READ PICTURE FILE($path;$PictVar) // ピクチャーをピクチャー変数に入れます
PICTURE TO BLOB($PictVar;$BLOB;".png") // ピクチャーを ".png" 形式に変換します
WEB SEND BLOB($BLOB;"image/png")
```

### 4DACTION を使用してフォームをポスト

4D Webサーバーでは、ポストされたフォームを使用することもできます。これはスタティックなページから Webサーバーにデータを送信し、すべての値を簡単に取得するというものです。 POSTタイプを使用し、フォームのアクションは /4DACTION/MethodName で始まっていなければなりません。

フォームは 2つのメソッドを使用してサブミットできます (4D では両方のタイプを使用できます):

- POST は通常 Webサーバーにデータを送信するのに使用します。
- GET は通常 Webサーバーからデータをリクエストするのに使用します。

> When the Web server receives a posted form, it calls the `On Web Authentication` database method (if it exists).

In the called method, you must call the `WEB GET VARIABLES` command in order to [retrieve the names and values](#getting-values-from-the-requests) of all the fields included in an HTML page submitted to the server.

フォームのアクションを定義する例:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### 例題

Webアプリケーションにおいて、スタティックなHTMLページを使い、ブラウザーからレコードを検索できるようにしたいとします。 このページを "search.htm" とします。 アプリケーションには、検索結果を表示するためのスタティックページ ("results.htm") もあるとします。 The POST type has been associated to the page, as well as the `/4DACTION/SEARCH` action.

以下はこのページの HTMLコードです:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

During data entry, type “ABCD” in the data entry area, check the "Whole word" option and validate it by clicking the **Search** button. Webサーバーに送信されるリクエスト内部は以下の通りです:

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D calls the `On Web Authentication` database method (if it exists), then the `processForm` project method is called, which is as follows:

```4d
 C_TEXT($1) //mandatory for compiled mode
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Send the list to the results.htm form
  //which contains a reference to the variable vLIST,
  //for example <!--4DHTML vLIST-->
  //...
End if
```

## HTTPリクエストから値を取得する

4D Web サーバーでは、Webフォームや URL を介して POST や GET リクエストで送信されたデータを復元することができます。

ヘッダーや URL にデータが含まれたリクエストを Webサーバーが受信すると、4D はそれに含まれる HTMLオブジェクトの値を受け取ることができます。 This principle can be implemented in the case of a Web form, sent for example using `WEB SEND FILE` or `WEB SEND BLOB`, where the user enters or modifies values, then clicks on the validation button.

In this case, 4D can retrieve the values of the HTML objects found in the request using the `WEB GET VARIABLES` command. The `WEB GET VARIABLES` command retrieves the values as text.

以下の HTMLページのソースコードがあるとき:

```html
<html>
<head>
  <title>Welcome</title>
  <script language="JavaScript"><!--
function GetBrowserInformation(formObj){
formObj.vtNav_appName.value = navigator.appName
formObj.vtNav_appVersion.value = navigator.appVersion
formObj.vtNav_appCodeName.value = navigator.appCodeName
formObj.vtNav_userAgent.value = navigator.userAgent
return true
}
function LogOn(formObj){
if(formObj.vtUserName.value!=""){
return true
} else {
alert("Enter your name, then try again.")
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p> 
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> 
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p> 
<input name="vtNav_appName" value="" type="hidden"> 
<input name="vtNav_appVersion" value="" type="hidden"> 
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
```

4D が Webブラウザーにページを送信すると、以下のように表示されます:

![](../assets/en/WebServer/spiders.png)

このページの主な特徴は:

- It includes three **Submit** buttons: `vsbLogOn`, `vsbRegister` and `vsbInformation`.
- When you click **Log On**, the submission of the form is first processed by the JavaScript function `LogOn`. 名前が入力されていない場合、フォームは 4Dに送信すらされず、JavaScript による警告が表示されます。
- The form has a POST 4D method as well as a Submit script (_GetBrowserInformation_) that copies the browser properties to the four hidden objects whose names starts with _vtNav_App_.
  It also includes the `vtUserName` object.

Let’s examine the 4D method `WWW_STD_FORM_POST` that is called when the user clicks on one of the buttons on the HTML form.

```4d
  // Retrieval of value of variables
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 C_LONGINT($user)
 
 Case of
 
  // The Log On button was clicked
    :(Find in array($arrNames;"vsbLogOn")#-1)
       $user :=Find in array($arrNames;"vtUserName")
       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})
       $0:=(Records in selection([WWW Users])>0)
       If($0)
          WWW POST EVENT("Log On";WWW Log information)
  // The WWW POST EVENT method saves the information in a database table
       Else
 
          $0:=WWW Register
  // The WWW Register method lets a new Web user register
       End if
 
  // The Register button was clicked
    :(Find in array($arrNames;"vsbRegister")#-1)
       $0:=WWW Register
 
  // The Information button was clicked
    :(Find in array($arrNames;"vsbInformation")#-1)
       WEB SEND FILE("userinfos.html")
 End case
```

このメソッドの機能は:

- The values of the variables _vtNav_appName_, _vtNav_appVersion_, _vtNav_appCodeName_, and _vtNav_userAgent_ (bound to the HTML objects having the same names) are retrieved using the `WEB GET VARIABLES` command from HTML objects created by the _GetBrowserInformation_ JavaScript script.
- Out of the _vsbLogOn_, _vsbRegister_ and _vsbInformation_ variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the `WEB GET VARIABLES` command. この 3つのうちいずれかのボタンによって投稿がおこなわれたとき、ブラウザーはクリックされたボタンの値を 4D に返します。 これにより、どのボタンがクリックされたのかが分かります。

HTMLではすべてのオブジェクトがテキストオブジェクトであることに留意が必要です。 If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the `WEB GET VARIABLES` command, and not the position of the element in the array as in 4D. `WEB GET VARIABLES` always returns values of the Text type.

## その他の Webサーバーコマンド

4D Webサーバーには、リクエストの処理をカスタマイズするための、低レベル Webコマンドがいくつか用意されています。

- the `WEB GET HTTP BODY` command returns the body as raw text, allowing any parsing you may need
- the `WEB GET HTTP HEADER` command return the headers of the request. It is useful to handle custom cookies, for example (along with the `WEB SET HTTP HEADER` command).
- the `WEB GET BODY PART` and `WEB Get body part count` commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.

これらのコマンドは次の図にまとめられています:

![](../assets/en/WebServer/httpCommands.png)

4D Webサーバーは、どの Webクライアントからでもチャンクド・エンコーディングでアップロードされたファイルをサポートするようになりました。 チャンクド・エンコーディングは HTTP/1.1 にて定義されているデータ転送方式です。 これを使用することにより、最終的なデータサイズを知る事なく、データを複数の "チャンク" (部分) に分けて転送することができます。 The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using `WEB SEND RAW DATA`).

## COMPILER_WEB プロジェクトメソッド

COMPILER_WEB メソッドが存在する場合、それは HTTPサーバーが動的なリクエストを受け取り、4Dエンジンを呼び出した場合に、システムを通して呼び出されます。 This is the case, for example, when the 4D Web server receives a posted form or a URL to process in [`On Web Connection`](#on-web-connection). このメソッドは Web通信時に使用される型指定または変数初期化指示子を含めることを目的としています。 これはデータベースのコンパイル時にコンパイラーによって使用されます。 COMPILER_WEB メソッドはすべての Webフォームで共通です。 デフォルトでは、COMPILER_WEB メソッドは存在しません。 明示的に作成する必要があります。

> COMPILER_WEB プロジェクトメソッドは (存在すれば)、SOAPリクエストが受け入れられるごとに実行されます。
