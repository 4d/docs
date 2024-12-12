---
id: get-table-titles
title: GET TABLE TITLES
slug: /commands/get-table-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE TITLES.Syntax-->**GET TABLE TITLES** ( *tableTitles* ; *tableNums* )<!-- END REF-->
<!--REF #_command_.GET TABLE TITLES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableTitles | Text array | &#8592; | Current table names |
| tableNums | Array integer | &#8592; | Table numbers |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.GET TABLE TITLES.Summary-->The **GET TABLE TITLES** command fills the *tableTitles* and *tableNums* arrays with the names and numbers of database tables defined in the Structure window or using the [SET TABLE TITLES](set-table-titles.md) command.<!-- END REF--> The contents of these two arrays are synchronized.

If the [SET TABLE TITLES](set-table-titles.md) command is called during the session, **GET TABLE TITLES** only returns the “modified” names and table numbers defined using this command. 

Otherwise, **GET TABLE TITLES** returns the names of all database tables as defined in the Structure window. 

In both cases, the command does not return invisible tables. 

#### See also 

[GET FIELD TITLES](get-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  