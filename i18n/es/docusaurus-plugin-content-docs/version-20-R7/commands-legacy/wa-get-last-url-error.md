---
id: wa-get-last-url-error
title: WA GET LAST URL ERROR
slug: /commands/wa-get-last-url-error
displayed_sidebar: docs
---

<!--REF #_command_.WA GET LAST URL ERROR.Syntax-->**WA GET LAST URL ERROR** ( {* ;} *objeto* ; *url* ; *descripcion* ; *codigoError* )<!-- END REF-->
<!--REF #_command_.WA GET LAST URL ERROR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| url | Text | &#8592; | URL al origen del error |
| descripcion | Text | &#8592; | Descripción del error (Mac OS) |
| codigoError | Integer | &#8592; | Código de error |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WA GET LAST URL ERROR.Summary-->El comando WA GET LAST URL ERROR permite recuperar varios elementos de información relacionados con el último error ocurrido en el área Web designada por los parámetros *\** y *objeto*.<!-- END REF-->

Esta información se devuelve en tres variables:

* *url*: el URL provoca el error.
* *descripcion* (Mac OS únicamente): un texto describe el error (si está disponible). Si no es posible asociar un texto al error, se devuelve una cadena vacía. Bajo Windows, este parámetro siempre se devuelve vacío.
* *codigoError*: código del error.

\- Si el código es >=400, es un error relacionado con el protocolo HTTP. Para mayor información sobre este tipo de error, consulte la siguiente dirección:

*http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.htm*l

\- De lo contrario, es un error devuelto por el WebKit (Mac OS) o ActiveX (Windows).

Es recomendable llamar este comando dentro del marco del evento de formulario On URL Loading Error con el fin de conocer la causa del error que acaba de ocurrir.

#### Ver también 

[Form event code](../commands/form-event-code.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1034 |
| Hilo seguro | &cross; |


