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

<!--REF #_command_.Create deployment license.Summary-->El comando **Create deployment license** crea un archivo de licencia integrado en la carpeta Licenses de la aplicación generada *mergedApp*.<!-- END REF--> Si la carpeta Licenses no existe en la carpeta *mergedApp*, será creada por el comando.

En *mergedApp*, pase un objeto [4D.Folder](../API/FolderClass.md) que contenga una referencia a la carpeta que contiene la aplicación generada en la que desea integrar una licencia.

En función del segundo parámetro, usted [deja que 4D seleccione automáticamente la licencia a utilizar](#automatic-license-selection) para el objetivo o [designa la(s) licencia(s) a utilizar](#designating-the-licenses-to-use).

### Selección automática de licencia

Si pasa el parámetro *autoLicenseTarget*, deja que 4D encuentre y utilice la licencia más apropiada para el objetivo especificado. Para más información sobre la selección automática de licencias, consulte la sección [Crear aplicación](../Desktop/building.md#application-automatically-embedding-available-licenses).

Se soportan las siguientes constantes en el parámetro *autoLicenseTarget*:

| Constante         | Valor | Descripción                                                            |
| ----------------- | ----- | ---------------------------------------------------------------------- |
| 4D Volume Desktop | 1     | Crear automáticamente una licencia para una aplicación 4D mono usuario |
| 4D Server         | 5     | Crear automáticamente una licencia para una aplicación 4D Server       |

Si no se encuentra una licencia válida, se genera un error.

### Designación de la(s) licencia(s) a utilizar

En *license*, pase un objeto [4D.File](../API/FileClass.md) que contenga una referencia al archivo de licencia utilizado para generar la licencia integrada.

En el modo no automático, si la compilación requiere una licencia OEM específica (*4D OEM XML Keys*) y si dicha licencia no está ya instalada en la carpeta Licenses de la máquina de compilación, deberá pasarla utilizando el parámetro *oemLicense*. Este parámetro es útil si dedica una máquina a la generación de sus aplicaciones.

### Resultado

El comando devuelve un objeto *status* que contiene las siguientes propiedades:

| **Propiedad**                                                                      | **Tipo**                                       | **Description**                                                                                                                                   |
| ---------------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                            | Boolean                                        | True si se ha generado el archivo de licencia                                                                                                     |
| file                                                                               | [4D.File](../API/FileClass.md) | El archivo de licencia generado                                                                                                                   |
| statusText                                                                         | Text                                           | Descripción del error si lo hay                                                                                                                   |
| errors                                                                             | Collection                                     | Colección de objetos de error                                                                                                                     |
| \[\].message | Text                                           | Mensaje de error                                                                                                                                  |
| \[\].errCode | Number                                         | Número de error                                                                                                                                   |
| standalone                                                                         | Object                                         | (solo en [modo automático](#automatic-license-selection) Atributos de descripción para licencia `Volumen 4D Desktop`           |
| oemServer                                                                          | Object                                         | (solo en [modo automático](#automatic-license-selection) Atributos de descripción para licencia OEM `4D Server`                |
| oemXMLKey                                                                          | Object                                         | (solo en [modo automático](#automatic-license-selection) Atributos de descripción para la licencia de la llave XML `4D Server` |

*Los atributos Description* son:

| **Propiedad**        | **Tipo** | **Description**                              |
| -------------------- | -------- | -------------------------------------------- |
| absolutePlatformPath | Text     | Ruta al archivo de licencia original elegido |
| offerName            | Text     | Nombre comercial de la licencia retenida     |
| productNumber        | Number   | Número de serie de la licencia elegida       |

:::note Notas

- La licencia generada debe utilizarse únicamente con la aplicación referenciada por *mergedApp*.
- Es necesario regenerar la licencia cada vez que se regenera la aplicación.

:::

## Ejemplo 1

Usar la sintaxis automática para crear una aplicación 4D mono usuario:

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

[Blog post - Build an application with 4D commands](https://blog.4d.com/build-an-application-with-4d-commands)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1811                        |
| Hilo seguro       | &cross; |


