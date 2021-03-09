---
id: method
title: '$method'
---

このパラメーターは、返されたエンティティまたはエンティティセレクションに対して実行する処理を指定するのに使います。

## 使用可能なシンタックス

| シンタックス                                          | 例題                                                                                              | 説明                                                                 |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                            | エンティティまたはエンティティセレクションを削除します                                        |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                     | RESTリクエストで定義されたエンティティのコレクションに基づいて、4D Server のキャッシュにエンティティセットを作成します |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                  | 4D Server のキャッシュからエンティティセットを削除します                                  |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | RESTリクエストで定義されたリレートエンティティのコレクションに基づいて、エンティティセットを作成します              |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                                  | 一つ以上のエンティティを更新または作成します                                             |





## $method=delete

エンティティまたは (RESTで作成された) エンティティセレクションを削除します


### 説明

`$method=delete` を使ってエンティティ、またはエンティティセレクションを削除します。 たとえば、[`$filter`]($filter.md) を使って定義したエンティティセレクションや、[`{dataClass}({key})`](%7BdataClass%7D.html#dataclasskey) *(例*: /Employee(22)) のように直接特定したエンティティが対象です。

[`$entityset/{entitySetID}`]($entityset.md#entitysetentitysetid) のようにエンティティセットを呼び出して、そこに含まれるエンティティを削除することもできます。

## 例題
キーが 22であるエンティティを削除するには、次の RESTリクエストが書けます:

 `POST  /rest/Employee(22)/?$method=delete`

[`$filter`]($filter.md) を使ったクエリも可能です:

 `POST  /rest/Employee?$filter="ID=11"&$method=delete`

[`$entityset/{entitySetID}`]($entityset.md#entitysetentitysetid) で呼び出したエンティティセットを削除する場合は次のように書きます:

 `POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

レスポンス:

```
{
    "ok": true
}
```



## $method=entityset

RESTリクエストで定義されたエンティティのコレクションに基づいて、4D Server のキャッシュにエンティティセットを作成します

### 説明

RESTでエンティティのコレクションを作成した場合、これをエンティティセットとして 4D Server のキャッシュに保存することができます。 エンティティセットには参照番号が付与されます。これを `$entityset/{entitySetID}` に渡すと、当該エンティティセットにアクセスできます。 デフォルトで、エンティティセットは 2時間有効です。$timeout に値 (秒単位) を渡すことで、有効時間を変更できます。

エンティティセットを作成する際に、`$filter` や `$orderby` と同時に`$savedfilter` や `$savedorderby` も使用していた場合には、4D Server のキャッシュからエンティティセットが削除されていても、同じ参照IDで再作成できます。

### 例題

4D Server のキャッシュに2時間保存されるエンティティセットを作成するには、RESTリクエストの最後に `$method=entityset` を追加します:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset`

保存時間が 10分のエンティティセットを作成するには、次のように `$timeout` に値を渡します:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

フィルターや並べ替えの情報を保存するには、`$savedfilter` や `$savedorderby` に true を渡します。
> エンティティセットを作成する際には、`$skip` および `$top/$limit` は無視されます。

エンティティセットを作成すると、返されるオブジェクトの先頭に `__ENTITYSET` という要素が追加され、エンティティセットにアクセスするための URI を提供します:

`__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`




## $method=release

4D Server のキャッシュからエンティティセットを削除します。

### 説明

[`$method=entityset`](#methodentityset) によって作成したエンティティセットを、4D Server のキャッシュから削除することができます。

### 例題

既存のエンティティセットを削除します:

`GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### レスポンス:

リクエストが成功した場合のレスポンス:

```
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

`$method=subentityset` allows you to sort the data returned by the relation attribute defined in the REST request.

To sort the data, you use the `$subOrderby` property. For each attribute, you specify the order as ASC (or asc) for ascending order and DESC (desc) for descending order. デフォルトでは、データは昇順に並べ替えられます。

If you want to specify multiple attributes, you can delimit them with a comma, µ, `$subOrderby="lastName desc, firstName asc"`.

### 例題

If you want to retrieve only the related entities for a specific entity, you can make the following REST request where staff is the relation attribute in the Company dataclass linked to the Employee dataclass:

`GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

#### レスポンス:

```
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

`$method=update` allows you to update and/or create one or more entities in a single **POST**. If you update and/or create one entity, it is done in an object with each property an attribute with its value, *e.g.*, `{ lastName: "Smith" }`. If you update and/or create multiple entities, you must create a collection of objects.

In any cases, you must set the **POST** data in the **body** of the request.

To update an entity, you must pass the `__KEY` and `__STAMP` parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your **POST**.

Triggers are executed immediately when saving the entity to the server. The response contains all the data as it exists on the server.

You can also put these requests to create or update entities in a transaction by calling `$atomic/$atonce`. If any errors occur during data validation, none of the entities are saved. You can also use $method=validate to validate the entities before creating or updating them.

If a problem arises while adding or modifying an entity, an error will be returned to you with that information.
> Notes for specific attribute types:
> 
> * **Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). If you have selected the Date only property for your Date attribute, the time zone and time (hour, minutes, and seconds) will be removed. In this case, you can also send the date in the format that it is returned to you dd!mm!yyyy (e.g., 05!10!2013).
> * **Booleans** are either true or false.
> * Uploaded files using `$upload` can be applied to an attribute of type Image or BLOB by passing the object returned in the following format { "ID": "D507BC03E613487E9B4C2F6A0512FE50"}

### 例題

To update a specific entity, you use the following URL:

 `POST  /rest/Person/?$method=update`

**POST data:**

```
{
    __KEY: "340",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Miller"
}
```

The firstName and lastName attributes in the entity indicated above will be modified leaving all other attributes (except calculated ones based on these attributes) unchanged.

If you want to create an entity, you can POST the attributes using this URL:

 `POST  /rest/Person/?$method=update`

**POST data:**

```
{ 
    firstName: "John",
    lastName: "Smith"
}
```

You can also create and update multiple entities at the same time using the same URL above by passing multiple objects in an array to the POST:

 `POST  /rest/Person/?$method=update`

**POST data:**

```
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

When you add or modify an entity, it is returned to you with the attributes that were modified. For example, if you create the new employee above, the following will be returned:

```
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

If, for example, the stamp is not correct, the following error is returned:

```
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
