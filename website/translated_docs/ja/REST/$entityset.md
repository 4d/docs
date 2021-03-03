---
id: entityset
title: '$entityset'
---

`$method=entityset` を使って [エンティティセットを作成]($method.md#methodentityset) すると、それを後で再利用することができます。


## 使用可能なシンタックス

| シンタックス                                                                                                     | 例題                                                                                 | 説明                                                           |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [**$entityset/{entitySetID}**](#entitysetentitySetID)                                                      | `/People/$entityset/0ANUMBER`                                                      | Retrieves an existing entity set                             |
| [**$entityset/{entitySetID}?$operator...&$otherCollection**](#entitysetentitysetidoperatorothercollection) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND &$otherCollection=C0ANUMBER` | Creates a new entity set from comparing existing entity sets |




## $entityset/{entitySetID}

既存のエンティティセットを取得します(*例*: `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)


### 説明

このシンタックスを使って、定義されたエンティティセットに対してあらゆる操作を実行できます。

エンティティセットには (デフォルトの、または `$timeout` で指定した) タイムリミットが設定されるため、`$savedfilter` や `$savedorderby` を使って、エンティティセットを作成する際に使用したフィルターや並べ替えの詳細を保存しておくこともできます。

4D Server のキャッシュに保存された既存のエンティティセットを取得する際に、次のいずれもエンティティセットに適用することができます: [`$expand`]($expand.md), [`$filter`]($filter), [`$orderby`]($orderby), [`$skip`]($skip.md), [`$top/$limit`]($top_$limit.md)。

### 例題

エンティティセットを作成すると、データとともにエンティティセットIDが返されます。 このIDは次のように使います:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`


## $entityset/{entitySetID}?$operator...&$otherCollection

複数の既存エンティティセットに基づいて新たなエンティティセットを作成します。

| 参照               | タイプ | 説明                        |
| ---------------- | --- | ------------------------- |
| $operator        | 文字列 | 既存のエンティティセットに対して使用する論理演算子 |
| $otherCollection | 文字列 | エンティティセットID               |



### 説明

`$method=entityset` を使ってエンティティセット (エンティティセット#1) を作成したあとで、`$entityset/{entitySetID}?$operator... &$otherCollection` シンタックスを使って新たなエンティティセットを作成できます。このとき、`$operator` に指定できる値は後述のとおりで、2つ目のエンティティセット (エンティティセット#2) は `$otherCollection` プロパティに指定します。 The two entity sets must be in the same dataclass.

このリクエストの結果を格納するエンティティセットを作成する場合は、RESTリクエストの最後に `$method=entityset` を追加します。

下記は、論理演算子の一覧です:

| 演算子       | 説明                                                                                                                                                         |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AND       | 両方のエンティティセットに共通して含まれるエンティティのみを返します。                                                                                                                        |
| OR        | 両エンティティセットのいずれか、あるいは両方に含まれているエンティティを返します。                                                                                                                  |
| EXCEPT    | エンティティセット#1 から、エンティティセット#2にも含まれているエンティティを除外した残りを返します。                                                                                                      |
| INTERSECT | Returns either true or false if there is an intersection of the entities in both entity sets (meaning that least one entity is common in both entity sets) |
> The logical operators are not case-sensitive, so you can write "AND" or "and".

Below is a representation of the logical operators based on two entity sets. The red section is what is returned.

**AND**

![](assets/en/REST/and.png)

**OR**

![](assets/en/REST/or.png)

**EXCEPT**

![](assets/en/REST/except.png)


The syntax is as follows:

 `GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### 例題
In the example below, we return the entities that are in both entity sets since we are using the AND logical operator:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If we want to know if the two entity sets intersect, we can write the following:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If there is an intersection, this query returns true. Otherwise, it returns false.

In the following example we create a new entity set that combines all the entities in both entity sets:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
