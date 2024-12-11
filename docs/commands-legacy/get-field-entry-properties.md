---
id: get-field-entry-properties
title: GET FIELD ENTRY PROPERTIES
slug: /commands/get-field-entry-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Syntax-->**GET FIELD ENTRY PROPERTIES** ( fieldPtr|tableNum {; *fieldNum*}; *list* ; *mandatory* ; *nonEnterable* ; *nonModifiable* )<!-- END REF-->
<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldPtr&#124;tableNum | Pointer, Longint | &#8594;  | Field pointer or table number |
| fieldNum | Integer | &#8594;  | Field number if the table number is passed as first parameter |
| list | Text | &#8592; | Associated choice list name or empty string |
| mandatory | Boolean | &#8592; | True = Mandatory, False = Optional |
| nonEnterable | Boolean | &#8592; | True = Non-enterable, False = Enterable |
| nonModifiable | Boolean | &#8592; | True = Non-modifiable, False = Modifiable |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Summary-->The GET FIELD ENTRY PROPERTIES command returns the data entry properties for the field specified by *tableNum* and *fieldNum* or by *fieldPtr*.<!-- END REF-->  
You can either pass:

* table and field numbers in *tableNum* and *fieldNum*, or
* a pointer to the field in *fieldPtr*.

**Note:** This command returns the properties defined at the structure window level. Similar properties can be defined at the form level.

Once the command has been executed:

* The *list* parameter returns the choice list name associated to the field (if any). A list can be associated to the following field types: String, Text, Real, Integer, Long Integer, Date, Time and Boolean.  
If there is no choice list associated to the field or if the field type is not suitable for a choice list, an empty string is returned ("").
* The *mandatory* parameter returns True if the field is “Mandatory”; else False. The Mandatory attribute can be set for all field types, except for BLOB.
* The *nonEnterable* parameter returns True if the field is “Non-enterable”, else False. A non-enterable field can only be read, no data can be entered. The non-enterable attribute can be set for all field types, except for BLOB.
* The *nonModifiable* parameter returns True if the field is “Non-modifiable”, else False. A non-modifiable field can be entered just once and cannot be modified anymore. The Non-modifiable attribute can be set for all field types, except for BLOB.

#### See also 

[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 685 |
| Thread safe | &check; |
| Forbidden on the server ||


