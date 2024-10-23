---
id: st-freeze-expressions
title: ST FREEZE EXPRESSIONS
slug: /commands/st-freeze-expressions
displayed_sidebar: docs
---

<!--REF #_command_.ST FREEZE EXPRESSIONS.Syntax-->**ST FREEZE EXPRESSIONS** ( {* ;} *objeto* {; *inicioSel* {; *finSel*}}{; *} )<!-- END REF-->
<!--REF #_command_.ST FREEZE EXPRESSIONS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |
| * | Operador | &#8594;  | Si se pasa = actualizar las expresiones antes de congelarlas |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ST FREEZE EXPRESSIONS.Summary-->El comando **ST FREEZE EXPRESSIONS** "congela" el contenido de las expresiones encontradas en un campo o variable ya sea 4D Write Pro o multiestilo designado por el parámetro *objeto*.<!-- END REF--> Esta acción convierte expresiones dinámicas en texto estático o imágenes (áreas 4D Write Pro únicamente) y elimina las referencias asociadas al *objeto*. 

Para más información acerca de expresiones 4D usadas en áreas de texto multiestilo o 4D Write Pro, consulte la descripción del comando [ST INSERT EXPRESSION](st-insert-expression.md).

El comando **ST FREEZE EXPRESSIONS** almacena el valor calculado de una expresión en un momento dado. Esta operación es necesaria particularmente antes de cada uso del *objeto* fuera del área estilo (exportaciones, almacenamiento en un archivo de disco, impresión, etc.) ya que solo la referencia de la expresión se mantiene en el área.

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (variable o campo objeto únicamente).

Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes.

* Si pasa *inicioSel* y *finSel*, **ST FREEZE EXPRESSIONS** busca la URL dentro de esta selección.
* Si pasa únicamente *inicioSel* o si el valor de *finSel* es mayor que el número total de caracteres en el *objeto*, el comando busca la URL entre *inicioSel* y el final del texto .
* Si omite *inicioSel* y *finSel*, el comando busca la URL dentro de la selección de texto actual.

4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*.   
Estas constantes se encuentran en el tema "*Texto multiestilo*":

| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
**Nota**: si *inicioSel* es mayor que *finSel* (excepto cuando *finSel* es 0) , el comando no hace nada y la variable OK toma el valor 0.

Por defecto, las expresiones no son recalculadas antes de ser congenladas. Si quiere que la expresión se recalcule y luego se congele, debe pasar el segundo parámetro *\**.

**Note:** **ST FREEZE EXPRESSIONS** no congela las expresiones 4D Write Pro que contienen *$wp\_pageNumber* o *$wp\_pageCount*. Para más información, consulte la sección *Gestión de fórmulas*.

#### Ejemplo 

Usted quiere insertar la hora actual al inicio del texto y luego congelarla antes de guardar el registro:  
  
```4d
  //Insertar la hora al inicio del texto
 ST INSERT EXPRESSION(*;StyledText_t;"Current time";1)
  //Congelamos la expresión
 ST FREEZE EXPRESSIONS(*;"StyledText_t";1)
```

#### Ver también 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  