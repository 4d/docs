---
id: old-related-one
title: OLD RELATED ONE
slug: /commands/old-related-one
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED ONE.Syntax-->**OLD RELATED ONE** ( *aField* : Field )<!-- END REF-->
<!--REF #_command_.OLD RELATED ONE.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | Many field |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.OLD RELATED ONE.Summary-->**OLD RELATED ONE** operates the same way as [RELATE ONE](../commands/relate-one) does, except that **OLD RELATED ONE** uses the old value of *aField* to establish the relation.<!-- END REF-->

**Note:** **OLD RELATED ONE** uses the old value of the Many field as returned by the [Old](../commands/old) function. For more information, see the description of the [Old](../commands/old) command.

**OLD RELATED ONE** loads the record previously related to the current record. The fields in that record can then be accessed. If you want to modify this old related record and save it, you must call [SAVE RELATED ONE](../commands/save-related-one). Note that there is no old related record for a newly created record.

## System variables and sets 

If the command has been executed correctly and if the related records have been loaded, the OK system variable is set to 1\. If the user clicked on **Cancel** in the record selection dialog box (that appears when the related record has been modified), the OK variable is set to 0\. 

## See also 

[Old](../commands/old)  
[OLD RELATED MANY](../commands/old-related-many)  
[RELATE ONE](../commands/relate-one)  
[SAVE RELATED ONE](../commands/save-related-one)  

## Properties

|  |  |
| --- | --- |
| Command number | 44 |
| Thread safe | no |
| Modifies variables | OK |


