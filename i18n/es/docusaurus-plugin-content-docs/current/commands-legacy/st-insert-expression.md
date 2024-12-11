---
id: st-insert-expression
title: ST INSERT EXPRESSION
slug: /commands/st-insert-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT EXPRESSION.Syntax-->**ST INSERT EXPRESSION** ( {* ;} *objeto* ; *expresion* {; *inicioSel* {; *finSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT EXPRESSION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o variable |
| objeto | Object | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| expresion | Text | &#8594;  | Expresión y (opcional) formato a insertar |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST INSERT EXPRESSION.Summary-->El comando **ST INSERT EXPRESSION** inserta una referencia a la expresión en el campo o la variable de texto multiestilo designada por el parámetro *objeto*.<!-- END REF-->

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (variable o campo objeto únicamente).

En el parámetro *expresión*, se pasa la expresión 4D a evaluar en el *objeto*. Una expresión válida 4D es una cadena que devuelve un valor. La *expresión* puede ser una campo, una variable, un comando 4D, una instrucción que retorne un valor, un método de proyecto, una expresión especial 4D Write Pro (ver *Gestión de fórmulas*), etc.

**Notas:**

* Insertar expresiones imagen (por ejemplo variables de tipo imagen) se soporta en áreas 4D Write Pro (ver *Expresiones Imagen*) pero no se soporta en áreas de texto multi estilo.
* Este comando espera nombres "reales" para los campos y las tablas, incluso si se ha definido una estructura "virtual" utilizando los comandos [SET TABLE TITLES](set-table-titles.md) y [SET FIELD TITLES](set-field-titles.md).

Si *expresión* retorna un valor que contiene retornos de carro y tabulaciones, 4D formatea el texto de acuerdo al objeto que alberga la expresión; caracteres de retorno de carro se interpretan como rupturas de línea.

Puede dar formato a la expresión mediante la inclusión de información de formato en el parámetro de expresión. En este caso, el parámetro debe ser en la forma:  

```RAW
 "String(valor;formato)"
```
  
  
... donde *valor* contiene a la expresión misma y *formato* contiene el formato a aplicar. El parámetro *formato* puede tener los siguientes valores: 
* para los números: por ejemplo "###,##" cualquier formato de visualización del número (existente o no).
* para fechas: un número que designa un formato de fecha existente. Puede utilizar las constantes del tema "*Formatos de salida de fechas*" , por ejemplo, System date short .
* para los tiempos: un número que designa un formato de hora existente. Puede utilizar las constantes del tema "*Formatos de salida de hora*" , por ejemplo, System time short .

Por ejemplo:  
  
```4d
 "String ([tabla_1]Campo_1;System date short)"
```
  
  
Por defecto, los **valores** de expresión se muestran en las áreas de texto multiestilo. Puede forzar la visualización de las **referencias** utilizando el comando [ST SET OPTIONS](st-set-options.md). 

Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes.

* Si pasa únicamente *inicioSel*, el resultado de la expresión se inserta en la ubicación especificada.
* Si omite *inicioSel* y *finSel*, el resultado de la expresión se inserta en la ubicación del cursor.
* Si pasa *inicioSel* y *finSel*, **ST INSERT EXPRESSION** remplaza el texto en esta selección con el resultado de la *expresion*. Si el valor de *finSel* es mayor que el número total de caracteres en el objeto, todos los caracteres entre *inicioSel* y el final del texto son remplazados por el resultado de la *expresion*.

4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":

| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
**Nota**: si *inicioSel* es mayor que *finSel* (excepto cuando *finSel* es 0) , el comando no hace nada y la variable OK toma el valor 0.

#### Ejemplo 

Desea reemplazar el texto seleccionado con el resultado de un método proyecto:

```4d
 ST INSERT EXPRESSION(*;"miTexto";"miMetodo";ST Start highlight;ST End highlight)
```

#### Ver también 

[ST COMPUTE EXPRESSIONS](st-compute-expressions.md)  
[ST FREEZE EXPRESSIONS](st-freeze-expressions.md)  
[ST Get expression](st-get-expression.md)  
[ST INSERT URL](st-insert-url.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1281 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


