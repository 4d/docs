---
id: manData
title: Manipulating Data 
---


## Querying data  

To query data directly, you can do so using the `$filter` function. For more information regarding how to query data in 4D, refer to **Defining Queries** (Client-side).

## Accessing Data  

All datastore classes, datastore class methods, and attributes having a scope of **Public** can be accessed through REST. For more information regarding scope, refer to **Datastore Classes**, **Datastore Class Methods**, and **Attributes** sections of the **Data Model Editor** chapter.


All datastore class, datastore class method, and attribute names are case-sensitive; however, the data for queries is not.

If you have created a directory for your 4D project, you must also have proper permissions to access the datastore classes, datastore class methods, and attributes. For example, if you don't have permission to update data in a datastore class, you will not be able to modify any of the entities, however, you will be able to add new entities. To log into your 4D application, refer to the parameters described in Authenticating Users. For more information about creating a directory for your 4D project, refer to the section in the **Solution Explorer** chapter.

## Adding, Modifying, and Deleting Entities  

With the REST API, you can perform all the manipulations to data as you can in 4D.

To add and modify entities, you can call `$method=update`. Before saving data, you can also validate it beforehand by calling `$method=validate`. If you want to delete one or more entities, you can use `$method=delete`.

Besides retrieving one attribute in a datastore class using {datastoreClass}({key}), you can also write a method in your datastore class and call it to return a collection of entities (or an array) by using {datastoreClass}/{method}.

Before returning the collection, you can also sort it by using `$orderby` one one or more attributes (even relation attributes).

## Navigating Data  

Add the `$skip` (to define with which entity to start) and `$top/$limit` (to define how many entities to return) REST requests to your queries or entity sets to navigate the collection of entities.



## Creating and Managing Entity Sets  

An entity set is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application.

To create an entity set, call `$method=entityset` in your REST request. As a measure of security, you can also use `$savedfilter` and/or `$savedorderby` when you call $filter` and/or `$orderby` so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to `$timeout`. The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it.

If you want to remove an entity set from 4D Server's cache, you can use `$method=release`.

If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set.

If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

## Calculating Data  

By using `$compute`, you can compute the following items for a specific attribute in a datastore class:

|Keyword|	Description|
|---|---|
|$all|	A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String|
|average|	Get the average on a numerical attribute
|count|	Get the total number in the collection or datastore class (in both cases you must specify an attribute)|
|min|	Get the minimum value on a numerical attribute or the lowest value in an attribute of type String|
|max|	Get the maximum value on a numerical attribute or the highest value in an attribute of type String|
|sum	|Get the sum on a numerical attribute|


## Datastore class and attribute permissions  

To manipulate data using REST, the user must have the correct permissions not only for the datastore class, but also the individual attributes. For more information, refer to **Datastore Class Permissions** and **Attribute** permissions.

If the user does not have permission to read an attribute, there is no error, but the value will be null. If the user tries to update a value in an attribute without being in the group that has permission to update, an error is generated and the entire entity is not saved.


## Working with Entity Sets  

Using the `$entityset/{entitySetID}?$logicOperator... &$otherCollection`, you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two.

A new collection of entities is returned; however, you can also create a new entity set by calling `$method=entityset` at the end of the REST request.

## Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to `$imageformat`. For more information about the version parameter, refer to `$version`.


## Retrieving Date attributes  

When accessing a Date, it normally is returned in this format:

`2014-07-03T21:25:05Z`

If the **Date only** property has been selected, it will be returned as:

`3!7!2014`

For more information about the Date only property, refer to **Properties for Date Attributes**.


## Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your datastore class, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  
  
 

## Retrieving only one entity  

You can use the `{datastoreClass}:{attribute}(value)` syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the class's primary key. For example, you can write:

 `GET  /rest/Company:companyCode("Acme001")`
 
 
