---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->
<!--REF #_command_.Create deployment license.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| mergedApp | 4D.Folder | &#8594;  | Folder containing the merged application |
| buildLicense | 4D.File | &#8594;  | License required to generate the embedded license |
| oemLicense | 4D.File | &#8594;  | 4D OEM XML Key license if server license |
| Resultado | Object | &#8592; | Status |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Create deployment license.Summary-->The **Create deployment license** command creates an embedded license file in the Licenses folder of the *mergedApp* built application.<!-- END REF--> If the Licenses folder does not exist the *mergedApp*, it is created by the command.

In *mergedApp*, pass a [4D.Folder](https://developer.4d.com/docs/API/FolderClass) object containing a reference to the folder containing the built application in which you want to embed a license. 

In *license*, pass a [4D.File](https://developer.4d.com/docs/API/FileClass) object containing a reference to the license file used to generate the embedded license.

If the build requires a specific OEM license (*4D OEM XML Keys*) and if no such license is already installed in the Licenses folder of the building machine, you need to pass it using the *oemLicense* parameter. This parameter is useful if you dedicate a machine to build your applications. 

The command returns a *status* object containing the following properties:

| **Property** | **Type**                                               | **Description**                             |
| ------------ | ------------------------------------------------------ | ------------------------------------------- |
| success      | Boolean                                                | True if the license file has been generated |
| file         | [4D.File](https://developer.4d.com/docs/API/FileClass) | The generated license file                  |
| statusText   | Text                                                   | Description of the error if any             |
| errors       | Collection                                             | Collection of error objects                 |
| \[\].message | Text                                                   | Error message                               |
| \[\].errCode | Number                                                 | Error number                                |

**Notes:**

* The generated license must be used only with the application referenced by *mergedApp*.
* It is necessary to regenerate the license each time the application is rebuilt.

#### Exemplo 

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

#### Ver também 

  