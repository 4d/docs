---
id: sum
title: Sum
slug: /commands/sum
displayed_sidebar: docs
---

<!--REF #_command_.Sum.Syntax-->**Sum** ( *series* {; *rutaAtributo*} ) : Real<!-- END REF-->
<!--REF #_command_.Sum.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Datos para los cuales se devuelve la suma |
| rutaAtributo | Text | &#8594;  | Ruta de atributo para el cual calcular la suma |
| Resultado | Real | &#8592; | Suma de series |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Sum.Summary-->**Sum** devuelve la suma (es decir, el total de todos los valores) de *series*.<!-- END REF--> Si *series* es un campo indexado, el índice se utiliza para calcular el calculo.

Puede pasar en *series* un array (a una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo o Real.

Este comando acepta un parámetro opcional de tipo texto *rutaAtributo*, que puede utilizar si *series* es un campo de tipo Objeto. Le permite definir la ruta del atributo a calcular. Utilice la notación estándar para definir las rutas de los atributos anidados, por ejemplo "company.address.number". Recuerde que los nombres de los atributos de objetos tienen en cuanta las mayúsculas y minúsculas.  
Sólo los valores numéricos de los atributos se utilizan para el calculo. Si hay valores en la ruta del atributo que no son de tipo numérico, se omiten.

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si se interrumpe (por ejemplo si el usuario hace clic en el botón **Detener** del termómetro de progreso) la variable OK toma el valor 0.

#### Ejemplo 1 

El siguiente ejemplo es un método de objeto para una variable *vTotal* ubicada en un formulario. El método de objeto asigna la suma de todos los salarios a *vTotal*:

```4d
 vTotal:=Sum([Empleados]Salario)
```

El siguiente método se llama para imprimir los registros en la selección y para activar el proceso de ruptura: 

```4d
 ALL RECORDS([Empleados])
 ORDER BY([Empleados];[Empleados]Apellido;>)
 BREAK LEVEL(1)
 ACCUMULATE([Empleados]Salario)
 OUTPUT FORM([Empleados];"Imprimir formulario")
 PRINT SELECTION([Empleados])
```

**Nota:** el parámetro para el comando [BREAK LEVEL](break-level.md "BREAK LEVEL") debe ser igual al número de rupturas en su informe. Para mayor información sobre el proceso de rupturas consulte los comandos de impresión. 

#### Ejemplo 2 

Este ejemplo permite obtener la suma de todos los valores ubicados en un array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vSum:=Sum($ArrGrades)
```

#### Ejemplo 3 

Para un ejemplo de cálculo de un atributo campo de objeto, consulte el ejemplo 3 del comando [Average](average.md).

#### Ver también 

[ACCUMULATE](accumulate.md)  
[Average](average.md)  
[BREAK LEVEL](break-level.md)  
[Max](max.md)  
[Min](min.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1 |
| Hilo seguro | &check; |
| Modifica variables | OK |


