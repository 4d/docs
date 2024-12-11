---
id: variable-to-blob
title: VARIABLE TO BLOB
slug: /commands/variable-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO BLOB.Syntax-->**VARIABLE TO BLOB** ( *variable* ; *blob* {; offset | *} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable to store in the BLOB |
| blob | Blob | &#8594;  | BLOB to receive the variable |
| offset &#124; * | Variable, Operator | &#8596; | Offset within the BLOB (expressed in bytes) or * to append the value |
| ||| New offset after writing if not * |

<!-- END REF-->

#### Description 

<!--REF #_command_.VARIABLE TO BLOB.Summary-->The VARIABLE TO BLOB command stores the variable *variable* in the BLOB *blob*.<!-- END REF-->

If you specify the \* optional parameter, the variable is appended to the BLOB and the size of the BLOB is extended accordingly. Using the \* optional parameter, you can sequentially store any number of variables or lists (see other BLOB commands) in a BLOB, as long as the BLOB fits into memory. 

If you do not specify the \* optional parameter or the *offset* variable parameter, the variable is stored at the beginning of the BLOB, overriding its previous contents; the size of the BLOB is adjusted accordingly.

If you pass the *offset* variable parameter, the variable is written at the offset (starting from zero) within the BLOB. No matter where you write the variable, the size of the BLOB is increased according to the location you passed (plus the size of the variable, if necessary). Newly allocated bytes, other than the ones you are writing, are initialized to zero.

After the call, the *offset* variable parameter is returned, incremented by the number of bytes that have been written. Therefore, you can reuse that same variable with another BLOB writing command to write another variable or list.

VARIABLE TO BLOB accepts any type of variable (including other BLOBs), except the following:

* Pointer
* Array of pointers

Note that:

* if you store a Long Integer variable that is a reference to a hierarchical list (ListRef), VARIABLE TO BLOB stores the Long Integer variable, not the list. To store and retrieve hierarchical lists in and from a BLOB, use the [LIST TO BLOB](list-to-blob.md) and [BLOB to list](blob-to-list.md) commands.
* if you pass an object or a collection in the *variable* parameter, the command places a copy (and not a reference) of it in the BLOB. If the object or collection contains pointers, their dereferenced values are stored in the BLOB, not the pointers themselves.

**WARNING:** If you use a BLOB for storing variables, you must later use the command [BLOB TO VARIABLE](blob-to-variable.md) for reading back the contents of the BLOB, because variables are stored in BLOBs using a 4D internal format.

After the call, if the variable has been successfully stored, the OK variable is set to 1\. If the operation could not be performed, the OK variable is set to 0; for example, there was not enough memory.

**Note regarding Platform Independence:** VARIABLE TO BLOB and [BLOB TO VARIABLE](blob-to-variable.md) use a 4D internal format for handling variables stored in BLOBs. As a benefit, you do not need to worry about byte swapping between platforms while using these two commands. In other words, a BLOB created on Windows using either of these commands can be reused on Macintosh, and vice-versa.

##### Note 

**Compatiblity note:** Since this command alters the blob passed as a parameter, it does not support blob objects (4D.Blob type). See *Passing blobs and blob objects to 4D commands* on developer.4d.com.

#### System variables and sets 

The OK variable is set to 1 if the variable has been successfully stored, otherwise it is set to 0.

#### Example 1 

The two following project methods allow you to quickly store and retrieve any set of variables into and from a BLOB:

```4d
  //STORE VARIABLES INTO BLOB project method
  //STORE VARIABLES INTO BLOB ( Pointer { ; Pointer ... { ; Pointer } } )
  //STORE VARIABLES INTO BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam : Integer
 
 SET BLOB SIZE($1->;0)
 For($vlParam;2;Count parameters)
    VARIABLE TO BLOB(${$vlParam}->;$1->;*)
 End for
 
 
  //RETRIEVE VARIABLES FROM BLOB project method
  //RETRIEVE VARIABLES FROM BLOB ( Pointer { ; Pointer ... { ; Pointer } } )
  //RETRIEVE VARIABLES FROM BLOB ( BLOB { ; Var1 ... { ; Var2 } } )
 var ${1} : Pointer
 var $vlParam;$vlOffset : Integer
 
 $vlOffset:=0
 For($vlParam;2;Count parameters)
    BLOB TO VARIABLE($1->;${$vlParam}->;$vlOffset)
 End for
```

After these methods have been added to your application, you can write:

```4d
 STORE VARIABLES INTO BLOB(->vxBLOB;->vgPicture;->asAnArray;->alAnotherArray)
  // ...
 RETRIEVE VARIABLES FROM BLOB(->vxBLOB;->vgPicture;->asAnArray;->alAnotherArray)
```

#### Example 2 

The two following project methods allow you to quickly store and retrieve arrays into and from documents on disk:

```4d
  // SAVE ARRAY project method
  // SAVE ARRAY (Text ; Pointer)
  // SAVE ARRAY (Document ; -> Array)
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 VARIABLE TO BLOB($2->;$vxArrayData) // Store the array in the BLOB
 COMPRESS BLOB($vxArrayData) // Compress the BLOB
 BLOB TO DOCUMENT($1;$vxArrayData) // Save the BLOB on disk
```

```4d
  // LOAD ARRAY project method
  // LOAD ARRAY (Text ; Pointer)
  // LOAD ARRAY (Document ; -> Array)
 var $1 : Text
 var $2 : Pointer
 var $vxArrayData : Blob
 DOCUMENT TO BLOB($1;$vxArrayData) // Load the BLOB from the disk
 EXPAND BLOB($vxArrayData) // Expand the BLOB
 BLOB TO VARIABLE($vxArrayData;$2->) // Retrieve the array from the BLOB
```

After these methods have been added to your application, you can write:

```4d
 ARRAY TEXT(...;asAnyArray;...)
  //  ...
 SAVE ARRAY($vsDocName;->asAnyArray)
  //  ...
 LOAD ARRAY($vsDocName;->asAnyArray)
```

#### See also 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[LIST TO BLOB](list-to-blob.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 532 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


