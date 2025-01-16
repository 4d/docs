---
id: variance
title: Variance
slug: /commands/variance
displayed_sidebar: docs
---

<!--REF #_command_.Variance.Syntax-->**Variance** ( *series* ) : Real<!-- END REF-->
<!--REF #_command_.Variance.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Datos para los cuales se devuelve la varianza |
| Resultado | Real | &#8592; | Varianza de series |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Variance.Summary-->**Variance** devuelve la varianza para *series*.<!-- END REF--> Si *series* es un campo indexado, el índice se utiliza para calcular la varianza.

Puede pasar en *series* un array (de una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo o Real. 

La varianza de un conjunto de valores es el promedio de los cuadrados de las desviaciones estándar. La varianza media mide la dispersión de valores alrededor de la media. 4D utiliza la siguiente fórmula de varianza: 

**Varianza(x) = Sum (x-m)\*(x-m)/(n-1)**  
*m = Media*  
*n = Número de valores* 

Si los valores no se consideran una muestra, multiplique el valor devuelto por **Variance** por (n-1)/n.

#### Ejemplo 1 

El siguiente ejemplo es un método de objeto para la variable *var*. El método de objeto asigna la suma de cuadrados de una serie de datos a *var*:

```4d
 var:=Variance(Estudiantes]Notas)
```

El siguiente método se llama para imprimir los registros en la selección y activar el proceso de ruptura:

```4d
 ALL RECORDS([Estudiantes])
 ORDER BY([Estudiantes];[Estudiantes]Clase;>)
 BREAK LEVEL(1)
 ACCUMULATE([Estudiantes]Notas)
 OUTPUT FORM([Estudiantes];"Imprimir formulario")
 PRINT SELECTION([Estudiantes])
```

**Nota:** el parámetro del comando [BREAK LEVEL](break-level.md) debe ser igual al número de rupturas en su informe. Para mayor información sobre el proceso de rupturas, consulte *Impresión*.

#### Ejemplo 2 

Este ejemplo permite obtener la varianza de valores ubicados en un array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vVariance:=Variance($ArrGrades)
```

#### Ver también 

[Average](average.md)  
[Std deviation](std-deviation.md)  
[Sum](sum.md)  
[Sum squares](sum-squares.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 27 |
| Hilo seguro | &check; |


