---
id: action-info
title: Action info
slug: /commands/action-info
displayed_sidebar: docs
---

<!--REF #_command_.Action info.Syntax-->**Action info** ( *action* {; *target*} ) : Object<!-- END REF-->
<!--REF #_command_.Action info.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| action | Text | &#8594;  | Standard action name or pattern including parameter if required |
| target | Integer | &#8594;  | Defines the target of the action to get information: main form or current form |
| Function result | Object | &#8592; | Object containing action status as boolean properties: isEnabled, isVisible, isChecked, isMixed, isUnknownState |

<!-- END REF-->

#### Description 

<!--REF #_command_.Action info.Summary-->The **Action info** command returns several information, including availability and status, about the defined *action* in the *target*, according to the current application context.<!-- END REF-->

In *action*, pass the standard action to to check. It can be a string or a constant from the *Standard Action* theme. It can be a string or a constant from the *Standard Action* theme. Some actions accept a target element and parameters. In this case, you must use the requested pattern, for example *"gotoPage?value=2"* or *paragraph/backgroundPositionV?value=top.* 

Available 4D actions are listed in the *Standard actions* section of the *4D Design Reference* manual.

**Note:** Additional specific actions are also provided for 4D Write Pro documents. They are detailed in the *Using 4D Write Pro standard actions* section of the 4D Write Pro Reference manual.

You can pass in *target* the form context where the *action* must be executed, if available. You can use one of the following constants from the *Standard Action* theme:

| Constant        | Type    | Value | Comment                                                                                                                                                        |
| --------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Integer | 1     | The current form is the form where the action was called. It could be either the main form or a palette form in front of the main form of the current process. |
| ak main form    | Integer | 2     | The main form is the frontmost document or dialog form of the process, excluding any floating or pop-up window.                                                |

**Note:** If *target* is omitted, by default the ak current form context is used.

The **Action info** command returns information in the form of an object containing the following properties:

| **Property** | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------ | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enabled      | Boolean  | true if the action can be invoked, false otherwise                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| status       | Text   | Value can be one of the following strings:<table><tbody><tr><td>"checked"</td><td>the action is checked, which means that the property is set. Ex: the selected text is bold, the standard action ak font bold "status" property contains "checked"</td></tr><tr><td>"unchecked"</td><td>the action is unchecked, which means that the property is not set. Ex: the selected text is not bold, the standard action ak font bold "status" property contains "unchecked". </td></tr><tr><td>"mixed"</td><td>the action is mixed, which means that the property is partially set. Ex: part of the selected text is "bold", the standard action ak font bold "status" property contains "mixed".</td></tr></tbody></table> |
| title        | Text     | Current localized name of the action label. Ex: "Undo", "Paste", etc. for the english version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| visible      | Boolean  | true if the action is visible in the form                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| value        | Text   | Current value of the action parameter string (if any). For example, if the standard action is "fontSize?value=10pt", the *value* property contains "10pt"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

If the action status cannot be determined (for example if it is not affected to any object or menu command), the command returns a null object (undefined). 

#### Example 

You want to know if the copy action is available (i.e. if some data is selected):

```4d
 var $actionInfo : Object
 var $isEnabled : Boolean
 $actionInfo:=Action info(ak copy)
 If(Not(Undefined($actionInfo.enabled))) //action is defined in the process
    If(OB Get($actionInfo;"enabled"))
       ... //the copy action is available
    End if
 End if
```

#### See also 

[INVOKE ACTION](invoke-action.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1442 |
| Thread safe | &cross; |


