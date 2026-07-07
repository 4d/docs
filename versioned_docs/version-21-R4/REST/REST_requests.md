---
id: REST_requests
title: About REST Requests
---


The following structures are supported for REST requests:

|URI	|Resource (Input)| /? or &\{filter\} (Output)|
|---|---|---|
|http://{servername}:{port}/rest/	|[\{dataClass\}](dataClass.md)|[$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)...|
| |[\{dataClass\}](dataClass.md)/[$entityset/\{entitySetID\}]($entityset.md#entitysetentitysetid)|[$method=...]($method.md)|
| |[\{dataClass\}({key})](dataClass.md#dataclasskey)|[$attributes]($attributes.md)|
| |[\{dataClass\}:\{attribute\}(value)](dataClass.md#dataclassattributevalue)||

While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional.

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. For example:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

>You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: "lastName!='Jones'".

The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using `GET` HTTP methods, you can also add, update, and delete entities in a dataclass using `POST` HTTP methods.

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
|402 No session	|Maximum number of sessions has been reached.|
|404 Not Found	|The data class is not accessible via REST or the entity set doesn't exist.|
|500 Internal Server Error	|Error processing the REST request.|

### Response  

The response (in JSON format) varies depending on the request.

If an error arises, it will be sent along with the response from the server or it will be the response from the server.

 

