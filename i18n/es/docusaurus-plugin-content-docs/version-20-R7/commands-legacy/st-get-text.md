---
id: st-get-text
title: ST Get text
slug: /commands/st-get-text
displayed_sidebar: docs
---

<!--REF #_command_.ST Get text.Syntax-->**ST Get text** ( {* ;} *objeto* {; *inicioSel* {; *finSel*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o campo o variable texto (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |
| Resultado | Text | &#8592; | Texto incluyendo las etiquetas de estilo |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ST Get text.Summary-->El comando ST Get text devuelve el texto con estilo encontrado en el campo o variable de texto designado por el parámetro *objeto*.<!-- END REF--> 

##### 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve información sobre el objeto que está siendo editado, sin embargo, cuando el objeto no tiene el foco, el comando devuelve información sobre la fuente de datos (campo o variable) del objeto.  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, pase una referencia campo o variable en lugar de una cadena y durante la ejecución, el comando devuelve información sobre este campo o variable.

##### 

El comando devuelve el texto con las etiquetas de estilo asociadas a él, lo que significa, por ejemplo, que puede copiar y pegar texto mientras conserva su estilo.

Los parámetros opcionales *inicioSel* y *finSel* permiten designar una selección de texto en *objeto*. Los valores de *inicioSel* y *finSel* ofrecen una selección de texto sin formato, sin tener en cuenta ningún tipo de etiquetas de estilo en el texto.

* Si se omite *inicioSel* y *endSel*, ST Get text devuelve todo el texto en el objeto,
* Si pasa *inicioSel* y *finSel*, ST Get text devuelve la selección de texto definida por estos límites.

4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de la selección en los parámetros *inicioSel* y *endSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":   
  
| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |
  
  
(\*) Debe pasar un nombre de objeto en objeto para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
Si los valores de *inicioSel* y *finSel* son iguales o si *inicioSel* es mayor que *finSel*, se devuelve un error.

#### Variables y conjuntos del sistema 

Después de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ningún error; de lo contrario, toma el valor 0\. Este es el caso particularmente cuando las etiquetas de estilo no se evalúan correctamente (etiquetas incorrectas o faltantes).   

En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se está evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML.

#### Ver también 

[ST Get plain text](st-get-plain-text.md)  
[ST SET TEXT](st-set-text.md)  
[TEXT TO ARRAY](text-to-array.md)  