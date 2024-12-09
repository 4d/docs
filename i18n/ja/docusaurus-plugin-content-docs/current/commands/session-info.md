---
id: session-info
title: Session info
displayed_sidebar: docs
---

<!-- REF #_command_.Session info.Syntax -->**Session info** ( *sessionId* : Integer ) : Object<!-- END REF -->

<!-- REF #_command_.Session info.Params -->

| 引数        | 型       |     | 説明                            |
| --------- | ------- | :-: | ----------------------------- |
| sessionID | Integer |  →  | セッションID                       |
| 戻り値       | Object  |  ←  | Information about the session |

<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容                             |
| ----- | ------------------------------ |
| 20 R8 | Support of standalone sessions |
| 20 R7 | 追加                             |

</details>

#### 説明

The `Session info` command <!-- REF #_command_.Session info.Summary -->returns an object describing the session whose ID you pass in the *sessionID* parameter.<!-- END REF -->. If you pass an invalid *sessionID*, the command returns a null object.

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ            | 型                                | 説明                                                                                                                                                                                    |
| ---------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type             | Text                             | Session type: "remote", "storedProcedure", "standalone"                                                                                                               |
| userName         | Text                             | 4D user name (same value as [`Session.userName`](../API/SessionClass.md#username))                                                                                 |
| machineName      | Text                             | リモートセッション: リモートマシンの名前。 Stored procedures session: name of the server machine. Standalone session: name of the machine |
| systemUserName   | Text                             | リモートセッション: リモートマシン上で開かれたシステムセッションの名前。                                                                                                                                 |
| IPAddress        | Text                             | リモートマシンの IPアドレス。                                                                                                                                                                      |
| hostType         | Text                             | ホストタイプ: "windows" または "mac"                                                                                                                                           |
| creationDateTime | 日付 (ISO 8601) | Date and time of session creation. Standalone session: date and time of application startup                                                           |
| state            | Text                             | セッションの状態: "active", "postponed", "sleeping"                                                                                                                           |
| ID               | Text                             | Session UUID (same value as [`Session.id`](../API/SessionClass.md#id))                                                                                             |
| persistentID     | Text                             | リモートセッション: セッションの永続的な ID                                                                                                                                              |

:::note

This command returns the [`.info`](../API/SessionClass.md#info) property of the *sessionID* session. To get information about the current session, you can directly call `Session.info`.

:::

Here is an example of output object:

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
