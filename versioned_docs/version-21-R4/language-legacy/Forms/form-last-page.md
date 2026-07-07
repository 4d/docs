---
id: form-last-page
title: FORM LAST PAGE
slug: /commands/form-last-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM LAST PAGE.Syntax-->**FORM LAST PAGE**<!-- END REF-->
<!--REF #_command_.FORM LAST PAGE.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Renamed|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.FORM LAST PAGE.Summary-->FORM LAST PAGE changes the currently displayed form page to the last form page.<!-- END REF--> If a form is not being displayed or loaded by the [FORM LOAD](../commands/form-load) command, or if the last form page is already displayed, FORM LAST PAGE does nothing.

## Example 

The following example is a one-line method called from a menu command. It displays the last form page:

```4d
 FORM LAST PAGE
```

## See also 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Properties

|  |  |
| --- | --- |
| Command number | 251 |
| Thread safe | no |



