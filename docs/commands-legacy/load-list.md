---
id: load-list
title: Load list
slug: /commands/load-list
displayed_sidebar: docs
---

<!--REF #_command_.Load list.Syntax-->**Load list** ( *listName* ) : Integer<!-- END REF-->
<!--REF #_command_.Load list.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| listName | Text | &#8594;  | Name of a list created in the Design environment List Editor |
| Function result | Integer | &#8592; | List reference number of newly created list |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Load list.Summary-->**Load list** creates a new hierarchical list whose contents are copied from the list and whose name you pass in *listName*.<!-- END REF--> It then returns the list reference number to the newly created list. 

To find out the lists specified in the database, use the [LIST OF CHOICE LISTS](list-of-choice-lists.md) command. 

To make sure that the list specified by *listName* exists, use the [Is a list](is-a-list.md) function.

Note that the new list is a copy of the list defined in the Design environment. Consequently, any modifications made to the new list will not affect the list defined in the Design environment. Conversely, any subsequent modifications made to the list defined in the Design environment will not affect the list that you just created.

If you modify the newly created list and want to permanently save the changes, call [SAVE LIST](save-list.md). 

Remember to call [CLEAR LIST](clear-list.md) in order to delete the newly created list when you have finished with it. Otherwise, it will stay in memory until the end of the working session or until the process in which it was created ends or is aborted.

**Tip:** If you associate a list with a form object (hierarchical list, tab control, or hierarchical pop-up menu) using the Choice List property in the Property List window, you do not need to call **Load list** or [CLEAR LIST](clear-list.md) from the method of the object. 4D loads and clears the list automatically for you.

#### Example 

You create a database for the international market and you need to switch to different languages while using the database. In a form, you present a hierarchical list, named *hlList*, that proposes a list of standard options. In the Design environment, you have prepared various lists, such as “Std Options US” for the English version, “Std Options FR” for the French version, “Std Options SP” for the Spanish version, and so on. In addition, you maintain an interprocess variable, named *◊gsCurrentLanguage*, where you store a 2-character language code, such as “US” for the English version, “FR” for the French version, “SP” for the Spanish version, and so on. To make sure that your list will always be loaded using the current selected language, you can write:

```4d
  // hlList Hierarchical List Object Method
 Case of
    :(FORM Event=On Load)
       var hlList : Integer
       hlList:=Load list("Std Options"+◊gsCurrentLanguage)
    :(FORM Event=On Unload)
       CLEAR LIST(hlList;*)
 End case
```

#### See also 

[CLEAR LIST](clear-list.md)  
[Is a list](is-a-list.md)  
[SAVE LIST](save-list.md)  