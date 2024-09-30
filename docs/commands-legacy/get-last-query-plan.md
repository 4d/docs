---
id: get-last-query-plan
title: Get last query plan
slug: /commands/get-last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Get last query plan.Syntax-->**Get last query plan** ( *descFormat* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get last query plan.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| descFormat | Longint | &#x1F852; | Description format (Text or XML) |
| Function result | String | &#x1F850; | Description of last executed query plan |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get last query plan.Summary-->The **Get last query plan** command returns the detailed internal description of the query plan for the last query carried out on the data.<!-- END REF--> For more information about query descriptions, please refer to the documentation of the [DESCRIBE QUERY EXECUTION](describe-query-execution.md) command. 

This description is returned in Text or XML format depending on the value passed in the *descFormat* parameter. You can pass one of the following constants, found in the “*Queries*” theme: 

| Constant                   | Type    | Value |
| -------------------------- | ------- | ----- |
| Description in text format | Longint | 0     |
| Description in XML format  | Longint | 1     |
  
  
This command returns a significant value if the [DESCRIBE QUERY EXECUTION](describe-query-execution.md) command has been executed during the session. 

The description of the last query plan can be compared to the description of the actual path of the last query (obtained using the [Get last query path](get-last-query-path.md) command) for optimization purposes.

#### See also 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query path](get-last-query-path.md)  