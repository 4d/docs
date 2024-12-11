---
id: edit-formula
title: EDIT FORMULA
slug: /commands/edit-formula
displayed_sidebar: docs
---

<!--REF #_command_.EDIT FORMULA.Syntax-->**EDIT FORMULA** ( *aTable* ; *formula* )<!-- END REF-->
<!--REF #_command_.EDIT FORMULA.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to display by default in the Formula editor |
| formula | Text | &#8594;  | Variable containing the formula to display in the Formula editor or "" to display editor only |
| &#8592; | Formula validated by the user |

<!-- END REF-->

#### Description 

<!--REF #_command_.EDIT FORMULA.Summary-->The **EDIT FORMULA** command displays the Formula editor in order to let the user write or modify a formula.<!-- END REF--> The editor contains the following on opening:

* in the left list, the fields of the table passed in the *table* parameter,
* in the formula area, the formula contained in the *formula* variable. If you passed an empty string in *formula*, the Formula editor is displayed without a formula.

The user can modify the *formula* displayed and save it. It is also possible to write or load a new formula. Regardless, if the user validates the dialog box, the system variable OK is set to 1 and the *formula* variable contains the formula defined by the user. If the user cancels the formula, the system variable OK is set to 0 and the *formula* variable is left untouched. 

**Notes:** 

* By default, access to methods and commands is restricted for all users (except for the Designer and Administrator). When this mechanism is enabled, you must explicitly designate the elements that can be accessed by the users using the [SET ALLOWED METHODS](../commands/set-allowed-methods.md) command. If *formula* calls methods that were not first “authorized” in the Formula editor using the [SET ALLOWED METHODS](../commands/set-allowed-methods.md) command, a syntax error is generated and you will not be able to validate the dialog box.
* The formula editor is not associated with any menu bar by default. You need to install a standard **Edit** menu in the calling process if you want users to be able to benefit from cut/copy/paste shortcuts in the formula editor.
* The virtual structure defined by the [`SET TABLE TITLES`](set-table-titles.md) and [`SET FIELD TITLES`](set-field-titles.md) commands (if any) must not be used in the *formula* variable - nor will it be used by 4D in the returned variable. The virtual structure is only used in the Formula editor dialog box. 


Keep in mind that when the dialog box is validated, the command does not execute the *formula*; it only validates and updates the contents of the variable. If you want to execute the *formula*, you must use the [EXECUTE FORMULA](execute-formula.md) command. 

#### Example 

Displaying the Formula editor with the \[Employees\] table and without a pre-entered formula: 

```4d
 $myFormula:=""
 EDIT FORMULA([Employees];$myFormula)
 If(OK=1)
    APPLY TO SELECTION([Employees];EXECUTE FORMULA($myFormula))
 End if
```

#### System variables and sets 

If the user validates the dialog box, the system variable OK is set to 1\. If the user cancels the dialog box, the system variable OK is set to 0.

#### See also 

[APPLY TO SELECTION](apply-to-selection.md)  
[EXECUTE FORMULA](execute-formula.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 806 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


