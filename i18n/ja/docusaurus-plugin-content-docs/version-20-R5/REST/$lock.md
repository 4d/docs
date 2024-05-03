---
id: lock
title: $lock
---

Locks and unlocks an entity using the [pessimistic mechanism](../ORDA/entities.md#pessimistic-lock).

## シンタックス

他のセッションや 4Dプロセスに対し、特定のエンティティをロックするには:

```
/?$lock=true
```

他のセッションや 4Dプロセスに対し、特定のエンティティをアンロックするには:

```
/?$lock=false
```

The [`lockKindText` property](../API/EntityClass.md#lock) is "Locked by session".

### 説明

The locks triggered by the REST API are put at the [session](authUsers.md#opening-sessions) level.

A locked entity is seen as _locked_ (i.e. lock / unlock / update / delete actions are not possible) by:

- 他の REST セッション
- RESTサーバー上で実行されている 4D プロセス (クライアント/サーバー, リモートデータストア, スタンドアロン)。

REST API によってロックされたエンティティは、次の場合にのみアンロックされます:

- by its locker, i.e. a `/?$lock=false` in the REST session that sets `/?$lock=true`
- or if the session's [inactivity timeout]($directory.md) is reached (the session is closed).

### レスポンス

A `?$lock` request returns a JSON object with `"result"=true` if the lock operation was successful and `"result"=false` if it failed.

戻り値の "__STATUS" オブジェクトには、以下のプロパティが格納されています:

| プロパティ        |                                     | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                                                 |
| ------------ | ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|              |                                     |         | _**成功の場合にのみ利用可能:**_                                                                                                                                                                                                                                                                                                                                |
| success      |                                     | boolean | ロックに成功した場合 (あるいはエンティティがすでにカレントセッションでロックされていた場合) には true、それ以外は false (この場合は返されません)。                                                                                                                                                                                                                                           |
|              |                                     |         | _**エラーの場合にのみ利用可能:**_                                                                                                                                                                                                                                                                                                                               |
| status       |                                     | number  | エラーコード、以下参照                                                                                                                                                                                                                                                                                                                                                        |
| statusText   |                                     | text    | エラーの詳細、以下参照                                                                                                                                                                                                                                                                                                                                                        |
| lockKind     |                                     | number  | ロックコード                                                                                                                                                                                                                                                                                                                                                             |
| lockKindText |                                     | text    | "Locked by session" RESTセッションによるロック、"Locked by record" 4Dプロセスによるロック                                                                                                                                                                                                                                                                                                |
| lockInfo     |                                     | object  | ロック元についての情報。 返されるプロパティはロック元 (4Dプロセスまたは RESTセッション) によって異なります。                                                                                                                                                                                                                                                                                    |
|              |                                     |         | _**4Dプロセスによるロックの場合:**_                                                                                                                                                                                                                                                                                                                             |
|              | task_id        | number  | ```
プロセスID
```                                                                                                                                                                                                                                                                                                                                                     |
|              | user_name      | text    | マシン上でのセッションユーザー名                                                                                                                                                                                                                                                                                                                                                   |
|              | user4d_alias   | text    | 4D ユーザーの名前またはエイリアス                                                                                                                                                                                                                                                                                                                                                 |
|              | user4d_id      | number  | 4DデータベースディレクトリでのユーザーID                                                                                                                                                                                                                                                                                                                                             |
|              | host_name      | text    | マシン名                                                                                                                                                                                                                                                                                                                                                               |
|              | task_name      | text    | プロセス名                                                                                                                                                                                                                                                                                                                                                              |
|              | client_version | text    | クライアントのバージョン                                                                                                                                                                                                                                                                                                                                                       |
|              |                                     |         | _**RESTセッションによるロックの場合:**_                                                                                                                                                                                                                                                                                                                          |
|              | host                                | text    | エンティティをロックした URL (例: "127.0.0.1:8043")                                                                                                                                                                                                                          |
|              | IPAddr                              | text    | ロック元の IPアドレス (例: "127.0.0.1")                                                                                                                                                                                                                                                   |
|              | recordNumber                        | number  | ロックされたレコードのレコード番号                                                                                                                                                                                                                                                                                                                                                  |
|              | userAgent                           | text    | ロック元の userAgent (例: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |

The following values can be returned in the _status_ and _statusText_ properties of the ___STATUS_ object in case of error:

| status | statusText                      | 説明                                                                                  |
| ------ | ------------------------------- | ----------------------------------------------------------------------------------- |
| 2      | "Stamp has changed"             | エンティティの内部的なスタンプ値がデータ内に保存されているエンティティのものと合致しません (オプティミスティック・ロック)。  |
| 3      | "Already locked"                | エンティティはペシミスティック・ロックでロックされています。                                                      |
| 4      | "Other error"                   | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。 |
| 5      | "Entity does not exist anymore" | エンティティはもうデータ内に存在していません。                                                             |

## 例題

一つ目のブラウザーからエンティティをロックします:

```
GET /rest/Customers(1)/?$lock=true
```

**Response:**

```
{
	"result": true,
	"__STATUS": {
		"success": true
	}
}
```

二つ目のブラウザー (別のセッション) から、同じリクエストを送信します:

**Response:**

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
