---
id: queryplan
title: $queryplan
---

4D Server に渡したクエリを返します (_例_: `$queryplan=true`)

## 説明

$queryplan は、4D Server に渡したクエリプランを返します。

| プロパティ    | 型    | 説明                                                         |
| -------- | ---- | ---------------------------------------------------------- |
| item     | Text | 渡された実際のクエリ                                                 |
| subquery | 配列   | (サブクエリが存在する場合) item プロパティを格納する追加のオブジェクト |

クエリプランについての詳細は [queryPlan と queryPath](genInfo.md#querypath-と-queryplan) を参照ください。

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
