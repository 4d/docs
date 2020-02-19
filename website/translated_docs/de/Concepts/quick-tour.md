---
id: Schnelle Tour
title: Schnelle Tour
sidebar_label: Schnelle Tour
---

Mit der 4D Programmiersprache lässt sich die gängige Meldung "Hello, world!" auf dem Bildschirm auf verschiedenen Wegen erzeugen. Der einfachste Weg ist, eine Zeile in eine Projektmethode setzen:

```4d
ALERT("Hello, World!")
```

This code will display a platform-standard alert dialog box with the "Hello, World!" message, containing an OK button. Zum Ausführen des Code klicken Sie einfach im Methodeneditor auf die Schaltfläche zum Ausführen:

![alt-text](assets/en/Concepts/helloworld.png)

Oder Sie können diesen Code einer Schaltfläche in einem Formular zuordnen und das Formular ausführen. Klicken Sie auf diese Schaltfläche, erscheint das Dialogfenster mit der Meldung. In jedem Fall haben Sie gerade Ihre erste Zeile mit 4D Code ausgeführt!

## Werte zuweisen

Daten lassen sich in Variablen, Felder, Array Elemente etc. setzen und daraus kopieren. Daten in eine Variable setzen heißt, der Variablen die Daten zuweisen. Das geschieht über den Zuweisungsoperator (:=). Der Zuweisungsoperator wird auch verwendet, um Feldern oder Array Elementen Daten zuzuweisen.

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

Der Zuordnungsoperator := unterscheidet sich von den anderen Operatoren. Er kombiniert nicht Ausdrücke zu einem neuen, sondern kopiert die Werte des Ausdrucks auf seiner rechten Seite in die Variable oder das Feld auf seiner linken Seite.

**Wichtig:** Verwechseln Sie NICHT den Zuweisungsoperator := mit dem Vergleichsoperator ist gleich =. Es wurde absichtlich ein anderer Zuweisungsoperator (und nicht =) gewählt, um Probleme und Verwirrung zu vermeiden, die in anderen Programmiersprachen oft mit == oder === auftreten. Solche Fehler sind für den Compiler oft schwer zu erkennen und führen zu einer zeitaufwändigen Fehlerbehebung.

## Variablen

Die 4D Sprache ist stark typisiert, obwohl in vielen Fällen eine gewisse Flexibilität erlaubt ist. Sie erstellen eine typisierte Variable mit einem `C_XXX` Befehl. Um z. B. eine Variable vom Typ Datum zu erstellen, können Sie schreiben:

```4d
C_DATE(MyDate) //Date type for MyDate variable
```

Auch wenn es normalerweise nicht empfehlenswert ist, können Sie Variablen einfach durch ihre Verwendung erstellen; Sie müssen sie nicht unbedingt mit Typ definieren, wie es bei Feldern erforderlich ist. Beispiel: Für eine Variable, die das aktuelle Datum plus 30 Tage angibt, können Sie schreiben:

```4d
MyOtherDate:=Current date+30
```

Der Code liest “MyOtherDate gibt das aktuelle Datum plus 30 Tage an”. Diese Zeile erstellt eine Variable, weist ihr temporär den Typ Datum und einen Inhalt zu. Eine per Zuweisung erstellte Variable wird als typlos interpretiert, d. h. sie kann mit anderen Typen in anderen Zeilen zugewiesen werden und ändert dann den Typ dynamisch. Eine mit `C_XXX` typisierte Variable kann ihren Typ nicht ändern. Im kompilierten Modus lässt sich der Typ nie verändern, unabhängig wie die Variable erstellt wurde.

## Commands

4D Befehle sind integrierte Methoden zum Ausführen einer Aktion. All 4D commands, such as `CREATE RECORD`, or `ALERT`, are described in the *4D Language Reference* manual, grouped by theme. Befehle werden oft mit Parametern verwendet, die in Klammern () und durch Strichpunkt (;) voneinander getrennt übergeben werden. Beispiel:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Einige Befehle sind an Collections oder Objekte gebunden. In diesem Fall werden sie Methoden genannt und mit der Objektnotation verwendet. Beispiel:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

You can use 4D plug-ins or 4D components that add new commands to your 4D development environment.

Die 4D User Community oder 3rd-Party Entwickler bieten auf dem Markt viele Plug-Ins für spezifische Bereiche an. Es gibt zum Beispiel das [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) auf macOS:

```4d
PDF REMOVE PAGE(path;page)
```

4D SVG is an example of a utility component extending the capabilities of your application:

```4d
//drawing a picture
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG is included in 4D.

## Constants

4D proposes an extensed set of predefined constants, whose values are accessible by name. For example, `Read Mode` is a constant (value 2). Predefined constants appear underlined by default in the 4D Method editor. They allow writing more readable code.

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode
```

## Methods

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. Project methods are user-defined methods that contain commands, operators, and other parts of the language. Project methods are generic methods, but there are other kinds of methods: Object methods, Form methods, Table methods (Triggers), and Database methods.

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will display a confirmation dialog box:

```4d
CONFIRM("Do you really want to close this account?";"Yes";"No")
```

A method also contains tests and loops that control the flow of the execution. 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

Folgendes Beispiel durchläuft alle Zeichen des Textes vtSomeText:

```4d
For($vlChar;1;Length(vtSomeText))
    //Do something with the character if it is a TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        //...
    End if
End for
```

A project method can call another project method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. A method can return a single value in the $0 parameter. When you call a method, you just type its name:

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something
$0:=Uppercase($1)
```

## Data Types

In the language, the various types of data that can be handled are referred to as data types. There are basic data types (string, numeric, date, time, Boolean, picture, pointers, arrays), and also composite data types (BLOBs, objects, collections).

Note that string and numeric data types can be associated with more than one type of field. When data is put into a field, the language automatically converts the data to the correct type for the field. For example, if an integer field is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar field types when using the language; it will manage them for you.

However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store “ABC” in a Date field, it makes no sense to put “ABC” in a variable used for dates. In most cases, 4D is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as “abc”. In this case, you might write:

```4d
[Products]Part Number:=String(Number)+"abc"
```

If *Number* is 17, then *[Products]Part Number* will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## Objects and collections

You can handle 4D language objects and collections using the object notation to get or to set their values. Beispiel:

```4d
employee.name:="Smith"
```

You can also use a string within square brackets, for example:

```4d
$vName:=employee["name"]
```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:

```4d
$vAge:=employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:

    $f:=New object
    $f.message:=New formula(ALERT("Hello world!"))
    $f.message() //displays "Hello world!"
    

To access a collection element, you have to pass the element number embedded in square brackets:

```4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Operators

When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:

| Operator | Operation      | Beispiel           |
| -------- | -------------- | ------------------ |
| +        | Addition       | 1 + 2 results in 3 |
| –        | Subtraction    | 3 – 2 results in 1 |
| *        | Multiplication | 2 * 3 results in 6 |
| /        | Division       | 6 / 2 results in 3 |


Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

| Data Type       | Operation     | Beispiel                                                                                             |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| Number          | Addition      | 1 + 2 adds the numbers and results in 3                                                              |
| String          | Concatenation | “Hello ” + “there” concatenates (joins together) the strings and results in “Hello there”            |
| Date and Number | Date addition | !1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989 |


The operators are fully defined in the chapter Operators and its subsections.

## Expressions

Simply put, expressions return a value. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas.

Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data.

Expressions rarely “stand alone.” There are several places in 4D where an expression can be used by itself. It includes:

- Formula editor (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- The Property list, where an expression can be used as a data source for most of widgets
- Debugger where the value of expressions can be checked
- Quick Report editor as a formula for a column

### Expression types

You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression.

| Expression               | Type               | Description                                                                                                                                                                     |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Hello”                  | String             | The word Hello is a string constant, indicated by the double quotation marks.                                                                                                   |
| “Hello ” + “there”       | String             | Two strings, “Hello ” and “there”, are added together (concatenated) with the string concatenation operator (+). The string “Hello there” is returned.                          |
| “Mr. ” + [People]Name    | String             | Two strings are concatenated: the string “Mr. ” and the current value of the Name field in the People table. If the field contains “Smith”, the expression returns “Mr. Smith”. |
| Uppercase("smith")       | String             | This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. It returns “SMITH”.                                                  |
| 4                        | Number             | This is a number constant, 4.                                                                                                                                                   |
| 4 * 2                    | Number             | Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.                                                                         |
| myButton                 | Number             | This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not.                                                           |
| !1997-01-25!             | Date               | This is a date constant for the date 1/25/97 (January 25, 1997).                                                                                                                |
| Current date+ 30         | Date               | This is a date expression that uses the `Current date` command to get today’s date. It adds 30 days to today’s date and returns the new date.                                   |
| ?8:05:30?                | Time               | This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.                                                                                                     |
| ?2:03:04? + ?1:02:03?    | Time               | This expression adds two times together and returns the time 3:05:07.                                                                                                           |
| True                     | Boolean            | This command returns the Boolean value TRUE.                                                                                                                                    |
| 10 # 20                  | Boolean            | This is a logical comparison between two numbers. The number sign (#) means “is not equal to”. Since 10 “is not equal to” 20, the expression returns TRUE.                      |
| “ABC” = “XYZ”            | Boolean            | This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.                                                                          |
| My Picture + 50          | Picture            | This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture.                                                            |
| ->[People]Name           | Pointer            | This expression returns a pointer to the field called [People]Name.                                                                                                             |
| Table (1)                | Pointer            | This is a command that returns a pointer to the first table.                                                                                                                    |
| JSON Parse (MyString)    | Object             | This is a command that returns MyString as an object (if proper format)                                                                                                         |
| JSON Parse (MyJSONArray) | Collection         | This is a command that returns MyJSONArray as a collection (if proper format)                                                                                                   |
| Form.pageNumber          | Object property    | An object property is an expression that can be of any supported type                                                                                                           |
| Col[5]                   | Collection element | A collection element is an expression that can be of any supported type                                                                                                         |
| $entitySel[0]            | Entity             | A element of an ORDA entity selection is an expression of the entity type. This kind of expression is **non-assignable**                                                        |


### Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them. In 4D, expressions can be **assignable**. An expression is assignable when it can be used on the right side of an assignation. Beispiel:

```4d
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```

In general, expressions that use an operator are non-assignable. For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.

## Pointers

The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements.

A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.

```4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Comments

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously.

#### Single line comments (//)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Beispiel:

```4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
 End for
```

#### Inline or multiline comments (/* */)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Beispiel:

```4d
For /* inline comment */ ($vCounter;1;100)
    ...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Beispiel:

```4d
For ($vCounter;1;100)
/*
comments  
    /* 
    other comments
    */
*/
...
End for
```