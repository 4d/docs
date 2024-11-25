---
id: get-text-resource
title: Get text resource
slug: /commands/get-text-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get text resource.Syntax-->**Get text resource** ( *resNum* {; *resArchivo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get text resource.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número de recurso |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o todos los archivos de recursos abiertos, si se omite |
| Resultado | Text | &#8592; | Contenido del recurso TEXT |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get text resource.Summary-->El comando Get text resource devuelve el texto guardado en el recurso texto (“TEXT”) cuyo número de identificación se pasa en *resNum*.<!-- END REF-->

Si no se encuentra el recurso, se devuelve un texto vacío y la variable sistema OK toma el valor 0 (cero).

Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, será devuelta la primera ocurrencia del recurso encontrado en la cadena de archivos de recursos.

**Nota:** un recurso texto puede contener hasta 32 000 caracteres.

#### Ejemplo 

El siguiente ejemplo muestra el contenido del recurso texto de ID=20800, que debe estar ubicado en al menos uno de los archivos de recursos abiertos:

```4d
 ALERT(Get text resource(20800))
```

#### Variables y conjuntos del sistema 

Si se encuentra el recurso, OK toma el valor 1\. De lo contrario, toma el valor 0 (cero).

#### Ver también 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  