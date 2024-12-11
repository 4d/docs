---
id: listbox-set-column-formula
title: LISTBOX SET COLUMN FORMULA
slug: /commands/listbox-set-column-formula
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Syntax-->**LISTBOX SET COLUMN FORMULA** ( {* ;} *objeto* ; *formula* ; *tipoDato* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| formula | Text | &#8594;  | Fórmula 4D asociada a la columna |
| tipoDato | Integer | &#8594;  | Tipo de resultado de la fórmula |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SET COLUMN FORMULA.Summary-->El comando **LISTBOX SET COLUMN FORMULA** modifica la *formula* asociada a la columna de list box designada por los parámetros *objeto* y *\**.<!-- END REF--> Las fórmulas no se pueden utilizar cuando la propiedad “Fuente de datos” del list box es **Selección actual**, **Selección temporal** o **Colección** o **Selección de entidades**.

**Nota:** puede utilizar el comando [OBJECT SET DATA SOURCE](object-set-data-source.md) para definir la fuente de datos de un list box tipo array. 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena. Este parámetro debe designar una columna del list box.  
  
El parámetro *formula* puede contener toda expresión valida:

* una instrucción,
* una fórmula generada utilizando el editor de fórmulas,
* una llamada a un comando 4D,
* una llamada a un método de proyecto.

Cuando se llama el comando, la fórmula se analiza y luego se ejecuta.  
  
**Nota**: utilice el comando [Command name](command-name.md) para definir las fórmulas independientes del lenguaje de la aplicación (cuando se llaman los comandos 4D).  
  
El parámetro *tipoDatos* designa el tipo de datos resultantes de la ejecución de la fórmula. En este parámetro, pase una de las constantes del tema *Tipos de campos y variables*. Si el resultado de la fórmula no corresponde al tipo de datos esperado, se genera un error.

#### Ver también 

[LISTBOX Get column formula](listbox-get-column-formula.md)  
[OBJECT SET DATA SOURCE](object-set-data-source.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1203 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


