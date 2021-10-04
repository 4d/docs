---
id: sessionClass
title: Session
---

[プロジェクトにおいて、スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合、[`Session`](#session) コマンドによって Session オブジェクトが返されます。 Webクライアント (ブラウザーなど) のセッションを制御するため、4D Webサーバーは自動的に Sessionオブジェクトを作成・管理します。 このオブジェクトは、ユーザーセッションへのインターフェースを Web開発者に提供し、アクセス権の管理や、コンテキストデータの保存、プロセス間の情報共有、セッションに関連したプリエンプティブプロセスの開始などを可能にします。

セッションの実装に関する詳細については、[Webサーバーセッション](WebServer/sessions.md) の章を参照ください。

### 概要


|                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #sessionClass.clearPrivileges().Syntax -->](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.clearPrivileges().Summary -->|
| [<!-- INCLUDE #sessionClass.expirationDate.Syntax -->](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.expirationDate.Summary -->|
| [<!-- INCLUDE #sessionClass.hasPrivilege().Syntax -->](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.hasPrivilege().Summary -->|
| [<!-- INCLUDE #sessionClass.idleTimeout.Syntax -->](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.idleTimeout.Summary -->|
| [<!-- INCLUDE #sessionClass.isGuest().Syntax -->](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.isGuest().Summary -->|
| [<!-- INCLUDE #sessionClass.setPrivileges().Syntax -->](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.setPrivileges().Summary -->|
| [<!-- INCLUDE #sessionClass.userName.Syntax -->](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #sessionClass.userName.Summary -->|




## セッション

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #_command_.Session.Syntax -->
**Session** : 4D.Session<!-- END REF -->


<!-- REF #_command_.Session.Params -->
| 引数  | タイプ        |    | 説明             |
| --- | ---------- |:--:| -------------- |
| 戻り値 | 4D.Session | <- | Session オブジェクト |
<!-- END REF -->


#### 説明

`Session` コマンドは、 <!-- REF #_command_.Session.Summary -->カレントのスケーラブルユーザーWebセッションに対応する `Session` オブジェクトを返します<!-- END REF -->。

[スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合にのみ、このコマンドは機能します。 セッションが無効な場合や、旧式セッションが使用されている場合には、*Null* を返します。

スケーラブルセッションが有効化されている場合、`Session` オブジェクトは次のコンテキストにおける、あらゆる Webプロセスから利用可能です:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
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



<!-- REF sessionClass.clearPrivileges().Desc -->
## .clearPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.clearPrivileges().Syntax -->
**.clearPrivileges()**<!-- END REF -->

<!-- REF #sessionClass.clearPrivileges().Params -->
| 引数 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |
<!-- END REF -->


#### 説明

`.clearPrivileges()` 関数は、 <!-- REF #sessionClass.clearPrivileges().Summary -->対象セッションに紐づいているアクセス権をすべて削除します<!-- END REF -->。 結果的に、当該セッションは自動的にゲストセッションになります。


#### 例題

```4d
// セッションを無効にします
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest は true
```

<!-- END REF -->



<!-- REF sessionClass.expirationDate.Desc -->
## .expirationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.expirationDate.Syntax -->
**.expirationDate** : Text<!-- END REF -->

#### 説明

`.expirationDate` プロパティは、 <!-- REF #sessionClass.expirationDate.Summary -->セッションcookie の有効期限<!-- END REF -->を返します。 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

このプロパティは **読み取り専用** です。 [`.idleTimeout`](#idletimeout) プロパティ値が変更された場合、有効期限は自動的に再計算されます。

#### 例題

```4d
var $expiration : Text
$expiration:=Session.expirationDate // 例: "2021-11-05T17:10:42Z"
```

<!-- END REF -->




<!-- REF sessionClass.hasPrivilege().Desc -->
## .hasPrivilege()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

<!-- REF #sessionClass.hasPrivilege().Syntax -->
**.hasPrivilege**( *privilege* : Text ) : Boolean<!-- END REF -->

<!-- REF #sessionClass.hasPrivilege().Params -->
| 引数        | タイプ  |    | 説明                                                |
| --------- | ---- |:--:| ------------------------------------------------- |
| privilege | テキスト | <- | 確認するアクセス権の名称                                      |
| 戻り値       | ブール  | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |
<!-- END REF -->


#### 説明

`.hasPrivilege()` 関数は、 <!-- REF #sessionClass.hasPrivilege().Summary -->対象セッションに *privilege* のアクセス権が紐づいていれば true、でなければ false を返します<!-- END REF -->。


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

<!-- REF sessionClass.idleTimeout.Desc -->
## .idleTimeout

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.idleTimeout.Syntax -->
**.idleTimeout** : Integer<!-- END REF -->

#### 説明

`.idleTimeout` プロパティは、 <!-- REF #sessionClass.idleTimeout.Summary -->対象セッションが 4D によって終了されるまでの、非アクティブタイムアウト時間 (分単位)<!-- END REF -->を格納します。

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


<!-- REF sessionClass.isGuest().Desc -->
## .isGuest()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.isGuest().Syntax -->
**.isGuest()** : Boolean<!-- END REF -->

<!-- REF #sessionClass.isGuest().Params -->
| 引数  | タイプ |    | 説明                            |
| --- | --- |:--:| ----------------------------- |
| 戻り値 | ブール | <- | ゲストセッションの場合は true、それ以外は false |
<!-- END REF -->

#### 説明

`.isGuest()` 関数は、 <!-- REF #sessionClass.isGuest().Summary -->アクセス権のないゲストセッションの場合は true を返します<!-- END REF -->。


#### 例題

`On Web Connection` データベースメソッドにて:

```4d
If (Session.isGuest())
    // ゲストユーザー用の処理
End if
```


<!-- END REF -->


<!-- REF sessionClass.setPrivileges().Desc -->
## .setPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.setPrivileges().Syntax -->
**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )<!-- END REF -->

<!-- REF #sessionClass.setPrivileges().Params -->
| 引数         | タイプ    |    | 説明                                          |
| ---------- | ------ |:--:| ------------------------------------------- |
| privilege  | テキスト   | -> | アクセス権の名称                                    |
| privileges | コレクション | -> | アクセス権の名称のコレクション                             |
| settings   | オブジェクト | -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |
<!-- END REF -->

#### 説明

`.setPrivileges()` 関数は、 <!-- REF #sessionClass.setPrivileges().Summary -->引数として渡したアクセス権をセッションと紐づけます<!-- END REF -->。

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | タイプ                 | 説明                                                 |
| ---------- | ------------------- | -------------------------------------------------- |
| privileges | Text または Collection | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li> |
| userName   | テキスト                | (任意) セッションと紐づけるユーザー名                               |

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

<!-- REF sessionClass.storage.Desc -->
## .storage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.storage.Syntax -->
**.storage** : Object<!-- END REF -->

#### 説明

`.storage` プロパティは、 <!-- REF #sessionClass.storage.Summary -->Webクライアントのリクエストに対応するために情報を保存しておける共有オブジェクト<!-- END REF -->を格納します。

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

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





<!-- REF sessionClass.userName.Desc -->
## .userName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

<!-- REF #sessionClass.userName.Syntax -->
**.userName** : Text<!-- END REF -->

#### 説明

`.userName` プロパティは、 <!-- REF #sessionClass.userName.Summary -->セッションと紐づいたユーザー名<!-- END REF -->を格納します。 このプロパティは、コード内でユーザーを確認するのに使用できます。

このプロパティはデフォルトでは空の文字列です。 これは、[`setPrivileges()`](#setprivileges) 関数の `privileges` プロパティを使って設定することができます。

このプロパティは **読み取り専用** です。 



<!-- END REF -->


<style> h2 { background: #d9ebff;}</style>
