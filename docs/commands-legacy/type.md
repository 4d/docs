---
id: type
title: Type
slug: /commands/type
displayed_sidebar: docs
---

<!--REF #_command_.Type.Syntax-->**Type** ( *fieldVar* ) : Integer<!-- END REF-->
<!--REF #_command_.Type.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| fieldVar | Field, Variable | &#8594;  | field or variable to be tested |
| Function result | Integer | &#8592; | Data type number |

<!-- END REF-->

#### Description 

<!--REF #_command_.Type.Summary-->The Type command returns a numeric value that indicates the type of field or variable you have passed in the *fieldVar* parameter.<!-- END REF-->

4D provides the following predefined constants found in the *Field and Variable Types* theme:

| Constant           | Type    | Value |
| ------------------ | ------- | ----- |
| Array 2D           | Integer | 13    |
| Blob array         | Integer | 31    |
| Boolean array      | Integer | 22    |
| Date array         | Integer | 17    |
| Integer array      | Integer | 15    |
| Is alpha field     | Integer | 0     |
| Is BLOB            | Integer | 30    |
| Is Boolean         | Integer | 6     |
| Is collection      | Integer | 42    |
| Is date            | Integer | 4     |
| Is integer         | Integer | 8     |
| Is integer 64 bits | Integer | 25    |
| Is longint         | Integer | 9     |
| Is null            | Integer | 255   |
| Is object          | Integer | 38    |
| Is picture         | Integer | 3     |
| Is pointer         | Integer | 23    |
| Is real            | Integer | 1     |
| Is string var      | Integer | 24    |
| Is subtable        | Integer | 7     |
| Is text            | Integer | 2     |
| Is time            | Integer | 11    |
| Is undefined       | Integer | 5     |
| Is variant         | Integer | 12    |
| LongInt array      | Integer | 16    |
| Object array       | Integer | 39    |
| Picture array      | Integer | 19    |
| Pointer array      | Integer | 20    |
| Real array         | Integer | 14    |
| String array       | Integer | 21    |
| Text array         | Integer | 18    |
| Time array         | Integer | 32    |

You can apply the Type function to fields, interprocess variables, process variables, local variables, and dereferenced pointers for these types of objects. You can apply **Type** to the parameters *($1, $2 ... ${...})* of a project method or to the result of a function *($0)*.

**Notes:** 

* You can not apply the **Type** function to scalar expressions such as object properties (*emp.name*) or collection elements (*myColl\[5\]*). To do this, you must use the [Value type](value-type.md) command.
* In compiled mode, calling **Type** on a method parameter declared as variant does not return Is variant but the actual data type (same as calling [Value type](value-type.md)).

#### Example 1 

The following project method empties some or all of the fields for the current record of the table whose a pointer is passed as parameter. It does this without deleting or changing the current record:

```4d
  // EMPTY RECORD Project Method
  // EMPTY RECORD ( Pointer {; Long } )
  // EMPTY RECORD ( -> [Table] { ; Type Flags } )
 
 var $1 : Pointer
 var $2;$vlTypeFlags : Integer
 
 If(Count parameters>=2)
    $vlTypeFlags:=$2
 Else
    $vlTypeFlags:=0xFFFFFFFF
 End if
 For($vlField;1;Last field number($1))
    $vpField:=Field(Table($1);$vlField)
    $vlFieldType:=Type($vpField->)
    If($vlTypeFlags ??$vlFieldType )
       Case of
          :(($vlFieldType=Is alpha field)|($vlFieldType=Is text))
             $vpField->:=""
          :(($vlFieldType=Is real)|($vlFieldType=Is integer)|($vlFieldType=Is longint))
             $vpField->:=0
          :($vlFieldType=Is date)
             $vpField->:=!00/00/00!
          :($vlFieldType=Is time)
             $vpField->:=?00:00:00?
          :($vlFieldType=Is Boolean)
             $vpField->:=False
          :($vlFieldType=Is picture)
             var $vgEmptyPicture : Picture
             $vpField->:=$vgEmptyPicture
          :($vlFieldType=Is subtable)
             Repeat
                ALL SUBRECORDS($vpField->)
                DELETE SUBRECORD($vpField->)
             Until(Records in subselection($vpField->)=0)
          :($vlFieldType=Is BLOB)
             SET BLOB SIZE($vpField->;0)
       End case
    End if
 End for
```

  
After this project method is implemented in your database, you can write:

```4d
  // Empty the whole current record of the table [Things To Do]
 EMPTY RECORD(->[Things To Do])
 
  // Empty Text, BLOB and Picture fields for the current record of the table [Things To Do]
 EMPTY RECORD(->[Things To Do];0?+Is text?+Is BLOB?+Is picture)
 
  // Empty the whole current record of the table [Things To Do] except Alphanumeric fields
 EMPTY RECORD(->[Things To Do];-1?-Is alpha field)
```

#### Example 2 

In certain cases, for example when writing generic code, you may need to find out whether an array is a standard independent array or the “row” of a 2D array. In this case, you can use the following code:

```4d
 ptrmyArr:=->myArr{6} // Is myArr{6} the row of a 2D array?
 RESOLVE POINTER(ptrmyArr;varName;tableNum;fieldNum)
 If(varName#"")
    $ptr:=Get pointer(varName)
    $thetype:=Type($ptr->)
  // If myArr{6} is the row of a 2D array, $thetype equals 13
 End if
```

#### Example 3 

See example for the [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md) command.

#### See also 

[Is a variable](is-a-variable.md)  
[Undefined](undefined.md)  
[Value type](value-type.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 295 |
| Thread safe | &check; |
| Forbidden on the server ||


