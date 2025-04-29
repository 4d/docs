---
id: skip
title: $skip 
---

Starts the entity defined by this number in the collection (*e.g.*, `$skip=10`)	


## Description   

`$skip` defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10.

`$skip`  is generally used in conjunction with [`$top/$limit`]($top_$limit.md) to navigate through an entity collection.

## Example  

In the following example, we go to the 20th entity in our entity set:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`