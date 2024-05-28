---
id: control-flow
title: Flujo de control
---

Independientemente de la simplicidad o la complejidad de un método o de una función, siempre utilizará uno o varios de los tres tipos de estructuras de programación. Las estructuras de programación determinan el flujo de ejecución, si se ejecutan y el orden de las líneas de instrucciones dentro de un método. Hay tres tipos de estructuras:

- **Secuencial**: una estructura secuencial es una estructura simple y lineal. Una secuencia es una serie de sentencias que 4D ejecuta una tras otra, de la primera a la última. Una instrucción de una línea, utilizada frecuentemente para los métodos de los objetos, es el caso más simple de una estructura secuencial. Por ejemplo: `[People]lastName:=Uppercase([People]lastName)`
- **Ramificación**: una estructura de ramificación permite que los métodos prueben una condición y tomen caminos alternativos, dependiendo del resultado. La condición es una expresión booleana, una expresión que evalúa TRUE o FALSE. One branching structure is the [`If...Else...End if`](#ifelseend-if) structure, which directs program flow along one of two paths. The other branching structure is the [`Case of...Else...End case`](#case-ofelseend-case) structure, which directs program flow to one of many paths.
- **Bucle**: cuando se escriben métodos, es muy común encontrarse con que se necesita que una secuencia de sentencias se repita un número de veces. Para hacer frente a esta necesidad, el lenguaje 4D ofrece las siguientes estructuras de bucle:

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

Los bucles se controlan de dos maneras: o bien se repiten hasta que se cumple una condición, o bien se repiten un número determinado de veces. Cada estructura de bucle puede utilizarse de cualquier manera, pero los bucles `While` y los bucles `Repeat` son más apropiados para repetir hasta que se cumpla una condición, y los bucles `For` son más apropiados para hacer un bucle un número determinado `For each...End for each` permite la mezcla en ambos sentidos y está diseñado para realizar bucles dentro de objetos y colecciones.

**Nota:** 4D permite anidar estructuras de programación hasta una "profundidad" de 512 niveles.

## If...Else...End if

La sintaxis de la estructura condicional `If...Else...End if` es:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

Tenga en cuenta que la parte `Else` es opcional; puede escribir:

```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

La estructura `If...Else...End if` permite a su método elegir entre dos acciones, dependiendo de si una prueba (una expresión booleana) es TRUE o FALSE. Cuando la expresión booleana es TRUE, se ejecutan las sentencias que siguen inmediatamente a la prueba. Si la expresión booleana es FALSE, se ejecutan las instrucciones que siguen a la línea Else. El `Else` es opcional; si se omite Else, la ejecución continúa con la primera instrucción (si la hay) que sigue al `End if`.

Tenga en cuenta que la expresión booleana siempre se evalúa completamente. Considere en particular la siguiente prueba:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

La expresión es TRUE sólo si los dos métodos son TRUE. However, even if _MethodA_ returns FALSE, 4D will still evaluate _MethodB_, which is a useless waste of time. En este caso, es más interesante utilizar una estructura como:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and _MethodB_ is evaluated only if necessary.

> **Note:** The [ternary operator](operators.md#ternary-operator) allows writing one-line conditional expressions and can replace a full sequence of If..

#### Ejemplo

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if 
```

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicación especializada, nada le impide escribir:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```

o:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of... Else...End case

The formal syntax of the `Case of... Else...End case` control flow structure is:

```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

Tenga en cuenta que la parte `Else` es opcional; puede escribir:

```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
 End case
```

As with the `If...Else...End if` structure, the `Case of... Else...End case` structure also lets your method choose between alternative actions. Unlike the `If...Else...End` if structure, the `Case of... Else...End case` structure can test a reasonable unlimited number of Boolean expressions and take action depending on which one is TRUE.

Cada expresión booleana va precedida de dos puntos (`:`). Esta combinación de los dos puntos y la expresión booleana se llama un caso. Por ejemplo, la siguiente línea es un caso:

```4d
:(bValidate=1)
```

Sólo se ejecutarán las instrucciones que sigan al primer caso TRUE (y hasta el siguiente). Si ninguno de los casos es TRUE, no se ejecutará ninguna de las instrucciones (si no se incluye la parte `Else`).

Puede incluir una instrucción Else después del último caso. Si todos los casos son FALSE, se ejecutarán las instrucciones siguientes al `Else`.

#### Ejemplo

Este ejemplo comprueba una variable numérica y muestra un cuadro de alerta con una palabra:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

Para comparar, aquí está la versión `If...Else...End if` del mismo método:

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

Remember that with a `Case of... Else...End case` structure, only the first TRUE case is executed. Aunque dos o más casos sean TRUE, sólo se ejecutarán las instrucciones que siguen al primer caso TRUE.

En consecuencia, cuando quiera implementar pruebas jerárquicas, debe asegurarse de que las declaraciones de condición que están más abajo en el esquema jerárquico aparezcan primero en la secuencia de pruebas. Por ejemplo, si se quiere procesar el caso simple (vResult=1) y el caso complejo (vResult=1) & (vCondition#2) y se estructura el método de la siguiente manera: Por ejemplo, el siguiente código nunca verá detectada su última condición:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

En el código anterior, la presencia de la segunda condición no se detecta, ya que la prueba "vResult=1" ramifica el código antes de cualquier otra prueba. Para que el código funcione correctamente, puedes escribirlo así:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

Además, si quiere implementar pruebas jerárquicas, puede considerar el uso de código jerárquico.

**Consejo:** la ramificación puede realizarse sin que las instrucciones se ejecuten en un caso u otro. Al desarrollar un algoritmo o una aplicación especializada, nada le impide escribir:

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

o:

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...
        
    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

o:

```4d
 Case of
    Else
       statement(s)
 End case
```

## While...End while

La sintaxis de la estructura condicional `While...End while` es:

```4d
 While(Boolean_Expression)
 	statement(s)
    {break}  
    {continue}
 End while
```

Un bucle `While...End while` ejecuta las instrucciones dentro del bucle mientras la expresión booleana sea TRUE. Comprueba la expresión booleana al inicio del bucle y no entra en el bucle si la expresión es FALSE.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

Es común inicializar el valor probado en la expresión booleana inmediatamente antes de entrar en el bucle `While...End while`. Inicializar el valor significa asignarle un contenido adecuado, normalmente para que la expresión booleana sea TRUE y `While...End while` ejecute el bucle.

El valor de la expresión booleana debe poder ser modificado por un elemento dentro del bucle, de lo contrario se ejecutará indefinidamente. The following loop continues forever because _NeverStop_ is always TRUE:

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

Si se encuentra en una situación de este tipo, en la que un método se ejecuta de forma incontrolada, puede utilizar las funciones de rastreo para detener el bucle y localizar el problema. Para más información sobre el seguimiento de un método, consulte la página [Gestión de errores](error-handling.md).

#### Ejemplo

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
    {break}  
    {continue}
Until(Boolean_Expression)
```

Un bucle `Repeat...Until` es similar a un bucle [While...End while](flow-control.md#whileend-while), excepto que comprueba la expresión booleana después del bucle en lugar de antes. Así, un bucle `Repeat...Until` siempre ejecuta el bucle una vez, mientras que si la expresión booleana es inicialmente False, un bucle `While...End while` no ejecuta el bucle en absoluto.

La otra diferencia con un bucle `Repeat...Until` es que el bucle continúa hasta que la expresión booleana sea TRUE.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

#### Ejemplo

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
    {break}  
    {continue}
End for
```

El bucle `For...End for` es un bucle controlado por un contador:

- La variable contador _Counter_Variable_ es una variable numérica (Real o Entero largo) inicializada por `For...End for` con el valor especificado por _Start_Expression_.
- Cada vez que se ejecuta el bucle, la variable del contador se incrementa en el valor especificado en el valor opcional _Increment_Expression_. Si no se especifica _Increment_Expression_, la variable del contador se incrementa en uno (1), que es el valor predeterminado.
- Cuando la variable del contador pasa el valor _End_Expression_, el bucle se detiene.

**Importante:** las expresiones numéricas _Start_Expression_, _End_Expression_ y _Increment_Expression_ se evalúan una vez al principio del bucle. Si estas expresiones son variables, el cambio de una de estas variables dentro del bucle no afectará al bucle.

**Consejo:** Sin embargo, para fines especiales, puede cambiar el valor de la variable _Counter_Variable_ dentro del bucle; esto afectará al bucle.

- Normalmente _Start_Expression_ es menor que _End_Expression_.
- Si _Start_Expression_ y _End_Expression_ son iguales, el bucle se ejecutará sólo una vez.
- Si _Start_Expression_ es mayor que _End_Expression_, el bucle no se ejecutará en absoluto a menos que se especifique una _Increment_Expression_ negativa. Ver los ejemplos.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

#### Ejemplos básicos

1. El siguiente ejemplo ejecuta 100 iteraciones:

```4d
 For(vCounter;1;100)
  //Hacer algo
 End for
```

2. El siguiente ejemplo recorre todos los elementos del array anArray:

```4d
 For($vlElem;1;Size of array(anArray))
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

3. El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
 For($vlChar;1;Length(vtSomeText))
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

4. El siguiente ejemplo recorre los registros seleccionados para la tabla [aTable]:

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

La mayoría de los bucles `For...End for` que escribirá en sus proyectos se parecerán a los que se presentan en estos ejemplos.

### Variable contador

#### Variable contador decreciente

En algunos casos, puede querer tener un bucle cuya variable de contador sea decreciente en lugar de creciente. Para ello, debe especificar _Start_Expression_ mayor que _End_Expression_ y _Increment_Expression_ debe ser negativa. Los siguientes ejemplos hacen lo mismo que los anteriores, pero en orden inverso:

5. El siguiente ejemplo ejecuta 100 iteraciones:

```4d
 For(vCounter;100;1;-1)
  //Hacer algo
 End for
```

6. El siguiente ejemplo recorre todos los elementos del array anArray:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  //Do something with the element
    anArray{$vlElem}:=...
 End for
```

7. El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
  //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
  //...
    End if
 End for
```

8. El siguiente ejemplo recorre los registros seleccionados para la tabla [aTable]:

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

#### Incrementar la variable del contador en más de uno

Si lo requiere, puede utilizar una _Increment_Expression_ (positiva o negativa) cuyo valor absoluto sea mayor que uno.

9. El siguiente bucle aborda sólo los elementos pares del array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```

#### Optimizing the execution of the For... End for loops

Puede utilizar variables reales y enteras, así como contadores interproceso, proceso y variables locales. Para bucles repetitivos largos, especialmente en modo compilado, utilice variables locales de tipo Entero largo.

10. Aquí un ejemplo:

```4d
 var $vlCounter : Integer //utilizar variables Integer locales 
 For($vlCounter;1;10000)
  //Hacer algo
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
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Aquí está el bucle equivalente `Repeat...Until`:

```4d
 $i:=1 //Inicializar el contador
 Repeat
  //Hacer algo
    $i:=$i+1 //Necesita incrementar el contador
 Until($i=100) //Bucle 100 veces
```

:::tip

El bucle `For...End for` suele ser más rápido que los bucles `While...End while` y `Repeat...Until`, porque 4D comprueba la condición internamente en cada ciclo del bucle e incrementa el contador. Por lo tanto, utilice el bucle `For...End for` siempre que sea posible.

:::

### Nested For... End for looping structures

Puede anidar tantas estructuras de control como necesite (razonablemente). Esto incluye la anidación de bucles `For...End for`. Para evitar errores, asegúrese de utilizar diferentes variables de contador para cada estructura de bucle.

He aquí dos ejemplos:

1. El siguiente ejemplo recorre todos los elementos de un array de dos dimensiones:

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

2. El siguiente ejemplo construye un array de punteros a todos los campos de fecha presentes en la base:

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

## For each... End for each

La sintaxis de la estructura condicional `For each... End for each` es:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

La estructura `For each... End for each` ejecuta un _Current_item_ especificado sobre todos los valores de _Expression_. El tipo _Current_item_ depende del tipo _Expression_. El bucle `For each... End for each` puede iterar a través de tres tipos de _Expression_:

- colecciones: bucle en cada elemento de la colección,
- selecciones de entidades: bucle en cada entidad,
- objetos: bucle en cada propiedad del objeto.

La siguiente tabla compara los tres tipos de `For each... End for each`:

|                                                   | Bucle en las colecciones                                    | Bucle en las selecciones de entidades | Bucle en los objetos             |
| ------------------------------------------------- | ----------------------------------------------------------- | ------------------------------------- | -------------------------------- |
| Tipo Current_Item            | Variable del mismo tipo que los elementos de la colección   | Entity                                | Variable texto                   |
| Tipos de expresiones                              | Colección (con elementos del mismo tipo) | Entity selection                      | Object                           |
| Número de bucles (por defecto) | Número de elementos de la colección                         | Número de entidades en la selección   | Número de propiedades del objeto |
| Soporte de parámetros begin / end                 | Sí                                                          | Sí                                    | No                               |

- El número de bucles se evalúa al inicio y no cambiará durante el proceso. La adición o eliminación de elementos durante el bucle no suele ser recomendable, ya que puede resultar en redundancia o perdidas de iteraciones.
- By default, the enclosed _statement(s)_ are executed for each value in _Expression_. Sin embargo, es posible salir del bucle comprobando una condición al principio del bucle ( `While`) o al final del bucle (`Until`).
- Los parámetros opcionales _begin_ y _end_ pueden utilizarse con colecciones y selecciones de entidades para definir los límites del bucle.
- El bucle `For each... End for each` puede utilizarse en una **colección compartida** o en un **objeto compartido**. Si su código necesita modificar uno o más elementos de la colección o de las propiedades del objeto, debe utilizar las palabras clave `Use...End use`. Dependiendo de sus necesidades, puede llamar a las palabras clave `Use...End use`:
  - antes de entrar en el bucle, si los elementos deben modificarse juntos por razones de integridad, o
  - dentro del bucle cuando sólo hay que modificar algunos elementos/propiedades y no es necesario gestionar la integridad.

Las instrucciones `break` y `continue` se [describen a continuación](#break-and-continue).

### Bucle en las colecciones

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. El número de bucles se basa en el número de elementos de la colección.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. Hay que tener en cuenta los siguientes puntos:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). Si la variable es de tipo escalar, sólo se modificará la variable.
- The _Current_Item_ variable must be of the same type as the collection elements. Si algún elemento de la colección no es del mismo tipo que la variable, se genera un error y el bucle se detiene.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Ejemplo

Usted quiere calcular algunas estadísticas para una colección de números:

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
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

### Bucle en las selecciones de entidades

Cuando `For each... End for each` se utiliza con una _Expression_ del tipo _Collection_, el parámetro _Current_Item_ es una variable del mismo tipo que los elementos de la colección.

El número de bucles se basa en el número de entidades de la selección de entidades. En cada iteración del bucle, el parámetro _Current_Item_ se llena automáticamente con la entidad de la selección de entidades que se procesa actualmente.

**Nota:** si la selección de entidades contiene una entidad que fue eliminada mientras tanto por otro proceso, se salta automáticamente durante el bucle.

Tenga en cuenta que cualquier modificación aplicada en la entidad actual debe ser guardada explícitamente utilizando `entity.save()`.

#### Ejemplo

Quiere aumentar el salario de todos los empleados británicos en una selección de entidades:

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### Bucles en las propiedades de objetos

Cuando se utiliza `For each... End for each` con una _Expression_ de tipo Object, el parámetro _Current_Item_ es una variable texto que se llena automáticamente con el nombre de la propiedad actualmente procesada.

Las propiedades del objeto se procesan de acuerdo con su orden de creación. Durante el bucle, se pueden añadir o eliminar propiedades en el objeto, sin modificar el número de bucles que quedarán en función del número original de propiedades del objeto.

#### Ejemplo

Quiere pasar los nombres a mayúsculas en el siguiente objeto:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

Puede escribir:

```4d
 For each($property;$vObject)
    If(Value type($vObject[$property])=Is text)
       $vObject[$property]:=Uppercase($vObject[$property])
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

\*\*Nota:\*\*los parámetros _inicio_ y _fin_ sólo pueden utilizarse en iteraciones a través de colecciones y selecciones de entidades (se ignoran en las propiedades de objetos).

- En el parámetro _begin_, pase la posición del elemento en _Expression_ en la que se iniciará la iteración (se incluye _begin_).
- En el parámetro _end_, también se puede pasar la posición del elemento en _Expression_ en la que se debe detener la iteración (se excluye _end_).

Si se omite _fin_ o si _fin_es mayor que el número de elementos de _Expression_, se iteran los elementos desde _inicio_ hasta el último (incluido).
Si los parámetros _inicio_ y _fin_ son valores positivos, representan posiciones reales de elementos en _Expression_.
Si _comienzo_ es un valor negativo, se recalcula como `comienzo:=comienzo+tamaño de la expresión` (se considera como el desplazamiento desde el final de _Expression_). Si el valor calculado es negativo, _inicio_ toma el valor 0.
**Nota:** aunque inicio sea negativo, la iteración se sigue realizando en el orden estándar.
Si _fin_ es un valor negativo, se recalcula como `fin:=fin+tamaño de la expresión`

Por ejemplo:

- una colección contiene 10 elementos (numerados de 0 a 9)
- begin=-4 > -> begin=-4+10=6 >-> la iteración comienza en el sexto elemento (#5)
- end=-2 -> end=-2+10=8 -> la iteración se detiene antes del 8º elemento (#7), es decir, en el 7º elemento.

#### Ejemplo

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Condiciones Until y While

Puede controlar la ejecución de `For each... End for each` añadiendo una condición `Until` o una condición `While` al bucle. When an `Until(condition)` statement is associated to the loop, the iteration will stop as soon as the condition is evaluated to `True`, whereas when is case of a `While(condition)` statement, the iteration will stop when the condition is first evaluated to `False`.

Puede pasar cualquiera de las dos palabras clave en función de sus necesidades:

- La condición `Until` se comprueba al final de cada iteración, por lo que si _Expression_ no está vacía o es nula, el bucle se ejecutará al menos una vez.
- La condición `While` se prueba al principio de cada iteración, por lo que según el resultado de la condición, el bucle puede no ejecutarse en absoluto.

#### Ejemplo

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

## break y continue

Todas las estructuras de bucle anteriores soportan las instrucciones `break` y `continue`. Estas instrucciones le dan más control sobre los bucles al permitir salir del bucle y pasar por alto la iteración actual en cualquier momento.

### break

La instrucción `break` termina el bucle que la contiene. El control del programa fluye hacia la instrucción inmediatamente posterior al cuerpo del bucle.

Si la instrucción `break` está dentro de un bucle al interior de un [bucle anidado](#nested-forend-for-looping-structures) (bucle dentro de otro bucle), la instrucción `break` terminará el bucle más interno.

#### Ejemplo

```4d
For (vCounter;1;100)
	If ($tab{vCounter}="") //if a condition becomes true
		break //end of the for loop
	End if
End for
```

### continue

La instrucción `continue` termina la ejecución de las instrucciones en la iteración actual del bucle actual, y continúa la ejecución del bucle con la siguiente iteración.

```4d
var $text : Text
For ($i; 0; 9)
	If ($i=3)
		continue //go directly to the next iteration
	End if
	$text:=$text+String($i)
End for
// $text="012456789" 

```

## return {expression}

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

La instrucción `return` puede ser llamada desde cualquier lugar. Cuando se utiliza una instrucción `return` en una función o un método, se detiene la ejecución de la función o del método. El código restante no se ejecuta y el control se devuelve al llamante.

La instrucción `return` puede utilizarse para [devolver un valor](parameters.md#return-expression) al llamante.

#### Ejemplo

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
	$i:=$i+1
	$message+=String($i)+"A\r"  // until 5
	logConsole($message)
	If ($i=5)
		return //stops the loop
	End if 
	$message+=String($i)+"B\r"  // until 4
	logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```
