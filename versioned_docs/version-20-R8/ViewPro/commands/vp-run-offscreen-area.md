---
id: vp-run-offscreen-area
title: VP Run offscreen area
---

<!-- REF #_method_.VP Run offscreen area.Syntax -->
**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->

<!-- REF #_method_.VP Run offscreen area.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|parameters   |Object|->|Object containing the offscreen area's attributes|
|Result   |Mixed|<-|`.result` property of the `.onEvent` object, or Null if does not return a value|<!-- END REF -->

#### Description

The `VP Run offscreen area` command <!-- REF #_method_.VP Run offscreen area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

|Property  |Type  |Description|
|---|---|---|
|area | text |The name of the offscreen area. If omitted or null, a generic name is assigned (e.g., "OffscreenArea1"). |
|onEvent | object (formula)| A callback method that will be launched when the offscreen area is ready. It can be either:<li>an `onEvent` function of a class, or</li><li>a `Formula` object</li>By default, the callback method is called on the [`On VP Ready`](../../Events/onVpReady.md), [`On Load`](../../Events/onLoad.md), [`On Unload`](../../Events/onUnload.md), [`On End URL Loading`](../../Events/onEndUrlLoading.md), [`On URL Loading Error`](../../Events/onUrlLoadingError.md), [`On VP Range Changed`](../../Events/onVpRangeChanged.md), or [`On Timer`](../../Events/onTimer.md) events. The callback method can be used to access the [4D View Pro form object variable](../configuring.md#4d-view-pro-form-object-variable).|
|autoQuit | boolean | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](../../Events/onEndUrlLoading.md) or [`On URL Loading Error`](../../Events/onUrlLoadingError.md) events occur. If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.|
|timeout | number | Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60 |
|result| mixed| Result of the processing (if any)|
|`<customProperty>` | mixed|  Any custom attribute to be available in the *onEvent* callback method. |


The following property is automatically added by the command if necessary:

|Property  |Type  |Description|
|---|---|---|
|timeoutReached| boolean|  Added with true value if timeout has been exceeded|

> The offscreen area is only available during the execution of the `VP Run offscreen area` command. It will automatically be destroyed once execution has ended.

The following commands can be used in the callback method:

* `ACCEPT`
* `CANCEL`
* `SET TIMER`
* `WA Evaluate JavaScript`
* `WA EXECUTE JAVASCRIPT FUNCTION`
  
#### Example 1

You want to create an offscreen 4D View Pro area and get the value of a cell:

```4d
// cs.OffscreenArea class declaration 
Class constructor ($path : Text)
 This.filePath:=$path
 
// This function will be called on each event of the offscreen area 
Function onEvent()
 Case of
  :(FORM Event.code=On VP Ready)
      VP IMPORT DOCUMENT(This.area;This.filePath)
       This.result:=VP Get value(VP Cell(This.area;6;22))
 
       ALERT("The G23 cell contains the value: "+String(This.result))
 End case
```

The *OffscreenArea* callback method:  

```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### Example 2

You want to load a large document offscreen, wait for all calculations to complete evaluating, and export it as a PDF:


```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
 This.pdfPath:=$pdfPath
 This.autoQuit:=False
 This.isWaiting:=False
 
Function onEvent()
 Case of
     :(FORM Event.code=On VP Ready)
 // Document import
   VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
         This.isWaiting:=True
 
 // Start a timer to verify if all calculations are finished.
 // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
 // The time must be defined according to the computer configuration.
   SET TIMER(60)
 
  :(FORM Event.code=On VP Range Changed)
 // End of calculation detected. Restarts the timer
         If(This.isWaiting)
           SET TIMER(60)
         End if
 
  :(FORM Event.code=On Timer)
 // To be sure to not restart the timer if you call others 4D View command after this point
         This.isWaiting:=False
 


 // Stop the timer
   SET TIMER(0)
 
 // Start the PDF export
        VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))
 
     :(FORM Event.code=On URL Loading Error)

         CANCEL 
 End case
```

The *OffscreenArea* callback method:  

```4d
$o:=cs.OffscreenArea.new()
 
$result:=VP Run offscreen area($o)
```

#### See also

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)
