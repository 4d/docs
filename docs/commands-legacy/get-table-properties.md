---
id: get-table-properties
title: GET TABLE PROPERTIES
slug: /commands/get-table-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE PROPERTIES.Syntax-->**GET TABLE PROPERTIES** ( tablePtr|tableNum ; *invisible* {; *trigSaveNew* {; *trigSaveRec* {; *trigDelRec* {; *trigLoadRec*}}}} )<!-- END REF-->
<!--REF #_command_.GET TABLE PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tablePtr&#124;tableNum | Pointer, Longint | &#8594;  | Table pointer or Table number |
| invisible | Boolean | &#8592; | True = Invisible, False = Visible |
| trigSaveNew | Boolean | &#8592; | True = Trigger “On saving new record” activated; otherwise, False |
| trigSaveRec | Boolean | &#8592; | True = Trigger “On saving an existing record” activated; otherwise, False |
| trigDelRec | Boolean | &#8592; | True = Trigger “On deleting a record” activated; otherwise, False |
| trigLoadRec | Boolean | &#8592; | *** Do not use (obsolete) *** |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET TABLE PROPERTIES.Summary-->The GET TABLE PROPERTIES command returns the properties for the table passed in *tablePtr* or *tableNum*.<!-- END REF--> The table number or a pointer to the table can be passed as first parameter.

Once the command has been executed:

* The *invisible* parameter returns True if the “Invisible” attribute has been set for the table, else False. The Invisible attribute allows to hide the table when using 4D standard editors (label, charts...).
* The *trigSaveNew* parameter returns True if the “On saving new record” trigger has been set for the table, else False.
* The *trigSaveRec* parameter returns True if the “On saving an existing record” trigger has been set for the table, else False.
* The *trigDelRec* parameter returns True if the “On deleting a record” trigger has been set for this table, else false.

#### See also 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  