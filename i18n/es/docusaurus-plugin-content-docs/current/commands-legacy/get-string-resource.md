---
id: get-string-resource
title: Get string resource
slug: /commands/get-string-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get string resource.Syntax-->**Get string resource** ( *resNum* {; *resArchivo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get string resource.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resNum | Integer | &#8594;  | Número del recurso |
| resArchivo | Time | &#8594;  | Número de referencia del archivo de recursos o Todos los archivos de recursos abiertos, si se omite |
| Resultado | Text | &#8592; | Contenido del recurso STR |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get string resource.Summary-->El comando Get string resource devuelve la cadena almacenada en el recurso cadena (“STR ”) cuyo número de referencia se pasa en *resNum*.<!-- END REF--> 

Si el recurso no se encuentra, se devuelve una cadena vacía y la variable OK toma el valor 0 (cero).

Si pasa un número de referencia de archivo de recursos válido en *resArchivo*, el recurso se busca en ese archivo únicamente. Si no pasa *resArchivo*, se devuelve la primera ocurrencia del recurso encontrada en la cadena de archivos de recursos.

**Nota:** un recurso cadena puede contener hasta 255 caracteres.

#### Ejemplo 

El siguiente ejemplo muestra los contenidos del recurso cadena de ID=20911, que debe encontrar en al menos uno de los archivos de recursos abiertos:

```4d
 ALERT(Get string resource(20911))
```

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si se encuentra el recurso, de lo contrario toma el valor 0 (cero).

#### Ver también 

[Get indexed string](get-indexed-string.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  