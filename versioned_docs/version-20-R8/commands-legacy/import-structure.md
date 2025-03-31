---
id: import-structure
title: IMPORT STRUCTURE
slug: /commands/import-structure
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT STRUCTURE.Syntax-->**IMPORT STRUCTURE** ( *xmlStructure* )<!-- END REF-->
<!--REF #_command_.IMPORT STRUCTURE.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| xmlStructure | Text | &#8594;  | XML definition of 4D database structure |

<!-- END REF-->

#### Description 

<!--REF #_command_.IMPORT STRUCTURE.Summary-->The **IMPORT STRUCTURE** command imports, into the current database, the XML definition of the 4D database structure passed in the *xmlStructure* parameter.<!-- END REF--> 

The *xmlStructure* parameter must contain a valid 4D structure definition in XML format. There are several ways to obtain a valid structure definition:

* Execute the [EXPORT STRUCTURE](export-structure.md) command,
* Select the **Export > Structure definition to XML file...** menu item found in 4D's Design mode (see *Exporting and importing structure definitions*),
* Create or modify a custom XML file based on public DTDs found in the "DTD" folder of the 4D application.

The imported structure definition is added to the structure that is already open, and is displayed in the standard Structure editor of 4D among the existing tables (if any). If an imported table has the same name as a local one, an error is generated and the import operation is aborted. 

You can create a new database by importing a structure definition into an empty database. 

An error is generated when the structure is in compiled and/or read only mode. 

A 4D application operating in remote mode cannot call this command.

#### Note for deployment 

Since this command modifies the database structure, it cannot be used in the context of a read-only packaged application (.4dc file installed in the *Program Files* folder or .4dz file). 

#### Example 

You want to import a saved structure definition into the current database:

```4d
 $struc:=Document to text("c:\\4DStructures\\Employee.xml")
 IMPORT STRUCTURE($struc)
```

#### See also 

[EXPORT STRUCTURE](export-structure.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 1310 |
| Thread safe | &cross; |


