---
id: st-compute-expressions
title: ST COMPUTE EXPRESSIONS
slug: /commands/st-compute-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Syntax-->**ST COMPUTE EXPRESSIONS** ( {* ;} *objeto* {; *inicioSel* {; *finSel*}} )<!-- END REF-->
<!--REF #_command_.ST COMPUTE EXPRESSIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es el nombre de un objeto (cadena). Si se omite es un campo o una variable. |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST COMPUTE EXPRESSIONS.Summary-->El comando **ST COMPUTE EXPRESSIONS** actualiza las expresiones dinámicas 4D encontradas en un campo o variable ya sea 4D Write Pro o multiestilo designado por el parámetro *objeto*.<!-- END REF--> 

Para más información acerca de las expresiones 4D utilizables en áreas de texto de multiestilo o 4D Write Pro, consulte la descripción del comando [ST INSERT EXPRESSION](st-insert-expression.md).  
  
El comando vuelve a evaluar el resultado de las expresiones presentes en el *objeto* en función del contexto actual y muestra el resultado obtenido. Por ejemplo, si la expresión introducida es la hora, el valor se modifica cada vez que se llama al comando **ST COMPUTE EXPRESSIONS**. Las expresiones también se calculan:

* cuando se insertan
* cuando se carga el objeto
* cuando están "congeladas" con el comando [ST FREEZE EXPRESSIONS](st-freeze-expressions.md), si se pasa el segundo parámetro *\**.
**ST COMPUTE EXPRESSIONS** no modifica el texto con estilo (que contiene etiquetas *span*), sino sólo el texto sin formato mostrado en *objeto*. Los valores calculados no se almacenan en el texto con estilo, sólo su referencia se almacena allí.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o de variable en lugar de una cadena.  
  
No es necesario que *objeto* tenga el foco. Sin embargo, el objeto designa un área de texto multiestilo, debe incluirse en un formulario, o de lo contrario el comando **ST COMPUTE EXPRESSIONS** no tiene ningún efecto.  
  
**Nota:** si el *objeto* designa un documento 4D Write Pro, será computado por el comando aunque no se abra en un objeto de formulario (ver *Expresiones Imagen*).  
  
Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta las etiquetas de estilo o referencias que puedan estar presentes. Tenga en cuenta que una referencia es equivalente a un único carácter.  
* Si pasa *inicioSel* y *finSel*, **ST COMPUTE EXPRESSIONS** sólo actualiza las expresiones situadas dentro de esta selección.
* Si pasa únicamente *inicioSel* o si el valor de *finSel* es mayor que el número total de caracteres en el objeto, todas las expresiones entre *inicioSel* y el final del texto se calculan.
* Si omite *inicioSel* y *finSel*, todas las expresiones incluidas en la selección usuario de *objeto* se calculan.
4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":  
  
| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |
  
  
(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia de campo o de variable, el comando se aplica a todo el texto del objeto.  
  
**Nota**: Si *inicioSel* es mayor que *finSel* (excepto cuando *finSel* es 0), el comando no hace nada y la variable *OK* toma el valor 0.

#### Ejemplo 

Usted desea actualizar las referencias incluidas en la selección de texto:

```4d
 ST COMPUTE EXPRESSIONS(*;"myText";ST Start highlight;ST End highlight)
```

#### Ver también 

[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1285 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


