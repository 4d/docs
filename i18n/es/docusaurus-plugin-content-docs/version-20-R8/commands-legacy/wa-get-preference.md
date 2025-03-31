---
id: wa-get-preference
title: WA GET PREFERENCE
slug: /commands/wa-get-preference
displayed_sidebar: docs
---

<!--REF #_command_.WA GET PREFERENCE.Syntax-->**WA GET PREFERENCE** ( {* ;} *objeto* ; *selector* ; *valor* )<!-- END REF-->
<!--REF #_command_.WA GET PREFERENCE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| selector | Integer | &#8594;  | Preferencia a leer |
| valor | Variable | &#8592; | Valor actual de la preferencia |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA GET PREFERENCE.Summary-->El comando WA GET PREFERENCE permite obtener el valor actual de una preferencia en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> 

Pase en el parámetro *selector* la preferencia a leer. Puede pasar una de las siguientes constantes, que se encuentran en el tema *Web Area*:

| Constante                 | Valor | Comentario                                                                                                                                                          |
| ------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| WA enable contextual menu | 4     | Autoriza la visualización del menú contextual estándar en el área web. Por defecto (cualquier máquina) = False                                                      |
| WA enable URL drop        | 101   | Cambia el icono de soltar y llama al evento *On Window Opening Denied* cuando se sueltan las URLs o los archivos en el área web. Por defecto (toda máquina) = False |
| WA enable Web inspector   | 100   | Permite la visualización del inspector web en el área. Por defecto (todo máquina) = False.                                                                          |

Pase en el parámetro *valor* una variable que recibirá el valor actual de la preferencia. La variable *valor* siempre es de tipo Booleano: contiene **True** si la preferencia está activa y si no **False**.

#### Ver también 

[WA SET PREFERENCE](wa-set-preference.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1042 |
| Hilo seguro | &cross; |


