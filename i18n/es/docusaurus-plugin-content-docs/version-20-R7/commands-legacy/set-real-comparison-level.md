---
id: set-real-comparison-level
title: SET REAL COMPARISON LEVEL
slug: /commands/set-real-comparison-level
displayed_sidebar: docs
---

<!--REF #_command_.SET REAL COMPARISON LEVEL.Syntax-->**SET REAL COMPARISON LEVEL** ( *epsilon* )<!-- END REF-->
<!--REF #_command_.SET REAL COMPARISON LEVEL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| epsilon | Real | &#8594;  | Valor epsilon para las comparaciones de igualdad de los reales |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET REAL COMPARISON LEVEL.Summary-->El comando **SET REAL COMPARISON LEVEL** define el valor epsilon utilizado por 4D para hacer comparaciones de igualdad de valores y expresiones de tipo real.<!-- END REF-->

Un ordenador siempre realiza cálculos aproximativos sobre reales; por lo tanto, las pruebas de igualdad de valores reales deben tener en cuenta esta aproximación. 4D hace esto cuando compara números reales probando si la diferencia entre dos valores es superior o no a un cierto valor. Este valor se llama el **epsilon** y funciona de esta manera: 

Dados dos números reales *a* y *b*, si Abs(a-b) es mayor al epsilon, los números son considerados como diferentes; de lo contrario, los números son considerados iguales.

Por defecto, 4D, define el valor epsilon en 10 a la potencia menos 6 (10^-6). Por favor note que el valor *epsilon* siempre debe ser positivo. Ejemplos:

* *0.00001=0.00002* devuelve Falso, porque la diferencia *0.00001* es mayor que *10^-6*.
* *0.000001=0.000002* devuelve Verdadero, porque la diferencia *0.000001* no es mayor que *10^-6*.
* *0.000001=0.000003* devuelve Falso, porque la diferencia *0.000002 e*s mayor que *10^-6*.

Utilizando **SET REAL COMPARISON LEVEL**, puede aumentar o reducir el valor epsilon, en función de sus necesidades.

**Advertencia:** generalmente, no necesitará utilizar este comando para modificar el valor epsilon por defecto.

**IMPORTANTE:** cambiar el epsilon sólo afecta la comparación de igualdad de reales. No tiene efecto en los otros cálculos y visualizaciones de valores reales.

**Nota:** el comando **SET REAL COMPARISON LEVEL** no tiene efecto en las búsquedas y ordenaciones efectuadas con los campos de tipo real. Eso aplica únicamente al lenguaje de 4D.


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 623 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


