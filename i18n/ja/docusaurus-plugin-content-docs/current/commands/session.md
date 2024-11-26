---
id: session
title: Session
displayed_sidebar: docs
---

<!-- REF #_command_.Session.Syntax -->**Session** : 4D.Session<!-- END REF -->

<!--REF #_command_.Session.Params-->

| 引数  | 型                          |   | 説明             |
| --- | -------------------------- | - | -------------- |
| 戻り値 | 4D.Session | ← | Session オブジェクト |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容                               |
| ----- | -------------------------------- |
| 20 R8 | Support of standalone sessions   |
| 20 R5 | リモートクライアントとストアドプロシージャーセッションをサポート |
| 18 R6 | 追加                               |

</details>

#### 説明

`Session` コマンドは、<!-- REF #_command_.Session.Summary -->カレントのユーザーセッションに対応する `Session` オブジェクトを返します<!-- END REF -->。

コマンドを呼び出したプロセスによって、カレントユーザーセッションは次のいずれかです:

- Webセッション ([スケーラブルセッションが有効化されている](WebServer/sessions.md#セッションの有効化) 場合)
- リモートクライアントセッション
- the stored procedures session,
- the *designer* session in a standalone application.

For more information, see the [Session types](../API/SessionClass.md#session-types) paragraph.

If the command is called from a non supported context (e.g. scalable sessions disabled), it returns *Null*.

#### Webセッション

Webセッションの `Session` オブジェクトは、どの Webプロセスからも利用できます:

- `On Web Authentication`、`On Web Connection`、および `On REST Authentication` データベースメソッド
- セミダイナミックページにおいて、4Dタグ (4DTEXT, 4DHTML, 4DEVAL, 4DSCRIPT/, 4DCODE) を介して処理されるコード
- "公開オプション: 4DタグとURL(4DACTION...)" を有効化されたうえで、4DACTION/ URL から呼び出されたプロジェクトメソッド
- モバイルリクエスト用の [`On Mobile App Authentication`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication) と [`On Mobile App Action`](https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action) データベースメソッド
- [RESTリクエストで呼び出された](../REST/ClassFunctions.md) ORDA関数。

For more information on web user sessions, please refer to the [Web Server Sessions](../WebServer/sessions.md) section.

#### リモートクライアントセッション

リモートクライアントの `Session` オブジェクトは、次のいずれかから利用できます:

- [サーバー上で実行](../Project/code-overview.md#サーバー上で実行) 属性を持つプロジェクトメソッド (クライアントプロセスの "双子" プロセスで実行されます)
- トリガー
- `On Server Open Connection` および `On Server Shutdown Connection` データベースメソッド

リモートユーザーセッションの詳細については、[**リモートクライアントユーザーセッション**](../Desktop/clientServer.md#リモートユーザーセッション) の段落を参照ください。

#### ストアドプロシージャーセッション

すべてのストアドプロシージャープロセスは、同じ仮想ユーザーセッションを共有します。 ストアドプロシージャーの `Session` オブジェクトは、次のいずれかから利用できます:

- methods called with the [`Execute on server`](../commands-legacy/execute-on-server.md) command,
- `On Server Startup`、`On Server Shutdown`、`On Backup Startup`、`On Backup Shutdown`、および `On System event` データベースメソッド

ストアドプロシージャーの仮想ユーザーセッションに関する情報については、[4D Serverと4Dランゲージ](https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.ja.html) のページを参照ください。

#### Standalone session

The `Session` object is available from any process in standalone (single-user) applications so that you can write and test your client/server code using the `Session` object in your 4D development environment.

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

[Session storage](session-storage.md)\
[Session API](../API/SessionClass.md)\
[Web server user sessions](../WebServer/sessions.md)
