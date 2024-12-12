---
id: last-query-plan
title: Last query plan
slug: /commands/last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Last query plan.Syntax-->**Last query plan** ( *descFormat* ) : Text<!-- END REF-->
<!--REF #_command_.Last query plan.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| descFormat | Integer | &#8594;  | Description format (Text or XML) |
| Function result | Text | &#8592; | Description of last executed query plan |

<!-- END REF-->

#### Description 

<!--REF #_command_.Last query plan.Summary-->The **Last query plan** command returns the detailed internal description of the query plan for the last query carried out on the data.<!-- END REF--> For more information about query descriptions, please refer to the documentation of the [DESCRIBE QUERY EXECUTION](describe-query-execution.md) command. 

This description is returned in Text or XML format depending on the value passed in the *descFormat* parameter. You can pass one of the following constants, found in the “*Queries*” theme: 

| Constant                   | Type    | Value |
| -------------------------- | ------- | ----- |
| Description in text format | Integer | 0     |
| Description in XML format  | Integer | 1     |
  
  
This command returns a significant value if the [DESCRIBE QUERY EXECUTION](describe-query-execution.md) command has been executed during the session. 

The description of the last query plan can be compared to the description of the actual path of the last query (obtained using the [Last query path](last-query-path.md) command) for optimization purposes.

#### See also 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Last query path](last-query-path.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1046 |
| Thread safe | &check; |


