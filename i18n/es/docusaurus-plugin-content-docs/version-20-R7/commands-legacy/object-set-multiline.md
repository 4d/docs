---
id: object-set-multiline
title: OBJECT SET MULTILINE
slug: /commands/object-set-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MULTILINE.Syntax-->**OBJECT SET MULTILINE** ( {* ;} *objeto* ; *multilinea* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MULTILINE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o <br/>Campo o variable (si se omite *) |
| multilinea | Integer | &#8594;  | Estado de la propiedad multilínea |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET MULTILINE.Summary-->El comando **OBJECT SET MULTILINE** modifica la propiedad "Multilínea" del objeto(s) designada por los parámetros *objeto* y *\** .<!-- END REF-->  
  
La propiedad "Multilínea" controla dos parámetros relacionados con la visualización e impresión de las áreas de texto: visualización de palabras situadas al final de la línea en las áreas de una sola línea y la inserción automática de los retornos de línea. Para obtener más información, consulte *Multilíneas* en el manual de Diseño. Si se aplica este comando a un objeto que no admite esta propiedad, el comando no hace nada.  
  
Al pasar el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no se pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable de objeto únicamente).  
  
En el parámetro *multilinea*, pase el nuevo valor de la opción que desea ajustar. Puede utilizar las siguientes constantes, que se encuentran en el tema "*Propiedades de los objetos*":  
  
| Constante      | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiline Auto | Entero largo | 0     | En las áreas de una sola línea, las palabras situadas al final de las líneas se cortan y no hay retornos de línea.<br/>En las áreas de varias líneas, 4D efectúa saltos de línea automáticos.                                                                                                                                                       |
| Multiline No   | Entero largo | 2     | Nunca hay vuelta de la línea: el texto se muestra siempre en una sola línea. Si el campo o la variable alfa o texto contiene retornos de carro, el texto situado después del primer retorno de carro se elimina tan pronto como se modifica el área.                                                                                                        |
| Multiline Yes  | Entero largo | 1     | En las áreas de una sola línea, el texto se muestra hasta el primer retorno de carro o hasta la última palabra que se puede mostrar por completo. 4D inserta retornos de línea, es posible desplazarse por el contenido del área con la tecla de flecha hacia abajo.<br/>En las áreas de varias líneas, 4D efectúa los saltos de línea automáticos. |

#### Ejemplo 

Usted quiere prohibir varias líneas en un área de entrada:

```4d
 OBJECT SET MULTILINE(*;"vEntry";Multiline No)
```

#### Ver también 

[OBJECT Get multiline](object-get-multiline.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1253 |
| Hilo seguro | &cross; |


