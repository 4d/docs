---
id: st-get-expression
title: ST Get expression
slug: /commands/st-get-expression
displayed_sidebar: docs
---

<!--REF #_command_.ST Get expression.Syntax-->**ST Get expression** ( {* ;} *objeto* {; *inicioSel* {; *finSel*}} )  : Text<!-- END REF-->
<!--REF #_command_.ST Get expression.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Campo o variable (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |
| Resultado | Text | &#8592; | Etiqueta de la expresión |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ST Get expression.Summary-->El comando **ST Get expression** devuelve la primera expresión que se encuentra en la selección actual del campo o de la variable de texto con estilo designada por el parámetro *objeto*.<!-- END REF--> 

El comando devuelve la etiqueta de la expresión, como fue insertada en el objeto (por ejemplo, "mymethod" o "\[tabla1\]campo1"). No se devuelve el valor actual de la expresión.

**Nota**: este comando devuelve nombres "reales" para los campos y las tablas, incluso si se ha definido una estructura "virtual" utilizando los comandos [SET TABLE TITLES](set-table-titles.md) y [SET FIELD TITLES](set-field-titles.md).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve la información del objeto que se está editando, y si el objeto no tiene el foco, el comando devuelve la información de la fuente de datos del objeto (variable o campo).  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena. Durante la ejecución, el comando devuelve la información de la variable o del campo.  
  
Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes en el texto.

* Si pasa *inicioSel* y *finSel*, **ST Get expression** busca la expresión al interior de esta selección.
* Si pasa únicamente *inicioSel* o si el valor de *finSel* es mayor que el número total de caracteres en el *objeto*, el comando busca la expresión entre *inicioSel* y el final del texto .
* Si omite *inicioSel* y *finSel*, el comando busca la expresión dentro de la selección de texto actual.

4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":  
  
| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
**Nota**: si *inicioSel* es mayor que *finSel* (excepto cuando *finSel* es 0) , el comando no hace nada y la variable OK toma el valor 0.

Si no se encuentra una expresión en la selección, el comando devuelve una cadena vacía.

#### Ejemplo 1 

Cuando hay un evento doble clic, usted comprueba que existe una expresión, y si es así, se muestra un diálogo en el que han recuperado sus valores para que el usuario puede modificarlos:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST Expression type)
          vExpression:=ST Get expression(*;"StyledText_t";startSel;endSel)
          $winRef:=Open form window("Dial_InsertExpr";Movable form dialog box;Horizontally centered;Vertically centered;*)
          DIALOG("Dial_InsertExpr")
          If(OK=1)
             ST INSERT EXPRESSION(*;"StyledText_t";vExpression;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;endSel)
          End if
       End if
 End case
```

#### Ejemplo 2 

Usted quiere ejecutar un método 4D cuando se hace clic en un enlace de usuario:

```4d
 Case of
    :(Form event code=On Clicked)
  //recuperamos la selección
       HIGHLIGHT TEXT(*;"myText";startSel;endSel)
       If(startSel#endSel) //hay contenido seleccionado
  //obtenemos el tipo del contenido
          $CT_type:=ST Get content type(*;"myText";startSel;endSel)
          If($CT_type=ST User type) //this is a user link
             MyMethod //ejecutamos un método 4D
          End if
       End if
 End case
```

#### Ver también 

[ST INSERT EXPRESSION](st-insert-expression.md)  