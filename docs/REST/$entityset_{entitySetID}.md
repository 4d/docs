---
id: entityset_{entitySetID}
title: $entityset/{entitySetID} 
---


Retrieves an existing entity set (*e.g.*, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)


## Description   

After creating an entity set by using `$method=entityset`, you can then use it subsequently.

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: `$expand`, `$filter`, `$orderby`, `$skip`, and `$top/$limit`.

## Example  

After you create an entity set, the entity set ID is returned along with the data. You call this ID in the following manner:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`
