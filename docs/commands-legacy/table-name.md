---
id: table-name
title: Table name
slug: /commands/table-name
displayed_sidebar: docs
---

<!--REF #_command_.Table name.Syntax-->**Table name** ( tableNum | tablePtr ) : Text<!-- END REF-->
<!--REF #_command_.Table name.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| tableNum &#124; tablePtr | Longint, Pointer | &#8594;  | Table number or Table pointer |
| Function result | Text | &#8592; | Name of the table |

<!-- END REF-->

#### Description 

<!--REF #_command_.Table name.Summary-->The Table name command returns the name of the table whose number or pointer you pass in *tableNum* or *tablePtr*.<!-- END REF-->

#### Example 

The following is an example of a generic method that displays the records of a table. The reference to the table is passed as a pointer to the table. The Table name command is used to include the name of the table in the title bar for the window:

```4d
  // SHOW CURRENT SELECTION Project method
  // SHOW CURRENT SELECTION ( Pointer )
  // SHOW CURRENT SELECTION (->[Table])
 
 SET WINDOW TITLE("Records for "+Table name($1)) //Sets the window title
 DISPLAY SELECTION($1->) //Displays the selection
```

#### See also 

[Field name](field-name.md)  
[Last table number](last-table-number.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
[Table](table.md)  