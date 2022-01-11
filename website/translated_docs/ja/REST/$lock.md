---
id: lock
title: '$lock'
---


Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).


## シンタックス

To lock an entity for other sessions and 4D processes:

```
/?$lock=true
```


To unlock the entity for other sessions and 4D processes:

```
/?$lock=false
```


The [`lockKindText` property](../API/EntityClass.html#lock) is "Locked by session".


### 説明

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level.

A locked entity is seen as *locked* (i.e. lock / unlock / update / delete actions are not possible) by:

- other REST sessions
- 4D processes (client/server, remote datastore, standalone) running on the REST server.

An entity locked by the REST API can only be unlocked:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### レスポンス

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed.

The returned "__STATUS" object has the following properties:

| プロパティ        |                | タイプ     | 説明                                                                                                                                                          |
| ------------ | -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                |         | ***Available only in case of success:***                                                                                                                    |
| success      |                | boolean | true if the lock action is successful (or if the entity is already locked in the current session), false otherwise (not returned in this case).             |
|              |                |         | ***エラーの場合にのみ利用可能:***                                                                                                                                        |
| status       |                | number  | エラーコード、以下参照                                                                                                                                                 |
| statusText   |                | テキスト    | エラーの詳細、以下参照                                                                                                                                                 |
| lockKind     |                | number  | Lock code                                                                                                                                                   |
| lockKindText |                | テキスト    | "Locked by session" if locked by a REST session, "Locked by record" if locked by a 4D process                                                               |
| lockInfo     |                | object  | ロック元についての情報。 Returned properties depend on the lock origin (4D process or REST session).                                                                    |
|              |                |         | ***Available only for a 4D process lock:***                                                                                                                 |
|              | task_id        | number  | プロセスID                                                                                                                                                      |
|              | user_name      | テキスト    | マシン上でのセッションユーザー名                                                                                                                                            |
|              | user4d_alias   | テキスト    | 4D ユーザーの名前またはエイリアス                                                                                                                                          |
|              | user4d_id      | number  | 4DデータベースディレクトリでのユーザーID                                                                                                                                      |
|              | host_name      | テキスト    | マシン名                                                                                                                                                        |
|              | task_name      | テキスト    | プロセス名                                                                                                                                                       |
|              | client_version | テキスト    | Version of the client                                                                                                                                       |
|              |                |         | ***Available only for a REST session lock:***                                                                                                               |
|              | host           | テキスト    | URL that locked the entity (e.g. "127.0.0.1:8043")                                                                                                          |
|              | IPAddr         | テキスト    | IP address of the locker (e.g. "127.0.0.1")                                                                                                                 |
|              | recordNumber   | number  | Record number of the locked record                                                                                                                          |
|              | userAgent      | テキスト    | userAgent of the locker (e.g. Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |


エラー時には *__STATUS* オブジェクトの *status* および *statusText* プロパティに以下のいずれかの値が返されます:

| status | statusText                      | 説明                                                              |
| ------ | ------------------------------- | --------------------------------------------------------------- |
| 2      | "Stamp has changed"             | エンティティの内部的なスタンプ値がデータ内に保存されているエンティティのものと合致しません (オプティミスティック・ロック)。 |
| 3      | "Already locked"                | エンティティはペシミスティック・ロックでロックされています。                                  |
| 4      | "Other error"                   | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。                |
| 5      | "Entity does not exist anymore" | エンティティはもうデータ内に存在していません。                                         |




## 例題


We lock an entity in a first browser:

```
GET /rest/Customers(1)/?$lock=true
```

**レスポンス:**

```
{
    "result": true,
    "__STATUS": {
        "success": true
    }
}
```

In a second browser (other session), we send the same request.

**レスポンス:**

```
{
    "result":false,
    "__STATUS":{
        "status":3,
        "statusText":"Already Locked",
        "lockKind":7,
        "lockKindText":"Locked By Session",
        "lockInfo":{
            "host":"127.0.0.1:8043",
            "IPAddr":"127.0.0.1",
            "recordNumber": 7,
            "userAgent": ""Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36..."
        }
    }
}
```

