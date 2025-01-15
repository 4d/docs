---
id: manData
title: データ操作
---

REST によって、すべての [公開されているデータクラス、属性](configuration.md#テーブルやフィールドの公開)、そして [関数](ClassFunctions.md) にアクセスすることができます。 データクラス、属性、および関数名については、文字の大小が区別されます。クエリのデータについては、文字の大小は区別されません。

## データのクエリ

データを直接クエリするには [`$filter`]($filter.md) 関数を使います。 たとえば、"Smith" という名前の人を検索するには:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`

## エンティティの追加・編集・削除

REST API を使って、4D内と同等のデータ操作をおこなうことができます。

エンティティを追加・編集するには [`$method=update`]($method.md#methodupdate) を呼び出します。 1つ以上のエンティティを削除するには [`$method=delete`]($method.md#methoddelete) を使用します。

[\{dataClass\}(\{key\})](dataClass.md#dataclasskey) でデータクラスのいちエンティティを取得する以外にも、エンティティセレクションやコレクションを返す [クラス関数](ClassFunctions.md#関数の呼び出し) を用意することもできます。

戻り値としてセレクションを返す前に、[`$orderby`]($orderby.md) を使って一つ以上の属性 (リレーション属性も可) を基準に並べ替えることもできます。

## データのナビゲーション

エンティティのコレクションをナビゲートするにあたっては、クエリやエンティティセレクションに次の RESTリクエストを追加することができます: [`$skip`]($skip.md) (開始エンティティの指定)、[`$top/$limit`]($top_$limit.md) (返されるエンティティ数の指定)。

## エンティティセットの作成と管理

エンティティセットとは、_エンティティセレクション_ と同等の意味で、RESTリクエストによって取得され、4D Server のキャッシュに保存されるエンティティのコレクションのことです。 エンティティセットを利用することで、同じ結果を得るためにアプリケーションを繰り返しクエリすることが避けられます。 エンティティセットへのアクセスはクエリするよりも速いため、アプリケーション速度の向上にもつながります。

エンティティセットを作成するには、RESTリクエスト内で [`$method=entityset`]($method.md#methodentityset) を呼び出します。 エンティティセットがタイムアウトした場合やサーバーから削除されてしまった場合への安全対策として、[`$filter`]($filter.md) や [`$orderby`]($orderby.md) を呼び出す際に [`$savedfilter`]($savedfilter.md) および [`$savedorderby`]($savedorderby.md) を使用することで、以前と同じ ID で再取得することができます。

エンティティセットにアクセスするには、`$entityset/\{entitySetID\}` を使います。例:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

デフォルトで、エンティティセットは 2時間保存されます。[`$timeout`]($timeout.md) に新しい値を渡すことで、タイムアウトを変更できます。 エンティティセットを使用するたびに、タイムアウトはデフォルト値または指定値にリセットされます。

4D Server のキャッシュからエンティティセットを削除したい場合には [`$method=release`]($method.md#methodrelease) を使います。

エンティティセット内のエンティティの属性値を編集すると、それらの値が更新されます。 ただし、エンティティセットの生成に使用したクエリ条件に合致する値から合致しない値に変更したとしても、そのエンティティはエンティティセットから削除されません。

エンティティを削除した場合には、エンティティセットからも削除されます。 しかし、デフォルトでは、参照は _undefined_ の値でエンティティセットに残り、エンティティセットの要素数として引き続き含まれます。 エンティティセットに対して[`$clean`]($clean.md) を呼び出すと、_undefined_ なエンティティ参照が含まれない、最新のエンティティセットを新規に作成できます。

4D Server のキャッシュからエンティティセットが消えていた場合、10分のデフォルトタイムアウトで再作成されます。 エンティティセットが消えていた場合、再作成されるエンティティセットの内容は更新されたものです (新しくエンティティが追加されていたり、存在していたエンティティが削除されていたりする場合がありえます)。

[`$entityset/\{entitySetID\}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection) を使って、事前に作成した 2つのセンティティセットを統合できます。 両セットの内容を統合する (集合の和) ほか、共通のエンティティのみを返したり (集合の積) 、共通でないエンティティのみを返したり (集合の対称差) することができます。

この場合m新規のエンティティセレクションが返されます。RESTリクエストの最後に [`$method=entityset`]($method.md#methodentityset) を追加することで新規のエンティティセットを作成することもできます。

## データの計算

[`$compute`]($compute.md) を使って、データクラスの任意の属性について、**average**や **count**、**min**、**max**、**sum** といった計算がおこなえます。 $all キーワードを使えば、全種の値を計算できます。

たとえば、一番高い給与を取得するには:

`/rest/Employee/salary/?$compute=max`

全種の値を計算して JSONオブジェクトとして返すには:

`/rest/Employee/salary/?$compute=$all`

## データモデルクラス関数の呼び出し

POSTリクエストを使って、ORDAデータモデルの [ユーザークラス関数](ClassFunctions.md) を呼び出すことで、ターゲットアプリケーションの公開API を活用できます。 たとえば、City DataClassクラスに `getCity()` 関数を定義した場合、次のリクエストで呼び出すことができます:

`/rest/City/getCity`

データはリクエストボディに含めます: `["Paris"]`

> RESTサービスとして公開された 4Dプロジェクトメソッドへの呼び出しは引き続きサポートされていますが、廃止予定となっています。

## 取得する属性の選択

RESTレスポンスにどの属性を含めて返してもらうかを指定するには、初期リクエストに属性のパスを追加します (_例_: `Company(1)/name,revenues/`)。

このフィルターは次の方法で適用できます:

| Object        | シンタックス                                                                                                                                    | 例題                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| データクラス        | \{dataClass\}/{att1,att2...}                                                            | /People/firstName,lastName                                                      |
| エンティティのコレクション | \{dataClass\}/{att1,att2...}/?$filter="{filter}"                                        | /People/firstName,lastName/?$filter="lastName='a@'"                |
| 特定のエンティティ     | \{dataClass\}({ID})/{att1,att2...}                                   | /People(1)/firstName,lastName                                |
|               | \{dataClass\}:\{attribute\}(value)/{att1,att2...}/ | /People:firstName(Larry)/firstName,lastName/ |
| エンティティセレクション  | \{dataClass\}/{att1,att2...}/$entityset/\{entitySetID\}                               | /People/firstName/$entityset/528BF90F10894915A4290158B4281E61                   |

属性名はコンマ区切りで渡します (_例_: `/Employee/firstName,lastName,salary`)。 ストレージ属性およびリレーション属性を渡すことができます。

### 例題

エンティティを取得する際に、レスポンスに含める属性を指定する例をいくつか紹介します。

この方法は次を対象に使用できます:

- データクラス (データクラスの全エンティティまたはエンティティのコレクション)
- 特定のエンティティ
- エンティティセット

#### データクラスの例

次のリクエストは、People データクラス (データクラス全体または `$filter` の定義に応じたエンティティセレクション) から名字 (firstName) と名前 (lastName) 属性のみを取得します。

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

[エンティティセットの作成](#エンティティセットの作成と管理) 後に、どの属性を返すかを指定して、エンティティセットの情報をフィルターできます:

`GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`

## 画像属性の表示

画像属性の全体像を表示させるには、次のように書きます:

`GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

画像形式についての詳細は [`$imageformat`]($imageformat.md) を参照ください。 パラメーターについての詳細は [`$version`]($version.md) を参照ください。

## BLOB属性のディスク保存

データクラスに保存されている BLOB をディスクに保存するには、次のように書きます:

`GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`

## 1件のエンティティの取得

エンティティを 1件のみ取得したい場合には [`\{dataClass\}:\{attribute\}(value)`](%7BdataClass%7D.html#dataclassattributevalue) シンタックスを利用できます。 これは、データクラスの主キーに基づかないリレーション検索をしたい場合に便利です。 たとえば:

`GET  /rest/Company:companyCode("Acme001")`
