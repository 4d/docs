---
id: atomic_$atonce
title: $atomic/$atOnce
---

RESTリクエストに含まれる操作をトランザクション内で処理します。 エラーがなかった場合、トランザクションは受け入れられます。 それ以外の場合、トランザクションはキャンセルされます。

## 説明

複数の操作を一回のリクエストで処理する際には `$atomic/$atOnce` を使うことで、１つでも操作に問題があった場合にすべての操作をキャンセルすることができます。 `$atomic` および `$atOnce` のどちらでも利用できます。

## 例題

次の RESTリクエストをトランザクション内で呼び出します。

`POST  /rest/Employee?$method=update&$atomic=true`

**POST データ**:

```json
[
{
    "__KEY": "200",
    "firstname": "John"
},
{
    "__KEY": "201",
    "firstname": "Harry"
}
]
```

2つ目のエンティティの操作中に次のエラーが発生します。そのため、1つ目のエンティティも保存されません:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "200",
    "__STAMP": 1,
    "uri": "/rest/Employee(200)",
    "__TIMESTAMP": "!!2020-04-03!!",
    "ID": 200,
    "firstname": "John",
    "lastname": "Keeling",
    "isWoman": false,
    "numberOfKids": 2,
    "addressID": 200,
    "gender": false,
    "address": {
        "__deferred": {
            "uri": "/rest/Address(200)",
            "__KEY": "200"
        }
    },
    "__ERROR": [
        {
            "message": "Cannot find entity with \"201\" key in the \"Employee\" dataclass",
            "componentSignature": "dbmg",
            "errCode": 1542
        }
    ]
}
```

> 1つ目のエンティティの名前は "John" ですが、この値はサーバー上に保存されず、タイムスタンプも変更されません。 したがって、エンティティをリロードすると、もとの値に戻ります。
