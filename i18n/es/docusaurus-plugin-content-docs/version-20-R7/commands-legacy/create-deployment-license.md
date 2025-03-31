---
id: create-deployment-license
title: Create deployment license
slug: /commands/create-deployment-license
displayed_sidebar: docs
---

<!--REF #_command_.Create deployment license.Syntax-->**Create deployment license** ( *mergedApp* ; *buildLicense* {; *oemLicense*} ) : Object<!-- END REF-->
<!--REF #_command_.Create deployment license.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| mergedApp | 4D.Folder | &#8594;  | Carpeta que contiene la aplicación fusionada |
| buildLicense | 4D.File | &#8594;  | Licencia necesaria para generar la licencia anidada |
| oemLicense | 4D.File | &#8594;  | Licencia 4D OEM XML Key si se trata de una licencia servidor |
| Resultado | Object | &#8592; | Estado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Create deployment license.Summary-->El comando **Create deployment license** crea un archivo de licencia anidado en la carpeta Licenses de la aplicación creada *mergedApp*.<!-- END REF--> Si la carpeta Licenses no existe en *mergedApp*, el comando la creará.

En *mergedApp*, pase un objeto [4D.Folder](../API/FolderClass.md) que contenga una referencia a la carpeta que contiene la aplicación creada en la que desea anidar una licencia.

En *license*, pase un objeto [4D.File](../API/FileClass.md) que contenga una referencia al archivo de licencia utilizado para generar la licencia anidada.  
  
Si la compilación requiere una licencia OEM específica (*4D OEM XML Keys*) y si dicha licencia no está ya instalada en la carpeta Licenses de la máquina de compilación, necesita pasarla utilizando el parámetro *oemLicense* parameter. TEste parámetro es útil si dedica una máquina a crear sus aplicaciones.

| **Propiedad** | **Tipo**                                               | **Descripción**                               |
| ------------- | ------------------------------------------------------ | --------------------------------------------- |
| success       | Booleano                                               | True si se ha generado el archivo de licencia |
| file          | [4D.File](../API/FileClass.md) | El archivo de licencia generado               |
| statusText    | Texto                                                  | Descripción del error si lo hay               |
| errors        | Collection                                             | Colección de objetos de error                 |
| \[\].message  | Texto                                                  | Mensaje de error                              |
| \[\].errCode  | Number                                                 | Número de error                               |

**Notas:**

* La licencia generada debe utilizarse únicamente con la aplicación a la que hace referencia *mergedApp*.
* Es necesario regenerar la licencia cada vez que se reconstruya la aplicación.

#### Ejemplo 

```4d
 var $status : Object
 var $application : 4D.File
 var $license : 4D.File
 $license:=Folder(fk licenses folder).file("4UUD200-xxx.license4D")
 $application:=Folder(fk desktop folder).folder("myApp.app")
 $status:=Create deployment license($application;$license)
```

#### Ver también 

  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1811 |
| Hilo seguro | &cross; |


