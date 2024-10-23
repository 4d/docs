---
id: object-set-indicator-type
title: OBJECT SET INDICATOR TYPE
slug: /commands/object-set-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Syntax-->**OBJECT SET INDICATOR TYPE** ( {* ;} *objeto* ; *indicador* )<!-- END REF-->
<!--REF #_command_.OBJECT SET INDICATOR TYPE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| indicador | Integer | &#8594;  | Tipo de indicador |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Summary-->El comando **OBJECT SET INDICATOR TYPE** modifica el tipo de indicador de progresión del o de los termómetro(s) designado(s) por los parámetros *objeto* y *\** en el proceso actual.<!-- END REF-->  
  
El tipo de indicador define la variante de visualización del termómetro. Para más información, consulte *Indicadores* en el manual de *Diseño*.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
En el parámetro *indicador*, pase el tipo de indicador a mostrar. Puede utilizar una de las siguientes constantes del tema "*Propiedades de los objetos*":

| Constante                 | Tipo         | Valor | Comentario                                        |
| ------------------------- | ------------ | ----- | ------------------------------------------------- |
| Asynchronous progress bar | Entero largo | 3     | Indicador circular muestra una animación continua |
| Barber shop               | Entero largo | 2     | Barra que muestra una animación continua          |
| Progress bar              | Entero largo | 1     | Barra de progreso estándar                        |

#### Ver también 

[OBJECT Get indicator type](object-get-indicator-type.md)  