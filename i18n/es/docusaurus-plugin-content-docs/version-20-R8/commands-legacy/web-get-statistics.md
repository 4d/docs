---
id: web-get-statistics
title: WEB GET STATISTICS
slug: /commands/web-get-statistics
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET STATISTICS.Syntax-->**WEB GET STATISTICS** ( *paginas* ; *hits* ; *uso* )<!-- END REF-->
<!--REF #_command_.WEB GET STATISTICS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| paginas | Text array | &#8592; | Nombres de las páginas más consultadas |
| hits | Integer array | &#8592; | Número de hits para cada página |
| uso | Integer | &#8592; | Porcentaje de la caché utilizado |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB GET STATISTICS.Summary-->El comando **WEB GET STATISTICS** permite obtener la información sobre las páginas más consultadas, cargadas en la caché del servidor web.<!-- END REF--> Por lo tanto, estas estadísticas conciernen únicamente las páginas estáticas, las imágenes GIF, las imágenes JPEG <100 KB y las hojas de estilo (.css). 

**Nota:** para mayor información sobre el parámetro de la caché del servidor web 4D, consulte la sección *Parámetros del servidor web*. 

El comando llena el array de texto *páginas* con los nombres de las páginas más consultadas. El array entero largo *hits* recibe el número de “hits” por cada página. La variable numérica *uso* recibe el porcentaje de la caché web utilizada por cada página.

#### Ejemplo 

Asumamos que quiere generar una página semidinámica que muestre las estadísticas de utilización de la caché web. Para esto, en una página HTML estática llamada “stats.shtm” (las páginas con sufijo .shtm son analizadas automáticamente por el servidor web), ponga la etiqueta <!--4DSCRIPT/STATS––> así como las referencias a las variables vPages y vUsage, por ejemplo:

```HTML
<html>
<head><title>4D Web Stats</title></head>
<!--#4DSCRIPT/STATS-->
<body>
<strong>Porcentaje de caché utilizada: </strong>
<!--#4DTEXT vUsage-->
<hr>
<strong>Páginas más consultadas: </strong>
<!--#4DHTML vPages-->
</body>
</html>
```

En el método de proyecto STATS, escriba el siguiente código:

```4d
 var $1 : Text
 var vPages : Text
 ARRAY TEXT(paginas;0)
 ARRAY LONGINT(hits;0)
 var vUsage : Integer
 WEB GET STATISTICS(paginas;hits;vUsage)
 
 For($i;1;Size of array(paginas))
    \\Para cada página presente en la caché
    vPaginas:=paginas{$i}+" "+String(hits{$i})+"
    " \\Inserte el nombre de la página y el código HTML
 End for
```

Puede enviar la página "stats.shtm" utilizando un enlace URL o utilizando el comando [WEB SEND FILE](web-send-file.md).


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 658 |
| Hilo seguro | &check; |


