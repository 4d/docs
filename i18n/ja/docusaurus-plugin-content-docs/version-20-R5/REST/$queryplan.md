---
id: queryplan
title: $queryplan
---

Returns the query as it was passed to 4D Server (_e.g._, `$queryplan=true`)

## 説明

$queryplan は、4D Server に渡したクエリプランを返します。

| プロパティ    | タイプ    | 説明                                                         |
| -------- | ------ | ---------------------------------------------------------- |
| item     | String | 渡された実際のクエリ                                                 |
| subquery | 配列     | (サブクエリが存在する場合) item プロパティを格納する追加のオブジェクト |

For more information about query plans, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

## 例題

以下のクエリを渡した場合:

`GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### レスポンス:

```
__queryPlan: {
    And: [
        {
            item: "Join on Table : Company : People.employer = Company.ID",
            subquery: [
                {
                    item: "Company.name = acme"
                }
            ]
        },
        {
            item: "People.lastName = Jones"
        }
    ]
}
```
