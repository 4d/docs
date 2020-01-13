---
id: timeout
title: $timeout 
---


Defines the number of seconds to save an entity set in 4D Server's cache (*e.g.*, `$timeout=1800`)	

## Description   

To define a timeout for an entity set that you create using [`$method=entityset`]($method.md#methodentityset), pass the number of seconds to `$timeout`. For example, if you want to set the timeout to 20 minutes, pass 1200. By default, the timeout is two (2) hours.

Once the timeout has been defined, each time an entity set is called upon (by using `$method=entityset`), the timeout is recalculated based on the current time and the timeout.

If an entity set is removed and then recreated using `$method=entityset` along with [`$savedfilter`]($savedfilter.md), the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

## Example  

In our entity set that we're creating, we define the timeout to 20 minutes:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`