---
id: lock
title: '$lock'
---


[ペシミスティック・ロック機構](../ORDA/entities.md#ペシミスティック・ロック) を使ってエンティティをロック/アンロックします。


## シンタックス

他のセッションや 4Dプロセスに対し、特定のエンティティをロックするには:

```
/?$lock=true
```


他のセッションや 4Dプロセスに対し、特定のエンティティをアンロックするには:

```
/?$lock=false
```


[`lockKindText` プロパティ](../API/EntityClass.html#lock) は "Locked by session" です。


### 説明

REST API によるロックは、[セッション](authUsers.md#セッションの開始) レベルで設定されます。

*ロック* されたエンティティは次のものから操作 (ロック / アンロック / 更新 / 削除) できません:

- 他の REST セッション
- RESTサーバー上で実行されている 4D プロセス (クライアント/サーバー, リモートデータストア, スタンドアロン)。

REST API によってロックされたエンティティは、次の場合にのみアンロックされます:

- ロック元の (`/?$lock=true` をおこなった) RESTセッションが `/?$lock=false` をリクエストしたとき。
- ロック元セッションの [非アクティブタイムアウト]($directory.md) に達したとき (セッションは閉じられます)。

### レスポンス

`?$lock` リクエストでロック操作に成功した場合、`"result"=true` を格納した JSONオブジェクトが返されます (失敗した場合は `"result"=false`)。

戻り値の "__STATUS" オブジェクトには、以下のプロパティが格納されています:

| プロパティ        |                | タイプ     | 説明                                                                                                                                                |
| ------------ | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
|              |                |         | ***成功の場合にのみ利用可能:***                                                                                                                               |
| success      |                | boolean | ロックに成功した場合 (あるいはエンティティがすでにカレントセッションでロックされていた場合) には true、それ以外は false (この場合は返されません)。                                                                |
|              |                |         | ***エラーの場合にのみ利用可能:***                                                                                                                              |
| status       |                | number  | エラーコード、以下参照                                                                                                                                       |
| statusText   |                | text    | エラーの詳細、以下参照                                                                                                                                       |
| lockKind     |                | number  | ロックコード                                                                                                                                            |
| lockKindText |                | text    | "Locked by session" RESTセッションによるロック、"Locked by record" 4Dプロセスによるロック                                                                               |
| lockInfo     |                | object  | ロック元についての情報。 返されるプロパティはロック元 (4Dプロセスまたは RESTセッション) によって異なります。                                                                                      |
|              |                |         | ***4Dプロセスによるロックの場合:***                                                                                                                            |
|              | task_id        | number  | プロセスID                                                                                                                                            |
|              | user_name      | text    | マシン上でのセッションユーザー名                                                                                                                                  |
|              | user4d_alias   | text    | 4D ユーザーの名前またはエイリアス                                                                                                                                |
|              | user4d_id      | number  | 4DデータベースディレクトリでのユーザーID                                                                                                                            |
|              | host_name      | text    | マシン名                                                                                                                                              |
|              | task_name      | text    | プロセス名                                                                                                                                             |
|              | client_version | text    | クライアントのバージョン                                                                                                                                      |
|              |                |         | ***RESTセッションによるロックの場合:***                                                                                                                         |
|              | host           | text    | エンティティをロックした URL (例: "127.0.0.1:8043")                                                                                                            |
|              | IPAddr         | text    | ロック元の IPアドレス (例: "127.0.0.1")                                                                                                                     |
|              | recordNumber   | number  | ロックされたレコードのレコード番号                                                                                                                                 |
|              | userAgent      | text    | ロック元の userAgent (例: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36") |


エラー時には *__STATUS* オブジェクトの *status* および *statusText* プロパティに以下のいずれかの値が返されます:

| status | statusText                      | 説明                                                              |
| ------ | ------------------------------- | --------------------------------------------------------------- |
| 2      | "Stamp has changed"             | エンティティの内部的なスタンプ値がデータ内に保存されているエンティティのものと合致しません (オプティミスティック・ロック)。 |
| 3      | "Already locked"                | エンティティはペシミスティック・ロックでロックされています。                                  |
| 4      | "Other error"                   | 深刻なエラーとは、低レベルのデータベースエラー (例: 重複キー)、ハードウェアエラーなどです。                |
| 5      | "Entity does not exist anymore" | エンティティはもうデータ内に存在していません。                                         |




## 例題


一つ目のブラウザーからエンティティをロックします:

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

二つ目のブラウザー (別のセッション) から、同じリクエストを送信します:

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

