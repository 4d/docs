---
id: manData
title: データ操作
---

All [exposed dataclasses, attributes](configuration.md#exposing-tables-and-fields) and [functions](ClassFunctions.md) can be accessed through REST. データクラス、属性、および関数名については、文字の大小が区別されます。クエリのデータについては、文字の大小は区別されません。

## データのクエリ

To query data directly, you can do so using the [`$filter`]($filter.md) function. たとえば、"Smith" という名前の人を検索するには:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`

## エンティティの追加・編集・削除

REST API を使って、4D内と同等のデータ操作をおこなうことができます。

To add and modify entities, you can call [`$method=update`]($method.md#methodupdate). If you want to delete one or more entities, you can use [`$method=delete`]($method.md#methoddelete).

Besides retrieving a single entity in a dataclass using [{dataClass}({key})](dataClass.md#dataclasskey), you can also write a [class function](ClassFunctions.md#function-calls) that returns an entity selection (or a collection).

Before returning a selection, you can also sort it by using [`$orderby`]($orderby.md) one one or more attributes (even relation attributes).

## データのナビゲーション

Add the [`$skip`]($skip.md) (to define with which entity to start) and [`$top/$limit`]($top_$limit.md) (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities.

## エンティティセットの作成と管理

An entity set (aka _entity selection_) is a collection of entities obtained through a REST request that is stored in 4D Server's cache. エンティティセットを利用することで、同じ結果を得るためにアプリケーションを繰り返しクエリすることが避けられます。 エンティティセットへのアクセスはクエリするよりも速いため、アプリケーション速度の向上にもつながります。

To create an entity set, call [`$method=entityset`]($method.md#methodentityset) in your REST request. As a measure of security, you can also use [`$savedfilter`]($savedfilter.md) and/or [`$savedorderby`]($savedorderby.md) when you call [`$filter`]($filter.md) and/or [`$orderby`]($orderby.md) so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

To access the entity set, you must use `$entityset/{entitySetID}`, for example:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to [`$timeout`]($timeout.md). エンティティセットを使用するたびに、タイムアウトはデフォルト値または指定値にリセットされます。

If you want to remove an entity set from 4D Server's cache, you can use [`$method=release`]($method.md#methodrelease).

エンティティセット内のエンティティの属性値を編集すると、それらの値が更新されます。 ただし、エンティティセットの生成に使用したクエリ条件に合致する値から合致しない値に変更したとしても、そのエンティティはエンティティセットから削除されません。 エンティティを削除した場合には、エンティティセットからも削除されます。

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 エンティティセットが消えていた場合、再作成されるエンティティセットの内容は更新されたものです (新しくエンティティが追加されていたり、存在していたエンティティが削除されていたりする場合がありえます)。

Using [`$entityset/{entitySetID}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), you can combine two entity sets that you previously created. 両セットの内容を統合する (集合の和) ほか、共通のエンティティのみを返したり (集合の積) 、共通でないエンティティのみを返したり (集合の対称差) することができます。

A new selection of entities is returned; however, you can also create a new entity set by calling [`$method=entityset`]($method.md#methodentityset) at the end of the REST request.

## データの計算

By using [`$compute`]($compute.md), you can compute the **average**, **count**, **min**, **max**, or **sum** for a specific attribute in a dataclass. $all キーワードを使えば、全種の値を計算できます。

たとえば、一番高い給与を取得するには:

`/rest/Employee/salary/?$compute=max`

全種の値を計算して JSONオブジェクトとして返すには:

`/rest/Employee/salary/?$compute=$all`

## データモデルクラス関数の呼び出し

You can call ORDA Data Model [user class functions](ClassFunctions.md) through POST requests, so that you can benefit from the exposed API of the targeted application. For example, if you have defined a `getCity()` function in the City dataclass class, you could call it using the following request:

`/rest/City/getCity`

with data in the body of the request: `["Paris"]`

> RESTサービスとして公開された 4Dプロジェクトメソッドへの呼び出しは引き続きサポートされていますが、廃止予定となっています。

## 取得する属性の選択

You can always define which attributes to return in the REST response after an initial request by passing their path in the request (_e.g._, `Company(1)/name,revenues/`)

このフィルターは次の方法で適用できます:

| Object        | シンタックス                                                                                                                            | 例題                                                                              |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| データクラス        | {dataClass}/{att1,att2...}                                                        | /People/firstName,lastName                                                      |
| エンティティのコレクション | {dataClass}/{att1,att2...}/?$filter="{filter}"                                    | /People/firstName,lastName/?$filter="lastName='a@'"                |
| 特定のエンティティ     | {dataClass}({ID})/{att1,att2...}                               | /People(1)/firstName,lastName                                |
|               | {dataClass}:{attribute}(value)/{att1,att2...}/ | /People:firstName(Larry)/firstName,lastName/ |
| エンティティセレクション  | {dataClass}/{att1,att2...}/$entityset/{entitySetID}                               | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61                   |

The attributes must be delimited by a comma, _i.e._, `/Employee/firstName,lastName,salary`. ストレージ属性およびリレーション属性を渡すことができます。

### 例題

エンティティを取得する際に、レスポンスに含める属性を指定する例をいくつか紹介します。

この方法は次を対象に使用できます:

- データクラス (データクラスの全エンティティまたはエンティティのコレクション)
- 特定のエンティティ
- エンティティセット

#### データクラスの例

The following requests returns only the first name and last name from the People dataclass (either the entire dataclass or a selection of entities based on the search defined in `$filter`).

`GET  /rest/People/firstName,lastName/`

**結果**:

```
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
```

`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

**結果**:

```
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
```

#### 特定エンティティの例

次のリクエストは、People データクラスの特定エンティティについて、名字 (firstName) と名前 (lastName) 属性のみを取得します。

`GET  /rest/People(3)/firstName,lastName/`

**結果**:

```
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
```

`GET  /rest/People(3)/`

**結果**:

```
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
```

#### エンティティセットの例

Once you have [created an entity set](#creating-and-managing-entity-set), you can filter the information in it by defining which attributes to return:

`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`

## 画像属性の表示

画像属性の全体像を表示させるには、次のように書きます:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## BLOB属性のディスク保存

データクラスに保存されている BLOB をディスクに保存するには、次のように書きます:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`

## 1件のエンティティの取得

You can use the [`{dataClass}:{attribute}(value)`](%7BdataClass%7D.html#dataclassattributevalue) syntax when you want to retrieve only one entity. これは、データクラスの主キーに基づかないリレーション検索をしたい場合に便利です。 たとえば:

`GET  /rest/Company:companyCode("Acme001")`
