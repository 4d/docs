---
id: find-in-field
title: Find in field
slug: /commands/find-in-field
displayed_sidebar: docs
---

<!--REF #_command_.Find in field.Syntax-->**Find in field** ( *targetField* ; *value* ) : Integer<!-- END REF-->
<!--REF #_command_.Find in field.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| targetField | Field | &#8594;  | Field on which to execute the search |
| value | Field, Variable | &#8594;  | Value to search |
| &#8592; | Value found |
| Function result | Integer | &#8592; | Number of the record found or -1 if no record was found |

<!-- END REF-->

#### Description 

<!--REF #_command_.Find in field.Summary-->The **Find in field** command returns the number of the first record whose *targetField* field is equal to *value*.<!-- END REF-->  
If no records are found, **Find in field** returns -1\. 

After calling this command, *value* contains the value found. This feature allows you to execute searches using the wildcard character (“@”) on Alpha fields and then retrieve the value found. 

**Note:** Due to this principle, you cannot use a *parameter* ($1, $2, etc.) in *value* because this would cause malfunctions in compiled mode. Similarly, if you pass a field in the *value* parameter, keep in mind that its value will be reassigned if the query is successful (the command [Modified record](modified-record.md), in particular, will return True for the current record of the table).

This command doesn’t modify the current selection or the current record.   
It is fast and particularly useful to avoid creating double entries during data entry. 

**Historical note:** In earlier versions of 4D, the **Find in field** command was named **Find index key** and only worked with indexed fields. Beginning with 4D v11 SQL, this limitation was removed and the command was renamed. 

#### Example 1 

In an audio CD database, during data entry let’s assume that you want to verify the singer’s name to see if it already exists in the database. Because homonyms can exist, you don’t want the \[Singer\]Name field to be unique. Therefore, in the input form, you can write the following code in the \[Singer\]Name field’s object method:

```4d
 If(FORM Event=On Data Change)
    $RecNum:=Find in field([Singer]Name;[Singer]Name)
    If($RecNum #-1) // If this name has already been entered
       CONFIRM("A singer with the same already exists. Do you want to see the record?";"Yes";"No")
       If(OK=1)
          GOTO RECORD([Singer];$RecNum)
       End if
    End if
 End if
```

#### Example 2 

Here is an example that lets you verify the existence of a value:

```4d
 var $id;$1 : Integer
 $id:=$1
 If(Find in field([MyTable]MyID;$id)>=0)
    $0:=True
 Else
    $0:=False
 End if
```

Note the >= that lets you cover all cases. In fact, the function returns a record number and the first record is numbered 0.
