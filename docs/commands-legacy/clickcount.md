---
id: clickcount
title: Clickcount
slug: /commands/clickcount
displayed_sidebar: docs
---

<!--REF #_command_.Clickcount.Syntax-->**Clickcount**  : Integer<!-- END REF-->
<!--REF #_command_.Clickcount.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Number of consecutive clicks |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Clickcount.Summary-->The **Clickcount** command returns, in the context of a mouse click event, the number of times the user has clicked in rapid succession with the same mouse button.<!-- END REF--> Typically, this command returns 2 for a double-click. 

This command allows you to detect double-clicks in listbox headers or footers, and also to handle sequences of triple-clicks or more.

Every mouse button click generates a separate click event. For example, if a user double-clicks, an event is sent for the first click in which **Clickcount** returns 1; then another event is sent for the second click in which **Clickcount** returns 2.

This command must only be used in the context of On Clicked, On Header Click or On Footer Click form events. It is therefore necessary to check in Design mode that the appropriate event has been properly selected in the Form properties and/or for the specific object.

When both On Clicked and On Double Clicked form events are enabled, the following sequence will be returned by **Clickcount**:

* 1 in On Clicked event
* 2 in On Double Clicked event
* 2+n in On Clicked event

#### Example 1 

The following code structure can be placed in a listbox header to handle single- and double-clicks:

```4d
 Case of
    :(Form event code=On Header Click)
       Case of
          :(Clickcount=1)
             ... //single-click action
          :(Clickcount=2)
             ... //double-click action
       End case
 End case
```

#### Example 2 

Labels are not enterable but they become so after a triple-click. If you want to allow users to edit labels, you can write the following in the object method:

```4d
 If(Form event code=On Clicked)
    Case of
       :(Clickcount=3)
          OBJECT SET ENTERABLE(*;"Label";True)
          EDIT ITEM(*;"Label")
    End case
 End if
```
