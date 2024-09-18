---
id: http-get-certificates-folder
title: HTTP Get certificates folder
slug: /commands-legacy/http-get-certificates-folder
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get certificates folder.Syntax-->**HTTP Get certificates folder**  -> Function result<!-- END REF-->
<!--REF #_command_.HTTP Get certificates folder.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &larr; | Complete pathname of active certificates folder |

<!-- END REF-->

#### Description 

<!--REF #_command_.HTTP Get certificates folder.Summary-->The **HTTP Get certificates folder** command returns the complete pathname of the active client certificates folder.<!-- END REF-->

By default, 4D uses the "ClientCertificatesFolder" folder that is created next to the structure file (folder only created if necessary). However, you can create a custom folder for the current process using the [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md) command.

#### Example 

You want to change certificates folder temporarily:

```4d
 var $certifFolder : Text
 $certifFolder :=HTTP Get certificates folder //save current folder
 HTTP SET CERTIFICATES FOLDER("C:/temp/certifTempo/")
 ... // execution of specific requests
 HTTP SET CERTIFICATES FOLDER($certifFolder) //restore previous folder
```

#### See also 

[HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)  