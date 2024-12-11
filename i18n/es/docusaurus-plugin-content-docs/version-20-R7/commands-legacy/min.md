---
id: min
title: Min
slug: /commands/min
displayed_sidebar: docs
---

<!--REF #_command_.Min.Syntax-->**Min** ( *series* {; *rutaAtributo*} ) : any<!-- END REF-->
<!--REF #_command_.Min.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Datos para los cuales devuelve el valor mínimo |
| rutaAtributo | Text | &#8594;  | Ruta de atributo para el cual calcular el valor mínimo |
| Resultado | Date, Number | &#8592; | Valor mínimo en series |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Min.Summary-->**Min** devuelve el valor mínimo en *series*.<!-- END REF--> Si *series* es un campo indexado, el índice se utiliza para encontrar el valor mínimo. 

Si la selección de *series* está vacía, **Min** devuelve 0.

Puede pasar en *series* un array (de una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo, Real o Fecha.

Este comando acepta un parámetro opcional de tipo texto *rutaAtributo*, que puede utilizar si *series* es un campo de tipo Objeto. Le permite definir la ruta del atributo a calcular. Utilice la notación estándar para definir las rutas de los atributos anidados, por ejemplo "company.address.number". Recuerde que los nombres de los atributos de objetos tienen en cuanta las mayúsculas y minúsculas.  
Sólo los valores numéricos de los atributos se utilizan para el calculo. Si hay valores en la ruta del atributo que no son de tipo numérico, se omiten.

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si se interrumpe (por ejemplo si el usuario hace clic en el botón **Detener** del termómetro de progreso), la variable OK toma el valor 0.

#### Ejemplo 1 

El siguiente ejemplo es un método de objeto para la variable *vMin* ubicada en el área de ruptura 0 del formulario. La variable se imprime al final del informe. El método de objeto asigna el valor mínimo del campo a la variable, el cual se imprime en la última ruptura del informe: 

```4d
 vMin:=Min([Employees]Salary)
```

**Note:** asegúrese de que el evento formulario "On printing break" esté seleccionado para la variable.

El siguiente método se llama para imprimir los registros en la selección y activar el proceso de ruptura:

```4d
 ALL RECORDS([Employees])
 ORDER BY([Employees];[Employees]Company;>)
 BREAK LEVEL(1)
 ACCUMULATE([Employees]Salary)
 FORM SET OUTPUT([Employees];"PrintForm")
 PRINT SELECTION([Employees])
```

**Nota:** el parámetro del comando [BREAK LEVEL](break-level.md) debe ser igual al número de rupturas en su informe. Para mayor información sobre rupturas, consulte el capítulo *Impresión*.

#### Ejemplo 2 

El siguiente ejemplo busca la venta más baja de un empleado y muestra el resultado en una caja de diálogo de alerta. Las cantidades vendidas son guardadas en el subcampo \[Empleados\]VentasDolares:

```4d
 ALERT("Ventaminima = "+String(Min([Empleados]VentasDolares)))
```

#### Ejemplo 3 

Este ejemplo obtiene el valor mínimo en el array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vMin:=Min($ArrGrades)
```

#### Ejemplo 4 

Para un ejemplo de cálculo de un atributo campo de objeto, consulte el ejemplo 3 del comando [Average](average.md).

#### Ver también 

[Max](max.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 4 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


