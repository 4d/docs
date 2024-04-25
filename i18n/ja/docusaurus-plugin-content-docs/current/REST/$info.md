---
id: info
title: $info
---

4D Server のキャッシュに保存されているエンティティセットおよびユーザーセッションの情報を返します。

## 説明

プロジェクトに対してこのリクエストを送信すると、次のプロパティに情報を取得します:

| プロパティ          | タイプ        | 説明                                 |
| -------------- | ---------- | ---------------------------------- |
| cacheSize      | Number     | 4D Server のキャッシュサイズ                |
| usedCache      | Number     | 4D Server のキャッシュ使用量                |
| entitySetCount | Number     | エンティティセットの数                        |
| entitySet      | Collection | 各エンティティセットの情報が格納されているオブジェクトのコレクション |
| ProgressInfo   | Collection | 進捗インジケーターの情報が格納されているコレクション         |
| sessionInfo    | Collection | 各ユーザーセッションの情報が格納されているオブジェクトのコレクション |

### entitySet

4D Server のキャッシュに保存されている各エンティティセットについて、次の情報が返されます:

| プロパティ         | タイプ     | 説明                                                                                                                                                                                                                |
| ------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id            | String  | エンティティセットを参照する UUID                                                                                                                                                                                               |
| dataClass     | String  | データクラスの名称。                                                                                                                                                                                                        |
| selectionSize | Number  | エンティティセットに含まれるエンティティの数                                                                                                                                                                                            |
| sorted        | Boolean | Returns true if the set was sorted (using `$orderby`) or false if it's not sorted.                                                                                             |
| refreshed     | 日付      | エンティティセットが最後に使用された日付または作成日。                                                                                                                                                                                       |
| expires       | 日付      | エンティティセットの有効期限 (エンティティセットが更新されるたびに、この日付/時間は変更されます)。 expires と refreshed の差がエンティティセットのタイムアウトです。 This value is either two hours by default or what you defined using `$timeout`. |

For information about how to create an entity selection, refer to `$method=entityset`. If you want to remove the entity selection from 4D Server's cache, use `$method=release`.

> 4D also creates its own entity selections for optimization purposes, so the ones you create with `$method=entityset` are not the only ones returned.

> **IMPORTANT**
> If your project is in **Controlled Admin Access Mode**, you must first log into the project as a user in the Admin group.

### sessionInfo

For each user session, the following information is returned in the _sessionInfo_ collection:

| プロパティ      | タイプ    | 説明                                                |
| ---------- | ------ | ------------------------------------------------- |
| sessionID  | String | セッションを参照する UUID                                   |
| userName   | String | セッションを実行中のユーザー名                                   |
| lifeTime   | Number | ユーザーセッションのタイムアウト (デフォルトは 3600) |
| expiration | 日付     | ユーザーセッションの有効期限                                    |

## 例題

4D Server のキャッシュに保存されているエンティティセットおよびユーザーセッションの情報を取得します。

`GET /rest/$info`

**結果**:

```
{
cacheSize: 209715200,
usedCache: 3136000,
entitySetCount: 4,
entitySet: [
    {
        id: "1418741678864021B56F8C6D77F2FC06",
        tableName: "Company",
        selectionSize: 1,
        sorted: false,
        refreshed: "2011-11-18T10:30:30Z",
        expires: "2011-11-18T10:35:30Z"
    },
    {
        id: "CAD79E5BF339462E85DA613754C05CC0",
        tableName: "People",
        selectionSize: 49,
        sorted: true,
        refreshed: "2011-11-18T10:28:43Z",
        expires: "2011-11-18T10:38:43Z"
    },
    {
        id: "F4514C59D6B642099764C15D2BF51624",
        tableName: "People",
        selectionSize: 37,
        sorted: false,
        refreshed: "2011-11-18T10:24:24Z",
        expires: "2011-11-18T12:24:24Z"
    }
],
ProgressInfo: [
    {
        UserInfo: "flushProgressIndicator",
        sessions: 0,
        percent: 0
    },
    {
        UserInfo: "indexProgressIndicator",
        sessions: 0,
        percent: 0
    }
],
sessionInfo: [ 
    {
        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",
        userID: "36713176D42DB045B01B8E650E8FA9C6",
        userName: "james",
        lifeTime: 3600,
        expiration: "2013-04-22T12:45:08Z"
    },
    {
        sessionID: "A85F253EDE90CA458940337BE2939F6F",
        userID: "00000000000000000000000000000000",
        userName: "default guest",
        lifeTime: 3600,
        expiration: "2013-04-23T10:30:25Z"
}
]
}
```

> エンティティセットに続く進捗インジケーターの情報は、4Dによって内部的に使用されます。
