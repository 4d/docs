---
id: get-resource
title: GET RESOURCE
slug: /commands/get-resource
displayed_sidebar: docs
---

<!--REF #_command_.GET RESOURCE.Syntax-->**GET RESOURCE** ( *resTipo* ; *resNum* ; *resDatos* {; *resArchivo*} )<!-- END REF-->
<!--REF #_command_.GET RESOURCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resTipo | Text | &#8594;  | Tipo de recurso (4 caracteres) |
| resNum | Integer | &#8594;  | Número de recurso |
| resDatos | Blob | &#8594;  | Campo o variable BLOB a recibir los datos |
| &#8592; | Contenido del recurso |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o todos los archivos de recursos abiertos, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET RESOURCE.Summary-->El comando GET RESOURCE devuelve en el campo o la variable BLOB *resDatos* el contenido del recurso cuyo tipo y número se pasa en *resTipo* y *resNum*.<!-- END REF--> 

**Importante:** debe pasar una cadena de 4 caracteres en *resTipo*.

Si no se encuentra el recurso, el parámetro *resDatos* no cambia y la variable OK toma el valor 0 (cero). 

Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, se devuelve la primera ocurrencia del recurso encontrada en la cadena de archivos de recursos.

**Nota:** el tamaño de un recurso puede ser de varios megabytes.

#### Independencia de plataforma 

 Recuerde que trabaja con recursos basados en Mac OS. Sin importar la plataforma, los valores internos de los recursos como los Enteros largos son almacenados utilizando ordenación de bytes ("byte ordering") Macintosh. En Windows, para los datos de los recursos estándar (tales como los recursos listas de cadenas y los recursos imágenes) la ordenación de bytes es automáticamente inversa ("byte swapping") cuando es necesario. Por otra parte, si crea y utiliza sus propias estructuras de datos internas, usted decide si aplica la ordenación inversa a los datos que extrajo del BLOB (por ejemplo, al pasar Macintosh byte ordering a un comando como [BLOB to longint](blob-to-longint.md "BLOB to longint")).

#### Ejemplo 

Ver el ejemplo del comando SET RESOURCE.

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si se encuentra el recurso, de lo contrario toma el valor 0 (cero).

#### Gestión de errores 

Si no hay suficiente memoria para cargar la imagen, se genera un error. Puede interceptar este error con la ayuda de un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ver también 

*Recursos*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 508 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


