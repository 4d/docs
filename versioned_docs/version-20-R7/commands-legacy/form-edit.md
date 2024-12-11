---
id: form-edit
title: FORM EDIT
slug: /commands/form-edit
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* ;} *form* )<!-- END REF-->
<!--REF #_command_.FORM EDIT.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table owning the form or If omitted: default table or use of project form |
| form | Text | &#8594;  | Form name |

<!-- END REF-->

#### Description 

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor.<!-- END REF--> Note that you must have access to the Design environment, otherwise the error -9804 ("Cannot open form") is generated.

The command is asynchronous: it returns immediately to the calling method and does not wait for the form to be open. 

If you pass the optional *aTable* parameter, you indicate the table associated with *form*. If you omit this parameter, you indicate that *form* is a project form.

In the *form* parameter, pass the name of the form to open in the 4D Form editor. If you pass a name that does not exist, the error 81 is generated ("Form not found"). 

#### Example 

To open the *Contacts* table *Address* form:

```4d
 FORM EDIT([Contacts];"Address")
```

To open the *ContactList* project form:

```4d
 FORM EDIT("ContactList")
```

#### See also 

*Design Object Access Commands*  

#### Properties
|  |  |
| --- | --- |
| Command number | 1749 |
| Thread safe | &check; |
| Forbidden on the server ||


