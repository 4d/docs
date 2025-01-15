---
id: sum-squares
title: Sum squares
slug: /commands/sum-squares
displayed_sidebar: docs
---

<!--REF #_command_.Sum squares.Syntax-->**Sum squares** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Sum squares.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Datos para los cuales se devuelve la suma de cuadrados |
| Resultado | Real | &#8592; | Suma de cuadrados de series |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Sum squares.Summary-->**Sum squares** devuelve la suma de cuadrados de *series*.<!-- END REF--> Si *series* es un campo indexado, el índice se utiliza para calcular la suma de cuadrados. 

Puede pasar un array (de una o dos dimensiones) en *series*. En este caso, el array debe ser de tipo Entero, Entero largo o Real.

#### Ejemplo 1 

El siguiente ejemplo es un método para la variable *vCuadrados*. El método de objeto asigna la suma de cuadrados de una serie de datos a *vCuadrados*. La variable *vCuadrados* se imprime en la última ruptura del informe:

```4d
 vCuadrados:=Sum squares([Tabla1]SeriesDatos)
```

El siguiente método se llama para imprimir los registros en la selección y activar el proceso de ruptura:

```4d
 ALL RECORDS([Tabla1])
 ORDER BY([Tabla1];[Tabla1]SeriesDatos;>)
 BREAK LEVEL(1)
 ACCUMULATE([Tabla1]SeriesDatos)
 OUTPUT FORM([Tabla1];"Imprimir formulario")
 PRINT SELECTION([Tabla1])
```

**Nota:** el parámetro del comando [BREAK LEVEL](break-level.md) debe ser igual al número de rupturas en su informe. Para mayor información sobre el proceso de rupturas, consulte *Impresión*. 

#### Ejemplo 2 

Este ejemplo permite obtener la suma de cuadrados de los valores ubicados en un array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSumSquares:=Sum squares($ArrGrades)
```

#### Ver también 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Variance](variance.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 28 |
| Hilo seguro | &check; |


