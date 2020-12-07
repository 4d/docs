---
id: manData
title: データ操作
---

REST によって、すべての [公開されているデータクラス、属性](configuration.md#テーブルやフィールドの公開)、そして [関数](classFunctions.md) にアクセスすることができます。 データクラス、属性、および関数名については、文字の大小が区別されます。クエリのデータについては、文字の大小は区別されません。

## データのクエリ

データを直接クエリするには [`$filter`]($filter.md) 関数を使います。 たとえば、"Smith" という名前の人を検索するには:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`




## エンティティの追加・編集・削除

REST API を使って、4D内と同等のデータ操作をおこなうことができます。

エンティティを追加・編集するには [`$method=update`]($method.md#methodupdate) を呼び出します。 1つ以上のエンティティを削除するには [`$method=delete`]($method.md#methoddelete) を使用します。

[{dataClass}({key})](%7BdataClass%7D.md#dataclasskey) でデータクラスのいちエンティティを取得する以外にも、エンティティセレクションやコレクションを返す [クラス関数](classFunctions.md#関数の呼び出し) を用意することもできます。

戻り値としてセレクションを返す前に、[`$orderby`]($orderby.md) を使って一つ以上の属性 (リレーション属性も可) を基準に並べ替えることもできます。


## データのナビゲーション

エンティティのコレクションをナビゲートするにあたっては、クエリやエンティティセレクションに次の RESTリクエストを追加することができます: [`$skip`]($skip.md) (開始エンティティの指定)、[`$top/$limit`]($top_$limit.md) (返されるエンティティ数の指定)。



## エンティティセットの作成と管理

エンティティセットとは、*エンティティセレクション* と同等の意味で、RESTリクエストによって取得され、4D Server のキャッシュに保存されるエンティティのコレクションのことです。 エンティティセットを利用することで、同じ結果を得るためにアプリケーションを繰り返しクエリすることが避けられます。 エンティティセットへのアクセスはクエリするよりも速いため、アプリケーション速度の向上にもつながります。

エンティティセットを作成するには、RESTリクエスト内で [`$method=entityset`]($method.md#methodentityset) を呼び出します。 エンティティセットがタイムアウトした場合やサーバーから削除されてしまった場合への安全対策として、[`$filter`]($filter.md) や [`$orderby`]($orderby.md) を呼び出す際に [`$savedfilter`]($savedfilter.md) および [`$savedorderby`]($savedorderby.md) を使用することで、以前と同じ ID で再取得することができます。

エンティティセットにアクセスするには、`$entityset/{entitySetID}` を使います。例:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`


デフォルトで、エンティティセットは 2時間保存されます。[`$timeout`]($timeout.md) に新しい値を渡すことで、タイムアウトを変更できます。 エンティティセットを使用するたびに、タイムアウトはデフォルト値または指定値にリセットされます。

4D Server のキャッシュからエンティティセットを削除したい場合には [`$method=release`]($method.md#methodrelease) を使います。

エンティティセット内のエンティティの属性値を編集すると、それらの値が更新されます。 ただし、エンティティセットの生成に使用したクエリ条件に合致する値から合致しない値に変更したとしても、そのエンティティはエンティティセットから削除されません。 エンティティを削除した場合には、エンティティセットからも削除されます。

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 エンティティセットが消えていた場合、再作成されるエンティティセットの内容は更新されたものです (新しくエンティティが追加されていたり、存在していたエンティティが削除されていたりする場合がありえます)。

[`$entityset/{entitySetID}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection) を使って、事前に作成した 2つのセンティティセットを統合できます。 両セットの内容を統合する (集合の和) ほか、共通のエンティティのみを返したり (集合の積) 、共通でないエンティティのみを返したり (集合の対称差) することができます。

この場合m新規のエンティティセレクションが返されます。RESTリクエストの最後に [`$method=entityset`]($method.md#methodentityset) を追加することで新規のエンティティセットを作成することもできます。



## データの計算

[`$compute`]($compute.md) を使って、データクラスの任意の属性について、**average**や **count**、**min**、**max**、**sum** といった計算がおこなえます。 $all キーワードを使えば、全種の値を計算できます。

たとえば、一番高い給与を取得するには:

`/rest/Employee/salary/?$compute=max`

全種の値を計算して JSONオブジェクトとして返すには:

`/rest/Employee/salary/?$compute=$all`


## データモデルクラス関数の呼び出し

POSTリクエストを使って、ORDAデータモデルの [ユーザークラス関数](classFunctions.md) を呼び出すことで、ターゲットアプリケーションの公開API を活用できます。 たとえば、City DataClassクラスに `getCity()` 関数を定義した場合、次のリクエストで呼び出すことができます:

`/rest/City/getCity`

with data in the body of the request: `["Paris"]`


> Calls to 4D project methods that are exposed as REST Service are still supported but are deprecated.


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

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`


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
 
 
