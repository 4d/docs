---
id: overview
title: Overview
---

Using standard HTTP requests, this API allows you to retrieve information about the datastore classes in your project, manipulate data, log into your web application, and much more. This manual is organized in three categories:

*	Authenticating Users
*	General Information
*	Manipulating Data

## [Authenticating Users](authUsers)  
In this section, you will find a list of the parameters you can use to log in/out users, return the name of the currently logged in user, and if the current user belongs to a specific group.

## [General Information](genInfo)  
In this section, you can use the parameters described here to obtain information about your project's active model as well as its datastore classes and the attributes in each one. You can also retrieve information about all the entity sets currently being stored in Wakanda Server's cache.

>If you have multiple models for your project, the active one is the one that has Active Model as its role. For more information, refer to the Contextual menus in the Solution Explorer section in the Solution Explorer chapter.

## Manipulating Data  
This section lists the parameters you can use to manipulate data in a datastore class. You can query, sort, add, update, and delete entities To optimize the accessing of data, Wakanda also allows you to create and access entity sets, which are stored in Wakanda Server's cache.

## REST Requests  
With each REST request, the server returns the status and a response (with or without an error).

#### Request Status  
With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:

|Status|Description|
|---|---|
|0	|Request not processed (server might not be started).|
|200 OK	|Request processed without error.|
|401 Unauthorized	|Permissions error (check user's permissions).|
|404 Not Found	|The datastore class is not accessible via REST ("Public on Server" as scope) or the entity set doesn't exist.|
|500 Internal Server Error	|Error processing the REST request.|

#### Response  

The response (in JSON format) varies depending on the request.

If an error arises, it will be sent along with the response from the server or it will be the response from the server.

 