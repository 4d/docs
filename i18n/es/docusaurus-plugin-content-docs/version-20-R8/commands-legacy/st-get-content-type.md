---
id: st-get-content-type
title: ST Get content type
slug: /commands/st-get-content-type
displayed_sidebar: docs
---

<!--REF #_command_.ST Get content type.Syntax-->**ST Get content type** ( {* ;} *object* {; *inicioSel* {; *finSel* {; *inicioBloq* {; *finBloq*}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.ST Get content type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| object | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Campo o variable (si se omite *) |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |
| inicioBloq | Integer | &#8592; | Inicio de posición del primer tipo de la selección |
| finBloq | Integer | &#8592; | Fin de posición del primer tipo de la selección |
| Resultado | Integer | &#8592; | Tipo de contenido |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST Get content type.Summary-->El comando **ST Get content type** devuelve el tipo de contenido encontrado en el campo o la variable de texto multiestilo designada por el parámetro *objeto* .<!-- END REF--> 

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve la información del objeto que se está editando, y si el objeto no tiene el foco, el comando devuelve la información de la fuente de datos del objeto (variable o campo).  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena. Durante la ejecución, el comando devuelve la información de la variable o del campo.  
  
Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes.

* Si pasa *inicioSel* y *finSel*, **ST Get content type** evalúa el contenido ubicado al interior de esta selección.
* Si pasa únicamente *inicioSel* o si el valor de *finSel* es mayor que el número total de caracteres en el *objeto*, el contenido ubicado entre *inicioSel* y el final del texto.
* Si omite *inicioSel* y *finSel*, el contenido dentro ubicado al interior de la selección actual de texto se evalúa.
4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":

| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
**Nota**: si *inicioSel* es mayor que *finSel* (excepto cuando *finSel* es 0) , el comando no hace nada y la variable OK toma el valor 0.

Los parámetros opcionales *inicioBloq* y *finBloq* recuperan la posición del primer y último carácter del primer bloque homogéneo identificado en el objeto o la selección del objeto. Por ejemplo, si la selección contiene una expresión y, a continuación texto plano, *inicioBloq* y *finBloq* devolverán los límites de la expresión. Usted puede hacer un bucle para procesar todos los bloques de la selección.  
  
El comando devuelve un valor que designa el tipo de contenido identificado. Puede comparar este valor con las siguientes constantes, que se encuentran en el tema "*Texto multiestilo*": 

| Constante           | Tipo         | Valor | Comentario                                                            |
| ------------------- | ------------ | ----- | --------------------------------------------------------------------- |
| ST Expression type  | Entero largo | 2     | La selección contiene sólo una referencia de expresión                |
| ST Mixed type       | Entero largo | 3     | La selección contiene al menos dos tipos de contenidos diferentes     |
| ST Picture type     | Entero largo | 6     | La selección contiene sólo una imagen (áreas 4D Write Pro únicamente) |
| ST Plain type       | Entero largo | 0     | La selección contiene texto y ninguna referencia                      |
| ST Unknown tag type | Entero largo | 4     | La selección contiene sólo una etiqueta de tipo desconocido           |
| ST URL type         | Entero largo | 1     | La selección contiene sólo una referencia de URL                      |
| ST User type        | Entero largo | 5     | La selección contiene sólo una referencia personalizada               |

#### Ejemplo 

Usted desea mostrar los comandos de un menú contextual basado en el tipo de contenido seleccionado en el área.

```4d
 Case of
    :(Form event code=On Clicked)
  //recuperamos la selección
       GET HIGHLIGHT(*;"myText";startSel;endSel)
       If(Contextual click&(Macintosh control down=False)) //llama el menú contextual
          If(startSel=endSel) // sin contenido seleccionado
  //activamos únicamente ciertos comandos
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;2)
             DISABLE MENU ITEM(<>menu_STYLEDTEXT;4)
             ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
             ...
          Else // obtenemos el tipo de contenido
             CT_Texttype:=ST Get content type(*;"myText";startSel;endSel)
             Case of // procesamiento de tipos diferentes
                :(CT_Texttype=ST URL type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                :(CT_Texttype=ST Expression type)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
                Else
                   ENABLE MENU ITEM(<>menu_STYLEDTEXT;6)
                   DISABLE MENU ITEM(<>menu_STYLEDTEXT;7)
                   ...
             End case
          End if
          MOUSE POSITION($xCoord;$yCoord;$ButtonState)
          $AlphaVar:=Dynamic pop up menu(<>menu_STYLEDTEXT;"";$xCoord;$yCoord)
          startSel:=-3
          endSel:=-3
       End if
       ...
    End if
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1286 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


