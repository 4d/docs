---
id: looping
title: Looping structures
---

Looping structures repeat a sequence of statements until a condition is met or a number of times is reached.


## While...End while

La sintaxis de la estructura condicional `While...End while` es:
```4d
 While(Boolean_Expression)
    statement(s)
 End while
```
Un bucle `While...End while` ejecuta las instrucciones dentro del bucle mientras la expresión booleana sea TRUE. Comprueba la expresión booleana al inicio del bucle y no entra en el bucle si la expresión es FALSE.

Es común inicializar el valor probado en la expresión booleana inmediatamente antes de entrar en el bucle `While...End while`. Inicializar el valor significa asignarle un contenido adecuado, normalmente para que la expresión booleana sea TRUE y `While...End while` ejecute el bucle.

El valor de la expresión booleana debe poder ser modificado por un elemento dentro del bucle, de lo contrario se ejecutará indefinidamente. El siguiente bucle continúa para siempre porque _NeverStop_ es siempre TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Si se encuentra en una situación de este tipo, en la que un método se ejecuta de forma incontrolada, puede utilizar las funciones de rastreo para detener el bucle y localizar el problema. Para más información sobre el seguimiento de un método, consulte la página [Gestión de errores](error-handling.md).

### Example

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

En este ejemplo, el valor de la variable sistema `OK` es definido por el comando `CONFIRM` antes de que se inicie el bucle. Si el usuario hace clic en el botón **OK** de la caja de diálogo de confirmación, la variable del sistema `OK` toma el valor 1 y se inicia el bucle. En caso contrario, la variable del sistema `OK` toma el valor 0 y se omite el bucle. Una vez se inicia el bucle, el comando `ADD RECORD` permite continuar la ejecución del bucle porque se define la variable sistema `OK` en 1 cuando el usuario guarda el registro. Cuando el usuario cancela (no guarda) el último registro, la variable del sistema `OK` toma el valor 0 y el bucle se detiene.

## Repeat...Until

La sintaxis de la estructura condicional `Repeat...Until` es:
```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```
Un bucle `Repeat...Until` es similar a un bucle [While...End while](flow-control#whileend-while), excepto que comprueba la expresión booleana después del bucle en lugar de antes. Así, un bucle `Repeat...Until` siempre ejecuta el bucle una vez, mientras que si la expresión booleana es inicialmente False, un bucle `While...End while` no ejecuta el bucle en absoluto.

La otra diferencia con un bucle `Repeat...Until` es que el bucle continúa hasta que la expresión booleana sea TRUE.

### Example

Compara el siguiente ejemplo con el ejemplo del bucle `While...End while`. Tenga en cuenta que la expresión booleana no necesita ser inicializada-no hay un comando `CONFIRM` para inicializar la variable `OK`.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

La sintaxis de la estructura condicional `For...End for` es:

```4d
 For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
    statement(s)
 End for
```

El bucle `For...End for` es un bucle controlado por un contador:

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

**Importante:** las expresiones numéricas *Start_Expression*, *End_Expression* y *Increment_Expression* se evalúan una vez al principio del bucle. Si estas expresiones son variables, el cambio de una de estas variables dentro del bucle no afectará al bucle.

**Consejo:** Sin embargo, para fines especiales, puede cambiar el valor de la variable *Counter_Variable* dentro del bucle; esto afectará al bucle.

- Usually *Start_Expression* is less than *End_Expression*.
- If *Start_Expression* and *End_Expression* are equal, the loop will execute only once.
- If *Start_Expression* is greater than *End_Expression*, the loop will not execute at all unless you specify a negative *Increment_Expression*. See the examples.

### Basic examples

1. The following example executes 100 iterations:

```4d
 For(vCounter;1;100)
  //Do something
 End for
```

2. The following example goes through all elements of the array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. The following example goes through all the characters of the text vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. The following example goes through the selected records for the table [aTable]:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the next record
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples.

### Decrementing variable counter

En algunos casos, puede querer tener un bucle cuya variable de contador sea decreciente en lugar de creciente. Para ello, debe especificar *Start_Expression* mayor que *End_Expression* y *Increment_Expression* debe ser negativa. Los siguientes ejemplos hacen lo mismo que los anteriores, pero en orden inverso:

5. The following example executes 100 iterations:

```4d
 For(vCounter;100;1;-1)
  //Do something
 End for
```

6. The following example goes through all elements of the array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. The following example goes through all the characters of the text vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. The following example goes through the selected records for the table [aTable]:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  //Do something with the record
    SEND RECORD([aTable])
  //...
  //Go to the previous record
    PREVIOUS RECORD([aTable])
 End for
```

### Incrementing the counter variable by more than one

Si lo requiere, puede utilizar una *Increment_Expression* (positiva o negativa) cuyo valor absoluto sea mayor que uno.

9. The following loop addresses only the even elements of the array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```


### Comparing looping structures

Volvamos al primer ejemplo de `For...End for`. The following example executes 100 iterations:
```4d
 For(vCounter;1;100)
  //Do something
 End for
```

Es interesante ver cómo el bucle `While...End while` y el bucle `Repeat...Until` realizarían la misma acción. Aquí está el bucle equivalente `While...End while`:
```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Aquí está el bucle equivalente `Repeat...Until`:
```4d
 $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
```
**Consejo:** el bucle `For...End for` suele ser más rápido que los bucles `While...End while` y `Repeat...Until`, porque 4D comprueba la condición internamente en cada ciclo del bucle e incrementa el contador. Por lo tanto, utilice el bucle `For...End for` siempre que sea posible.

### Optimizing the execution of the For...End for loops

Puede utilizar variables reales y enteras, así como contadores interproceso, de proceso y de variables locales. Para bucles repetitivos largos, especialmente en modo compilado, utilice variables locales de tipo Entero largo.

10. Here is an example:

```4d
 C_LONGINT($vlCounter) //use local Long Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

### Nested For...End for looping structures

Puede anidar tantas estructuras de control como necesite (razonablemente). Esto incluye la anidación de bucles `For...End for`. Para evitar errores, asegúrese de utilizar diferentes variables de contador para cada estructura de bucle.

He aquí dos ejemplos:

11. The following example goes through all the elements of a two-dimensional array:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  //Do something with the row
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  //Do something with the element
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

12. The following example builds an array of pointers to all the date fields present in the database:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Get last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Get last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

La sintaxis de la estructura condicional `For each...End for each` es:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
 End for each
```

La estructura `For each...End for each` ejecuta un *Current_item* especificado sobre todos los valores de *Expression*. El tipo *Current_item* depende del tipo *Expression*. El bucle `For each...End for each` puede iterar a través de tres tipos de *Expression*:

- collections: loop through each element of the collection,
- entity selections: loop through each entity,
- objects: loop through each object property.

La siguiente tabla compara los tres tipos de `For each...End for each`:

|                                   | Loop through collections                         | Loop through entity selections      | Loop through objects        |
| --------------------------------- | ------------------------------------------------ | ----------------------------------- | --------------------------- |
| Current_Item type                 | Variable of the same type as collection elements | Entity                              | Text variable               |
| Expression type                   | Collection (with elements of the same type)      | Entity selection                    | Object                      |
| Number of loops (by default)      | Number of collection elements                    | Number of entities in the selection | Number of object properties |
| Support of begin / end parameters | Yes                                              | Yes                                 | No                          |

- The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.
- By default, the enclosed _statement(s)_ are executed for each value in *Expression*. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords:
    - before entering the loop, if items should be modified together for integrity reasons, or
    - within the loop when only some elements/properties need to be modified and no integrity management is required.

### Loop through collections

Cuando `For each...End for each` se utiliza con una _Expression_ del tipo _Collection_, el parámetro _Current_Item_ es una variable del mismo tipo que los elementos de la colección. Por defecto, el número de bucles se basa en el número de elementos de la colección.

La colección debe contener sólo elementos del mismo tipo, de lo contrario se devolverá un error en cuanto a la variable _Current_Item_ se le asigne el primer tipo de valor diferente.

En cada iteración del bucle, la variable _Current_Item_ se llena automáticamente con el elemento correspondiente de la colección. Hay que tener en cuenta los siguientes puntos:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The _Current_Item_ variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Example

Usted quiere calcular algunas estadísticas para una colección de números:
```4d
 C_COLLECTION($nums)
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 C_LONGINT($item;$vEven;$vOdd;$vUnder;$vOver)
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### Loop through entity selections

When `For each...End for each` is used with an _Expression_ of the _Entity selection_ type, the _Current_Item_ parameter is the entity that is currently processed.

The number of loops is based on the number of entities in the entity selection. On each loop iteration, the *Current_Item* parameter is automatically filled with the entity of the entity selection that is currently processed.

**Note:** If the entity selection contains an entity that was removed meanwhile by another process, it is automatically skipped during the loop.

Keep in mind that any modifications applied on the current entity must be saved explicitly using `entity.save( )`.

#### Example

You want to raise the salary of all British employees in an entity selection:
```4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Loop through object properties

When `For each...End for each` is used with an *Expression* of the Object type, the *Current_Item* parameter is a text variable automatically filled with the name of the currently processed property.

The properties of the object are processed according to their order of creation. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### Example

You want to switch the names to uppercase in the following object:
```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```
You can write:
```4d
 For each(property;vObject)
    If(Value type(vObject[property])=Is text)
       vObject[property]:=Uppercase(vObject[property])
    End if
 End for each
```
```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```
### begin / end parameters

You can define bounds to the iteration using the optional begin and end parameters.

**Note:** The *begin* and *end* parameters can only be used in iterations through collections and entity selections (they are ignored on object properties).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded).

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included). If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*. If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0. **Note:** Even if begin is negative, the iteration is still performed in the standard order. If *end* is a negative value, it is recalculed as `end:=end+Expression size`

For example:
- a collection contains 10 elements (numbered from 0 to 9)
- begin=-4 -> begin=-4+10=6 -> iteration starts at the 6th element (#5)
- end=-2 -> end=-2+10=8 -> iteration stops before the 8th element (#7), i.e. at the 7th element.

#### Example

```4d
 C_COLLECTION($col;$col2)
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 C_TEXT($item)
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Until and While conditions

You can control the `For each...End for each` execution by adding an `Until` or a `While` condition to the loop. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

You can pass either keyword depending on your needs:

- The `Until` condition is tested at the end of each iteration, so if the *Expression* is not empty or null, the loop will be executed at least once.
- The `While` condition is tested at the beginning of each iteration, so according to the condition result, the loop may not be executed at all.

#### Example

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)

 $total:=0
 For each($num;$colNum)While($total<30) //tested at the beginning
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)

 $total:=1000
 For each($num;$colNum)Until($total>30) //tested at the end
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

