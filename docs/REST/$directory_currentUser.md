---
id: directory_currentUser
title: $directory/currentUser
---

Returns information about the current user


## Description   
By calling `$directory/currentUser` after a user has logged in, you can retrieve the following information:

|Property|Type|Description|
|---|---|---|
|userName|	String|	Username used to log into the application.|
|fullName|	String|	Full name of the user.|
|ID|	String|	UUID referencing the user.|


## Example  
 Call `$directory/currentUser` to find out the current user of your application.

`GET  /rest/$directory/currentUser`

**Result**:

````
{
    "result": {
        "userName": "jsmith", 
        "fullName": "John Smith", 
        "ID": "12F169764253481E89F0E4EA8C1D791A"
    }
}
````


If no user has been logged in, the result is:

````
{
    "result": null
}
````
