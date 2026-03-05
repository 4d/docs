---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
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

<!--REF #_command_.FORM NEXT PAGE.Summary-->FORM NEXT PAGE changes the currently displayed form page to the next form page.<!-- END REF--> If no form is being displayed or loaded by the [FORM LOAD](../commands/form-load) command, or if the last form page is already displayed, FORM NEXT PAGE does nothing.

## Example 

The following example is a one-line method called from a menu command. It displays the form page that follows the one currently displayed:

```4d
 FORM NEXT PAGE
```

## See also 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Properties

|  |  |
| --- | --- |
| Command number | 248 |
| Thread safe | no |



