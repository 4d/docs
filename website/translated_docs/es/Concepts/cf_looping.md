---
id: looping
title: Estructuras repetitivas (bucles)
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
 CONFIRM("¿Añadir un nuevo registro?") //¿El usuario quiere añadir un registro?
 While(OK=1) //Bucle mientras el usuario quiera
    ADD RECORD([aTable]) /Añadir un nuevo registro
 End while //El bucle siempre termina con End while
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

- La variable contador *Counter_Variable* es una variable numérica (Real o Entero largo) inicializada por `For...End for` con el valor especificado por *Start_Expression*.
- Cada vez que se ejecuta el bucle, la variable del contador se incrementa en el valor especificado en el valor opcional *Increment_Expression*. Si no se especifica *Increment_Expression*, la variable del contador se incrementa en uno (1), que es el valor predeterminado.
- Cuando la variable del contador pasa el valor *End_Expression*, el bucle se detiene.

**Importante:** las expresiones numéricas *Start_Expression*, *End_Expression* y *Increment_Expression* se evalúan una vez al principio del bucle. Si estas expresiones son variables, el cambio de una de estas variables dentro del bucle no afectará al bucle.

**Consejo:** Sin embargo, para fines especiales, puede cambiar el valor de la variable *Counter_Variable* dentro del bucle; esto afectará al bucle.

- Normalmente *Start_Expression* es menor que *End_Expression*.
- Si *Start_Expression* y *End_Expression* son iguales, el bucle se ejecutará sólo una vez.
- Si *Start_Expression* es mayor que *End_Expression*, el bucle no se ejecutará en absoluto a menos que se especifique una *Increment_Expression* negativa. Ver los ejemplos.

### Ejemplos básicos

1. El siguiente ejemplo ejecuta 100 iteraciones:

```4d
 For(vCounter;1;100)
  //Hacer algo
 End for
```

2. El siguiente ejemplo recorre todos los elementos del array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Hacer algo con el elemento
    anArray{$vlElem}:=...
 End for
```

3. El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Hacer algo con el carácter si es un TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. El siguiente ejemplo recorre los registros seleccionados para la tabla [aTable]:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Hacer algo con el registro
    SEND RECORD([aTable])
  //...
  //Ir al siguiente registro
    NEXT RECORD([aTable])
 End for
```

Most of the `For...End for` loops you will write in your projects will look like the ones listed in these examples.

### Disminuir la variable contador

En algunos casos, puede querer tener un bucle cuya variable de contador sea decreciente en lugar de creciente. Para ello, debe especificar *Start_Expression* mayor que *End_Expression* y *Increment_Expression* debe ser negativa. Los siguientes ejemplos hacen lo mismo que los anteriores, pero en orden inverso:

5. El siguiente ejemplo ejecuta 100 iteraciones:

```4d
 For(vCounter;100;1;-1)
  //Hacer algo
 End for
```

6. El siguiente ejemplo recorre todos los elementos del array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Hacer algo con el elemento
    anArray{$vlElem}:=...
 End for
```

7. El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Hacer algo con el carácter si es un TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. El siguiente ejemplo recorre los registros seleccionados para la tabla [aTable]:

```4d
 LAST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  //Hacer algo con el registro
    SEND RECORD([aTable])
  //...
  //Ir al registro anterior
    PREVIOUS RECORD([aTable])
 End for
```

### Incrementar la variable del contador en más de uno

Si lo requiere, puede utilizar una *Increment_Expression* (positiva o negativa) cuyo valor absoluto sea mayor que uno.

9. El siguiente bucle aborda sólo los elementos pares del array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Hacer algo con el elemento #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```


### Comparación de estructuras de bucle

Volvamos al primer ejemplo de `For...End for`. El siguiente ejemplo ejecuta 100 iteraciones:
```4d
 For(vCounter;1;100)
  //Hacer algo
 End for
```

Es interesante ver cómo el bucle `While...End while` y el bucle `Repeat...Until` realizarían la misma acción. Aquí está el bucle equivalente `While...End while`:
```4d
 $i:=1 //Inicializar el contador
 While($i<=100) //Bucle 100 veces
  //Hacer algo
    $i:=$i+1 //Necesita incrementar el contador
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
| Expression type                   | Collection (with elements of the same type)      | Entity selection                    | Objeto                      |
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

Cuando `For each...End for each` se utiliza con una _Expression_ del tipo _Collection_, el parámetro _Current_Item_ es una variable del mismo tipo que los elementos de la colección.

El número de bucles se basa en el número de entidades de la selección de entidades. En cada iteración del bucle, el parámetro *Current_Item* se llena automáticamente con la entidad de la selección de entidades que se procesa actualmente.

**Nota:** si la selección de entidades contiene una entidad que fue eliminada mientras tanto por otro proceso, se salta automáticamente durante el bucle.

Tenga en cuenta que cualquier modificación aplicada en la entidad actual debe ser guardada explícitamente utilizando `entity.save( )`.

#### Example

Quiere aumentar el salario de todos los empleados británicos en una selección de entidades:
```4d
 C_OBJECT(emp)
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Bucles en las propiedades de objetos

Cuando se utiliza `For each...End for each` con una *Expression* de tipo Object, el parámetro *Current_Item* es una variable texto que se llena automáticamente con el nombre de la propiedad actualmente procesada.

Las propiedades del objeto se procesan de acuerdo con su orden de creación. Durante el bucle, se pueden añadir o eliminar propiedades en el objeto, sin modificar el número de bucles que quedarán en función del número original de propiedades del objeto.

#### Example

Quiere pasar los nombres a mayúsculas en el siguiente objeto:
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
### Parámetros begin / end

Puede definir los límites de la iteración utilizando los parámetros opcionales inicio y fin.

**Nota:**los parámetros *inicio* y *fin* sólo pueden utilizarse en iteraciones a través de colecciones y selecciones de entidades (se ignoran en las propiedades de objetos).

- In the *begin* parameter, pass the element position in *Expression* at which to start the iteration (*begin* is included).
- In the *end* parameter, you can also pass the element position in *Expression* at which to stop the iteration (*end* is excluded).

Si se omite *fin* o si es mayor que el número de elementos de <em x-id="3" <Expression</em>, se iteran los elementos desde *inicio* hasta el último (incluido). Si los parámetros *inicio* y *fin* son valores positivos, representan posiciones reales de elementos en *Expression*. Si *comienzo* es un valor negativo, se recalcula como `comienzo:=comienzo+tamaño de la expresión` (se considera como el desplazamiento desde el final de *Expression*). Si el valor calculado es negativo, *inicio* toma el valor 0. **Nota:** aunque inicio sea negativo, la iteración se sigue realizando en el orden estándar. Si *fin* es un valor negativo, se recalcula como `fin:=fin+tamaño de la expresión`

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

Puede controlar la ejecución de `For each...End for each` añadiendo una condición `Until` o una condición `While` al bucle. Cuando una instrucción `Until(condición)` está asociada al bucle, la iteración se detendrá tan pronto como la condición se evalúe como `True`, mientras que cuando se trata de una instrucción `While(condición)`, la iteración se detendrá cuando la condición se evalúe por primera vez como `False`.

Puede pasar cualquiera de las dos palabras clave en función de sus necesidades:

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

