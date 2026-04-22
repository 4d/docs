---
id: set-field-value-null
title: SET FIELD VALUE NULL
slug: /commands/set-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD VALUE NULL.Syntax-->**SET FIELD VALUE NULL** ( *aField* : Field )<!-- END REF-->
<!--REF #_command_.SET FIELD VALUE NULL.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Field where NULL value is to be attributed |
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

<!--REF #_command_.SET FIELD VALUE NULL.Summary-->The SET FIELD VALUE NULL command assigns the NULL value to the field designated by the *aField* parameter.<!-- END REF-->

The NULL value is used by the SQL kernel of 4D. For more information, please refer to the 4D SQL Reference manual.

**Notes:** 

* It is possible to disallow the Null value for 4D fields at the Structure editor level (see the Design Reference manual).
* **SET FIELD VALUE NULL** erases the contents of object fields.

## See also 

[Is field value Null](../commands/is-field-value-null)  
[Null](../commands/null)  

## Properties

|  |  |
| --- | --- |
| Command number | 965 |
| Thread safe | yes |


