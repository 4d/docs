---
id: catalog
title: "$catalog"
---


カタログには、データストアを構成するすべてのデータクラスおよび属性の詳細な情報が含まれます。


## 使用可能なシンタックス

| シンタックス                                            | 例題                   | 説明                                    |
| ------------------------------------------------- | -------------------- | ------------------------------------- |
| [**$catalog**](#catalog)                          | `/$catalog`          | プロジェクト内のデータクラスのリストを、2つの URI とともに返します。 |
| [**$catalog/$all**](#catalogall)                  | `/$catalog/$all`     | プロジェクト内のすべてのデータクラスとそれらの属性の情報を返します。    |
| [**$catalog/\{dataClass\}**](#catalogdataclass) | `/$catalog/Employee` | 特定のデータクラスとその属性の情報を返します。               |


## $catalog
プロジェクト内のデータクラスのリストを、2つの URI とともに返します。1つはデータクラスのストラクチャー情報にアクセスするためのもので、もう1つはデータクラスのデータを取得するためのものです。


### 説明

`$catalog` を呼び出すと、プロジェクトのデータストア内のデータクラスのリストを、データクラス毎に 2つの URI とともに返します。

プロジェクトのデータストア内の、公開されているデータクラスのみがリストされます。 詳細については、[**テーブルやフィールドの公開**](configuration.md#テーブルやフィールドの公開) を参照してください。

データクラス毎に返されるプロパティの説明です:


| プロパティ   | 型      | 説明                                |
| ------- | ------ | --------------------------------- |
| name    | String | データクラスの名称。                        |
| uri     | String | データクラスとその属性に関する情報を取得するための URI です。 |
| dataURI | String | データクラスのデータを取得するための URI です。        |


### 例題

`GET  /rest/$catalog`

**結果**:

````
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
````


## $catalog/$all

プロジェクト内のすべてのデータクラスとそれらの属性の情報を返します。

### 説明

`$catalog/$all` を呼び出すと、プロジェクトのデータストア内の各データクラスについて属性の情報を取得します。

各データクラスと属性について取得される情報についての詳細は [`$catalog/\{dataClass\}`](#catalogdataClass) を参照ください。


### 例題

`GET  /rest/$catalog/$all`

**結果**:

````
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
````


## $catalog/\{dataClass\}

特定のデータクラスとその属性の情報を返します。

### 説明

`$catalog/\{dataClass\}` を呼び出すと、指定したデータクラスとその属性について詳細な情報が返されます。 プロジェクトのデータストア内のすべてのデータクラスに関して同様の情報を得るには [`$catalog/$all`](#catalogall) を使います。

返される情報は次の通りです:

*   データクラス
*   属性
*   メソッド (あれば)
*   プライマリーキー

### データクラス

公開されているデータクラスについて、次のプロパティが返されます:


| プロパティ          | 型      | 説明                                                  |
| -------------- | ------ | --------------------------------------------------- |
| name           | String | データクラスの名称                                           |
| collectionName | String | データクラスにおいて作成されるエンティティセレクションの名称                      |
| tableNumber    | Number | 4Dデータベース内のテーブル番号                                    |
| scope          | String | データクラスのスコープ (**公開 (public)** に設定されているデータクラスのみ返されます) |
| dataURI        | String | データクラスのデータを取得するための URI                              |


### 属性

公開されている各属性について、次のプロパティが返されます:

| プロパティ       | 型       | 説明                                                                                                                            |
| ----------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| name        | String  | 属性の名称                                                                                                                         |
| kind        | String  | 属性タイプ (ストレージ (storage) またはリレートエンティティ (relatedEntity))                                                                         |
| fieldPos    | Number  | データベーステーブルのフィールド番号                                                                                                            |
| scope       | String  | 属性のスコープ (公開 (public) に設定されている属性のみ返されます)                                                                                       |
| indexed     | String  | 属性に **インデックス** が設定されていれば、このプロパティは true を返します。 それ以外の場合には、このプロパティは表示されません。                                                      |
| type        | String  | 属性タイプ (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, word)、または、N->1 リレーション属性の場合はリレーション先のデータクラス |
| identifying | Boolean | 属性がプライマリーキーの場合、プロパティは true を返します。 それ以外の場合には、このプロパティは表示されません。                                                                  |
| path        | String  | relatedEntity または relatedEntities 属性のリレーションパス                                                                                 |
 foreignKey|String    |relatedEntity 属性の場合、リレート先の属性名| inverseName |String |relatedEntity または relatedEntities 属性の逆方向リレーション名|

### メソッド

データクラスに紐づけられたプロジェクトメソッドを定義します (あれば)。

### プライマリーキー

key オブジェクトには、データクラスの **プライマリーキー** として定義された属性の **名称 (name プロパティ)** が返されます。


### 例題
特定のデータクラスに関する情報を取得します。

`GET  /rest/$catalog/Employee`

**結果**:

````
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
````

