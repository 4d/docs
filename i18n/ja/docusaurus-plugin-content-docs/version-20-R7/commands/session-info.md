---
id: session-info
title: Session info
displayed_sidebar: docs
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 20 R7 | 追加 |

</details>

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| 引数        | 型       |     | 説明          |
| --------- | ------- | :-: | ----------- |
| sessionID | Integer |  →  | セッションID     |
| 戻り値       | Object  |  ←  | セッションに関する情報 |

<!-- END REF -->

#### 説明

`Session info` コマンドは、<!-- REF #_command_.Session info.Summary -->*sessionID* 引数に渡したID を持つセッションの詳細を記述したオブジェクトを返します<!-- END REF -->。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。 *sessionID* 引数に無効なID を渡した場合、コマンドはnull オブジェクトを返します。

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ名           | 型                                       | 説明                                                                                                 |
| ---------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------- |
| type             | Text (enum)          | Session type. Possible values: "remote", "storedProcedure", "rest" |
| userName         | Text                                    | ユーザー名                                                                                              |
| machineName      | Text                                    | Name of the remote machine                                                                         |
| systemUserName   | Text                                    | Name of the system session opened on the remote machine                                            |
| IPAddress        | Text                                    | リモートマシンの IPアドレス。                                                                                   |
| hostType         | Text (enum)          | Host type. Possible values: "windows", "mac", "browser"            |
| creationDateTime | Text (Date ISO 8601) | Date and time of connection of the remote machine                                                  |
| state            | Text (enum)          | Session state. Possible values: "active", "postponed", "sleeping"  |
| ID               | Text                                    | セッションUUID                                                                                          |
| persistentID     | Text                                    | セッションの永続的な ID                                                                                      |

:::note

コマンドは*sessionID* 引数にID を渡したセッションの[`.info`](../API/SessionClass.md#info) プロパティを返します。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。 カレントのセッションに関する情報を取得する場合、`Session.info` を直接呼び出すことができます。

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

[Session](../API/SessionClass.md)
[Process info](process-info.md)
