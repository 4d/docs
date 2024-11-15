---
id: get-indexed-string
title: Get indexed string
slug: /commands/get-indexed-string
displayed_sidebar: docs
---

<!--REF #_command_.Get indexed string.Syntax-->**Get indexed string** ( *resNum* ; *strNum* {; *resArchivo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get indexed string.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número de recurso o Atributo "id" del elemento "grupo" (XLIFF) |
| strNum | Integer | &#8594;  | Número de cadena o Atributo "id" del elemento "trans-unit" (XLIFF) |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos Si se omite: todos los archivos XLIFF o los archivos de recursos abiertos |
| Resultado | Text | &#8592; | Valor de la cadena indexada |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get indexed string.Summary-->El comando Get indexed string devuelve:   

* Una de las cadenas guardadas en el recurso lista de cadenas (“STR#”) cuyo número de identificación se pasa en *resNum*.<!-- END REF-->
* Una cadena guardada en un archivo XLIFF abierto cuyo atributo "id" del elemento "grupo" se pasa en *resNum* (ver a continuación "Compatibilidad con la arquitectura XLIFF ). Pase el número de la cadena en *strNum*. Las cadenas de un recurso lista de cadenas están numeradas de 1 a N. Para recuperar todas las cadenas (y sus números) de un recurso lista de cadenas, utilice el comando [STRING LIST TO ARRAY](string-list-to-array.md "STRING LIST TO ARRAY"). Si el recurso no se encuentra, o si la cadena no está al interior del recurso, una cadena vacía se devuelve y la variable sistema OK toma el valor 0 (cero). Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, se devuelve la primera ocurrencia del recurso encontrada en la cadena de archivos de recursos.

**Nota:** una cadena de un recurso lista de cadenas puede contener hasta 255 caracteres.

##### Compatibilidad con la arquitectura XLIFF 

El comando Get indexed string es compatible con la arquitectura XLIFF de 4D a partir de la versión 11: el comando busca primero por los valores correspondientes a *resNum* y *strNum* en todos los archivos XLIFF abiertos (si el parámetro *resArchivo* se omite). En este caso, *resNum* específica el atributo **id** del elemento **grupo y** *strNum* específica el atributo **id** del elemento **trans-unit**. Si no se encuentra el valor, el comando continua la búsqueda en los archivos de recursos abiertos. Para mayor información sobre la arquitectura XLIFF en 4D, consulte el Manual de Diseño.

#### Variables y conjuntos del sistema 

Si el recurso se encuentra, OK toma el valor 1, de lo contrario toma el valor 0 (cero).

#### Ver también 

[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  