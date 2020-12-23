---
id:
  - dataClass
title:
  - dataClass
---



エンティティやセンティティセレクション、データクラスのメソッドを利用するにあたって、RESTリクエスト内にデータクラス名を直接使用することができます。

## Available syntaxes

| シンタックス                                                                   | 例題                          | 説明                                                              |
| ------------------------------------------------------------------------ | --------------------------- | --------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                            | `/Employee`                 | データクラスの全データ (デフォルトでは先頭の 100エンティティ) を返します                        |
| [**{dataClass}({key})**](#dataclasskey)                                  | `/Employee(22)`             | データクラスのプライマリーキーによって特定されるエンティティのデータを返します                         |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue)           | `/Employee:firstName(John)` | 指定した属性値を持つ 1件のエンティティのデータを返します                                   |
| [**{dataClass}/{method}**](#dataclassmethod-と-dataclasskeymethod)        | `/Employee/getHighSalaries` | プロジェクトメソッドを実行し、オブジェクトまたはコレクションを返します (プロジェクトメソッドは公開されている必要があります) |
| [**{dataClass}({key})/{method}**](#dataclassmethod-と-dataclasskeymethod) | `/Employee(22)/getAge`      | エンティティメソッドに基づいて値を返します                                           |




## {dataClass}

特定のデータクラス (*例:* `Company`) の全データ (デフォルトでは先頭の 100エンティティ) を返します。

### 説明

RESTリクエストにこのパラメーターのみを渡すと、(`$top/$limit` を使って指定しない限り) デフォルトで先頭の 100件のエンティティが返されます。</p> 

返されるデータの説明です:

| プロパティ         | タイプ    | 説明                                                                                         |
| ------------- | ------ | ------------------------------------------------------------------------------------------ |
| __entityModel | 文字列    | Name of the datastore class.                                                               |
| __COUNT       | 数値     | データクラスに含まれる全エンティティ数                                                                        |
| __SENT        | 数値     | RESTリクエストが返すエンティティの数。 総エンティティ数が `$top/$limit` で指定された数より少なければ、総エンティティの数になります。               |
| __FIRST       | 数値     | セレクションの先頭エンティティの番号。 デフォルトでは 0; または `$skip` で指定された値。                                        |
| __ENTITIES    | コレクション | エンティティ毎にその属性をすべて格納したオブジェクトのコレクションです。 リレーション属性は、リレーション先の情報を取得するための URI を格納したオブジェクトとして返されます。 |


各エンティティには次のプロパティが含まれます:

| プロパティ       | タイプ | 説明                                                                                                         |
| ----------- | --- | ---------------------------------------------------------------------------------------------------------- |
| __KEY       | 文字列 | データクラスにおいて定義されているプライマリーキーの値                                                                                |
| __TIMESTAMP | 日付  | Timestamp of the last modification of the entity                                                           |
| __STAMP     | 数値  | Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`. |


If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). たとえば:

`GET  /rest/Company/name,address`





### 例題

Return all the data for a specific datastore class.

`GET  /rest/Company`

**結果**:



````
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
````





## {dataClass}({key})

Returns the data for the specific entity defined by the dataclass's primary key, *e.g.*, `Company(22) or Company("IT0911AB2200")`



### 説明

By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your datastore class. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). たとえば:

`GET  /rest/Company(1)/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

`GET  /rest/Company(1)/name,address,staff?$expand=staff`



### 例題

The following request returns all the public data in the Company datastore class whose key is 1.

`GET  /rest/Company(1)`

**結果**:



````
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
````






## {dataClass}:{attribute}(value)

指定した属性値を持つ 1件のエンティティのデータを返します



### 説明

By passing the *dataClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key.

`GET  /rest/Company:companyCode(Acme001)`

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). たとえば:

`GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

`GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`



### 例題

The following request returns all the public data of the employee named "Jones".

`GET  /rest/Employee:lastname(Jones)`




## {dataClass}/{method} と {dataClass}({key})/{method}

プロジェクトメソッドに基づいて、オブジェクトまたはコレクションを返します.



### 説明

プロジェクトメソッドは、データクラス (テーブル) またはエンティティ (レコード) を介して呼び出され、オブジェクトまたはコレクションを返さねばなりません。 

`POST  /rest/Employee/getHighSalaries`

`POST  /rest/Employee(52)/getFullName`




### 4D の設定

RESTリクエストによってメソッドを呼び出せるようにするには:

- そのメソッドプロパティの "公開オプション" で RESTサーバーが選択されていなければなりません。
- そのメソッドのマスターテーブルとスコープが定義されている必要があります: 
      -  **テーブル**: メソッドコールを介する 4D テーブル (データクラス)。 このテーブルも [RESTリソースとして公開](configuration.md#テーブルやフィールドの公開) されている必要があります。
    -  **スコープ**: メソッドがクラシックな 4Dランゲージを使用しており、サーバーサイドにおいてデータベースのコンテキストが必要な場合に、この設定が適用されます。 
              - **テーブル** - テーブル (データクラス) 全体に対して適用されるメソッドの場合
        - **カレントレコード** - `{dataClass}(key)/{method}` シンタックスを使って、カレントレコード (エンティティ) に対して適用されるメソッドの場合
        - **カレントセレクション** - カレントセレクションに対して適応されるメソッドの場合

![alt-text](assets/en/REST/MethodProp.png)




### メソッドへの引数の渡し方

POST を使って、メソッドに引数を渡すことができます。

`POST  /rest/Employee/addEmployee`

POSTリクエストの本文にデータを含めます。たとえば:

["John","Smith"]






### 例題



#### テーブルスコープ

`getAverage` メソッドをコールします:

- マスターテーブルは [Employee]
- スコープは **テーブル**




```4d
    // getAverage メソッド  
ALL RECORDS([Employee])
$0:=New object("ageAverage";Average([Employee]age))
```


`POST  /rest/Employee/getAverage`

結果:


```
{
    "result": {
        "ageAverage": 44.125
    }
}
```






#### カレントレコードスコープ

`getFullName` メソッドをコールします:

- マスターテーブルは [Employee]
- スコープは **カレントレコード**



```4d
    // getFullName メソッド  
$0:=New object("fullName";[Employee]firstname+" "+[Employee]lastname)
```


`POST  /rest/Employee(3)/getFullName`

結果:


```
{
    "result": {
        "fullName": "John Smith"
    }
}
```






#### カレントセレクションスコープ

`updateSalary` メソッドをコールします:

- マスターテーブルは [Employee]
- スコープは **カレントセレクション**



```4d
    // updateSalary メソッド  
C_REAL($1;$vCount)
READ WRITE([Employee])
$vCount:=0
FIRST RECORD([Employee])
While (Not(End selection([Employee]))  
    [Employee]salary:=[Employee]salary * $1
    SAVE RECORD([Employee])
    $vCount:=$vCount+1
    NEXT RECORD([Employee])
End while 
UNLOAD RECORD([Employee])
$0:=New object("updates";$vCount)
```


`POST  /rest/Employee/updateSalary/?$filter="salary<1500"`

POST data (in the request body): [1.5]

結果:


```
{
    "result": {
        "updated": 42
    }
}
```

