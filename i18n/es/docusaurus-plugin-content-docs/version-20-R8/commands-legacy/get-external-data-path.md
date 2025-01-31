---
id: get-external-data-path
title: Get external data path
slug: /commands/get-external-data-path
displayed_sidebar: docs
---

<!--REF #_command_.Get external data path.Syntax-->**Get external data path** ( *elCampo* ) : Text<!-- END REF-->
<!--REF #_command_.Get external data path.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elCampo | Text, Blob, Picture | &#8594;  | Campo del cual obtener el lugar de almacenamiento |
| resultado | Text | &#8592; | Ruta de acceso completa del archivo de almacenamiento externo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get external data path.Summary-->El comando **Get external data path** devuelve la ruta de acceso completa del archivo de almacenamiento externo de datos del campo pasado en el parámetro *elCampo*, para el registro actual.<!-- END REF--> Debe pasar en el parámetro *elCampo* campos de tipo Texto, BLOB o Imagen. El comando devuelve la ruta de acceso del archivo de almacenamiento si el archivo no existe más o no es accesible.  
  
Más específicamente, este comando le permite copiar nuevamente el archivo externo.  
  
**Nota**: para obtener más información sobre el almacenamiento externo de datos, consulte el manual de *Diseño*.  
  
Este comando devuelve una cadena vacía en los siguiente casos:

* El campo no se guarda fuera del archivo de datos.
* El campo tiene un valor Null (y no contiene ruta de acceso),
* El comando se ejecuta desde un 4D remoto.

#### Ver también 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1133 |
| Hilo seguro | &check; |


