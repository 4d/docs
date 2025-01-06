---
id: session-info
title: Session info
displayed_sidebar: docs
---

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| 引数        | 型       |     | 説明          |
| --------- | ------- | :-: | ----------- |
| sessionID | Integer |  →  | セッションID     |
| 戻り値       | Object  |  ←  | セッションに関する情報 |

<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容                |
| ----- | ----------------- |
| 20 R8 | スタンドアロンセッションのサポート |
| 20 R7 | 追加                |

</details>

#### 説明

`Session info` コマンドは、<!-- REF #_command_.Session info.Summary -->*sessionID* 引数に渡したID を持つセッションの詳細を記述したオブジェクトを返します<!-- END REF -->。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ            | 型                                | 説明                                                                                                                              |
| ---------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text                             | セッションのタイプ: "remote"、"storedProcedure"、"standalone"                                                              |
| userName         | Text                             | 4D ユーザー名([`Session.userName`](../API/SessionClass.md#username)と同じ値)                                          |
| machineName      | Text                             | リモートセッションの場合: リモートマシンの名前。 ストアドプロシージャセッションの場合: サーバーマシンの名前。 スタンドアロンセッションの場合: マシン名 |
| systemUserName   | Text                             | リモートセッション: リモートマシン上で開かれたシステムセッションの名前。                                                                           |
| IPAddress        | Text                             | リモートマシンの IPアドレス。                                                                                                                |
| hostType         | Text                             | ホストタイプ: "windows" または "mac"                                                                                     |
| creationDateTime | 日付 (ISO 8601) | セッション作成の日付と時間。 スタンドアロンセッションの場合: アプリケーション起動の日付と時間                                                                |
| state            | Text                             | セッションの状態: "active", "postponed", "sleeping"                                                                     |
| ID               | Text                             | セッションUUID ([`Session.id`](../API/SessionClass.md#id) と同じ値)                                                   |
| persistentID     | Text                             | リモートセッション: セッションの永続的な ID                                                                                        |

:::note

コマンドは*sessionID* 引数にID を渡したセッションの[`.info`](../API/SessionClass.md#info) プロパティを返します。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。

:::

これが出力されたオブジェクトの一例です:

```json

{
    "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",
    "userName": "Designer",
    "machineName": "My Computer",
    "systemUserName": "John Doe",
    "IPAddress": "localhost",
    "hostType": "mac",
    "type": "remote",
    "state": "active",
    "creationDateTime: "2024-09-10T09:55:54.787Z",
    "persistentID:"8FFDAE519F1F4DCDB81E8E8DB00AD101"
}

```

#### 例題

```4d

 var $session : Object
 var $id : Integer
 $session:=Session info($id)

```

#### 参照

[`Session` class](../API/SessionClass.md)
[Session](session.md)
[Session storage](session-storage.md)\
[Process info](process-info.md)
