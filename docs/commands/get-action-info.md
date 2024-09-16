---
id: get-action-info
title: Get action info
displayed_sidebar: docs
---

<!--REF #_command_.Get action info.Syntax-->**Get action info** ( *action* {; *target*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Get action info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| action | String | -> | Standard action name or pattern including parameter if required |
| target | Longint | -> | Defines the target of the action to get information: main form or current form |
| Function result | Object | <- | Object containing action status as boolean properties: isEnabled, isVisible, isChecked, isMixed, isUnknownState |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get action info.Summary-->The **Get action info** command returns several information, including availability and status, about the defined *action* in the *target*, according to the current application context.<!-- END REF-->

In *action*, pass the standard action to to check. It can be a string or a constant from the [Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html) theme. It can be a string or a constant from the [Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html) theme. Some actions accept a target element and parameters. In this case, you must use the requested pattern, for example *"gotoPage?value=2"* or *paragraph/backgroundPositionV?value=top.* 

Available 4D actions are listed in the [Standard actions](/4Dv20R6/4D/20-R6/Standard-actions.300-7003350.en.html) section of the *4D Design Reference* manual.

**Note:** Additional specific actions are also provided for 4D Write Pro documents. They are detailed in the [Using 4D Write Pro standard actions](/4Dv20R6/4D/20-R6/Using-4D-Write-Pro-standard-actions.200-6993933.en.html) section of the 4D Write Pro Reference manual.

You can pass in *target* the form context where the *action* must be executed, if available. You can use one of the following constants from the [Standard Action](/4Dv20R6/4D/20-R6/Standard-Action.302-6958501.en.html) theme:

| Constant        | Type    | Value | Comment                                                                                                                                                        |
| --------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Longint | 1     | The current form is the form where the action was called. It could be either the main form or a palette form in front of the main form of the current process. |
| ak main form    | Longint | 2     | The main form is the frontmost document or dialog form of the process, excluding any floating or pop-up window.                                                |

**Note:** If *target* is omitted, by default the ak current form context is used.

The **Get action info** command returns information in the form of an object containing the following properties:

| **Property** | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled      | Boolean  | true if the action can be invoked, false otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| status       | String   | Value can be one of the following strings:"checked"the action is checked, which means that the property is set. Ex: the selected text is bold, the standard action ak font bold "status" property contains "checked""unchecked"the action is unchecked, which means that the property is not set. Ex: the selected text is not bold, the standard action ak font bold "status" property contains "unchecked". "mixed"the action is mixed, which means that the property is partially set. Ex: part of the selected text is "bold", the standard action ak font bold "status" property contains "mixed". |
| title        | Text     | Current localized name of the action label. Ex: "Undo", "Paste", etc. for the english version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| visible      | Boolean  | true if the action is visible in the form                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| value        | String   | Current value of the action parameter string (if any). For example, if the standard action is "fontSize?value=10pt", the *value* property contains "10pt"                                                                                                                                                                                                                                                                                                                                                                                                                                               |

If the action status cannot be determined (for example if it is not affected to any object or menu command), the command returns a null object (undefined). 

#### Example 

You want to know if the copy action is available (i.e. if some data is selected):

```4d
 C_OBJECT($actionInfo)

 C_BOOLEAN($isEnabled)

 $actionInfo:=Get action info(ak copy)

 If(Not(Undefined($actionInfo.enabled))) //action is defined in the process

    If(OB Get($actionInfo;"enabled"))

       ... //the copy action is available

    End if

 End if
```

#### See also 
[INVOKE ACTION](invoke-action.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  