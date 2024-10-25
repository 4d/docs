---
id: st-set-attributes
title: ST SET ATTRIBUTES
slug: /commands/st-set-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST SET ATTRIBUTES.Syntax-->**ST SET ATTRIBUTES** ( {* ;} *objeto* ; *inicioSel* ; *finSel* ; *nomAtrib* ; *valorAtrib* {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.ST SET ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *), o Variable o campo Texto (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la nueva selección de texto |
| finSel | Integer | &#8594;  | Fin de la nueva selección de texto |
| nomAtrib | Text | &#8594;  | Atributo a definir |
| valorAtrib | Text, Integer | &#8594;  | Nuevo valor del atributo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ST SET ATTRIBUTES.Summary-->El comando ST SET ATTRIBUTES permite modificar uno o más atributos de estilo en el(los) objeto(s) de formulario designado(s) por *objeto*.<!-- END REF--> 

##### 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Durante la ejecución, si el objeto tiene el foco, el comando sólo se aplica al objeto que se está editando y no a su fuente de datos (campo o variable). Los cambios sólo se transfieren a la fuente (y a cualquier otro objeto con esta misma fuente) cuando el objeto que se está editando se valida, ya sea por perder el foco o con la tecla **Intro**. Si el objeto no tiene el foco, el comando se aplica directamente a la fuente de datos y los cambios son inmediatamente trasladados a otros objetos con la misma fuente.  
Si se omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable y se pasa una referencia de campo o variable en lugar de una cadena. El comando se aplica directamente al campo o a la variable y los cambios son transferidos inmediatamente a todos los objetos que utilizan esta fuente, incluyendo el objeto con el foco.

##### 

**Nota**: sólo puede utilizar los atributos de estilo con campos de tipo texto. Dado que los campos de tipo Alfa tienen una longitud predefinida, la adición de etiquetas de estilo podría producir una pérdida de datos.   
  
 La definición de un atributo se efectúa por medio de la inserción o modificación de etiquetas HTML de estilo al interior del texto (para más información sobre este punto, consulte el *Manual de Diseño*). Tenga en cuenta que ST SET ATTRIBUTES inserta etiquetas de estilo en todos los casos, aunque *objeto* designe los objetos texto del formulario que no tengan la propiedad Multiestilo.  

Los parámetros *inicioSel* y *finSel* se pueden utilizar para designar a la selección de texto a la cual aplicar la modificación de estilo al interior del *objeto*. En *inicioSel* pase la posición del primer carácter a modificar y en *finSel*, pase la posición del último carácter a modificar más uno. Puede pasar 0 en *finSel* para designar automáticamente el último carácter del texto (pase 1 en *inicioSel* para designar el primer carácter).  
Si el valor de *finSel* es superior al número de caracteres del objeto, todos los caracteres entre *inicioSel* y el final del textose modifican. Si el valor de *inicioSel* es mayor que el de *finSel* (excepto cuando *finSel* vale 0), el comando no hace nada y la variable OK toma el valor 0\.   
Los valores de *inicioSel* y *finSel* no tienen en cuenta las etiquetas de estilo presentes en el área. Son evaluados sobre la base de texto sin formato (texto donde las etiquetas de estilo han sido filtradas).  
  
4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*": 

| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

 (\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
Pase en los parámetros *nomAtrib* y *valorAtrib* respectivamente el nombre y el valor del atributo a modificar. Puede pasar tantos pares de atributos/valores como quiera. Para definir el parámetro *nomAtrib*, utilice las constantes predefinidas del tema *Atributos de texto multiestilo*. El valor a pasar en el parámetro *valorAtrib* depende del parámetro *nomAtrib*:  

| Constante                     | Tipo         | Valor | Comentario                                                                                                                          |
| ----------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Attribute background color    | Entero largo | 8     | *attValue*\=Valor hexadecimal o nombre del color HTML (Windows únicamente)                                                          |
| Attribute bold style          | Entero largo | 1     | *attValue*\=0: elimina el atributo negrita de la selección<br/>*attValue*\=1: aplica el atributo negrita a la selección     |
| Attribute font name           | Entero largo | 5     | *attValue*\=nombre de la familia de la fuente (cadena)                                                                              |
| Attribute italic style        | Entero largo | 2     | *attValue*\=0: elimina el atributo itálica de la selección<br/>*attValue*\=1: aplica el atributo itálica a la selección.    |
| Attribute strikethrough style | Entero largo | 3     | *attValue*\=0: elimina el atributo tachado de la selección<br/>*attValue*\=1: aplica el atributo tachado a la selección     |
| Attribute text color          | Entero largo | 7     | *attValue*\=valores hexadecimales o nombre de color HML                                                                             |
| Attribute text size           | Entero largo | 6     | *attValue*\=número de puntos(número)                                                                                                |
| Attribute underline style     | Entero largo | 4     | *attValue*\=0: elimina el atributo subrayado de la selección<br/>*attValue*\=1: aplica el atributo subrayado a la selección |
  
  
**Colores**  
 Si pasa las constantes Attribute text color o Attribute background en *nomAtrib*, debe pasar en *valorAtrib* una cadena que contenga un nombre de color HTML o un valor de color hexadecimal:  

| **Nombre de color HTML** | **Valor hexadecimal** |
| ------------------------ | --------------------- |
| Aqua                     | #00FFFF               |
| Black                    | #000000               |
| Blue                     | #0000FF               |
| Fushia                   | #FF00FF               |
| Gray                     | #808080               |
| Green                    | #008000               |
| Lime                     | #00FF00               |
| Maroon                   | #800000               |
| Navy                     | #000080               |
| Olive                    | #808000               |
| Purple                   | #800080               |
| Red                      | #FF0000               |
| Silver                   | #C0C0C0               |
| Teal                     | #008080               |
| White                    | #FFFFFF               |
| Yellow                   | #FFFF00               |

#### Ejemplo 

En este ejemplo, modificamos el tamaño y el color de texto como también los atributos negrita y subrayado de los caracteres 2 a 4 del campo:

```4d
 ST SET ATTRIBUTES([MyTable]MyField;2;5;Attribute font name;"Arial";Attribute text size;10;Attribute underline style;1;Attribute bold style;1;Attribute text color;"Blue")
```

#### Variables y conjuntos del sistema 

Después de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ningún error; de lo contrario, toma el valor 0\. Este es el caso particularmente cuando las etiquetas de estilo no se evalúan correctamente (etiquetas incorrectas o faltantes).   

En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se está evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML.

#### Ver también 

[FONT LIST](font-list.md)  
[ST GET ATTRIBUTES](st-get-attributes.md)  