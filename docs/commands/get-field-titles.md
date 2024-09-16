---
id: get-field-titles
title: GET FIELD TITLES
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD TITLES.Syntax-->**GET FIELD TITLES** ( *aTable* ; *fieldTitles* ; *fieldNums* )<!-- END REF-->
<!--REF #_command_.GET FIELD TITLES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | -> | Table for which you want to find out the field names |
| fieldTitles | Text array | <-> | Current field names |
| fieldNums | Longint array | <-> | Field numbers |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET FIELD TITLES.Summary-->The **GET FIELD TITLES** command fills the *fieldTitles* and *fieldNums* arrays with the names and numbers of database fields for the desired *aTable*.<!-- END REF--> The contents of these two arrays are synchronized.

If the [SET FIELD TITLES](set-field-titles.md) command is called during the session, **GET FIELD TITLES** only returns the “modified” names and field numbers defined using this command.

Otherwise, **GET FIELD TITLES** returns the names of all database fields as defined in the Structure window. 

In both cases, the command does not return invisible fields. 

#### See also 
[GET TABLE TITLES](get-table-titles.md)  
[SET FIELD TITLES](set-field-titles.md)  