---
id: SessionClass
title: Session
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Session objects are returned by the [`Session`](#session) command. These objects provide the developer with an interface allowing to manage the current user session and execute actions such as store contextual data, share information between session processes, launch session-related preemptive processes, or (web only) manage [privileges](../ORDA/privileges.md).

### Session types

Three types of sessions are supported by this class:

- [**Web user sessions**](WebServer/sessions.md): Web user sessions are available when [scalable sessions are enabled in your project](WebServer/sessions.md#enabling-sessions). They are used for Web and REST connections, and can be assigned privileges.
- [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions): In client/server applications, remote users have their own sessions managed on the server.
- [**Stored procedures session**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html): All stored procedures executed on the server share the same virtual user session.

:::note

The availability of properties and functions in the `Session` object depend on the session type.

:::


### 概要


|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.id.Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.info.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>履歴</summary>

| バージョン  | 内容                                                     |
| ------ | ------------------------------------------------------ |
| v20 R5 | Support of remote client and stored procedure sessions |
| v18 R6 | 追加                                                     |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| 引数  | タイプ        |    | 説明             |
| --- | ---------- |:--:| -------------- |
| 戻り値 | 4D.Session | <- | Session オブジェクト |
<!-- END REF -->


#### 説明

`Session` コマンドは、 <!-- REF #_command_.Session.Summary -->returns the `Session` object corresponding to the current user session<!-- END REF -->。

Depending on the process from which the command is called, the current user session can be:

- a web session (when [scalable sessions are enabled](WebServer/sessions.md#enabling-sessions)),
- a remote client session,
- the stored procedures session.

For more information, see the [Session types](#session-types) paragraph.

If the command is called from a non supported context (single-user application, scalable sessions disabled...), it returns *Null*.

#### Web sessions

The `Session` object of web sessions is available from any web process:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
- セミダイナミックページにおいて、4Dタグ (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) を介して処理されるコード
- project methods with the "Available through 4D tags and URLs (4DACTION...)" attribute and called through 4DACTION/ urls,
- モバイルリクエスト用の [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) データベースメソッド
- ORDA functions [called with REST requests](../REST/ClassFunctions.md).

For more information on web user sessions, please refer to the [Web Server Sessions](WebServer/sessions.md) section.

#### Remote client sessions

The `Session` object of remote client sessions is available from:

- Project methods that have the [Execute on Server](../Project/code-overview.md#execute-on-server) attribute (they are executed in the "twinned" process of the client process),
- トリガー,
- `On Server Open Connection` and `On Server Shutdown Connection` database methods.

For more information on remote user sessions, please refer to the [**Remote client user sessions**](../Desktop/clientServer.md#remote-user-sessions) paragraph.

#### Stored procedures session

All stored procedure processes share the same virtual user session. The `Session` object of stored procedures is available from:

- methods called with the [`Execute on server`](https://doc.4d.com/4dv20/help/command/en/page373.html) command,
- `On Server Startup`, `On Server Shutdown`, `On Backup Startup`, `On Backup Shutdown`, and `On System event` database methods

For information on stored procedures virtual user session, please refer to the [XXXX](XXX) page.

#### 例題

"公開オプション: 4DタグとURL(4DACTION...)" を有効にした `action_Session` メソッドを定義しました。 ブラウザーに次の URL を入力してメソッドを呼び出します:

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
       WEB SEND TEXT("4DACTION --> Session is null")
 End case
```



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| 引数  | タイプ     |    | 説明                                  |
| --- | ------- |:--:| ----------------------------------- |
| 戻り値 | Boolean | <- | True if the execution is successful |
<!-- END REF -->


#### 説明

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

`.clearPrivileges()` 関数は、 <!-- REF #SessionClass.clearPrivileges().Summary -->removes all the privileges associated to the session and returns **True** if the execution was successful<!-- END REF -->。 結果的に、当該セッションは自動的にゲストセッションになります。


#### 例題

```4d
//Invalidate a session
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest is True
```

<!-- END REF -->



<!-- REF SessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### 説明

:::note

This property is only available with web user sessions.

:::

`.expirationDate` プロパティは、 <!-- REF #SessionClass.expirationDate.Summary -->セッションcookie の有効期限を返します<!-- END REF -->。 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`。

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

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| 引数        | タイプ     |    | 説明                                                |
| --------- | ------- |:--:| ------------------------------------------------- |
| privilege | Text    | <- | 確認するアクセス権の名称                                      |
| 戻り値       | Boolean | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |
<!-- END REF -->


#### 説明

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::


`.hasPrivilege()` 関数は、 <!-- REF #SessionClass.hasPrivilege().Summary -->対象セッションに privilege のアクセス権が紐づいていれば true、でなければ false を返します<!-- END REF -->。


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


<!-- REF SessionClass.id.Desc -->
## .id

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v20 R5 | 追加 |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### 説明

`.id` プロパティは、 <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the session on the server<!-- END REF -->。 This unique string is automatically assigned by the server for each session and allows you to identify its processes. 


<!-- END REF -->



<!-- REF SessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### 説明

:::note

This property is only available with web user sessions.

:::

`.idleTimeout` プロパティは、 <!-- REF #SessionClass.idleTimeout.Summary -->対象セッションが 4D によって終了されるまでの、非アクティブタイムアウト時間 (分単位) を格納します<!-- END REF -->。

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


<!-- REF SessionClass.info.Desc -->
## .info

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v20 R5 | 追加 |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### 説明

:::note

This property is only available with remote client and stored procedure sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server<!-- END REF -->。

The `.info` object is the same object as the one returned by the [`Get process activity`](https://doc.4d.com/4dv20/help/command/en/page1495.html) command for remote client and stored procedure sessions.

The `.info` object contains the following properties:

| プロパティ            | タイプ           | 説明                                                                                                 |
| ---------------- | ------------- | -------------------------------------------------------------------------------------------------- |
| type             | Text          | Session type: "remote" or "storedProcedure"                                                        |
| userName         | Text          | 4D user name (same value as [`.userName`](#username))                                              |
| machineName      | Text          | Remote sessions: name of the remote machine. Stored procedures session: name of the server machine |
| systemUserName   | Text          | Remote sessions: name of the system session opened on the remote machine.                          |
| IPAddress        | Text          | IP address of the remote machine                                                                   |
| hostType         | Text          | Host type: "windows" or "mac"                                                                      |
| creationDateTime | Date ISO 8601 | Date and time of session creation                                                                  |
| state            | Text          | Session state: "active", "postponed", "sleeping"                                                   |
| ID               | Text          | Session UUID (same value as [`.id`](#id))                                                          |
| persistentID     | Text          | Session's persistent ID                                                                            |

:::note

Since `.info` is a computed property, it is recommended to call it once and then to store it in a local variable if you want to do some processing on its properties.

:::


<!-- END REF -->


<!-- REF SessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| 引数  | タイプ     |    | 説明                            |
| --- | ------- |:--:| ----------------------------- |
| 戻り値 | Boolean | <- | ゲストセッションの場合は true、それ以外は false |
<!-- END REF -->

#### 説明

:::note

This function always returns **True** with remote client and stored procedure sessions.

:::

`.isGuest()` 関数は、 <!-- REF #SessionClass.isGuest().Summary -->アクセス権のないゲストセッションの場合は true を返します<!-- END REF -->。


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

| バージョン  | 内容               |
| ------ | ---------------- |
| v19 R8 | roles プロパティをサポート |
| v18 R6 | 追加               |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| 引数         | タイプ        |    | 説明                                          |
| ---------- | ---------- |:--:| ------------------------------------------- |
| privilege  | Text       | -> | アクセス権の名称                                    |
| privileges | Collection | -> | アクセス権の名称のコレクション                             |
| settings   | Object     | -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |
| 戻り値        | Boolean    | <- | True if the execution is successful         |
<!-- END REF -->

#### 説明

:::note

Since privileges are only supported in web user sessions, this function does nothing and always returns **False** in other session types.

:::

`.setPrivileges()` 関数は、 <!-- REF #SessionClass.setPrivileges().Summary -->associates the privilege(s) and/or role(s) defined in the parameter to the session and returns **True** if the execution was successful<!-- END REF -->。

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | タイプ                 | 説明                                                   |
| ---------- | ------------------- | ---------------------------------------------------- |
| privileges | Text または Collection | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li>  |
| roles      | Text または Collection | <li>ロールの文字列</li><li>ロールの文字列のコレクション</li> |
| userName   | Text                | (任意) セッションと紐づけるユーザー名                                 |

:::note

権限とロールは、プロジェクトの [`roles.json`](../ORDA/privileges.md#rolesjson-ファイル) ファイルで定義されます。 詳細については、[**権限**](../ORDA/privileges.md) を参照してください。

:::

`privileges` または `roles` プロパティに、[`roles.json`](../ORDA/privileges.md#rolesjson-ファイル) ファイルで宣言されていない名前が含まれている場合、その名前は無視されます。

セッションにアクセス権またはロールが紐づいていない場合、そのセッションはデフォルトで [ゲストセッション](#isguest) です。

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

| バージョン  | 内容                                                     |
| ------ | ------------------------------------------------------ |
| v20 R5 | Support of remote client and stored procedure sessions |
| v18 R6 | 追加                                                     |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### 説明

`.storage` プロパティは、 <!-- REF #SessionClass.storage.Summary -->a shared object that can be used to store information available to all processes of the session<!-- END REF -->。

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

> サーバーの `Storage` オブジェクトと同様に、`.storage` プロパティは常に "single" で存在します。 共有オブジェクトや共有コレクションを `.storage` に追加しても、共有グループは作成されません。

このプロパティは **読み取り専用** ですが、戻り値のオブジェクトは読み書き可能です。

<Tabs>

<TabItem value="Web session example">

You want to store the client IP in the `.storage` property. You can write in the `On Web Authentication` database method:

```4d
If (Session.storage.clientIP=Null) //first access
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use
End if

```
</TabItem>

<TabItem value="Remote session example">

You want to share data between processes in the same session:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

</TabItem>

</Tabs>

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>履歴</summary>

| バージョン  | 内容                                                     |
| ------ | ------------------------------------------------------ |
| v20 R5 | Support of remote client and stored procedure sessions |
| v18 R6 | 追加                                                     |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### 説明

`.userName` プロパティは、 <!-- REF #SessionClass.userName.Summary -->セッションと紐づいたユーザー名を格納します<!-- END REF -->。 このプロパティは、コード内でユーザーを確認するのに使用できます。

- With web sessions, this property is an empty string by default. これは、[`setPrivileges()`](#setprivileges) 関数の `privileges` プロパティを使って設定することができます。
- With remote and stored procedure sessions, this property returns the same user name as the [`Current user`](https://doc.4d.com/4dv20/help/command/en/page182.html) command.

このプロパティは **読み取り専用** です。



<!-- END REF -->
