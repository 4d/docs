---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *set* : Text )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| set | Text | &#8594;  | Name of the set to clear from memory |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.CLEAR SET.Summary-->**CLEAR SET** clears *set* from memory and frees the memory used by *set*.<!-- END REF--> The command does not affect tables, selections, or records. To save a set before clearing it, use the [SAVE SET](../commands/save-set) command. Since sets use memory, it is good practice to clear them when they are no longer needed.

## Example 

See the example for [USE SET](../commands/use-set).

## See also 

[CREATE EMPTY SET](../commands/create-empty-set)  
[CREATE SET](../commands/create-set)  
[LOAD SET](../commands/load-set)  

## Properties

|  |  |
| --- | --- |
| Command number | 117 |
| Thread safe | yes |


