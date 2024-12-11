---
id: selection-to-json
title: Selection to JSON
slug: /commands/selection-to-json
displayed_sidebar: docs
---

<!--REF #_command_.Selection to JSON.Syntax-->**Selection to JSON** ( *aTable* {; *aField*}{; *aField2* ; ... ; *aFieldN*}{; *template*})  : Text<!-- END REF-->
<!--REF #_command_.Selection to JSON.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Table to serialize |
| aField | Field | &#8594;  | Field(s) whose contents must be serialized |
| template | Object | &#8594;  | Object for selection of labels and fields |
| Function result | Text | &#8592; | String containing serialized JSON array |

<!-- END REF-->

#### Description 

<!--REF #_command_.Selection to JSON.Summary-->The **Selection to JSON** command returns a string containing a JSON array with as many elements as there are records in the current selection of *aTable*.<!-- END REF--> Each element of the array is a JSON object containing the labels and values of the fields of the selection.

If you only pass the *aTable* parameter, the command includes, in the JSON array, the values of all the fields of the table that can be expressed in JSON. BLOB and Picture type fields are ignored.

If you do not want to include all the fields of *aTable*, you can use either the *aField* parameter or the *template* parameter:

* *aField*: pass one or more fields in this parameter. Only the values of the fields defined are included in the JSON array.
* *template*: pass a 4D object containing one or more *name/value* pairs where the *name* can be any valid attribute name and the *value* contains a pointer to a field you want to include. This syntax allows you to customize the labels of fields in the JSON array.

This command supports Object type fields: the data of these fields is automatically converted to the JSON format (picture attribute values are converted as "\[object Picture\]" strings). Note that the following 4D statement will be interpreted as "produce JSON from all values of *objectField* in the current selection of the table":  

```4d
 Selection to JSON([aTable];objectField)
```

**Note:** After a call to **Selection to JSON**, the current selection remains the same, but the current record is no longer loaded and might have changed (the last record of the current selection is then the current record). After the **Selection to JSON** command, call [LOAD RECORD](load-record.md) in combination with [GOTO SELECTED RECORD](goto-selected-record.md) (if needed) to use the values of the fields in the current record. 

#### Example 1 

You want to create a JSON string representing this selection:

![](../assets/en/commands/pict1205203.en.png)

1) You want to include the values of all the fields of the \[Members\] table:  

```4d
 $jsonString :=Selection to JSON([Members])
  // $jsonString =[{"LastName":"Durant","FirstName":"Mark","Address":
  //"25 Park St","Zip code":"15205","City":"Pittsburgh"},{"LastName":
  //"Smith","FirstName":"John","Address":"24 Philadelphia Ave","Zip code":
  //"75203","City":"Dallas"},{"LastName":"Anderson","FirstName"
  //:"Adeline","Address":"37 Market St","Zip code":"45205","City":"Cincinnati"},...]
```

2) You want to reduce the selection and only include two fields in the JSON string by using the syntax based on fields:  

```4d
 QUERY([Members];[Members]LastName="A@")
 $jsonString :=Selection to JSON([Members];[Members]LastName;[Members]City)
  // $jsonString = [{"LastName":"Anderson","City":"Cincinnati"},{"LastName":"Albert","City":"Houston"}]
```

3) You only want to include one field in the JSON string and use a different label.  
You can use the *template* syntax:  

```4d
 var $template : Object
 OB SET($template;"Member";->[Members]LastName) //custom label and a single field
 ALL RECORDS([Members])
 $jsonString :=Selection to JSON([Members];$template)
  // $jsonString = [{"Member":"Durant"},{"Member":"Smith"},{"Member":"Anderson"},
  // {"Member":"Albert"},{"Member":"Leonard"},{"Member":"Pradel"}]
```

#### Example 2 

You can use the *template* syntax in order to export fields from different tables:

```4d
 var $template : Object
 var $jsonString : Text
 OB SET($template;"Last name";->[Emp]LastName)
 OB SET($template;"First name";->[Emp]FirstName)
 OB SET($template;"Company";->[Company]LastName) //custom label otherwise conflict with [Emp]LastName field
 ALL RECORDS([Emp])
 SET FIELD RELATION([Emp]UUID_Company;Automatic;Do not modify)
 $jsonString:=Selection to JSON([Emp];$template)
 SET FIELD RELATION([Emp]UUID_Company;Structure configuration;Do not modify)
```

#### See also 

[JSON TO SELECTION](json-to-selection.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1234 |
| Thread safe | &check; |
| Forbidden on the server ||


