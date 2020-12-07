---
id: manData
title: データ操作
---

REST によって、すべての [公開されているデータクラス、属性](configuration.md#テーブルやフィールドの公開)、そしてメソッドにアクセスすることができます。 データクラス、属性、およびメソッド名については、文字の大小が区別されます。クエリのデータについては、文字の大小は区別されません。

## データのクエリ

データを直接クエリするには [`$filter`]($filter.md) 関数を使います。 たとえば、"Smith" という名前の人を検索するには:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`




## エンティティの追加・編集・削除

REST API を使って、4D内と同等のデータ操作をおこなうことができます。

エンティティを追加・編集するには [`$method=update`]($method.md#methodupdate) を呼び出します。 データを保存する前に、[`$method=validate`]($method.md#methodvalidate) を呼び出して確定することもできます。 1つ以上のエンティティを削除するには [`$method=delete`]($method.md#methoddelete) を使用します。

[{dataClass}({key})](%7BdataClass%7D.md#dataclasskey) でデータクラスのいちエンティティを取得する以外にも、DataClassクラスにメソッドを書いて [{dataClass}/{method}](%7BdataClass%7D.md#dataclassmethod) のように使い、エンティティセレクションやコレクションを返すようにすることができます。

戻り値としてコレクションを返す前に、[`$orderby`]($orderby.md) を使って一つ以上の属性 (リレーション属性も可) を基準に並べ替えることもできます。


## データのナビゲーション

エンティティのコレクションをナビゲートするにあたっては、クエリやエンティティセレクションに次の RESTリクエストを追加することができます: [`$skip`]($skip.md) (開始エンティティの指定)、[`$top/$limit`]($top_$limit.md) (返されるエンティティ数の指定)。



## エンティティセットの作成と管理

エンティティセットとは、*エンティティセレクション* と同等の意味で、RESTリクエストによって取得され、4D Server のキャッシュに保存されるエンティティのコレクションのことです。 エンティティセットを利用することで、同じ結果を得るためにアプリケーションを繰り返しクエリすることが避けられます。 エンティティセットへのアクセスはクエリするよりも速いため、アプリケーション速度の向上にもつながります。

エンティティセットを作成するには、RESTリクエスト内で [`$method=entityset`]($method.md#methodentityset) を呼び出します。 エンティティセットがタイムアウトした場合やサーバーから削除されてしまった場合への安全対策として、[`$filter`]($filter.md) や [`$orderby`]($orderby.md) を呼び出す際に [`$savedfilter`]($savedfilter.md) および [`$savedorderby`]($savedorderby.md) を使用することで、以前と同じ ID で再取得することができます。

エンティティセットにアクセスするには、`$entityset/{entitySetID}` を使います。例:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`


デフォルトで、エンティティセットは 2時間保存されます。[`$timeout`]($timeout.md) に新しい値を渡すことで、タイムアウトを変更できます。 エンティティセットを使用するたびに、タイムアウトはデフォルト値または指定値にリセットされます。

4D Server のキャッシュからエンティティセットを削除したい場合には [`$method=release`]($method.md#methodrelease) を使います。

エンティティセット内のエンティティの属性を編集すると、それらの値が更新されます。 However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set.

If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

Using [`$entityset/{entitySetID}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two.

A new selection of entities is returned; however, you can also create a new entity set by calling [`$method=entityset`]($method.md#methodentityset) at the end of the REST request.



## Calculating data

By using [`$compute`]($compute.md), you can compute the **average**, **count**, **min**, **max**, or **sum** for a specific attribute in a dataclass. You can also compute all values with the $all keyword.

For example, to get the highest salary:

`/rest/Employee/salary/?$compute=sum`

To compute all values and return a JSON object:

`/rest/Employee/salary/?$compute=$all`


## Getting data from methods

You can call 4D project methods that are [exposed as REST Service](%7BdataClass%7D.html#4d-configuration). A 4D method can return in $0:

- an object
- a collection

The following example is a dataclass method that reveives parameters and returns an object:

```4d
// 4D findPerson method
C_TEXT($1;$firstname;$2;$lastname)
$firstname:=$1
$lastname:=$2

$0:=ds.Employee.query("firstname = :1 and lastname = :2";$firstname;$lastname).first().toObject()
```

The method properties are configured accordingly on the 4D project side:

![alt-text](assets/en/REST/methodProp_ex.png)

Then you can send the following REST POST request, for example using the `HTTP Request` 4D command:

```4d
C_TEXT($content)
C_OBJECT($response)

$content:="[\"Toni\",\"Dickey\"]" 

$statusCode:=HTTP Request(HTTP POST method;"127.0.0.1:8044/rest/Employee/findPerson";$content;$response)
```

Method calls are detailed in the [{dataClass}](%7BdataClass%7D.html#dataclassmethod-and-dataclasskeymethod) section.

## Selecting Attributes to get

You can always define which attributes to return in the REST response after an initial request by passing their path in the request (*e.g.*, `Company(1)/name,revenues/`)

You can apply this filter in the following ways:

| オブジェクト                 | シンタックス                                              | 例題                                                            |
| ---------------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| データクラス                 | {dataClass}/{att1,att2...}                          | /People/firstName,lastName                                    |
| Collection of entities | {dataClass}/{att1,att2...}/?$filter="{filter}"      | /People/firstName,lastName/?$filter="lastName='a@'"           |
| Specific entity        | {dataClass}({ID})/{att1,att2...}                    | /People(1)/firstName,lastName                                 |
|                        | {dataClass}:{attribute}(value)/{att1,att2...}/      | /People:firstName(Larry)/firstName,lastName/                  |
| エンティティセレクション           | {dataClass}/{att1,att2...}/$entityset/{entitySetID} | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61 |

The attributes must be delimited by a comma, *i.e.*, `/Employee/firstName,lastName,salary`. Storage or relation attributes can be passed.


### 例題
Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities.

You can apply this technique to:

- Dataclasses (all or a collection of entities in a dataclass)
- Specific entities
- Entity sets

#### Dataclass Example

The following requests returns only the first name and last name from the People datastore class (either the entire datastore class or a selection of entities based on the search defined in `$filter`).

 `GET  /rest/People/firstName,lastName/`


**Result**:

````
{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````


`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

**Result**:

````
{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````


#### Entity Example
The following request returns only the first name and last name attributes from a specific entity in the People dataclass:

 `GET  /rest/People(3)/firstName,lastName/`

**Result**:

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
````


 `GET  /rest/People(3)/`

**Result**:

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"

}
````

#### Entity Set Example

Once you have [created an entity set](#creating-and-managing-entity-set), you can filter the information in it by defining which attributes to return:

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer


## Viewing an image attribute

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Saving a BLOB attribute to disk

If you want to save a BLOB stored in your dataclass, you can write the following:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`


## Retrieving only one entity

You can use the [`{dataClass}:{attribute}(value)`](%7BdataClass%7D.html#dataclassattributevalue) syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the dataclass's primary key. たとえば:

 `GET  /rest/Company:companyCode("Acme001")`
 
 
