---
id: st-insert-url
title: ST INSERT URL
slug: /commands/st-insert-url
displayed_sidebar: docs
---

<!--REF #_command_.ST INSERT URL.Syntax-->**ST INSERT URL** ( {* ;} *objeto* ; *textoURL* ; *direccionURL* {; *inicioSel* {; *finSel*}} )<!-- END REF-->
<!--REF #_command_.ST INSERT URL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| textoURL | Text | &#8594;  | Texto visible del URL |
| direccionURL | Text | &#8594;  | Dirección de la URL |
| inicioSel | Integer | &#8594;  | Inicio de la selección |
| finSel | Integer | &#8594;  | Fin de la selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ST INSERT URL.Summary-->El comando **ST INSERT URL** inserta un enlace URL en el campo o la variable de texto con estilo designada por el parámetro *objeto* .<!-- END REF--> 

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite el parámetro *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable (variable o campo objeto únicamente).

En el parámetro *textoURL*, pase el texto visible de la URL, como debe aparecer en el objeto. Por ejemplo, se pueden usar etiquetas de texto como "Sitio web 4D" o "Siga este enlace para obtener más información." También puede utilizar la dirección misma, por ejemplo "http://www.4d.com".  
  
En el parámetro *direccionURL*, pase la dirección completa a la cual desea conectar la página del navegador, por ejemplo "http://www.4D.com".

Los parámetros opcionales *inicioSel* y *finSel* designan una selección de texto en *objeto*. Los valores *inicioSel* y *finSel* expresan una selección de texto plano, sin tener en cuenta etiquetas de estilo que pueden estar presentes en el texto.  
  
* Si pasa únicamente *inicioSel*, *textoURL* inserta en la ubicación especificada.
* Si omite *inicioSel* y *finSel*, *textoURL* se inserta en la ubicación del cursor.
* Si pasa *inicioSel* y *finSel*, **ST INSERT URL** remplaza el texto en esta selección por *textoURL*. Si el valor de *finSel* es mayor que el número total de caracteres en el objeto, todos los caracteres entre *inicioSel* y el final del texto son remplazados por *textoURL*.

4D ofrece constantes predefinidas para que pueda designar automáticamente los límites de selección en los parámetros *inicioSel* y *finSel*. Estas constantes se encuentran en el tema "*Texto multiestilo*":

| Constante          | Tipo         | Valor  | Comentario                                                                   |
| ------------------ | ------------ | ------ | ---------------------------------------------------------------------------- |
| ST End highlight   | Entero largo | \-1001 | Designa el último carácter de la selección actual de texto en el objeto (\*) |
| ST End text        | Entero largo | 0      | Designa el último carácter del texto contenido en el objeto                  |
| ST Start highlight | Entero largo | \-1000 | Designa el primer carácter de la selección actual de texto en el objeto (\*) |
| ST Start text      | Entero largo | 1      | Designa el primer carácter del texto contenido en el objeto                  |

(\*) Debe pasar un nombre de objeto en *objeto* para poder utilizar esta constante. Si pasa una referencia a un campo o variable, el comando se aplica a todo el texto del objeto.  
  
**Nota**: si *inicioSel* es mayor que *finSel* (excepto cuando *finSel* es 0) , el comando no hace nada y la variable OK toma el valor 0.

Una vez insertado el enlace, es activa: el uso de **Ctrl+clic** (Windows) o **Comando+clic** (OS X) abre una página del navegador por defecto en la dirección especificada en el parámetro *direccionURL*.

#### Ejemplo 

Usted desea insertar un enlace al sitio web de 4D para reemplazar el texto seleccionado en el objeto:

```4d
 vTitle:="4D Web Site"
 vURL:="http://www.4d.com/"
 ST INSERT URL(*;"myText";vTitle;vURL;ST Start highlight;ST End highlight)
```

#### Ver también 

[ST GET URL](st-get-url.md)  
[ST INSERT EXPRESSION](st-insert-expression.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1280 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


