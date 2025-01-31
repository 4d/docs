---
id: get-relation-properties
title: GET RELATION PROPERTIES
slug: /commands/get-relation-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET RELATION PROPERTIES.Syntax-->**GET RELATION PROPERTIES** ( fieldPtr|tableNum {; *fieldNum*}; *oneTable* ; *oneField* {; *choiceField* {; *autoOne* {; *autoMany*}}} )<!-- END REF-->
<!--REF #_command_.GET RELATION PROPERTIES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldPtr&#124;tableNum | Pointer, Integer | &#8594;  | Field pointer or table number |
| fieldNum | Integer | &#8594;  | Field number if the table number is passed as first parameter |
| oneTable | Integer | &#8592; | One table number or 0 if no relation is defined from the field |
| oneField | Integer | &#8592; | One field number or 0 if no relation is defined from the field |
| choiceField | Integer | &#8592; | Choice field number or 0 if no choice field |
| autoOne | Boolean | &#8592; | True = Auto relate one, False = Manual relate one |
| autoMany | Boolean | &#8592; | True = Auto one to many, False = Manual one to many |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET RELATION PROPERTIES.Summary-->The GET RELATION PROPERTIES command returns the properties of the relation (if any) which starts from the source field defined by *tableNum* and *fieldNum* or by *fieldPtr*.<!-- END REF-->

You can pass:

* Either table and field numbers in *tableNum* and *fieldNum*,
* Or a pointer to the field in *fieldPtr*.

Once the command has been executed:

* The *oneTable* and *oneField* parameters contain respectively the table and field number to which the relation (from the source field) is pointing. If there is no relation starting from the field, these parameters return 0.
* The *choicefield* parameter contains the choice field number (from the target table) defined within this relation. If no choice field has been set for this relation, or if no relation starts from the source field, this parameter returns 0.
* The *autoOne* and *autoMany* parameters return **True** if, respectively, the “Auto Relate One” and “Auto One to Many” boxes has been checked for this relation; otherwise, they return **False**.

**Note:** The *autoOne* and *autoMany* parameters will also return **True** if no relation starts from the source field (in this case they return non-significant values). The value of both the *oneTable* and *oneField* parameters allows you to make sure that a relation exists. 

#### See also 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  
[SET FIELD RELATION](set-field-relation.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 686 |
| Thread safe | &check; |


