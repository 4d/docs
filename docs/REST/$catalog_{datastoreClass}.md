---
id: catalog_{datastoreClass}
title: $catalog/{datastoreClass} 
---

Returns information about a datastore class and its attributes 

## Description   
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

## Example  
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

