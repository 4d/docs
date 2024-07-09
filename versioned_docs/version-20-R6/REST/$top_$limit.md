---
id: top_$limit
title: $top/$limit
---

Limits the number of entities to return (e.g., `$top=50`)	

## Description   

`$top/$limit` defines the limit of entities to return. By default, the number is limited to 100. You can use either keyword: `$top` or `$limit`.

When used in conjunction with [`$skip`]($skip.md), you can navigate through the entity selection returned by the REST request.

## Example  

In the following example, we request the next ten entities after the 20th entity:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`