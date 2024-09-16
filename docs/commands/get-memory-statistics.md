---
id: get-memory-statistics
title: GET MEMORY STATISTICS
displayed_sidebar: docs
---

<!--REF #_command_.GET MEMORY STATISTICS.Syntax-->**GET MEMORY STATISTICS** ( *infoType* ; *arrNames* ; *arrValues* ; *arrCount* )<!-- END REF-->
<!--REF #_command_.GET MEMORY STATISTICS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| infoType | Longint | -> | Type of requested info (always 1) |
| arrNames | Text array | <-> | Information titles |
| arrValues | Real array | <-> | Information values |
| arrCount | Real array | <-> | Number of objects concerned (if available) |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET MEMORY STATISTICS.Summary-->The **GET MEMORY STATISTICS** command recovers information related to the use of the data cache by 4D.<!-- END REF--> This information can be used to analyze the functioning of the application. 

The *infoType* parameter specifies the type of requested information. In current 4D versions, there is only one supported type (*infoType*\=1) 

After the command has been executed, the statistics are provided in the *arrNames*, *arrValues* and *arrCount* arrays. This information is also available via the Runtime Explorer: size of physical, virtual, free and used memory, stack memory and free stack memory, etc. For more information about advanced interpretation of this data, please contact your local Technical Service department.

#### See also 
[Cache info](cache-info.md)  