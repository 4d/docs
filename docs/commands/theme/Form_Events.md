---
id: Form_Events
title: Form Events
---
||
|---|
|[**Activated**  : Boolean](../../commands-legacy/activated)<br/>The **Activated** command (obsolete) returns **True** in a form method when the window containing the form becomes the frontmost window of the frontmost process.|
|[**After**  : Boolean](../../commands-legacy/after)<br/>**After** returns True for the After execution cycle.|
|[**Before**  : Boolean](../../commands-legacy/before)<br/>**Before** returns True for the Before execution cycle.|
|[**CALL FORM** ( *window* ; *formula* {; *param*}{; *param2* ; ... ; *paramN*} )](../../commands-legacy/call-form)<br/>The **CALL FORM** command executes the 4D code designated in *formula* with the optional *param*(s) in the context of a form displayed in a *window*, regardless of the process owning the window.|
|[**CALL SUBFORM CONTAINER** ( *event* )](../../commands-legacy/call-subform-container)<br/>The CALL SUBFORM CONTAINER command lets a subform instance send the *event* to the subform object that contains it.|
|[**Clickcount**  : Integer](../../commands-legacy/clickcount)<br/>The **Clickcount** command returns, in the context of a mouse click event, the number of times the user has clicked in rapid succession with the same mouse button.|
|[**Contextual click**  : Boolean](../../commands-legacy/contextual-click)<br/>The Contextual click command returns True if a contextual click has been made:

* Under Windows and Mac OS, contextual clicks are made using the right button of the mouse.|
|[**Deactivated**  : Boolean](../../commands-legacy/deactivated)<br/>The **Deactivated** command returns True in a form or object method when the frontmost window of the frontmost process, containing the form, moves to the back.|
|[**EXECUTE METHOD IN SUBFORM** ( *subformObject* ; *formula* {; *return* {; *param*} {; *param2* ; ... ; *paramN*}} )](../../commands-legacy/execute-method-in-subform)<br/>The EXECUTE METHOD IN SUBFORM command can be used to execute the code designated by *formula* in the context of the *subformObject* subform object.|
|[**FORM Event** : Object](../../commands/form-event)<br/>**FORM Event** returns an object containing information about the form event that has just occurred.|
|[**Form event code**  : Integer](../../commands/form-event-code)<br/>|
|[**In break**  : Boolean](../../commands-legacy/in-break)<br/>**In break** returns True for the In break execution cycle.|
|[**In footer**  : Boolean](../../commands-legacy/in-footer)<br/>**In footer** returns True for the In footer execution cycle.|
|[**In header**  : Boolean](../../commands-legacy/in-header)<br/>**In header** returns True for the In header execution cycle.|
|[**Is waiting mouse up**  : Boolean](../../commands-legacy/is-waiting-mouse-up)<br/>The **Is waiting mouse up** command returns **True** if the current object has been clicked and the mouse button has not been released, while the parent window has the focus.|
|[**Outside call**  : Boolean](../../commands-legacy/outside-call)<br/>**Outside call** returns True for the After execution cycle.|
|[**POST OUTSIDE CALL** ( *process* )](../../commands-legacy/post-outside-call)<br/>This command was named **CALL PROCESS** in previous 4D releases.|
|[**Right click**  : Boolean](../../commands-legacy/right-click)<br/>The Right click command returns True if the right button of the mouse has been clicked.|
|[**SET TIMER** ( *tickCount* )](../../commands-legacy/set-timer)<br/>The **SET TIMER** command activates the On Timer form event and sets, for the current form and process, the number of ticks elapsed between each On Timer form event.|
