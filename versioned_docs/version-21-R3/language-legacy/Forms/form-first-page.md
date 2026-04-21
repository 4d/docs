---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
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

<!--REF #_command_.FORM FIRST PAGE.Summary-->FORM FIRST PAGE changes the currently displayed form page to the first form page.<!-- END REF--> If no form is being displayed or loaded by the [FORM LOAD](../commands/form-load) command, or if the first form page is already displayed, FORM FIRST PAGE does nothing.

## Example 

The following example is a one-line method called from a menu command. It displays the first form page:

```4d
 FORM FIRST PAGE
```

## See also 

[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## Properties

|  |  |
| --- | --- |
| Command number | 250 |
| Thread safe | no |



