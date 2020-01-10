---
id: method=delete
title: $method=delete 
---


Deletes the current entity, entity collection, or entity set (created through REST)

## Description  
 
With `$method=delete`, you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, `$filter` or specifying one directly using `{datastoreClass}({key})` *(e.g.*, /Employee(22)).

You can also delete the entities in an entity set, by calling `$entityset/{entitySetID}`.

## Example  
You can then write the following REST request to delete the entity whose key is 22:

 `POST  /rest/Employee(22)/?$method=delete`

You can also do a query as well using $filter:

 `POST  /rest/Employee?$filter="ID=11"&$method=delete`

You can also delete an entity set using $entityset/{entitySetID}:

 `POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

Response:

```
{
    "ok": true
}
```

