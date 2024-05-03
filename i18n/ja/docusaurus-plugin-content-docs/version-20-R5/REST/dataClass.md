---
id: dataClass
title: dataClass
---

エンティティやセンティティセレクション、またはクラス関数を利用するにあたって、RESTリクエスト内にデータクラス名を直接使用することができます。

## 使用可能なシンタックス

| シンタックス                                                                                                                               | 例題                                    | 説明                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------- | ----------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                                                                                        | `/Employee`                           | データクラスの全データ (デフォルトでは先頭の 100エンティティ) を返します |
| [**{dataClass}[{key}]**](#dataclasskey)                                          | `/Employee[22]`                       | データクラスのプライマリーキーによって特定されるエンティティのデータを返します                     |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)                                    | `/Employee:firstName(John)`           | 指定した属性値を持つ 1件のエンティティのデータを返します                               |
| [**{dataClass}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)                                                         | `/City/getCity`                       | DataClassクラス関数を実行します                                        |
| [**{dataClass}/{EntitySelectionClassFunction}**](ClassFunctions.md#function-calls)                                                   | `/City/getPopulation/?$filter="ID<3"` | EntitySelectionクラス関数を実行します                                  |
| [**{dataClass}[{key}]/{EntityClassFunction}**](ClassFunctions.md#function-calls) | `City[2]/getPopulation`               | Entityクラス関数を実行します                                           |

> Function calls are detailed in the [Calling ORDA class functions](ClassFunctions.md) section.

## {dataClass}

Returns all the data (by default the first 100 entities) for a specific dataclass (_e.g._, `Company`)

### 説明

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using [`$top/$limit`]($top_$limit.md).

返されるデータの説明です:

| プロパティ                                                   | タイプ        | 説明                                                                                                                                           |
| ------------------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | String     | データクラスの名称。                                                                                                                                   |
| __COUNT       | Number     | データクラスに含まれる全エンティティ数                                                                                                                          |
| __SENT        | Number     | RESTリクエストが返すエンティティの数。 This number can be the total number of entities if it is less than the value defined by `$top/$limit`. |
| __FIRST       | Number     | セレクションの先頭エンティティの番号。 Either 0 by default or the value defined by `$skip`.                                                     |
| __ENTITIES    | Collection | エンティティ毎にその属性をすべて格納したオブジェクトのコレクションです。 リレーション属性は、リレーション先の情報を取得するための URI を格納したオブジェクトとして返されます。                                                   |

各エンティティには次のプロパティが含まれます:

| プロパティ                                                 | タイプ    | 説明                                                                                                                         |
| ----------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------- |
| __KEY       | String | データクラスにおいて定義されているプライマリーキーの値                                                                                                |
| __TIMESTAMP | 日付     | エンティティが最後に編集された日時を記録するタイムスタンプ                                                                                              |
| __STAMP     | Number | Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`. |

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). 例:

`GET  /rest/Company/name,address`

### 例題

特定のデータクラスの全データを取得します。

`GET  /rest/Company`

**結果**:

```json
{
    "__entityModel": "Company",
    "__GlobalStamp": 51,
    "__COUNT": 250,
    "__SENT": 100,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
            "__STAMP": 1,
            "ID": 1,
            "name": "Adobe",
            "address": null,
            "city": "San Jose",
            "country": "USA",
            "revenues": 500000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",
            "__STAMP": 1,
            "ID": 2,
            "name": "Apple",
            "address": null,
            "city": "Cupertino",
            "country": "USA",
            "revenues": 890000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",
            "__STAMP": 2,
            "ID": 3,
            "name": "4D",
            "address": null,
            "city": "Clichy",
            "country": "France",
            "revenues": 700000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "4",
            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",
            "__STAMP": 1,
            "ID": 4,
            "name": "Microsoft",
            "address": null,
            "city": "Seattle",
            "country": "USA",
            "revenues": 650000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"
                }
            }
        }
.....//more entities here 
    ]
}
```

## {dataClass}\[{key}]

Returns the data for the specific entity defined by the dataclass's primary key, _e.g._, `Company[22]` or `Company[IT0911AB2200]`

### 説明

データクラスとキーを渡すことで、公開されているエンティティの情報を取得することができます。 キー (key) は、データクラスに定義されているプライマリーキーの値です。 For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{DataClass}](#dataclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). 例:

`GET  /rest/Company[1]/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

`GET  /rest/Company[1]/name,address,staff?$expand=staff`

### 例題

次のリクエストは、Company データクラスで主キーが 1 であるエンティティの公開データをすべて返します。

`GET  /rest/Company[1]`

**結果**:

```json
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
    "__STAMP": 2,
    "ID": 1,
    "name": "Apple",
    "address": Infinite Loop,
    "city": "Cupertino",
    "country": "USA",
    "url": http://www.apple.com,
    "revenues": 500000,
    "staff": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
        }
    }
}
```

## {dataClass}:{attribute}(value)

指定した属性値を持つ 1件のエンティティのデータを返します

### 説明

By passing the _dataClass_ and an _attribute_ along with a value, you can retrieve all the public information for that entity. 指定する値は、その属性において一意のものですが、主キーではありません。

`GET  /rest/Company:companyCode(Acme001)`

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). 例:

`GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

`GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### 例題

次のリクエストは、名前が "Jones" である社員 (Employee) の公開データをすべて返します。

`GET  /rest/Employee:lastname(Jones)`
