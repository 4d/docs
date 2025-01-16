---
id: SessionClass
title: Session
---

Session オブジェクトは [`Session`](../commands/session.md) コマンドによって返されます。 このオブジェクトは、カレントユーザーセッションを管理するためのインターフェースをデベロッパーに対して提供し、コンテキストデータの保存、プロセス間の情報共有、セッションに関連したプリエンプティブプロセスの開始などのアクションの実行や、[アクセス権](../ORDA/privileges.md) の管理を可能にします。

### セッションの種類

The following types of sessions are supported by this class:

- [**Webユーザーセッション**](WebServer/sessions.md): [プロジェクトにおいてスケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合、Webユーザーセッションが利用可能です。 これらは Web および REST 接続に使用され、権限を割り当てることができます。
- [**リモートクライアントユーザー セッション**](../Desktop/clientServer.md#リモートユーザーセッション): クライアント/サーバーアプリケーションでは、リモートユーザーは、サーバー上で管理される独自のセッションを持ちます。
- [**ストアドプロシージャーセッション**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.ja.html): サーバ上で実行されるすべてのストアドプロシージャーは、同じ仮想ユーザーセッションを共有します。
- [**Standalone session**](../Project/overview.md#development): Local session object returned in single-user application (useful in development and test phases of client/server applications).

:::note

`Session` オブジェクトにおいて利用可能なプロパティと関数は、セッションの種類に依存します。

:::

### 概要

|                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)<br/><!-- INCLUDE #SessionClass.clearPrivileges().Summary --> |
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)<br/><!-- INCLUDE #SessionClass.expirationDate.Summary -->        |
| [<!-- INCLUDE #SessionClass.getPrivileges().Syntax -->](#getprivileges)<br/><!-- INCLUDE #SessionClass.getPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)<br/><!-- INCLUDE #SessionClass.hasPrivilege().Summary -->          |
| [<!-- INCLUDE #SessionClass.id.Syntax -->](#id)<br/><!-- INCLUDE #SessionClass.id.Summary -->                                            |
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)<br/><!-- INCLUDE #SessionClass.idleTimeout.Summary -->                 |
| [<!-- INCLUDE #SessionClass.info.Syntax -->](#info)<br/><!-- INCLUDE #SessionClass.info.Summary -->                                      |
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)<br/><!-- INCLUDE #SessionClass.isGuest().Summary -->                         |
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)<br/><!-- INCLUDE #SessionClass.setPrivileges().Summary -->       |
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)<br/><!-- INCLUDE #SessionClass.storage.Summary -->                             |
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)<br/><!-- INCLUDE #SessionClass.userName.Summary -->                          |

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| 引数  | 型       |                             | 説明                  |
| --- | ------- | :-------------------------: | ------------------- |
| 戻り値 | Boolean | <- | 実行が正常に終わった場合には true |

<!-- END REF -->

#### 説明

:::note

This function does nothing and always returns **True** with remote client, stored procedure, and standalone sessions.

:::

`.clearPrivileges()` 関数は、<!-- REF #SessionClass.clearPrivileges().Summary -->対象セッションに紐づいているアクセス権をすべて削除し、実行が成功した場合に **true** を返します。<!-- END REF -->。 結果的に、当該セッションは自動的にゲストセッションになります。

#### 例題

```4d
// Webユーザーセッションを無効にします
var $isGuest : Boolean
var $isOK : Boolean

$isOK:=Session.clearPrivileges()
$isGuest:=Session.isGuest() // $isGuest は true
```

<!-- END REF -->

<!-- REF SessionClass.expirationDate.Desc -->

## .expirationDate

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### 説明

:::note

このプロパティは、Webユーザーセッションの場合にのみ使用できます。

:::

`.expirationDate` プロパティは、<!-- REF #SessionClass.expirationDate.Summary -->セッションcookie の有効期限<!-- END REF -->を返します。 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`。

このプロパティは **読み取り専用** です。 [`.idleTimeout`](#idletimeout) プロパティ値が変更された場合、有効期限は自動的に再計算されます。

#### 例題

```4d
var $expiration : Text
$expiration:=Session.expirationDate // 例: "2021-11-05T17:10:42Z"
```

<!-- END REF -->

<!-- REF SessionClass.getPrivileges().Desc -->

## .getPrivileges()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R6 | 追加 |

</details>

<!-- REF #SessionClass.getPrivileges().Syntax -->**.getPrivileges**() : Collection<!-- END REF -->

<!-- REF #SessionClass.getPrivileges().Params -->

| 引数  | 型          |                             | 説明                                        |
| --- | ---------- | :-------------------------: | ----------------------------------------- |
| 戻り値 | Collection | <- | アクセス権の名称 (文字列) のコレクション |

<!-- END REF -->

#### 説明

`.getPrivileges()` 関数は、<!-- REF #SessionClass.getPrivileges().Summary -->対象セッションに紐づいている全アクセス権の名称のコレクションを返します<!-- END REF -->。

With remote client, stored procedure and standalone sessions, this function returns a collection only containing "WebAdmin".

:::info

権限は、[`setPrivileges()`](#setprivileges) 関数によって、セッションに割り当てられます。

:::

#### 例題

以下の [`roles.json`](../ORDA/privileges.md#rolesjson-ファイル) が定義されています:

```json
{
   "privileges":[
      {
         "privilege":"simple",
         "includes":[

         ]
      },
      {
         "privilege":"medium",
         "includes":[
            "simple"
         ]
      }
   ],
   "roles":[
      {
         "role":"Medium",
         "privileges":[
            "medium"
         ]
      }
   ],
   "permissions":{
      "allowed":[

      ]
   }
}
```

セッションのロールは、DaraStore クラスの `authentify()` 関数内で割り当てられます:

```4d
  // DataStore クラス

exposed Function authentify($role : Text) : Text
	Session.clearPrivileges()
	Session.setPrivileges({roles: $role})
```

"medium" ロールを指定して `authentify()` 関数が呼び出された場合:

```4d
var $privileges : Collection
$privileges := Session.getPrivileges()
// $privileges: ["simple","medium"]
```

#### 参照

[.setPrivileges()](#setprivileges)<br/>
[ブログ記事: セッション権限を検査してデバッグを容易に](https://blog.4d.com/ja/permissions-inspect-session-privileges-for-easy-debugging)

<!-- END REF -->

<!-- REF SessionClass.hasPrivilege().Desc -->

## .hasPrivilege()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.hasPrivilege().Params -->

| 引数        | 型       |                             | 説明                                                |
| --------- | ------- | :-------------------------: | ------------------------------------------------- |
| privilege | Text    |              ->             | 確認するアクセス権の名称                                      |
| 戻り値       | Boolean | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |

<!-- END REF -->

#### 説明

`.hasPrivilege()` 関数は、<!-- REF #SessionClass.hasPrivilege().Summary -->対象セッションに *privilege* のアクセス権が紐づいていれば true、でなければ false を返します<!-- END REF -->。

With remote client, stored procedure and standalone sessions, this function always returns True, whatever the *privilege*.

#### 例題

"WebAdmin" アクセス権が Webユーザーセッションに紐づいているかを確認します:

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

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #SessionClass.id.Syntax -->**.id** : Text<!-- END REF -->

#### 説明

The `.id` property contains <!-- REF #SessionClass.id.Summary -->the unique identifier (UUID) of the user session<!-- END REF -->. With 4D Server, this unique string is automatically assigned by the server for each session and allows you to identify its processes.

:::tip

You can use this property to get the [`.storage`](#storage) object of a session thanks to the [`Session storage`](../commands/session-storage.md) command.

:::

<!-- END REF -->

<!-- REF SessionClass.idleTimeout.Desc -->

## .idleTimeout

<details><summary>履歴</summary>

| リリース | 内容 |
| ---- | -- |

|18 R6|追加|

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### 説明

:::note

このプロパティは、Webユーザーセッションの場合にのみ使用できます。

:::

`.idleTimeout` プロパティは、<!-- REF #SessionClass.idleTimeout.Summary -->対象セッションが 4D によって終了されるまでの、非アクティブタイムアウト時間 (分単位)<!-- END REF -->を格納します。

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

| リリース  | 内容 |
| ----- | -- |
| 20 R5 | 追加 |

</details>

<!-- REF #SessionClass.info.Syntax -->**.info** : Object<!-- END REF -->

#### 説明

:::note

This property is only available with remote client, stored procedure, and standalone sessions.

:::

The `.info` property <!-- REF #SessionClass.info.Summary -->describes the remote client or stored procedure session on the server, or the standalone session<!-- END REF -->.

:::note

- The `.info` object is the same object as the one returned in the "session" property by the [`Process activity`](../commands/process-activity.md) command for remote client and stored procedure sessions.
- The `.info` object is the same object as the one returned by the [`Session info`](../commands/session-info.md) command for a standalone session.

:::

`.info` オブジェクトには、次のプロパティが格納されています:

| プロパティ            | 型                                | 説明                                                                                                                                                                                    |
| ---------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text                             | Session type: "remote", "storedProcedure", "standalone"                                                                                                               |
| userName         | Text                             | 4Dユーザー名 ([`.userName`](#username) と同じ値)                                                                                                                            |
| machineName      | Text                             | リモートセッション: リモートマシンの名前。 Stored procedures session: name of the server machine. Standalone session: name of the machine |
| systemUserName   | Text                             | リモートセッション: リモートマシン上で開かれたシステムセッションの名前。                                                                                                                                 |
| IPAddress        | Text                             | リモートマシンの IPアドレス。                                                                                                                                                                      |
| hostType         | Text                             | ホストタイプ: "windows" または "mac"                                                                                                                                           |
| creationDateTime | 日付 (ISO 8601) | Date and time of session creation. Standalone session: date and time of application startup                                                           |
| state            | Text                             | セッションの状態: "active", "postponed", "sleeping"                                                                                                                           |
| ID               | Text                             | セッションUUID ([`.id`](#id) と同じ値))                                                                                                                                     |
| persistentID     | Text                             | リモートセッション: セッションの永続的な ID                                                                                                                                              |

:::note

`.info` は計算プロパティなため、そのプロパティに対して何らかの処理をおこないたい場合は、呼び出し後にローカル変数に保存することが推奨されます。

:::

<!-- END REF -->

<!-- REF SessionClass.isGuest().Desc -->

## .isGuest()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.isGuest().Params -->

| 引数  | 型       |                             | 説明                            |
| --- | ------- | :-------------------------: | ----------------------------- |
| 戻り値 | Boolean | <- | ゲストセッションの場合は true、それ以外は false |

<!-- END REF -->

#### 説明

:::note

This function always returns **False** with remote client, stored procedure, and standalone sessions.

:::

`.isGuest()` 関数は、<!-- REF #SessionClass.isGuest().Summary -->アクセス権のないゲストセッションの場合は true を返します<!-- END REF -->。

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

| リリース  | 内容               |
| ----- | ---------------- |
| 19 R8 | roles プロパティをサポート |
| 18 R6 | 追加               |

</details>

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text ) : Boolean<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object ) : Boolean<!-- END REF -->

<!-- REF #SessionClass.setPrivileges().Params -->

| 引数         | 型          |                             | 説明                                                             |
| ---------- | ---------- | :-------------------------: | -------------------------------------------------------------- |
| privilege  | Text       |              ->             | アクセス権の名称                                                       |
| privileges | Collection |              ->             | アクセス権の名称のコレクション                                                |
| settings   | Object     |              ->             | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |
| 戻り値        | Boolean    | <- | 実行が正常に終わった場合には true                                            |

<!-- END REF -->

#### 説明

:::note

This function does nothing and always returns **False** with remote client, stored procedure, and standalone sessions.

:::

`.setPrivileges()` 関数は、<!-- REF #SessionClass.setPrivileges().Summary -->引数として渡したアクセス権やロールをセッションと紐づけ、実行が成功した場合に **true** を返します<!-- END REF -->。

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | 型                   | 説明                                        |
| ---------- | ------------------- | ----------------------------------------- |
| privileges | Text または Collection | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li> |
| roles      | Text または Collection | <li>ロールの文字列</li><li>ロールの文字列のコレクション</li>   |
| userName   | Text                | (任意) セッションと紐づけるユーザー名   |

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

#### 参照

[.getPrivileges()](#getprivileges)

<!-- END REF -->

<!-- REF SessionClass.storage.Desc -->

## .storage

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### 説明

`.storage` プロパティは、<!-- REF #SessionClass.storage.Summary -->セッションのすべてのプロセスで利用可能な情報を保存しておける共有オブジェクトを格納します<!-- END REF -->。

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

> サーバーの `Storage` オブジェクトと同様に、`.storage` プロパティは常に "single" で存在します。 共有オブジェクトや共有コレクションを `.storage` に追加しても、共有グループは作成されません。

このプロパティは **読み取り専用** ですが、戻り値のオブジェクトは読み書き可能です。

:::tip

You can get the `.storage` property of a session using the [`Session storage`](../commands/session-storage.md) command.

:::

#### Webセッションの例題

クライアントの IP を `.storage` プロパティに保存します。 `On Web Authentication` データベースメソッドに以下のように書けます:

```4d
If (Session.storage.clientIP=Null) // 最初のアクセス
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if
```

#### リモートセッションの例題

同じセッションのプロセス間でデータを共有したい場合:

```4d
Use (Session.storage)
 Session.storage.settings:=New shared object("property"; $value; "property2"; $value2)
End use
```

<!-- END REF -->

<!-- REF SessionClass.userName.Desc -->

## .userName

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### 説明

`.userName` プロパティは、<!-- REF #SessionClass.userName.Summary -->セッションと紐づいたユーザー名<!-- END REF -->を格納します。 このプロパティは、コード内でユーザーを確認するのに使用できます。

- Webセッションでは、このプロパティはデフォルトで空の文字列です。 これは、[`setPrivileges()`](#setprivileges) 関数の `privileges` プロパティを使って設定することができます。
- リモートおよびストアドプロシージャーセッションでは、このプロパティは [`Current user`](../commands-legacy/current-user.md) コマンドと同じユーザー名を返します。
- With standalone sessions, this property contains "designer" or the name set with the [`SET USER ALIAS`](../commands-legacy/set-user-alias.md) command.

このプロパティは **読み取り専用** です。

<!-- END REF -->
