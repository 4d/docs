---
id: st-get-url
title: ST GET URL
slug: /commands/st-get-url
displayed_sidebar: docs
---

<!--REF #_command_.ST GET URL.Syntax-->**ST GET URL** ( {* ;} *objeto* ; *textoURL* ; *direccionURL* {; *inicioSel* {; *finSel*}} )<!-- END REF-->
<!--REF #_command_.ST GET URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o<br/>Campo o variable (si se omite *) |
| textoURL | Text | &#8592; | Texto visible de la URL |
| direccionURL | Text | &#8592; | Dirección de la URL |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST GET URL.Summary-->El comando **ST GET URL** devuelve la etiqueta y la dirección de la primera URL detectada en el campo o la variable de texto multiestilo designado por el parámetro *objeto*.<!-- END REF--> 

La etiqueta y la dirección se devuelven en los parámetros *textoURL* y *direccionURL*. Si la selección no contiene una URL, se devuelven cadenas vacías en estos parámetros.  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Durante la ejecución, si el objeto tiene el foco, el comando devuelve la información del objeto que se está editando, y si el objeto no tiene el foco, el comando devuelve la información de la fuente de datos del objeto (variable o campo).  
Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena. Durante la ejecución, el comando devuelve la información de la variable o del campo.

Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes.  
* Si pasa *inicioSel* y *finSel*, **ST GET URL** busca la URL dentro de esta selección.
* Si pasa únicamente *inicioSel* o si el valor de *finSel* es mayor que el número total de caracteres en el *objeto*, el comando busca la URL entre *inicioSel* y el final del texto .
* Si omite *inicioSel* y *finSel*, el comando busca la URL dentro de la selección de texto actual.

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

Cuando hay un evento de doble clic, se comprueba que no existe en realidad una URL, y si es así, se muestra un diálogo en el que ha recuperado sus valores para que el usuario puede modificarlos:

```4d
 Case of
    :(Form event code=On Double Clicked)
       GET HIGHLIGHT(*;"StyledText_t";startSel;endSel)
       If(ST Get content type(*;"StyledText_t";startSel;endSel)=ST URL type) //URL
          ST GET URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
          $winRef:=Open form window("Dial_InsertURL";Movable form dialog box;Horizontally centered;Vertically centered;*)
          SET WINDOW TITLE("URL settings")
          DIALOG("Dial_InsertURL")
          If(OK=1)
             ST INSERT URL(*;"StyledText_t";vTitle;vURL;startSel;endSel)
             HIGHLIGHT TEXT(*;"StyledText_t";startSel;startSel+1)
          End if
       End if
 End case
```

#### Ver también 

[ST INSERT URL](st-insert-url.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1288 |
| Hilo seguro | &cross; |


