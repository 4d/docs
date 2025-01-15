---
id: pointer
title: Pointer
---

A Pointer variable or expression is a reference to another variable (including arrays and array elements), table, field, or object. There is no field of type Pointer.

Pointers provide an advanced way (in programming) to refer to data. When you use the language, you access various objects—in particular, tables, fields, variables, objects, and arrays—by simply using their names. However, it is often useful to refer to these elements and access them without knowing their names. This is what pointers let you do.

The concept behind pointers is not that uncommon in everyday life. You often refer to something without knowing its exact identity. For example, you might say to a friend, “Let’s go for a ride in your car” instead of “Let’s go for a ride in the car with license plate 123ABD.” In this case, you are referencing the car with license plate 123ABD by using the phrase “your car.” The phrase “car with license plate 123ABD” is like the name of an object, and using the phrase “your car” is like using a pointer to reference the object.

Being able to refer to something without knowing its exact identity is very useful. In fact, your friend could get a new car, and the phrase “your car” would still be accurate—it would still be a car and you could still take a ride in it. Pointers work the same way. For example, a pointer could at one time refer to a numeric field called Age, and later refer to a numeric variable called Old Age. In both cases, the pointer references numeric data that could be used in a calculation.

You can use pointers to reference tables, fields, variables, arrays, array elements, and objects. The following table gives an example of each data type:

|Type	|To Reference	|To Use	|To Assign|
|---|---|---|---|
|Table	|vpTable:=->[Table]	|DEFAULT TABLE(vpTable->)	|n/a|
|Field	|vpField:=->[Table]Field	|ALERT(vpField->)	|vpField->:="John"|
|Variable	|vpVar:=->Variable	|ALERT(vpVar->) 	|vpVar->:="John"
|Array	|vpArr:=->Array	|SORT ARRAY(vpArr->;>) 	|COPY ARRAY (Arr;vpArr->)
|Array element	|vpElem:=->Array{1}	|ALERT (vpElem->)	|vpElem->:="John"|
|Object	|vpObj:=->myObject	|ALERT (vpObj->myProp)	|vpObj->myProp:="John"|


## Using a pointer: Basic example

It is easiest to explain the use of pointers through an example. This example shows how to access a variable through a pointer. We start by creating a variable:

```4d
$MyVar:="Hello"
```
$MyVar is now a variable containing the string “Hello.” We can now create a pointer to $MyVar:

```4d
var $MyPointer : Pointer
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

|Operation	|Syntax	|Returns	|Expression	|Value|
|---|---|---|---|---|
|Equality	|Pointer = Pointer	|Boolean	|vPtrA = vPtrB	|True|
||||vPtrA = vPtrC	|False|
|Inequality	|Pointer # Pointer	|Boolean	|vPtrA # vPtrC	|True|
||||vPtrA # vPtrB|False|


:::warning Null Pointers

Trying to assign or to read a null pointer (aka "nil") will produce an error at runtime. For example:

```4d
var $p : Pointer // non initialized pointer (Nil value)
$v:=$p-> // error
$p->:=$v // error
```

To prevent such errors, you can write:

```4d
If ($p#Null)
  $p->:=$v
End if
```

:::




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

Pointers to local variables allow you to save process variables in many cases. Pointers to local variables can only be used within the same process. In the debugger, when you display a pointer to a local variable that has been declared in another method, the original method name is indicated in parentheses, after the pointer. For example, if you write in *Method1*:

```4d
 $MyVar:="Hello world"
 Method2(->$MyVar)
```
*Method2*:

```4d
#DECLARE($param : Pointer)
...
```
The debugger will display $param as follows:

|$param|->$MyVar (Method1)|
|---|---|

You can expand $param and its value will be:

|$MyVar|"Hello world"|
|---|---|

### Pointers to array elements
You can create a pointer to an array element. For example, the following lines create an array and assign a pointer to the first array element to a variable called $ElemPtr:
```4d
ARRAY REAL($anArray;10) //Create an array
$ElemPtr:=->$anArray{1} //Create a pointer to the array element
```

You could use the dereferenced pointer to assign a value to the element, like this:
```4d
$ElemPtr->:=8
```

### Pointers to arrays
You can create a pointer to an array. For example, the following lines create an array and assign a pointer to the array to a variable called $ArrPtr:
```4d
ARRAY REAL($anArray;10) //Create an array
$ArrPtr:=->$anArray //Create a pointer to the array
```
It is important to understand that the pointer points to the array; it does not point to an element of the array. For example, you can use the dereferenced pointer from the preceding lines like this:
```4d
SORT ARRAY($ArrPtr->;>) //Sort the array
```
If you need to refer to the fourth element in the array by using the pointer, you do this:
```4d
 ArrPtr->{4}:=84
```

### Pointers as parameters to methods
You can pass a pointer as a parameter to a method. Inside the method, you can modify the object referenced by the pointer. For example, the following method, `takeTwo`, takes two parameters that are pointers. It changes the object referenced by the first parameter to uppercase characters, and the object referenced by the second parameter to lowercase characters. Here is the project method:

```4d
  //takeTwo project method
  //$changeUp – Pointer to a string field or variable. Change this to uppercase.
  //$changeLow – Pointer to a string field or variable. Change this to lowercase.
 #DECLARE($changeUp : Pointer ; $changeLow : Pointer)
 $changeUp->:=Uppercase($changeUp->)
 $changeLow->:=Lowercase($changeLow->)
```

The following line uses the `takeTwo` method to change a field to uppercase characters and to change a variable to lowercase characters:
```  
takeTwo(->[myTable]myField;->$MyVar)
```

If the field [myTable]myField contained the string "jones", it would be changed to the string "JONES". If the variable $MyVar contained the string "HELLO", it would be changed to the string "hello".

In the takeTwo method, and in fact, whenever you use pointers, it is important that the data type of the object being referenced is correct. In the previous example, the pointers must point to something that contains a string or text.

### Pointers to pointers

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

- $MyVar:="Hello"
    --> This line puts the string "Hello" into the variable $MyVar.
- $PointerOne:=->$MyVar
    --> $PointerOne now contains a pointer to $MyVar.
- $PointerTwo:=->$PointerOne
    --> $PointerTwo (a new variable) contains a pointer to $PointerOne, which in turn points to $MyVar.
- ($PointerTwo->)->:="Goodbye"
    --> $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, $MyVar is assigned "Goodbye".
- ALERT (($PointerTwo->)->)
    --> Same thing: $PointerTwo-> references the contents of $PointerOne, which in turn references $MyVar. Therefore ($PointerTwo->)-> references the contents of $MyVar. So in this case, the alert box displays the contents of $MyVar.

The following line puts "Hello" into $MyVar:
```4d
($PointerTwo->)->:="Hello"
```

The following line gets "Hello" from $MyVar and puts it into $NewVar:
```
$NewVar:=($PointerTwo->)->
```

**Important:** Multiple dereferencing requires parentheses.


