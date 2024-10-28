---
id: st-set-plain-text
title: ST SET PLAIN TEXT
slug: /commands/st-set-plain-text
displayed_sidebar: docs
---

<!--REF #_command_.ST SET PLAIN TEXT.Syntax-->**ST SET PLAIN TEXT** ( {* ;} *objeto* ; *nuevTexto* {; *inicioSel* {; *finSel*}} )<!-- END REF-->
<!--REF #_command_.ST SET PLAIN TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variable o campo (si se omite *) |
| nuevText | Text | &#8594;  | Texto a insertar |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ST SET PLAIN TEXT.Summary-->El comando ST SET PLAIN TEXT inserta el texto pasado en el parámetro *nuevTexto* en el campo o la variable de texto con estilo designado por el parámetro *objeto* .<!-- END REF--> Este comando aplica únicamente al texto plano del parámetro *objeto*, sin modificar las posibles etiquetas de estilo que contiene. 

A diferencia del comando [ST SET TEXT](st-set-text.md), ST SET PLAIN TEXT inserta únicamente texto plano. No debe pasar texto con etiquetas de estilo en *nuevTexto*. Si contiene los caracteres <, > o &, se consideran como caracteres estándar y se convierten en entidades HTML:

* '&' se convierte en &amp;
* '<' se convierte en &lt;
* '>' se convierte en &gt;

##### 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Durante la ejecución, si el objeto tiene el foco, el comando sólo se aplica al objeto que se está editando y no a su fuente de datos (campo o variable). Los cambios sólo se transfieren a la fuente (y a cualquier otro objeto con esta misma fuente) cuando el objeto que se está editando se valida, ya sea por perder el foco o con la tecla **Intro**. Si el objeto no tiene el foco, el comando se aplica directamente a la fuente de datos y los cambios son inmediatamente trasladados a otros objetos con la misma fuente.  
Si se omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable y se pasa una referencia de campo o variable en lugar de una cadena. El comando se aplica directamente al campo o a la variable y los cambios son transferidos inmediatamente a todos los objetos que utilizan esta fuente, incluyendo el objeto con el foco.

##### 

En *nuevTexto*, pase el texto plano a insertar. 

Los parámetros opcionales *inicioSel* y *finSel* le permiten designar una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* dan una selección de texto plano, sin tener en cuenta las etiquetas de estilo encontradas en el texto. La acción del comando varía de acuerdo a los parámetros opcionales *inicioSel* y *finSel*:

* Si omite *inicioSel* y *finSel*, ST SET PLAIN TEXT remplaza todo el texto de *objeto* por *nuevTexto*,
* Si sólo pasa *inicioSel* o si los valores de *inicioSel* y *finSel* son iguales, ST SET PLAIN TEXT inserta el texto *nuevTexto* en *objeto* comenzando en *inicioSel*,
* Si pasa ambos *inicioSel* y *finSel*, ST SET PLAIN TEXT remplaza el texto plano definido por estos límites por el texto *nuevTexto*.
* Puede pasar 0 en *finSel*para designar automáticamente el último carácter del texto (pase 1 en *inicioSel* para designar el primer carácter del texto).

4D ofrece constantes predefinidas que puede utilizar para designar automáticamente los límites de la selección en los parámetros *inicioSel* y *finSel*. Estas constantes están disponibles en el tema "*Texto multiestilo*": 

| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia de variable o de campo, el comando se aplica a todo el texto del objeto.

El estilo del primer carácter remplazado se utilizará para todo texto *nuevTexto*. 

Si *inicioSel* es mayor que *finSel*, el texto no se modifica y la variable OK toma el valor 0 (excepto cuando el valor *endSel* es 0, ver arriba). 

#### Ejemplo 

Dada la siguiente variable texto multiestilo:

![](../assets/en/commands/pict572269.en.png)

Usted quiere insertar nombres de empresas guardadas en un campo texto. Estos nombres pueden contener, por ejemplo el carácter "&". En este caso, deberá utilizar el comando [ST SET PLAIN TEXT](st-set-plain-text.md):  
  
```4d
 ST SET PLAIN TEXT(miTextoEstilo;[Empresa]Nombre;33;34)
```

Este es el resultado:

![](../assets/en/commands/pict572271.en.png)

Este es el texto sin formato contenido en la variable:

![](../assets/en/commands/pict572279.en.png)

Puede constatar que el texto insertado se encapsuló dentro de un par de etiquetas de estilo adicionales. Estas etiquetas corresponden al estilo de los caracteres antes de la inserción. Este mecanismo permite garantizar una visualización correcta de los campos multiestilos en todos los casos. 

**Nota:** si utiliza el comando [ST SET TEXT](st-set-text.md) en este caso, 4D no inserta nada porque la presencia del carácter "&" no codificado evita la interpretación de las etiquetas de estilo presentes en la variable. Para mayor información, consulte la descripción de este comando. 

#### Variables y conjuntos del sistema 

Después de la ejecución de este comando, la variable OK toma el valor 1 si no hay errores, de lo contrario toma el valor 0\. Este es el caso en particular cuando las etiquetas de estilo no se evalúan correctamente (etiqueta incorrecta o falta).  
  
En caso de un error, la variable no cambia. Cuando se produce un error en una variable cuando el texto está siendo evaluado, 4D transforma el texto en texto sin formato, como resultado, los caracteres <, > e & se convierten en entidades HTML.

#### Ver también 

[ST Get plain text](st-get-plain-text.md)  
[ST SET TEXT](st-set-text.md)  