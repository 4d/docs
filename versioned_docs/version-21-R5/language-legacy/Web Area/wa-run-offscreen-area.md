---
id: wa-run-offscreen-area
title: WA Run offscreen area
slug: /commands/wa-run-offscreen-area
displayed_sidebar: docs
---

<!--REF #_command_.WA Run offscreen area.Syntax-->**WA Run offscreen area** ( *parameters* : Object ) : any<!-- END REF-->
<!--REF #_command_.WA Run offscreen area.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| parameters | Object | &#8594;  | Object containing the web area's attributes |
| Function result | any | &#8592; | .result property of the onEvent object, or Null if does not return a value |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|18 R6|Modified|
|18 R3|Created|

</details>
</div>

## Description 

<!--REF #_command_.WA Run offscreen area.Summary-->The **WA Run offscreen area** command creates a web area in memory which can be used to automatically load and parse web pages.<!-- END REF--> 

**Note:** This command uses the embedded web rendering engine. 

In *parameters* object, pass any of the following optional properties. These properties will be available through the [This](../commands/this) command within the *onEvent* method and reference the instance: 

| **Property**     | **Type**            | **Description**                                                                                                                                                                                                                                                                                                                           |
| ---------------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url              | text \| file object | The URL or file to be loaded in the web area. If omitted or null, a blank page is loaded.                                                                                                                                                                                                                                                 |
| area             | text                | The name of the web area. If omitted or null, a generic name is assigned (*e.g*., OffscreenArea1).                                                                                                                                                                                                                                        |
| onEvent          | object (formula)    | A callback method that will be launched when the web area is ready. It can be either:<br/> an *onEvent* function of a class, or a [Formula](../commands/formula) object  By default, the callback method is called on the On Load, On Unload, On End URL Loading, On URL Loading Error, or On Timer events.                                |
| autoQuit         | boolean             | True (default value) if the command must stop the formula execution when the On End URL Loading or On URL Loading Error events occur.<br/><br/>If false, you must use the [CANCEL](../commands/cancel) or [ACCEPT](../commands/accept) commands in the callback method or project methods called with the $4d object to close the web area. |
| timeout          | real                | Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60                                                                                                                                                                               |
| result           | mixed               | Result of the processing to be returned (if any)                                                                                                                                                                                                                                                                                          |
| <customProperty> | mixed               | Any custom attribute to be available in the callback or $4d method.                                                                                                                                                                                                                                                                       |

The following property is automatically added by the command if necessary:

| **Property**   | **Type** | **Description**                                        |
| -------------- | -------- | ------------------------------------------------------ |
| timeoutReached | boolean  | Added with **true** value if timeout has been exceeded |

  
If a null value is passed in *parameters*, a blank web area will be created and then automatically closed.

**Notes**: 

* The offscreen web area is only available during the execution of the **WA Run offscreen area** command. It will automatically be destroyed once execution has ended.
* 4D methods can be called from the JavaScript code executed in a web area. See *Accessing 4D methods*.

The following commands can be used in the callback method:

* [ACCEPT](../commands/accept)
* [CANCEL](../commands/cancel)
* [SET TIMER](../commands/set-timer)
* [WA Evaluate JavaScript](../commands/wa-evaluate-javascript)
* [WA EXECUTE JAVASCRIPT FUNCTION](../commands/wa-execute-javascript-function)
* [WA Get current URL](../commands/wa-get-current-url)
* [WA GET LAST URL ERROR](../commands/wa-get-last-url-error)
* [WA Get page content](../commands/wa-get-page-content)
* [WA Get page title](../commands/wa-get-page-title)
* [WA OPEN URL](../commands/wa-open-url)
* [WA REFRESH CURRENT URL](../commands/wa-refresh-current-url)
* [WA STOP LOADING URL](../commands/wa-stop-loading-url)

## Example 

You want to create and handle an offscreen web area using a function of your OffscreenArea class:

```4d
 $config:=cs.OffscreenArea.new()
 $result:=WA Run offscreen area($config)
 If($config.timeoutReached) //automatically returned in case of timeout
    ALERT("Timeout reached")
 End if
```

In the **OffscreenArea class**:

```4d
 Class constructor
 This.url:=File("/RESOURCES/compute.html")
 This.area:="myWAOffscreen"
 
 Function onEvent
 Case of
    :(FORM Event.code=On End URL Loading)
       This.result:=WA Evaluate JavaScript(*;This.area;"myJSMethod();")
 End case
```

## System variables and sets 

The OK system variable is set to 0 if the timeout has been reached or the [CANCEL](../commands/cancel) was called in *onEvent*, otherwise it is set to 1.

## See also 

[FORM Event](../commands/form-event)  
*[Web Area overview](../../FormObjects/webArea_overview.md)*  
[WA OPEN WEB INSPECTOR](../commands/wa-open-web-inspector)  

## Properties

|  |  |
| --- | --- |
| Command number | 1727 |
| Thread safe | no |
| Modifies variables | OK |



