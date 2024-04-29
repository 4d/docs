---
id: querypath
title: $querypath
---

Returns the query as it was executed by 4D Server (_e.g._, `$querypath=true`)

## 説明

`$querypath` returns the query as it was executed by 4D Server. たとえば、クエリの一部がエンティティを返さなかった場合、残りのクエリは実行されません。 The query requested is optimized as you can see in this `$querypath`.

For more information about query paths, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

実行されたクエリを定義する次のプロパティを格納した steps コレクションが返されます:

| プロパティ         | タイプ        | 説明                                      |
| ------------- | ---------- | --------------------------------------- |
| description   | String     | 実際に実行されたクエリ、または複数ステップの場合は "AND"         |
| time          | Number     | クエリの実行に要した時間 (ミリ秒単位) |
| recordsfounds | Number     | レコードの検出件数                               |
| steps         | Collection | クエリパスの後続ステップを定義するオブジェクトのコレクション          |

## 例題

以下のクエリを渡した場合:

`GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

エンティティが見つからなかった場合に次のように書くと、後述のクエリパスが返されます:

` GET  /rest/$querypath`

**Response**:

```
__queryPath: {
 
    steps: [
        {
            description: "AND",
            time: 0,
            recordsfounds: 0,
            steps: [
                {
                    description: "Join on Table : Company : People.employer = Company.ID",
                    time: 0,
                    recordsfounds: 0,
                    steps: [
                        {
                            steps: [
                                {
                                    description: "Company.name = acme",
                                    time: 0,
                                    recordsfounds: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
 
}
```

最初のクエリが一つ以上のエンティティを返した場合には、二つめのクエリが実行されます。 以下のクエリを実行した場合:

`GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true`

少なくとも1件のエンティティが見つかった場合に次のように書くと、後述のクエリパスが返されます:

`GET  /rest/$querypath`

**Respose**:

```
"__queryPath": {
    "steps": [
        {
            "description": "AND",
            "time": 1,
            "recordsfounds": 4,
            "steps": [
                {
                    "description": "Join on Table : Company : Employee.employer = Company.ID",
                    "time": 1,
                    "recordsfounds": 4,
                    "steps": [
                        {
                            "steps": [
                                {
                                    "description": "Company.name LIKE a*",
                                    "time": 0,
                                    "recordsfounds": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "description": "Employee.lastName # smith",
                    "time": 0,
                    "recordsfounds": 4
                }
            ]
        }
    ]
}
```
