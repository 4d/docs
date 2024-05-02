---
id: catalog
title: $catalog
---

カタログには、データストアを構成するすべてのデータクラスおよび属性の詳細な情報が含まれます。

## 使用可能なシンタックス

| シンタックス                                                                  | 例題                     | 説明                                            |
| ----------------------------------------------------------------------- | ---------------------- | --------------------------------------------- |
| [**$catalog**](#catalog)                                                | `/$catalog`            | プロジェクト内のデータクラスのリストを、2つの URI とともに返します。         |
| [**$catalog/$all**](#catalogall)                                        | `/$catalog/$all`       | プロジェクト内のすべてのデータクラスとそれらの属性の情報を返します。            |
| [**$catalog/{dataClass}**](#catalogdataclass)                           | `/$catalog/Employee`   | 特定のデータクラスとその属性の情報を返します。                       |
| [**$catalog/DataStoreClassFunction**](ClassFunctions.md#function-calls) | `/$catalog/authentify` | DataStoreクラス関数を実行します (あれば) |

## $catalog

プロジェクト内のデータクラスのリストを、2つの URI とともに返します。1つはデータクラスのストラクチャー情報にアクセスするためのもので、もう1つはデータクラスのデータを取得するためのものです。

### 説明

When you call `$catalog`, a list of the dataclasses is returned along with two URIs for each dataclass in your project's datastore.

プロジェクトのデータストア内の、公開されているデータクラスのみがリストされます。 For more information, please refer to [**Exposing tables and fields**](configuration.md#exposing-tables-and-fields) section.

データクラス毎に返されるプロパティの説明です:

| プロパティ   | タイプ    | 説明                                |
| ------- | ------ | --------------------------------- |
| name    | String | データクラスの名称。                        |
| uri     | String | データクラスとその属性に関する情報を取得するための URI です。 |
| dataURI | String | データクラスのデータを取得するための URI です。        |

### 例題

`GET  /rest/$catalog`

**結果**:

```
{
    dataClasses: [
        {
            name: "Company",
            uri: "http://127.0.0.1:8081/rest/$catalog/Company",
            dataURI: "http://127.0.0.1:8081/rest/Company"
        },
        {
            name: "Employee",
            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",
            dataURI: "http://127.0.0.1:8081/rest/Employee"
        }
    ]
}
```

## $catalog/$all

プロジェクト内のすべてのデータクラスとそれらの属性の情報を返します。

### 説明

Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the dataclasses in your project's active model.

For more information about what is returned for each dataclass and its attributes, use [`$catalog/{dataClass}`](#catalogdataClass).

### 例題

`GET  /rest/$catalog/$all`

**結果**:

```
{
 
    "dataClasses": [
        {
            "name": "Company",
            "className": "Company",
            "collectionName": "CompanySelection",
            "tableNumber": 2,
            "scope": "public",
            "dataURI": "/rest/Company",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "fieldPos": 1,
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "name",
                    "kind": "storage",
                    "fieldPos": 2,
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "revenues",
                    "kind": "storage",
                    "fieldPos": 3,
                    "scope": "public",
                    "type": "number"
                },
                {
                    "name": "staff",
                    "kind": "relatedEntities",
                    "fieldPos": 4,
                    "scope": "public",
                    "type": "EmployeeSelection",
                    "reversePath": true,
                    "path": "employer"
                },
                {
                    "name": "url",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        },
        {
            "name": "Employee",
            "className": "Employee",
            "collectionName": "EmployeeSelection",
            "tableNumber": 1,
            "scope": "public",
            "dataURI": "/rest/Employee",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "firstname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "lastname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "employer",
                    "kind": "relatedEntity",
                    "scope": "public",
                    "type": "Company",
                    "path": "Company"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        }
    ]
}
```

## $catalog/{dataClass}

特定のデータクラスとその属性の情報を返します。

### 説明

Calling `$catalog/{dataClass}` for a specific dataclass will return the following information about the dataclass and the attributes it contains. If you want to retrieve this information for all the dataclasses in your project's datastore, use [`$catalog/$all`](#catalogall).

返される情報は次の通りです:

- データクラス
- 属性
- メソッド (あれば)
- プライマリーキー

### DataClass

公開されているデータクラスについて、次のプロパティが返されます:

| プロパティ          | タイプ    | 説明                                                                                                              |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------- |
| name           | String | データクラスの名称                                                                                                       |
| collectionName | String | データクラスにおいて作成されるエンティティセレクションの名称                                                                                  |
| tableNumber    | Number | 4Dデータベース内のテーブル番号                                                                                                |
| scope          | String | Scope for the dataclass (note that only dataclasses whose **Scope** is public are displayed) |
| dataURI        | String | データクラスのデータを取得するための URI                                                                                          |

### 属性

公開されている各属性について、次のプロパティが返されます:

| プロパティ       | タイプ     | 説明                                                                                                                                                                                       |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name        | String  | 属性の名称                                                                                                                                                                                    |
| kind        | String  | 属性タイプ (ストレージ (storage) またはリレートエンティティ (relatedEntity))                                                                           |
| fieldPos    | Number  | データベーステーブルのフィールド番号                                                                                                                                                                       |
| scope       | String  | 属性のスコープ (公開 (public) に設定されている属性のみ返されます)                                                                                                            |
| indexed     | String  | If any **Index Kind** was selected, this property will return true. それ以外の場合には、このプロパティは表示されません。                                                                           |
| type        | String  | Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the dataclass for a N->1 relation attribute. |
| identifying | Boolean | 属性がプライマリーキーの場合、プロパティは true を返します。 それ以外の場合には、このプロパティは表示されません。                                                                                                                             |
| path        | String  | relatedEntity 属性の場合はデータクラス名、relatedEntities 属性の場合はリレーション名                                                                                                                                |
| foreignKey  | String  | relatedEntity 属性の場合、リレート先の属性名                                                                                                                                                            |
| inverseName | String  | relatedEntity または relatedEntities 属性の逆方向リレーション名                                                                                                                                          |

### プライマリーキー

The key object returns the **name** of the attribute defined as the **Primary Key** for the dataclass.

### 例題

特定のデータクラスに関する情報を取得します。

`GET  /rest/$catalog/Employee`

**結果**:

```
{
    name: "Employee",
    className: "Employee",
    collectionName: "EmployeeCollection",
    scope: "public",
    dataURI: "http://127.0.0.1:8081/rest/Employee",
    defaultTopSize: 20,
    extraProperties: {
        panelColor: "#76923C",
        __CDATA: "\n\n\t\t\n",
        panel: {
            isOpen: "true",
            pathVisible: "true",
            __CDATA: "\n\n\t\t\t\n",
            position: {
                X: "394",
                Y: "42"
            }
        }
    },
    attributes: [
        {
            name: "ID",
            kind: "storage",
            scope: "public",
            indexed: true,
            type: "long",
            identifying: true
        },
        {
            name: "firstName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "lastName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "fullName",
            kind: "calculated",
            scope: "public",
            type: "string",
            readOnly: true
        },
        {
            name: "salary",
            kind: "storage",
            scope: "public",
            type: "number",
            defaultFormat: {
                format: "$###,###.00"
            }
        },
        {
            name: "photo",
            kind: "storage",
            scope: "public",
            type: "image"
        },
        {
            name: "employer",
            kind: "relatedEntity",
            scope: "public",
            type: "Company",
            path: "Company"
        },
        {
            name: "employerName",
            kind: "alias",
            scope: "public",

            type: "string",
            path: "employer.name",
            readOnly: true
        },
        {
            name: "description",
            kind: "storage",
            scope: "public",
            type: "string",
            multiLine: true
        },
   ],
    key: [
        {
            name: "ID"
        }
    ]
}
```
