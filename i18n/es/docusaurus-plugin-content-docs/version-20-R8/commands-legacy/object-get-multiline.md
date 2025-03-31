---
id: object-get-multiline
title: OBJECT Get multiline
slug: /commands/object-get-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get multiline.Syntax-->**OBJECT Get multiline** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get multiline.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)<br/>Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si * se especifica) o <br/>Campo o variable (si * se omite) |
| Resultado | Integer | &#8592; | Estado Multilínea del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get multiline.Summary-->El comando **OBJECT Get multiline** devuelve el estado actual de la opción "Multilínea" del objeto o de los objetos designado(s) por los parámetros *objeto* y *\** .<!-- END REF-->  
  
Puede definir la opción "Multilínea" de un objeto utilizando la lista de propiedades o utilizando el comando [OBJECT SET MULTILINE](object-set-multiline.md).  
  
Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto únicamente).  
  
El valor devuelto corresponde a una de las siguientes constantes del tema "*Propiedades de los objetos*":  
  
| Constante      | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                                                                                                  |
| -------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiline Auto | Entero largo | 0     | En las áreas de una sola línea, las palabras situadas al final de las líneas se cortan y no hay retornos de línea.<br/>En las áreas de varias líneas, 4D efectúa saltos de línea automáticos.                                                                                                                                                       |
| Multiline No   | Entero largo | 2     | Nunca hay vuelta de la línea: el texto se muestra siempre en una sola línea. Si el campo o la variable alfa o texto contiene retornos de carro, el texto situado después del primer retorno de carro se elimina tan pronto como se modifica el área.                                                                                                        |
| Multiline Yes  | Entero largo | 1     | En las áreas de una sola línea, el texto se muestra hasta el primer retorno de carro o hasta la última palabra que se puede mostrar por completo. 4D inserta retornos de línea, es posible desplazarse por el contenido del área con la tecla de flecha hacia abajo.<br/>En las áreas de varias líneas, 4D efectúa los saltos de línea automáticos. |

  
**Nota:** si aplica el comando **OBJECT Get multiline** a un objeto que no admite la opción "Multilínea", devuelve el valor 0.

#### Ver también 

[OBJECT SET MULTILINE](object-set-multiline.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1254 |
| Hilo seguro | &cross; |


