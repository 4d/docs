---
id: object-is-styled-text
title: OBJECT Is styled text
slug: /commands/object-is-styled-text
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Is styled text.Syntax-->**OBJECT Is styled text** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Is styled text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o<br/>Campo o variable (si se omite *) |
| Resultado | Boolean | &#8592; | True si el objeto es un texto multi estilo, False en caso contrario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Is styled text.Summary-->El comando **OBJECT Is styled text** devuelve **True** sila opción "Multiestilo" está seleccionada para el(los) objeto(s) designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->

La opción "Multiestilo" permite utilizar áreas de texto enriquecido incluyendo variaciones de estilo individuales. Para obtener más información, consulte la sección *Multiestilo (área de texto enriquecido)* en el manual de *Diseño*. 

Los objetos multiestilo se pueden administrar por programación utilizando los comandos del tema "*Texto multiestilo*":

Al pasar el parámetro opcional *\** se indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).

**Nota:** el comando **OBJECT Is styled text** devuelve **True** cuando se aplica a un área 4D Write Pro.

#### Ejemplo 

Un formulario contiene un campo representado por dos objetos diferentes, uno de los objetos tiene la propiedad "Multi-estilo" marcada, y el otro no. Usted puede escribir:

```4d
 $Style:=OBJECT Is styled text(*;"Styled_text")
  // devuelve True ( si la opción "Multi-estilo" está seleccionada)
 
 $Style:=OBJECT Is styled text(*;"Plain_text")
  // devuelve False (si la opción "Multi-estilo" no está seleccionada)
```

#### Ver también 

*Texto multiestilo*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1261 |
| Hilo seguro | &cross; |


