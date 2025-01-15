---
id: wa-get-url-history
title: WA GET URL HISTORY
slug: /commands/wa-get-url-history
displayed_sidebar: docs
---

<!--REF #_command_.WA GET URL HISTORY.Syntax-->**WA GET URL HISTORY** ( {* ;} *objeto* ; *arrUrls* {; *direccion* {; *arrTitulos*}} )<!-- END REF-->
<!--REF #_command_.WA GET URL HISTORY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrUrls | Text array | &#8592; | Array de los URLs visitados |
| direccion | Integer | &#8594;  | 0 ó si se omite=Lista de los URLs anteriores, 1=Lista de los URLs siguientes |
| arrTitulos | Text array | &#8592; | Array de títulos de ventanas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA GET URL HISTORY.Summary-->El comando WA GET URL HISTORY devuelve uno o dos arrays que contienen los URLs visitados durante la sesión en el área web designada por los parámetros *\** y *objeto*.<!-- END REF--> Permite construir una interfaz de navegación personalizada.

La información proporcionada hace referencia a la sesión; es decir la navegación efectuada en una misma área web siempre que no se haya cerrado el formulario.

El array *arrayUrls* se llena con la lista de los URLs visitados. Dependiendo del valor del parámetro *direccion* (si se pasa), el array recupera la lista de los URLs precedentes (funcionamiento por defecto) o la lista de los URLs siguientes. Esta lista corresponde al contenido de los botones estándar Anterior y Siguiente de los navegadores.

Los URLs son clasificados por orden cronológico.

Pase en *direccion* un valor indicando la lista a recuperar. Puede utilizar una de las siguientes constantes, que se encuentran en el tema *Web Area*:

| Constante        | Tipo         | Valor |
| ---------------- | ------------ | ----- |
| WA next URLs     | Entero largo | 1     |
| WA previous URLs | Entero largo | 0     |

Si omite el parámetro *direccion*, se utiliza el valor 0.

Si se pasa, el parámetro *arrTitulos* contiene la lista de los nombres de ventanas asociados a los URLs. Este array está sincronizado con el array *arrUrls*.

**Nota de compatibilidad:** **a partir de 4D v19 R5, este comando sólo devuelve la URL actual en los arrays *arrayUrls y *arrTitulos para las áreas web que utilizan el motor de renderizado del sistema Windows.* 

#### Ver también 

[WA Create URL history menu](wa-create-url-history-menu.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1048 |
| Hilo seguro | &cross; |


