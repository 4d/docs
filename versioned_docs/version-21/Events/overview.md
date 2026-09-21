---
id: overview
title: Form Events
---

Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs. 

In your code, you control the events using the [`FORM Event`](../commands/form-event) command, that returns the triggered event. For example:

```4d  
//code of a button
If(FORM Event.code=On Clicked) 
// do something when the button is clicked
End if
```

> Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur. 


## Event object

Each event is returned as an object by the [`FORM Event`](../commands/form-event) command. By default, it contains the following properties:

|Property|Type|Description|
|---|---|---|
objectName|text|Name of the object triggering the event - Not included if the event is triggered by the form|
|code|longint|Numeric value of the form event. Also returned by the `Form event code` command|
|description|text|Name of the form event (e.g. "On After Edit")|

Additional properties are returned when the event occurs on specific objects. In particular:

- [list boxes](FormObjects/listbox-object.md#supported-form-events) and [list box columns](FormObjects/listbox-column.md#supported-form-events) return [additional properties](FormObjects/listbox-object.md#supported-form-events) such as `columnName` or `isRowSelected`.
- [4D View Pro areas](FormObjects/viewProArea_overview.md) return for example `sheetName` or `action` properties in the [On After Edit](onAfterEdit.md) event object.  


## Events and Methods  

When a form event occurs, 4D performs the following actions:

- First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected.
- Second, it calls the form method if the corresponding form event property has been selected.

Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform’s list form are called, then the form method of the list form is called. 4D then continues to call the object methods of the parent form. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object.

Except for the [On Load](onLoad.md) and [On Unload](onUnload.md) events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties.

The number of objects involved in an event depends on the nature of the event. 

## Call Table

The following table summarizes how object and form methods are called for each event type:

|Event|Code|Object Methods|Form Method|Which Objects|
|---|---|---|----|---|
|On Activate|11|Never|Yes|None|
|On After Edit|45|Yes|Yes|Involved object only|
|On After Keystroke|28|Yes|Yes|Involved object only|
|On After Sort|30|Yes (List box)|Never|Involved object only|
|On Alternative Click|38|Yes (Button and List box)|Never|	Involved object only|
|On Before Data Entry|41|Yes (List box)|Never|Involved object only|
|On Before Keystroke|17|Yes|Yes|Involved object only|
|On Begin Drag Over|46|Yes|Yes|Involved object only|
|On Begin URL Loading|47|Yes (Web Area)|Never|Involved object only|
|On Bound variable change|54|Never|Yes|None|
|On Clicked|4|Yes |Yes|Involved object only|
|On Close Box|22|Never|Yes	|None|
|On Close Detail|26|Yes (List box)|Yes|None except List boxes|
|On Collapse|44|Yes (Hier. list and list box)|Never|Involved object only|
|On Column Moved|32|Yes (List box)|Never|Involved object only|
|On Column Resize|33|Yes (List box and 4D View Pro Area)|	Never|Involved object only|
|On Data Change|20|Yes|Yes|Involved object only|
|On Deactivate|12|Never|Yes|None|
|On Delete Action|58|Yes (Hier. list and list box)|Never|Involved object only|
|On Display Detail|8|Yes|Yes|All objects|
|On Double Clicked|13|Yes|Yes|Involved object only|
|On Drag Over|21|Yes|Never	|Involved object only|
|On Drop|16|Yes|Yes|Involved object only|
|On End URL Loading|49|Yes (Web Area)|Never|Involved object only|
|On Expand|43|Yes (Hier. list and list box)|Never|Involved object only|
|On Footer Click|57|Yes (List box)|Never|Involved object only|
|On Getting Focus|15|Yes|Yes|Involved object only|
|On Header|5|Yes|Yes|All objects|
|On Header Click|42|Yes (List box and 4D View Pro Area)|Never|Involved object only|
|On Load|1|Yes|Yes|All objects|
|On Load Record|40|Never|Yes|None|
|On Long Click|39|Yes (Button)|Yes|Involved object only|
|On Losing Focus|14|Yes|Yes|Involved object only|
|On Menu Selected|18|Never|Yes|None|
|On Mouse Enter|35|Yes|Yes|All objects|
|On Mouse Leave|36|Yes|Yes|All objects|
|On Mouse Move|37|Yes|Yes|All objects|
|On Mouse Up|2|Yes|Never|Involved object only|
|On Open Detail|25|Yes (List box)|Yes|None except List boxes|
|On Open External Link|52|Yes (Web Area)|Never|Involved object only|
|On Outside Call|10|Never|Yes|None|
|On Page Change|56|Never|Yes|None|
|On Plug in Area|19|Yes|Yes|Involved object only|
|On Printing Break|6|Yes	|Yes|All objects|
|On Printing Detail|23|Yes|Yes	|All objects|
|On Printing Footer|7|Yes	|Yes|All objects|
|On Resize|29|Never|Yes|None|
|On Row Moved|34|Yes (List box)|Never|Involved object only|
|On Row Resize|60|Yes (4D View Pro Area)|Never|Involved object only|
|On Scroll|59|Yes|Never|Involved object only|
|On Selection Change|31|Yes|Yes|Involved object only|
|On Timer|27|Never|Yes|None|
|On Unload|24|Yes|Yes|All objects|
|On URL Filtering|51|Yes (Web Area)|Never|Involved object only|
|On URL Loading Error|50|Yes (Web Area)|Never|Involved object only|
|On URL Resource Loading|48|Yes (Web Area)|Never|Involved object only|
|On Validate|3|Yes|Yes|All objects|
|On VP Range Changed|61|Yes (4D View Pro Area)|Never|Involved object only|
|On VP Ready|9|Yes (4D View Pro Area)|Never|Involved object only|
|On Window Opening Denied|53|Yes (Web Area)|Never|Involved object only|

Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms.

> WARNING: The [On Load](onLoad.md) and [On Unload](onUnload.md) events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.


