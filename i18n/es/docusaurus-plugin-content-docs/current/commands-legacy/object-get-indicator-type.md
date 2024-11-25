---
id: object-get-indicator-type
title: OBJECT Get indicator type
slug: /commands/object-get-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get indicator type.Syntax-->**OBJECT Get indicator type** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get indicator type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Integer | &#8592; | Tipo de indicador |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get indicator type.Summary-->El comando **OBJECT Get indicator type** devuelve el tipo del indicador actual asignado al termómetro(s) designado por los parámetros *objeto* y *\**.<!-- END REF-->

Puede definir el tipo de indicador utilizando la lista de propiedades en modo de diseño o utilizando el comando [OBJECT SET INDICATOR TYPE](object-set-indicator-type.md).

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable del objeto únicamente).

Puede comparar el valor devuelto por el comando con las siguientes constantes, que se encuentran en el tema "*Propiedades de los objetos*":

| Constante                 | Tipo         | Valor | Comentario                                        |
| ------------------------- | ------------ | ----- | ------------------------------------------------- |
| Asynchronous progress bar | Entero largo | 3     | Indicador circular muestra una animación continua |
| Barber shop               | Entero largo | 2     | Barra que muestra una animación continua          |
| Progress bar              | Entero largo | 1     | Barra de progreso estándar                        |

#### Ver también 

[OBJECT SET INDICATOR TYPE](object-set-indicator-type.md)  