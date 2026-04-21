---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *aField* : Field ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field to be evaluated |
| Function result | Boolean | &#8592; | True = field is NULL, False = field is not NULL |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.Is field value Null.Summary-->The Is field value Null command returns **True** if the field designated by the *aField* parameter contains the NULL value, and **False** otherwise.<!-- END REF-->

The NULL value is used by the SQL kernel of 4D. For more information, refer to the *4D SQL Reference* manual.

The value returned by this command is only meaningful if the "*Map NULL values to blank values*" option is not checked in the field definition of the Structure editor. Otherwise, it always returns **False**. 

**Note:** This command cannot be used with objects and object properties. Null values in object fields are handled through the [Null](../commands/null) command. 

## See also 

[Null](../commands/null)  
[SET FIELD VALUE NULL](../commands/set-field-value-null)  

## Properties

|  |  |
| --- | --- |
| Command number | 964 |
| Thread safe | yes |


