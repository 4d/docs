---
id: application-version
title: Application version
slug: /commands/application-version
displayed_sidebar: docs
---

<!--REF #_command_.Application version.Syntax-->**Application version** {( *buildNum* {; *} )} : Text<!-- END REF-->
<!--REF #_command_.Application version.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| buildNum | Integer | &#8592; | Build number |
| * | Operator | &#8594;  | Long version number if passed, otherwise Short version number |
| Function result | Text | &#8592; | Version number encoded string |

<!-- END REF-->

#### Description 

<!--REF #_command_.Application version.Summary-->The Application version command returns an encoded string value that expresses the version number of the 4D environment you are running.<!-- END REF-->

 \- If you do not pass the optional \* parameter, a 4-character string is returned, formatted as follows:

| **Characters** | **Description** |
| -------------- | --------------- |
| 1-2            | Version number  |
| 3              | "R" number      |
| 4              | Revision number |

\- If you pass the optional *\** parameter, an 8-character string is returned, formatted as follows:

| **Characters**                                 | **Description**                |
| ---------------------------------------------- | ------------------------------ |
| 1                                              | "F" denotes a final version    |
| "B" denotes a beta version                     |                                |
| Other characters denote an 4D internal version |                                |
| 2-3-4                                          | Internal 4D compilation number |
| 5-6                                            | Version number                 |
| 7                                              | "R" number                     |
| 8                                              | Revision number                |

**Compatibility note (4D v14)**

Version numbering has been changed beginning with version 14 of 4D:

* the **"R" number** is the number of the "R" version of 4D, for example 3 for version R3 (contains 0 for a bug fix version),
* the **revision number** is the number of the bug fix version of 4D (contains 0 for an "R" version).

In previous versions of 4D, the number of the "R" version was the update number; it designated the revision and the revision number itself was always 0.

Examples for a short version number:

| **Versions** | **Value returned** |                                  |
| ------------ | ------------------ | -------------------------------- |
| 4D v13.1     | "1310"             | *Previous numbering system*      |
| 4D v14 R2    | "1420"             | Release R2                       |
| 4D v14 R3    | "1430"             | Release R3                       |
| 4D v14.1     | "1401"             | First bug fix version of 4D v14  |
| 4D v14.2     | "1402"             | Second bug fix version of 4D v14 |

Examples for a long version number:

| **Versions**    | **Value returned** |
| --------------- | ------------------ |
| 4D v12.5 beta   | "B0011250"         |
| 4D v14 R2 beta  | "B0011420"         |
| 4D v14 R3 final | "F0011430"         |
| 4D v14.1 beta   | "B0011401"         |

The Application version command can return additional information in the optional *buildNum* parameter: the build number of the current version of the 4D application. This is an internal compilation number that can be used for versioning or when contacting the 4D Technical Services department.

**Note:** In the case of applications that are compiled and merged with 4D Volume Desktop, the build number returned is not significant. In this context, version information is managed by the developer. 

#### Example 1 

This example displays the 4D environment version number:

```4d
 $vs4Dversion:=Application version
 ALERT("You are using the version "+String(Num(Substring($vs4Dversion;1;2)))+"."+
 $vs4Dversion[[3]]+"."+$vs4Dversion[[4]])
```

#### Example 2 

This example tests to verify that you are using a final version:

```4d
 If(Substring(Application version(*);1;1)#"F")
    ALERT("Please make sure you are using a Final Production version of 4D with this database!")
    QUIT 4D
 End if
```

#### Example 3 

You want to use the application's short version value returned by the command to display the 4D application release name. You can write:

```4d
 var $Lon_build : Integer
 var $Txt_info;$Txt_major;$Txt_minor;$Txt_release;$Txt_version : Text
 
 $Txt_version:=Application version($Lon_build)
 
 $Txt_major:=$Txt_version[[1]]+$Txt_version[[2]] //version number, e.g. 14
 $Txt_release:=$Txt_version[[3]] //Rx
 $Txt_minor:=$Txt_version[[4]] //.x
 
 $Txt_info:="4D v"+$Txt_major
 If($Txt_release="0") //4D v14.x
    $Txt_info:=$Txt_info+Choose($Txt_minor#"0";"."+$Txt_minor;"")
 
 Else //4D v14 Rx
    $Txt_info:=$Txt_info+" R"+$Txt_release
 End if
```

#### See also 

[Application type](application-type.md)  
[Version type](version-type.md)  