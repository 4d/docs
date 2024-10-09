---
id: get-last-query-path
title: Get last query path
slug: /commands/get-last-query-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last query path.Syntax-->**Get last query path** ( *descFormat* ) -> Function result<!-- END REF-->
<!--REF #_command_.Get last query path.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| descFormat | Integer | &srarr; | Description format (Text or XML) |
| Function result | String | &larr; | Description of last executed query path |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get last query path.Summary-->The **Get last query path** command returns the detailed internal description of the actual path of the last query carried out on the data.<!-- END REF--> For more information about query descriptions, please refer to the documentation of the [DESCRIBE QUERY EXECUTION](describe-query-execution.md) command. 

This description is returned in Text or XML format depending on the value passed in the *descFormat* parameter. You can pass one of the following constants, found in the “*Queries*” theme: 

| Constant                   | Type    | Value |
| -------------------------- | ------- | ----- |
| Description in text format | Longint | 0     |
| Description in XML format  | Longint | 1     |

This command returns a significant value if the [DESCRIBE QUERY EXECUTION](describe-query-execution.md) command has been executed during the session. 

The description of the last query path can be compared to the description of the query plan provided for the last query (obtained using the [Get last query plan](get-last-query-plan.md) command) for optimization purposes.

#### See also 

[DESCRIBE QUERY EXECUTION](describe-query-execution.md)  
[Get last query plan](get-last-query-plan.md)  