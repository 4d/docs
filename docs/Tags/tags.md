---
id: tags
title: 4D Transformation tags
---

4D provides a set of transformation tags which allow you to insert references to 4D variables or expressions, or to perform different types of processing within a source text, referred to as a "template". These tags are interpreted when the source text is executed and generate an output text.

This principle is used in particular by the 4D Web server to build [web template pages](WebServer/templates.md).

These tags are generally be inserted as HTML type comments (`<!--#Tag Contents-->`). It is possible to mix several types of tags. For example, the following HTML structure is entirely feasible:

```html
<HTML>
...
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (Loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (Subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><BR>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```


## Tag parsing

Parsing the contents of a *template* source is done in two contexts:

- Using the `PROCESS 4D TAGS` command; this command accepts a *template* as input, as well as optional parameters and returns a text resulting from the processing.
- Using 4D's integrated HTTP server: [template pages](WebServer/templates.md) sent by means of the `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB), `WEB SEND TEXT` commands, or called using URLs. In this last case, for reasons of optimization, pages that are suffixed with “.htm” and “.html” are NOT parsed. In order to parse HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, http://www.server.com/dir/page.shtm).

## Tag overview

The following table lists the available 4D transformation tags. For more details, see the description of the tags below.

|Tag|Action|Example|$ Syntax|Comments|
|---|---|---|---|---|
|4DTEXT|Inserts 4D variables and expressions as text|`<!--#4DTEXT [Customer]Name-->`|X|Recommended if data processed externally in order to avoid malicious code injections|
|4DHTML|Inserts HTML code|`<!--#4DHTML <br/>-->`|X|Not recommended if data processed externally|
|4DEVAL|Evaluates any 4D expression|`<!--#4DEVAL a:=20-->`|X|Not recommended if data processed externally|
|4DSCRIPT/|Executes a 4D method with a parameter|`<!--#4DSCRIPT/MyMethod/MyParam-->`|||	
|4DINCLUDE|Includes an HTML page inside another|`<!--#4DINCLUDE subpage.html-->`|||	
|4DBASE|Designates the file used by 4DINCLUDE|`<!--#4DBASE ../file/-->`|||
|4DCODE|Inserts 4D code|`<!--#4DCODE ALERT(myVar)-->`||Supports CR, LF (4D code blocks)|
|4DIF, 4DELSE, 4DELSEIF, 4DENDIF|Inserts conditions into code within tags|`<!--#4DIF (myVar=1)-->`|||		
|4DLOOP, 4DENDLOOP|Inserts loops into code within tags|`<!--#4DLOOP [table]-->`||Can be used with tables, arrays, methods, expressions, pointerArrays|

**About $ Syntax:** The tags should generally be inserted as HTML comments (<!--#Tag Content-->) in the source text. An alternative syntax [using $] is possible under certain conditions for tags returning values, to make them conform to XML.

## Principles for using tags

### Accessing 4D methods via the Web

Running a 4D method with `4DTEXT`, `4DHTML`, `4DEVAL`, `4DSCRIPT`, `4DIF`, `4DELSEIF` or `4DLOOP` from a web request is subject to the [Available through tags and 4D URLs (4DACTION ...)](WebServer/allowProject.md) attribute value defined in the properties of the method. If the attribute is not checked for the method, it can not be called from a web request.

### Recursive processing

4D tags are interpreted recursively: 4D always attempts to reinterpret the result of a transformation and, if a new transformation has taken place, an additional interpretation is performed, and so on until the product obtained no longer requires any further transformation. For example, given the following statement:

```html
<!--#4DHTML [Mail]Letter_type-->
```

If the [Mail]Letter_type text field itself contains a tag, for example `<!--#4DSCRIPT/m_Gender-->`, this tag will be evaluated recursively after the interpretation of the `4DHTML` tag.

This powerful principle meets most needs related to text transformation. Note, however, that in some cases this can also allow [malicious code](prevention-of-malicious-code-insertion) to be inserted.

### Prevention of malicious code insertion

4D transformation tags accept different types of data as parameters: text, variables, methods, command names, etc. When this data is provided by your own code, there is no risk of malicious code insertion since you control the input. However, your application code often works with data that was, at one time or another, introduced through an external source (user input, import, etc.). In this case, it is advisable to not use transformation tags such as `4DEVAL` or `4DSCRIPT`, which evaluate parameters, directly with this sort of data.

In addition, according to the principle of [recursion](#recursive-processing), malicious code may itself include transformation tags. In this case, it is imperative to use the `4DTEXT tag`. Imagine, for example, a Web form field named "Name", where users must enter their name. This name is then displayed using a `<!--#4DHTML vName-->` tag in the page. If text of the "<!--#4DEVAL QUIT 4D-->" type is inserted instead of the name, interpreting this tag will cause the application to be exited.

To avoid this risk, you can just use the `4DTEXT` tag systematically in this case. Since this tag escapes the special HTML characters, any malicious recursive code that may have been inserted will not be reinterpreted. To refer to the previous example, the "Name" field will contain, in this case, "`&lt;!--#4DEVAL QUIT 4D--&gt;`" which will not be transformed.

### Identifiers with tokens

To ensure the correct evaluation of expressions processed via tags, regardless of the language or 4D version, it's recommended to use the tokenized syntax for elements whose name may vary over versions (commands, tables, fields, constants). For example, to insert the `Current time` command, enter `Current time:C178`. 

### Using the "." as decimal separator

4D always uses the period character (.) as a decimal separator when evaluating a numerical expression using a 4D tag `4DTEXT`, `4DHTML`, and 4DEVAL. Regional settings are ignored. This feature facilitates code maintenance and compatibility between 4D languages and versions.


## 4DTEXT 

#### Syntax: `<!--#4DTEXT 4DExpression-->`
#### Alternative syntax: `$4DTEXT(4DExpression)`


The tag `<!--#4DTEXT 4DExpression-->` allows you to insert a reference to a 4D variable or expression returning a value. For example, if you write (in an HTML page):

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable `vtSiteName` will be inserted in the HTML page when it is sent. This value is inserted as simple text, special HTML characters such as ">" are automatically escaped. 

You can also insert 4D expressions. You can for example directly insert the contents of a field (`<!--#4DTEXT [tableName]fieldName-->`), an array element (`<!--#4DTEXT tabarr{1}-->`) or a method returning a value (`<!--#4DTEXT mymethod-->`). The expression conversion follows the same rules as the variable ones. Moreover, the expression must comply with 4D syntax rules.

> For security reasons, it is recommended to use this tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

In case of an evaluation error, the inserted text will appear as `<!--#4DTEXT myvar--> : ## error # error code`.

- You must use process variables. 
- You can display the content of a picture field. However, it is not possible to display the content of a picture array item.
- It is possible to display the contents of an object field by means of a 4D formula. For example, you can write `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
- You will usually work with Text variables. However, you can also use BLOB variables. You just need to generate BLOBs `Text without length` mode.


## 4DHTML 

#### Syntax: `<!--#4DHTML 4DExpression-->`
#### Alternative syntax: `$4DHTML(4DExpression)`


Just like the `4DTEXT` tag, this tag lets you assess a variable or 4D expression that returns a value, and insert it as an HTML expression. Unlike the `4DTEXT` tag, this tag does not escape HTML special characters (e.g. ">").

For example, here are the processing results of the 4D text variable myvar with the available tags:

|myvar Value|Tags|Result|
|---|---|---|
|`myvar:="<B>"`|`<!--#4DTEXT myvar-->`|`&lt;B&gt;`|
|`myvar:="<B>"`|`<!--#4DHTML myvar-->`|`<B>`|

In case of an interpretation error, the inserted text will be `<!--#4DHTML myvar--> : ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).


## 4DEVAL 

#### Syntax: `<!--#4DEVAL 4DExpression-->`
#### Alternative syntax: `$4DEVAL(4DExpression)`

The `4DEVAL` tag allows you to assess a variable or a 4D expression. Like the [`4DHTML`](#4dhtml) tag, `4DEVAL` does not escape HTML characters when returning text. However, unlike `4DHTML` or [`4DTEXT`](#4dtext), `4DEVAL` allows you to execute any valid 4D statement, including assignments and expressions that do not return any value.

For example, you can execute:

```
 $input:="<!--#4DEVAL a:=42-->" //assignment
 $input:=$input+"<!--#4DEVAL a+1-->" //calculation
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
```

In case of an error during interpretation, the text inserted will be in the form: `<!--#4DEVAL expr-->: ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).



## 4DSCRIPT/

#### Syntax: `<!--#4DSCRIPT/MethodName/MyParam-->`

The `4DSCRIPT` tag allows you to execute 4D methods when processing the template. The presence of the `<!--#4DSCRIPT/MyMethod/MyParam-->` tag as an HTML comment launches the execution of the `MyMethod` method with the `Param` parameter as a string in `$1`.

> If the tag is called in the context of a Web process, when the page is loaded, 4D calls the `On Web Authentication` database method (if it exists). If it returns True, 4D executes the method.

The method must return text in `$0`. If the string starts with the code character 1, it is considered as HTML (the same principle is true for the `4DHTML` tag).

For example, let’s say that you insert the following comment `“Today is <!--#4DSCRIPT/MYMETH/MYPARAM-->”` into a template Web page. When loading the page, 4D calls the `On Web Authentication` database method, then calls the `MYMETH` method and passes the string “/MYPARAM” as the parameter `$1`. The method returns text in $0 (for example "12/31/21"); the expression "`Today is <!--#4DSCRIPT/MYMETH/MYPARAM––>`" therefore becomes "Today is 12/31/21".

The `MYMETH` method is as follows:

```4d
  //MYMETH
 C_TEXT($0;$1) //These parameters must always be declared
 $0:=String(Current date)
```

> A method called by `4DSCRIPT` must not call interface elements (`DIALOG`, `ALERT`, etc.).

As 4D executes methods in their order of appearance, it is absolutely possible to call a method that sets the value of many variables that are referenced further in the document, whichever mode you are using. You can insert as many `<!--#4DSCRIPT...-->` comments as you want in a template.








The tag `<!--#4DHTML 4DExpression-->` allows you to insert a reference to a 4D variable or expression returning a value. For example, if you write (in an HTML page):

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable `vtSiteName` will be inserted in the HTML page when it is sent. This value is inserted as simple text, special HTML characters such as ">" are automatically escaped. 

You can also insert 4D expressions. You can for example directly insert the contents of a field (`<!--#4DTEXT [tableName]fieldName-->`), an array element (`<!--#4DTEXT tabarr{1}-->`) or a method returning a value (`<!--#4DTEXT mymethod-->`). The expression conversion follows the same rules as the variable ones. Moreover, the expression must comply with 4D syntax rules.

In case of an evaluation error, the inserted text will appear as `<!--#4DTEXT myvar--> : ## error # error code`.

- You must use process variables. 
- You can display the content of a picture field. However, it is not possible to display the content of a picture array item.
- It is possible to display the contents of an object field by means of a 4D formula. For example, you can write `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
For security reasons, it is recommended to use this tag when processing data introduced from outside the application, in order to prevent the insertion of malicious code (see the section below).
You will usually work with Text variables. However, you can also use BLOB variables. You just need to generate BLOBs `Text without length` mode.




## While...End while

The formal syntax of the `While...End while` control flow structure is:
```4d
 While(Boolean_Expression)
    statement(s)
 End while
```
A `While...End while` loop executes the statements inside the loop as long as the Boolean expression is TRUE. It tests the Boolean expression at the beginning of the loop and does not enter the loop at all if the expression is FALSE.

It is common to initialize the value tested in the Boolean expression immediately before entering the `While...End while` loop. Initializing the value means setting it to something appropriate, usually so that the Boolean expression will be TRUE and `While...End while` executes the loop.

The Boolean expression must be set by something inside the loop or else the loop will continue forever. The following loop continues forever because _NeverStop_ is always TRUE:
```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

If you find yourself in such a situation, where a method is executing uncontrolled, you can use the trace facilities to stop the loop and track down the problem. For more information about tracing a method, see the [Error handling](error-handling.md) page.

### Example

```4d
 CONFIRM("Add a new record?") //The user wants to add a record?
 While(OK=1) //Loop as long as the user wants to
    ADD RECORD([aTable]) //Add a new record
 End while //The loop always ends with End while
```

In this example, the `OK` system variable is set by the `CONFIRM` command before the loop starts. If the user clicks the **OK** button in the confirmation dialog box, the `OK` system variable is set to 1 and the loop starts. Otherwise, the `OK` system variable is set to 0 and the loop is skipped. Once the loop starts, the `ADD RECORD` command keeps the loop going because it sets the `OK` system variable to 1 when the user saves the record. When the user cancels (does not save) the last record, the `OK` system variable is set to 0 and the loop stops.

## Repeat...Until

The formal syntax of the `Repeat...Until` control flow structure is:
```4d
 Repeat
    statement(s)
 Until(Boolean_Expression)
```
A `Repeat...Until` loop is similar to a [While...End while](flow-control#whileend-while) loop, except that it tests the Boolean expression after the loop rather than before. Thus, a `Repeat...Until` loop always executes the loop once, whereas if the Boolean expression is initially False, a `While...End while` loop does not execute the loop at all.

The other difference with a `Repeat...Until` loop is that the loop continues until the Boolean expression is TRUE.

### Example 

Compare the following example with the example for the `While...End while` loop. Note that the Boolean expression does not need to be initialized—there is no `CONFIRM` command to initialize the `OK` variable.

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
``` 

## For...End for 

The formal syntax of the `For...End for` control flow structure is:

```4d
 For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
    statement(s)
 End for
```

The `For...End for` loop is a loop controlled by a counter variable:

- The counter variable *Counter_Variable* is a numeric variable (Real or Long Integer) that the `For...End for` loop initializes to the value specified by *Start_Expression*.
- Each time the loop is executed, the counter variable is incremented by the value specified in the optional value *Increment_Expression*. If you do not specify *Increment_Expression*, the counter variable is incremented by one (1), which is the default.
- When the counter variable passes the *End_Expression* value, the loop stops.

**Important:** The numeric expressions *Start_Expression*, *End_Expression* and *Increment_Expression* are evaluated once at the beginning of the loop. If these expressions are variables, changing one of these variables within the loop will not affect the loop.

**Tip:** However, for special purposes, you can change the value of the counter variable *Counter_Variable* within the loop; this will affect the loop.

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

In some cases, you may want to have a loop whose counter variable is decreasing rather than increasing. To do so, you must specify *Start_Expression* greater than *End_Expression* and a negative *Increment_Expression*. The following examples do the same thing as the previous examples, but in reverse order:

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

If you need to, you can use an *Increment_Expression* (positive or negative) whose absolute value is greater than one.

9. The following loop addresses only the even elements of the array anArray:

```4d
 For($vlElem;2;Size of array(anArray);2)
  //Do something with the element #2,#4...#2n
    anArray{$vlElem}:=...
 End for
```


### Comparing looping structures

Let's go back to the first `For...End for` example. The following example executes 100 iterations:
```4d
 For(vCounter;1;100)
  //Do something
 End for
```

It is interesting to see how the `While...End while` loop and `Repeat...Until` loop would perform the same action. Here is the equivalent `While...End while` loop:
```4d
 $i:=1 //Initialize the counter
 While($i<=100) //Loop 100 times
  //Do something
    $i:=$i+1 //Need to increment the counter
 End while
```

Here is the equivalent `Repeat...Until` loop:
```4d
 $i:=1 //Initialize the counter
 Repeat
  //Do something
    $i:=$i+1 //Need to increment the counter
 Until($i=100) //Loop 100 times
```
**Tip:** The `For...End for` loop is usually faster than the `While...End while` and `Repeat...Until` loops, because 4D tests the condition internally for each cycle of the loop and increments the counter. Therefore, use the `For...End for` loop whenever possible.

### Optimizing the execution of the For...End for loops  

You can use Real and Long Integer variables as well as interprocess, process, and local variable counters. For lengthy repetitive loops, especially in compiled mode, use local Long Integer variables.

10. Here is an example:

```4d
 C_LONGINT($vlCounter) //use local Long Integer variables
 For($vlCounter;1;10000)
  //Do something
 End for
```

### Nested For...End for looping structures

You can nest as many control structures as you (reasonably) need. This includes nesting `For...End for` loops. To avoid mistakes, make sure to use different counter variables for each looping structure.

Here are two examples:

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

The formal syntax of the `For each...End for each` control flow structure is:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)

 End for each
```

The `For each...End for each` structure iterates a specified *Current_item* over all values of the *Expression*. The *Current_item* type depends on the *Expression* type. The `For each...End for each` loop can iterate through three *Expression* types:

- collections: loop through each element of the collection,
- entity selections: loop through each entity,
- objects: loop through each object property.

The following table compares the three types of `For each...End for each`:

||Loop through collections	|Loop through entity selections	|Loop through objects|
|---|---|---|---|
|Current_Item type	|Variable of the same type as collection elements	|Entity	|Text variable|
|Expression type	|Collection (with elements of the same type)	|Entity selection	|Object|
|Number of loops (by default)	|Number of collection elements	|Number of entities in the selection	|Number of object properties|
|Support of begin / end parameters	|Yes	|Yes	|No|

- The number of loops is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.
- By default, the enclosed _statement(s)_ are executed for each value in *Expression*. It is, however, possible to exit the loop by testing a condition either at the begining of the loop (`While`) or at the end of the loop (`Until`).
- The *begin* and *end* optional parameters can be used with collections and entity selections to define boundaries for the loop.
- The `For each...End for each` loop can be used on a **shared collection** or a **shared object**. If your code needs to modify one or more element(s) of the collection or object properties, you need to use the `Use...End use` keywords. Depending on your needs, you can call the `Use...End use` keywords:
	- before entering the loop, if items should be modified together for integrity reasons, or
	- within the loop when only some elements/properties need to be modified and no integrity management is required. 

### Loop through collections 

When `For each...End for each` is used with an _Expression_ of the _Collection_ type, the _Current_Item_ parameter is a variable of the same type as the collection elements. By default, the number of loops is based on the number of items of the collection.

The collection must contain only elements of the same type, otherwise an error will be returned as soon as the _Current_Item_ variable is assigned the first mismatched value type.

At each loop iteration, the _Current_Item_ variable is automatically filled with the matching element of the collection. The following points must be taken into account:

- If the _Current_Item_ variable is of the object type or collection type (i.e. if _Expression_ is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The _Current_Item_ variable must be of the same type as the collection elements. If any collection item is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a **Null** value, an error will be generated if the _Current_Item_ variable type does not support **Null** values (such as longint variables).

#### Example

You want to compute some statistics for a collection of numbers:
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

If *end* is omitted or if *end* is greater than the number of elements in *Expression*, elements are iterated from *begin* until the last one (included).
If the *begin* and *end* parameters are positive values, they represent actual positions of elements in *Expression*.
If *begin* is a negative value, it is recalculed as `begin:=begin+Expression size` (it is considered as the offset from the end of *Expression*). If the calculated value is negative, *begin* is set to 0.

**Note:** Even if begin is negative, the iteration is still performed in the standard order.
If *end* is a negative value, it is recalculed as `end:=end+Expression size`

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

