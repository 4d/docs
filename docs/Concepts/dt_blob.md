---
id: blob
title: BLOB
---

A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes that can be treated as one whole object, or whose bytes can be addressed individually. A blob can be empty (null length) or contain up to 2147483647 bytes (2 GB). 

A blob is loaded into memory in its entirety. A blob variable is held and exists in memory only. A blob field is loaded into memory from the disk, like the rest of the record to which it belongs.

Like other field types that can retain a large amount of data (such as the Picture field type), Blob fields are not duplicated in memory when you modify a record. Consequently, the result returned by the `Old` and `Modified` commands is not significant when applied to a Blob field.

## Blob Types 

Using the 4D language, there are two ways to handle a blob:
* **as a scalar value**: a scalar blob can be altered and stored in a Blob variable or field.
* **as an object (`4D.Blob`)**: a `4D.Blob` is a blob object. It is passed by reference. You can encapsulate a blob or part of it in a `4D.Blob` without altering the original blob. This method is called [boxing](https://en.wikipedia.org/wiki/Object_type_(object-oriented_programming)#Boxing). See [4D.Blob Class](../API/BlobClass.md).

Each blob type has its advantages. Use the following table to determine which one suits your needs:

||Blob |4D.Blob |
|----|:----:|:----:|
|Alterable|Yes|No|
|Shareable in objects and collections|No|Yes|
|Duplicated when passed to custom methods*|Yes|No|
Performance when accessing bytes|+|-|

*Unlike certain built-in 4D commands designed to take a blob as a parameter, the methods you create duplicate scalar blobs passed as parameters. In that case, using a `4D.Blob` is more efficient.

## Passing blobs as parameters

Both types of blob can be passed as parameters to 4D commands or plug-in routines that expect blob parameters. 

They can also be passed as parameters to your own methods, and returned by functions. Keep in mind that unlike blob objects (`4D.Blob`), which are passed by reference, scalar blobs are duplicated in memory when passed to your own methods as parameters.

### Passing a blob to a 4D command

```4d
var $myBlob: 4D.Blob

$myBlob:= 4D.Blob.new()
$myText:= BLOB to text ( $myBlob ; UTF8 )
```

### Passing a scalar blob by reference using a pointer

To pass a scalar blob to your own methods without duplicating it in memory, define a pointer to the variable that stores it and pass the pointer as a parameter.

**Examples:**
```4d
  ` Declare a variable of type Blob
var $myBlobVar: Blob
  ` Pass the blob as parameter to a 4D command
 SET BLOB SIZE($myBlobVar;1024*1024)
  ` Pass the blob as parameter to an external routine
 $errCode:=Do Something With This blob($myBlobVar)
  ` Pass the blob as a parameter to a method that returns a blob
 var $retrieveBlob: Blob
 retrieveBlob:=Fill_Blob($myBlobVar)
  ` Pass a pointer to the blob as a parameter to your own method, 
 COMPUTE BLOB(->$myBlobVar)
```
**Note for Plug-in developers:** A BLOB parameter is declared as “&O” (the letter “O”, not the digit “0”).

You cannot use operators on blobs.

## Assigning a blob variable to another

You can assign a blob variable to another:

**Example:**
```4d
// Declare two variables of type Blob
 var $vBlobA; $vBlobB : Blob
// Set the size of the first blob to 10K
 SET BLOB SIZE($vBlobA;10*1024)
// Assign the first blob to the second one
 $vBlobB:=$vBlobA
```

## Automatic conversion of blob type
4D automatically converts scalar blobs to blob objects, and vice versa, when they're assigned to each other. For example: 

```4d
// Create a variable of type Blob and an object variable
var $myBlob: Blob
var $o : Object

// Assign that blob to an object's property named "blob"
$o:=New object("blob"; $myBlob)

// The blob stored in $myBlob is automatically converted to a 4D.Blob
$type:= OB Instance of($o.blob; 4D.Blob)  //True

// Conversion from 4D.Blob to blob
$myBlob:= $o.blob 
$type:= Value type($myBlob) // Blob

```

### Modifying a blob

Unlike blob objects, scalar blobs can be altered. You can modify the contents of a scalar blob. For example: 

```4d
var $myBlob : Blob
SET BLOB SIZE ($myBlob ; 16*1024)
```

Some commands alter the original blob, and thus do not support the `4D.Blob` type:

* [DELETE FROM BLOB](https://doc.4d.com/4dv19R/help/command/en/page560.html)
* [INSERT IN BLOB](https://doc.4d.com/4dv19R/help/command/en/page559.html) 
* [INTEGER TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page548.html) 
* [LONGINT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page550.html) 
* [REAL TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page552.html) 
* [SET BLOB SIZE](https://doc.4d.com/4dv19R/help/command/en/page606.html) 
* [TEXT TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page554.html) 
* [VARIABLE TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page532.html) 
* [LIST TO BLOB](https://doc.4d.com/4dv19R/help/command/en/page556.html) 


## Individually accessing bytes in a blob

### Accessing a scalar blob's bytes

You can address each byte of a scalar blob using curly brackets. Within a blob, bytes are numbered from 0 to N-1, where N is the size of the BLOB:
```4d
  ` Declare a variable of type Blob
 var $vBlob : Blob
  ` Set the size of the blob to 256 bytes
 SET BLOB SIZE($vBlob;256)
  ` The loop below changes the bytes, setting them to zero
 For(vByte;0;BLOB size($vBlob)-1)
    $vBlob{vByte}:=0
 End for
```
Because you can address all the bytes of a blob individually, you can store whatever you want in a Blob variable or field.

### Accessing a `4D.Blob`'s bytes
Use square brackets to directly access a specific byte in a `4D.Blob`

```4d 
$b:=$blobObj[3]
```

Since 4D.Blobs are not alterable, you can read the bytes of a 4D.Blob using this method, but not modify them.