---
id: savedfilter
title: $savedfilter 
---

Saves the filter defined by $filter when creating an entity set (*e.g.*, `$savedfilter="{filter}"`)	

## Description  
 
When you create an entity set, you can save the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling [`$method=release`]($method.md#methodrelease)).

You use `$savedfilter` to save the filter you defined when creating your entity set and then pass `$savedfilter` along with your call to retrieve the entity set each time.

If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

If you have used both `$savedfilter` and [`$savedorderby`]($savedorderby.md) in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

## Example  

In our example, we first call ``$savedfilter` with the initial call to create an entity set as shown below:

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Then, when you access your entity set, you write the following to ensure that the entity set is always valid:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`
