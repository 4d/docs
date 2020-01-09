---
id: REST_requests
title: About REST Requests
---


The structure for a REST request is as follows:

|URI	|Resource	|{Subresource}|	{Querystring}|
|---|---|---|---|
|http://{servername}:{port}/rest/	|[{dataClass}](%7BdataClass%7D.html)/|	[{attribute1, attribute2, ...}](%7Battribute1_attribute2%7D.html)/	| | 
| |[{dataClass}({key})](%7BdataClass%7D_%7Bkey%7D.html)/|	[{attribute1, attribute2, ...}](%7Battribute1_attribute2%7D.html)/	| |  
| |[{dataClass}](%7BdataClass%7D.html)/|	[{attribute1, attribute2, ...}](%7Battribute1_attribute2%7D.html)/|	[{method}](%7BdataClass%7D_%7Bmethod%7D.html)|
| | | |[$entityset/{entitySetID}](entityset_%7BentitySetID%7D.html)|
| | | |[?$filter]($filter.md)|
| |[{dataClass}:{attribute}(value)](%7BdataClass%7D%7Battribute%7D_value.html)| | |

While all REST requests must contain the URI and Resource parameters, the Subresource (which filters the data returned) is optional.

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. For example:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

>You can place all values in quotes in case of ambiguity. For example, in our above example, we could've put the value for the last name in quotes "Jones".

The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using `GET` HTTP methods, you can also add, update, and delete entities in a datastore class using `POST` HTTP methods.

If you want the data to be returned in an array instead of JSON, use the [`$asArray`]($asArray.md) parameter.


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

 

