---
id: genInfo
title: General Information 
---

The parameters in this section allow you to retrieve information about one or all of the datastore classes in your project's active model as well as the entity sets currently stored in 4D Server's cache.

For the `$catalog`, `$catalog/{datastoreClass}`, and `$catalog/$all` parameters, the user must be in a group that has **Describe** permissions. For more information, refer to **Permission Actions**.

You can also upload a file (either an image or a binary file) to the server by using [#cmd id="901487"/]. Afterwards, you can then save the file to an entity by using `$method=update`.


## $catalog  		

>Returns a list of the datastore classes in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the datastore class	


#### Description   
When you call `$catalog`, a list of the datastore classes is returned along with two URIs for each datastore class in your project's active model.

Only the datastore classes with the scope of **Public** are shown in this list for your project's active model. For more information on the **Scope** of a datastore class, please refer to the **Datastore Class Properties** section in the **Data Model Editor** chapter.

Here is a description of the properties returned for each datastore class in your project's active model:


|Property|	Type|	Description|
|---|---|---|
|name|	String|	Name of the datastore class.|
|uri|	String|	A URI allowing you to obtain information about the |datastore class and its attributes.|
|dataURI|	String|	A URI that allows you to view the data in the datastore class.|


The user must have describe access to view this information. For more information, refer to the **Model Permissions** (Model) and **Datastore Class Permissions** (Datastore class) sections. 

For more information, refer to Permission Actions.

#### Example  
Retrieve the list of datastore classes from your project.

`GET  /rest/$catalog`

**Result**:

````
{
    dataClasses: [
        {
            name: "Company",
            uri: "http://127.0.0.1:8081/rest/$catalog/Company",
            dataURI: "http://127.0.0.1:8081/rest/Company"
        },
        {
            name: "Employee",
            uri: "http://127.0.0.1:8081/rest/$catalog/Employee",
            dataURI: "http://127.0.0.1:8081/rest/Employee"
        }
    ]
}
````



## $catalog/{datastoreClass} 

>Returns information about a datastore class and its attributes 

#### Description   
Calling `$catalog/{datastoreClass}` for a specific datastore class will return the following information about the datastore class and the attributes it contains. If you want to retrieve this information for all the datastore classes in your project's active model, use `$catalog/$all`.

The information you retrieve concerns the following:

*	Datastore class
*	Attribute(s)
*	Primary key

The user must have describe access to view this information. For more information, refer to the **Model Permissions** (Model) and **Datastore Class Permissions** (Datastore class) sections. 

For more information, refer to **Permission Actions**.

### Datastore Class  

The following properties are returned for a datastore class:


|Property|	Type|	Description|
|---|---|---|
|name|	String|	Name of the datastore class
|collectionName	|String	|Collection name of the datastore class
|scope|	String|	Scope for the datastore class (note that only datastore classes whose **Scope** is public are displayed)
|dataURI|	String|	A URI to the data in the datastore class
|defaultTopSize|	Number|	The value entered in the **Default Top Size** property for the datastore class (if one was entered)
|extraProperties|	Object	|Information about the datastore class in the **Data Model Editor** (panel color, position, or if it is hidden or displayed)|

### Attribute(s)  

Here are the properties for each attribute that are returned:

|Property	|Type	|Description|
|---|---|---|
|name	|String	|Attribute name.|
|kind	|String	|Attribute type (storage, calculated, relatedEntity, and alias).|
|scope|	String	|Scope of the attribute (only those attributes whose scope is Public will appear).|
|indexed	|String|	If any **Index Kind** was selected, this property will return true. Otherwise, this property does not appear.|
|type|	String|	Attribute type (bool, blob, byte, date, duration, image, long, long64, number, string, uuid, or word) or the datastore class for a N->1 relation attribute.|
|minLength|	Number|	This property returns the value entered for the **Min Length** property, if one was entered.|
|maxLength	|Number|	This property returns the value entered for the **Max Length** property, if one was entered.|
|autoComplete	|Boolean|	This property returns True if the **Autocomplete** property was checked. Otherwise, this property does not appear.|
|identifying|	Boolean	|This property returns True if the **Identifying** property was checked. Otherwise, this property does not appear.|
|multiLine	|Boolean|	This property returns True if the **Multiline** property was checked. Otherwise, this property does not appear.
|path	|String	|For an alias attribute, the type is a path (*e.g.*, employer.name)|
|readOnly|	Boolean|	This property is True if the attribute is of type calculated or alias.|
|defaultFormat	|Object|	If you define a format for the attribute in the **Default Format** property, it will appear in the "format" property.|

>Only attributes whose scope is **Public** are returned in any REST request. In an extended datastore class, the attribute must also not be removed. For more information about removed attributes from an extended datastore class, refer to the chapter in the **Data Model Editor** chapter.

### Primary Key  

The key object returns the **name** of the attribute defined as the **Primary Key** for the datastore class.

For more information on the structure of a datastore class and its attributes, please refer to the **Datastore Classes** and **Attributes** sections in the **Data Model Editor** chapter.

#### Example  
You can retrieve the information regarding a specific datastore class.

`GET  /rest/$catalog/Employee`

**Result**:

````
{
    name: "Employee",
    className: "Employee",
    collectionName: "EmployeeCollection",
    scope: "public",
    dataURI: "http://127.0.0.1:8081/rest/Employee",
    defaultTopSize: 20,
    extraProperties: {
        panelColor: "#76923C",
        __CDATA: "\n\n\t\t\n",
        panel: {
            isOpen: "true",
            pathVisible: "true",
            __CDATA: "\n\n\t\t\t\n",
            position: {
                X: "394",
                Y: "42"
            }
        }
    },
    attributes: [
        {
            name: "ID",
            kind: "storage",
            scope: "public",
            indexed: true,
            type: "long",
            identifying: true
        },
        {
            name: "firstName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "lastName",
            kind: "storage",
            scope: "public",
            type: "string"
        },
        {
            name: "fullName",
            kind: "calculated",
            scope: "public",
            type: "string",
            readOnly: true
        },
        {
            name: "salary",
            kind: "storage",
            scope: "public",
            type: "number",
            defaultFormat: {
                format: "$###,###.00"
            }
        },
        {
            name: "photo",
            kind: "storage",
            scope: "public",
            type: "image"
        },
        {
            name: "employer",
            kind: "relatedEntity",
            scope: "public",
            type: "Company",
            path: "Company"
        },
        {
            name: "employerName",
            kind: "alias",
            scope: "public",
            type: "string",
            path: "employer.name",
            readOnly: true
        },
        {
            name: "description",
            kind: "storage",
            scope: "public",
            type: "string",
            multiLine: true
        },
   ],
    key: [
        {
            name: "ID"
        }
    ]
}
````


   	
## $catalog/$all  		

>Returns information about all of your project's datastore classes and their attributes	

#### Description   
Calling `$catalog/$all` allows you to receive detailed information about the attributes in each of the datastore classes in your project's active model. Remember that the scope for the datastore classes and their attributes must be **Public** for any information to be returned.

For more information about what is returned for each datastore class and its attributes, refer to `$catalog/{datastoreClass}`.

The user must have describe access to view this information. For more information, refer to the **Model Permissions** (Model) and **Datastore Class Permissions** (Datastore class) sections. 

For more information, refer to **Permission Actions**.

#### Example  

Retrieve information about all your project's datastore classes and their attributes.

`GET  /rest/$catalog/$all` 

**Result**:

````
{
 
    "dataClasses": [
        {
            "name": "Company",
            "className": "Company",
            "collectionName": "CompanyCollection",
            "scope": "public",
            "dataURI": "/rest/Company",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "name",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "revenues",
                    "kind": "storage",
                    "scope": "public",
                    "type": "number"
                },
                {
                    "name": "staff",
                    "kind": "relatedEntities",
                    "matchColumn": "employees,staff",
                    "scope": "public",
                    "type": "EmployeeCollection",
                    "reversePath": true,
                    "path": "employer"
                },
                {
                    "name": "url",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        },
        {
            "name": "Employee",
            "className": "Employee",
            "collectionName": "EmployeeCollection",
            "scope": "public",
            "dataURI": "/rest/Employee",
            "attributes": [
                {
                    "name": "ID",
                    "kind": "storage",
                    "scope": "public",
                    "indexed": true,
                    "type": "long",
                    "identifying": true
                },
                {
                    "name": "firstname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "lastname",
                    "kind": "storage",
                    "scope": "public",
                    "type": "string"
                },
                {
                    "name": "employer",
                    "kind": "relatedEntity",
                    "scope": "public",
                    "type": "Company",
                    "path": "Company"
                }
            ],
            "key": [
                {
                    "name": "ID"
                }
            ]
        }
    ]
}
````




## $info  		

>Returns information about the entity sets currently stored in 4D Server's cache as well as user sessions	

#### Description   
When you call this request for your project, you retrieve information in the following properties:

|Property|	Type|	Description|
|---|---|---|
|cacheSize|	Number	|Wakanda Server's cache size.|
|usedCache	|Number	|How much of Wakanda Server's cache has been used.|
|entitySetCount	|Number	|Number of entity sets.|
|entitySet	|Array|	An array in which each object contains information about each entity set.|
|ProgressInfo|	Array	|An array containing information about progress indicator information.|
|sessionInfo|	Array	|An array in which each object contains information about each user session.|
|jsContextInfo|	Array|	An array containing one object that returns the information about the JavaScript context pool.|

### entitySet  
For each entity set currently stored in 4D Server's cache, the following information is returned:


|Property|	Type|	Description|
|---|---|---|
|id|	String|	A UUID that references the entity set.|
|tableName	|String	|Name of the datastore class.|
|selectionSize|	Number|	Number of entities in the entity set.|
|sorted|	Boolean|	Returns true if the set was sorted (using `$orderby`) or false if it's not sorted.|
|refreshed	|Date|	When the entity set was created or the last time it was used.|
|expires|	Date|	When the entity set will expire (this date/time changes each time when the entity set is refreshed). The difference between refreshed and expires is the timeout for an entity set. This value is either two hours by default or what you defined using `$timeout`.

For information about how to create an entity set, refer to `$method=entityset`. If you want to remove the entity set from 4D Server's cache, use `$method=release`.

>4D also creates its own entity sets for optimization purposes, so the ones you create with `$method=entityset` are not the only ones returned.

>**IMPORTANT** <br>
>If your project is in **Controlled Admin Access Mode**, you must first log into the project as a user in the Admin group.

### sessionInfo  

For each user session, the following information is returned in the *sessionInfo* array:

|Property|	Type|	Description|
|---|---|---|
|sessionID	|String|	A UUID that references the session.|
|userID|	String|	A UUID that references the user who runs the session.|
|userName|	String|	The name of the user who runs the session.
|lifeTime	|Number	|The lifetime of a user session in seconds (3600 by default).|
|expiration	|Date	|The current expiration date and time of the user session.|

### jsContextInfo  

The object in the **jsContextInfo** array details the JavaScript context pool:


|Property|	Description|
|---|---|
|contextPoolSize|	Maximum number of reusable contexts that can be stored in the JS pool (50 by default)|
|activeDebugger|	Debugger state (false by default)|
|usedContextCount|	Number of used contexts|
|usedContextMaxCount|	Maximum number of contexts that have been used simultaneously|
|reusableContextCount|	Number of reusable contexts (both used and unused)|
|unusedContextCount	|Number of unused contexts|
|createdContextCount	|Number of contexts created since the project was started|
|destroyedContextCount|	Number of contexts destroyed since the project was started|

### Usage  

Retrieve information about the entity sets currently stored in 4D Server's cache as well as user sessions:

`GET  /rest/$info`

**Result**:

````
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
],
sessionInfo: [ 
    {
        sessionID: "6657ABBCEE7C3B4089C20D8995851E30",
        userID: "36713176D42DB045B01B8E650E8FA9C6",
        userName: "james",
        lifeTime: 3600,
        expiration: "2013-04-22T12:45:08Z"
    },
    {
        sessionID: "A85F253EDE90CA458940337BE2939F6F",
        userID: "00000000000000000000000000000000",
        userName: "default guest",
        lifeTime: 3600,
        expiration: "2013-04-23T10:30:25Z"
}
],
jsContextInfo: [
    {
        "contextPoolSize": 50,
        "activeDebugger": false,
        "usedContextCount": 1,
        "usedContextMaxCount": 1,
        "reusableContextCount": 1,
        "unusedContextCount": 0,
        "createdContextCount": 4,
        "destroyedContextCount": 3
    }
]
}
````


>The progress indicator information listed after the entity sets is used internally by 4D.




   	
