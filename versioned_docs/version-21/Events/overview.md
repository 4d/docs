---
id: overview
title: Form Events
---

Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs. 

In your code, you control the events using the [`FORM Event`](../commands/form-event.md) command, that returns the triggered event. For example:

```4d  
//code of a button
If(FORM Event.code=On Clicked) 
// do something when the button is clicked
End if
```

> Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur. 


## Event object

Each event is returned as an object by the [`FORM Event`](../commands/form-event.md) command. By default, it contains the following properties:

|Property|Type|Description|
|---|---|---|
objectName|text|Name of the object triggering the event - Not included if the event is triggered by the form|
|code|longint|Numeric value of the form event. Also returned by the `Form event code` command|
|description|text|Name of the form event (e.g. "On After Edit")|

Additional properties are returned when the event occurs on specific objects. In particular:

- [list boxes](FormObjects/listbox_overview.md#supported-form-events) and [list box columns](FormObjects/listbox_overview.md#supported-form-events-1) return [additional properties](FormObjects/listbox_overview.md#additional-properties) such as `columnName` or `isRowSelected`.
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

|Event|Object Methods|Form Method|Which Objects|
|---|---|----|---|
|On Load|Yes|Yes|All objects|
|On Unload|Yes|Yes|All objects|
|On Validate|Yes|Yes|All objects|
|On Clicked|Yes |Yes|Involved object only|
|On Double Clicked|Yes|Yes|Involved object only|
|On Before Keystroke|Yes|Yes|Involved object only|
|On After Keystroke|Yes|Yes|Involved object only|
|On After Edit|Yes|Yes|Involved object only|
|On Getting Focus|Yes|Yes|Involved object only|
|On Losing Focus|Yes|Yes|Involved object only|
|On Activate|Never|Yes|None|
|On Deactivate|Never|Yes|None|
|On Outside Call|Never|Yes|None|
|On Page Change|Never|Yes|None|
|On Begin Drag Over|Yes|Yes|Involved object only|
|On Drop|Yes|Yes|Involved object only|
|On Drag Over|Yes|Never	|Involved object only|
|On Mouse Enter|Yes|Yes|All objects|
|On Mouse Move|Yes|Yes|All objects|
|On Mouse Leave|Yes|Yes|All objects|
|On Mouse Up|Yes|Never|Involved object only|
|On Menu Selected|Never|Yes|None|
|On Bound variable change|Never|Yes|None|
|On Data Change|Yes|Yes|Involved object only|
|On Plug in Area|Yes|Yes|Involved object only|
|On Header|Yes|Yes|All objects|
|On Printing Detail|Yes|Yes	|All objects|
|On Printing Break|Yes	|Yes|All objects|
|On Printing Footer|Yes	|Yes|All objects|
|On Close Box|Never|Yes	|None|
|On Display Detail|Yes|Yes|All objects|
|On Open Detail|Yes (List box)|Yes|None except List boxes|
|On Close Detail|Yes (List box)|Yes|None except List boxes|
|On Resize|Never|Yes|None|
|On Selection Change|Yes|Yes|Involved object only|
|On Load Record|Never|Yes|None|
|On Timer|Never|Yes|None|
|On Scroll|Yes|Never|Involved object only|
|On Before Data Entry|Yes (List box)|Never|Involved object only|
|On Column Moved|Yes (List box)|Never|Involved object only|
|On Row Moved|Yes (List box)|Never|Involved object only|
|On Column Resize|Yes (List box and 4D View Pro Area)|	Never|Involved object only|
|On Header Click|Yes (List box and 4D View Pro Area)|Never|Involved object only|
|On Footer Click|Yes (List box)|Never|Involved object only|
|On After Sort|Yes (List box)|Never|Involved object only|
|On Long Click|Yes (Button)|Yes|Involved object only|
|On Alternative Click|Yes (Button and List box)|Never|	Involved object only|
|On Expand|Yes (Hier. list and list box)|Never|Involved object only|
|On Collapse|Yes (Hier. list and list box)|Never|Involved object only|
|On Delete Action|Yes (Hier. list and list box)|Never|Involved object only|
|On URL Resource Loading|Yes (Web Area)|Never|Involved object only|
|On Begin URL Loading|Yes (Web Area)|Never|Involved object only|
|On URL Loading Error|Yes (Web Area)|Never|Involved object only|
|On URL Filtering|Yes (Web Area)|Never|Involved object only|
|On End URL Loading|Yes (Web Area)|Never|Involved object only|
|On Open External Link|Yes (Web Area)|Never|Involved object only|
|On Window Opening Denied|Yes (Web Area)|Never|Involved object only|
|On VP Range Changed|Yes (4D View Pro Area)|Never|Involved object only|
|On VP Ready|Yes (4D View Pro Area)|Never|Involved object only|
|On Row Resize|Yes (4D View Pro Area)|Never|Involved object only|

Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms.

> WARNING: The [On Load](onLoad.md) and [On Unload](onUnload.md) events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.

