---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                      |
| ----------- | ----------------------------------- |
| 20 R10      | Nuevo parámetro *autoLicenseTarget* |
| 20          | Añadidos                            |

</details>

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *autoLicenseTarget* ) : Object<br/>**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->

<!--REF #_command_.Create deployment license.Params-->

| Parámetros        | Tipo                      |                             | Descripción                                                   |
| ----------------- | ------------------------- | --------------------------- | ------------------------------------------------------------- |
| mergedApp         | 4D.Folder | &#8594; | Carpeta que contiene la aplicación fusionada                  |
| autoLicenseTarget | Integer                   | &#8594; | Licencia objetivo para la integración automática de licencias |
| buildLicense      | 4D.File   | &#8594; | Licencia necesaria para generar la licencia integrada         |
| oemLicense        | 4D.File   | &#8594; | Licencia 4D OEM XML Key si se trata de una licencia servidor  |
| Resultado         | Object                    | &#8592; | Estado                                                        |

<!-- END REF-->

## Descripción

<!--REF #_command_.Create deployment license.Summary-->El comando **Create deployment license** crea un archivo de licencia integrado en la carpeta Licenses de la aplicación generada *mergedApp*.<!-- END REF--> If the Licenses folder does not exist in the *mergedApp* folder, it is created by the command.

In *mergedApp*, pass a [4D.Folder](../API/FolderClass.md) object containing a reference to the folder containing the built application in which you want to embed a license.

Depending on the second parameter, you [let 4D select automatically the license to use](#automatic-license-selection) for the target or [designate the license(s) to use](#designating-the-licenses-to-use).

### Selección automática de licencia

If you pass the *autoLicenseTarget* parameter, you let 4D find and use the most appropriate license for the specified target. For more information on the automatic license selection, please refer to the [Build application](../Desktop/building.md#application-automatically-embedding-available-licenses) section.

The following constants are supported in the *autoLicenseTarget* parameter:

| Constante         | Valor | Descripción                                                     |
| ----------------- | ----- | --------------------------------------------------------------- |
| 4D Volume Desktop | 1     | Create automatically a license for a 4D single-user application |
| 4D Server         | 5     | Create automatically a license for a 4D Server application      |

Si no se encuentra una licencia válida, se genera un error.

### Designación de la(s) licencia(s) a utilizar

In *license*, pass a [4D.File](../API/FileClass.md) object containing a reference to the license file used to generate the embedded license.

In the non-automatic mode, if the build requires a specific OEM license (*4D OEM XML Keys*) and if no such license is already installed in the Licenses folder of the building machine, you need to pass it using the *oemLicense* parameter. This parameter is useful if you dedicate a machine to build your applications.

### Resultado

The command returns a *status* object containing the following properties:

| **Propiedad**                                                                      | **Tipo**                                       | **Description**                                                                                                                   |
| ---------------------------------------------------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                            | Boolean                                        | True si se ha generado el archivo de licencia                                                                                     |
| file                                                                               | [4D.File](../API/FileClass.md) | El archivo de licencia generado                                                                                                   |
| statusText                                                                         | Text                                           | Descripción del error si lo hay                                                                                                   |
| errors                                                                             | Collection                                     | Colección de objetos de error                                                                                                     |
| \[\].message | Text                                           | Mensaje de error                                                                                                                  |
| \[\].errCode | Number                                         | Número de error                                                                                                                   |
| standalone                                                                         | Object                                         | (only in [automatic mode](#automatic-license-selection) Description attributes for `4D Volume Desktop` license |
| oemServer                                                                          | Object                                         | (only in [automatic mode](#automatic-license-selection) Description attributes for `4D Server` OEM license     |
| oemXMLKey                                                                          | Object                                         | (only in [automatic mode](#automatic-license-selection) Description attributes for `4D Server` XML Key license |

*Los atributos Description* son:

| **Propiedad**        | **Tipo** | **Description**                            |
| -------------------- | -------- | ------------------------------------------ |
| absolutePlatformPath | Text     | Path to the original license file retained |
| offerName            | Text     | Nombre comercial de la licencia retenida   |
| productNumber        | Number   | Serial number of the license retained      |

:::note Notas

- The generated license must be used only with the application referenced by *mergedApp*.
- It is necessary to regenerate the license each time the application is rebuilt.

:::

## Ejemplo 1

Use the automatic syntax to create a single-user 4D application:

```4d
 var $status : Object
 var $application : 4D.File
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;4D Volume Desktop)
```

## Ejemplo 2

Designar una licencia de uso:

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

## Ver también

[Blog post - Finalize an application with 4D commands](https://blog.4d.com/finalize-an-application-with-4d-commands)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1811                        |
| Hilo seguro       | &cross; |


