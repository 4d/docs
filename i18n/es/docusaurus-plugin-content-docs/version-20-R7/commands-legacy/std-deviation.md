---
id: std-deviation
title: Std deviation
slug: /commands/std-deviation
displayed_sidebar: docs
---

<!--REF #_command_.Std deviation.Syntax-->**Std deviation** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Std deviation.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Datos para los cuales se devuelve la desviación estándar |
| Resultado | Real | &#8592; | Desviación estándar de series |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Std deviation.Summary-->**Std deviation** devuelve la desviación estándar de *series*.<!-- END REF-->   
  
Si *series* es un campo indexado, el índice se utiliza para calcular la desviación estándar. 

Puede pasar en *series* un array (de una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo o Real.

#### Ejemplo 1 

El siguiente ejemplo es un método de objeto para la variable *vDesv*. El método de objeto asigna la desviación estándar de una serie de datos a *vDesv*:

```4d
 vDesv:=Std deviation([Tabla1]SeriesDatos)
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

**Nota:** el parámetro del comando [BREAK LEVEL](break-level.md "BREAK LEVEL") debe ser igual al número de rupturas de su informe. Para mayor información sobre rupturas, consulte los comandos de impresión. 

#### Ejemplo 2 

Este ejemplo obtiene la desviación estándar de una serie de valores ubicados en un array: 

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vStdDev:=Std deviation($ArrGrades)
```

#### Ver también 

[Average](average.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  
[Variance](variance.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 26 |
| Hilo seguro | &check; |


