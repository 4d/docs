---
id: transformation-tags
title: Transformation tags
---

4D provides a set of transformation tags which allow you to insert references to 4D variables or expressions, or to perform different types of processing within a source text, referred to as a "template". These tags are interpreted when the source text is executed and generate an output text.

This principle is used in particular by the 4D Web server to build [web template pages](WebServer/templates.md).

These tags are generally to be inserted as HTML type comments (`<!--#Tag Contents-->`) but an [xml-compliant alternative syntax](#alternative-syntax-for-4dtext-4dhtml-4deval) is available for some of them.

It is possible to mix several types of tags. For example, the following HTML structure is entirely feasible:

```html
<HTML>
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
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```




## Principles for using tags

### Parsing

Parsing the contents of a *template* source is done in two contexts:

- Using the `PROCESS 4D TAGS` command; this command accepts a *template* as input, as well as optional parameters and returns a text resulting from the processing.

- Using 4D's integrated HTTP server: [template pages](WebServer/templates.md) sent by means of the `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (text/html type BLOB), `WEB SEND TEXT` commands, or called using URLs. In this last case, for reasons of optimization, pages that are suffixed with “.htm” and “.html” are NOT parsed. In order to parse HTML pages in this case, you must add the suffix “.shtm” or “.shtml” (for example, <http://www.server.com/dir/page.shtm>).

### Recursive processing  

4D tags are interpreted recursively: 4D always attempts to reinterpret the result of a transformation and, if a new transformation has taken place, an additional interpretation is performed, and so on until the product obtained no longer requires any further transformation. For example, given the following statement:

```html
<!--#4DHTML [Mail]Letter_type-->
```

If the `[Mail]Letter_type` text field itself contains a tag, for example `<!--#4DSCRIPT/m_Gender-->`, this tag will be evaluated recursively after the interpretation of the 4DHTML tag.

This powerful principle meets most needs related to text transformation. Note, however, that in some cases this can also allow malicious code to be inserted in the web context, [which can be avoided](WebServer/templates.md#prevention-of-malicious-code-insertion).

### Identifiers with tokens

To ensure the correct evaluation of expressions processed via tags, regardless of the language or 4D version, it's recommended to use the tokenized syntax for elements whose name may vary over versions (commands, tables, fields, constants). For example, to insert the `Current time` command, enter `Current time:C178`.

### Using the "." as decimal separator

4D always uses the period character (.) as a decimal separator when evaluating a numerical expression using a 4D tag `4DTEXT`, `4DHTML`, and `4DEVAL`. Regional settings are ignored. This feature facilitates code maintenance and compatibility between 4D languages and versions.

## 4DBASE

#### Syntax: `<!--#4DBASE folderPath-->`

The `<!--#4DBASE -->` tag designates the working directory to be used by the `<!--#4DINCLUDE-->` tag.

When it is called in a Web page, the `<!--#4DBASE -->` tag modifies all subsequent `<!--#4DINCLUDE-->` calls on this page, until the next `<!--........-->`, if any. If the`<!--#4DBASE -->` folder is modified from within an included file, it retrieves its original value from the parent file.

The *folderPath* parameter must contain a pathname relative to the current page and it must end with a slash (`/`). The designated folder must be located inside the Web folder.

Pass the "WEBFOLDER" keyword to restore the default path (relative to the page).

The following code, which must specify a relative path for each call:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

... is equivalent to:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
```

For example, to set a directory for the home page:

```html
/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
```

In the "head.html" file, the current folder is modified through `<!--#4DBASE -->`, without this changing its value in "Index.html":

```html
/* Head.htm */
/* the working directory here is relative to the included file (FR/ or US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main.css-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
```

## 4DCODE

#### Syntax: `<!--#4DCODE codeLines-->`

The `4DCODE` tag allows you to insert a multi-line 4D code block in a template.

When a `<!--#4DCODE` sequence is detected that is followed by a space, a CR or a LF character, 4D interprets all the lines of code up to the next `-->` sequence. The code block itself can contain carriage returns, line feeds, or both; it will be interpreted sequentially by 4D.

For example, you can write in a template:

```html
<!--#4DCODE
//PARAMETERS initialization
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...your code here
If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if
End if
-->
```

Here are the 4DCODE tag features:

- The `TRACE` command is supported and activates the 4D debugger, thus allowing you to debug your template code.
- Any error will display the standard error dialog that lets the user stop code execution or enter debugging mode.
- The text in between `<!--#4DCODE` and `-->` is split into lines accepting any line-ending convention (cr, lf, or crlf).
- The text is tokenized within the context of the database that called `PROCESS 4D TAGS`. This is important for recognition of project methods for example. The [Available through tags and 4D URLs (4DACTION ...)](WebServer/allowProject.md) method property is not taken into account.
- Even if the text always uses English-US, it is recommended to use the token syntax (:Cxxx) for command and constant names to protect against potential problems due to commands or constants being renamed from one version of 4D to another.

> The fact that 4DCODE tags can call any of the 4D language commands or project methods could be seen as a security issue, especially when the database is available through HTTP. However, since it executes server-side code called from your own template files, the tag itself does not represent a security issue. In this context, as for any Web server, security is mainly handled at the level of remote accesses to server files.

## 4DEACH and 4DENDEACH

#### Syntax: `<!--#4DEACH variable in expression-->` `<!--#4DENDEACH-->`

The `<!--#4DEACH-->` comment allows iterating a specified item over all values of the *expression*. The item is set to a *variable* whose type depends on the *expression* type.

The `<!--#4DEACH-->` comment can iterate through three expression types:

- [collections](#--4deach-item-in-collection--): loop through each element of the collection,
- [entity selections](#--4deach-entity-in-entityselection--): loop through each entity,
- [objects](#--4deach-property-in-object--): loop through each object property.

The number of iterations is evaluated at startup and will not change during the processing. Adding or removing items during the loop is usually not recommended since it may result in missing or redundant iterations.

### `<!--#4DEACH item in collection-->`

This syntax iterates on each *item* of the *collection*. The code portion located between `<!--#4DEACH -->` and `<!--#4DENDEACH-->` is repeated for each collection element.

The *item* parameter is a variable of the same type as the collection elements.

The collection must contain only **elements of the same type**, otherwise an error is returned as soon as the *item* variable is assigned the first mismatched value type.

The number of loops is based on the number of elements of the collection. At each iteration, the *item* variable is automatically filled with the matching element of the collection. The following points must be taken into account:

- If the *item* variable is of the object type or collection type (i.e. if *expression* is a collection of objects or of collections), modifying this variable will automatically modify the matching element of the collection (because objects and collections share the same references). If the variable is of a scalar type, only the variable will be modified.
- The *item* variable gets the same type as the first collection element. If any collection element is not of the same type as the variable, an error is generated and the loop stops.
- If the collection contains elements with a Null value, an error is generated if the *item* variable type does not support Null values (such as longint variables).

#### Example with a collection of scalar values

*getNames* returns a collection of strings. The method has been declared as "[available through 4D tags and URLs](WebServer/allowProject.md)".

```html
 <table class="table">    

        <tr><th>Name</th></tr>

          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Example with a collection of objects

*getSalesPersons* returns a collection of objects.

```html
    <table class="table">    
         <!--#4DCODE
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

### `<!--#4DEACH entity in entitySelection-->`

This syntax iterates on each *entity* of the *entitySelection*. The code portion located between `<!--#4DEACH -->` and `<!--#4DENDEACH-->` is repeated for each entity of the entity selection.

The *entity* parameter is an object variable of the entity selection class.

The number of loops is based on the number of entities of the entity selection. At each iteration, the *entity* object variable is automatically filled with the matching entity of the entity selection.

#### Example with a html table

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds.Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Example with `PROCESS 4D TAGS`

```4d
var customers : cs.CustomersSelection
var $input; $output : Text

customers:=ds.Customers.all()
$input:="<!--#4DEACH $cust in customers-->"
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->"
PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
```

### `<!--#4DEACH property in object-->`

This syntax iterates on each *property* of the *object*. The code portion located between `<!--#4DEACH -->` and `<!--#4DENDEACH-->` is repeated for each property of the object.

The *property* parameter is a text variable automatically filled with the name of the currently processed property.

The properties of the object are processed according to their creation order. During the loop, properties can be added to or removed from the object, without modifying the number of loops that will remain based on the original number of properties of the object.

#### Example with the properties of an object

*getGamers* is a project method that returns an object like ("Mary"; 10; "Ann"; 20; "John"; 40) to figure gamer scores.

```html
    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

## 4DEVAL

#### Syntax: `<!--#4DEVAL expression-->`

#### Alternative syntax: `$4DEVAL(expression)`

The `4DEVAL` tag allows you to assess a 4D variable or expression. Like the [`4DHTML`](#4dhtml) tag, `4DEVAL` does not escape HTML characters when returning text. However, unlike `4DHTML` or [`4DTEXT`](#4dtext), `4DEVAL` allows you to execute any valid 4D statement, including assignments and expressions that do not return any value.

For example, you can execute:

```
 $input:="<!--#4DEVAL a:=42-->" //assignment
 $input:=$input+"<!--#4DEVAL a+1-->" //calculation
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
```

In case of an error during interpretation, the text inserted will be in the form: `<!--#4DEVAL expr-->: ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

## 4DHTML

#### Syntax: `<!--#4DHTML expression-->`

#### Alternative syntax: `$4DHTML(expression)`

Just like the `4DTEXT` tag, this tag lets you assess a 4D variable or expression that returns a value, and insert it as an HTML expression. Unlike the `4DTEXT` tag, this tag does not escape HTML special characters (e.g. ">").

For example, here are the processing results of the 4D text variable myvar with the available tags:

|myvar Value|Tags|Result|
|---|---|---|
|`myvar:="<B>"`|`<!--#4DTEXT myvar-->`|`&lt;B&gt;`|
|`myvar:="<B>"`|`<!--#4DHTML myvar-->`|`<B>`|

In case of an interpretation error, the inserted text will be `<!--#4DHTML myvar--> : ## error # error code`.

> For security reasons, it is recommended to use the [`4DTEXT`](#4dtext) tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

## 4DIF, 4DELSE, 4DELSEIF and 4DENDIF

#### Syntax: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Used with the `<!--#4DELSEIF-->` (optional), `<!--#4DELSE-->` (optional) and `<!--#4DENDIF-->` comments, the `<!--#4DIF expression-->` comment offers the possibility to execute portions of code conditionally.

The *expression* parameter can contain any valid 4D expression returning a Boolean value. It must be indicated within parenthesis and comply with the 4D syntax rules.


The `<!--#4DIF expression-->` ... `<!--#4DENDIF-->` blocks can be nested in several levels. Like in 4D, each `<!--#4DIF expression-->` must match a `<!--#4DENDIF-->`.

In case of an interpretation error, the text "`<!--#4DIF expression-->`: A Boolean expression was expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`. Likewise, if there are not as many `<!--#4DENDIF-->` as `<!--#4DIF -->`, the text "`<!--#4DIF expression-->`: 4DENDIF expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`.

Using the `<!--#4DELSEIF-->` tag, you can test an unlimited number of conditions. Only the code that follows the first condition evaluated as `True` is executed. If no conditions are true, no statement is executed (if there is no final `<!--#4DELSE-->`).
You can use a `<!--#4DELSE-->` tag after the last `<!--#4DELSEIF-->`. If all the conditions are false, the statements following the `<!--#4DELSE-->` are executed.

The two following codes are equivalent.

Code using `4DELSE` only:

```html
<!--#4DIF Condition1-->
  /* Condition1 is true*/
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* Condition2 is true*/
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* Condition3 is true */
        <!--#4DELSE-->
            /*None of the conditions are true*/
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
```

Similar code using the `4DELSEIF` tag:

```
<!--#4DIF Condition1-->
     /* Condition1 is true*/
<!--#4DELSEIF Condition2-->
     /* Condition2 is true*/
<!--#4DELSEIF Condition3-->
    /* Condition3 is true */
<!--#4DELSE-->
    /* None of the conditions are true*/
<!--#4DENDIF-->
```

This example of code inserted in a static HTML page displays a different label according the `vname#""` expression result:

```html
<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
```

This example inserts different pages depending on which user is connected:

```html
<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
```

## 4DINCLUDE

#### Syntax: `<!--#4DINCLUDE path-->`

This tag is mainly designed to include an HTML page (indicated by the *path* parameter) in another HTML page. By default, only the body of the specified HTML page, i.e. the contents found within the `<body>` and `</body>` tags, is included (the tags themselves are not included). This lets you avoid conflicts related to meta tags present in the headers.

However, if the HTML page specified does not contain `<body>``</body>` tags, the entire page is included. It is up to you to verify the consistency of the meta tags.

The `<!--#4DINCLUDE -->` comment is very useful for tests (`<!--#4DIF-->`) or loops (`<!--#4DLOOP-->`). It is very convenient to include banners according to a criteria or randomly.
When including, regardless of the file name extension, 4D analyzes the called page and then inserts the contents (modified or not) in the page originating the `4DINCLUDE` call.

An included page with the `<!--#4DINCLUDE -->` comment is loaded in the Web server cache the same way as pages called via a URL or sent with the `WEB SEND FILE` command.

In *path*, put the path leading to the document to include. Warning: In the case of a `4DINCLUDE` call, the path is relative to the document being analyzed, that is, the "parent" document. Use the slash character (/) as a folder separator and the two dots (..) to go up one level (HTML syntax). When you use the `4DINCLUDE` tag with the `PROCESS 4D TAGS` command, the default folder is the project folder.

> You can modify the default folder used by the `4DINCLUDE` tag in the current page, using the `<!--#4DBASE -->` tag (see below).

The number of `<!--#4DINCLUDE path-->` within a page is unlimited. However, the `<!--#4DINCLUDE path-->` calls can be made only at one level. This means that, for example, you cannot insert `<!--#4DINCLUDE mydoc3.html-->` in the *mydoc2.html* body page, which is called by `<!--#4DINCLUDE mydoc2-->` inserted in *mydoc1.html*. Furthermore, 4D verifies that inclusions are not recursive.

In case of error, the inserted text is "`<!--#4DINCLUDE path-->` :The document cannot be opened".

Examples:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP and 4DENDLOOP

#### Syntax: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

This comment allows repetition of a portion of code as long as the condition is fulfilled. The portion is delimited by `<!--#4DLOOP-->` and `<!--#4DENDLOOP-->`.

The `<!--#4DLOOP condition-->` ... `<!--#4DENDLOOP-->` blocks can be nested. Like in 4D, each `<!--#4DLOOP condition-->` must match a `<!--#4DENDLOOP-->`.

There are five kinds of conditions:

### `<!--#4DLOOP [table]-->`

This syntax makes a loop for each record from the table current selection in the current process. The code portion located between the two comments is repeated for each current selection record.

> When the `4DLOOP` tag is used with a table, records are loaded in "Read only" mode.

The following code:

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
    NEXT RECORD([People])
 End while
```

### `<!--#4DLOOP array-->`

This syntax makes a loop for each array item. The array current item is increased when each code portion is repeated.

> This syntax cannot be used with two dimension arrays. In this case, it is better to combine a method with nested loops.

The following code example:

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

This syntax makes a loop as long as the method returns `True`. The method takes a Long Integer parameter type. First it is called with the value 0 to allow an initialization stage (if necessary); it is then called with the values 1 ,then 2, then 3 and so on, as long as it returns `True`.

For security reasons, within a Web process, the `On Web Authentication` database method can be called once just before the initialization stage (method execution with 0 as parameter). If the authentication is OK, the initialization stage will proceed.

`C_BOOLEAN($0)` and `C_LONGINT($1)` MUST be declared within the method for compilation purposes.

The following code example:

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
```

The `my_method` method can be as follows:

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `Initialisation
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `Stops the loop
    End if
 End if
```

### `<!--#4DLOOP expression-->`

With this syntax, the `4DLOOP` tag makes a loop as long as the *expression* returns `True`. The expression can be any valid Boolean expression and must contain a variable part to be evaluated in each loop to avoid infinite loops.

For example, the following code:

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

...produces the following result:

```

0

1
2
3
```

### `<!--#4DLOOP pointerArray-->`

In this case, the `4DLOOP` tag works like it does with an array: it makes a loop for each element of the array referenced by the pointer. The current array element is increased each time the portion of code is repeated.

This syntax is useful when you pass an array pointer as a parameter to the `PROCESS 4D TAGS` command.

Example:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

In case of an interpretation error, the text "`<!--#4DLOOP expression-->`: description" is inserted instead of the contents located between `<!--#4DLOOP -->` and `<!--#4DENDLOOP-->`.

The following messages can be displayed:

- Unexpected expression type (standard error);
- Incorrect table name (error on the table name);
- An array was expected (the variable is not an array or is a two dimension array);
- The method does not exist;
- Syntax error (when the method is executing);
- Access error (you do not have the appropriate access privileges to access the table or the method).
- 4DENDLOOP expected (the `<!--#4DENDLOOP-->` number does not match the `<!--#4DLOOP -->`).

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

## 4DTEXT

#### Syntax: `<!--#4DTEXT expression-->`

#### Alternative syntax: `$4DTEXT(expression)`

The tag `<!--#4DTEXT expression-->` allows you to insert a reference to a 4D variable or expression returning a value. For example, if you write (in an HTML page):

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
- You will usually work with Text variables. However, you can also use BLOB variables. You just need to generate BLOBs in `Text without length` mode.

## Alternative syntax for 4DTEXT, 4DHTML, 4DEVAL

Several existing 4D transformation tags can be expressed using a $-based syntax:

#### $4dtag (expression)

can be used instead of

#### `<!--#4dtag expression-->`

This alternative syntax is available only for tags used to return processed values:

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(Other tags, such as 4DIF or 4DSCRIPT, must be written with the regular syntax).

For example, you can write:

```html
$4DEVAL(UserName)
```

instead of:

```html
<!--#4DEVAL(UserName)-->
```

The main advantage of this syntax is that it allows you to write XML-compliant templates. Some 4D developers need to create and validate XML-based templates using standard XML parser tools. Since the "<" character is invalid in an XML attribute value, it was not possible to use the "`<!-- -->`" syntax of 4D tags without breaking the document syntax. On the other hand, escaping the "<" character will prevent 4D from interpreting the tags correctly.

For example, the following code would cause an XML parsing error because of the first "<" character in the attribute value:

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

Using the $ syntax, the following code is validated by the parser:

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

Note that `$4dtag` and `<--#4dtag -->` are not strictly equivalent: unlike `<--#4dtag -->`, `$4dtag` processing does not interpret 4D tags [recursively](#recursive-processing). `$` tags are always evaluated once and the result is considered as plain text.

The reason for this difference is to prevent malicious code injection. As [explained below](#prevention-of-malicious-code-insertion), it is strongly recommended to use `4DTEXT` tags instead of `4DHTML` tags when handling user text to protect against unwanted reinterpretation of tags: with `4DTEXT`, special characters such as "<" are escaped, thus any 4D tags using the `<!--#4dtag expression -->` syntax will lose their particular meaning. However, since `4DTEXT` does not escape the `$` symbol, we decided to break support for recursion in order to prevent malicious injection using the `$4dtag (expression)` syntax.

The following examples show the result of processing depending on the syntax and tag used:

```4d
  // example 1
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //4D will quit!
```

```4d
  // example 2
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: <!--#4DHTML QUIT 4D-->"
```

```4d
  // example 3
 myName:="$4DEVAL(QUIT 4D)" //malicious injection
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: $4DEVAL(QUIT 4D)"
```

Note that the `$4dtag` syntax supports matching pairs of enclosed quotes or parenthesis. For example, suppose that you need to evaluate the following complex (unrealistic) string:

```
String(1) + "\"(hello)\""
```

You can write:

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 -->output is 1"(hello)"
```
