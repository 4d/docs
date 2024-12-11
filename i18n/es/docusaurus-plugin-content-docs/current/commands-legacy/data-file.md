---
id: data-file
title: Data file
slug: /commands/data-file
displayed_sidebar: docs
---

<!--REF #_command_.Data file.Syntax-->**Data file** {( *segmento* )} : Text<!-- END REF-->
<!--REF #_command_.Data file.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| segmento | Integer | &#8594;  | Obsoleto, no utilizar |
| Resultado | Text | &#8592; | Nombre largo del archivo de datos de la base |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Data file.Summary-->El comando Data file devuelve el nombre largo del archivo de datos o del primer segmento de la base en la cual está trabajando actualmente.<!-- END REF-->

A partir de la versión 11 de 4D, no se soportan segmentos de datos. El parámetro *segmento* se ignora y no debe utilizarse más.

*En Windows*  
Si está trabajando por ejemplo con la base MisCDs en \\DOCS\\MisCDs en el disco G, una llamada a Data file devuelve G:\\DOCS\\MisCDs \\MisCDs .4DD (siempre y cuando haya aceptado la ubicación y el nombre por defecto propuesto por 4D cuando creó la base).

*En Macintosh*  
Si está trabajando por ejemplo con la base en la carpeta Documentos:MisCDsƒ: en el disco Macintosh HD, una llamada a Data file devuelve Macintosh HD:Documentos:MisCDsƒ:MisCDsƒ.data (siempre y cuando haya aceptado la ubicación y el nombre por defecto propuesto por 4D cuando creó la base).

**Advertencia:** si llama este comando desde 4D en modo remoto, sólo se devuelve el nombre del archivo de datos, no el nombre largo.

#### Ver también 

[Application file](application-file.md)  
[Structure file](structure-file.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 490 |
| Hilo seguro | &check; |


