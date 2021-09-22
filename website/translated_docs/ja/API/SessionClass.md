---
id: SessionClass
title: Session
---

[プロジェクトにおいて、スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合、[`Session`](#session) コマンドによって Session オブジェクトが返されます。 Webクライアント (ブラウザーなど) のセッションを制御するため、4D Webサーバーは自動的に Sessionオブジェクトを作成・管理します。 このオブジェクトは、ユーザーセッションへのインターフェースを Web開発者に提供し、アクセス権の管理や、コンテキストデータの保存、プロセス間の情報共有、セッションに関連したプリエンプティブプロセスの開始などを可能にします。

セッションの実装に関する詳細については、[Webサーバーセッション](WebServer/sessions.md) の章を参照ください。

### 概要


|                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**.clearPrivileges()**](#clearprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;removes all the privileges associated to the session                                                                                                                                            |
| [**.expirationDate** : Text](#expirationdate)<p>&nbsp;&nbsp;&nbsp;&nbsp;the expiration date and time of the session cookie                                                                                                                                           |
| [**.hasPrivilege**( *privilege* : Text ) : Boolean](#hasprivilege)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns True if the privilege is associated to the session, and False otherwise                                                                                         |
| [**.idleTimeout** : Integer](#idletimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;the inactivity session timeout (in minutes), after which the session is automatically closed by 4D                                                                                              |
| [**.isGuest()** : Boolean](#isguest)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns True if the session is a Guest session (i.e. it has no privileges)                                                                                                                            |
| [**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )](#setprivileges)<p>&nbsp;&nbsp;&nbsp;&nbsp;associates the privilege(s) defined in the parameter to the session |
| [**.storage** : Object](#storage)<p>&nbsp;&nbsp;&nbsp;&nbsp;a shared object that can be used to store information available to all requests of the web client                                                                                                        |
| [**.userName** : Text](#username)<p>&nbsp;&nbsp;&nbsp;&nbsp;the user name associated to the session                                                                                                                                                                  |




## セッション

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

**Session** : 4D.Session

| 引数  | タイプ        |    | 説明             |
| --- | ---------- |:--:| -------------- |
| 戻り値 | 4D.Session | <- | Session オブジェクト |


#### 説明

The `Session` command returns the `Session` object corresponding to the current scalable user web session.

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



## .clearPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.clearPrivileges()**
| 引数 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |


#### 説明

The `.clearPrivileges()` function removes all the privileges associated to the session. 結果的に、当該セッションは自動的にゲストセッションになります。


#### 例題

```4d
// セッションを無効にします
var $isGuest : Boolean  

Session.clearPrivileges()
$isGuest:=Session.isGuest() //$isGuest は true
```




## .expirationDate

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.expirationDate** : Text
#### 説明

The `.expirationDate` property contains the expiration date and time of the session cookie. 値は ISO 8601標準に従って文字列で表現されます: `YYYY-MM-DDTHH:MM:SS.mmmZ`.

このプロパティは **読み取り専用** です。 [`.idleTimeout`](#idletimeout) プロパティ値が変更された場合、有効期限は自動的に再計算されます。

#### 例題

```4d
var $expiration : Text
$expiration:=Session.expirationDate // 例: "2021-11-05T17:10:42Z"
```





## .hasPrivilege()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |
</details>

**.hasPrivilege**( *privilege* : Text ) : Boolean
| 引数        | タイプ  |    | 説明                                                |
| --------- | ---- |:--:| ------------------------------------------------- |
| privilege | テキスト | <- | 確認するアクセス権の名称                                      |
| 戻り値       | ブール  | <- | セッションが *privilege* のアクセス権を持っていれば true、それ以外は false |


#### 説明

The `.hasPrivilege()` function returns True if the privilege is associated to the session, and False otherwise.


#### 例題

"WebAdmin" アクセス権がセッションに紐づいているかを確認します:

```4d
If (Session.hasPrivilege("WebAdmin"))
    // アクセス権が付与されているので、何もしません
Else
    // 認証ページを表示します

End if
```


## .idleTimeout

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.idleTimeout** : Integer
#### 説明

The `.idleTimeout` property contains the inactivity session timeout (in minutes), after which the session is automatically closed by 4D.

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



## .isGuest()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.isGuest()** : Boolean
| 引数  | タイプ |    | 説明                            |
| --- | --- |:--:| ----------------------------- |
| 戻り値 | ブール | <- | ゲストセッションの場合は true、それ以外は false |

#### 説明

The `.isGuest()` function returns True if the session is a Guest session (i.e. it has no privileges).


#### 例題

`On Web Connection` データベースメソッドにて:

```4d
If (Session.isGuest())
    // ゲストユーザー用の処理
End if
```




## .setPrivileges()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.setPrivileges**( *privilege* : Text )<br>**.setPrivileges**( *privileges* : Collection )<br>**.setPrivileges**( *settings* : Object )
| 引数         | タイプ    |    | 説明                                          |
| ---------- | ------ |:--:| ------------------------------------------- |
| privilege  | テキスト   | -> | アクセス権の名称                                    |
| privileges | コレクション | -> | アクセス権の名称のコレクション                             |
| settings   | オブジェクト | -> | "privileges" プロパティ (文字列またはコレクション) を持つオブジェクト |

#### 説明

The `.setPrivileges()` function associates the privilege(s) defined in the parameter to the session.

- *privilege* には、アクセス権の名称を文字列として渡します (複数の場合はカンマ区切り)。

- *privileges* には、アクセス権の名称を文字列のコレクションとして渡します。

- *settings* には、以下のプロパティを持つオブジェクトを渡します:

| プロパティ      | タイプ                 | 説明                                                 |
| ---------- | ------------------- | -------------------------------------------------- |
| privileges | Text または Collection | <li>アクセス権名の文字列</li><li>アクセス権名のコレクション</li> |
| userName   | テキスト                | (任意) セッションと紐づけるユーザー名                               |

無効なアクセス権名を含む場合、`privileges` プロパティは無視されます。

> 現在の実装では、"WebAdmin" アクセス権のみ利用可能です。

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



## .storage

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.storage** : Object
#### 説明

The `.storage` property contains a shared object that can be used to store information available to all requests of the web client.

`Session` オブジェクトの作成時には、`.storage` プロパティは空です。 共有オブジェクトのため、このプロパティはサーバー上の `Storage` オブジェクトにおいて利用可能です。

> サーバーの `Storage` オブジェクトと同様に、`.storage` プロパティは常に "単独で" 存在します。共有オブジェクトや共有コレクションを `.storage` に追加しても、共有グループは作成されません。

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






## .userName

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R6 | 追加 |

</details>

**.userName** : Text
#### 説明

The `.userName` property contains the user name associated to the session. このプロパティは、コード内でユーザーを確認するのに使用できます。

このプロパティはデフォルトでは空の文字列です。 これは、[`setPrivileges()`](#setprivileges) 関数の `privileges` プロパティを使って設定することができます。

このプロパティは **読み取り専用** です。





<style> h2 { background: #d9ebff;}</style>
