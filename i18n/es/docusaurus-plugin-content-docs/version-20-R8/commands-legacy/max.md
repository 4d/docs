---
id: max
title: Max
slug: /commands/max
displayed_sidebar: docs
---

<!--REF #_command_.Max.Syntax-->**Max** ( *series* {; *rutaAtributo*} ) : any<!-- END REF-->
<!--REF #_command_.Max.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| series | Field, Array | &#8594;  | Datos para los cuales se devuelve el valor  máximo |
| rutaAtributo | Text | &#8594;  | Ruta de atributo para el cual calcular el valor máximo |
| Resultado | Date, Number | &#8592; | Máximo valor en series |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Max.Summary-->**Max** devuelve el valor máximo en *series*.<!-- END REF--> Si *series* es un campo indexado, el índice se utiliza para buscar el valor máximo.

Puede pasar un array (una o dos dimensiones) en *series*. En este caso, el array debe ser del tipo Entero, Entero largo, Real o Fecha.

Si la selección de *series* está vacía, **Max** devuelve 0.

Este comando acepta un parámetro opcional de tipo texto *rutaAtributo*, que puede utilizar si *series* es un campo de tipo Objeto. Le permite definir la ruta del atributo a calcular. Utilice la notación estándar para definir las rutas de los atributos anidados, por ejemplo "company.address.number". Recuerde que los nombres de los atributos de objetos tienen en cuanta las mayúsculas y minúsculas.  
Sólo los valores numéricos de los atributos se utilizan para el calculo. Si hay valores en la ruta del atributo que no son de tipo numérico, se omiten.

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si se interrumpe (por ejemplo si el usuario hace clic en el botón **Detener** del termómetro de progreso), la variable OK toma el valor 0.

#### Ejemplo 1 

El siguiente ejemplo es un método de objeto de la variable *vMax* ubicada en el área de ruptura 0 del formulario. La variable se imprime al final del informe. El método de objeto asigna el valor máximo de campo a la variable, el cual se imprime en la última ruptura del informe.

```4d
 vMax:=Max([Employees] Salary)
```

**Nota:** asegúrese de que el evento formulario "On printing break" esté seleccionado para la variable.

El siguiente método se llama para imprimir los registros de la selección y activar el proceso de ruptura:

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

Este ejemplo permite obtener el valor más elevado de un array:

```4d
 ARRAY REAL($ArrGrades;0)
 QUERY([Exams];[Exams]Exam_Date=!01/07/11!)
 SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)
 vMax:=Max($ArrGrades)
```

#### Ejemplo 3 

Para un ejemplo de cálculo de un atributo campo de objeto, consulte el ejemplo 3 del comando [Average](average.md).

#### Ver también 

[Min](min.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 3 |
| Hilo seguro | &check; |
| Modifica variables | OK |


