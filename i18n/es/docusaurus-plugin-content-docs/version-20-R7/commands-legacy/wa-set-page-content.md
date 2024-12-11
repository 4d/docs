---
id: wa-set-page-content
title: WA SET PAGE CONTENT
slug: /commands/wa-set-page-content
displayed_sidebar: docs
---

<!--REF #_command_.WA SET PAGE CONTENT.Syntax-->**WA SET PAGE CONTENT** ( {* ;} *objeto* ; *contenido* ; *baseURL* )<!-- END REF-->
<!--REF #_command_.WA SET PAGE CONTENT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| contenido | Text | &#8594;  | Código HTML fuente |
| baseURL | Text | &#8594;  | URL para las referencias relativas (Mac OS) |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.WA SET PAGE CONTENT.Summary-->Este comando histórico ya no es realmente útil.<!-- END REF--> A medida que se refuerza la seguridad en los navegadores modernos, hay cada vez más restricciones para modificar el contenido de las páginas "sobre la marcha". Un enfoque más confiable es crear un archivo local (por ejemplo, en la carpeta temporal) y utilizar [WA OPEN URL](wa-open-url.md) para cargarlo. Para borrar el contenido, basta con llamar a WA OPEN URL(myArea; "about:blank").

#### Descripción 

El comando WA SET PAGE CONTENT reemplaza la página mostrada en el área web designada por los parámetros *\** y *objeto* por el código HTML pasado en el parámetro *contenido*. 

El parámetro *baseURL* permite definir bajo Mac OS, un URL de base que se añadirá en frente de los enlaces relativos que se puedan encontrar en la página.

Bajo Windows, este parámetro no tiene efecto y el URL de base no está definido. Por lo tanto no es posible utilizar referencias relativas en esta plataforma.

**Nota:** bajo Windows, es imperativo que una página haya sido cargada en el área web antes de que se llame este comando. Si es necesario, puede pasar el URL "about:blank" con el fin de cargar una página vacía.

#### Ejemplo 

Mostrar la frase "¡Hola mundo!" y definición de un URL de base "file:///" base URL (Mac OS únicamente):

```4d
 WA SET PAGE CONTENT(MiWArea;"

[Hola Mundo!]

";"file:///")
```

#### Ver también 

[WA Get page content](wa-get-page-content.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1037 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


