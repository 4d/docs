---
id: puntero
title: Puntero
---

Una variable o expresión puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ningún campo de tipo Puntero.

Los punteros ofrecen una forma avanzada (en programación) de referirse a los datos. Cuando se utiliza el lenguaje, se accede a varios objetos -en particular, tablas, campos, variables, objetos y arrays- simplemente utilizando sus nombres. Sin embargo, con frecuencia es útil referirse a estos elementos y acceder a ellos sin conocer sus nombres. Esto es lo que los punteros le permiten hacer.

The concept behind pointers is not that uncommon in everyday life. You often refer to something without knowing its exact identity. For example, you might say to a friend, “Let’s go for a ride in your car” instead of “Let’s go for a ride in the car with license plate 123ABD.” In this case, you are referencing the car with license plate 123ABD by using the phrase “your car.” The phrase “car with license plate 123ABD” is like the name of an object, and using the phrase “your car” is like using a pointer to reference the object.

Being able to refer to something without knowing its exact identity is very useful. In fact, your friend could get a new car, and the phrase “your car” would still be accurate—it would still be a car and you could still take a ride in it. Pointers work the same way. For example, a pointer could at one time refer to a numeric field called Age, and later refer to a numeric variable called Old Age. En ambos casos, el puntero hace referencia a datos numéricos que podrían utilizarse en un cálculo.

Puede utilizar punteros para referenciar tablas, campos, variables, arrays, elementos de arrays y objetos. La siguiente tabla ofrece un ejemplo de cada tipo de datos:

| Tipo        | Referenciación          | Uso                      | Asignación               |
| ----------- | ----------------------- | ------------------------ | ------------------------ |
| Tabla       | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | n/a                      |
| Campo       | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"        |
| Variable    | vpVar:=->Variable       | ALERT(vpVar->)           | vpVar->:="John"          |
| Array       | vpArr:=->Array          | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Elem. array | vpElem:=->Array{1}      | ALERT (vpElem->)         | vpElem->:="John"         |
| Objeto      | vpObj:=->myObject       | ALERT (vpObj->myProp)    | vpObj->myProp:="John"    |


## Utilizar punteros: ejemplo básico

Lo más fácil es explicar el uso de los punteros mediante un ejemplo. Este ejemplo muestra cómo acceder a una variable a través de un puntero. Comenzamos creando una variable:

```4d
$MyVar:="Hello"
```
$MyVar es ahora una variable que contiene la cadena “Hello.” We can now create a pointer to $MyVar:

```4d
C_POINTER($MyPointer)  
$MyPointer:=->$MyVar
```
The -> symbol means “get a pointer to.” This symbol is formed by a dash followed by a “greater than” sign. In this case, it gets the pointer that references or “points to” $MyVar. This pointer is assigned to MyPointer with the assignment operator.

$MyPointer is now a variable that contains a pointer to $MyVar. $MyPointer does not contain “Hello”, which is the value in $MyVar, but you can use $MyPointer to get this value. The following expression returns the value in $MyVar:
```4d
$MyPointer->
```

In this case, it returns the string “Hello”. The -> symbol, when it follows a pointer, references the object pointed to. This is called dereferencing.

It is important to understand that you can use a pointer followed by the -> symbol anywhere that you could have used the object that the pointer points to. This means that you could use the expression $MyPointer-> anywhere that you could use the original $MyVar variable. For example, the following line displays an alert box with the word Hello in it:
```4d
ALERT($MyPointer->)
```

You can also use $MyPointer to change the data in $MyVar. For example, the following statement stores the string "Goodbye" in the variable $MyVar:
```4d
$MyPointer->:="Goodbye"
```
If you examine the two uses of the expression $MyPointer->, you will see that it acts just as if you had used $MyVar instead. In summary, the following two lines perform the same action—both display an alert box containing the current value in the variable $MyVar:

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```
The following two lines perform the same action— both assign the string "Goodbye" to $MyVar:
```4d
$MyPointer->:="Goodbye"
$MyVar:="Goodbye"
```

## Pointer operators

With:
```4d
  ` vPtrA and vPtrB point to the same object
 vPtrA:=->anObject
 vPtrB:=->anObject
  ` vPtrC points to another object
 vPtrC:=->anotherObject
```

| Operación   | Sintaxis          | Devuelve | Expresión     | Valor |
| ----------- | ----------------- | -------- | ------------- | ----- |
| Igual       | Pointer = Pointer | Booleano | vPtrA = vPtrB | True  |
|             |                   |          | vPtrA = vPtrC | False |
| Desigualdad | Pointer # Pointer | Booleano | vPtrA # vPtrC | True  |
|             |                   |          | vPtrA # vPtrB | False |

## Main usages
### Pointers to tables
Anywhere that the language expects to see a table, you can use a dereferenced pointer to the table. You create a pointer to a table by using a line like this:
```4d
$TablePtr:=->[anyTable]
```
You can also get a pointer to a table by using the `Table` command:
```4d  
$TablePtr:=Table(20)
```
You can use the dereferenced pointer in commands, like this:
```4d  
DEFAULT TABLE($TablePtr->)
```
### Punteros a campos
En cualquier lugar en el que el lenguaje espere ver un campo, se puede utilizar un puntero desreferenciado para referenciar el campo. Se crea un puntero a un campo utilizando una línea de instrucción como esta:
```4d
$FieldPtr:=->[aTable]ThisField
```

También puede obtener un puntero a un campo utilizando el comando `Campo`, por ejemplo:
```4d
$FieldPtr:=Field(1;2)
```

You can use the dereferenced pointer in commands, like this:
```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Punteros a variables locales

Cuando se utilizan punteros a variables de proceso o locales, hay que asegurarse de que la variable a la que se apunta ya está definida cuando se utilice el puntero. Tenga en cuenta que las variables locales se borran cuando el método que las creó ha terminado su ejecución y las variables de proceso se borran al final del proceso que las creó. Cuando un puntero llama a una variable que ya no existe, esto provoca un error de sintaxis en modo interpretado (variable no definida) pero puede generar un error más grave en modo compilado.

Los punteros a variables locales permiten guardar las variables del proceso en muchos casos. Los punteros a variables locales sólo pueden utilizarse dentro del mismo proceso. En el depurador, cuando se muestra un puntero a una variable local que ha sido declarada en otro método, el nombre del método original se indica entre paréntesis, después del puntero. Por ejemplo, si se escribe en Method1:
```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```
En Method2, el depurador mostrará $1 de la siguiente manera:

| $1 | ->$MyVar (Method1) |
| -- | ------------------ |
|    |                    |

El valor de 1 dólar será:

| $MyVar (Method1) | "Hello world" |
| ---------------- | ------------- |
|                  |               |

### Punteros a elementos del array
Puede crear un puntero a un elemento del array. Por ejemplo, las siguientes líneas crean un array y asignan un puntero al primer elemento del array a una variable llamada $ElemPtr:
```4d
ARRAY REAL($anArray;10) //Crear un array
$ElemPtr:=->$anArray{1} //Crear un puntero al elemento de array
```

Puede utilizar el puntero desreferenciado para asignar un valor al elemento, así:
```4d
$ElemPtr->:=8
```

### Punteros a arrays
Puede crear un puntero a un array. Por ejemplo, las siguientes líneas crean un array y asignan un puntero al array a una variable llamada $ArrPtr:
```4d
ARRAY REAL($anArray;10) //Crear un array
$ArrPtr:=->$anArray //Crear un puntero al array
```
Es importante entender que el puntero apunta al array; no apunta a un elemento del array. Por ejemplo, puede utilizar el puntero desreferenciado de las líneas anteriores de esta manera:
```4d
SORT ARRAY($ArrPtr->;>) //Ordenar el array
```
Si debe referirse al cuarto elemento del array utilizando el puntero, haga lo siguiente:
```4d
 ArrPtr->{4}:=84
```

### Punteros como parámetros a los métodos
Puede pasar un puntero como parámetro de un método. Dentro del método, puede modificar el objeto referenciado por el puntero. Por ejemplo, el siguiente método, `takeTwo`, toma dos parámetros que son punteros. Cambia el objeto referenciado por el primer parámetro a caracteres en mayúsculas, y el objeto referenciado por el segundo parámetro a caracteres en minúsculas. Este es el método del proyecto:
```4d
  //Método proyecto takeTwo
  //$1 – Puntero a un campo o variable de tipo cadena. Cambia la cadena a mayúsculas.
  //$2 - Puntero a un campo o variable de tipo cadena. Cambia la cadena a minúsculas.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

La siguiente línea utiliza el método `takeTwo` para cambiar un campo a mayúsculas y para cambiar una variable a minúsculas:
```  
takeTwo(->[myTable]myField;->$MyVar)
```

Si el campo [myTable]myField contenía la cadena "jones", se cambiaría por la cadena "JONES". Si la variable $MyVar contenía la cadena "HELLO", se cambiaría por la cadena "hello".

En el método takeTwo, y de hecho, siempre que se utilicen punteros, es importante que el tipo de datos del objeto al que se hace referencia sea correcto. En el ejemplo anterior, los punteros deben apuntar a algo que contenga una cadena o texto.

### Punteros a punteros
Si realmente le gusta complicar las cosas, puede utilizar punteros para referenciar otros punteros. Considere este ejemplo:
```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```
Muestra un cuadro de alerta con la palabra "Goodbye".

A continuación se explica cada línea del ejemplo:

- $MyVar:="Hello" --> Esta línea pone la cadena "Hello" en la variable $MyVar.
- $PointerOne:=->$MyVar --> $PointerOne ahora contiene un puntero a $MyVar.
- $PointerTwo:=->$PointerOne --> $PointerTwo (una nueva variable) contiene un puntero a $PointerOne, que a su vez apunta a $MyVar.
- ($PointerTwo->)->:="Goodbye" --> $PointerTwo-> referencia el contenido de $PointerOne, que a su vez referencia $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. Así que en este caso, a $MyVar se le asigna "Goodbye".
- ALERT (($PointerTwo->)->) --> Lo mismo que: $PointerTwo-> referencia el contenido de $PointerOne, que a su vez referencia $MyVar. Por lo tanto, ($PointerTwo->)-> referencia el contenido de $MyVar. En este caso, la caja de alerta muestra el contenido de $MyVar.

La siguiente línea pone "Hello" en $MyVar:
```4d
($PointerTwo->)->:="Hello"
```

La siguiente línea obtiene "Hello de $MyVar y lo pone en $NewVar:
```
$NewVar:=($PointerTwo->)->
```

**Importante:** la desreferenciación múltiple requiere paréntesis.
