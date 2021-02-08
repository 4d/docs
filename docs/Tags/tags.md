---
id: tags
title: 4D Transformation tags
---

4D provides a set of transformation tags which allow you to insert references to 4D variables or expressions, or to perform different types of processing within a source text, referred to as a "template". These tags are interpreted when the source text is executed and generate an output text.

This principle is used in particular by the 4D Web server to build [web template pages](WebServer/templates.md).

These tags are generally be inserted as HTML type comments (`<!--#Tag Contents-->`) but an [xml-compliant alternative syntax](#alternative-syntax-for-4dtext-4dhtml-4deval) is available for some of them. 

It is possible to mix several types of tags. For example, the following HTML structure is entirely feasible:

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

**About $ Syntax:** The tags should generally be inserted as HTML comments (`<!--#Tag Content-->`) in the source text. An alternative syntax [using $](#alternative-syntax-for-4dtext-4dhtml-4deval) is possible under certain conditions for tags returning values, to make them XML compliant.

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

4D always uses the period character (.) as a decimal separator when evaluating a numerical expression using a 4D tag `4DTEXT`, `4DHTML`, and `4DEVAL`. Regional settings are ignored. This feature facilitates code maintenance and compatibility between 4D languages and versions.


## 4DBASE

#### Syntax: `<!--#4DBASE folderPath-->`

The `<!--#4DBASE -->` tag designates the working directory to be used by the `<!--#4DINCLUDE-->` tag.

When it is called in a Web page, the `<!--#4DBASE -->` tag modifies all subsequent `<!--#4DINCLUDE-->` calls on this page, until the next `<!--#4DBASE -->, if any. If the `<!--#4DBASE -->` folder is modified from within an included file, it retrieves its original value from the parent file. 

The *folderPath* parameter must contain a pathname relative to the current page and it must end with a slash (/). The designated folder must be located inside the Web folder.

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


## 4DIF, 4DELSE, 4DELSEIF and 4DENDIF

#### Syntax: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Used with the `<!--#4DELSEIF-->` (optional), `<!--#4DELSE-->` (optional) and `<!--#4DENDIF-->` comments, the `<!--#4DIF expression-->` comment offers the possibility to execute portions of code conditionally.

The *expression* parameter can contain any valid 4D expression returning a Boolean value. It must be indicated within parenthesis and comply with the 4D syntax rules.

The `<!--#4DIF expression-->` ... `<!--#4DENDIF-->` blocks can be nested in several levels. Like in 4D, each `<!--#4DIF expression-->` must match a `<!--#4DENDIF-->`.

In case of an interpretation error, the text "`<!--#4DIF expression-->`: A Boolean expression was expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`. Likewise, if there are not as many `<!--#4DENDIF-->` as `<!--#4DIF -->`, the text "`<!--#4DIF expression-->`: 4DENDIF expected" is inserted instead of the contents located between `<!--#4DIF -->` and `<!--#4DENDIF-->`.

Using the `<!--#4DELSEIF-->` tag, you can test an unlimited number of conditions. Only the code that follows the first condition evaluated as `True` is executed. If no conditions are true, no statement is executed (if there is no final `<!--#4DELSE-->`).
You can use a <!--#4DELSE--> tag after the last <!--#4DELSEIF-->. If all the conditions are false, the statements following the <!--#4DELSE--> are executed.

The two following codes are equivalent.

Code using 4DELSE only:

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
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><BR>
<!--#4DENDLOOP-->
```

... could be expressed in 4D language in the following way:

```4d
 FIRST RECORD([People])
 While(Not(End selec tion([People])))
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
<!--#4DTEXT arr_names{arr_names}--><BR>
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
<!--#4DTEXT var--> <BR> 
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

### `<!--#4DLOOP 4DExpression-->`

With this syntax, the `4DLOOP` tag makes a loop as long as the *4DExpression* returns `True`. The expression can be any valid Boolean expression and must contain a variable part to be evaluated in each loop to avoid infinite loops.

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

The reason for this difference is to prevent malicious code injection. As [explained above](#prevention-of-malicious-code-insertion), it is strongly recommended to use `4DTEXT` tags instead of `4DHTML` tags when handling user text to protect against unwanted reinterpretation of tags: with `4DTEXT`, special characters such as "<" are escaped, thus any 4D tags using the `<!--#4dtag expression -->` syntax will lose their particular meaning. However, since `4DTEXT` does not escape the `$` symbol, we decided to break support for recursion in order to prevent malicious injection using the `$4dtag (expression)` syntax.

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

