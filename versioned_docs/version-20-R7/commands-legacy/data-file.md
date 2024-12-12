---
id: data-file
title: Data file
slug: /commands/data-file
displayed_sidebar: docs
---

<!--REF #_command_.Data file.Syntax-->**Data file** {( *segment* )} : Text<!-- END REF-->
<!--REF #_command_.Data file.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| segment | Integer | &#8594;  | Obsolete, do not use |
| Function result | Text | &#8592; | Long name of the data file for the database |

<!-- END REF-->

#### Description 

<!--REF #_command_.Data file.Summary-->The Data file command returns the long name of the data file for the database with which you are currently working.<!-- END REF-->

Starting with version 11 of 4D, data segments are no longer supported. The *segment* parameter is now ignored and must no longer be used. 

*On Windows*  
If, for example, you are working with the database MyCDs located at \\DOCS\\MyCDs on the volume G, a call to **Data file** returns G:\\DOCS\\MyCDs\\MyCDs.4DD (provided that you accepted the default location and name proposed by 4D when you created the database).

*On Macintosh*  
If, for example, you are working with the database located in the folder Documents:MyCDsƒ: on the disk Macintosh HD, a call to **Data file** returns Macintosh HD:Documents:MyCDsƒ:MyCDs.data (provided that you accepted the default location and name proposed by 4D when you created the database).

**WARNING:** If you call this command from 4D in remote mode, only the name of the data file is returned, not the long name.

#### See also 

[Application file](application-file.md)  
[Structure file](structure-file.md)  