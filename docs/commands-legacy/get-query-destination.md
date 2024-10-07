---
id: get-query-destination
title: GET QUERY DESTINATION
slug: /commands/get-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.GET QUERY DESTINATION.Syntax-->**GET QUERY DESTINATION** ( *destinationType* ; *destinationObject* ; *destinationPtr* )<!-- END REF-->
<!--REF #_command_.GET QUERY DESTINATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| destinationType | Integer | &#x1F858; | 0=current selection, 1=set, 2=named selection, 3=variable |
| destinationObject | Text | &#x1F858; | Name of the set or Name of the named selection or Empty string |
| destinationPtr | Pointer | &#x1F858; | Pointer to local variable if destinationType=3 |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET QUERY DESTINATION.Summary-->The **GET QUERY DESTINATION** command returns the current destination of query results for the process underway.<!-- END REF--> By default, query results modify the current selection, but you can change this using the [SET QUERY DESTINATION](set-query-destination.md) command.

In the *destinationType* parameter, 4D returns a value indicating the current destination of queries and in the *destinationObject* parameter it returns the name of the destination (if applicable). You can compare the value of the *destinationType* parameter with the constants of the *Queries* theme:

| Constant               | Type    | Value |
| ---------------------- | ------- | ----- |
| Into current selection | Longint | 0     |
| Into named selection   | Longint | 2     |
| Into set               | Longint | 1     |
| Into variable          | Longint | 3     |

The value returned in the *destinationObject* parameter depends on the value of the *destinationType* parameter:

| **destinationType parameter** | **destinationObject parameter**                                             |
| ----------------------------- | --------------------------------------------------------------------------- |
| 0 (current selection )        | *destinationObject* is an empty string                                      |
| 1 (set)                       | *destinationObject* contains the name of the set                            |
| 2 (named selection )          | *destinationObject* contains the name of the selection                      |
| 3 (variable)                  | *destinationObject* is an empty string (use the *destinationPtr* parameter) |

 When the query destination is a local variable (*destinationType* returns 3), 4D returns a pointer to this variable in the *destinationPtr* parameter.

#### Example 

We want to modify the query destination temporarily and then restore the previous parameters:

```4d
 GET QUERY DESTINATION($vType;$vName;$ptr)
  //retrieval of current parameters
 SET QUERY DESTINATION(Into set;"$temp")
  //temporary modification of destination
 QUERY(...) //query
 SET QUERY DESTINATION($vType;$vName;$ptr)
  //restoring parameters
```

#### See also 

[SET QUERY DESTINATION](set-query-destination.md)  