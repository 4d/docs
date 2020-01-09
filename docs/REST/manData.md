---
id: manData
title: Manipulating Data 
---


## Querying data  

To query data directly, you can do so using the [`$filter`]($filter.md) function. For example, to find a person named "Smith", you could write:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`


## Accessing Data  

All [exposed datastore classes, attributes](configuration.md#exposing-tables-and-fields) and methods can be accessed through REST. 

Dataclass, attribute, and method names are case-sensitive; however, the data for queries is not.


## Adding, Modifying, and Deleting Entities  

With the REST API, you can perform all the manipulations to data as you can in 4D.

To add and modify entities, you can call [`$method=update`]($method=update.md). Before saving data, you can also validate it beforehand by calling [`$method=validate`]($method=validate.md). If you want to delete one or more entities, you can use [`$method=delete`]($method=delete.md).

Besides retrieving one attribute in a dataclass using [{dataClass}({key})](%7BdataClass%7D_%7Bkey%7D.html), you can also write a method in your datastore class and call it to return an entity selection (or a collection) by using [{datastoreClass}/{method}](%7BdataClass%7D_%7Bmethod%7D.html).

Before returning the collection, you can also sort it by using [`$orderby`]($orderby.md) one one or more attributes (even relation attributes).


## Navigating Data  

Add the [`$skip`]($skip/md) (to define with which entity to start) and [`$top/$limit`](top_$limit.md) (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities.



## Creating and Managing Entity Set  

An entity set (aka *entity selection*) is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application.

To create an entity set, call [`$method=entityset`]($method=entityset.md) in your REST request. As a measure of security, you can also use [`$savedfilter`]($savedfilter.md) and/or [`$savedorderby`]($savedorderby.md) when you call [`$filter`]($filter.md) and/or [`$orderby`]($orderby.md) so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to [`$timeout`]($timeout.md). The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it.

If you want to remove an entity set from 4D Server's cache, you can use [`$method=release`]($method=release.md).

If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set.

If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

## Working with Entity Sets  

Using [`$entityset/{entitySetID}?$logicOperator... &$otherCollection`]($entityset_%7BentitySetID%7D_$logicOperator_&$otherCollection.html), you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two.

A new selection of entities is returned; however, you can also create a new entity set by calling [`$method=entityset`]($method=entityset.md) at the end of the REST request.


## Calculating Data  

By using [`$compute`]($compute.md), you can compute the **average**, **count**, **min**, **max**, or **sum** for a specific attribute in a dataclass. You can also compute all values with the $all keyword. 

For example, to get the highest salary:

`/rest/Employee/salary/?$compute=sum`

To compute all values and return a JSON object:

`/rest/Employee/salary/?$compute=$all`



## Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).


## Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your dataclass, you can write the following:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  

## Retrieving only one entity  

You can use the [`{dataClass}:{attribute}(value)`](%7BdataClass%7D%7Battribute%7D_value.html) syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the dataclass's primary key. For example, you can write:

 `GET  /rest/Company:companyCode("Acme001")`
 
 
