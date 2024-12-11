---
id: play
title: PLAY
slug: /commands/play
displayed_sidebar: docs
---

<!--REF #_command_.PLAY.Syntax-->**PLAY** ( *objectName* {; *async*} )<!-- END REF-->
<!--REF #_command_.PLAY.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| objectName | Text | &#8594;  | Name or path of sound file or system soundEmpty string for stopping asynchronous play |
| async | Integer | &#8594;  | (Windows) If specified, asynchronous execution; If omitted, synchronous execution |

<!-- END REF-->

#### Description 

<!--REF #_command_.PLAY.Summary-->The **PLAY** command plays sound or multimedia files.<!-- END REF--> You pass the full pathname of the file you want to play in *objectName*. On OS X, the command can also be used to play a system sound. 

* To play a file, pass its name and pathname in *objectName*. You can pass a full pathname or a pathname relative to the database structure file.  
The main sound and multimedia file formats are supported: .WAV, .MP3, .AIFF (OS X), etc. Under OS X, the command supports more particularly the Core Audio formats.
* (OS X only) To play a system sound, pass its name directly in the *objectName* parameter.

**Note:** 'snd' resources, as used on Mac OS 9 and older, are no longer supported.

The *async* parameter specifies that the sound will play asynchronously on Windows. Synchronous play means that all processing stops until the sound has finished playing; asynchronous means that processing does not stop and the sound plays in the background. If *async* is passed and contains 0 (or any longint value), the sound is played asynchronously. If omitted, the sound is played synchronously.  
**Note:** On OS X, the sound is always played asynchronously, with or without the *async* parameter.

To stop playing an asynchronous sound, use the following statement:

```4d
 PLAY("";0)
```

#### Example 1 

The following example shows how to play a WAV file on Windows:

```4d
 $DocRef :=Open document("";"WAV";Read Mode)
 If(OK=1)
    CLOSE DOCUMENT($DocRef)
    PLAY(Document;0) //play asynchronously
 End if
```

#### Example 2 

The following example code plays a system sound on OS X:

```4d
 PLAY("Submarine.aiff")
```

#### See also 

[BEEP](beep.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 290 |
| Thread safe | &check; |
| Forbidden on the server ||


