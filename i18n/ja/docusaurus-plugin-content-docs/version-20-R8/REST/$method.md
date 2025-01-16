---
id: method
title: $method
---

このパラメーターは、返されたエンティティまたはエンティティセレクションに対して実行する処理を指定するのに使います。

## 使用可能なシンタックス

| シンタックス                                          | 例題                                                                                      | 説明                                                                 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                        | エンティティまたはエンティティセレクションを削除します                                        |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                        | RESTリクエストで定義されたエンティティのコレクションに基づいて、4D Server のキャッシュにエンティティセットを作成します |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                | 4D Server のキャッシュからエンティティセットを削除します                                  |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | RESTリクエストで定義されたリレートエンティティのコレクションに基づいて、エンティティセットを作成します              |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                          | 一つ以上のエンティティを更新または作成します                                             |

## $method=delete

エンティティまたは (RESTで作成された) エンティティセレクションを削除します

### 説明

`$method=delete` を使ってエンティティ、またはエンティティセレクションを削除します。 たとえば、[`$filter`]($filter.md) を使って定義したエンティティセレクションや、[`\{dataClass\}(\{key\})`](dataClassD.md#dataclasskey) (_例_: /Employee(22)) のように直接特定したエンティティが対象です。

[`$entityset/\{entitySetID\}`]($entityset.md#entitysetentitysetid) のようにエンティティセットを呼び出して、そこに含まれるエンティティを削除することもできます。

### 例題

キーが 22であるエンティティを削除するには、次の RESTリクエストが書けます:

`POST  /rest/Employee(22)/?$method=delete`

$filter を使ったクエリも可能です:

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

$entityset/\{entitySetID\} で呼び出したエンティティセットを削除する場合は次のように書きます:

`POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

レスポンス:

```json
{
    "ok": true
}
```

## $method=entityset

RESTリクエストで定義されたエンティティのコレクションに基づいて、4D Server のキャッシュにエンティティセットを作成します

### 説明

RESTでエンティティのコレクションを作成した場合、これをエンティティセットとして 4D Server のキャッシュに保存することができます。 エンティティセットには参照番号が付与されます。これを `$entityset/\{entitySetID\}` に渡すと、当該エンティティセットにアクセスできます。 デフォルトで、エンティティセットは 2時間有効です。$timeout に値 (秒単位) を渡すことで、有効時間を変更できます。

エンティティセットを作成する際に、`$filter` や `$orderby` と同時に`$savedfilter` や `$savedorderby` も使用していた場合には、4D Server のキャッシュからエンティティセットが削除されていても、同じ参照IDで再作成できます。

### 例題

4D Server のキャッシュに2時間保存されるエンティティセットを作成するには、RESTリクエストの最後に `$method=entityset` を追加します:

`GET  /rest/People/?$filter="ID>320"&$method=entityset`

保存時間が 10分のエンティティセットを作成するには、次のように `$timeout` に値を渡します:

`GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

フィルターや並べ替えの情報を保存するには、`$savedfilter` や `$savedorderby` に true を渡します。

> エンティティセットを作成する際には、`$skip` および `$top/$limit` は無視されます。

エンティティセットを作成すると、返されるオブジェクトの先頭に `__ENTITYSET` という要素が追加され、エンティティセットにアクセスするための URI を提供します:

```json
__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"
```

## $method=release

4D Server のキャッシュからエンティティセットを削除します。

### 説明

[`$method=entityset`](#methodentityset) によって作成したエンティティセットを、4D Server のキャッシュから削除することができます。

### 例題

既存のエンティティセットを削除します:

`GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### レスポンス:

リクエストが成功した場合のレスポンス:

```json
{
    "ok": true
}
エンティティセットが見つからなかった場合には、エラーが返されます

{
    "__ERROR": [
        {
            "message": "Error code: 1802\nEntitySet  \"4C51204DD8184B65AC7D79F09A077F24\" cannot be found\ncomponent:  'dbmg'\ntask 22, name: 'HTTP connection handler'\n",
            "componentSignature": "dbmg",
            "errCode": 1802
        }
    ]
}
```

## $method=subentityset

RESTリクエストで定義されたリレートエンティティのコレクションに基づいて、4D Server のキャッシュにエンティティセットを作成します

### 説明

`$method=subentityset` を使うことで、RESTリクエストが定義されたリレーション属性によって返されるデータを並べ替えることができます。

データを並べ替えるには `$subOrderby` を使います。 並べ替えの基準とする各属性について、並べ替え順を指定します。ASC ( asc) が昇順、DESC (desc) が降順です。 デフォルトでは、データは昇順に並べ替えられます。

複数の属性を指定するには、カンマ区切りにします (`例`: $subOrderby="lastName desc, firstName asc")。

### 例題

あるエンティティのリレートエンティティだけを取得したいとき、たとえば Company データクラスの staff リレーション名が Employee データクラスにリンクしている場合には、次の RESTリクエストが書けます:

`GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

#### レスポンス:

```json
{

    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",
    "__entityModel": "Employee",
    "__COUNT": 2,
    "__SENT": 2,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "4",
            "__STAMP": 1,
            "ID": 4,
            "firstName": "Linda",
            "lastName": "Jones",
            "birthday": "1970-10-05T14:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        },
        {
            "__KEY": "1",
            "__STAMP": 3,
            "ID": 1,
            "firstName": "John",
            "lastName": "Smith",
            "birthday": "1985-11-01T15:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        }
    ]

}
```

## $method=update

一つ以上のエンティティを更新または作成します

### 説明

`$method=update` を使うと、一つの **POST** で一つ以上のエンティティを更新または作成することができます。 エンティティの更新・作成をおこなうには、オブジェクトのプロパティ/値としてエンティティの属性/値を指定します (_例_: `{ lastName: "Smith" }`)。 複数のエンティティを更新・作成するには、各エンティティに対応するオブジェクトをコレクションにまとめます。

いずれの場合も、リクエストのボディ (**body**) に **POST** データを格納します。

エンティティを更新するには、更新する属性だけでなく、`__KEY` および `__STAMP` パラメーターをオブジェクト内に指定しなくてはなりません。 これらのパラメーターがない場合、**POST** のボディに格納したオブジェクトの値をもとに新規エンティティが追加されます。

エンティティをサーバーに保存すると同時にトリガーが実行されます。 レスポンスにはすべてのデータが、サーバー上に存在するとおりに格納されます。

`$atomic/$atOnce` を使うと、エンティティを作成・更新するリクエストをトランザクション内で実行できます。 データの検証でエラーが発生した場合に、一部のエンティティだけが処理されてしまうのを防げます。 また、`$method=validate` を使うと、作成・更新の前にエンティティを検証することができます。

エンティティを追加または更新する際に問題が発生すると、その情報を格納したエラーが返されます。

:::note

- **日付** は JavaScript 形式で表す必要があります: YYYY-MM-DDTHH:MM:SSZ (例: "2010-10-05T23:00:00Z")。 日付属性のためだけに日付プロパティを指定した場合、タイムゾーンおよび時刻 (時間・分・秒) の情報は削除されます。 この場合、レスポンスの形式 dd!mm!yyyy (例: 05!10!2013) を使って日付を送信することも可能です。
- **ブール** は true または false です。
- `$upload` を使ってアップロードしたファイルは、`{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}` のような形式で返されるオブジェクトを渡すことで、ピクチャー型やBLOB型の属性に適用できます。

### 例題

特定のエンティティを更新するには、次のようなリクエストをします:

`POST  /rest/Person/?$method=update`

**POST データ:**

```json
{
    __KEY: "340",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Miller"
}
```

この場合、渡した firstName および lastName 属性だけが変更され、当該エンティティのその他の属性はそのままです (変更した属性に基づいて計算される属性を除く)。

エンティティを作成するには、次のように書きます:

`POST  /rest/Person/?$method=update`

**POST データ:**

```json
{
    firstName: "John",
    lastName: "Smith"
}
```

同じ URL を使って、複数のエンティティを作成・更新することもできます。その場合には、POST データに複数オブジェクトのコレクションを渡します:

`POST  /rest/Person/?$method=update`

**POST データ:**

```json
[{
    "__KEY": "309",
    "__STAMP": 5,
    "ID": "309",
    "firstName": "Penelope",
    "lastName": "Miller"
}, {
    "firstName": "Ann",
    "lastName": "Jones"
}]
```

**レスポンス:**

エンティティを追加・更新した場合、そのエンティティは変更後の内容で返されます。 たとえば、新規の Employee エンティティを作成した場合、次のようなレスポンスが返されます:

```json
{
    "__KEY": "622",
    "__STAMP": 1,
    "uri": "http://127.0.0.1:8081/rest/Employee(622)",
    "__TIMESTAMP": "!!2020-04-03!!",
    "ID": 622,
    "firstName": "John",
    "firstName": "Smith"
}
```

スタンプが正しくない場合には、次のようなエラーが返されます:

```json
{
    "__STATUS": {
        "status": 2,
        "statusText": "Stamp has changed",
        "success": false
    },
    "__KEY": "1",
    "__STAMP": 12,
    "__TIMESTAMP": "!!2020-03-31!!",
    "ID": 1,
    "firstname": "Denise",
    "lastname": "O'Peters",
    "isWoman": true,
    "numberOfKids": 1,
    "addressID": 1,
    "gender": true,
    "imageAtt": {
        "__deferred": {
            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",
            "image": true
        }
    },
    "extra": {
        "num": 1,
        "alpha": "I am 1"
    },
    "address": {
        "__deferred": {
            "uri": "/rest/Address(1)",
            "__KEY": "1"
        }
    },
    "__ERROR": [
        {
            "message": "Given stamp does not match current one for record# 0 of table Persons",
            "componentSignature": "dbmg",
            "errCode": 1263
        },
        {
            "message": "Cannot save record 0 in table Persons of database remote_dataStore",
            "componentSignature": "dbmg",
            "errCode": 1046
        },
        {
            "message": "The entity# 1 in the \"Persons\" dataclass cannot be saved",
            "componentSignature": "dbmg",
            "errCode": 1517
        }
    ]
}{}

```
