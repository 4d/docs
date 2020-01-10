---
id: entityset{entitySetID}$logicOperator&$otherCollection
title: $entityset/{entitySetID}?$logicOperator...&$otherCollection 
---


|Parameter|		Type|		Description	|
|---|---|---|
|$logicOperator |		String	|	One of the logical operators to test with the other entity set|	
|$otherCollection |		String	|	Entity set ID	|
|$entityset/{entitySetID}?$logicOperator... &$otherCollection ||Create another entity set based on previously created entity set|


## Description   

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/{entitySetID}?$logicOperator... &$otherCollection` syntax, the `$logicOperator` property (whose values are shown below), and another entity set (entity set #2) defined by calling the `$otherCollection` property. The two entity sets must be in the same datastore class.

You can also create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

Here are the logical operators:

|Operator	|Description|
|---|---|
|AND|	Returns the entities in common to both entity sets|
|OR|	Returns the entities in both entity sets|
|EXCEPT	|Returns the entities in entity set #1 minus those in entity set #2|
|INTERSECT|	Returns either true or false if there is an intersection of the entities in both entity sets (meaning that least one entity is common in both entity sets)|

>The logical operators are not case-sensitive, so you can write "AND" or "and".

Below is a representation of the logical operators based on two entity sets. The red section is what is returned.

**AND**

![](assets/en/REST/and.png)

**OR**

![](assets/en/REST/or.png)

**EXCEPT**

![](assets/en/REST/except.png)


The syntax is as follows:

 `GET  /rest/datastoreClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

## Example  
In the example below, we return the entities that are in both entity sets since we are using the AND logical operator:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If we want to know if the two entity sets intersect, we can write the following:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If there is an intersection, this query returns true. Otherwise, it returns false.

In the following example we create a new entity set that combines all the entities in both entity sets:

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`
