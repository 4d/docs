---
id: invoke-action
title: INVOKE ACTION
slug: /commands/invoke-action
displayed_sidebar: docs
---

<!--REF #_command_.INVOKE ACTION.Syntax-->**INVOKE ACTION** ( *action* {; *target*} )<!-- END REF-->
<!--REF #_command_.INVOKE ACTION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| action | Text | &#8594;  | Standard action name or pattern including parameter if required |
| target | Integer | &#8594;  | Defines where to execute the action: current form (default) or main form |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.INVOKE ACTION.Summary-->The **INVOKE ACTION** command triggers the standard action defined by the *action* parameter, optionally in the *target* context.<!-- END REF-->

In *action*, pass the standard action to execute. It can be a string or a constant from the *Standard Action* theme. Some actions accept a target element and parameters. In this case, you must use the requested pattern, for example *"gotoPage?value=2"* or *paragraph/backgroundPositionV?value=top.*

Available 4D actions are listed in the *Standard actions* section of the *4D Design Reference* manual.

**Note:** Additional specific actions are also provided for 4D Write Pro documents. They are detailed in the *Using 4D Write Pro standard actions* section of the 4D Write Pro Reference manual.

##### 

In *target*, you can pass the form context where the *action* must be executed. You can use one of the following constants from the *Standard Action* theme:

| Constant        | Type    | Value | Comment                                                                                                                                                        |
| --------------- | ------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Integer | 1     | The current form is the form where the action was called. It could be either the main form or a palette form in front of the main form of the current process. |
| ak main form    | Integer | 2     | The main form is the frontmost document or dialog form of the process, excluding any floating or pop-up window.                                                |

**Note:** If *target* is omitted, by default the ak current form context is used. 

Depending on the *target*, the **INVOKE ACTION** command execution is either synchronous or asynchronous:

* With ak current form as *target*, the **INVOKE ACTION** command is synchronous; the action is executed in the current cycle at the moment when the command is called.
* With ak main form as *target*, the **INVOKE ACTION** command is asynchronous; the action is executed in the next cycle after the end of the form object method's execution.

**Note:** Standard edit actions (Cut, Copy, Paste, Select all, Clear, Undo/Redo) ignore the *target* parameter, if passed. Such actions are always executed synchronously in the context of the editable object that has the focus.

The **INVOKE ACTION** command does not generate an error, for example, if the requested action is not available in the current context. You must validate the expected action using the [Action info](action-info.md) command. 

#### Example 1 

You want to execute the **Copy** standard action in the current form:

```4d
 INVOKE ACTION(ak copy;ak current form)
```

#### Example 2 

You want to execute a **Goto page** standard action (page 3) in the main form:

```4d
 INVOKE ACTION(ak goto page+"?value=3";ak main form)
```

#### See also 

[Action info](action-info.md)  