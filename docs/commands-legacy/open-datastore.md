---
id: open-datastore
title: Open datastore
slug: /commands/open-datastore
displayed_sidebar: docs
---

<!--REF #_command_.Open datastore.Syntax-->**Open datastore** ( *connectionInfo* ; *localID* ) -> Function result<!-- END REF-->
<!--REF #_command_.Open datastore.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| connectionInfo | Object | &srarr; | Connection properties used to reach the remote datastore |
| localID | Text | &srarr; | Id to assign to the opened datastore on the local application (mandatory) |
| Function result | Object | &larr; | Datastore object |

<!-- END REF-->

#### Description 

<!--REF #_command_.Open datastore.Summary-->**Documentation moved**

The documentation for this command has been moved.<!-- END REF--> Visit *developer.4d.com* for updated documentation.

The **Open datastore** command connects the application to the 4D database identified by the *connectionInfo* parameter and returns a matching [datastore](# "Datastore reference object") object associated with the *localID* local alias. 

#### See also 

*4D Environment*  
[ds](ds.md)  