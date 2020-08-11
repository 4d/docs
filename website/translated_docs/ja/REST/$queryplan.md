---
id: queryplan
title: '$queryplan'
---


Returns the query as it was passed to 4D Server (*e.g.*, `$queryplan=true`)

## 説明
$queryplan returns the query plan as it was passed to 4D Server.

| プロパティ    | 型      | 説明                                                                                          |
| -------- | ------ | ------------------------------------------------------------------------------------------- |
| item     | String | Actual query executed                                                                       |
| subquery | 配列     | If there is a subquery, an additional object containing an item property (as the one above) |

For more information about query plans, refer to [queryPlan and queryPath](genInfo.md#querypath-and-queryplan).

## 例題
If you pass the following query:

 `GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### Response:

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
