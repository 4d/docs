---
id: blob
title: BLOB
---

A BLOB (Binary Large OBjects) field, variable or expression is a contiguous series of bytes which can be treated as one whole object or whose bytes can be addressed individually. A BLOB can be empty (null length) or can contain up to 2147483647 bytes (2 GB). 

A BLOB is loaded into memory in its entirety. A BLOB variable is held and exists in memory only. A BLOB field is loaded into memory from the disk, like the rest of the record to which it belongs.

Like the other field types that can retain a large amount of data (such as the Picture field type), BLOB fields are not duplicated in memory when you modify a record. Consequently, the result returned by the `Old` and `Modified` commands is not significant when applied to a BLOB field.

## Blob Types 

4D supports two types of blobs:
* **4D.Blob**: Blob object that encapsulates a blob or part of it without altering the original blob
* **C_BLOB**: Classical blob variable

We recommend using blob objects (4D.Blob) to manipulate blobs. Blob objects are optimized, shareable — when passed as method parameters, they are passed by reference — and usable in preemptive threads.

### Automatic conversion of blob type
4D automatically converts blob objects (4D.Blob) to classical blobs (C_BLOB) and vice versa. For example: 

```4d
C_BLOB($myBlob)
$o:=New object("blob";$myBlob)
$type:=Value type($o.blob)  //object
```

Some commands alter the original blob, and thus do not support the 4D.Blob type:

* [DELETE FROM BLOB](https://doc.4d.com/4dv19R/help/command/en/page560.html)
* [INSERT IN BLOB](https://doc.4d.com/4dv19R/help/command/en/page559.html) 
* [INTEGER TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page548.html) 
* [LONGINT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page550.html) 
* [REAL TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page552.html) 
* [SET BLOB SIZE](https://doc.4d.com/4dv19R/help/command/en/page606.html) 
* [TEXT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page554.html) 
* [VARIABLE TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page532.html) 
* [LIST TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page556.html) 

## Passing blobs as parameters

4D BLOBs can be passed as parameters to 4D commands or plug-in routines that expect BLOB parameters. BLOBS can also be passed as parameters to a user method or be returned as a function result.

### Passing a 4D.Blob

```4d
var $myBlob: 4D.Blob.new
$myText:= BLOB to text ( $myBlob ; UTF8 )
```

### Passing a C_BLOB 

To modify a blob, you need to use a C_BLOB variable and pass it to a command. For example: 

```4d
C_BLOB($myBlob)
SET BLOB SIZE ($myBlob ; 16*1024)
```

### Passing a C_BLOB by reference using a pointer

To pass a C_BLOB to your own methods, you can also define a pointer to the C_BLOB and pass the pointer as parameter.

**Examples:**
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The BLOB is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The BLOB is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The BLOB is passed as a parameter to a method that returns a BLOB
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the BLOB is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**Note for Plug-in developers:** A BLOB parameter is declared as “&O” (the letter “O”, not the digit “0”).

## Assignment operator

You can assign BLOBs to each other.

**Example:**
```4d
  ` Declare two variables of type BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Set the size of the first BLOB to 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Assign the first BLOB to the second one
 vBlobB:=vBlobA
```

However, no operator can be applied to BLOBs.

## Addressing BLOB contents  

You can address each byte of a BLOB individually using the curly brackets symbols {...}. Within a BLOB, bytes are numbered from 0 to N-1, where N is the size of the BLOB. Example:
```4d
  ` Declare a variable of type BLOB
 C_BLOB(vBlob)
  ` Set the size of the BLOB to 256 bytes
 SET BLOB SIZE(vBlob;256)
  ` The loop below initializes the 256 bytes of the BLOB to zero
 For(vByte;0;BLOB size(vBlob)-1)
    vBlob{vByte}:=0
 End for
```
Because you can address all the bytes of a BLOB individually, you can actually store whatever you want in a BLOB field or variable.
