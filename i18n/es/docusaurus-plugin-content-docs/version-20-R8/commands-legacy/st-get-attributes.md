---
id: st-get-attributes
title: ST GET ATTRIBUTES
slug: /commands/st-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.ST GET ATTRIBUTES.Syntax-->**ST GET ATTRIBUTES** ( {* ;} *objeto* ; *inicioSel* ; *finSel* ; *nomAtrib* ; *valorAtrib* {; *nomAtrib2* ; *valorAtrib2* ; ... ; *nomAtribN* ; *valorAtribN*} )<!-- END REF-->
<!--REF #_command_.ST GET ATTRIBUTES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (se se especifica *) o Variable o campo (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la selección de texto |
| finSel | Integer | &#8594;  | Fin de la selección de texto |
| nomAtrib | Integer | &#8594;  | Atributo a leer |
| valorAtrib | Variable | &#8592; | Valor actual del atributo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST GET ATTRIBUTES.Summary-->El comando ST GET ATTRIBUTES se utiliza para recuperar el valor actual de un atributo de estilo en una selección de texto del objeto de formulario designado por *objeto*.<!-- END REF-->

##### 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve información sobre el objeto que está siendo editado, sin embargo, cuando el objeto no tiene el foco, el comando devuelve información sobre la fuente de datos (campo o variable) del objeto.  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, pase una referencia campo o variable en lugar de una cadena y durante la ejecución, el comando devuelve información sobre este campo o variable.

##### 

Los parámetros *inicioSel* y *finSel* se utilizan para designar la selección de texto de la cual leer el atributo de estilo. Pase la posición del primer carácter de la selección en *inicioSel* y la posición más uno del último carácter de la selección en *finSel*. Puede pasar 0 en *finSel* para designar automáticamente el último carácter del texto (pase 1 en *inicioSel* para designar el primer carácter del texto).  
Si los valores de *inicioSel* y *finSel* son iguales o si *inicioSel* es mayor que *finSel*, se devuelve un error (excepto si *finSel* vale 0).  
Los valores *inicioSel* y *finSel* no tienen en cuenta ningún tipo de etiquetas de estilo ya presentes en el área. Se evalúan sobre la base de texto sin formato (texto del cual se han filtrado las etiquetas de estilo). 4D 

4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":  
  
| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |
  
  
(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
Pase en el parámetro *nomAtrib* el nombre del atributo a leer y pase en el parámetro *valorAtrib* una variable que debe recuperar el valor actual del atributo. Para definir el parámetro *nomAtrib*, debe utilizar una de las constantes del tema *Atributos de texto multiestilo*.  
  
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
  
  
Puede pasar tantos pares de atributos/valores como quiera.  
  
Si el valor del atributo *nomAtrib* es el mismo para toda la selección, se devuelve en *valorAtrib*. Si este valor es diferente o si *objeto* no contiene etiquetas SPAN, se devuelven los siguientes valores:  

| **nomAtrib**                  | **valorAtrib si atributo heterogéneo en la selección o no etiquetas SPAN** |
| ----------------------------- | -------------------------------------------------------------------------- |
| Attribute background color    | FFFFFFFF                                                                   |
| Attribute bold style          | 2                                                                          |
| Attribute font name           | "" (empty string)                                                          |
| Attribute italic style        | 2                                                                          |
| Attribute strikethrough style | 2                                                                          |
| Attribute text color          | FFFFFFFF                                                                   |
| Attribute text size           | \-1                                                                        |
| Attribute underline style     | 2                                                                          |

#### Ejemplo 

Dado un campo \[Table\_1\]StyledText mostrado en un formulario. El objeto tiene la propiedad Multiestilo y se llama "StyledText\_t". Usted quiere obtener el texto resaltado así como también el estado de atributo de estilo Negrita. Puede proceder de dos formas diferentes dependiendo de si utiliza el nombre del objeto o la referencia del campo. 

* Utilizando el nombre del objeto:

```4d
 $text:=ST Get text(*;"StyledText_t";ST Start highlight;ST End highlight)
 ST GET ATTRIBUTES(*;"StyledText_t";ST Start highlight;ST End highlight;Attribute bold style;$bold)
```

* Utilizando el nombre del campo:

```4d
 GET HIGHLIGHT([Table_1]StyledText;$Begin_l;$End_l)
 $text:=ST Get text([Table_1]StyledText;$Begin_l;$End_l)
 ST GET ATTRIBUTES([Table_1]StyledText;$Begin_l;$End_l;Attribute bold style;$bold)
```

#### Variables y conjuntos del sistema 

Después de ejecutar este comando, la variable OK toma el valor 1 si no se presenta ningún error; de lo contrario, toma el valor 0\. Este es el caso particularmente cuando las etiquetas de estilo no se evalúan correctamente (etiquetas incorrectas o faltantes).   

En caso de error, no cambia la variable. Cuando ocurre un error en una variable cuando se está evaluando el texto, 4D transforma el texto en texto plano; como resultado, los caracteres <, > y & se convierten en entidades HTML.

#### Ver también 

[ST SET ATTRIBUTES](st-set-attributes.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1094 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


