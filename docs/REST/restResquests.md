---
id: REST_requests
title: About REST Requests
---

Using standard HTTP requests, the 4D REST API allows you to retrieve information about the datastore classes in your project, manipulate data, log into your web application, and much more. 


The structure for a REST request is as follows:

|URI	|Resource	|{Subresource}|	Querystring|
|---|---|---|---|
|http://{servername}:{port}/rest/	|[{datastoreClass}](#datastoreclass)/|	[{attribute1, attribute2, ...}](#attribute1-attribute2-)/	| | 
| |[{datastoreClass}({key})](#datastoreclass-key)/|	[{attribute1, attribute2, ...}](#attribute1-attribute2-)/	| |  
| |[{datastoreClass}](#datastoreclass)/|	[{attribute1, attribute2, ...}](#attribute1-attribute2-)/|	[{method}](#datastoreclass-method)|
| | | |[$entityset/{entitySetID}](#entityset-entitysetid)|
| | | |[?$filter](#filter)|
| |[{datastoreClass}:{attribute}(value)](#datastoreclass-attribute-value)| | |

While all REST requests must contain the URI and Resource parameters, the Subresource (which filters the data returned) is optional.

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. For example:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

>You can place all values in quotes in case of ambiguity. For example, in our above example, we could've put the value for the last name in quotes "Jones".

The parameters in this chapter allow you to manipulate data in datastore classes in your 4D project. Besides retrieving data, you can also add, update, and delete entities in a datastore class.

If you want the data to be returned in an array instead of JSON, use the `$asArray` parameter.


## REST Status and Response  
With each REST request, the server returns the status and a response (with or without an error).

### Request Status  
With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:

|Status|Description|
|---|---|
|0	|Request not processed (server might not be started).|
|200 OK	|Request processed without error.|
|401 Unauthorized	|Permissions error (check user's permissions).|
|404 Not Found	|The datastore class is not accessible via REST ("Public on Server" as scope) or the entity set doesn't exist.|
|500 Internal Server Error	|Error processing the REST request.|

### Response  

The response (in JSON format) varies depending on the request.

If an error arises, it will be sent along with the response from the server or it will be the response from the server.

 

