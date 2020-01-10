---
id: method=entityset
title: $method=entityset 
---

Creates an entity set in 4D Server's cache based on the collection of entities defined in the REST request	

## Description   

When you create a collection of entities in REST, you can also create an entity set that will be saved in 4D Server's cache. The entity set will have a reference number that you can pass to `$entityset/{entitySetID}` to access it. By default, it is valid for two hours; however, you can modify that amount of time by passing a value (in seconds) to $timeout.

If you have used `$savedfilter` and/or `$savedorderby` (in conjunction with `$filter` and/or `$orderby`) when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache.

### Creating an Entity Set  

To create an entity set, which will be saved in 4D Server's cache for two hours, add `$method=entityset` at the end of your REST request:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset`

You can create an entity set that will be stored in 4D Server's cache for only ten minutes by passing a new timeout to `$timeout`:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

You can also save the filter and order by, by passing true to `$savedfilter` and `$savedorderby`.

>`$skip` and `$top/$limit` are not taken into consideration when saving an entity set.

After you create an entity set, the first element, `__ENTITYSET`, is added to the object returned and indicates the URI to use to access the entity set:

`__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`

### Accessing an Entity Set  

To access the entity set, you must use `$entityset/{entitySetID}` with the following syntax:

 `GET  /rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

### Removing an Entity Set from Cache  

To remove an entity set from 4D Server's cache you must use `$method=release`:

 `GET  /rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF?$method=release`

### Viewing the References to the Entity Sets  

When you call `$info`, the following information appears:

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
    ]
 
}
```

