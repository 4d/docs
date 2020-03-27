---
id: pointer
title: Zeiger
---

Eine Variable oder ein Ausdruck vom Typ Zeiger verweist auf eine andere Variable (inkl. Arrays und Array Elemente), Tabelle, Datenfeld oder Objekt. Ein Datenfeld kann nicht vom Typ Zeiger sein.

Mit Hilfe der Zeiger können Sie Ihre Methoden strukturunabhängig schreiben und dadurch Ihre Programme übertragbarer gestalten. Sie können mit einem Zeiger auf verschiedene Objekte, wie Tabellen, Datenfelder, Variablen, Objekte und Arrays, einfach über ihre Namen zugreifen. Jedoch ist es oft hilfreich, auf diese Elemente zuzugreifen, ohne ihre Namen zu kennen. Das können Sie mit Zeigern tun.

Das Konzept hinter Zeigern begegnet Ihnen auch im täglichen Leben. Oft verweisen Sie auf etwas, ohne die Identität exakt zu kennen. Sie sagen z. B. zu einem Freund, "Lass uns eine Fahrt mit Deinem Auto machen", anstatt "Lass uns eine Fahrt mit dem Auto mit dem Kennzeichen M123ABC machen". Sie verweisen also auf das Auto mit dem Kennzeichen M123ABC durch die Aussage "mit Deinem Auto". Die Aussage "Auto mit dem Kennzeichen M123ABC" ist sozusagen der Name eines Objekts und die Aussage "mit Deinem Auto" ist wie ein Zeiger, der auf das Objekt verweist.

Die Möglichkeit, auf etwas zu verweisen, ohne die Identität exakt zu kennen, hat einige Vorteile. Ihr Freund kann ein neues Auto haben, und die Aussage "mit Deinem Auto" passt weiterhin, denn es bleibt ein Auto und gehört Ihrem Freund. Zeiger arbeiten auf dieselbe Weise. Ein Zeiger kann beispielsweise einmal auf ein numerisches Datenfeld mit Namen Alter verweisen und später auf eine numerische Variable, umbenannt in Rentenalter. In beiden Fällen zeigt der Zeiger auf numerische Daten, die sich in einer Berechnung verwenden lassen.

Mit Zeigern können Sie auf Tabellen, Datenfelder, Variablen, Arrays und seine Elemente, und Objekte verweisen. Folgende Tabelle zeigt ein Beispiel für jeden Datentyp:

| Typ           | Referenz                | Verwenden                | Zuweisen                 |
| ------------- | ----------------------- | ------------------------ | ------------------------ |
| Tabelle       | vpTable:=->[Table]      | DEFAULT TABLE(vpTable->) | \----                    |
| Datenfeld     | vpField:=->[Table]Field | ALERT(vpField->)         | vpField->:="John"        |
| Variable      | vpVar:=->Variable       | ALERT(vpVar->)           | vpVar->:="John"          |
| Array         | vpArr:=->Array          | SORT ARRAY(vpArr->;>)    | COPY ARRAY (Arr;vpArr->) |
| Array Element | vpElem:=->Array{1}      | ALERT (vpElem->)         | vpElem->:="John"         |
| Objekt        | vpObj:=->myObject       | ALERT (vpObj->myProp)    | vpObj->myProp:="John"    |


## Zeiger verwenden

Wir erläutern die Verwendung von Zeigern an einem Beispiel. Dieses Beispiel zeigt, wie Sie über einen Zeiger auf eine Variable zugreifen können. Wir erstellen zuerst eine Variable:

```4d
$MyVar:="Hello"
```

$MyVar ist nun eine Variable mit der Zeichenkette “Hello”. Wir erstellen nun den Zeiger auf $MyVar:

```4d
C_POINTER($MyPointer)  
$MyPointer:=->$MyVar
```

Das Symbol -> bedeutet “setze Zeiger auf.” Dieses Symbol ist die Kombination aus einem Bindestrich und dem Zeichen “größer als”. In diesem Fall zeigt der Zeiger auf $MyVar. Dieser Zeiger wird mit dem Zuordnungsoperator dem Zeiger MyPointer zugewiesen.

$MyPointer ist nun eine Variable mit einem Zeiger auf $MyVar. $MyPointer enthält nicht “Hello”, den Wert von $MyVar, vielmehr erhalten Sie diesen Wert über $MyPointer. Folgender Ausdruck gibt den Wert in $MyVar zurück:

```4d
$MyPointer->
```

In diesem Fall gibt er die Zeichenkette “Hello” zurück. Das Symbol -> nach dem Zeiger verweist auf das Objekt, auf das gezeigt wird. Das nennt man Dereferenzierung.

It is important to understand that you can use a pointer followed by the -> symbol anywhere that you could have used the object that the pointer points to. Das bedeutet, Sie können den Ausdruck $MyPointer-> überall verwenden, wo Sie auch die urspüngliche Variable $MyVar einsetzen können. Folgende Programmierzeile zeigt z. B. eine Warnung mit dem darin enthaltenen Wort Hello:

```4d
ALERT($MyPointer->)
```

Über $MyPointer können Sie auch den Inhalt von $MyVar ändern. Folgende Anweisung speichert die Zeichenkette "Goodbye" in der Variablen $MyVar:

```4d
$MyPointer->:="Goodbye"
```

Wie Sie sehen, verhält sich der Ausdruck $MyPointer-> wie die Variable $MyVar. Die beiden nachfolgenden Zeilen führen dieselbe Aktion aus—beide zeigen eine Warnung mit dem aktuellen Wert der Variablen $MyVar:

```4d
ALERT($MyPointer->)
ALERT($MyVar)
```

Die beiden folgenden Zeilen führen dieselbe Aktion aus—beide weisen der Variablen $MyVar die Zeichenkette "Goodbye" zu:

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

| Operation    | Syntax            | Ergibt  | Ausdruck      | Wert   |
| ------------ | ----------------- | ------- | ------------- | ------ |
| Gleichheit   | Pointer = Pointer | Boolean | vPtrA = vPtrB | Wahr   |
|              |                   |         | vPtrA = vPtrC | Falsch |
| Ungleichheit | Pointer # Pointer | Boolean | vPtrA # vPtrC | Wahr   |
|              |                   |         | vPtrA # vPtrB | Falsch |


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


The value of $1 will be:

| $MyVar (Method1) | "Hello world" |
| ---------------- | ------------- |
|                  |               |


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
  //$1 – Pointer to a string field or variable. Change this to uppercase.
  //$2 – Pointer to a string field or variable. Change this to lowercase.
 $1->:=Uppercase($1->)
 $2->:=Lowercase($2->)
```

The following line uses the `takeTwo` method to change a field to uppercase characters and to change a variable to lowercase characters:

    takeTwo(->[myTable]myField;->$MyVar)
    

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

    $NewVar:=($PointerTwo->)->
    

**Important:** Multiple dereferencing requires parentheses.