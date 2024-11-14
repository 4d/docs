---
id: quick-tour
title: A Quick Tour
sidebar_label: A Quick Tour
---

Using the 4D language, printing the traditional "Hello, world!" message on screen can be done in several ways. The most simple is probably to write the following single line in a project method:

```4d  
ALERT("Hello, World!")
```

This code will display a platform-standard alert dialog box with the "Hello, World!" message, containing an OK button. To execute the code, you just need to click on the execution button in the Code Editor:

![hello-world](../assets/en/Concepts/helloworld.png)

Or, you could attach this code to a button in a form and execute the form, in which case clicking on the button would display the alert dialog box. In any cases, you have just executed your first line of 4D code!


## Assigning Values

Data can be put into and copied out of variables, fields, array elements... Putting data into a variable is called assigning the data to the variable and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields or array elements.

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

You MUST distinguish the assignment operator := from the other operators. Rather than combining expressions into a new one, the assignment operator copies the value of the expression to the right of the assignment operator into the variable or field to the left of the operator.

**Important:** Do NOT confuse the assignment operator := with the equality comparison operator =. A different assignment operator (and not =) was deliberately chosen to avoid issues and confusion which often occur with == or === in other programming languages. Such errors are often difficult to recognize by the compiler and lead to time-consuming troubleshooting.

## Variables

The 4D language is strongly typed, although some flexibility is allowed in many cases. You create a typed variable using the `var` keyword. For example, to create a variable of the date type, you can write:

```4d
var MyDate : Date
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs.Person
//variable of the Person user class
```


Even if it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them. For example, if you want a variable that will hold the current date plus 30 days, you can write:

```4d
MyOtherDate:=Current date+30
```

The line of code reads “MyOtherDate gets the current date plus 30 days.” This line creates the variable, assigns it with both the (temporary) date type and a content. A variable created by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and change of type dynamically. This flexibility does not apply to variables declared with the `var` keyword (their type cannot change) and in [compiled mode](interpreted.md) where the type can never be changed, regardless of how the variable was created.

## Commands

4D commands are built-in methods to perform an action. Commands are often used with parameters, which are passed in brackets () and separated by semicolons (;). Example:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Some commands are attached to collections or objects, in which case they are named functions and are used using the dot notation. For example:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

You can use 4D plug-ins or 4D components that add new commands to your 4D development environment.

There are many plug-ins proposed by the 4D user community or 3rd-party developers on the market. For example, using the [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) on macOS:

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

4D proposes an extensed set of predefined constants, whose values are accessible by name. They allow writing more readable code. For example, `Read Mode` is a constant (value 2).

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // open doc in read only mode
```

> Predefined constants appear <u>underlined</u> by default in the 4D Code Editor.



## Methods

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. Project methods are user-defined methods that contain commands, operators, and other parts of the language.
Project methods are generic methods, but there are other kinds of methods: Object methods, Form methods, Table methods (Triggers), and Database methods.

A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex.

For example, the following line is a statement that will display a confirmation dialog box:

```4d
CONFIRM("Do you really want to close this account?";"Yes";"No")
```

A method also contains tests and loops that control the flow of the execution. 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

The following example goes through all the characters of the text vtSomeText:

```4d
For($vlChar;1;Length(vtSomeText))
	//Do something with the character if it is a TAB


	If(Character code(vtSomeText[[$vlChar]])=Tab)
		//...
	End if
End for
```

A project method can call another project method with or without parameters (arguments). The parameters are passed to the method in parentheses, following the name of the method. Each parameter is separated from the next by a semicolon (;). The parameters are directly available within the called method if they have been declared. A method can return a single value in a parameter, which have to be declared. When you call a method, you just type its name:

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something  
#DECLARE ($in : Text) -> $out : Text
$out:=Uppercase($in)
```


## Data Types

In the language, the various types of data that can be handled are referred to as data types. There are basic data types (string, numeric, date, time, Boolean, picture, pointers, arrays), and also composite data types (BLOBs, objects, collections).

Note that string and numeric data types can be associated with more than one type of field. When data is put into a field, the language automatically converts the data to the correct type for the field. For example, if an integer field is used, its data is automatically treated as numeric. In other words, you need not worry about mixing similar field types when using the language; it will manage them for you.

However, when using the language it is important that you do not mix different data types. In the same way that it makes no sense to store “ABC” in a Date field, it makes no sense to put “ABC” in a variable used for dates. In most cases, 4D is very tolerant and will try to make sense of what you are doing. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as “abc”. In this case, you might write:

```4d
[Products]Part Number:=String(Number)+"abc"
```

If _Number_ is 17, then _[Products]Part Number_ will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## Objects and collections

You can handle 4D language objects and collections using the object notation to get or to set their values. For example:

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

```4d
$f:=New object
$f.message:=Formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```

To access a collection element, you have to pass the element number embedded in square brackets:

```4d
var myColl : Collection
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Classes

The 4D language supports object classes. Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the *class store* (`cs`) and use the `new()` member function. You can pass parameters.

```4d  
// in a 4D method
$o:=cs.myClass.new()
```

In the `myClass` class method, use the `Function <methodName>` statement to define the *methodName* class member function. A class member function can receive and return parameters like any method, and use `This` as the object instance.

```4d  

//in the myClass.4dm file
Function hello -> $welcome : Text
  $welcome:="Hello "+This.who
```

To execute a class member function, just use the `()` operator on the member function of the object instance.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d  
//in the Rectangle.4dm file
Class constructor ($width : Integer; $height : Integer)
This.height:=$height
This.width:=$width
This.name:="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. For example:

```4d  
//in the Square.4dm file
Class extends rectangle

Class constructor ($length : Integer)
  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height
Super($length;$length)

This.name:="Square"
```


## Operators

When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:

|Operator|Operation|Example  
|---|---|---|
|+|	Addition | 1 + 2 results in 3
|–|	Subtraction | 3 – 2 results in 1
|*|	Multiplication | 2 * 3 results in 6
|/|	Division | 6 / 2 results in 3|

Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

|Data Type	|Operation|	Example  
|---|---|---|
|Number|	Addition	|1 + 2 adds the numbers and results in 3
|Text	|Concatenation	|“Hello ” + “there” concatenates (joins together) the strings and results in “Hello there”
|Date and Number	|Date addition	|!1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989|


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

|Expression|Type|Description|
|---|---|---|
|“Hello”|Text	|The word Hello is a string constant, indicated by the double quotation marks.|
|“Hello ” + “there”|	Text|	Two strings, “Hello ” and “there”, are added together (concatenated) with the string concatenation operator (+). The string “Hello there” is returned.|
|“Mr. ” + [People]Name|	Text|	Two strings are concatenated: the string “Mr. ” and the current value of the Name field in the People table. If the field contains “Smith”, the expression returns “Mr. Smith”.|
|Uppercase("smith")	|Text	|This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. It returns “SMITH”.|
|4	|Number |	This is a number constant, 4.|
|4 * 2|	Number|	Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.|
|myButton	|Number|	This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not.|
|!1997-01-25!|	Date|	This is a date constant for the date 1/25/97 (January 25, 1997).|
|Current date+ 30|	Date	|This is a date expression that uses the `Current date` command to get today’s date. It adds 30 days to today’s date and returns the new date.|
|?8:05:30?	|Time|	This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.|
|?2:03:04? + ?1:02:03?	|Time	|This expression adds two times together and returns the time 3:05:07.|
|True|	Boolean|	This command returns the Boolean value TRUE.|
|10 # 20|Boolean	|This is a logical comparison between two numbers. The number sign (#) means “is not equal to”. Since 10 “is not equal to” 20, the expression returns TRUE.|
|“ABC” = “XYZ”	|Boolean	|This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.|
|My Picture + 50	|Picture	|This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture.|
|->[People]Name	|Pointer	|This expression returns a pointer to the field called [People]Name.|
|Table (1)|	Pointer	|This is a command that returns a pointer to the first table.|
|JSON Parse (MyString)|	Object|	This is a command that returns MyString as an object (if proper format)|
|JSON Parse (MyJSONArray)	|Collection	|This is a command that returns MyJSONArray as a collection (if proper format)|
|Form.pageNumber|Object property|An object property is an expression that can be of any supported type
|Col[5]|Collection element|A collection element is an expression that can be of any supported type|  
|$entitySel[0]|Entity|A element of an ORDA entity selection is an expression of the entity type. This kind of expression is **non-assignable**|  

### Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them.
In 4D, expressions can be **assignable**. An expression is assignable when it can be used on the left side of an assignation. For example:

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

## Code on several lines

You can write a single statement on several lines by terminating each line of the statement with a trailing backslash `\` character. The 4D language will consider all the lines at once. For example, both the following statements are equivalent:

```4d
$str:=String("hello world!")
```

```4d
$str:=String("hello"+\
" world"+\
"!")
```

## Comments

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously.

#### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Example:

```4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
End for
```

#### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Example:

```4d
For /* inline comment */ ($vCounter;1;100)
	...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Example:

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

## Escape sequences  

The 4D language allows you to use escape sequences (also called escape characters). An escape sequence is a sequence of characters that can be used to replace a "special" character.

The sequence consists of a backslash `\`, followed by a character. For instance, `\t` is an escape sequence for the **Tab** character. Escape sequences facilitate the entry of special characters: the previous example (`\t`) replaces the entry "Character(Tab)".

In 4D, the following escape sequences can be used:

|Escape sequence|Character replaced|
|---|---|
| `\n` | LF (Line feed) |
| `\t` | HT (Tab) |
| `\r` | CR (Carriage return) |
| `\\` | `\` (Backslash) |
| `\"` | " (Quotation marks) |

> It is possible to use either upper or lower case in escape sequences.

In the following example, the **Carriage return** character (escape sequence `\r`) is inserted in a statement in order to obtain a dialog box:

`ALERT("The operation has been completed successfully.\rYou may now disconnect.")`
