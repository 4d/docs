---
id: blob
title: BLOB
---

- BLOB (Binary Large OBjects) sind miteinander zusammenhängende Bytes unterschiedlicher Länge, die Sie als ganze Einheit oder als einzelne Bytes ansprechen können. A BLOB can be empty (null length) or contain up to 2147483647 bytes (2 GB).

> By default, 4D sets the maximum blob size to 2GB, but this size limit may be lower depending on your OS and how much space is available.

- Ein BLOB wird als Ganzes in den Speicher geladen. Eine BLOB Variable existiert und wird nur im Speicher gehalten. Ein BLOB Datenfeld wird von der Festplatte in den Speicher geladen sowie der Rest des Datensatzes, zu dem es gehört.
- Wie andere Feldtypen mit einer umfangreichen Datenanzahl, z. B. der Typ Bild, werden BLOB-Felder beim Ändern des Datensatzes nicht im Speicher dupliziert. Folglich ist das Ergebnis, das von den Befehlen `Old` und `Modified` bei Anwendung auf ein BLOB-Feld zurückgegeben wird, nicht signifikant.

## Parameterübergabe, Zeiger und Funktionsergebnisse

Sie können BLOBs von 4D als Parameter an 4D Befehle oder Plug-In Routinen übergeben, die BLOB Parameter erwarten. BLOBS lassen sich auch als Parameter an eine Benutzermethode übergeben oder als Funktionsergebnis zurückgeben.

Wollen Sie ein BLOB für Ihre eigenen Methoden übergeben, können Sie auch einen Zeiger auf das BLOB definieren und den Zeiger als Parameter übergeben.

**Beispiele:**
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
**Hinweis für Plug-In Entwickler:** Ein BLOB Parameter wird als “&0” deklariert (der Buchstabe “O”, nicht die Ziffer “0”).

## Zuweisung

Sie können BLOBs gegenseitig zuweisen.

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

Sie können jedes Byte eines BLOB über geschweifte Klammern {...} individuell ansprechen. Bytes in einem BLOB werden von 0 bis N-1 nummeriert, wobei N die Größe des BLOB ist. Beispiel:
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
Da jedes Byte eines BLOB einzeln ansprechbar ist, können Sie in einem Feld bzw. einer Variablen vom Typ BLOB speichern, was Sie möchten.
