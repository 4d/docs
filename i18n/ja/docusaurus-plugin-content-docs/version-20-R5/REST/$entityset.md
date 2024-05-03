---
id: entityset
title: $entityset
---

After [creating an entity set]($method.md#methodentityset) by using `$method=entityset`, you can then use it subsequently.

## 使用可能なシンタックス

| シンタックス                                                                                                                                                                         | 例題                                                                             | 説明                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | --------------------------------- |
| [**$entityset/{entitySetID}**](#entitysetentitySetID)                                                                                                                          | `/People/$entityset/0ANUMBER`                                                  | 既存のエンティティセットを取得します                |
| [**$entityset/{entitySetID}?$operator...&$otherCollection**](#entitysetentitysetidoperatorothercollection) | `/Employee/$entityset/0ANUMBER?$logicOperator=AND &$otherCollection=C0ANUMBER` | 既存エンティティセットの比較から新規エンティティセットを作成します |

## $entityset/{entitySetID}

Retrieves an existing entity set (_e.g._, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)

### 説明

このシンタックスを使って、定義されたエンティティセットに対してあらゆる操作を実行できます。

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: [`$expand`]($expand.md), [`$filter`]($filter.md), [`$orderby`]($orderby.md), [`$skip`]($skip.md), and [`$top/$limit`]($top_$limit.md).

### 例題

エンティティセットを作成すると、データとともにエンティティセットIDが返されます。 このIDは次のように使います:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`

## $entityset/{entitySetID}?$operator...&$otherCollection

複数の既存エンティティセットに基づいて新たなエンティティセットを作成します。

| 引数               | タイプ    | 説明                        |
| ---------------- | ------ | ------------------------- |
| $operator        | String | 既存のエンティティセットに対して使用する論理演算子 |
| $otherCollection | String | エンティティセットID               |

### 説明

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/{entitySetID}?$operator... &$otherCollection` syntax, the `$operator` property (whose values are shown below), and another entity set (entity set #2) defined by the `$otherCollection` property. 2つのエンティティセットは同じデータクラスに属していなければなりません。

You can then create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

下記は、論理演算子の一覧です:

| 演算子       | 説明                                                     |
| --------- | ------------------------------------------------------ |
| AND       | 両方のエンティティセットに共通して含まれるエンティティのみを返します。                    |
| OR        | 両エンティティセットのいずれか、あるいは両方に含まれているエンティティを返します。              |
| EXCEPT    | エンティティセット#1 から、エンティティセット#2にも含まれているエンティティを除外した残りを返します。  |
| INTERSECT | 両方のエンティティセットに共通して含まれるエンティティがあれば true、なければ false を返します。 |

> 論理演算子の文字の大小は区別されないため、"AND" とも "and" とも書けます。

2つのエンティティセットを対象に論理演算子を使用した場合のベン図は下のとおりです。 赤く塗られた部分が返されるものです。

**AND**

![](../assets/en/REST/and.png)

**OR**

![](../assets/en/REST/or.png)

**EXCEPT**

![](../assets/en/REST/except.png)

シンタックスは次のとおりです:

`GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### 例題

次の例では AND論理演算子を使用するため、両方のエンティティセットに共通して含まれるエンティティが返されます:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

2つのエンティティセットが交差するかどうかを確認するには、次のように書きます:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

共通のエンティティが存在する場合、このクエリは true を返します。 それ以外の場合は false を返します。

次の例では、2つのエンティティセットのいずれかあるいは両方に含まれているエンティティすべてを格納した新しいエンティティセットを作成します:

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
