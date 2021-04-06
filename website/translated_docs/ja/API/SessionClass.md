---
id: SessionClass
title: セッション
---

Session objects are returned by the [`Session`](#session) command when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). The Session object is automatically created and maintained by the 4D web server to control the session of a web client (e.g. a browser). This object provides the web developer with an interface to the user session, allowing to manage privileges, store contextual data, share information between processes, and launch session-related preemptive processes.

For detailed information about the session implementation, please refer to the [web server Sessions](WebServer/sessions.md) section.

### 概要


|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## セッション

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #_command_.Session.Syntax -->
**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| 参照  | タイプ        |    | 説明             |
| --- | ---------- |:--:| -------------- |
| 戻り値 | 4D.Session | <- | Session オブジェクト |
<!-- END REF -->


#### 説明

`Session` コマンドは、 <!-- REF #_command_.Session.Summary -->カレントのスケーラブルユーザーWebセッションに対応する `Session` オブジェクトを返します<!-- END REF -->。

This command only works when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions). It returns *Null* when sessions are disabled or when legacy sessions are used.

When scalable sessions are enabled, the `Session` object is available from any web processes in the following contexts:

- `On Web Authentication`, `On Web Connection`, and `On REST Authentication` database methods,
- ORDA [Data Model Class functions](ORDA/ordaClasses.md) called with REST requests,
- code processed through 4D tags in semi-dynamic pages (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE)
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls.


#### 例題

You have defined the `action_Session` method with attribute "Available through 4D tags and URLs". You call the method by entering the following URL in your browser:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session method
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) //calling the hasPrivilege function
          WEB SEND TEXT("4DACTION --> Session is WebAdmin")
       Else
          WEB SEND TEXT("4DACTION --> Session is not WebAdmin")
       End if
    Else
       WEB SEND TEXT("4DACTION --> Sesion is null")
 End case
```



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->
| 参照 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

The `.clearPrivileges()` function <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session<!-- END REF -->. 結果的に、当該セッションは自動的にゲストセッションになります。


#### 例題

```4d
// セッションを無効にします
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest は true
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### 説明

The `.expirationDate` property contains <!-- REF #SessionClass.expirationDate.Summary -->the expiration date and time of the session cookie<!-- END REF -->. 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

このプロパティは **読み取り専用** です。 [`.idleTimeout`](#idletimeout) プロパティ値が変更された場合、有効期限は自動的に再計算されます。

#### 例題

```4d
var $expiration : Text
$expiration:=Session.expirationDate // 例: "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF SessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->
**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->
| 参照        | タイプ  |    | 説明                                                |
| --------- | ---- |:--:| ------------------------------------------------- |
| privilege | テキスト | <- | 確認するアクセス権の名称                                      |
| 戻り値       | ブール  | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |
<!-- END REF -->


#### 説明

The `.hasPrivilege()` function <!-- REF #SessionClass.hasPrivilege().Summary -->returns True if the privilege is associated to the session, and False otherwise<!-- END REF -->.


#### 例題

"WebAdmin" アクセス権がセッションに紐づいているかを確認します:

```4d
If (Session.hasPrivilege("WebAdmin"))
    // アクセス権が付与されているので、何もしません
Else
    // 認証ページを表示します

End if
```

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->
**.idleTimeout** : Integer<!-- END REF -->

#### 説明

The `.idleTimeout` property contains <!-- REF #SessionClass.idleTimeout.Summary -->the inactivity session timeout (in minutes), after which the session is automatically closed by 4D<!-- END REF -->.

プロパティ未設定時のデフォルト値は 60 (1時間) です。

このプロパティが設定されると、それに応じて [`.expirationDate`](#expirationdate) プロパティも更新されます。

> 60 (分) 未満の値を指定することはできません (60 未満の値を設定した場合、タイムアウトは 60 (分) に設定されます)。


このプロパティは **読み書き可能** です。

#### 例題

```4d
If (Session.isGuest())
        // ゲストセッションは、60分の非アクティブ時間経過後に終了します
    Session.idleTimeout:=60
Else
        // その他のセッションは、120分の非アクティブ時間経過後に終了します
    Session.idleTimeout:=120
End if

```

<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->
**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->
| 参照  | タイプ |    | 説明                            |
| --- | --- |:--:| ----------------------------- |
| 戻り値 | ブール | <- | ゲストセッションの場合は true、それ以外は false |
<!-- END REF -->

#### 説明

The `.isGuest()` function <!-- REF #SessionClass.isGuest().Summary -->returns True if the session is a Guest session (i.e. it has no privileges)<!-- END REF -->.


#### 例題

`On Web Connection` データベースメソッドにて:

```4d
If (Session.isGuest())
    // ゲストユーザー用の処理
End if
```


<!-- END REF -->


<!-- REF SessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->
**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->
| 参照         | タイプ    |    | 説明                                          |
| ---------- | ------ |:--:| ------------------------------------------- |
| privilege  | テキスト   | -> | アクセス権の名称                                    |
| privileges | コレクション | -> | アクセス権の名称のコレクション                             |
| settings   | オブジェクト | -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |
<!-- END REF -->

#### 説明

The `.setPrivileges()` function <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) defined in the parameter to the session<!-- END REF -->.

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | タイプ           | 説明                                                 |
| ---------- | ------------- | -------------------------------------------------- |
| privileges | テキストまたはコレクション | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li> |
| userName   | テキスト          | (任意) セッションと紐づけるユーザー名                               |

無効なアクセス権名を含む場合、`privileges` プロパティは無視されます。

> 現在の実装では (v18 R6)、"WebAdmin" アクセス権のみ利用可能です。

セッションにアクセス権が紐づいていない場合、そのセッションはデフォルトで [ゲストセッション](#isguest) です。

[`userName`](#username) プロパティは Session オブジェクトレベルで利用可能です (読み取り専用)。

#### 例題

カスタムな認証メソッドにおいて、ユーザーに "WebAdmin" アクセス権を付与します:

```4d
var $userOK : Boolean

... // ユーザー認証

If ($userOK) // ユーザー認証に成功した場合
  var $info : Object
  $info:=New object()
  $info.privileges:=New collection("WebAdmin")
  Session.setPrivileges($info)
End if

```


<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->
## .storage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.storage.Syntax -->
**.storage** : Object<!-- END REF -->

#### 説明

The `.storage` property contains <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all requests of the web client<!-- END REF -->.

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

This property is **read only** itself but it returns a read-write object.

#### 例題

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if 

```

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.userName.Syntax -->
**.userName** : Text<!-- END REF -->

#### 説明

The `.userName` property contains <!-- REF #SessionClass.userName.Summary -->the user name associated to the session<!-- END REF -->. You can use it to identify the user within your code.

This property is an empty string by default. It can be set using the `privileges` property of the [`setPrivileges()`](#setprivileges) function.

This property is **read only**. 



<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
