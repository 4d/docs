---
id: get-automatic-relations
title: GET AUTOMATIC RELATIONS
slug: /commands/get-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.GET AUTOMATIC RELATIONS.Syntax-->**GET AUTOMATIC RELATIONS** ( *one* : Boolean ; *many* : Boolean )<!-- END REF-->
<!--REF #_command_.GET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| one | Boolean | &#8592; | Status of all Many-to-One relations |
| many | Boolean | &#8592; | Status of all One-to-Many relations |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Created|

</details>
</div>

## Description 

<!--REF #_command_.GET AUTOMATIC RELATIONS.Summary-->The **GET AUTOMATIC RELATIONS** command lets you know if the automatic/manual status of all manual many-to-one and one-to-many relations of the database have been modified in the current process.<!-- END REF-->if a previous calll from the [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) command made all manual many-to-one relations automatic — for example, **[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")**(True;False).  
This parameter returns **False** if the [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) command has not been called or if its previous execution did not modify manual many-to-one relations — for example, **[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")**(False;False).
* *many*: This parameter returns **True** if a previous call from the [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) command made all manual one-to-many relations automatic — for example, **[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")**(True;True).  
This parameter returns **False** if the [SET AUTOMATIC RELATIONS](../commands/set-automatic-relations) command has not been called or if its previous execution did not modify manual one-to-many relations — for example, **[SET AUTOMATIC RELATIONS](set-automatic-relations.md "SET AUTOMATIC RELATIONS")**(True;False).

## Example 

Refer to the example of the [GET FIELD RELATION](../commands/get-field-relation) command. 

## See also 

[GET FIELD RELATION](../commands/get-field-relation)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SET AUTOMATIC RELATIONS](../commands/set-automatic-relations)  

## Properties

|  |  |
| --- | --- |
| Command number | 899 |
| Thread safe | yes |


