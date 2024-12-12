---
id: string-list-to-array
title: STRING LIST TO ARRAY
slug: /commands/string-list-to-array
displayed_sidebar: docs
---

<!--REF #_command_.STRING LIST TO ARRAY.Syntax-->**STRING LIST TO ARRAY** ( *resNum* ; *cadenas* {; *resArchivo*} )<!-- END REF-->
<!--REF #_command_.STRING LIST TO ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número de referencia del recurso o Atributo "id" del elemento "group" (XLIFF) |
| cadenas | Text array | &#8592; | Cadenas del elemento "group" (XLIFF) |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o Todos los archivos XLIFF o los archivos de recursos abiertos, si se omite |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.STRING LIST TO ARRAY.Summary-->El comando STRING LIST TO ARRAY llena el array *cadenas* con: 

* las cadenas almacenadas en el recurso de tipo lista de cadenas ("STR#") cuyo número se pasa en *resNum*.<!-- END REF-->
* o con una cadena almacenada en un archivo XLIFF abierto cuyo atributo "id" del elemento "group" se pasa en *resNum* (ver a continuación "Compatibilidad con la arquitectura XLIFF").

Si el recurso no se encuentra, el array *cadenas* no cambia y la variable OK toma el valor 0 (cero).

 Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, se devolverá la primera ocurrencia del recurso encontrado en la cadena de archivos de recursos. Antes de llamar STRING LIST TO ARRAY, puede predeclarar el array *cadenas* como una array de tipo cadena o texto. Si no predeclara el array, el comando crea *cadenas* como un array de tipo Texto. 

**Nota:** cada cadena de un recurso lista de cadenas puede contener hasta 255 caracteres.

**Tip:** cuando utilice los recursos listas de cadenas, limítese a recursos de 32K, y a un máximo de unas centenas de cadenas por recurso.

#### Compatibilidad con la arquitectura XLIFF 

El comando STRING LIST TO ARRAY es compatible con la arquitectura XLIFF de 4D a partir de la versión 11: el comando busca primero por los valores correspondientes a *resNum* y *strNum* en todos los archivos XLIFF abiertos (si el parámetro *resArchivo* se omite) y llena el array *cadenas* con los valores correspondientes. En este caso, *resNum* específica el atributo **id** del elemento **group** y el array *cadenas* contiene todas las cadenas del elemento. Si no se encuentra el valor, el comando continua la búsqueda en los archivos de recursos abiertos. Para mayor información sobre la arquitectura XLIFF en 4D, consulte el Manual de Diseño.

#### Variables y conjuntos del sistema 

Si se encuentra el recurso, la variable sistema OK toma el valor 1, de lo contrario toma el valor 0 (cero).

#### Ver también 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[Get text resource](get-text-resource.md)  