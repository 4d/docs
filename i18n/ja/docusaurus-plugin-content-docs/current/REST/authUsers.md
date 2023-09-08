---
id: authUsers
title: ユーザーとセッション
---

RESTリクエストは [Webユーザーセッション](WebServer/sessions.md) の恩恵を受けることができます。これにより、複数リクエストの処理や、Webクライアントプロセス間のデータ共有、ユーザー権限などの追加機能を利用することができます。

4D Server上で RESTセッションを開くには、まずリクエストを送信するユーザーが認証されなければなりません。


## ユーザー認証

アプリケーションにユーザーをログインするには、ユーザー名とパスワードをヘッダーに含めた POSTリクエスト内で [`$directory/login`]($directory.md#directorylogin) を呼び出します。 このリクエストは `On REST Authentication` データベースメソッド (存在すれば) を呼び出します。このメソッド内でユーザーの認証をおこなうことができます (後述参照)。

## セッションの開始

[スケーラブルセッションを有効化](WebServer/sessions.md#セッションの有効化) (推奨) している場合に、`On REST Authentication` データベースメソッドが `true` を返すと、ユーザーセッションは自動的に開かれ、`Session` オブジェクトおよび [Session API](API/SessionClass.md) を介して管理することができます。 後続の RESTリクエストは同じセッションcookie を使用します。

`On REST Authentication` データベースメソッドが定義されてない場合には、`guest` セッションが開かれます。


## プリエンプティブモード

4D Server上では、**インタプリタモードであっても**、RESTリクエストは自動的にプリエンプティブプロセスで処理されます。 そのため、コードは [プリエンプティブ実行に準拠](../WebServer/preemptiveWeb.md#スレッドセーフなWebサーバーコードの書き方) している必要があります。

> サーバーマシン上のインタープリターWebコードをデバッグするには、あらかじめサーバーのデバッガーを [サーバー](../Debugging/debugging-remote.md) または [リモートマシン](../Debugging/debugging-remote.md#リモート4dクライアントでのデバッガーの有効化) で有効化する必要があります。 これにより、Webプロセスがコオペラティブモードに切り替わり、Webサーバーコードのデバッグが可能になります。

シングルユーザーの 4D では、インタープリターコードは常にコオペラティブモードで実行されます。


## 例題

この例では、ユーザーが htmlページにメールアドレスとパスワードを入力し、POST で [`$directory/login`]($directory.md#directorylogin) をリクエストします (htmlページの送信においては、HTTPS接続の使用が推奨されます)。 これによて呼び出された `On REST Authentication` データベースメソッドがユーザー認証をおこない、セッションを確立します。

htmlログインページ:

![alt-text](../assets/en/REST/login.png)


```html
<html><body bgcolor="#ffffff">

<div id="demo">
    <FORM name="myForm">
メールアドレス: <INPUT TYPE=TEXT NAME=userId VALUE=""><br/>
パスワード: <INPUT TYPE=TEXT NAME=password VALUE=""><br/>
<button type="button" onclick="onClick()">
ログイン
</button>
<div id="authenticationFailed" style="visibility:hidden;">ログインに失敗しました</div>
</FORM>
</div>

<script>
function sendData(data) {
  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.status == 200) {      
      window.location = "authenticationOK.shtml"; 
      }
      else {
      document.getElementById("authenticationFailed").style.visibility = "visible";
      }
  };

  XHR.open('POST', 'http://127.0.0.1:8044/rest/$directory/login'); // RESTサーバーアドレス

  XHR.setRequestHeader('username-4D', data.userId);
  XHR.setRequestHeader('password-4D', data.password);
  XHR.setRequestHeader('session-4D-length', data.timeout);

  XHR.send();
};
function onClick()
{
sendData({userId:document.forms['myForm'].elements['userId'].value , password:document.forms['myForm'].elements['password'].value , timeout:120})
}
</script></body></html>

```

サーバーにログイン情報が送信されると、`On REST Authentication` データベースメソッドが呼び出されます:

```4d
    // On REST Authentication データベースメソッド

#DECLARE($userId : Text; $password : Text) -> $Accepted : Boolean
var $sales : cs.SalesPersonsEntity

$Accepted:=False

    // ヘッダーに username-4D と password-4D を含めて '/rest' URL が呼び出されました
If ($userId#"")
    $sales:=ds.SalesPersons.query("email = :1"; $userId).first()
    If ($sales#Null)
        If (Verify password hash($password; $sales.password))
            fillSession($sales)
            $Accepted:=True
        End if 
    End if 
End if 
```

> 一旦呼び出されて `True` を返すと、同セッションにおいて `On REST Authentication` データベースメソッドはそれ以上呼び出されません。

`fillSession` プロジェクトメソッドは、たとえば次のようにユーザーセッションを初期化します:

```4d
#DECLARE($sales : cs.SalesPersonsEntity)
var $info : Object

$info:=New object()
$info.userName:=$sales.firstname+" "+$sales.lastname

Session.setPrivileges($info)

Use (Session.storage)
    If (Session.storage.myTop3=Null)
        Session.storage.myTop3:=$sales.customers.orderBy("totalPurchase desc").slice(0; 3)
    End if 
End use
```
