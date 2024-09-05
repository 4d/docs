---
id: SessionClass
title: Session
---

Session オブジェクトは [`Session`](#session) コマンドによって返されます。 このオブジェクトは、カレントユーザーセッションを管理するためのインターフェースをデベロッパーに対して提供し、コンテキストデータの保存、プロセス間の情報共有、セッションに関連したプリエンプティブプロセスの開始などのアクションの実行や、[アクセス権](../ORDA/privileges.md) の管理を可能にします。

### セッションの種類

このクラスは 3種類のセッションをサポートしています:

- [**Webユーザーセッション**](WebServer/sessions.md): [プロジェクトにおいてスケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合、Webユーザーセッションが利用可能です。 これらは Web および REST 接続に使用され、権限を割り当てることができます。
- [**リモートクライアントユーザー セッション**](../Desktop/clientServer.md#リモートユーザーセッション): クライアント/サーバーアプリケーションでは、リモートユーザーは、サーバー上で管理される独自のセッションを持ちます。
- [**ストアドプロシージャーセッション**](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.ja.html): サーバ上で実行されるすべてのストアドプロシージャーは、同じ仮想ユーザーセッションを共有します。

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

## Session

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!-- REF #_command_.Session.Params -->

| 引数  | 型                          |     | 説明             |
| --- | -------------------------- | :-: | -------------- |
| 戻り値 | 4D.Session |  <- | Session オブジェクト |

<!-- END REF -->

#### 説明

`Session` コマンドは、<!-- REF #_command_.Session.Summary -->カレントのユーザーセッションに対応する `Session` オブジェクトを返します<!-- END REF -->。

コマンドを呼び出したプロセスによって、カレントユーザーセッションは次のいずれかです:

- Webセッション ([スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合)
- リモートクライアントセッション
- ストアドプロシージャーセッション

詳細については、[セッションの種類](#セッションの種類) の段落を参照ください。

サポートされていないコンテキスト (シングルユーザーアプリケーション、スケーラブルセッションが無効...) から呼び出されると、コマンドは *Null* を返します。

#### Webセッション

Webセッションの `Session` オブジェクトは、どの Webプロセスからも利用できます:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
- セミダイナミックページにおいて、4Dタグ (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) を介して処理されるコード
- "公開オプション: 4DタグとURL(4DACTION...)" を有効化されたうえで、4DACTION/ URL から呼び出されたプロジェクトメソッド
- モバイルリクエスト用の [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) データベースメソッド
- [RESTリクエストで呼び出された](../REST/ClassFunctions.md) ORDA関数。

Webユーザーセッションの詳細については、[Webサーバーセッション](WebServer/sessions.md) の章を参照ください。

#### リモートクライアントセッション

リモートクライアントの `Session` オブジェクトは、次のいずれかから利用できます:

- [サーバー上で実行](../Project/code-overview.md#サーバー上で実行) 属性を持つプロジェクトメソッド (クライアントプロセスの "双子" プロセスで実行されます)
- トリガー
- `On Server Open Connection` および `On Server Shutdown Connection` データベースメソッド

リモートユーザーセッションの詳細については、[**リモートクライアントユーザーセッション**](../Desktop/clientServer.md#リモートユーザーセッション) の段落を参照ください。

#### ストアドプロシージャーセッション

すべてのストアドプロシージャープロセスは、同じ仮想ユーザーセッションを共有します。 ストアドプロシージャーの `Session` オブジェクトは、次のいずれかから利用できます:

- [`Execute on server`](https://doc.4d.com/4dv20/help/command/ja/page373.html) コマンドで呼び出されるメソッド
- `On Server Startup`、`On Server Shutdown`、`On Backup Startup`、`On Backup Shutdown`、および `On System event` データベースメソッド

ストアドプロシージャーの仮想ユーザーセッションに関する情報については、[4D Serverと4Dランゲージ](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.ja.html) のページを参照ください。

#### 例題

"公開オプション: 4DタグとURL(4DACTION...)" を有効にした `action_Session` メソッドを定義しました。 ブラウザーに次の URL を入力してメソッドを呼び出します:

```
IP:port/4DACTION/action_Session
```

```4d
  //action_Session メソッド
 Case of
    :(Session#Null)
       If(Session.hasPrivilege("WebAdmin")) // hasPrivilege 関数を呼び出します
          WEB SEND TEXT("4DACTION --> セッションは WebAdmin です")
       Else
          WEB SEND TEXT("4DACTION --> セッションは WebAdmin ではありません")
       End if
    Else
       WEB SEND TEXT("4DACTION --> セッションは null です")
 End case
```

### 参照

[`Session storage by ID`](https://doc.4d.com/4dv20R6/help/command/ja/page1839.html)

<!-- REF SessionClass.clearPrivileges().Desc -->

## .clearPrivileges()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()** : Boolean<!-- END REF -->

<!-- REF #SessionClass.clearPrivileges().Params -->

| 引数  | 型   |     | 説明                  |
| --- | --- | :-: | ------------------- |
| 戻り値 | ブール |  <- | 実行が正常に終わった場合には true |

<!-- END REF -->

#### 説明

:::note

この関数は、リモートクライアントとストアドプロシージャーのセッションでは何もせず、常に **false** を返します。

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

| 引数  | 型      |     | 説明                                        |
| --- | ------ | :-: | ----------------------------------------- |
| 戻り値 | コレクション |  <- | アクセス権の名称 (文字列) のコレクション |

<!-- END REF -->

#### 説明

`.getPrivileges()` 関数は、<!-- REF #SessionClass.getPrivileges().Summary -->対象セッションに紐づいている全アクセス権の名称のコレクションを返します<!-- END REF -->。

リモートクライアントおよびストアドプロシージャーセッションでは、この関数は "WebAdmin" のみを含むコレクションを返します。

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

| 引数        | 型    |     | 説明                                                |
| --------- | ---- | :-: | ------------------------------------------------- |
| privilege | テキスト |  -> | 確認するアクセス権の名称                                      |
| 戻り値       | ブール  |  <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |

<!-- END REF -->

#### 説明

`.hasPrivilege()` 関数は、<!-- REF #SessionClass.hasPrivilege().Summary -->対象セッションに *privilege* のアクセス権が紐づいていれば true、でなければ false を返します<!-- END REF -->。

リモートクライアントとストアドプロシージャーセッションでは、この関数は *privilege* に関係なく、常に True を返します。

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

`.id` プロパティは、<!-- REF #SessionClass.id.Summary -->サーバー上のセッションの一意な識別子 (UUID) を格納します<!-- END REF -->。 この一意の文字列は、サーバーによって各セッションに対して自動的に割り当てられ、そのプロセスを識別することを可能にします。

:::tip

[`Session storage by ID`](https://doc.4d.com/4dv20R6/help/command/ja/page1839.html) コマンドにこのプロパティを渡すことで、セッションの `.storage` オブジェクトを取得できます。

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

このプロパティは、リモートクライアントおよびストアドプロシージャーセッションの場合にのみ使用できます。

:::

`.info` プロパティは、<!-- REF #SessionClass.info.Summary -->サーバー上のリモートクライアントまたはストアドプロシージャーセッションの情報を格納します<!-- END REF -->。

`.info` オブジェクトは、リモートクライアントおよびストアドプロシージャーセッションに対して [`Get process activity`](https://doc.4d.com/4dv20/help/command/ja/page1495.html) コマンドによって返されるオブジェクトと同じです。

`.info` オブジェクトには、次のプロパティが格納されています:

| プロパティ            | 型                                | 説明                                                                                  |
| ---------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| type             | テキスト                             | セッションタイプ: "remote" または "storedProcedure"                            |
| userName         | テキスト                             | 4Dユーザー名 ([`.userName`](#username) と同じ値)                          |
| machineName      | テキスト                             | リモートセッション: リモートマシンの名前。 ストアドプロシージャーセッション: サーバーマシンの名前 |
| systemUserName   | テキスト                             | リモートセッション: リモートマシン上で開かれたシステムセッションの名前。                               |
| IPAddress        | テキスト                             | リモートマシンの IPアドレス。                                                                    |
| hostType         | テキスト                             | ホストタイプ: "windows" または "mac"                                         |
| creationDateTime | 日付 (ISO 8601) | セッション作成の日時                                                                          |
| state            | テキスト                             | セッションの状態: "active", "postponed", "sleeping"                         |
| ID               | テキスト                             | セッションUUID ([`.id`](#id) と同じ値))                                   |
| persistentID     | テキスト                             | セッションの永続的な ID                                                                       |

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

| 引数  | 型   |     | 説明                            |
| --- | --- | :-: | ----------------------------- |
| 戻り値 | ブール |  <- | ゲストセッションの場合は true、それ以外は false |

<!-- END REF -->

#### 説明

:::note

この関数は、リモートクライアントとストアドプロシージャーのセッションでは常に **false** を返します。

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

| 引数         | 型      |     | 説明                                                             |
| ---------- | ------ | :-: | -------------------------------------------------------------- |
| privilege  | テキスト   |  -> | アクセス権の名称                                                       |
| privileges | コレクション |  -> | アクセス権の名称のコレクション                                                |
| settings   | オブジェクト |  -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |
| 戻り値        | ブール    |  <- | 実行が正常に終わった場合には true                                            |

<!-- END REF -->

#### 説明

:::note

この関数は、リモートクライアントとストアドプロシージャーのセッションでは何もせず、常に **false** を返します。

:::

`.setPrivileges()` 関数は、<!-- REF #SessionClass.setPrivileges().Summary -->引数として渡したアクセス権やロールをセッションと紐づけ、実行が成功した場合に **true** を返します<!-- END REF -->。

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | 型                   | 説明                                        |
| ---------- | ------------------- | ----------------------------------------- |
| privileges | Text または Collection | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li> |
| roles      | Text または Collection | <li>ロールの文字列</li><li>ロールの文字列のコレクション</li>   |
| userName   | テキスト                | (任意) セッションと紐づけるユーザー名   |

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

セッションの `.storage` プロパティは [`Session storage by ID`](https://doc.4d.com/4dv20R6/help/command/ja/page1839.html) コマンドで取得できます。

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
- リモートおよびストアドプロシージャーセッションでは、このプロパティは [`Current user`](https://doc.4d.com/4dv20/help/command/ja/page182.html) コマンドと同じユーザー名を返します。

このプロパティは **読み取り専用** です。

<!-- END REF -->
