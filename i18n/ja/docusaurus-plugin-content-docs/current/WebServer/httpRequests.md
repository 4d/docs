---
id: httpRequests
title: HTTPリクエストの処理
---

The 4D web server provides several built-in features to handle HTTP requests:

- Webアプリケーションのルーターとなる `On Web Connection` データベースメソッド。
- サーバーサイドコードを呼び出すための `/4DACTION` URL。
- サーバーに送信された HTMLオブジェクトから値を取得する `WEB GET VARIABLES`。
- `WEB GET HTTP BODY`、`WEB GET HTTP HEADER`、`WEB GET BODY PART` などのコマンドによって、リクエスト処理をカスタマイズすることができます (cookie 含む)。
- 変数を宣言するための _COMPILER_WEB_ プロジェクトメソッド。

:::info

You can also implement your own HTTP request handlers for a customized control over incoming requests and outgoing responses. When a custom HTTP request handler is triggered, no database method is called. See [**HTTP Request Handler**](http-request-handler.md) section.

:::

## On Web Connection

`On Web Connection` データベースメソッドは、4D Webサーバーのエントリーポイントとして使用できます。

### データベースメソッドの呼び出し

The `On Web Connection` database method is automatically called when the server receives any URL that is not a valid path to an existing page on the server (and is not a URL with a pattern triggering a [custom HTTP Request Handler](http-request-handler.md)).

データベースメソッドは、URL とともに呼び出されます。

たとえば、"_a/b/c_" という URL はデータベースメソッドを呼び出しますが、[WebFolder](webServerConfig.md#ルートフォルダー) の "a/b" サブフォルダーに "c.html" というページが存在する場合、"_a/b/c.html_" はデータベースメソッドを呼び出しません。

> このリクエストは、事前に [`On Web Authentication`](authentication.md#on-web-authentication) データベースメソッド (あれば) に受け入れられているべきで、Webサーバーも起動している必要があります。

### シンタックス

**On Web Connection**( _$url_ : Text; _$header_ : Text; _$BrowserIP_ : Text; _$ServerIP_ : Text; _$user_ : Text; _$password_ : Text )

| 引数         | 型    |                             | 説明                                              |
| ---------- | ---- | :-------------------------: | ----------------------------------------------- |
| $url       | Text | <- | URL                                             |
| $header    | Text | <- | HTTPヘッダー + HTTPボディ (32 KBまで) |
| $BrowserIP | Text | <- | Webクライアント (ブラウザー) の IPアドレス   |
| $ServerIP  | Text | <- | サーバーの IPアドレス                                    |
| $user      | Text | <- | ユーザー名                                           |
| $password  | Text | <- | パスワード                                           |

You must declare these parameters:

```4d
// On Web Connection データベースメソッド
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)


```

> インターフェース要素 を表示する 4Dコマンド (`DIALOG`、`ALERT` など)  の呼び出しは許可されず、メソッドの処理を終了します。  の呼び出しは許可されず、メソッドの処理を終了します。

### $url - URL extra data

The first parameter ($url) is the URL entered by users in the address area of their web browser, without the host address.

イントラネット接続の場合を見てみましょう。 4D Webサーバーマシンの IPアドレスを 123.4.567.89 とします。 イントラネット接続の場合を見てみましょう。 4D Webサーバーマシンの IPアドレスを 123.4.567.89 とします。 The following table shows the values of $url depending on the URL entered in the web browser:

| Webブラウザーに入力された値                                                                                                                                   | Value of parameter $url                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.4.567.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.4.567.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

この引数は必要に応じて自由に利用できます。 4D は単に URL のホスト部より後の部分を無視し、$1 に渡します。 たとえば、値 "_/Customers/Add_" が "`[Customers]` テーブルに新規レコードを直接追加する" ということを意味するような、オリジナルのルールを作成できます。 利用可能な値やデフォルトブックマークを Webユーザーに提供することで、アプリケーションの異なる部分へのショートカットを提供できます。 このようにして、Webユーザーは新しく接続するたびにナビゲーションを通過することなく、素早く Webサイトのリソースにアクセスできます。

### $header - Header and Body of the HTTP request

The second parameter ($header) is the header and the body of the HTTP request sent by the web browser. この情報は `On Web Connection` データベースメソッドに "そのまま" 渡されることに留意してください。 その内容は、接続を試みた Webブラウザーの仕様により異なります。 その内容は、接続を試みた Webブラウザーの仕様により異なります。

アプリケーションでこの情報を使用するには、開発者がヘッダーとボディを解析しなければなりません。 `WEB GET HTTP HEADER` や `WEB GET HTTP BODY` コマンドを使うことができます。

> For performance reasons, the size of data passing through the $header parameter must not exceed 32 KB. これを超過する分は、4D HTTPサーバーにより切り取られます。

### $BrowserIP - Web client IP address

The $BrowserIP parameter receives the IP address of the browser’s machine. この情報を使用して、イントラネットアクセスとインターネットアクセスを区別できます。

> 4D は IPv4 アドレスを、96-bit の接頭辞付きのハイブリッド型 IPv6/IPv4 フォーマットで返します。たとえば、::ffff:192.168.2.34 は、192.168.2.34 という IPv4 アドレスを意味します。 詳細については、[IPv6 のサポートについて](webServerConfig.md#IPv6-のサポートについて) の章を参照ください。

### $ServerIP - Server IP address

The $ServerIP parameter receives the IP address requested by the 4D Web Server. 4D はマルチホーミングをサポートしており、複数の IPアドレスを持つマシンを使用できます。 詳細は [設定ページ](webServerConfig.md#リクエストを受け付ける-IPアドレス) を参照ください。

### $user and $password - User Name and Password

The $user and $password parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the [authentication page](authentication.md)).

> If the user name sent by the browser exists in 4D, the $password parameter (the user’s password) is not returned for security reasons.

## /4DACTION

\*\*/4DACTION/\*\*_MethodName_<br/>
\*\*/4DACTION/\*\*_MethodName/Param_

| 引数         | 型    |     | 説明                    |
| ---------- | ---- | :-: | --------------------- |
| MethodName | Text |  -> | 実行する 4Dプロジェクトメソッド名    |
| Param      | Text |  -> | プロジェクトメソッドに渡されるテキスト引数 |

**利用法**: URL またはフォームアクション

この URL を使用して、任意の _Param_ テキスト引数とともに _MethodName_ に指定した 4Dプロジェクトメソッドを呼び出すことができます。 The method will receive this parameter. The method will receive this parameter.

- 4Dプロジェクトメソッドは、[Webリクエスト用に許可](allowProject.md)されていなければなりません。メソッドのプロパティで "公開オプション: 4DタグとURL(4DACTION...)" 属性がチェックされていない場合、Webリクエストは拒否されます。
- `/4DACTION/MyMethod/Param` リクエストを受け取ると、4D は `On Web Authentication` データベースメソッド (あれば) を呼び出します。

`4DACTION/` は、スタティックな Webページの URL に割り当てることもできます:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

`MyMethod` プロジェクトメソッドは通常レスポンスを返すべきです (`WEB SEND FILE` や `WEB SEND BLOB` で HTMLページを送信するなど)。 ブラウザーをブロックしないように、処理は可能な限り短時間でおこなわれるようにします。 ブラウザーをブロックしないように、処理は可能な限り短時間でおこなわれるようにします。

> `4DACTION/` から呼び出されるメソッドは、インタフェース要素 (`DIALOG`, `ALERT` など) を呼び出してはいけません。

#### 例題

この例題は、HTMLピクチャーオブジェクトに `/4DACTION/` URL を割り当て、ページ上でピクチャーを動的に表示する方法を説明しています。 スタティック HTMLページに以下のコードを記述します: スタティック HTMLページに以下のコードを記述します:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

`getPhoto` メソッドは以下のとおりです:

```4d
#DECLARE ($url : Text) // This parameter must always be declared
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

 //find the picture in the Images folder within the Resources folder
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$url+".psd"

READ PICTURE FILE($path;$PictVar) //put the picture in the picture variable
PICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format
WEB SEND BLOB($BLOB;"image/png")
```

### 4DACTION を使用してフォームをポスト

4D Webサーバーでは、ポストされたフォームを使用することもできます。これはスタティックなページから Webサーバーにデータを送信し、すべての値を簡単に取得するというものです。 POSTタイプを使用し、フォームのアクションは /4DACTION/MethodName で始まっていなければなりません。

フォームは 2つのメソッドを使用してサブミットできます (4D では両方のタイプを使用できます):

- POST は通常 Webサーバーにデータを送信するのに使用します。
- GET は通常 Webサーバーからデータをリクエストするのに使用します。

> この場合、Webサーバーがポストされたフォームを受信すると、`On Web Authentication` データベースメソッドが (あれば) 呼び出されます。

サーバーに投稿された HTMLページに含まれるすべてのフィールドの [名前と値を取得](#httpリクエストから値を取得する) するには、このメソッド内で `WEB GET VARIABLES` コマンドを呼び出す必要があります。

フォームのアクションを定義する例:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### 例題

Webアプリケーションにおいて、スタティックなHTMLページを使い、ブラウザーからレコードを検索できるようにしたいとします。 このページを "search.htm" とします。 アプリケーションには、検索結果を表示するためのスタティックページ ("results.htm") もあるとします。 POSTメソッドと `/4DACTION/PROCESSFORM` アクションがページに割り当てられています。

以下はこのページの HTMLコードです:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

データ入力エリアに "ABCD" とタイプし、"Whole word (句として検索)" オプションをチェックして **Search** (検索) ボタンをクリックします。 Webサーバーに送信されるリクエスト内部は以下の通りです: Webサーバーに送信されるリクエスト内部は以下の通りです:

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D は `On Web Authentication` データベースメソッドを (あれば) 呼び出し、そして以下の`processForm` プロジェクトメソッドを呼び出します:

```4d
 #DECLARE ($url : Text) //mandatory for compiled mode
 var $vName : Integer
 var vName;vLIST : Text
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

ヘッダーや URL にデータが含まれたリクエストを Webサーバーが受信すると、4D はそれに含まれる HTMLオブジェクトの値を受け取ることができます。 This principle can be implemented in the case of a Web form, sent for example using [`WEB SEND FILE`](../commands-legacy/web-send-file.md) or [`WEB SEND BLOB`](../commands-legacy/web-send-blob.md), where the user enters or modifies values, then clicks on the validation button.

In this case, 4D can retrieve the values of the HTML objects found in the request using the [`WEB GET VARIABLES`](../commands-legacy/web-get-variables.md) command. `WEB GET VARIABLES` コマンドは、値をテキストとして受け取ります。

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

- 送信のための **Submit** ボタンが 3つあります: `vsbLogOn`, `vsbRegister` そして `vsbInformation`。
- **Log On** をクリックすると、フォームからの送信はまず初めに JavaScript関数 `LogOn` によって処理されます。 名前が入力されていない場合、フォームは 4Dに送信すらされず、JavaScript による警告が表示されます。 名前が入力されていない場合、フォームは 4Dに送信すらされず、JavaScript による警告が表示されます。
- フォームは POST 4Dメソッドに加えて、ブラウザープロパティを _vtNav_App_ から始まる名称の 4つの隠しオブジェクトへとコピーする投稿スクリプト (_GetBrowserInformation_) を持っています。
  また、このページには `vtUserName` オブジェクトも含まれます。
  また、このページには `vtUserName` オブジェクトも含まれます。

ユーザーが HTMLフォーム上のボタンのどれかをクリックした際に呼び出される `WWW_STD_FORM_POST` という 4Dメソッドを検証してみましょう。

```4d
  // Retrieval of value of variables
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 var $user : Integer

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

- 変数 _vtNav_appName_, _vtNav_appVersion_, _vtNav_appCodeName_, そして _vtNav_userAgent_ の値 (同じ名前を持つ HTMLオブジェクトにそれぞれバインドされています) は 、`WEB GET VARIABLES` コマンドを使用することによって JavaScript のスクリプト _GetBrowserInformation_ で作成された HTMLオブジェクトから取得することができます。
- 3つの投稿ボタンにバインドされている変数 _vsbLogOn_, _vsbRegister_ と _vsbInformation_ のうち、クリックされたボタンに対応するもののみが `WEB GET VARIABLES` コマンドによって取得されます。 この 3つのうちいずれかのボタンによって投稿がおこなわれたとき、ブラウザーはクリックされたボタンの値を 4D に返します。 これにより、どのボタンがクリックされたのかが分かります。

HTMLではすべてのオブジェクトがテキストオブジェクトであることに留意が必要です。 HTMLではすべてのオブジェクトがテキストオブジェクトであることに留意が必要です。 SELECT要素を使用した場合、 `WEB GET VARIABLES` コマンドで返されるのはオブジェクト内でハイライトされている要素の値であり、4D のように配列内の要素の位置を返すわけではありません。 `WEB GET VARIABLES` コマンドは必ずテキスト型の値を返します。 `WEB GET VARIABLES` コマンドは必ずテキスト型の値を返します。

## その他の Webサーバーコマンド

4D Webサーバーには、リクエストの処理をカスタマイズするための、低レベル Webコマンドがいくつか用意されています。

- the [`WEB GET HTTP BODY`](../commands-legacy/web-get-http-body.md) command returns the body as raw text, allowing any parsing you may need
- the [`WEB GET HTTP HEADER`](../commands-legacy/web-get-http-header.md) command return the headers of the request. カスタムcookie などを処理するのに便利です (`WEB SET HTTP HEADER` コマンドも使用できます)。
- the [`WEB GET BODY PART`](../commands-legacy/web-get-body-part.md) and [`WEB Get body part count`](../commands-legacy/web-get-body-part-count.md) commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.

これらのコマンドは次の図にまとめられています:

![](../assets/en/WebServer/httpCommands.png)

4D Webサーバーは、どの Webクライアントからでもチャンクド・エンコーディングでアップロードされたファイルをサポートするようになりました。 チャンクド・エンコーディングは HTTP/1.1 にて定義されているデータ転送方式です。 これを使用することにより、最終的なデータサイズを知る事なく、データを複数の "チャンク" (部分) に分けて転送することができます。 The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using [`WEB SEND RAW DATA`](../commands-legacy/web-send-raw-data.md)).

## COMPILER_WEB プロジェクトメソッド

COMPILER_WEB メソッドが存在する場合、それは HTTPサーバーが動的なリクエストを受け取り、4Dエンジンを呼び出した場合に、システムを通して呼び出されます。 これはたとえば 4D Webサーバーが、ポストされたフォーム、または処理すべき URL を [`On Web Connection`](#on-web-connection) に受け取る場合が該当します。 このメソッドは Web通信時に使用される型指定または変数初期化指示子を含めることを目的としています。 これはデータベースのコンパイル時にコンパイラーによって使用されます。 COMPILER_WEB メソッドはすべての Webフォームで共通です。 デフォルトでは、COMPILER_WEB メソッドは存在しません。 明示的に作成する必要があります。

> COMPILER_WEB プロジェクトメソッドは (存在すれば)、SOAPリクエストが受け入れられるごとに実行されます。
