---
id: get-picture-resource
title: GET PICTURE RESOURCE
slug: /commands/get-picture-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE RESOURCE.Syntax-->**GET PICTURE RESOURCE** ( *resNum* ; *resDatos* {; *resArchivo*} )<!-- END REF-->
<!--REF #_command_.GET PICTURE RESOURCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número de recurso |
| resDatos | Field, Variable | &#8594;  | Campo o variable imagen a recibir la imagen |
| &#8592; | Contenido del recurso PICT |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o todos los archivos de recursos abiertos, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET PICTURE RESOURCE.Summary-->El comando GET PICTURE RESOURCE devuelve en el campo o en la variable *resDatos* la imagen guardada en el recurso imagen (“PICT”) cuyo número se pasa en *resNum*.<!-- END REF--> 

Si el recurso no se encuentra, el parámetro *resDatos* no se modifica y la variable OK toma el valor 0 (cero). 

Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, se devuelve la primera ocurrencia del recurso encontrado en la cadena de archivos de recursos.

**Nota:** el tamaño de un recurso imagen puede ser de varios megabytes.

#### Ejemplo 

Ver el ejemplo del comando [RESOURCE LIST](resource-list.md "RESOURCE LIST").

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si se encuentra el recurso, de lo contrario toma el valor 0 (cero).

#### Gestión de errores 

Si no hay suficiente memoria para cargar la imagen, se genera un error. Puede interceptar este error con la ayuda de un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

[ON ERR CALL](on-err-call.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 502 |
| Hilo seguro | &cross; |
| Modifica variables | OK, error |


