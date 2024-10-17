---
id: SessionClass
title: Session
---

[プロジェクトにおいて、スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合、[`Session`](#session) コマンドによって Session オブジェクトが返されます。 Webクライアント (ブラウザーなど) のセッションを制御するため、4D Webサーバーは自動的に Sessionオブジェクトを作成・管理します。 このオブジェクトは、ユーザーセッションへのインターフェースを Web開発者に対して提供し、アクセス権の管理や、コンテキストデータの保存、プロセス間の情報共有、セッションに関連したプリエンプティブプロセスの開始などを可能にします。

セッションの実装に関する詳細については、[Webサーバーセッション](WebServer/sessions.md) の章を参照ください。

### 概要


|                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SessionClass.clearPrivileges().Syntax -->](#clearprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.expirationDate.Syntax -->](#expirationdate)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #SessionClass.hasPrivilege().Syntax -->](#hasprivilege)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #SessionClass.idleTimeout.Syntax -->](#idletimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #SessionClass.isGuest().Syntax -->](#isguest)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #SessionClass.setPrivileges().Syntax -->](#setprivileges)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #SessionClass.storage.Syntax -->](#storage)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.storage.Summary -->|
| [<!-- INCLUDE #SessionClass.userName.Syntax -->](#username)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SessionClass.userName.Summary -->|




## Session

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| 引数  | 型          |    | 説明                                        |
| --- | ---------- |:--:| ----------------------------------------- |
| 戻り値 | 4D.Session | <- | Session オブジェクト|<!-- END REF -->


|


#### 説明

`Session` コマンドは、 <!-- REF #_command_.Session.Summary -->カレントのスケーラブルユーザーWebセッションに対応する `Session` オブジェクトを返します<!-- END REF -->.

[スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合にのみ、このコマンドは機能します。 セッションが無効な場合や、旧式セッションが使用されている場合には、*Null* を返します。

スケーラブルセッションが有効化されている場合、`Session` オブジェクトは次のコンテキストにおける、あらゆる Webプロセスから利用可能です:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
- モバイルリクエスト用の [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) データベースメソッド
- RESTリクエストで呼び出された ORDA [データモデルクラス関数](ORDA/ordaClasses.md)
- セミダイナミックページにおいて、4Dタグ (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) を介して処理されるコード
- "公開オプション: 4DタグとURL(4DACTION...)" を有効化されたうえで、4DACTION/ URL から呼び出されたプロジェクトメソッド


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



<!-- REF SessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.clearPrivileges().Syntax -->**.clearPrivileges()**<!-- END REF -->


<!-- REF #SessionClass.clearPrivileges().Params -->
| 引数 | 型 |  | 説明                                           |
| -- | - |::| -------------------------------------------- |
|    |   |  | このコマンドは引数を必要としません|<!-- END REF -->


|


#### 説明

`.clearPrivileges()` 関数は、 <!-- REF #SessionClass.clearPrivileges().Summary -->対象セッションに紐づいているアクセス権をすべて削除します<!-- END REF -->. 結果的に、当該セッションは自動的にゲストセッションになります。


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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.expirationDate.Syntax -->**.expirationDate** : Text<!-- END REF -->

#### 説明

`.expirationDate` プロパティは、 <!-- REF #SessionClass.expirationDate.Summary -->セッションcookie の有効期限を返します<!-- END REF -->. 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`。

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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.hasPrivilege().Syntax -->**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->


<!-- REF #SessionClass.hasPrivilege().Params -->
| 引数        | 型       |    | 説明                                                                           |
| --------- | ------- |:--:| ---------------------------------------------------------------------------- |
| privilege | Text    | <- | 確認するアクセス権の名称                                                                 |
| 戻り値       | Boolean | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false|<!-- END REF -->


|


#### 説明

`.hasPrivilege()` 関数は、 <!-- REF #SessionClass.hasPrivilege().Summary -->対象セッションに privilege のアクセス権が紐づいていれば true、でなければ false を返します<!-- END REF -->.


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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.idleTimeout.Syntax -->**.idleTimeout** : Integer<!-- END REF -->

#### 説明

`.idleTimeout` プロパティは、 <!-- REF #SessionClass.idleTimeout.Summary -->対象セッションが 4D によって終了されるまでの、非アクティブタイムアウト時間 (分単位) を格納します<!-- END REF -->.

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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.isGuest().Syntax -->**.isGuest()** : Boolean<!-- END REF -->


<!-- REF #SessionClass.isGuest().Params -->
| 引数  | 型       |    | 説明                                                       |
| --- | ------- |:--:| -------------------------------------------------------- |
| 戻り値 | Boolean | <- | ゲストセッションの場合は true、それ以外は false|<!-- END REF -->

|

#### 説明

`.isGuest()` 関数は、 <!-- REF #SessionClass.isGuest().Summary -->アクセス権のないゲストセッションの場合は true を返します<!-- END REF -->.


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

<!-- REF #SessionClass.setPrivileges().Syntax -->**.setPrivileges**( *privilege* : Text )<br/>**.setPrivileges**( *privileges* : Collection )<br/>**.setPrivileges**( *settings* : Object )<!-- END REF -->


<!-- REF #SessionClass.setPrivileges().Params -->
| 引数         | 型          |    | 説明                                                                     |
| ---------- | ---------- |:--:| ---------------------------------------------------------------------- |
| privilege  | Text       | -> | アクセス権の名称                                                               |
| privileges | Collection | -> | アクセス権の名称のコレクション                                                        |
| settings   | Object     | -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト|<!-- END REF -->

|

#### 説明

`.setPrivileges()` 関数は、 <!-- REF #SessionClass.setPrivileges().Summary -->引数として渡したアクセス権やロールをセッションと紐づけます<!-- END REF -->.

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | 型                   | 説明                                                  |
| ---------- | ------------------- | --------------------------------------------------- |
| privileges | Text または Collection | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li>  |
| roles      | Text または Collection | <li>ロールの文字列</li><li>ロールの文字列のコレクション</li> |
| userName   | Text                | (任意) セッションと紐づけるユーザー名                                |

:::info

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

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.storage.Syntax -->**.storage** : Object<!-- END REF -->

#### 説明

`.storage` プロパティは、 <!-- REF #SessionClass.storage.Summary -->Webクライアントのリクエストに対応するために情報を保存しておける共有オブジェクトを格納します<!-- END REF -->.

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

> サーバーの `Storage` オブジェクトと同様に、`.storage` プロパティは常に "single" で存在します。 共有オブジェクトや共有コレクションを `.storage` に追加しても、共有グループは作成されません。

このプロパティは **読み取り専用** ですが、戻り値のオブジェクトは読み書き可能です。

#### 例題

クライアントの IP を `.storage` プロパティに保存します。 `On Web Authentication` データベースメソッドに以下のように書けます:

```4d
If (Session.storage.clientIP=Null) // 最初のアクセス
    Use (Session.storage)
        Session.storage.clientIP:=New shared object("value"; $clientIP)
    End use 
End if

```

<!-- END REF -->





<!-- REF SessionClass.userName.Desc -->
## .userName

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R6 | 追加 |

</details>

<!-- REF #SessionClass.userName.Syntax -->**.userName** : Text<!-- END REF -->

#### 説明

`.userName` プロパティは、 <!-- REF #SessionClass.userName.Summary -->セッションと紐づいたユーザー名を格納します<!-- END REF -->. このプロパティは、コード内でユーザーを確認するのに使用できます。

このプロパティはデフォルトでは空の文字列です。 これは、[`setPrivileges()`](#setprivileges) 関数の `privileges` プロパティを使って設定することができます。

このプロパティは **読み取り専用** です。



<!-- END REF -->
