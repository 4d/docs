---
id: set-field-titles
title: SET FIELD TITLES
slug: /commands/set-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD TITLES.Syntax-->**SET FIELD TITLES** ( *aTable* ; *fieldTitles* ; *fieldNumbers* {; *} )<!-- END REF-->
<!--REF #_command_.SET FIELD TITLES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table for which to set the field titles |
| fieldTitles | Text array | &#8594;  | Field names as they must appear in dialog boxes |
| fieldNumbers | Array integer | &#8594;  | Actual field numbers |
| * | Operator |  &#8594;  | Use the custom names in the formula editor |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.SET FIELD TITLES.Summary-->**SET FIELD TITLES** lets you mask, rename, and reorder the fields of the table passed in *aTable* when they appear in standard 4D dialog boxes, such as the Query editor, within the Application environment (i.e. when the startup mode is **Application**, or after you select **Test application** in the **Run** menu).<!-- END REF--> 

Using this command, you can also rename the labels of the fields in your forms on the fly, if you used dynamic names. For more information about inserting dynamic field and table names in forms, refer to *Using references in static text* in the *4D Design Reference* manual.

The *fieldTitles* and *fieldNumbers* arrays must be synchronized. In the *fieldTitles* array, you pass the name of the fields as you would like them to appear. If you do not want to show a particular field, do not include its name or new title in the array. The fields appear in the order you specify in this array. In each element of the *fieldNumbers* array, you pass the actual field number corresponding to the field name or new title passed in the same element number in the *fieldTitles* array.

For example, you have a table composed of the fields F, G, and H, created in that order. You want these fields to appear as M, N, and O. In addition you do not want to show field N. Finally, you want to show O and M in that order. To do so, pass O and M in a two-element *fieldTitles* array and pass 3 and 1 in a two-element *fieldNumbers* array.

The optional *\** parameter indicates whether or not custom names ("virtual" structure) defined using this command can be used in 4D formulas. By default, when this parameter is omitted, formulas executed in 4D cannot use these custom names; it is necessary to use the real field names. You need to pass this parameter if you want to control information provided to users and ensure interface consistency wherever formulas or expressions are used, i.e.:

* if your application provides access to the formula editor (for example via the Quick report editor),
* if your application displays expression references, such as in 4D Write Pro documents.

**Note:** When the *\** parameter is passed, the names defined by this command can be used in the formulas executed by 4D. **Be careful in this case**, the custom names must not contain characters that are “forbidden” by the 4D language interpreter, like -?\*%! For example, the name "Rate\_in\_%" could not be used in a formula (for more information, refer to the *Identifiers* section).

**SET FIELD TITLES** does NOT change the actual structure of your database. It is designed to affect subsequent uses of the standard 4D editors and forms using dynamic names when they are used in Application environment. The scope of the **SET FIELD TITLES** command is the worksession. One benefit in Client/Server mode is that several remote 4D stations can simultaneously “see” your table in different ways. You can call **SET FIELD TITLES** as many times as you want.

Use the **SET FIELD TITLES** command for:

* Dynamically localizing a table.
* Showing fields the way you want, independent of the actual definition of your table.
* Showing fields in a way that depends on the identity or custom privileges of a user.

**WARNING:**

* **SET FIELD TITLES** does NOT override the Invisible property of a field. When a field is set to be invisible at the Design level of your database, even though it is included in a call to **SET FIELD TITLES**, it will not appear in Application mode.
* Plug-ins always access the "virtual" structure as specified by this command.
* If the [SET TABLE TITLES](set-table-titles.md) command is called without any parameters, the "virtual" structure (including table and field custom names) is completely removed from the Application environment.

#### Example 

See example for the [SET TABLE TITLES](set-table-titles.md) command.

#### See also 

[Field name](field-name.md)  
[GET FIELD TITLES](get-field-titles.md)  
[Last field number](last-field-number.md)  
[Parse formula](parse-formula.md)  
[SET TABLE TITLES](set-table-titles.md)  