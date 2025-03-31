---
id: entityset
title: "$entityset"
---

After [creating an entity set]($method.md#methodentityset) by using `$method=entityset`, you can then use it subsequently.

## Available syntaxes

|Syntax|Example|Description|
|---|---|---|
|[**$entityset/\{entitySetID\}**](#entitysetentitysetid)|`/People/$entityset/0ANUMBER`|Retrieves an existing entity set|
|[**$entityset/\{entitySetID\}?$operator...&$otherCollection**](#entitysetentitysetidoperatorothercollection)|`/Employee/$entityset/0ANUMBER?$logicOperator=AND &$otherCollection=C0ANUMBER`|Creates a new entity set from comparing existing entity sets|

## $entityset/\{entitySetID\}

Retrieves an existing entity set (*e.g.*, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)

### Description

This syntax allows you to execute any operation on a defined entity set.

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: [`$expand`]($expand.md), [`$filter`]($filter.md), [`$orderby`]($orderby.md), [`$skip`]($skip.md), and [`$top/$limit`]($top_$limit.md).

### Example  

After you create an entity set, the entity set ID is returned along with the data. You call this ID in the following manner:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`

## $entityset/\{entitySetID\}?$operator...&$otherCollection

Create another entity set based on previously created entity sets 

|Parameter|Type|Description |
|---|---|---|
|$operator |Text |One of the logical operators to test with the other entity set| 
|$otherCollection |  Text | Entity set ID |

### Description

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/\{entitySetID\}?$operator... &$otherCollection` syntax, the `$operator` property (whose values are shown below), and another entity set (entity set #2) defined by the `$otherCollection` property. The two entity sets must be in the same dataclass.

You can then create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

Here are the logical operators:

|Operator |Description|
|---|---|
|AND| Returns the entities in common to both entity sets|
|OR| Returns the entities in both entity sets|
|EXCEPT |Returns the entities in entity set #1 minus those in entity set #2|
|INTERSECT| Returns either true or false if there is an intersection of the entities in both entity sets (meaning that least one entity is common in both entity sets)|

>The logical operators are not case-sensitive, so you can write "AND" or "and".

Below is a representation of the logical operators based on two entity sets. The red section is what is returned.

**AND**

![](../assets/en/REST/and.png)

**OR**

![](../assets/en/REST/or.png)

**EXCEPT**

![](../assets/en/REST/except.png)

The syntax is as follows:

 `GET  /rest/dataClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

### Example  

In the example below, we return the entities that are in both entity sets since we are using the AND logical operator:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If we want to know if the two entity sets intersect, we can write the following:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If there is an intersection, this query returns true. Otherwise, it returns false.

In the following example we create a new entity set that combines all the entities in both entity sets:

`GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
