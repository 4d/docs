---
id: last-query-plan
title: Last query plan
slug: /commands/last-query-plan
displayed_sidebar: docs
---

<!--REF #_command_.Last query plan.Syntax-->**Last query plan** ( *descFormat* : Integer ) : Text<!-- END REF-->
<!--REF #_command_.Last query plan.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| descFormat | Integer | &#8594;  | Description format (Text or XML) |
| Function result | Text | &#8592; | Description of last executed query plan |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.Last query plan.Summary-->The **Last query plan** command returns the detailed internal description of the query plan for the last query carried out on the data.<!-- END REF--> For more information about query descriptions, please refer to the documentation of the [DESCRIBE QUERY EXECUTION](../commands/describe-query-execution) command. 

  
This command returns a significant value if the [DESCRIBE QUERY EXECUTION](../commands/describe-query-execution) command has been executed during the session. 

The description of the last query plan can be compared to the description of the actual path of the last query (obtained using the [Last query path](../commands/last-query-path) command) for optimization purposes.

## See also 

[DESCRIBE QUERY EXECUTION](../commands/describe-query-execution)  
[Last query path](../commands/last-query-path)  

## Properties

|  |  |
| --- | --- |
| Command number | 1046 |
| Thread safe | yes |


