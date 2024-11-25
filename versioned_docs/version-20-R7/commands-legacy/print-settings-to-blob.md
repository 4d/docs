---
id: print-settings-to-blob
title: Print settings to BLOB
slug: /commands/print-settings-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.Print settings to BLOB.Syntax-->**Print settings to BLOB** ( *printSettings* ) : Integer<!-- END REF-->
<!--REF #_command_.Print settings to BLOB.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| printSettings | Blob | &#8592; | Current print settings |
| Function result | Integer | &#8592; | Status code: 1=Operation successful, 0=No current printer |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Print settings to BLOB.Summary-->The **Print settings to BLOB** command saves the current 4D print settings in the *printSettings* BLOB.<!-- END REF--> The *printSettings* parameter stores all the settings used for printing:

* Layout parameters such as paper, orientation, scale, etc.
* Print parameters such as number of copies, paper source, etc.

This command must be used in conjunction with the [BLOB to print settings](blob-to-print-settings.md) command. These commands allow you to save a user's current print settings and reload them subsequently so that users will not need to specify their parameters each time they start a print job. In addition, it allows you to save "private" printer settings (specific to the printer driver) that are not available as standard printing parameters. 

The BLOB generated must not be modified by programming; it can only be used by the [BLOB to print settings](blob-to-print-settings.md) command.

The command returns 1 if the BLOB has been generated correctly, and 0 if no current printer is selected.

##### Windows / OS X 

The *printSettings* BLOB can be saved and read on both platforms. However, even if some print settings are common, some others are platform-specific and depend on the drivers and system versions. If the same *printSettings* BLOB is shared between both platforms, you may lost information parts.   
When used in an heterogeneous environment, in order to restore the maximum settings available for each platform (and not only the common part), it is recommended that you handle two *printSettings* BLOBs, one for each platform.

#### Example 

You want to store the current print settings to disk:

```4d
 var curSettings : Blob
 PRINT SETTINGS //displays print settings dialog to the user
 If(OK=1)
    $err:=Print settings to BLOB(curSettings)
    If($err=1)
       BLOB TO DOCUMENT(Get 4D folder+"current4Dsettings.blob";curSettings)
    Else
       ALERT("No selected printer")
    End if
 End if
```

#### See also 

  
[BLOB to print settings](blob-to-print-settings.md)  