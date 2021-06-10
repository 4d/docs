---
id: puntero
title: Puntero
---

Una variable o expresión puntero es una referencia a otra variable (incluyendo arrays y elementos de arrays), tabla, campo u objeto. No hay ningún campo de tipo Puntero.

Los punteros ofrecen una forma avanzada (en programación) de referirse a los datos. Cuando se utiliza el lenguaje, se accede a varios objetos -en particular, tablas, campos, variables, objetos y arrays- simplemente utilizando sus nombres. Sin embargo, con frecuencia es útil referirse a estos elementos y acceder a ellos sin conocer sus nombres. Esto es lo que los punteros le permiten hacer.

The concept behind pointers is not that uncommon in everyday life. You often refer to something without knowing its exact identity. For example, you might say to a friend, “Let’s go for a ride in your car” instead of “Let’s go for a ride in the car with license plate 123ABD.” In this case, you are referencing the car with license plate 123ABD by using the phrase “your car.” The phrase “car with license plate 123ABD” is like the name of an object, and using the phrase “your car” is like using a pointer to reference the object.

Being able to refer to something without knowing its exact identity is very useful. In fact, your friend could get a new car, and the phrase “your car” would still be accurate—it would still be a car and you could still take a ride in it. Pointers work the same way. For example, a pointer could at one time refer to a numeric field called Age, and later refer to a numeric variable called Old Age. In both cases, the pointer references numeric data that could be used in a calculation.

You can use pointers to reference tables, fields, variables, arrays, array elements, and objects. The following table gives an example of each data type:

| Tipo          | To Reference            | To Use                   | To Assign                |
| ------------- | ----------------------- | ------------------------ | ------------------------ |
| Table         | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | n/a                      |
| Field         | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"        |
| Variable      | vpVar:=->Variable       | ALERT(vpVar->)           | vpVar->:="John"          |
| Array         | vpArr:=->Array          | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Array element | vpElem:=->Array{1}      | ALERT (vpElem->)         | vpElem->:="John"         |
| Objeto        | vpObj:=->myObject       | ALERT (vpObj->myProp)    | vpObj->myProp:="John"    |


## Using a pointer: Basic example

It is easiest to explain the use of pointers through an example. This example shows how to access a variable through a pointer. Comenzamos creando una variable:

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
### Pointers to fields
Anywhere that the language expects to see a field, you can use a dereferenced pointer to reference the field. You create a pointer to a field by using a line like this:
```4d
$FieldPtr:=->[aTable]ThisField
```

You can also get a pointer to a field by using the `Field` command, for example:
```4d
$FieldPtr:=Field(1;2)
```

You can use the dereferenced pointer in commands, like this:
```4d
OBJECT SET FONT($FieldPtr->;"Arial")
```

### Pointers to local variables

When you use pointers to process or local variables, you must be sure that the variable pointed to is already set when the pointer is used. Keep in mind that local variables are deleted when the method that created them has completed its execution and process variables are deleted at the end of the process that created them. When a pointer calls a variable that no longer exists, this causes a syntax error in interpreted mode (variable not defined) but it can generate a more serious error in compiled mode.

Pointers to local variables allow you to save process variables in many cases. Pointers to local variables can only be used within the same process. In the debugger, when you display a pointer to a local variable that has been declared in another method, the original method name is indicated in parentheses, after the pointer. For example, if you write in Method1:
```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```
In Method2, the debugger will display $1 as follows:

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
If you really like to complicate things, you can use pointers to reference other pointers. Consider this example:
```4d
 $MyVar:="Hello"
 $PointerOne:=->$MyVar
 $PointerTwo:=->$PointerOne
 ($PointerTwo->)->:="Goodbye"
 ALERT(($PointerTwo->)->)
```
It displays an alert box with the word “Goodbye” in it.

Here is an explanation of each line of the example:

- $MyVar:="Hello" --> This line puts the string "Hello" into the variable $MyVar.
- $PointerOne:=->$MyVar --> $PointerOne now contains a pointer to $MyVar.
- $PointerTwo:=->$PointerOne --> $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar.
- ($PointerTwo->)->:="Goodbye" --> $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, $MyVar is assigned "Goodbye".
- ALERT (($PointerTwo->)->) --> Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, the alert box displays the contents of $MyVar.

The following line puts "Hello" into $MyVar:
```4d
($PointerTwo->)->:="Hello"
```

The following line gets "Hello" from $MyVar and puts it into $NewVar:
```
$NewVar:=($PointerTwo->)->
```

**Important:** Multiple dereferencing requires parentheses.
