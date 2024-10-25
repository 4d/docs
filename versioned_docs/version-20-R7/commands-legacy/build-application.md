---
id: build-application
title: BUILD APPLICATION
slug: /commands/build-application
displayed_sidebar: docs
---

<!--REF #_command_.BUILD APPLICATION.Syntax-->**BUILD APPLICATION** {( *buildAppSettings* )}<!-- END REF-->
<!--REF #_command_.BUILD APPLICATION.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| buildAppSettings | Text | &#8594;  | Full access path of the settings file to use |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.BUILD APPLICATION.Summary-->The BUILD APPLICATION command launches the application generation process.<!-- END REF--> It takes into account parameters set in the current build application settings file or the settings file set in the *buildAppSettings* parameter. 

**Note:** This command can only work with 4D Developer (single-user). It cannot be called from 4D Server, 4D in remote mode, or a mergerd application. 

A build application settings file is an XML file that contains all the parameters used to generate an application. Most parameters can be seen in the Build Application dialog box (for more information, refer to the *Application builder* section of the 4D Design Reference manual).

By default, 4D creates a build application settings file named “buildApp.4DSettings” for each database and places it in the Settings folder of the database.

If the database has not yet been compiled or if the compiled code is outdated, the command will first launch the compiler process. In this case, the compiler window does not appear (unless an error occurs), only a progress bar is displayed. You can hide this progress bar using the [MESSAGES OFF](messages-off.md) command.

If you do not pass the optional buildAppSettings parameter, the command displays a standard open file dialog box, so that you can designate a build application settings file. When the dialog box has been validated, the system variable Document contains the full pathname of the open settings file.

If you pass the access path and name of an XML file for a valid application project (UTF-8 encoding), the command will use the parameters defined in the file. For more information on the structure and the keys that can be used in the build application settings file, refer to the *4D XML Keys BuildApplication* manual.

#### Example 

This example builds two applications in a single method:

```4d
 BUILD APPLICATION("c:\\folder\\buildApp\\myclientApp.xml")
 If(OK=1)
    BUILD APPLICATION(File(Build application settings file).platformPath) //default settings
 End if
```

#### System Variables or Sets 

The system variable OK is set to 1 if the command has been correctly executed. Otherwise, it is set to 0\. The system variable Document contains the full pathname of the open settings file.

#### Error Handling 

If the command fails, an error is generated that you can intercept using the [ON ERR CALL](on-err-call.md) command.

#### See also 

[Compile project](compile-project.md)  