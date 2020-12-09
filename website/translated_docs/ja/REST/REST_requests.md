---
id: REST_requests
title: RESTリクエストについて
---


RESTリクエストでは次の構文がサポートされています:

| URI                              | リソース (入力)                                                                                           | /? または &{filter} (出力)                                                                                 |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| http://{servername}:{port}/rest/ | [{dataClass}](%7BdataClass%7D.html)                                                                 | [$filter]($filter.md), [$attributes]($attributes.md), [$skip]($skip.md), [$method=...]($method.md)... |
|                                  | [{dataClass}](%7BdataClass%7D.html)/[$entityset/{entitySetID}](entityset.html#entitysetentitysetid) | [$method=...]($method.md)                                                                             |
|                                  | [{dataClass}({key})](%7BdataClass%7D.html#dataclasskey)                                             | [$attributes]($attributes.md)                                                                         |
|                                  | [{dataClass}:{attribute}(value)](%7BdataClass%7D.html#dataclassattributevalue)                      |                                                                                                       |

RESTリクエストには、URI とリソースが必ず含まれていなければなりませんが、返されるデータをフィルダーする出力パラメーターの使用は任意です。

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. たとえば:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`
> You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: "lastName!='Jones'".

The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using `GET` HTTP methods, you can also add, update, and delete entities in a datastore class using `POST` HTTP methods.

If you want the data to be returned in an array instead of JSON, use the [`$asArray`]($asArray.md) parameter.


## REST Status and Response
With each REST request, the server returns the status and a response (with or without an error).

### Request Status
With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:

| Status                    | 説明                                                                         |
| ------------------------- | -------------------------------------------------------------------------- |
| 0                         | Request not processed (server might not be started).                       |
| 200 OK                    | Request processed without error.                                           |
| 401 Unauthorized          | Permissions error (check user's permissions).                              |
| 402 No session            | Maximum number of sessions has been reached.                               |
| 404 Not Found             | The data class is not accessible via REST or the entity set doesn't exist. |
| 500 Internal Server Error | Error processing the REST request.                                         |

### レスポンス

The response (in JSON format) varies depending on the request.

If an error arises, it will be sent along with the response from the server or it will be the response from the server.

 

