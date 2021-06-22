---
id: blob
title: BLOB
---

A BLOB (Binary Large OBject) field, variable or expression is a contiguous series of bytes which can be treated as one whole object or whose bytes can be addressed individually. Ein BLOB kann leer sein (Länge Null) oder bis zu 2147483647 Bytes enthalten (2 GB).

Ein BLOB wird als Ganzes in den Speicher geladen. Eine BLOB Variable existiert und wird nur im Speicher gehalten. Ein BLOB Datenfeld wird von der Festplatte in den Speicher geladen sowie der Rest des Datensatzes, zu dem es gehört.

Wie andere Feldtypen mit einer umfangreichen Datenanzahl, z. B. der Typ Bild, werden BLOB-Felder beim Ändern des Datensatzes nicht im Speicher dupliziert. Folglich ist das Ergebnis, das von den Befehlen `Old` und `Modified` bei Anwendung auf ein BLOB-Feld zurückgegeben wird, nicht signifikant.

## Blob Types

4D supports two types of blobs:
* **4D.Blob**: Blob object that encapsulates a blob or part of it without altering the original blob (see [4D.Blob Class](../API/BlobClass.md))
* **C_BLOB**: Classical blob variable

We recommend using blob objects (4D.Blob) to manipulate blobs. Blob objects are optimized, shareable — when passed as method parameters, they are passed by reference — and usable in preemptive threads.

### Automatic conversion of blob type
4D automatically converts blob objects (4D.Blob) to classical blobs (C_BLOB) and vice versa. Beispiel:

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

Blobs can be passed as parameters to 4D commands or plug-in routines that expect blob parameters. blobs can also be passed as parameters to user methods, or returned by functions.

### Passing a 4D.Blob

```4d
var $myBlob: 4D.Blob.new
$myText:= BLOB to text ( $myBlob ; UTF8 )
```

### Passing a C_BLOB

To modify a blob, you need to use a C_BLOB variable and pass it to a command. Beispiel:

```4d
C_BLOB($myBlob)
SET BLOB SIZE ($myBlob ; 16*1024)
```

### Passing a C_BLOB by reference using a pointer

To pass a C_BLOB to your own methods, you can also define a pointer to the C_BLOB and pass the pointer as parameter.

**Beispiele:**
```4d
  ` Declare a variable of type BLOB
 C_BLOB(anyBlobVar)
  ` The blob is passed as parameter to a 4D command
 SET BLOB SIZE(anyBlobVar;1024*1024)
  ` The blob is passed as parameter to an external routine
 $errCode:=Do Something With This BLOB(anyBlobVar)
  ` The blob is passed as a parameter to a method that returns a blob
 C_BLOB(retrieveBlob)
 retrieveBlob:=Fill_Blob(anyBlobVar)
  ` A pointer to the blob is passed as parameter to a user method
 COMPUTE BLOB(->anyBlobVar)
```
**Hinweis für Plug-In Entwickler:** Ein BLOB Parameter wird als “&0” deklariert (der Buchstabe “O”, nicht die Ziffer “0”).

## Zuweisung

You can assign blobs to each other.

**Beispiel:**
```4d
  ` Declare two variables of type BLOB
 C_BLOB(vBlobA;vBlobB)
  ` Set the size of the first BLOB to 10K
 SET BLOB SIZE(vBlobA;10*1024)
  ` Assign the first BLOB to the second one
 vBlobB:=vBlobA
```

Sie können jedoch keinen Operator auf BLOBs anwenden.

## BLOB Inhalt ansprechen

You can address each byte of a blob individually using the curly brackets symbols {...}. Bytes in einem BLOB werden von 0 bis N-1 nummeriert, wobei N die Größe des BLOB ist. Beispiel:
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
Because you can address all the bytes of a blob individually, you can actually store whatever you want in a BLOB field or variable.
