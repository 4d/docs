---
id: volume-attributes
title: VOLUME ATTRIBUTES
slug: /commands/volume-attributes
displayed_sidebar: docs
---

<!--REF #_command_.VOLUME ATTRIBUTES.Syntax-->**VOLUME ATTRIBUTES** ( *volume* ; *size* ; *used* ; *free* )<!-- END REF-->
<!--REF #_command_.VOLUME ATTRIBUTES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| volume | Text | &#8594;  | Volume name |
| size | Real | &#8592; | Volume size expressed in bytes |
| used | Real | &#8592; | Used space expressed in bytes |
| free | Real | &#8592; | Free space expressed in bytes |

<!-- END REF-->

#### Description 

<!--REF #_command_.VOLUME ATTRIBUTES.Summary-->The VOLUME ATTRIBUTES command returns, expressed in bytes, the size, the used space and the free space for the volume whose name you pass in *volume*.<!-- END REF-->If *volume* indicates a non-mounted remote volume, the OK variable is set to 0 and the three parameters return -1\. 

#### Example 

Your application includes some batch operations running the night or the week-end that store huge temporary files on disk. To make this process as automatic and flexible as possible, you write a routine that will automatically find the first volume whose free space is sufficient for your temporary files. You might write the following project method:

```4d
  // Find volume for space Project Method
  // Find volume for space ( Real ) -> String
  // Find volume for space ( Space needed in bytes ) -> Volume name or Empty string
 
 C_STRING(31;$0)
 C_STRING(255;$vsDocName)
 var $vlNbVolumes;$vlVolume : Integer
 var $1;$vlSize;$vlUsed;$vlFree : Real
 var $vhDocRef : Time
 
  // Initialize function result
 $0:=""
  // Protect all I/O operations with an error interruption method
 ON ERR CALL("ERROR METHOD")
  // Get the list of the volumes
 ARRAY STRING(31;$asVolumes;0)
 gError:=0
 VOLUME LIST($asVolumes)
 If(gError=0)
  // If running on windows, skip the (usual) two floppy drives
    If(On Windows)
       $vlVolume:=Find in array($asVolumes;"A:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($asVolumes;$vlVolume)
       End if
       $vlVolume:=Find in array($asVolumes;"B:\\")
       If($vlVolume>0)
          DELETE FROM ARRAY($asVolumes;$vlVolume)
       End if
    End if
    $vlNbVolumes:=Size of array($asVolumes)
  // For each volume
    For($vlVolume;1;$vlNbVolumes)
  // Get the size, used space and free space
       gError:=0
       VOLUME ATTRIBUTES($asVolumes{$vlVolume};$vlSize;$vlUsed;$vlFree)
       If(gError=0)
  // Is the free space large enough (plus an extra 32K) ?
          If($vlFree>=($1+32768))
  // If so, check if the volume is unlocked...
             $vsDocName:=$asVolumes{$vlVolume}+Char(Directory symbol)+"XYZ"+String(Random)+".TXT"
             $vhDocRef:=Create document($vsDocName)
             If(OK=1)
                CLOSE DOCUMENT($vhDocRef)
                DELETE DOCUMENT($vsDocName)
  // If everything's fine, return the name of the volume
                $0:=$asVolumes{$vlVolume}
                $vlVolume:=$vlNbVolumes+1
             End if
          End if
       End if
    End for
 End if
 ON ERR CALL("")
```

Once this project method is added to your application, you can for instance write:

```4d
 $vsVolume:=Find volume for space(100*1024*1024)
 If($vsVolume#"")
  // Continue
 Else
    ALERT("A volume with at least 100 MB of free space is required!")
 End if
```

#### See also 

[VOLUME LIST](volume-list.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 472 |
| Thread safe | &check; |
| Modifies variables | OK, error |
| Forbidden on the server ||


