---
id: savedorderby
title: $savedorderby 
---

Saves the order by defined by `$orderby` when creating an entity set (*e.g.*, `$savedorderby="{orderby}"`)	

## Description   

When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

You use `$savedorderby` to save the order you defined when creating your entity set, you then pass `$savedorderby` along with your call to retrieve the entity set each time.

If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. If you have used both [`$savedfilter`]($savedfilter.md) and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

## Example  
You first call `$savedorderby` with the initial call to create an entity set:

 `GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`
