---
id: blob
title: BLOB
---

- A BLOB (Binary Large OBjects) field, variable or expression is a contiguous series of bytes which can be treated as one whole object or whose bytes can be addressed individually. A BLOB can be empty (null length) or contain up to 2147483647 bytes (2 GB).

> By default, 4D sets the maximum blob size to 2GB, but this size limit may be lower depending on your OS and how much space is available.

- A BLOB is loaded into memory in its entirety. A BLOB variable is held and exists in memory only. A BLOB field is loaded into memory from the disk, like the rest of the record to which it belongs.
- Like the other field types that can retain a large amount of data (such as the Picture field type), BLOB fields are not duplicated in memory when you modify a record. Consequently, the result returned by the `Old` and `Modified` commands is not significant when applied to a BLOB field.

## Parameter passing, Pointers and function results

4D BLOBs can be passed as parameters to 4D commands or plug-in routines that expect BLOB parameters. BLOBS can also be passed as parameters to a user method or be returned as a function result.

To pass a BLOB to your own methods, you can also define a pointer to the BLOB and pass the pointer as parameter.

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
