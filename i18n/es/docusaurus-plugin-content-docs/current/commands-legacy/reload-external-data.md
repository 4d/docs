---
id: reload-external-data
title: RELOAD EXTERNAL DATA
slug: /commands/reload-external-data
displayed_sidebar: docs
---

<!--REF #_command_.RELOAD EXTERNAL DATA.Syntax-->**RELOAD EXTERNAL DATA** ( *elCampo* )<!-- END REF-->
<!--REF #_command_.RELOAD EXTERNAL DATA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| elCampo | Text, Blob, Picture, Object | &#8594;  | Campo para el cual recargar los datos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RELOAD EXTERNAL DATA.Summary-->El comando **RELOAD EXTERNAL DATA** permite recargar en memoria el contenido en memoria de un archivo de almacenamiento externo asociado a un campo de tipo BLOB, Imagen o Texto.<!-- END REF-->  
  
Este comando es útil cuando el campo de un registro ya cargado en memoria es modificado en el disco por otra aplicación (los archivos de almacenamiento externo de los campos siempre son accesibles en escritura). Por ejemplo, una imagen utilizada en un campo Imagen puede ser modificada por un editor gráfico y luego de guardarse en el disco.

A continuación debe recargar los datos utilizando el comando **RELOAD EXTERNAL DATA** para actualizar los contenidos del campo si se muestra en un formulario.

**Nota**: el comando **RELOAD EXTERNAL DATA** sólo funciona 4D local o 4D Server. No es posible recargar individualmente un campo con 4D en modo remoto. En este contexto, es necesario recargar todos los registros (utilizando el comando [LOAD RECORD](load-record.md) por ejemplo).

#### Ver también 

[SET EXTERNAL DATA PATH](set-external-data-path.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1135 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


