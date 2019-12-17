---
id: catalog
title: $catalog 
---


Returns a list of the datastore classes in your project along with two URIs: one to access the information about its structure and one to retrieve the data in the datastore class	


## Description   
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

## Example  
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


