---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<details><summary>History</summary>

|Release|Changes|
|---|---|
|20 R10|New *autoLicenseTarget* parameter|
|20|Added|

</details>

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *autoLicenseTarget* ) : Object<br/>**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->

<!--REF #_command_.Create deployment license.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| mergedApp | 4D.Folder | &#8594;  | Folder containing the merged application |
| autoLicenseTarget | Integer | &#8594;  | Target license for automatic license embedding |
| buildLicense | 4D.File | &#8594;  | License required to generate the embedded license |
| oemLicense | 4D.File | &#8594;  | 4D OEM XML Key license if server license |
| Function result | Object | &#8592; | Status |

<!-- END REF-->

## Description 

<!--REF #_command_.Create deployment license.Summary-->The **Create deployment license** command creates an embedded license file in the Licenses folder of the *mergedApp* built application.<!-- END REF--> If the Licenses folder does not exist in the *mergedApp* folder, it is created by the command.

In *mergedApp*, pass a [4D.Folder](../API/FolderClass.md) object containing a reference to the folder containing the built application in which you want to embed a license. 

You can then [let 4D select automatically the license to use](#automatic-license) for the target or [designate the licenses to use](#designating-the-licenses-to-use).

### Automatic license selection

If you pass the *autoLicenseTarget* parameter, you let 4D find and use the most appropriate license for the specified target. For more information on the automatic license selection, please refer to the [Build application](../Desktop/building.md#application-automatically-embedding-available-licenses) section. 

The following constants are supported in the *autoLicenseTarget* parameter:

| Constant | Value| Description |
| --- | --- | --- |
| 4D Volume Desktop | 1 | Create automatically a license for a 4D single-user application  |
| 4D Server | 5 | Create automatically a license for a 4D Server application  |


If no valid license is found, an error is generated. 

### Designating the license(s) to use

In *license*, pass a [4D.File](../API/FileClass.md) object containing a reference to the license file used to generate the embedded license.

If the build requires a specific OEM license (*4D OEM XML Keys*) and if no such license is already installed in the Licenses folder of the building machine, you need to pass it using the *oemLicense* parameter. This parameter is useful if you dedicate a machine to build your applications. 

The command returns a *status* object containing the following properties:

| **Property** | **Type**                                               | **Description**                             |
| ------------ | ------------------------------------------------------ | ------------------------------------------- |
| success      | Boolean                                                | True if the license file has been generated |
| file         | [4D.File](../API/FileClass.md) | The generated license file                  |
| statusText   | Text                                                   | Description of the error if any             |
| errors       | Collection                                             | Collection of error objects                 |
| \[\].message | Text                                                   | Error message                               |
| \[\].errCode | Number                                                 | Error number                                |



:::note Notes

* The generated license must be used only with the application referenced by *mergedApp*.
* It is necessary to regenerate the license each time the application is rebuilt.

:::

## Example 1

Use the automatic syntax to create a single-user 4D application:

```4d
 var $status : Object
 var $application : 4D.File
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;4D Volume Desktop)
```



## Example 2

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

## See also 

[Blog post - Finalize an application with 4D commands](https://blog.4d.com/finalize-an-application-with-4d-commands)  

## Properties

|  |  |
| --- | --- |
| Command number | 1811 |
| Thread safe | &cross; |


