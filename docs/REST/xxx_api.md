---
id: apiUtilities
title: Utilities 
---


 
 

## ```$asArray```  		

Returns the result of a query in an array instead of JSON (*e.g.*, `$asArray=true`)

#### Description   

If you want to receive the response in an array, you just have to add `$asArray` to your REST request.

#### Usage  
Here is an example or how to receive the response in an array.

 `GET  /rest/Company/?$filter="name!=Acme"&$top=3&$asArray=true`

**Response**:

````
[
    {
        __KEY: {
            ID: 1,
            __STAMP: 3
        },
        ID: 1,
        name: "Apple",
        revenues: 500000,
        staff: {
            __COUNT: 1
        },
        country: "US"
    },
    {
        __KEY: {
            ID: 2,
            __STAMP: 3
        },
        ID: 2,
        name: "4D",
        revenues: 300000,
        staff: {
            __COUNT: 2
        },
        country: "France"
    },
    {
        __KEY: {
            ID: 3,
            __STAMP: 3
        },
        ID: 3,
        name: "Microsoft",
        revenues: 400000,
        staff: {
            __COUNT: 0
        },
        country: "US"
    }
]
````

The same data in its default JSON format:

````
{
    __entityModel: "Company",
    __COUNT: 7,
    __SENT: 3,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 3,
            ID: 1,
            name: "Apple",
            revenues: 500000,
            staff: {
                __deferred: {
                    uri: "http://127.0.0.1:8082/rest/Company(1)/staff?$expand=staff"
                }
            },
            country: "US"
        },
        {
            __KEY: "2",
            __STAMP: 3,
            ID: 2,
            name: "4D",
            revenues: 300000,
            staff: {
                __deferred: {
                    uri: "http://127.0.0.1:8082/rest/Company(2)/staff?$expand=staff"
                }
            },
            country: "France"
        },
        {
            __KEY: "3",
            __STAMP: 3,
            ID: 3,
            name: "Microsoft",
            revenues: 400000,
            staff: {
                __deferred: {
                    uri: "http://127.0.0.1:8082/rest/Company(3)/staff?$expand=staff"
                }
            },
            country: "US"
        }
    ]
}
````


### $atomic/$atonce 

>Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled. (*e.g.* `$atomic=true`)


#### Description   
When you have multiple actions together, you can use `$atomic/$atonce` to make sure that none of the actions are completed if one of them fails. You can use either `$atomic` or `$atonce`.

#### Example  
We call the following REST request in a transaction.

 `POST  /rest/Employee?$method=update&$atomic=true`

**POST data**:

````
[
{
    "__KEY": "1",
    "__STAMP": 5,
    "salary": 45000
},
{
    "__KEY": "2",
    "__STAMP": 10,
    "salary": 99000
}
]
````

We get the following error in the second entity and therefore the first entity is not saved either:

````
{
    "__ENTITIES": [
        {
            "__KEY": "1", 
            "__STAMP": 5, 
            "uri": "http://127.0.0.1:8081/rest/Employee(1)", 
            "ID": 1, 
            "firstName": "John", 
            "lastName": "Smith", 
            "fullName": "John Smith", 
            "gender": false, 
            "telephone": "4085551111", 
            "salary": 45000, 
            "employerName": "Adobe", 
            "employer": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)", 
                    "__KEY": "1"
                }
            }
        }, 
        {
            "__KEY": "2", 
            "__STAMP": 2, 
            "ID": 2, 
            "firstName": "Paula", 
            "lastName": "Miller", 
            "fullName": "Paula Miller", 
            "telephone": "4085559999", 
            "salary": 36000, 
            "employerName": "Adobe", 
            "employer": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)", 
                    "__KEY": "1"
                }
            }, 
            "__ERROR": [
                {
                    "message": "Value cannot be greater than 60000", 
                    "componentSignature": "dbmg", 
                    "errCode": 1569
                }, 
                {
                    "message": "Entity fails validation", 
                    "componentSignature": "dbmg", 
                    "errCode": 1570
                }, 
                {
                    "message": "The entity# 1 of the datastore class \"Employee\" cannot be saved", 
                    "componentSignature": "dbmg", 
                    "errCode": 1517
                }
            ]
        }
    ]
}
````


>Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the *timestamp (__STAMP)* was not modified either. If we reload the entity, we will see the previous value.



### $binary 

>Pass "true" to save the BLOB as a document (must also pass `$expand={blobAttributeName}`)

#### Description   

`$binary` allows you to save the BLOB as a document.  You must also use the `$expand` in conjunction with it.

When you make the following request:

 GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt

You will be asked where to save the BLOB to disk:

![](assets/en/REST/binary.png)



### $compute 

>Calculate on specific attributes (*e.g.*, `Employee/salary/?$compute=sum)` or in the case of an Object attribute (*e.g.*, Employee/objectAtt.property1/?$compute=sum)


 
#### Description   

This parameter allows you to do calculations on your data. 

If you want to perform a calculation on an attribute, you write the following:

 `GET  /rest/Employee/salary/?$compute=$all`

If you want to pass an Object attribute, you must pass one of its property. For example:

 `GET  /rest/Employee/objectAtt.property1/?$compute=$all`

You can use any of the following keywords:


|Keyword|	Description|
|---|---|
|$all|	A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String|
|average|	Get the average on a numerical attribute|
|count|	Get the total number in the collection or datastore class (in both cases you must specify an attribute)|
|min	|Get the minimum value on a numerical attribute or the lowest value in an attribute of type String|
|max|	Get the maximum value on a numerical attribute or the highest value in an attribute of type String|
|sum|	Get the sum on a numerical attribute|


#### Example  

If you want to get all the computations for an attribute of type Number, you can write:

 `GET  /rest/Employee/salary/?$compute=$all`

**Response**:

````
{
    "salary": {
        "count": 4,
        "sum": 335000,
        "average": 83750,
        "min": 70000,
        "max": 99000
    }
}
````

If you want to get all the computations for an attribute of type String, you can write:

 `GET  /rest/Employee/firstName/?$compute=$all`

**Response**:

````
{
    "salary": {
        "count": 4,
        "min": Anne,
        "max": Victor
    }
}
````

If you want to just get one calculation on an attribute, you can write the following:

 `GET  /rest/Employee/salary/?$compute=sum`

**Response**:

`235000`

If you want to perform a calculation on an Object attribute, you can write the following:

 `GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Response:

`45`  


### $distinct

>Returns the distinct values for a specific attribute in an array (*e.g.*, `Company/name?$filter="name=a*"&$distinct=true`)


#### Description   

`$distinct` allows you to return an array containing the distinct values for a query on a specific attribute. Only one attribute in the datastore class can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values.

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

#### Example  
In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":

 `GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

````
[
    "Adobe",
    "Apple"
]
````


### $entityset/{entitySetID} 

>Retrieves an existing entity set (*e.g.*, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)


#### Description   

After creating an entity set by using `$method=entityset`, you can then use it subsequently.

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: `$expand`, `$filter`, `$orderby`, `$skip`, and `$top/$limit`.

#### Example  

After you create an entity set, the entity set ID is returned along with the data. You call this ID in the following manner:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`
 
 
 
### $entityset/{entitySetID}?$logicOperator... &$otherCollection

|Parameter|		Type|		Description	|
|---|---|---|
|$logicOperator |		String	|	One of the logical operators to test with the other entity set|	
|$otherCollection |		String	|	Entity set ID	|
|$entityset/{entitySetID}?$logicOperator... &$otherCollection ||Create another entity set based on previously created entity set|


#### Description   

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/{entitySetID}?$logicOperator... &$otherCollection` syntax, the `$logicOperator` property (whose values are shown below), and another entity set (entity set #2) defined by calling the `$otherCollection` property. The two entity sets must be in the same datastore class.

You can also create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

Here are the logical operators:

|Operator	|Description|
|---|---|
|AND|	Returns the entities in common to both entity sets|
|OR|	Returns the entities in both entity sets|
|EXCEPT	|Returns the entities in entity set #1 minus those in entity set #2|
|INTERSECT|	Returns either true or false if there is an intersection of the entities in both entity sets (meaning that least one entity is common in both entity sets)|

>The logical operators are not case-sensitive, so you can write "AND" or "and".

Below is a representation of the logical operators based on two entity sets. The red section is what is returned.

**AND**

![](assets/en/REST/and.png)

**OR**

![](assets/en/REST/or.png)

**EXCEPT**

![](assets/en/REST/except.png)


The syntax is as follows:

 `GET  /rest/datastoreClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

#### Example  
In the example below, we return the entities that are in both entity sets since we are using the AND logical operator:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If we want to know if the two entity sets intersect, we can write the following:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If there is an intersection, this query returns true. Otherwise, it returns false.

In the following example we create a new entity set that combines all the entities in both entity sets:

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`


### $expand 

>Expands the relational attribute specified (*e.g.*, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`)<br>
or<br>
Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)


#### Description   

When you have relation attributes in a datastore class, you can use `$expand` to retrieve all the attributes for the related entity or entities.

You can apply `$expand` to an entity (*e.g.*, People(1)), an entity collection, or an entity set.

If you wan to sort the data retrieved for the relation attribute, you can use [#cmd id="900837"/].

#### Displaying data from the relation attribute  

If you want to expand a relation attribute that is in an entity set, you can use the following syntax:

` GET  /rest/Employee/$entityset/99B09793950D414A864E6E1F03F0B293?$expand=employer`

*employer* is the relation attribute that links the Company and Employee datastore classes.

#### Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to `$imageformat`. For more information about the version parameter, refer to `$version`.

#### Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your datastore class, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  
  
##### Example  

If we pass the following REST request for our Company datastore class (which has a relation attribute "staff"):

 `GET  /rest/Company(1)`

**Response**:

````
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__STAMP": 2,
    "ID": 1,
    "name": "Adobe",
    "address": null,
    "city": "San Jose",
    "country": "USA",
    "url": "http://www.adobe.com",
    "revenues": 500000,
    "staff": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
        }
    }
}
````

If we add the `$expand` to our request and specify the "staff" relation attribute:

 `GET  /rest/Company(1)/?$expand=staff`

**Response**:

````
{
    "__entityModel": "Company",
    "__KEY": "1",

    "__STAMP": 2,
    "ID": 1,
    "name": "Adobe",
    "address": null,
    "city": "San Jose",
    "country": "USA",
    "url": "http://www.adobe.com",
    "revenues": 500000,
    "staff": {
        "__COUNT": 2,
        "__SENT": 2,
        "__FIRST": 0,
        "__ENTITIES": [
            {
                "__KEY": "1",
                "__STAMP": 5,
                "ID": 1,
                "firstName": "John",
                "lastName": "Smith",
                "fullName": "John Smith",
                "telephone": "4085551111",
                "salary": 34000,
                "employer": {
                    "__deferred": {
                        "uri": "http://127.0.0.1:8081/rest/Company(1)",
                        "__KEY": "1"
                    }
                },
                "employerName": "Adobe"
            },
            {
                "__KEY": "2",
                "__STAMP": 2,
                "ID": 2,
                "firstName": "Paula",
                "lastName": "Miller",
                "fullName": "Paula Miller",
                "telephone": "4085559999",
                "salary": 36000,
                "employer": {
                    "__deferred": {
                        "uri": "http://127.0.0.1:8081/rest/Company(1)",
                        "__KEY": "1"
                    }
                },
                "employerName": "Adobe"
            }
        ]
    }
}
````


### $filter 

>Filters the data in a datastore class or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)


#### Description   

This parameter allows you to define the filter for your datastore class or method.

#### Using a simple filter

A filter is composed of the following elements:

`{attribute} {comparator =, !=, >, <...} {value}`

For example: `$filter="firstName=john AND salary>20000"` where firstName and salary are attributes in the Employee datastore class.

#### Using a complex filter

A more compex filter is composed of the following elements, which joins two queries:

`{attribute} {comparator =, !=, >, <...} {value} {conjunction AND/OR/EXCEPT} {attribute} {comparator =, !=, >, <...} {value}`


For example: `$filter="firstName=john AND salary>20000"` where firstName and salary are attributes in the Employee datastore class.

#### Using the params property

You can also use 4D's params property.

`{attribute} {comparator =, !=, >, <...} {placeholder} {conjunction AND/OR/EXCEPT} {attribute} {comparator =, !=, >, <...} {placeholder}&$params='["{value1}","{value2}"]"'`

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'"` where firstName and salary are attributes in the Employee datastore class.

For more information regarding how to query data in 4D, refer to **Defining Queries** (Client-side).


>When inserting quotes (') or double quotes ("), you must escape them using using their character code:
>
><li>Quotes ('):	\u0027
><li>Double quotes ("):	\u0022
  
For example, you can write the following when passing a value with a quote when using the params property:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`

If you pass the value directly, you can write the following:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

#### Attribute

If the attribute is in the same datastore class, you can just pass it directly (*i.e.*, firstName). However, if you want to query another datastore class, you must include the relation attribute name plus the attribute name (*i.e.*, employer.name). The attribute name is case-sensitive (*e.g.*, firstName is not equal to FirstName).

You can also query attributes of type Object by using dot-notation. For example, if you have an attribute whose name is "objAttribute" with the following structure:

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

You can search in the Object by writing the following:

` GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

#### Comparator 
 
The comparator must be one of the following values:

|Comparator	|Description|
|---|---|
|=	|equals to|
|!=	|not equal to|
|>	|greater than|
|>=	|greater than or equal to|
|<	|less than|
|<=	|less than or equal to|
|begin	|begins with|

Example  
In the following example, we look for all employees whose last name begins with a "J":

 GET  /rest/Employee?$filter="lastName begin j"

In this example, we search the Employee datastore class for all employees whose salary is greater than 20,000 and who do not work for a company named Acme:

 GET  /rest/Employee?$filter="salary>20000 AND employer.name!=acme"&$orderby="lastName,firstName"

In this example, we search the Person datastore class for all the people whose number property in the anotherobj attribute of type Object is greater than 50:

 GET  /rest/Person/?filter="anotherobj.mynum > 50"

Response:

![](assets/en/REST/filterComparator.png)

### $imageformat

>Defines which image format to use for retrieving images (*e.g.*, $imageformat=png)

#### Description

Define which format to use to display images. By default, the best format for the image will be chosen. You can, however, select one of the following formats:

|Type|	Description|
|---|---|
|GIF	|GIF format|
|PNG	|PNG format|
|JPEG|	JPEG format|
|TIFF|	TIFF format|
|best|	Best format based on the image|

Once you have defined the format, you must pass the image attribute to `$expand` to load the photo completely.

If there is no image to be loaded or the format doesn't allow the image to be loaded, the response will be empty.

#### Example

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

`GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`



### $method=delete

>Deletes the current entity, entity collection, or entity set (created through REST)

#### Description  
 
With `$method=delete`, you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, `$filter` or specifying one directly using `{datastoreClass}({key})` *(e.g.*, /Employee(22)).

You can also delete the entities in an entity set, by calling `$entityset/{entitySetID}`.

#### Example  
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



### $method=entityset 
   	
>Creates an entity set in 4D Server's cache based on the collection of entities defined in the REST request	

#### Description   

When you create a collection of entities in REST, you can also create an entity set that will be saved in 4D Server's cache. The entity set will have a reference number that you can pass to `$entityset/{entitySetID}` to access it. By default, it is valid for two hours; however, you can modify that amount of time by passing a value (in seconds) to $timeout.

If you have used `$savedfilter` and/or `$savedorderby` (in conjunction with `$filter` and/or `$orderby`) when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache.

#### Creating an Entity Set  

To create an entity set, which will be saved in 4D Server's cache for two hours, add `$method=entityset` at the end of your REST request:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset`

You can create an entity set that will be stored in 4D Server's cache for only ten minutes by passing a new timeout to `$timeout`:

 `GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

You can also save the filter and order by, by passing true to `$savedfilter` and `$savedorderby`.

>`$skip` and `$top/$limit` are not taken into consideration when saving an entity set.

After you create an entity set, the first element, `__ENTITYSET`, is added to the object returned and indicates the URI to use to access the entity set:

`__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`

#### Accessing an Entity Set  

To access the entity set, you must use `$entityset/{entitySetID}` with the following syntax:

 `GET  /rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`

#### Removing an Entity Set from Cache  

To remove an entity set from 4D Server's cache you must use `$method=release`:

 `GET  /rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF?$method=release`

#### Viewing the References to the Entity Sets  

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



### $method=release 
   	
>Releases an existing entity set stored in 4D Server's cache (*e.g.*, `$entityset/0AF4679A5C394746BFEB68D2162A19FF?$method=release`)	


#### Description  
 
You can release an entity set, which you created using `$method=entityset`, from 4D Server's cache.

#### Example  

Release an existing entity set:

` GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### Response:

If the request was successful, the following response is returned:

```
{
    "ok": true
}
If the entity set wasn't found, an error is returned:

{
    "__ERROR": [
        {
             "message": "Error code: 1802\nEntitySet  \"4C51204DD8184B65AC7D79F09A077F24\" cannot be found\ncomponent:  'dbmg'\ntask 22, name: 'HTTP connection handler'\n",
            "componentSignature": "dbmg",
            "errCode": 1802
        }
    ]
}
```



### $method=subentityset 
   	
>Creates an entity set in Wakanda Server's cache based on the collection of related entities defined in the REST request	

#### Description 
  
`$method=subentityset` allows you to sort the data returned by the relation attribute defined in the REST request.

To sort the data, you use the `$subOrderby` property. For each attribute, you specify the order as ASC (or asc) for ascending order and DESC (desc) for descending order. By default, the data is sorted in ascending order.

If you want to specify multiple attributes, you can delimit them with a comma, µ, `$subOrderby="lastName desc, firstName asc"`.

#### Usage 
 
If you want to retrieve only the related entities for a specific entity, you can make the following REST request where staff is the relation attribute in the Company datastore class linked to the Employee datastore class:

` GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

#### Response:

```
{
 
    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",
    "__entityModel": "Employee",
    "__COUNT": 2,
    "__SENT": 2,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "4",
            "__STAMP": 1,
            "ID": 4,
            "firstName": "Linda",
            "lastName": "Jones",
            "birthday": "1970-10-05T14:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        },
        {
            "__KEY": "1",
            "__STAMP": 3,
            "ID": 1,
            "firstName": "John",
            "lastName": "Smith",
            "birthday": "1985-11-01T15:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        }
    ]
 
}
```


### $method=update 

>Updates and/or creates one or more entities	

#### Description   

`$method=update` allows you to update and/or create one or more entities in a single **POST**. If you update and/or create one entity, it is done in an object with each property an attribute with its value, *e.g.*, `{ lastName: "Smith" }`. If you update and/or create multiple entities, you must create an array of objects.

To update an entity, you must pass the `__KEY` and `__STAMP` parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your **POST**.

All triggers, calculated attributes, and events are executed immediately when saving the entity to the server. The response contains all the data as it exists on the server.

You can also put these requests to create or update entities in a transaction by calling `$atomic/$atonce`. If any errors occur during data validation, none of the entities are saved. You can also use $method=validate to validate the entities before creating or updating them.

If a problem arises while adding or modifying an entity, an error will be returned to you with that information.

>Notes for specific attribute types:
>
>	*	**Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). If you have selected the Date only property for your Date attribute, the time zone and time (hour, minutes, and seconds) will be removed. In this case, you can also send the date in the format that it is returned to you dd!mm!yyyy (e.g., 05!10!2013).
>	*	**Booleans** are either true or false.
>	*	Uploaded files using $upload can be applied to an attribute of type Image or BLOB by passing the object returned in the following format { "ID": "D507BC03E613487E9B4C2F6A0512FE50"}

#### Example  

To update a specific entity, you use the following URL:

 `POST  /rest/Person/?$method=update`

POST data:

```
{
    __KEY: "340",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Miller"
}
```

The firstName and lastName attributes in the entity indicated above will be modified leaving all other attributes (except calculated ones based on these attributes) unchanged.

If you want to create an entity, you can POST the attributes using this URL:

 `POST  /rest/Person/?$method=update`

POST data:

```
{ 
    firstName: "John",
    lastName: "Smith"
}
```

You can also create and update multiple entities at the same time using the same URL above by passing multiple objects in an array to the POST:

 `POST  /rest/Person/?$method=update`

POST data:

```
[{ 
    "__KEY": "309",
    "__STAMP": 5,
    "ID": "309",
    "firstName": "Penelope",
    "lastName": "Miller"
}, { 
    "firstName": "Ann",
    "lastName": "Jones"
}]
```

Response:

When you add or modify an entity, it is returned to you with the attributes that were modified. For example, if you create the new employee above, the following will be returned:

```
{
    "__KEY": "622", 
    "__STAMP": 1, 
    "uri": "http://127.0.0.1:8081/rest/Employee(622)", 
    "ID": 622, 
    "firstName": "John", 
    "firstName": "Smith",
    "fullName": "John Smith"
}
```

>The only reason the fullName attribute is returned is because it is a calculated attribute based on both firstName and lastName.

If, for example, the stamp is not correct, the following error is returned:

```
{
    "__ENTITIES": [
        {
            "__KEY": "309", 
            "__STAMP": 1, 
            "ID": 309, 
            "firstName": "Betty", 
            "lastName": "Smith", 
            "fullName": "Betty Smith", 
            "__ERROR": [
                {
                    "message": "Given stamp does not match current one for record# 308 of table Employee", 
                    "componentSignature": "dbmg", 
                    "errCode": 1263
                }, 
                {
                    "message": "Cannot save record 308 in table Employee of database Widgets", 
                    "componentSignature": "dbmg", 
                    "errCode": 1046
                }, 
                {
                    "message": "The entity# 308 of the datastore class \"Employee\" cannot be saved", 
                    "componentSignature": "dbmg", 
                    "errCode": 1517
                }
            ]
        }, 
        {
            "__KEY": "612", 
            "__STAMP": 4, 
            "uri": "http://127.0.0.1:8081/rest/Employee(612)", 
            "ID": 612, 
            "firstName": "Ann", 
            "lastName": "Jones", 
            "fullName": "Ann Jones"
        }
    ]
}
```

If, for example, the user does not have the appropriate permissions to update an entity, the following error is returned:

```
{
    "__KEY": "2", 
    "__STAMP": 4, 
    "ID": 2, 
    "firstName": "Paula", 
    "lastName": "Miller", 
    "fullName": "Paula Miller", 
    "telephone": "408-555-5555", 
    "salary": 56000, 
    "employerName": "Adobe", 
    "employer": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)", 
            "__KEY": "1"
        }
    }, 
    "__ERROR": [
        {
            "message": "No permission to update for dataClass Employee", 
            "componentSignature": "dbmg", 
            "errCode": 1558
        }, 
        {
            "message": "The entity# 1 of the datastore class \"Employee\" cannot be saved", 
            "componentSignature": "dbmg", 
            "errCode": 1517
        }
    ]
}
```


### $method=validate  		

>Validates the request when adding and/or modifying entities	

#### Description   

Before actually saving a new or modified entity with `$method=update`, you can first try to validate the actions first with `$method=validate`.

#### Example  

In this example, we **POST** the following request to $method=validate:

 `POST  /rest/Employee/?$method=validate`

**POST data**:

```
[{
    "__KEY": "1",
    "__STAMP": 8,
    "firstName": "Pete",
    "lastName": "Jones",
    "salary": 75000
}, {
    "firstName": "Betty",
    "lastName": "Miller",
}]
```

**Response**:

If the request is successful, the following response is returned:

```
{
    "ok": true
}
```

Otherwise, you receive an error. In our case, we got an error because our salary field must be inferior to 60000:

```
{
    "__ENTITIES": [
        {
            "__ERROR": [
                {
                    "message": "Value cannot be greater than 60000", 
                    "componentSignature": "dbmg", 
                    "errCode": 1569
                }, 
                {
                    "message": "Entity fails validation", 
                    "componentSignature": "dbmg", 
                    "errCode": 1570
                }, 
                {
                    "message": "The new entity of the datastore class \"Employee\" cannot be saved", 
                    "componentSignature": "dbmg", 
                    "errCode": 1534
                }
            ]
        }
    ]
}
```



### $orderby 
   	
>Sorts the data returned by the attribute and sorting order defined (*e.g.*, `$orderby="lastName desc, salary asc"`)	

#### Description   

`$orderby` orders the entities returned by the REST request. For each attribute, you specify the order as ASC (or asc) for ascending order and DESC (desc) for descending order. By default, the data is sorted in ascending order. If you want to specify multiple attributes, you can delimit them with a comma, *e.g.*, `$orderby="lastName desc, firstName asc"`.

#### Example  

In this example, we retrieve entities and sort them at the same time:

 `GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

The example below sorts the entity set by lastName attribute in ascending order:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"`

**Result**:

```
{
    __entityModel: "Employee",
    __COUNT: 10,
    __SENT: 10,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith",
            salary: 90000
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary",
            salary: 80000
        },
// more entities
    ]
}
```

### $querypath 
   	
Returns the query as it was executed by 4D Server (*e.g.*, `$querypath=true`)	

#### Description   

`$querypath` returns the query as it was executed by 4D Server. If, for example, a part of the query passed returns no entities, the rest of the query is not executed. The query requested is optimized as you can see in this `$querypath`.

For more information about query paths, refer to the **queryPlan and queryPath** paragraph.

In the steps array, there is an object with the following properties defining the query executed:

|Property	|Type|	Description|
|---|---|---|
|description|	String	|Actual query executed or "AND" when there are multiple steps|
|time	|Number|	Number of milliseconds needed to execute the query|
|recordsfounds|	Number	|Number of records found|
|steps|	Array	|An array with an object defining the subsequent step of the query path|

#### Example  

If you passed the following query:

 `GET  /rest/Employee/$filter="employer.name=acme AND lastName=Jones"&$querypath=true`

And no entities were found, the following query path would be returned, if you write the following:

 GET  /rest/$querypath

**Respose**:

```
__queryPath: {
 
    steps: [
        {
            description: "AND",
            time: 0,
            recordsfounds: 0,
            steps: [
                {
                    description: "Join on Table : Company : People.employer = Company.ID",
                    time: 0,
                    recordsfounds: 0,
                    steps: [
                        {
                            steps: [
                                {
                                    description: "Company.name = acme",
                                    time: 0,
                                    recordsfounds: 0
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
 
}
```

If, on the other hand, the first query returns more than one entity, the second one will be executed. If we execute the following query:

 `GET  /rest/Employee/$filter="employer.name=a* AND lastName!=smith"&$querypath=true`

If at least one entity was found, the following query path would be returned, if you write the following:

 `GET  /rest/$querypath`

**Respose**:

```
"__queryPath": {
    "steps": [
        {
            "description": "AND",
            "time": 1,
            "recordsfounds": 4,
            "steps": [
                {
                    "description": "Join on Table : Company : Employee.employer = Company.ID",
                    "time": 1,
                    "recordsfounds": 4,
                    "steps": [
                        {
                            "steps": [
                                {
                                    "description": "Company.name LIKE a*",
                                    "time": 0,
                                    "recordsfounds": 2
                                }
                            ]
                        }
                    ]
                },
                {
                    "description": "Employee.lastName # smith",
                    "time": 0,
                    "recordsfounds": 4
                }
            ]
        }
    ]
}
```


### $queryplan 
   	
>Returns the query as it was passed to 4D Server (*e.g.*, `$queryplan=true`)	

#### Description   
$queryplan returns the query plan as it was passed to 4D Server. 

|Property	|Type|	Description|
|---|---|---|
|item	|String	|Actual query executed|
|subquery|	Array|	If there is a subquery, an additional object containing an item property (as the one above)|

For more information about query plans, refer to the **queryPlan and queryPath** paragraph.

#### Example  
If you pass the following query:

 `GET  /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true`

#### Response:

```
__queryPlan: {
    And: [
        {
            item: "Join on Table : Company : People.employer = Company.ID",
            subquery: [
                {
                    item: "Company.name = acme"
                }
            ]
        },
        {
            item: "People.lastName = Jones"
        }
    ]
}
```

### $savedfilter 
   	
>Saves the filter defined by $filter when creating an entity set (*e.g.*, `$savedfilter="{filter}"`)	

#### Description  
 
When you create an entity set, you can save the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling `$method=release`).

You use $savedfilter to save the filter you defined when creating your entity set and then pass `$savedfilter` along with your call to retrieve the entity set each time.

If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

If you have used both `$savedfilter` and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that.

#### Example  

In our example, we first call $savedfilter with the initial call to create an entity set as shown below:

` GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset`

Then, when you access your entity set, you write the following to ensure that the entity set is always valid:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"`


### $savedorderby 
   	
>Saves the order by defined by `$orderby` when creating an entity set (*e.g.*, `$savedorderby="{orderby}"`)	

#### Description   

When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling $method=release ).

You use `$savedorderby` to save the order you defined when creating your entity set, you then pass `$savedorderby` along with your call to retrieve the entity set each time.

If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. If you have used both `$savedfilter` and `$savedorderby` in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that.

#### Example  
You first call $savedorderby with the initial call to create an entity set:

 `GET  /rest/People/?$filter="lastName!=''"&$savedfilter="lastName!=''"&$orderby="salary"&$savedorderby="salary"&$method=entityset`

Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:

` GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=''"&$savedorderby="salary"`



### $skip 
   	
>Starts the entity defined by this number in the collection (*e.g.*, `$skip=10`)	

#### Description   

`$skip` defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10.

`$skip`  is generally used in conjunction with `$top/$limit` to navigate through an entity collection.

#### Example  

In the following example, we go to the 20th entity in our entity set:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20`


### $timeout 
   	
Defines the number of seconds to save an entity set in Wakanda Server's cache (*e.g.*, `$timeout=1800`)	

#### Description   

To define a timeout for an entity set that you create using `$method=entityset`, pass the number of seconds to `$timeout`. For example, if you want to set the timeout to 20 minutes, pass 1200. By default, the timeout is two (2) hours.

Once the timeout has been defined, each time an entity set is called upon (by using `$method=entityset`), the timeout is recalculated based on the current time and the timeout.

If an entity set is removed and then recreated using `$method=entityset` along with `$savedfilter`, the new default timeout is 10 minutes regardless of the timeout you defined when calling `$timeout`.

#### Example  

In our entity set that we're creating, we define the timeout to 20 minutes:

` GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200`

### $top/$limit 
   	
>Limits the number of entities to return (e.g., $top=50)	

#### Description   

`$top/$limit` defines the limit of entities to return. By default, the number is limited to 100 or to the value specified in the Default Top Size property for your datastore class (see **Datastore Class Properties**). You can use either keyword: `$top` or `$limit`.

When used in conjunction with `$skip`, you can navigate through the entity collection returned by the REST request.

#### Example  

In the following example, we request the next ten entities after the 20th entity:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10`
 
 
### $version 

>Image version number	

#### Description   

`$version` is the image's version number returned by the server. The version number, which is sent by the server, works around the browser's cache so that you are sure to retrieve the correct image.

The value of the image's version parameter is modified by the server.

#### Example  

The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:

 `GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo`